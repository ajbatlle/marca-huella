/**
 * Large numeric stat display for impact figures.
 * Use in impact summaries, mission slides, data callouts, and hero sections.
 * Supports bilingual display via `sublabel` (e.g. English translation in italic).
 *
 */
export interface StatDisplayProps {
  /** The main numeric value string (e.g. "948.190", "+110M USD", "14x") */
  value: string;
  /** Primary label below the value */
  label: string;
  /** Optional secondary label — typically italic English translation */
  sublabel?: string;
  /** Color for the value number */
  color?: 'primary' | 'accent' | 'dark' | 'white';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}
