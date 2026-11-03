import { createContext, type ReactNode, useContext } from 'react'
import type { ChartConfig } from '../../../../types/ChartConfig'

export type DataSeriesRootField = 'dynamicSeriesType' | 'dynamicSeriesLineType'
export type ConfidenceKey = 'upper' | 'lower'
export type DataSeriesItem = ChartConfig['series'][number]

export type DataSeriesSectionModel = {
  visualizationType: ChartConfig['visualizationType']
  isLollipopChart: boolean
  dynamicSeries: boolean
  dynamicSeriesType?: string
  dynamicSeriesLineType?: string
  series?: ChartConfig['series']
  confidenceKeys: ChartConfig['confidenceKeys']
  rankByValue?: ChartConfig['rankByValue']
  supportsDynamicSeries: boolean
  supportsRankByValue: boolean
  seriesOptions: string[]
  columnOptions: string[]
  curveOptions: string[]
}

export type DataSeriesSectionContextValue = {
  model: DataSeriesSectionModel
  onRootFieldChange: (field: DataSeriesRootField, value: unknown) => void
  onAddSeries: (column: string) => void
  onReorderSeries: (from: number, to: number) => void
  onConfidenceKeyChange: (field: ConfidenceKey, column: string) => void
  onRankByValueChange: (value: ChartConfig['rankByValue']) => void
  getColumns: (filter?: boolean) => string[]
  handleForecastPaletteSelection: (palette: string, seriesIndex: number, stageIndex: number) => void
  renderSeriesItem: (series: DataSeriesItem, index: number) => ReactNode
  preliminaryDataEditor: ReactNode
}

const DataSeriesSectionContext = createContext<DataSeriesSectionContextValue | null>(null)

export const useDataSeriesSectionContext = () => {
  const context = useContext(DataSeriesSectionContext)
  if (!context) throw new Error('COVE: Data Series section context is null.')
  return context
}

export const DataSeriesSectionProvider = DataSeriesSectionContext.Provider
