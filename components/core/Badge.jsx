import React from 'react';

export function Badge({
  children,
  variant = 'primary',
  size = 'md',
}) {
  const sizes = {
    sm: { fontSize: '0.65rem', padding: '3px 9px' },
    md: { fontSize: 'var(--text-xs)',  padding: '5px 12px' },
    lg: { fontSize: 'var(--text-sm)',  padding: '7px 16px' },
  };

  const variants = {
    primary: { backgroundColor: 'var(--color-primary)',     color: '#fff' },
    accent:  { backgroundColor: 'var(--color-accent)',      color: '#fff' },
    success: { backgroundColor: '#8DC899', color: '#fff' },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--color-border-strong)',
    },
    subtle:  { backgroundColor: 'var(--color-surface-raised)', color: 'var(--color-text)' },
    muted:   { backgroundColor: 'var(--hl-gray-200)',           color: 'var(--color-text)' },
  };

  const style = {
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--font-bold)',
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'var(--radius-full)',
    lineHeight: 1,
    border: 'none',
    ...sizes[size],
    ...variants[variant],
  };

  return <span style={style}>{children}</span>;
}
