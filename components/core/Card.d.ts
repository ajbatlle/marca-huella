/**
 * White surface container with subtle border, resting shadow, and hover elevation.
 * Use as the base wrapper for content groups, plan items, data panels, and feature sections.
 */
export interface CardProps {
  children: React.ReactNode;
  /** Inner padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to elevate box-shadow on hover */
  hover?: boolean;
  /** Whether to show a subtle border */
  border?: boolean;
  /** Additional inline styles (merged last) */
  style?: React.CSSProperties;
  /** Optional click handler — also changes cursor to pointer */
  onClick?: () => void;
}
