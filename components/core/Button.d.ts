/**
 * Primary CTA and action button for Huella Local interfaces.
 * Use `primary` for main CTAs, `secondary` for alternatives, `ghost` for inline links,
 * and `dark` for azul-filled contexts (e.g. dark footers, hero sections).
 *
 */
export interface ButtonProps {
  /** Button label or content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** If provided, renders as an `<a>` tag with this href */
  href?: string;
  /** Disables interaction and mutes opacity */
  disabled?: boolean;
  /** Click handler (ignored when disabled) */
  onClick?: () => void;
  /** HTML button type attribute (only when not using href) */
  type?: 'button' | 'submit' | 'reset';
}
