/**
 * Canonical data comparison table for Huella Local slides and documents.
 * Header row in azul, alternating white/gray rows, bold centered values in right columns.
 * Use for any indicator comparison, territory gap analysis, or data summary.
 */
export interface DataTableProps {
  /** Column header labels. First is the indicator label; rest are comparison groups. */
  headers: string[];
  /**
   * Table rows. Each row is an array of cell strings.
   * First cell = indicator label (normal weight, left-aligned).
   * Remaining cells = values (bold, large, centered, azul).
   */
  rows: string[][];
  /** Optional footnote text shown below the table (source citation, etc.) */
  footnote?: string;
}
