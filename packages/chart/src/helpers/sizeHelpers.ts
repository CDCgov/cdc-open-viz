import { isMobileHeightViewport } from '@cdc/core/helpers/viewports'
import { ChartConfig, ViewportSize } from '../types/ChartConfig'

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
