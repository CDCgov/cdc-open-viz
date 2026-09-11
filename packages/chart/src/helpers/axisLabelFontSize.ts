import { isMobileFontViewport } from '@cdc/core/helpers/viewports'
import type { ViewPort } from '@cdc/core/types/ViewPort'

export const AXIS_LABEL_FONT_SIZE = 18
export const AXIS_LABEL_FONT_SIZE_SMALL = 14

export const getAxisLabelFontSize = (vizViewport: ViewPort) =>
  isMobileFontViewport(vizViewport) ? AXIS_LABEL_FONT_SIZE_SMALL : AXIS_LABEL_FONT_SIZE
