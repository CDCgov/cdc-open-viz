/**
 * Condition for determining when a markup variable should be displayed.
 * Used to conditionally show/hide markup variables based on data values.
 */
export type MarkupCondition = {
  /** The name of the data column to evaluate */
  columnName: string
  /** Whether the condition checks for equality or inequality */
  isOrIsNotEqualTo: 'is' | 'is not'
  /** The value to compare against */
  value: string
}

/**
 * Configuration for a dynamic markup variable that can be inserted into text content.
 * Markup variables allow data-driven text replacement with conditional display logic.
 */
export type MarkupVariable = {
  /** The data column that provides the variable's value */
  columnName: string
  /** Array of conditions that must be met for this variable to be displayed */
  conditions: MarkupCondition[]
  /** Display name for the variable in the editor */
  name: string
  /** The HTML/template tag used to reference this variable in markup */
  tag: string
  /** Whether to format numbers with comma separators */
  addCommas?: boolean
  /** Whether to hide the variable when the data value is null/empty */
  hideOnNull?: boolean
}

/**
 * Editor panel configuration for markup variables functionality.
 * Provides the interface for managing dynamic text content with data-driven variables.
 *
 * This is commonly used in visualizations that support rich text content where
 * users can insert dynamic variables that update based on the current data.
 */
export type EditorPanel_MarkupVariables = {
  /** Array of configured markup variables */
  markupVariables?: MarkupVariable[]
  /** Whether markup variables feature is enabled for this visualization */
  enableMarkupVariables?: boolean
}
