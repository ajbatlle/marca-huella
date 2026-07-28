CTA and action button for Huella Local interfaces. Use for primary actions (form submits, plan navigation), links (pass `href`), and contextual secondary actions.

```jsx
// Primary CTA — orange fill with glow shadow
<Button variant="primary" href="/validar">Validar el plan aquí</Button>

// Secondary — outline azul
<Button variant="secondary">Ver medidas</Button>

// Ghost — text only, turns naranja on hover
<Button variant="ghost" size="sm">Conoce más →</Button>

// Dark — azul fill for use over light or dark sections
<Button variant="dark" size="lg">Conoce el plan</Button>

// Small disabled state
<Button variant="primary" size="sm" disabled>No disponible</Button>
```

Notable props:
- `variant`: `primary` (orange, default) · `secondary` (outline azul) · `ghost` (text only) · `dark` (azul fill)
- `size`: `sm` · `md` (default) · `lg`
- `href`: renders as `<a>` tag instead of `<button>`
- `disabled`: mutes opacity, blocks click
