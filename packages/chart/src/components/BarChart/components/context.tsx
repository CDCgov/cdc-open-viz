import { createContext } from 'react'

const BarChartContext = createContext(null)

export type BarChartContextValues = {
  xMax: number
  yMax: number
  xScale: Function
  yScale: Function
  seriesScale: Function
  convertLineToBarGraph: boolean
}

export default BarChartContext
