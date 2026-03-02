import { ENABLE_MAP_DATA_BITE_VISUAL_SETTINGS } from '@cdc/core/helpers/constants'

/**
 * Builds CSS class names for the main map section container
 */
type MapVisualClasses = {
  border?: boolean
  borderColorTheme?: boolean
  accent?: boolean
  background?: boolean
  hideBackgroundColor?: boolean
}

export const buildSectionClassNames = (viewport: string, headerColor: string, hasError: boolean): string => {
  const classes = ['cove-visualization__inner', 'cdc-map-inner-container', viewport, headerColor]
  if (hasError) classes.push('type-map--has-error')
  return classes.join(' ')
}

export const buildBodyWrapClassNames = (visual?: MapVisualClasses): string => {
  const classes = ['cove-visualization__body', 'cove-visualization__body-wrap']

  if (ENABLE_MAP_DATA_BITE_VISUAL_SETTINGS) {
    if (!visual?.border) classes.push('no-borders')
    if (visual?.borderColorTheme) classes.push('component--has-border-color-theme')
    if (visual?.accent) classes.push('component--has-accent')
    if (visual?.background) classes.push('component--has-background')
    if (visual?.hideBackgroundColor) classes.push('component--hide-background-color')
  }

  return classes.join(' ')
}
