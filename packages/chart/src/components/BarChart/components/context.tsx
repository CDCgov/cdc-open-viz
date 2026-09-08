import { PositionScale } from '@visx/shape/lib/types'
import { createContext } from 'react'

const BarChartContext = createContext(null)

export type BarChartContextValues = {
  xMax: number
  yMax: number
  xScale: PositionScale
  yScale: PositionScale
  seriesScale: Function
  convertLineToBarGraph: boolean
  barChart: {
    assignColorsToValues: Function
    barBorderWidth: number
    getAdditionalColumn: Function
    formatTooltipValue: (
      seriesKey: string,
      xAxisValue: unknown,
      displayValue: string | number,
      rowIndex?: number
    ) => string | number
    getHighlightedBarByValue: Function
    getHighlightedBarColorByValue: Function
    lollipopBarWidth: number
    lollipopShapeSize: number
    labelFontSize: number
    onMouseLeaveBar: Function
    onMouseOverBar: Function
    section: string
    hoveredBar: string
    isHorizontal: boolean
    isLabelBelowBar: boolean
    displayNumbersOnBar: boolean
    barStackedSeriesKeys: string[]
  }
}

export default BarChartContext
