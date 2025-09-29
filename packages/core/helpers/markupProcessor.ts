import _ from 'lodash'
import { MarkupVariable, MarkupCondition } from '../types/MarkupVariable'

/**
 * Processes markup variables in content, replacing {{variable}} tags with actual data values
 * @param content - The content string containing markup variables
 * @param data - The dataset to extract values from
 * @param markupVariables - Array of markup variable configurations
 * @param isEditor - Whether in editor mode (affects list conjunction)
 * @param showNoDataMessage - Whether to show no data messages
 * @param allowHideSection - Whether to allow hiding sections when variables are empty
 * @returns Object containing processed content and state flags
 */
export const processMarkupVariables = (
  content: string,
  data: any[] = [],
  markupVariables: MarkupVariable[] = [],
  options: {
    isEditor?: boolean
    showNoDataMessage?: boolean
    allowHideSection?: boolean
  } = {}
): {
  processedContent: string
  shouldHideSection: boolean
  shouldShowNoDataMessage: boolean
} => {
  const { isEditor = false, showNoDataMessage = false, allowHideSection = false } = options

  if (_.isEmpty(markupVariables) || !content) {
    return {
      processedContent: content,
      shouldHideSection: false,
      shouldShowNoDataMessage: false
    }
  }

  const emptyVariableChecker: boolean[] = []
  const noDataMessageChecker: boolean[] = []

  const variableRegexPattern = /{{(.*?)}}/g
  const processedContent = content.replace(variableRegexPattern, variableTag => {
    if (emptyVariableChecker.length > 0) return variableTag

    const workingVariable = markupVariables.find(variable => variable.tag === variableTag)
    if (!workingVariable) return variableTag

    const workingData =
      workingVariable.conditions.length === 0
        ? data
        : filterDataByConditions(data, [...workingVariable.conditions])

    const variableValues: string[] = _.uniq(
      (workingData || []).map(dataObject => {
        const dataObjectValue = dataObject[workingVariable.columnName]
        return workingVariable.addCommas && !isNaN(parseFloat(dataObjectValue))
          ? parseFloat(dataObjectValue).toLocaleString('en-US', { useGrouping: true })
          : String(dataObjectValue || '')
      })
    ).filter(value => value !== '') // Filter out empty values

    const listConjunction = !isEditor ? 'and' : 'or'
    const formattedValues = formatValuesList(variableValues, listConjunction)

    const finalDisplay = formattedValues.join(', ')

    if (showNoDataMessage && finalDisplay === '') {
      noDataMessageChecker.push(true)
    }

    if (finalDisplay === '' && allowHideSection) {
      emptyVariableChecker.push(true)
    }

    return finalDisplay
  })

  return {
    processedContent,
    shouldHideSection: allowHideSection && emptyVariableChecker.length > 0 && !isEditor,
    shouldShowNoDataMessage: showNoDataMessage && noDataMessageChecker.length > 0 && !isEditor
  }
}

/**
 * Filters data based on multiple conditions
 */
const filterDataByConditions = (data: any[], conditions: MarkupCondition[]): any[] => {
  if (!conditions.length) return data

  const [currentCondition, ...remainingConditions] = conditions
  const { columnName, isOrIsNotEqualTo, value } = currentCondition

  const filteredData = isOrIsNotEqualTo === 'is'
    ? data.filter(dataObject => String(dataObject[columnName]) === value)
    : data.filter(dataObject => String(dataObject[columnName]) !== value)

  return remainingConditions.length === 0
    ? filteredData
    : filterDataByConditions(filteredData, remainingConditions)
}

/**
 * Formats a list of values with proper conjunction
 */
const formatValuesList = (values: string[], conjunction: string): string[] => {
  if (values.length === 0) return values
  if (values.length === 1) return values
  if (values.length === 2) {
    return [`${values[0]} ${conjunction} ${values[1]}`]
  }

  const formatted = [...values]
  formatted[formatted.length - 1] = `${conjunction} ${formatted[formatted.length - 1]}`
  return [formatted.join(', ')]
}

/**
 * Validates markup variables configuration
 */
export const validateMarkupVariables = (
  markupVariables: MarkupVariable[],
  data: any[]
): string[] => {
  const errors: string[] = []

  if (!markupVariables || !Array.isArray(markupVariables)) {
    return errors
  }

  const availableColumns = data.length > 0 ? Object.keys(data[0]) : []

  markupVariables.forEach((variable, index) => {
    if (!variable.tag || !variable.tag.match(/^{{.+}}$/)) {
      errors.push(`Variable ${index + 1}: Tag must be in format {{tagName}}`)
    }

    if (!variable.columnName) {
      errors.push(`Variable ${index + 1}: Column name is required`)
    } else if (availableColumns.length > 0 && !availableColumns.includes(variable.columnName)) {
      errors.push(`Variable ${index + 1}: Column "${variable.columnName}" not found in data`)
    }

    variable.conditions.forEach((condition, condIndex) => {
      if (!condition.columnName) {
        errors.push(`Variable ${index + 1}, Condition ${condIndex + 1}: Column name is required`)
      } else if (availableColumns.length > 0 && !availableColumns.includes(condition.columnName)) {
        errors.push(`Variable ${index + 1}, Condition ${condIndex + 1}: Column "${condition.columnName}" not found in data`)
      }

      if (!condition.value) {
        errors.push(`Variable ${index + 1}, Condition ${condIndex + 1}: Value is required`)
      }
    })
  })

  return errors
}