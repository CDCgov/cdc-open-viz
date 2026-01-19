import { BaseVisualizationConfig } from './BaseVisualizationConfig'
import { Runtime } from '@cdc/core/types/Runtime'
import { MarkupVariable } from './MarkupVariable'
import { VizFilter } from './VizFilter'

export interface MarkupIncludeConfig extends BaseVisualizationConfig {
  type: 'markup-include'
  contentEditor: {
    // Changing the base config object creates an infinite loop, nesting it is a workaround
    allowHideSection?: boolean
    inlineHTML: string
    markupVariables?: MarkupVariable[]
    showHeader: boolean
    showNoDataMessage?: boolean
    noDataMessageText?: string
    srcUrl: string
    title: string
    titleStyle?: 'legacy' | 'large' | 'small'
    useInlineHTML: boolean
  }
  data?: Object[]
  enableMarkupVariables?: boolean
  filters?: VizFilter[]
  formattedData: {}
  markupVariables?: MarkupVariable[] // Support markupVariables at root level for backwards compatibility
  runtime?: Runtime
  visual: {
    border: boolean
    accent: boolean
    background: boolean
    hideBackgroundColor: boolean
    borderColorTheme: boolean
  }
}
