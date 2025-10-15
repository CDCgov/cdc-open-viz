import { MarkupVariable } from '../types/MarkupVariable'

export type MarkupContext = {
  markupVariables: MarkupVariable[]
  enableMarkupVariables: boolean
  isEditor: boolean
}

// This will be passed as props to components that need markup highlighting
export const createMarkupContext = (
  markupVariables: MarkupVariable[] = [],
  enableMarkupVariables: boolean = false,
  isEditor: boolean = false
): MarkupContext => ({
  markupVariables,
  enableMarkupVariables,
  isEditor
})

// Helper to check if a markup variable tag is valid
export const isValidMarkupVariable = (
  tag: string,
  markupVariables: MarkupVariable[]
): boolean => {
  return markupVariables.some(variable => variable.tag === tag)
}

// Helper to get all valid markup variable tags
export const getValidMarkupTags = (markupVariables: MarkupVariable[]): string[] => {
  return markupVariables.map(variable => variable.tag).filter(Boolean)
}