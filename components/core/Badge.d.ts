/**
 * Compact label pill for categories, status indicators, eje numbers, and tags.
 * Shown above headings (e.g. "Eje 1") or inline in lists.
 */
export interface BadgeProps {
  /** Badge text content */
  children: React.ReactNode;
  /** Color variant */
  variant?: 'primary' | 'accent' | 'verde' | 'outline' | 'subtle' | 'muted';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
}
