import _ from 'lodash'
import { MarkupVariable, MarkupCondition } from '../types/MarkupVariable'
import { VizFilter } from '../types/VizFilter'
import { Datasets } from '../types/DataSet'
import { filterVizData } from './filterVizData'

/**
 * Replaces {{variable}} tags in content with actual data values.
 *
 * @param content - Content string with markup variables
 * @param data - Dataset to extract values from (for backward compatibility)
 * @param markupVariables - Variable configurations
 * @param options - isEditor, showNoDataMessage, allowHideSection, filters, datasets
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
    filters?: VizFilter[]
    datasets?: Datasets
    configDataKey?: string // Add support for widget's assigned dataset
    locale?: string
    dataMetadata?: Record<string, string>
  } = {}
): {
  processedContent: string
  shouldHideSection: boolean
  shouldShowNoDataMessage: boolean
} => {
  const {
    isEditor = false,
    showNoDataMessage = false,
    allowHideSection = false,
    filters = [],
    datasets,
    configDataKey,
    locale = 'en-US'
  } = options

  // Helper function to get data for a specific variable
  const getDataForVariable = (variable: MarkupVariable): any[] => {
    // If data prop is empty, try to use the widget's assigned dataset
    if ((!data || data.length === 0) && configDataKey && datasets && datasets[configDataKey]) {
      return datasets[configDataKey].data || []
    }

    return data || []
  }

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

        // Resolve the data source for this variable. Metadata-sourced variables
        // (metadataKey) pull a single value from the data file's top-level fields,
        // while column-sourced variables (columnName) pull from dataset rows.
        // Both paths produce a `conditionFilteredData` array so the downstream
        // extraction, formatting (addCommas), dedup, and hide-check logic is shared.
        let effectiveColumnName: string
        let conditionFilteredData: any[]

        if (workingVariable.metadataKey) {
          // Metadata path: synthesize a single-row array from the file-level metadata
          // so it flows through the same formatting pipeline as column values.
          effectiveColumnName = workingVariable.metadataKey
          const metaValue = options.dataMetadata?.[effectiveColumnName] ?? ''
          conditionFilteredData = metaValue ? [{ [effectiveColumnName]: metaValue }] : []
        } else {
          // Column path: pull values from the dataset, applying filters and conditions.
          if (!workingVariable.columnName) {
            console.warn(`Markup variable ${variableTag} has no columnName specified`)
            return variableTag
          }
          effectiveColumnName = workingVariable.columnName

          let variableData = getDataForVariable(workingVariable)
          if (filters && filters.length > 0) {
            variableData = filterVizData(filters, variableData)
          }

          conditionFilteredData =
            workingVariable.conditions.length === 0
              ? variableData
              : filterDataByConditions(variableData, [...workingVariable.conditions])
        }

        // Extract values with error handling
        const variableValues: string[] = _.uniq(
          (conditionFilteredData || []).map(dataObject => {
            try {
              const dataObjectValue = dataObject[effectiveColumnName]

              if (dataObjectValue === undefined && isEditor) {
                console.warn(`Column "${effectiveColumnName}" not found in data for variable ${variableTag}`)
              }

              return workingVariable.addCommas && !isNaN(parseFloat(dataObjectValue))
                ? parseFloat(dataObjectValue).toLocaleString(locale, { useGrouping: true })
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

  const filteredData =
    isOrIsNotEqualTo === 'is'
      ? data.filter(dataObject => String(dataObject[columnName]) === value)
      : data.filter(dataObject => String(dataObject[columnName]) !== value)

  return remainingConditions.length === 0 ? filteredData : filterDataByConditions(filteredData, remainingConditions)
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
export const validateMarkupVariables = (markupVariables: MarkupVariable[], data: any[]): string[] => {
  const errors: string[] = []

  if (!markupVariables || !Array.isArray(markupVariables)) {
    return errors
  }

  const availableColumns = data.length > 0 ? Object.keys(data[0]) : []

  markupVariables.forEach((variable, index) => {
    if (!variable.tag || !variable.tag.match(/^{{.+}}$/)) {
      errors.push(`Variable ${index + 1}: Tag must be in format {{tagName}}`)
    }

    if (!variable.metadataKey && !variable.columnName) {
      errors.push(`Variable ${index + 1}: Column name is required`)
    } else if (variable.columnName && availableColumns.length > 0 && !availableColumns.includes(variable.columnName)) {
      errors.push(`Variable ${index + 1}: Column "${variable.columnName}" not found in data`)
    }

    variable.conditions.forEach((condition, condIndex) => {
      if (!condition.columnName) {
        errors.push(`Variable ${index + 1}, Condition ${condIndex + 1}: Column name is required`)
      } else if (availableColumns.length > 0 && !availableColumns.includes(condition.columnName)) {
        errors.push(
          `Variable ${index + 1}, Condition ${condIndex + 1}: Column "${condition.columnName}" not found in data`
        )
      }

      if (!condition.value) {
        errors.push(`Variable ${index + 1}, Condition ${condIndex + 1}: Value is required`)
      }
    })
  })

  return errors
}
