import React, { useState } from 'react';

export function Card({
  children,
  padding = 'md',
  hover = true,
  border = true,
  style: extraStyle = {},
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  const paddings = {
    none: '0',
    sm:   'var(--space-4)',
    md:   'var(--space-6)',
    lg:   'var(--space-8)',
    xl:   'var(--space-10)',
  };

  const style = {
    backgroundColor: 'var(--color-surface)',
    borderRadius: 'var(--radius-md)',
    padding: paddings[padding],
    boxShadow: hovered && hover ? 'var(--shadow-azul)' : 'var(--shadow-sm)',
    border: border ? '1px solid var(--color-border)' : 'none',
    transition: 'box-shadow var(--transition-base)',
    boxSizing: 'border-box',
    cursor: onClick ? 'pointer' : 'default',
    ...extraStyle,
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
