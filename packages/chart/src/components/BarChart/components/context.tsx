import { createContext } from 'react'

const BarChartContext = createContext(null)

export type BarChartContextValues = {
  xMax: number
  yMax: number
  xScale: Function
  yScale: Function
  seriesScale: Function
}

export default BarChartContext
