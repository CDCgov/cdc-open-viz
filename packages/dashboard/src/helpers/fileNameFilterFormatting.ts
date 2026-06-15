import { capitalizeSplitAndJoin } from '@cdc/core/helpers/cove/string'
import { SharedFilter } from '../types/SharedFilter'

type FileNameFormattingOptions = Pick<SharedFilter, 'forceFileNameCapitalization' | 'whitespaceReplacement'>

export const FILE_NAME_WHITESPACE_REPLACEMENTS: Record<NonNullable<SharedFilter['whitespaceReplacement']>, string> = {
  'Remove Spaces': '',
  'Keep Spaces': ' ',
  'Replace With Underscore': '_'
}

export const getFileNameWhitespaceReplacement = (whitespaceReplacement?: SharedFilter['whitespaceReplacement']) =>
  FILE_NAME_WHITESPACE_REPLACEMENTS[whitespaceReplacement ?? 'Keep Spaces']

export const formatFileNameFilterValue = (value: string | number, filter: FileNameFormattingOptions = {}) => {
  const stringValue = String(value)
  const whitespaceReplacement = getFileNameWhitespaceReplacement(filter.whitespaceReplacement)
  return filter.forceFileNameCapitalization
    ? capitalizeSplitAndJoin.call(stringValue, ' ', whitespaceReplacement)
    : stringValue.split(' ').join(whitespaceReplacement)
}

export const formatFileNameFilterTemplate = (value: string, filter: FileNameFormattingOptions = {}) => {
  const whitespaceReplacement = getFileNameWhitespaceReplacement(filter.whitespaceReplacement)
  return filter.forceFileNameCapitalization ? capitalizeSplitAndJoin.call(value, ' ', whitespaceReplacement) : value
}
