/**
 * Determines if the data table should be shown based on current state
 */
export const shouldShowDataTable = (config: any, table: any, general: any, loading: boolean): boolean => {
  return !config?.runtime?.editorErrorMessage.length && table.forceDisplay && general.type !== 'navigation' && !loading
}
