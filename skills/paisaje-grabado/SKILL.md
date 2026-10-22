---
name: paisaje-grabado
description: Convierte una foto de paisaje en la ilustración tipo grabado de Fundación Huella Local — línea azul #7A80A3 sobre blanco, cielo blanco, líneas de grabado que siguen el relieve — para la franja de paisaje a sangre en el tercio inferior de invitaciones, láminas y piezas. Usar siempre que Antonio pida pasar una foto a ilustración, "hacer el paisaje", "la franja de abajo", "la panorámica azul", "como la de ChatGPT", "en línea" o "tipo grabado", o cuando una pieza Huella Local necesite la panorámica azul de un lugar nuevo, aunque no nombre el skill.
---

# Paisaje tipo grabado

Convierte una foto en la panorámica azul de la marca (la que va a sangre al pie de invitaciones y láminas). Todo sale de la foto: el script no dibuja ni mueve nada, así que cerros, casas y piedras quedan exactamente donde están en la foto. La referencia de estilo es la ilustración que ChatGPT hizo de San Esteban (`ejemplos/referencia-chatgpt.webp`); el resultado aprobado por Antonio está en `ejemplos/san-esteban-grabado.png`.

## Reglas de trabajo con Antonio

- **Nada que deforme la foto.** Rechazó todo lo que inventa formas (líneas de flujo, achurado libre) y la limpieza agresiva con filtros ("quedó pésimo"). Si algo se ve mal, se ajusta de a un cambio y se le muestra antes/después lado a lado con la referencia de ChatGPT.
- **No rediseñar.** Los valores del script ya están aprobados. No cambies colores, grosores ni densidad sin que él lo pida.
- Responde en español, simple, y entrega la ruta completa de cada archivo.

## 1. Elegir la foto

Lo que funciona (como la de San Esteban):
- Vista ancha y frontal, horizonte a media altura, cordillera o cerros al fondo.
- Un plano abierto al medio (campo, agua, valle) y algo de textura adelante (piedras, pasto, muro).
- **Cielo azul despejado.** El script lo detecta solo y lo deja blanco.
- Luz de día pareja, sin contraluz. Alta resolución (idealmente 4000 px o más de ancho).

Lo que no funciona bien: cielos nublados o pálidos (hay que pasar máscara, ver abajo), contraluz, primeros planos de personas, fotos chicas.

Si la foto se va a usar como franja, el encuadre (qué parte de la foto entra) se decide antes de procesarla.

## 2. Procesar

La primera vez, instalar la dependencia:

```bash
cd "<carpeta de este skill>/scripts" && npm install
```

Luego:

```bash
node "<carpeta de este skill>/scripts/paisaje.mjs" "<foto>" "<salida.png>"
```

- Sin salida, guarda `<foto>-grabado.png` junto a la foto. Trabaja a la resolución de la foto; `--ancho 3000` para otro tamaño (el aspecto se mantiene igual a cualquier tamaño).
- **Cielo nublado o pálido:** el script avisa ("casi no se detectó cielo azul"). Pídele a Antonio la máscara del cielo: en Photoshop, Select › Sky, rellenar de blanco sobre negro y guardar como PNG. Se pasa con `--mascara cielo.png`. No intentes adivinar el cielo por código: ya se probó y deja bordes escalonados o se come el agua.
- `--modo psd` da la réplica exacta del PSD de Antonio («ilustración FHL.psd»: contorno suave azul con velo lila `#D0D1E0`). Es su base de Photoshop; la versión por defecto es la aprobada.

## 3. Revisar antes de entregar

Mira el resultado completo y un detalle al 100 % junto a la referencia. Revisa:
- Cielo blanco limpio y una línea fina de horizonte siguiendo la silueta real de los cerros (sin escalones ni mordidas en las cimas).
- Nieve con detalle, cerros con líneas de grabado curvadas por el relieve.
- Si algo falla, dilo tal cual; no lo presentes como avance.

Límites conocidos (decirlos si aparecen): el contorno de las piedras no sale cerrado como en ChatGPT, porque en la foto el lado iluminado se funde con la piedra vecina; las laderas tienen líneas en una sola dirección general. Si Antonio quiere cerrarlos, se repasan a mano en Photoshop.

## Cómo funciona (por si hay que ajustar)

Equivalente en Photoshop de cada capa, todo en azul `#7A80A3` sobre blanco y solo en la tierra (bajo la línea de cielo):
1. **Grabado:** líneas horizontales finas curvadas con la propia foto como mapa (Filter › Distort › Displace, mapa = canal verde muy desenfocado) y engrosadas en las sombras (Threshold sobre el tono local).
2. **Línea nítida:** High Pass del canal verde + Threshold, solo el lado oscuro de cada borde.
3. **Horizonte:** línea fina en el borde de la máscara de cielo.

Los parámetros escalan con el ancho de la foto (afinados a 2000 px).
