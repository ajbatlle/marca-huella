import React from 'react';

export function DataTable({
  headers = [],
  rows = [],
  footnote,
}) {
  return (
    <div style={{ width: '100%' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'var(--font-primary)',
      }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                background: 'var(--hl-azul-500)',
                color: 'white',
                fontWeight: 700,
                fontSize: 'var(--text-base)',
                padding: '14px 20px',
                textAlign: i === 0 ? 'left' : 'center',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.25)' : 'none',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '14px 20px',
                  background: ri % 2 === 0 ? 'white' : 'var(--hl-gray-50)',
                  borderBottom: '1px solid var(--hl-gray-150)',
                  borderLeft: ci > 0 ? '1px solid var(--hl-gray-200)' : 'none',
                  textAlign: ci === 0 ? 'left' : 'center',
                  fontSize: ci === 0 ? 'var(--text-base)' : 'var(--text-2xl)',
                  fontWeight: ci === 0 ? 400 : 700,
                  color: ci === 0 ? 'var(--color-text)' : 'var(--color-primary)',
                  lineHeight: ci === 0 ? 1.4 : 1,
                  verticalAlign: 'middle',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {footnote && (
        <div style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-sm)',
          fontWeight: 700,
          color: 'var(--color-text-muted)',
          lineHeight: 1.6,
          marginTop: 'var(--space-4)',
        }}>{footnote}</div>
      )}
    </div>
  );
}
