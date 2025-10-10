/**
 * Builds CSS class names for the main map section container
 */
export const buildSectionClassNames = (viewport: string, headerColor: string, hasError: boolean): string => {
  const classes = ['cove-component__content', 'cdc-map-inner-container', viewport, headerColor]
  if (hasError) classes.push('type-map--has-error')
  return classes.join(' ')
}
