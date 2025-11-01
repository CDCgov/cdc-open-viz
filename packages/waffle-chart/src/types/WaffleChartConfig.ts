import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { ComponentThemes } from '@cdc/core/types/ComponentThemes'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { EditorPanel_Visual } from '@cdc/core/types/EditorPanel_Visual'

/**
 * Configuration interface for Waffle Chart visualizations.
 * Extends BaseVisualizationConfig with waffle-chart-specific properties.
 */
export interface WaffleChartConfig extends BaseVisualizationConfig {
  // Override base properties to be more specific or required
  type: 'waffle-chart'
  data: Object[]
  filters: VizFilter[]

  // Override visual to use required visual properties
  visual: EditorPanel_Visual

  // Waffle Chart specific properties
  content: string // supporting text in the box
  customDenom: boolean
  dataColumn: string
  dataConditionalColumn: string
  dataConditionalComparate: string
  dataConditionalOperator: string
  dataDenom: string
  dataDenomColumn: string
  dataDenomFunction: string
  dataFunction: string
  fontSize: string // data point font size (main number)
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
  valueDescription: string
  visualizationSubType: 'linear' | ''
  visualizationType: 'Gauge' | 'Waffle'
}
