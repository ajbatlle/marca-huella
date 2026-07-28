White surface container with border, resting shadow-sm, and hover shadow-azul elevation. The base wrapper for any grouped content in Huella Local interfaces.

```jsx
// Default card
<Card>
  <h3>Gestión hídrica eficiente</h3>
  <p>Medidas para fortalecer la seguridad hídrica local.</p>
</Card>

// Card without border, larger padding
<Card border={false} padding="lg">
  <StatDisplay value="948.190" label="beneficiarios" color="primary" />
</Card>

// Clickable card
<Card onClick={() => openModal('eje1')}>
  <Badge variant="accent">Eje 1</Badge>
  <h3>Gestión hídrica</h3>
</Card>

// No hover effect (e.g. within a form)
<Card hover={false} padding="sm">
  <input type="text" placeholder="Nombre" />
</Card>
```

Notable props:
- `padding`: `none` · `sm` · `md` (default) · `lg` · `xl`
- `hover`: `true` (default) raises shadow on mouse-enter
- `border`: `true` (default) shows `1px solid var(--color-border)`
- `onClick`: makes cursor pointer
