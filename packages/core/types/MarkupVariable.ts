export type MarkupCondition = {
  columnName: string
  isOrIsNotEqualTo: 'is' | 'is not'
  value: string
}

import type { SvgRegistryId } from '../helpers/svgRegistry'

export type MarkupVariableOutputType = 'value' | 'svg'

export type MarkupVariableSvgMapping = {
  sourceValue: string
  svgId: SvgRegistryId
}

export type MarkupVariable = {
  columnName?: string
  conditions: MarkupCondition[]
  name: string
  tag: string
  addCommas?: boolean
  hideOnNull?: boolean
  metadataKey?: string
  outputType?: MarkupVariableOutputType
  svgMappings?: MarkupVariableSvgMapping[]
  svgScale?: number
}

export type MarkupConfig = {
  markupVariables?: MarkupVariable[]
  enableMarkupVariables?: boolean
}
