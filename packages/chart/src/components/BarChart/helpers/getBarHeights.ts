import { APP_FONT_SIZE } from '@cdc/core/helpers/constants'
import _ from 'lodash'
import { ChartConfig } from '../../../types/ChartConfig'

export const getHorizontalBarHeights = <T>(config: Partial<ChartConfig>, bars: (T & { index })[]) => {
  const isHorizontal = config.orientation === 'horizontal'

  const isStacked = config.visualizationSubType === 'stacked'

  let barHeight
  if (!isStacked) {
    const stackCount = config.runtime.seriesKeys.length
    if (config.isLollipopChart) {
      const lollipopSizes = {
        large: 7,
        medium: 6,
        small: 5
      }

      const lollipopBarWidth = lollipopSizes[config.lollipopSize] || 5
      barHeight = lollipopBarWidth * stackCount
    } else {
      barHeight = config.barHeight * stackCount
    }
  } else {
    barHeight = config.barHeight
  }

  const labelHeight = APP_FONT_SIZE * 1.2
  const labelSpace = config.yAxis.labelPlacement === 'Below Bar' ? labelHeight : 0

  const totalBarHeight = barHeight + labelSpace + Number(config.barSpace)

  if (isHorizontal) {
    // calculate height of container based height, space and fontSize of labels
    const totalHeight = bars.length * totalBarHeight
    if (!config.heights) config.heights = {}
    config.heights.horizontal = totalHeight
  }

  // return new updated bars/groupes
  return bars.map((bar, i) => {
    // set bars Y dynamically to handle space between bars
    const y = bar.index === 0 ? 0 : _.round(totalBarHeight * i)
    return { ...bar, y, height: barHeight }
  })
}
