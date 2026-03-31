export type MarkupCondition = {
  columnName: string
  isOrIsNotEqualTo: 'is' | 'is not'
  value: string
}

import type { SvgRegistryId } from '../helpers/svgRegistry'

export type MarkupVariableSourceType = 'column' | 'metadata' | 'icon'

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
  sourceType?: MarkupVariableSourceType
  addCommas?: boolean
  hideOnNull?: boolean
  metadataKey?: string
  iconId?: SvgRegistryId
  outputType?: MarkupVariableOutputType
  svgMappings?: MarkupVariableSvgMapping[]
  svgScale?: number
}

export const getMarkupVariableSourceType = (
  variable: Partial<MarkupVariable>
): MarkupVariableSourceType => {
  if (variable.sourceType) {
    return variable.sourceType
  }

  return variable.metadataKey ? 'metadata' : 'column'
}

export const isDataDrivenIconsVariable = (variable: Partial<MarkupVariable>): boolean => {
  return getMarkupVariableSourceType(variable) === 'column' && variable.outputType === 'svg'
}

export type MarkupConfig = {
  markupVariables?: MarkupVariable[]
  enableMarkupVariables?: boolean
}
