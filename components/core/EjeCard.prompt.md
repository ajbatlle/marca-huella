Plan item card with a numbered eje label, title text, and action link. Replicates the PACCC plan axis card. Use in structured plan grids where each item has a number, description, and disclosure action.

```jsx
// Basic usage
<EjeCard
  number={1}
  title="Gestión hídrica eficiente"
  onAction={() => openModal('eje1')}
/>

// With custom action label
<EjeCard
  number={5}
  title="Asentamientos humanos resilientes"
  actionLabel="Ver detalles →"
  onAction={() => setSelected(5)}
/>

// Without number (general purpose plan card)
<EjeCard
  title="Gobernanza climática local"
  actionLabel="Leer más →"
  onAction={() => navigate('/gobernanza')}
/>

// In a 3-column grid
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
  {ejes.map(eje => (
    <EjeCard key={eje.id} number={eje.id} title={eje.title} onAction={() => open(eje.id)} />
  ))}
</div>
```

Notable props:
- `number`: renders "Eje N" in naranja above the title; omit for unnumbered cards
- `actionLabel`: defaults to `"Ver medidas →"`
- `onAction`: if omitted, the action link is not clickable (cursor: default)
