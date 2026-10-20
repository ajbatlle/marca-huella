/* @ds-bundle: {"format":4,"namespace":"HuellaLocalDesignSystem_59d6d2","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"DataTable","sourcePath":"components/core/DataTable.jsx"},{"name":"EjeCard","sourcePath":"components/core/EjeCard.jsx"},{"name":"StatDisplay","sourcePath":"components/core/StatDisplay.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"884190bcfd04","components/core/Button.jsx":"65c511ab1d62","components/core/Card.jsx":"e15a0bef3b98","components/core/DataTable.jsx":"2de932ec7a4e","components/core/EjeCard.jsx":"dbf72a32ca02","components/core/StatDisplay.jsx":"f7e5307844eb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HuellaLocalDesignSystem_59d6d2 = window.HuellaLocalDesignSystem_59d6d2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'primary',
  size = 'md'
}) {
  const sizes = {
    sm: {
      fontSize: '0.65rem',
      padding: '3px 9px'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '5px 12px'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '7px 16px'
    }
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#fff'
    },
    accent: {
      backgroundColor: 'var(--color-accent)',
      color: '#fff'
    },
    success: {
      backgroundColor: '#8DC899',
      color: '#fff'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--color-border-strong)'
    },
    subtle: {
      backgroundColor: 'var(--color-surface-raised)',
      color: 'var(--color-text)'
    },
    muted: {
      backgroundColor: 'var(--hl-gray-200)',
      color: 'var(--color-text)'
    }
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
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  onClick,
  type = 'button'
}) {
  const [hovered, setHovered] = useState(false);
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '8px 16px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '14px 28px'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '18px 44px'
    }
  };
  const baseVariants = {
    primary: {
      backgroundColor: 'var(--color-accent)',
      color: '#fff',
      boxShadow: 'var(--shadow-naranja)',
      border: 'none'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)',
      boxShadow: 'none'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: 'none',
      boxShadow: 'none'
    },
    dark: {
      backgroundColor: 'var(--color-primary)',
      color: '#fff',
      border: 'none',
      boxShadow: 'var(--shadow-azul)'
    }
  };
  const hoverVariants = {
    primary: {
      backgroundColor: 'var(--color-accent-dark)',
      transform: 'translateY(-1px)'
    },
    secondary: {
      backgroundColor: 'rgba(122,128,163,0.08)',
      transform: 'translateY(-1px)'
    },
    ghost: {
      color: 'var(--color-accent)',
      transform: 'translateY(-1px)'
    },
    dark: {
      backgroundColor: 'var(--color-primary-dark)',
      transform: 'translateY(-1px)'
    }
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
    lineHeight: 1,
    ...sizes[size],
    ...baseVariants[variant],
    ...(hovered && !disabled ? hoverVariants[variant] : {})
  };
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: disabled ? undefined : onClick
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style
    }, handlers), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled
  }, handlers), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const {
  useState
} = React;
function Card({
  children,
  padding = 'md',
  hover = true,
  border = true,
  style: extraStyle = {},
  onClick
}) {
  const [hovered, setHovered] = useState(false);
  const paddings = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
    xl: 'var(--space-10)'
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
    ...extraStyle
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/DataTable.jsx
try { (() => {
function DataTable({
  headers = [],
  rows = [],
  footnote
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-primary)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headers.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      background: 'var(--hl-azul-500)',
      color: 'white',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      padding: '14px 20px',
      textAlign: i === 0 ? 'left' : 'center',
      borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.25)' : 'none'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, row.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      padding: '14px 20px',
      background: ri % 2 === 0 ? 'white' : 'var(--hl-gray-50)',
      borderBottom: '1px solid var(--hl-gray-150)',
      borderLeft: ci > 0 ? '1px solid var(--hl-gray-200)' : 'none',
      textAlign: ci === 0 ? 'left' : 'center',
      fontSize: ci === 0 ? 'var(--text-base)' : 'var(--text-2xl)',
      fontWeight: ci === 0 ? 400 : 700,
      color: ci === 0 ? 'var(--color-text)' : 'var(--color-primary)',
      lineHeight: ci === 0 ? 1.4 : 1,
      verticalAlign: 'middle'
    }
  }, cell)))))), footnote && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--color-text-muted)',
      lineHeight: 1.6,
      marginTop: 'var(--space-4)'
    }
  }, footnote));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/core/EjeCard.jsx
try { (() => {
const {
  useState
} = React;
function EjeCard({
  number,
  title,
  actionLabel = 'Ver medidas →',
  onAction
}) {
  const [cardHovered, setCardHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
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
      minHeight: '160px'
    },
    onMouseEnter: () => setCardHovered(true),
    onMouseLeave: () => setCardHovered(false)
  }, /*#__PURE__*/React.createElement("div", null, number != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--font-bold)',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-accent)',
      marginBottom: 'var(--space-2)'
    }
  }, "Eje ", number), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--font-bold)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text)',
      lineHeight: 'var(--leading-snug)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--font-bold)',
      fontSize: 'var(--text-xs)',
      color: linkHovered ? 'var(--color-accent)' : 'var(--color-primary)',
      borderTop: '1px solid var(--color-border)',
      paddingTop: 'var(--space-3)',
      marginTop: 'var(--space-4)',
      cursor: onAction ? 'pointer' : 'default',
      transition: 'color var(--transition-fast)'
    },
    onMouseEnter: () => setLinkHovered(true),
    onMouseLeave: () => setLinkHovered(false),
    onClick: onAction
  }, actionLabel));
}
Object.assign(__ds_scope, { EjeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EjeCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatDisplay.jsx
try { (() => {
function StatDisplay({
  value,
  label,
  sublabel,
  color = 'primary',
  size = 'md',
  align = 'left'
}) {
  const colors = {
    primary: 'var(--color-primary)',
    accent: 'var(--color-accent)',
    dark: 'var(--color-text)',
    white: '#ffffff'
  };
  const sizes = {
    sm: {
      value: 'var(--text-3xl)',
      label: 'var(--text-sm)'
    },
    md: {
      value: 'var(--text-4xl)',
      label: 'var(--text-base)'
    },
    lg: {
      value: 'var(--text-5xl)',
      label: 'var(--text-lg)'
    },
    xl: {
      value: 'var(--text-6xl)',
      label: 'var(--text-xl)'
    }
  };
  const onDark = color === 'white';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--font-bold)',
      fontSize: sizes[size].value,
      color: colors[color],
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--font-bold)',
      fontSize: sizes[size].label,
      color: onDark ? 'rgba(255,255,255,0.85)' : 'var(--color-text)',
      lineHeight: 'var(--leading-snug)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 'var(--font-regular)',
      fontSize: 'var(--text-sm)',
      color: onDark ? 'rgba(255,255,255,0.60)' : 'var(--color-text-muted)',
      fontStyle: 'italic'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatDisplay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatDisplay.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EjeCard = __ds_scope.EjeCard;

__ds_ns.StatDisplay = __ds_scope.StatDisplay;

})();
