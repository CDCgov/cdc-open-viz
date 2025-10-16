import { Runtime } from '@cdc/core/types/Runtime'
import { Variable } from '@cdc/markup-include/src/types/Variable'
import { Visualization } from './Visualization'
import { VizFilter } from './VizFilter'

export type MarkupIncludeConfig = Visualization & {
  contentEditor: {
    // Changing the base config object creates an infinite loop, nesting it is a workaround
    allowHideSection?: boolean
    inlineHTML: string
    markupVariables?: Variable[]
    showHeader: boolean
    showNoDataMessage?: boolean
    noDataMessageText?: string
    srcUrl: string
    title: string
    useInlineHTML: boolean
  }
  data?: Object[]
  filters?: VizFilter[]
  formattedData: {}
  markupVariables?: Variable[] // Support markupVariables at root level for backwards compatibility
  newViz?: boolean
  runtime?: Runtime
  visual: {
    border: boolean
    accent: boolean
    background: boolean
    hideBackgroundColor: boolean
    borderColorTheme: boolean
  }
}
