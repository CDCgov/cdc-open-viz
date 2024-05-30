import { Runtime } from '@cdc/core/types/Runtime'
import { Variable } from './Variable'

export type Config = {
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
  legend: {}
  newViz?: boolean
  runtime?: Runtime
  theme: any
  type: string
  showEditorPanel?: boolean
  visual: {
    border: boolean
    accent: boolean
    background: boolean
    hideBackgroundColor: boolean
    borderColorTheme: boolean
  }
}
