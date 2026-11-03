import { createContext, useContext } from 'react'
import type { ChartConfig } from '../../../../types/ChartConfig'

export type PieYAxisField = 'dataKey' | 'label'
export type PieDataFormatField =
  | 'commas'
  | 'abbreviated'
  | 'showPiePercent'
  | 'roundTo'
  | 'preserveOriginalDecimals'
  | 'prefix'
  | 'suffix'

export type PieDataFormatSectionModel = {
  dataKey?: ChartConfig['yAxis']['dataKey']
  label?: ChartConfig['yAxis']['label']
  columnOptions: string[]
  commas?: ChartConfig['dataFormat']['commas']
  abbreviated?: ChartConfig['dataFormat']['abbreviated']
  showPiePercent?: ChartConfig['dataFormat']['showPiePercent']
  roundTo?: ChartConfig['dataFormat']['roundTo']
  preserveOriginalDecimals?: ChartConfig['dataFormat']['preserveOriginalDecimals']
  prefix?: ChartConfig['dataFormat']['prefix']
  suffix?: ChartConfig['dataFormat']['suffix']
}

export type PieDataFormatSectionContextValue = {
  model: PieDataFormatSectionModel
  onYAxisChange: (field: PieYAxisField, value: unknown) => void
  onDataFormatChange: (field: PieDataFormatField, value: unknown) => void
}

const PieDataFormatSectionContext = createContext<PieDataFormatSectionContextValue | null>(null)

export const usePieDataFormatSectionContext = () => {
  const context = useContext(PieDataFormatSectionContext)
  if (!context) throw new Error('COVE: Pie Data Format section context is null.')
  return context
}

export const PieDataFormatSectionProvider = PieDataFormatSectionContext.Provider
