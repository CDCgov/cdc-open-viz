// todo: improve base config to extend from

import { Runtime } from '@cdc/core/types/Runtime'

// todo: theme type is different from waffle chart so its been assigned to any for now.

export type Condition = {
  columnName: string
  isOrIsNotEqualTo: string
  value: string
}

export type Variable = {
  columnName: string
  conditions: Condition[]
  name: string
  tag: string
}

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
