import { ViewportSize } from '../types/ViewportSize'

const BREAKPOINTS = ['xxs', 'xs', 'sm', 'md', 'lg']

export const isBelowBreakpoint = (breakpoint: ViewportSize, currentViewport: ViewportSize) =>
  BREAKPOINTS.indexOf(currentViewport) < BREAKPOINTS.indexOf(breakpoint)

export const isLegendWrapViewport = currentViewport => isBelowBreakpoint('sm', currentViewport)

export const isMobileHeightViewport = currentViewport => isBelowBreakpoint('sm', currentViewport)

export const isMobileStateLabelViewport = currentViewport => isBelowBreakpoint('md', currentViewport)

export const isMobileTerritoryViewport = currentViewport => isBelowBreakpoint('sm', currentViewport)

export const isMobileFontViewport = currentViewport => isBelowBreakpoint('sm', currentViewport)
