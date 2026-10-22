# Sistema de diseño Huella Local

**Fundación Huella Local** (FHL) es una fundación chilena que articula a empresas, municipios y comunidades para desarrollar proyectos de infraestructura y equipamiento de alto impacto social. Con el aporte privado, los municipios acceden a financiamiento público que de otro modo no alcanzarían, y se acorta la brecha entre territorios con más y menos recursos.

> "Gracias al aporte de empresas, desarrollamos iniciativas de infraestructura y equipamiento, permitiendo que los municipios accedan a financiamiento público para ejecutar obras de alto impacto social."

Este sistema es la fuente de reglas de todos los productos de comunicación. Cada producto (PPT institucional, boletín, web, brochure, dípticos, posts, documentos) hereda de aquí. Si una regla falta o choca con una pieza, se corrige primero el sistema y después la pieza.

Última revisión: 20 de octubre de 2026, a partir de la auditoría del sistema.

---

## Cifras de impacto

El sistema no guarda cifras. Las cifras de impacto (beneficiarios, iniciativas, inversión pública, veces aporte privado) salen de una sola fuente con fecha de corte, que alimenta la PPT, la web, el brochure y el boletín. La fuente está por definir (ver Pendientes).

---

## Mapa de productos

Cada producto tiene su plantilla y una periodicidad de revisión. En cada revisión se decide si se mantiene lo que hay o se actualiza.

| Producto | Revisión | Plantilla |
| --- | --- | --- |
| PPT institucional (español, después inglés) | Trimestral | `templates/deck-presentacion` (por rehacer con la nueva grilla) |
| Boletín | Trimestral y anual | — |
| Web | Trimestral, junto con la PPT | `templates/website` |
| Brochure y dípticos | Semestral | — |
| Mapas | Semestral o cuando entra una comuna | — |
| Carpeta, pendón y manual de identidad | Anual | — |
| Posts de redes | Según grilla mensual | `posts/` |
| Afiches de seminario | Por evento | `templates/afiche-evento` |
| Firma de correo | Cuando hay cambios | `templates/firma` |
| Documentos formales (invitaciones, cartas, convenios) | Por documento | `guidelines/brand-documents.card.html` |

Las versiones vigentes de cada producto viven en Drive, en `1. Diseño FHL › 00 Editables vigentes`.

---

## Voz y contenido

- **Español de Chile.** Presentaciones internacionales bilingües: español primero, inglés debajo.
- **Tono:** institucional pero cercano; seguro y basado en datos, nunca frío ni burocrático.
- **Persona:** tercera persona para la marca ("En Huella Local trabajamos…"); tuteo para el público ("Revisa nuestras propuestas, danos tu opinión").
- **Capitalización normal siempre.** Nada de mayúsculas sostenidas en títulos, etiquetas, botones ni lemas. Solo siglas (FHL, ODS, APR) van en mayúsculas.
- **Negrita** en la frase clave de cada párrafo, para guiar la lectura.
- **Sin emoji.** Exclamaciones solo en redes, nunca en presentaciones formales.
- **Cifras en formato chileno:** punto de miles y coma decimal (1.350; 153,4). Siempre con contexto ("25 veces el aporte privado").
- **Llamados a la acción** con verbo primero ("Conoce el plan", "Postula aquí").

---

## Color

### Paleta

| Color | Hex | Uso |
| --- | --- | --- |
| Azul | `#7A80A3` | Color principal: franja superior, fondos de color, lámina frase, cifras secundarias |
| Naranja | `#E28757` | Acento: cifras protagonistas, barra de realce, franja inferior |
| Verde | `#8DC899` | El de la huella del logo; tercer color del mesh |
| Carbón | `#4D4E56` | Texto y títulos; también puede ir en el mesh |
| Gris de fondo | `#F7F8F9` | El único gris de fondo, para láminas, posts y web |
| Blanco | `#FFFFFF` | Superficie de láminas y documentos |

- Solo se usan colores de la paleta.
- El carbón es color de texto, nunca fondo plano de una lámina, bloque o pieza. La única excepción es el mesh, donde el carbón puede ser una de sus manchas o su base. En ningún otro recurso se usa gris.
- Sobre azul (fondo plano o foto con velo azul) los textos, cifras y líneas van en blanco. El naranja como texto o línea va sobre blanco o gris claro; sobre azul solo como bloque (barra de realce, cuadro de compañía).
- Los degradés sobre foto son azules (azul de opaco a transparente). Nunca en gris ni en carbón.
- Si un color no da contraste, se cambia el tamaño o el fondo, nunca el color.
- Los degradés, cuando se usen, van solo entre colores de la paleta. Para portadas y cierres se prefiere el color plano con grano o el mesh.
- La escala de grises de `tokens/colors.css` es para bordes, líneas y textos secundarios, no para fondos.

---

## Logo

Tres versiones; en pantalla va siempre a color o en blanco.

- **Color** (`assets/brand/logo-color-v2.svg`): sobre blanco y fondos claros. Es la versión por defecto.
- **Blanco** (`assets/brand/logo-blanco-v2.svg`): sobre cualquier fondo de color, oscuro o foto.
- **Negro** (`assets/brand/logo-negro-v2.svg`): solo para impresión en una tinta, grabado o bordado.
- No se recolorea, no se deforma y el ícono no se usa solo, salvo a tamaños muy pequeños.

---

## Tipografía

- **Montserrat** es la única familia, en pesos 300, 400, 500, 600 y 700.
  - **300 light** solo en titulares y frases grandes, mezclado con semibold. Nunca en texto corrido.
  - **800 extrabold y 900 black están prohibidos.** El token `--font-black` queda limitado a 700.
- **Excepción serif:** en afiches de seminario, el titular principal puede ir en Roboto Serif, mezclando bold y regular por palabra. Todo lo demás sigue en Montserrat. Referencia: `assets/referencias/afiche-seminario-final.png`.
- **Jerarquía con peso, tamaño o color.** Nunca con mayúsculas ni con interletraje abierto.
- **Sin tracking expandido.** Interletraje normal; en titulares grandes, como mucho un leve ajuste negativo (`--tracking-tight`).
- **Mezcla de pesos en una misma frase:** titular en light con las palabras clave en semibold ("Por el desarrollo **equitativo** de los territorios").
- **Títulos de lámina:** carbón, semibold, 40 px sobre lámina de 1280 × 720, siempre en el mismo lugar.
- **Texto corrido:** regular 400, interlineado 1,55.

---

## Márgenes, espaciado y grilla

- **Nada pegado al borde.** Márgenes exteriores (`tokens/spacing.css`):
  - `--margin-xs: 16px`: pantallas móviles
  - `--margin-sm: 24px`: web, tablet
  - `--margin-md: 40px`: secciones web, documentos densos
  - `--margin-lg: 64px`: páginas de documento, afiches
  - `--margin-xl: 80px`: páginas editoriales holgadas
  - `--slide-margin-x: 72px` / `--slide-margin-y: 52px`: zona segura de lámina 1280 × 720
- **Espaciado** en múltiplos de 4 px (`--space-1` a `--space-32`).
- **Grilla de lámina:** 12 columnas, margen lateral de 72 px y medianil de 24 px. El título va siempre arriba a la izquierda, dentro del margen.
- **Folio de lámina:** al pie, logo a color a la izquierda y capítulo con número de lámina a la derecha, en 12 px gris. Reemplaza la franja verde.

---

## Franjas

- Por defecto, franja **azul arriba** y **naranja abajo**, en posts, documentos y láminas.
- No es una regla absoluta: se usa en la mayoría de las piezas, pero se puede omitir cuando la pieza lo pide (por ejemplo, una portada con foto a sangre o un mesh).
- La franja verde con lema queda fuera del sistema.

---

## Recursos gráficos

### Mesh con grano
Para portadas, cierres y piezas de convocatoria.
- 2 o 3 colores de la paleta: azul, verde y carbón; el último hace de fondo.
- 6 a 9 manchas circulares sólidas, difuminadas con un desenfoque de unas 0,1 veces el lado corto de la pieza (`--mesh-blur`).
- Grano encima (ver abajo).
- Nunca muchos colores ni naranja en el mesh. El texto blanco va sobre la zona azul o carbón; el verde queda lejos del texto.
- Receta de referencia: `editor-huella`, función `drawMeshFondo`.

### Grano
Ruido fractal en blanco y negro, en modo overlay, con opacidad entre 0,08 y 0,16 (`--grano-opacidad`, `--grano-blend`). Va sobre el mesh y sobre el color plano.

### Lámina frase
Un color plano de la paleta con grano y una sola frase grande, en light con las palabras clave en semibold. Para la idea fuerza de cada capítulo.

### Barra naranja de realce
Una palabra o frase corta en blanco sobre un bloque naranja, una vez por pieza.
- El bloque se ajusta al alto de las letras (no a todo el interlineado), con relleno lateral, y lleva esquinas levemente redondeadas (radio 4 px).
- El bloque nunca se corre fuera de la columna ni queda descuadrado respecto del resto del titular.

### Cifras protagonistas
Cifra grande en naranja o carbón con su bajada corta debajo, ordenadas en grilla y separadas por una línea fina superior. Sin cajas.

### Fotos a sangre en serie
Dos o tres fotos lado a lado, sin marco ni radio, separadas por una línea blanca fina, con el pie sobre la foto. Para obras y proyectos.

### Cuadro de compañía
Un cuadrado naranja antes del título, de unos dos tercios del cuerpo del título (68 px junto a un título de 96 px), con esquinas levemente redondeadas (radio 4 px), centrado en la primera línea. Los demás cuadrados de marca (marcadores, unidades de un gráfico) llevan el mismo radio leve. Es opcional: acompaña el título de separadores, portadas internas o piezas sueltas.

### Separador de capítulo
Foto en duotono a sangre con el nombre del capítulo en grande, en blanco. Puede llevar el cuadro de compañía antes del nombre. Sin número de capítulo.

---

## Fotografía

- **Documental, nunca de banco de imágenes.** Personas, obras, instancias participativas, territorios.
- **Dos tratamientos:**
  - **Duotono** (sombras azul, luces blanco) para portadas y separadores. Procedimiento de Antonio en Photoshop:
    1. Abrir la foto y, en Canales, quedarse con el **verde**.
    2. **Niveles** sobre el verde: negro 0, medios 0,81, blanco 224. El blanco se ajusta por foto para que el cielo y los grises claros queden lo más blancos posible.
    3. Cargar el canal como selección e **invertirla**.
    4. Apagar la capa de la foto, crear una capa blanca debajo y una capa de **color sólido azul** (`#7A80A3`) con la selección como máscara. Antonio usa a veces carbón en vez de azul, según la pieza.
    - Resultado: color pleno en las sombras, blanco en las luces, sin grises. No se imita con filtros CSS (escala de grises + aclarar da un gris plano).
    - Receta en código: `Proyectos/energia-que-deja-huella/duotono.mjs` (mismos pasos y valores, con sharp).
  - **Color natural** para obras, personas e instancias.
- Sobre foto, el texto va directo, con un degradé azul si hace falta para que se lea.

---

## Agrupar sin cajas

- En láminas y piezas gráficas no hay tarjetas con sombra ni recuadros redondeados. Se agrupa con una línea fina superior o, si hace falta, con un bloque plano de un color de la paleta.
- Las sombras y la elevación al pasar el mouse (`--shadow-*`, componente `Card`) quedan solo para la web.
- No hay paneles de vidrio difuminado.

---

## Etiquetas y antetítulos

- Las láminas no llevan antetítulo: el capítulo vive en el folio.
- No hay pastilla sobre el título.
- En redes, cuando haga falta una etiqueta: pastilla azul con texto blanco en bold, a tamaño legible, con esquinas apenas redondeadas.

---

## Íconos

- **Google Material Symbols (Outlined)** es el sistema de íconos, cargado desde Google Fonts y disponible con la clase `.icon` (`tokens/icons.css`).
- Se usan en piezas, láminas y web. Su uso está por perfeccionar (ver Pendientes); mientras tanto, cada ícono debe cumplir una función y no ir de adorno junto a un título.

```html
<span class="icon">water_drop</span>
<span class="icon icon-lg">foundation</span>
<span class="icon icon-filled" style="color:var(--color-accent)">eco</span>
```

Íconos por tema:
- **Agua:** `water_drop`, `flood`, `waves`
- **Infraestructura:** `foundation`, `construction`, `location_city`, `account_balance`
- **Comunidad:** `groups`, `handshake`, `volunteer_activism`
- **Medioambiente:** `park`, `eco`, `forest`, `storm`, `thermostat`
- **Energía:** `solar_power`, `bolt`, `energy_savings_leaf`
- **Salud:** `local_hospital`, `health_and_safety`
- **Educación:** `school`, `menu_book`
- **Navegación:** `arrow_forward`, `open_in_new`, `expand_more`

Flechas: `→` en texto, en naranja, o el ícono `arrow_forward`.

---

## Ilustración

La ilustración no es obligatoria en ninguna pieza. Hay tres tipos:

- **Panorámica azul paisaje:** paisaje en línea azul sobre fondo blanco, a sangre al pie de invitaciones y de las láminas de firmas. Archivos: `assets/illustrations/vallenar.png`, `assets/illustrations/mejillones/Mejillones.png`, `assets/illustrations/san-esteban.png`.
  - **Se puede hacer a partir de cualquier foto** con el skill `paisaje-grabado` (`skills/paisaje-grabado/`). Es un tratamiento de la foto, no un dibujo: líneas de grabado en azul `#7A80A3` curvadas por la propia foto, línea nítida en los bordes y cielo blanco. Nada se mueve de lugar.
  - Foto ideal: vista ancha y frontal, horizonte a media altura, cerros al fondo, plano abierto al medio, textura adelante, cielo azul despejado y luz pareja. Con cielo nublado se pasa la máscara del cielo de Photoshop (Select › Sky).
  - El skill también trae la réplica exacta del PSD de Antonio (`--modo psd`: contorno suave azul con velo lila `#D0D1E0`).
- **Panorámica a color de Chile:** la geografía de norte a sur en color. Archivos: `assets/illustrations/chile-panorama.png`, `assets/illustrations/chile-panorama-lineart.png`. Se pueden hacer otros elementos en este mismo estilo.
- **Isométricas de usos de espacios:** para mostrar plazas o territorios en uso. Por hacer.

Reglas: la ilustración no se recorta ni lleva texto encima. Claude no dibuja ilustraciones propias; se encargan o se toman de una serie de un mismo autor, recoloreada a la paleta. La panorámica azul hecha desde una foto con `paisaje-grabado` sí vale, porque sale de la foto.

---

## Componentes web

| Componente | Descripción |
| --- | --- |
| `Button` | Botón de acción, en capitalización normal. Variantes: `primary` (naranja), `secondary` (contorno), `ghost`, `dark` (azul) |
| `Badge` | Etiqueta compacta. Variantes: `primary`, `accent`, `verde`, `outline`, `subtle`, `muted` |
| `Card` | Superficie blanca con borde y sombra al pasar el mouse. Solo web |
| `StatDisplay` | Cifra grande con etiqueta y subetiqueta opcional |
| `DataTable` | Tabla de comparación: encabezado azul, filas alternadas, valores en bold |
| `EjeCard` | Tarjeta de eje de plan (número, título y acción). Solo web |

Interacción en la web:
- Tarjetas: al pasar el mouse sube la sombra, sin mover ni cambiar color.
- Botones: al pasar el mouse suben 1 px y oscurecen el relleno.
- Enlaces de acción: de azul a naranja.
- Transiciones de 0,25 s (`--transition-base`); sin animaciones decorativas.

Radios: botones y tarjetas web 10 px; paneles grandes 16 px; pastillas 9999 px.

Después de cambiar componentes, revisar con `check_design_system` el espacio de nombres exacto (`window.<Namespace>`) para montarlos en las tarjetas HTML.

---

## Índice de archivos

```
styles.css                         Punto de entrada (solo importa los tokens)
readme.md                          Este documento
SKILL.md                           Instrucciones para agentes

tokens/
  colors.css                       Paleta y alias semánticos
  typography.css                   Montserrat, escala, pesos, interlineado
  spacing.css                      Espaciado, márgenes, radios, sombras (web)
  effects.css                      Transiciones, grano, mesh, velos de foto
  icons.css                        Material Symbols y clase .icon

assets/
  brand/                           Logos color, blanco y negro; firma; sello FECU Social
  illustrations/                   Panorámica a color de Chile y panorámicas azules
  textures/                        Degradé azul y textura de papel
  referencias/                     Afiche de seminario, referencia final
  partners/                        Logos de aliados (Ministerio de Desarrollo Social)
  paccc/                           Íconos y fondos de PACCC Los Andes

skills/
  paisaje-grabado/                 Foto de paisaje -> panorámica azul tipo grabado (script, instrucciones y ejemplo)

components/core/                   Componentes web (Button, Badge, Card, StatDisplay, EjeCard, DataTable)
guidelines/                        Tarjetas de referencia: color, tipografía, espaciado, logo, láminas, documentos, ilustración
slides/                            Láminas 1280 × 720 (por rehacer con la nueva grilla)
posts/                             Posts 1080 × 1350 con texto; posts/plantillas sin texto
templates/                         Deck, sitio web, afiche de evento y firma
```

---

## Pendientes

- **Fuente única de cifras de impacto,** con fecha de corte.
- **Colores extra en los tokens:** `tokens/colors.css` todavía incluye periwinkle `#8488BC` (marcos de posts), amarillo `#FECC52` y verde musgo `#78AA6D` (logo). Falta decidir si se quedan.
- **Duotono en carbón:** Antonio lo usa a veces, pero la regla de color dice que el carbón no va en ningún recurso salvo el mesh. Falta decidir cuál manda.
- **Íconos:** perfeccionar su uso (tamaños, trazo, cuándo sí y cuándo no).
- **Ilustraciones isométricas** de usos de espacios.
- **Láminas y deck del sistema** (`slides/`, `templates/deck-presentacion`): todavía tienen franja verde, degradés y títulos antiguos. Se rehacen con la plantilla de la PPT institucional.
- **Tipografía y márgenes:** quedaron en "lo vemos" en la auditoría, sin comentario.
