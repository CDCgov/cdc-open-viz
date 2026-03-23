import { Runtime } from '@cdc/core/types/Runtime'
import { MarkupVariable } from './MarkupVariable'
import { Visualization } from './Visualization'
import { VizFilter } from './VizFilter'

export type MarkupIncludeConfig = Visualization & {
  contentEditor: {
    // Changing the base config object creates an infinite loop, nesting it is a workaround
    allowHideSection?: boolean
    inlineHTML: string
    markupVariables?: MarkupVariable[]
    showHeader: boolean
    showNoDataMessage?: boolean
    noDataMessageText?: string
    srcUrl: string
    style?: 'default' | 'tp5'
    title: string
    titleStyle?: 'legacy' | 'large' | 'small'
    useInlineHTML: boolean
  }
  data?: Object[]
  dataMetadata?: Record<string, string>
  enableMarkupVariables?: boolean
  filters?: VizFilter[]
  formattedData: {}
  markupVariables?: MarkupVariable[] // Support markupVariables at root level for backwards compatibility
  newViz?: boolean
  runtime?: Runtime
  visual: {
    border: boolean
    accent: boolean
    background: boolean
    hideBackgroundColor: boolean
    borderColorTheme: boolean
    whiteBackground?: boolean
  }
}
