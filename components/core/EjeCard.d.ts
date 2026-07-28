/**
 * Plan item card with numbered eje label, title, and action link.
 * Replicates the "tarjeta-eje" pattern from the PACCC Los Andes platform.
 * Used in municipal climate action plan displays and similar structured plan grids.
 *
 */
export interface EjeCardProps {
  /** Eje number — renders as "Eje N" above the title */
  number?: number | string;
  /** Card title text */
  title: string;
  /** Action link label at the bottom of the card */
  actionLabel?: string;
  /** Click handler for the action link */
  onAction?: () => void;
}
