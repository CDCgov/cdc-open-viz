import { ComponentStyles } from '@cdc/core/types/ComponentStyles'
import { ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { Version } from '@cdc/core/types/Version'
import { TrendIndicatorConfig } from '@cdc/core/helpers/trendIndicator'

export type Config = {
  // supporting text in the box
  content: string
  customDenom: boolean
  data: Object[]
  dataColumn: string
  dataConditionalColumn: string
  dataConditionalComparate: string
  dataConditionalOperator: string
  dataDenom: string
  dataDenomColumn: string
  dataDenomFunction: string
  dataFunction: string
  dataUrl?: string
  dataMetadata?: any
  filters: any[]
  // data point font size (main number)
  fontSize: string
  invalidComparate: false
  nodeSpacer: number
  nodeWidth: number
  orientation: 'horizontal' | 'vertical'
  overallFontSize: 'small' | 'medium' | 'large'
  prefix?: string
  roundToPlace: number
  shape: 'square' | 'circle' | 'person'
  showDenominator: boolean
  showPercent: boolean
  subtext: string
  suffix: string
  theme: ComponentThemes
  title: string
  showTitle: boolean
  type: 'waffle-chart'
  valueDescription: string
  visual: ComponentStyles & {
    whiteBackground?: boolean
  }
  visualizationSubType: 'linear' | ''
  visualizationType: 'Gauge' | 'Waffle' | 'TP5 Waffle' | 'TP5 Gauge'
  version: Version
  locale: string
  markupVariables?: any[]
  enableMarkupVariables?: boolean
  trendIndicator?: TrendIndicatorConfig
}
