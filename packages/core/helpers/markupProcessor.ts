import _ from 'lodash'
import { MarkupVariable, MarkupCondition } from '../types/MarkupVariable'

/**
 * Replaces {{variable}} tags in content with actual data values.
 *
 * @param content - Content string with markup variables
 * @param data - Dataset to extract values from
 * @param markupVariables - Variable configurations
 * @param options - isEditor, showNoDataMessage, allowHideSection
 * @returns Processed content and state flags
 *
 * @security Returns plain text - must be parsed with html-react-parser before rendering
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

  // Early return for invalid inputs
  if (_.isEmpty(markupVariables) || !content) {
    return {
      processedContent: content || '',
      shouldHideSection: false,
      shouldShowNoDataMessage: false
    }
  }

  try {
    const emptyVariableChecker: boolean[] = []
    const noDataMessageChecker: boolean[] = []

    const variableRegexPattern = /{{(.*?)}}/g
    const processedContent = content.replace(variableRegexPattern, variableTag => {
      try {
        if (emptyVariableChecker.length > 0) return variableTag

        const workingVariable = markupVariables.find(variable => variable.tag === variableTag)
        if (!workingVariable) return variableTag

        // Validate that columnName exists
        if (!workingVariable.columnName) {
          console.warn(`Markup variable ${variableTag} has no columnName specified`)
          return variableTag
        }

        // Filter data with error handling
        const workingData =
          workingVariable.conditions.length === 0
            ? data
            : filterDataByConditions(data, [...workingVariable.conditions])

        // Extract values with error handling
        const variableValues: string[] = _.uniq(
          (workingData || []).map(dataObject => {
            try {
              const dataObjectValue = dataObject[workingVariable.columnName]

              // Handle undefined column
              if (dataObjectValue === undefined && isEditor) {
                console.warn(
                  `Column "${workingVariable.columnName}" not found in data for variable ${variableTag}`
                )
              }

              return workingVariable.addCommas && !isNaN(parseFloat(dataObjectValue))
                ? parseFloat(dataObjectValue).toLocaleString('en-US', { useGrouping: true })
                : String(dataObjectValue || '')
            } catch (error) {
              console.error(`Error processing data value for ${variableTag}:`, error)
              return ''
            }
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
      } catch (error) {
        console.error(`Error processing markup variable ${variableTag}:`, error)
        return variableTag // Return original tag on error
      }
    })

    return {
      processedContent,
      shouldHideSection: allowHideSection && emptyVariableChecker.length > 0 && !isEditor,
      shouldShowNoDataMessage: showNoDataMessage && noDataMessageChecker.length > 0 && !isEditor
    }
  } catch (error) {
    console.error('Error in processMarkupVariables:', error)
    // Return original content on error
    return {
      processedContent: content,
      shouldHideSection: false,
      shouldShowNoDataMessage: false
    }
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