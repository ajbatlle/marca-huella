import React, { useState } from 'react';

export function EjeCard({
  number,
  title,
  actionLabel = 'Ver medidas →',
  onAction,
}) {
  const [cardHovered, setCardHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-md)',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: cardHovered ? 'var(--shadow-azul)' : 'var(--shadow-sm)',
        border: '1px solid var(--color-border)',
        transition: 'box-shadow var(--transition-base)',
        boxSizing: 'border-box',
        minHeight: '160px',
      }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div>
        {number != null && (
          <div style={{
            fontFamily: 'var(--font-primary)',
            fontWeight: 'var(--font-bold)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-accent)',
            letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-2)',
          }}>
            Eje {number}
          </div>
        )}
        <h3 style={{
          margin: 0,
          fontFamily: 'var(--font-primary)',
          fontWeight: 'var(--font-bold)',
          fontSize: 'var(--text-base)',
          color: 'var(--color-text)',
          lineHeight: 'var(--leading-snug)',
        }}>
          {title}
        </h3>
      </div>

      <div
        style={{
          fontFamily: 'var(--font-primary)',
          fontWeight: 'var(--font-bold)',
          fontSize: 'var(--text-xs)',
          color: linkHovered ? 'var(--color-accent)' : 'var(--color-primary)',
          letterSpacing: 'var(--tracking-wide)',
          textTransform: 'uppercase',
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-3)',
          marginTop: 'var(--space-4)',
          cursor: onAction ? 'pointer' : 'default',
          transition: 'color var(--transition-fast)',
        }}
        onMouseEnter={() => setLinkHovered(true)}
        onMouseLeave={() => setLinkHovered(false)}
        onClick={onAction}
      >
        {actionLabel}
      </div>
    </div>
  );
}
