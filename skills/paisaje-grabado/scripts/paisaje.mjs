// Foto de paisaje -> ilustración tipo grabado en línea azul sobre blanco (franja de paisaje de Huella Local).
// Todo sale de la foto: nada se dibuja ni se mueve de lugar.
//
// Modos:
//   grabado (por defecto)  versión aprobada: líneas de grabado curvadas por la foto + línea nítida + horizonte, cielo blanco
//   psd                    réplica exacta del PSD de Antonio («ilustración FHL.psd»): contorno suave azul + velo lila
//
// uso: node paisaje.mjs <foto> [salida.png] [--modo grabado|psd] [--ancho 3000] [--cielo 60] [--mascara cielo.png]
//      --mascara: imagen en blanco y negro del cielo (blanco = cielo), para fotos con cielo nublado o pálido.
//      --cielo: cuánto más azul que rojo debe ser un píxel para contar como cielo (más alto = más estricto)
import sharp from "sharp";
import path from "node:path";

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf("--" + k); return i >= 0 ? args[i + 1] : d; };
const IN = args[0];
if (!IN) { console.error("uso: node paisaje.mjs <foto> [salida.png] [--modo grabado|psd] [--ancho N] [--cielo 60]"); process.exit(1); }
const OUT = args[1] && !args[1].startsWith("--") ? args[1] : path.join(path.dirname(IN), path.parse(IN).name + "-grabado.png");
const MODO = opt("modo", "grabado"), CIELO = +opt("cielo", 60), MASCARA = opt("mascara", null);

const AZUL = [0x7A, 0x80, 0xA3], LILA = [0xD0, 0xD1, 0xE0];
// curva de niveles de Layer 2, medida en el PSD de Antonio
const NIVELES = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,28,28,29,29,29,30,32,32,33,34,34,35,35,36,37,37,38,39,40,41,42,43,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,58,60,61,62,63,64,66,67,68,70,71,72,74,75,77,78,80,81,83,84,86,88,89,91,93,94,96,98,99,101,103,105,107,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,151,153,155,158,160,162,165,167,170,172,175,178,180,183,186,189,191,195,198,201,204,207,210,213,216,219,222,225,228,231,234,238,242,245,249,255];
const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

const meta = await sharp(IN).metadata();
const W = +opt("ancho", meta.width);
const img = sharp(IN).rotate().removeAlpha().resize({ width: W });
const { data: P, info } = await img.clone().raw().toBuffer({ resolveWithObject: true });
const w = info.width, h = info.height, n = w * h;
const k = w / 5184;        // escala respecto de la foto del PSD (5184 px)
const u = w / 2073.6;      // escala respecto de la versión aprobada (afinada a 2000 px)
const verde = s => img.clone().extractChannel(1).blur(s).raw().toBuffer();
const out = Buffer.alloc(n * 3);

if (MODO === "psd") {
  // Layer 1 copy: invertida + Gaussian Blur radio 26, en Linear Dodge (Add) -> Layer 2 con niveles
  const b = await img.clone().negate({ alpha: false }).blur(Math.max(0.3, 26 * k)).raw().toBuffer();
  for (let i = 0; i < n; i++) {
    const g = Math.round(0.299 * Math.min(255, P[3*i] + b[3*i]) + 0.587 * Math.min(255, P[3*i+1] + b[3*i+1]) + 0.114 * Math.min(255, P[3*i+2] + b[3*i+2]));
    const aAzul = (255 - NIVELES[g]) / 255;   // Color Fill 1: canal verde de Layer 2 invertido
    const aLila = (255 - P[3*i+2]) / 255;     // Color Fill 2: canal azul de la foto invertido
    for (let c = 0; c < 3; c++) { let v = 255 * (1 - aLila) + LILA[c] * aLila; v = v * (1 - aAzul) + AZUL[c] * aAzul; out[3*i+c] = Math.round(v); }
  }
} else {
  const Gs = await verde(Math.max(0.3, 0.7 * u));   // detalle fino
  const Gh = await verde(Math.max(1, 1.9 * u));     // High Pass
  const Gd = await verde(Math.max(2, 30 * u));      // mapa de desplazamiento (Displace)
  const Gt = await verde(Math.max(0.8, 3 * u));     // tono para el grosor
  const Gm = await verde(Math.max(4, 60 * u));      // tono del entorno
  // cielo: azul intenso conectado al borde superior (la nieve y la bruma de los cerros quedan como tierra)
  // cielo: máscara entregada (blanco = cielo; en Photoshop, Select › Sky) o, si no hay, azul intenso conectado al borde superior
  let cielo = new Uint8Array(n);
  if (MASCARA) {
    cielo = await sharp(MASCARA).resize(w, h, { fit: "fill" }).extractChannel(0).raw().toBuffer();
  } else {
    for (let x = 0; x < w; x++) for (let y = 0; y < h; y++) { const i = y * w + x; if (P[3*i+2] > P[3*i] + CIELO && P[3*i+2] > P[3*i+1] + CIELO * 0.58) cielo[i] = 255; else break; }
  }
  const cieloS = await sharp(Buffer.from(cielo), { raw: { width: w, height: h, channels: 1 } }).blur(Math.max(0.6, 1.5 * u)).extractChannel(0).raw().toBuffer();
  const per = 4 * u, amp = 40 * u;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x, cs = cieloS[i], tierra = 1 - cs / 255;
    // línea nítida (High Pass + Threshold) y línea de horizonte
    const hp = (Gh[i] - Gs[i]) / 255;
    const horiz = cs > 25 && cs < 200 ? 1 - Math.abs(cs - 110) / 90 : 0;
    const lin = Math.max(ss(0.025, 0.05, hp) * tierra, Math.min(1, horiz * 1.4));
    // grabado: líneas horizontales desplazadas por la foto; se engrosan en la sombra
    const yy = y + amp * (Gd[i] / 255 - 0.5) * 2;
    const f = Math.abs(((yy / per) % 1 + 1) % 1 - 0.5) * 2;
    const sombra = Math.max(0, (Gm[i] - Gt[i]) / 255 * 2.0 + (1 - Gt[i] / 255) * 0.45 - 0.22), grosor = Math.min(0.6, sombra);
    const grab = grosor > 0.04 ? (1 - ss(grosor - 0.12, grosor + 0.12, f)) * 0.75 * tierra : 0;
    const a = 1 - (1 - lin) * (1 - grab);
    for (let c = 0; c < 3; c++) out[3*i+c] = Math.round(255 * (1 - a) + AZUL[c] * a);
  }
  let pctCielo = 0; for (let i = 0; i < n; i++) if (cielo[i] > 127) pctCielo++; pctCielo /= n;
  if (pctCielo < 0.03) console.warn("aviso: casi no se detectó cielo azul. Para cielo nublado o pálido, haz la máscara en Photoshop (Select › Sky) y pásala con --mascara.");
}
await sharp(out, { raw: { width: w, height: h, channels: 3 } }).png().toFile(OUT);
console.log(`ok ${OUT} (${w}x${h}, modo ${MODO})`);
