import { clamp } from 'lodash'

import { isMobileHeightViewport } from '@cdc/core/helpers/viewports'
import { ChartConfig } from '../types/ChartConfig'
import { ViewportSize } from '@cdc/core/types/ViewportSize'
import { EDITOR_WIDTH } from '@cdc/core/helpers/constants'

export function getOrientation(
  { orientation, heights, visualizationType }: Pick<ChartConfig, 'orientation' | 'heights' | 'visualizationType'>,
  currentViewport: ViewportSize
): 'vertical' | 'horizontal' | 'mobileVertical' {
  const isForestPlot = visualizationType === 'Forest Plot'
  const useVertical = orientation === 'vertical' || isForestPlot
  const useMobileVertical = heights?.mobileVertical && isMobileHeightViewport(currentViewport)
  const responsiveVertical = useMobileVertical ? 'mobileVertical' : 'vertical'

  return useVertical ? responsiveVertical : 'horizontal'
}
export function calcInitialHeight(
  { heights, orientation, visualizationType }: Pick<ChartConfig, 'heights' | 'orientation' | 'visualizationType'>,
  currentViewport: ViewportSize
): number {
  // if no heights are provided assume config has not been loaded
  if (!heights) return 0

  const renderedOrientation = getOrientation({ orientation, heights, visualizationType }, currentViewport)
  const height = Number(heights?.[renderedOrientation])
  return isNaN(height) ? 0 : height
}

export function handleAutoPaddingRight(parentRef, xAxisLabelRefs, parentWidth): [boolean, number] {
  const parentX = parentRef.current.getBoundingClientRect().x
  const editorIsOpen = !!document.querySelector('.editor-panel:not(.hidden)')
  const lastTickRect = xAxisLabelRefs.current?.[xAxisLabelRefs.current.length - 1]?.getBoundingClientRect()
  const lastBottomTickEnd = lastTickRect ? lastTickRect.x + lastTickRect.width : 0
  const editorWidth = editorIsOpen ? EDITOR_WIDTH : 0
  const calculatedOverhang = lastBottomTickEnd - parentX - editorWidth - parentWidth

  const paddingToAdd = clamp(calculatedOverhang, 0, 20)
  const currentPadding = Number(parentRef.current.style.paddingRight.replace('px', ''))
  const paddingDiff = Math.abs(currentPadding - paddingToAdd)
  const DIFF_THRESHOLD = 5

  const noChange = currentPadding === calculatedOverhang
  const insufficientDiff = (paddingDiff < DIFF_THRESHOLD && calculatedOverhang > 0) || Math.abs(calculatedOverhang) < 1
  const updatePadding = !noChange && !insufficientDiff

  return [updatePadding, paddingToAdd]
}
