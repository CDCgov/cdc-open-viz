import { DataVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { ComponentStyles } from '@cdc/core/types/ComponentStyles'
import { ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { Version } from '@cdc/core/types/Version'
import { DataRow } from '@cdc/core/types/DataRow'

export interface WaffleChartConfig extends DataVisualizationConfig {
  type: 'waffle-chart'
  // supporting text in the box
  content: string
  customDenom: boolean
  data: DataRow[]
  dataColumn: string
  dataConditionalColumn: string
  dataConditionalComparate: string
  dataConditionalOperator: string
  dataDenom: string
  dataDenomColumn: string
  dataDenomFunction: string
  dataFunction: string
  dataUrl?: string
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
  valueDescription: string
  visual: ComponentStyles & {
    whiteBackground?: boolean
  }
  visualizationSubType: 'linear' | ''
  visualizationType: 'Gauge' | 'Waffle' | 'TP5 Waffle'
  version: Version
}
