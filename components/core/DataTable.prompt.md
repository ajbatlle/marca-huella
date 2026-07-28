Tabla canónica de comparación de datos para slides y documentos de Huella Local. Header azul, filas alternadas blanco/gris, valores en bold centrados. Columna izquierda = indicador; columnas restantes = valores comparados.

```jsx
<DataTable
  headers={['Indicador', 'Comunas mejor ICVU', 'Zonas de rezago Ñuble']}
  rows={[
    ['Puntaje PSU > 450',             '96,20%',   '82,90%'],
    ['Pobreza comunal CASEN',         '1%',        '13,80%'],
    ['Funcionarios planta y contrata','876',        '64'],
    ['Ingresos municipales per cápita','$679.240', '$93.070'],
  ]}
  footnote="SINIM; 2024 — Índice de Calidad de Vida Urbana UC - CChC"
/>
```

Notable props:
- `headers`: primer header = columna indicador; resto = columnas de comparación
- `rows`: primer cell de cada fila = label; resto = valores (bold, azul, centrado)
- `footnote`: fuente o aclaración debajo de la tabla
- N columnas y N filas — sin límite, la tabla se adapta
