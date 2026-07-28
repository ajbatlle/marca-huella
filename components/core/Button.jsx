import React, { useState } from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  onClick,
  type = 'button',
}) {
  const [hovered, setHovered] = useState(false);

  const sizes = {
    sm: { fontSize: 'var(--text-xs)',  padding: '8px 16px' },
    md: { fontSize: 'var(--text-sm)',  padding: '14px 28px' },
    lg: { fontSize: 'var(--text-base)', padding: '18px 44px' },
  };

  const baseVariants = {
    primary: {
      backgroundColor: 'var(--color-accent)',
      color: '#fff',
      boxShadow: 'var(--shadow-naranja)',
      border: 'none',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)',
      boxShadow: 'none',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: 'none',
      boxShadow: 'none',
    },
    dark: {
      backgroundColor: 'var(--color-primary)',
      color: '#fff',
      border: 'none',
      boxShadow: 'var(--shadow-azul)',
    },
  };

  const hoverVariants = {
    primary:   { backgroundColor: 'var(--color-accent-dark)',   transform: 'translateY(-1px)' },
    secondary: { backgroundColor: 'rgba(122,128,163,0.08)',      transform: 'translateY(-1px)' },
    ghost:     { color: 'var(--color-accent)',                   transform: 'translateY(-1px)' },
    dark:      { backgroundColor: 'var(--color-primary-dark)',   transform: 'translateY(-1px)' },
  };

  const style = {
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--font-bold)',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    textDecoration: 'none',
    transition: 'all var(--transition-base)',
    opacity: disabled ? 0.5 : 1,
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    lineHeight: 1,
    ...sizes[size],
    ...baseVariants[variant],
    ...(hovered && !disabled ? hoverVariants[variant] : {}),
  };

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: disabled ? undefined : onClick,
  };

  if (href) {
    return <a href={href} style={style} {...handlers}>{children}</a>;
  }
  return <button type={type} style={style} disabled={disabled} {...handlers}>{children}</button>;
}
