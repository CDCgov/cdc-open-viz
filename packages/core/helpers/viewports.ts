import { ViewportSize } from '@cdc/map/src/types/MapConfig'

const BREAKPOINTS = ['xxs', 'xs', 'sm', 'md', 'lg']

export function isBelowBreakpoint(breakpoint: ViewportSize, currentViewport: ViewportSize) {
  return BREAKPOINTS.indexOf(currentViewport) < BREAKPOINTS.indexOf(breakpoint)
}

export function isLegendWrapViewport(currentViewport) {
  return isBelowBreakpoint('sm', currentViewport)
}

export function isMobileHeightViewport(currentViewport) {
  return isBelowBreakpoint('sm', currentViewport)
}
