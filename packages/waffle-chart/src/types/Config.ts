import { ComponentStyles } from '@cdc/core/types/ComponentStyles'
import { ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { Version } from '@cdc/core/types/Version'

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
  visual: ComponentStyles
  visualizationSubType: 'linear' | ''
  visualizationType: 'Gauge' | 'Waffle'
  version: Version
}
