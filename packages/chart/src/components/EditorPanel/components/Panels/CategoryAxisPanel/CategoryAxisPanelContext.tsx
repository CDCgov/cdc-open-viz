import { createContext, useContext, type Dispatch, type SetStateAction } from 'react'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type HighlightedBarValue = ChartConfig['highlightedBarValues'][number]
type ValueChangeEvent = { target: { value: any } }
type PreventableEvent = { preventDefault: () => void }

export type CategoryAxisPanelContextValue = {
  config: ChartConfig
  isBarRace: boolean
  excludedData: Record<string, any>[]
  lineOptions: { value: string; label?: string }[]
  displayViewportOverrides: boolean
  highlightedBarValues: HighlightedBarValue[]
  highlightedSeriesOptions: { value: any; label: any }[]
  updateConfig: (config: ChartConfig, data?: Record<string, any>[]) => void
  updateField: (...args: any[]) => void
  updateFieldDeprecated: (...args: any[]) => void
  getColumns: (filter?: boolean) => string[]
  getAutoDetectedXAxisDateParseFormat: (dataKey: string, type: string) => string | undefined
  updateCategoryOrder: (categoryOrder: string[]) => void
  updateCategoryOrderType: (categoryOrderType: 'data' | 'custom', categoryOrder: string[]) => void
  setCategoryAxis: () => string
  getAvailableExclusionValues: (dataKey: string) => any[]
  addNewExclusion: (exclusionKey: string) => void
  removeExclusion: (excludeValue: string) => void
  setDisplayViewportOverrides: Dispatch<SetStateAction<boolean>>
  updateViewportOverrides: (property: string, viewport: string, numTicks: number) => void
  visHasBrushChart: () => boolean
  visSupportsDateCategoryAxisLabel: () => boolean
  visSupportsDateCategoryAxisLine: () => boolean
  visSupportsDateCategoryAxisMax: () => boolean
  visSupportsDateCategoryAxisMin: () => boolean
  visSupportsDateCategoryAxisPadding: () => boolean
  visSupportsDateCategoryAxisTicks: () => boolean
  visSupportsDateCategoryHeight: () => boolean
  visSupportsDateCategoryNumTicks: () => boolean
  visSupportsDateCategoryTickRotation: () => boolean
  visSupportsResponsiveTicks: () => boolean
  visHasAnchors: () => boolean
  handleAddNewHighlightedBar: (event: PreventableEvent, index?: number) => void
  handleHighlightedBarLegendLabel: (event: ValueChangeEvent, index: number) => void
  handleUpdateHighlightedBar: (event: ValueChangeEvent & PreventableEvent, index: number) => void
  handleRemoveHighlightedBar: (event: PreventableEvent, index: number) => void
  handleUpdateHighlightedBorderWidth: (event: ValueChangeEvent, index: number) => void
  handleUpdateHighlightedBarColor: (event: ValueChangeEvent, index: number) => void
}

const CategoryAxisPanelContext = createContext<CategoryAxisPanelContextValue | null>(null)

export const useCategoryAxisPanelContext = () => {
  const context = useContext(CategoryAxisPanelContext)
  if (!context) throw new Error('COVE: Category Axis panel context is null.')
  return context
}

export const CategoryAxisPanelProvider = CategoryAxisPanelContext.Provider
