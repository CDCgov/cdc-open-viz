import { createContext, type ReactNode, useContext } from 'react'
import type { ChartConfig } from '../../../../../../types/ChartConfig'

export type ValueAxisYAxisField =
  | 'label'
  | 'size'
  | 'hideAxis'
  | 'hideLabel'
  | 'hideTicks'
  | 'tickRotation'
  | 'numTicks'
  | 'gridLines'
  | 'labelsAboveGridlines'
  | 'smallestLeftAxisMax'
  | 'autoMaxStrategy'
  | 'filterDomainBehavior'
  | 'max'
  | 'min'
  | 'enablePadding'
  | 'scalePadding'
  | 'titlePlacement'
  | 'inlineLabel'

export type ValueAxisXAxisField =
  | 'maxTickRotation'
  | 'hideAxis'
  | 'hideLabel'
  | 'hideTicks'
  | 'max'
  | 'min'
  | 'target'
  | 'targetLabel'
  | 'showTargetLabel'

export type ValueAxisDataFormatField =
  | 'commas'
  | 'abbreviated'
  | 'roundTo'
  | 'preserveOriginalDecimals'
  | 'prefix'
  | 'suffix'

export type ValueAxisRootField = 'isLegendValue' | 'isResponsiveTicks'

export type ValueAxisInputUpdate<Field extends string> = (
  section: unknown,
  subsection: unknown,
  field: Field,
  value: unknown
) => void

type ValueAxisYAxisModel = Pick<
  ChartConfig['yAxis'],
  ValueAxisYAxisField | 'type' | 'categoryMode' | 'dataDrivenCategories'
>

type ValueAxisXAxisModel = Pick<ChartConfig['xAxis'], ValueAxisXAxisField>

export type ValueAxisControlsModel = {
  visualizationType: ChartConfig['visualizationType']
  visualizationSubType?: ChartConfig['visualizationSubType']
  orientation?: ChartConfig['orientation']
  isBarRace: boolean
  hasCategoricalAxis: boolean
  seriesCount: number
  yAxis: ValueAxisYAxisModel
  xAxis: ValueAxisXAxisModel
  dataFormat: Pick<ChartConfig['dataFormat'], ValueAxisDataFormatField>
  root: Pick<ChartConfig, ValueAxisRootField>
  warnings: { max?: string; min?: string }
  permissions: {
    gridLines: boolean
    axisLine: boolean
    axisLabels: boolean
    axisTicks: boolean
    axisMax: boolean
    axisMin: boolean
    autoMaxStrategy: boolean
    filterDomainBehavior: boolean
    yPadding: boolean
  }
  categoricalAxisEditor?: ReactNode
  anchorEditor?: ReactNode
}

export type ValueAxisControlsContextValue = {
  model: ValueAxisControlsModel
  onLegacyYAxisChange: (field: ValueAxisYAxisField, value: unknown) => void
  onCurrentYAxisChange: (field: 'titlePlacement' | 'inlineLabel', value: unknown) => void
  onLegacyXAxisChange: (field: ValueAxisXAxisField, value: unknown) => void
  onDataFormatChange: (field: ValueAxisDataFormatField, value: unknown) => void
  onRootChange: (field: ValueAxisRootField, value: unknown) => void
  onAxisTypeChange: (value: unknown) => void
}

const ValueAxisControlsContext = createContext<ValueAxisControlsContextValue | null>(null)

export const useValueAxisControlsContext = () => {
  const context = useContext(ValueAxisControlsContext)
  if (!context) throw new Error('COVE: Value Axis controls context is null.')
  return context
}

export const ValueAxisControlsProvider = ValueAxisControlsContext.Provider
