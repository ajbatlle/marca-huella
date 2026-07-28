import React from 'react';

export function StatDisplay({
  value,
  label,
  sublabel,
  color = 'primary',
  size = 'md',
  align = 'left',
}) {
  const colors = {
    primary: 'var(--color-primary)',
    accent:  'var(--color-accent)',
    dark:    'var(--color-text)',
    white:   '#ffffff',
  };

  const sizes = {
    sm: { value: 'var(--text-3xl)', label: 'var(--text-sm)' },
    md: { value: 'var(--text-4xl)', label: 'var(--text-base)' },
    lg: { value: 'var(--text-5xl)', label: 'var(--text-lg)' },
    xl: { value: 'var(--text-6xl)', label: 'var(--text-xl)' },
  };

  const onDark = color === 'white';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', textAlign: align }}>
      <div style={{
        fontFamily: 'var(--font-primary)',
        fontWeight: 'var(--font-bold)',
        fontSize: sizes[size].value,
        color: colors[color],
        lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-tight)',
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'var(--font-primary)',
        fontWeight: 'var(--font-bold)',
        fontSize: sizes[size].label,
        color: onDark ? 'rgba(255,255,255,0.85)' : 'var(--color-text)',
        lineHeight: 'var(--leading-snug)',
      }}>
        {label}
      </div>
      {sublabel && (
        <div style={{
          fontFamily: 'var(--font-primary)',
          fontWeight: 'var(--font-regular)',
          fontSize: 'var(--text-sm)',
          color: onDark ? 'rgba(255,255,255,0.60)' : 'var(--color-text-muted)',
          fontStyle: 'italic',
        }}>
          {sublabel}
        </div>
      )}
    </div>
  );
}
