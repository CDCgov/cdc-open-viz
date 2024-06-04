import { Runtime } from '@cdc/core/types/Runtime'
import { Variable } from '@cdc/markup-include/src/types/Variable'
import { Visualization } from './Visualization'

export type MarkupIncludeConfig = Visualization & {
  contentEditor: {
    // Changing the base config object creates an infinite loop, nesting it is a workaround
    inlineHTML: string
    markupVariables: Variable[]
    showHeader: boolean
    srcUrl: string
    title: string
    useInlineHTML: boolean
  }
  data?: Object[]
  formattedData: {}
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
