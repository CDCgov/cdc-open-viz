import type { SvgRegistryId } from '../helpers/svgRegistry'

export type MarkupCondition = {
  columnName: string
  isOrIsNotEqualTo: 'is' | 'is not'
  value: string
}

export type MarkupVariableSourceType = 'column' | 'metadata' | 'icon'

export type MarkupVariableOutputType = 'value' | 'svg'

export type MarkupVariableSelectionMode = 'all' | 'first'

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
  selectionMode?: MarkupVariableSelectionMode
  addCommas?: boolean
  hideOnNull?: boolean
  metadataKey?: string
  iconId?: SvgRegistryId
  outputType?: MarkupVariableOutputType
  svgMappings?: MarkupVariableSvgMapping[]
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
