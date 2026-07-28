Large numeric stat display for impact figures. Used in impact summaries (beneficiaries, investment amounts, multipliers) and slide data callouts.

```jsx
// Primary azul number (default)
<StatDisplay
  value="948.190"
  label="beneficiarios"
  sublabel="beneficiaries"
  color="primary"
  size="lg"
/>

// Orange accent — for highlight stats
<StatDisplay
  value="+110M USD"
  label="inversión pública"
  sublabel="public investment"
  color="accent"
  size="md"
/>

// White — for use over dark/photo backgrounds
<StatDisplay value="14x" label="aporte privado" color="white" size="xl" align="center" />

// Small inline stat
<StatDisplay value="276" label="iniciativas" size="sm" color="dark" />
```

Notable props:
- `value`: the number string — use Chilean format (948.190 not 948,190)
- `color`: `primary` (azul) · `accent` (naranja) · `dark` (gray) · `white`
- `size`: `sm` · `md` · `lg` · `xl`
- `sublabel`: rendered in italic muted — ideal for English translation in bilingual contexts
