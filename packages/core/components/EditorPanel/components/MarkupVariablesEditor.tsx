import React, { useState, useMemo, useCallback } from 'react'
import { MarkupVariable, MarkupCondition } from '../../../types/MarkupVariable'
import Button from '../../elements/Button'
import { TextField, Select, CheckBox } from '../Inputs'
import Icon from '../../ui/Icon'
import Accordion from '../../ui/Accordion'
import { Datasets } from '../../../types/DataSet'
import _ from 'lodash'

type MarkupVariablesEditorProps = {
  /** Array of markup variable configurations */
  markupVariables: MarkupVariable[]
  /** Dataset to extract column names and values from (for backward compatibility) */
  data?: any[]
  /** Available datasets for multi-dataset support */
  datasets?: Datasets
  /** Configuration object containing dataKey for dataset assignment */
  config?: { dataKey?: string }
  /** Callback when variables are added, updated, or removed */
  onChange: (variables: MarkupVariable[]) => void
  /** Whether markup variables feature is enabled */
  enableMarkupVariables?: boolean
  /** Callback when enable/disable toggle changes */
  onToggleEnable?: (enabled: boolean) => void
}

export type { MarkupVariablesEditorProps }

/**
 * Editor for creating and managing markup variables with {{variable-name}} syntax.
 * Supports conditional filters, number formatting, and auto-generated tags.
 */
const MarkupVariablesEditor: React.FC<MarkupVariablesEditorProps> = ({
  markupVariables = [],
  data = [],
  datasets,
  config,
  onChange,
  enableMarkupVariables = false,
  onToggleEnable
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<number, string[]>>({})

  // Ensure we always have a valid array (memoized with deep equality to prevent unnecessary re-renders)
  const safeMarkupVariables = useMemo(() => markupVariables || [], [JSON.stringify(markupVariables)])

  // Get the target dataset with fallback logic (memoized for performance)
  const getTargetData = useCallback((): any[] => {
    // First try to use the data prop
    if (data && data.length > 0) {
      return data
    }

    // Fallback to assigned dataset using config.dataKey
    if (datasets && config?.dataKey) {
      const assignedDataset = datasets[config.dataKey]
      if (assignedDataset?.data?.length > 0) {
        return assignedDataset.data
      }
    }

    return []
  }, [data, datasets, config?.dataKey])

  // Get columns from the available data (memoized for performance)
  const getAvailableColumns = useMemo((): string[] => {
    const targetData = getTargetData()
    return targetData.length > 0 ? Object.keys(targetData[0]) : []
  }, [getTargetData])

  // Get column values for a specific column (memoized for performance)
  const getColumnValues = useCallback((columnName: string): string[] => {
    const targetData = getTargetData()
    if (targetData.length === 0) return []

    const uniqueValues = new Set<string>()
    targetData.forEach(row => {
      if (row[columnName] !== undefined && row[columnName] !== null) {
        uniqueValues.add(String(row[columnName]))
      }
    })
    return Array.from(uniqueValues).sort()
  }, [data, datasets, config?.dataKey])

  // Validate a variable and return array of error messages
  const validateVariable = React.useCallback((variable: MarkupVariable): string[] => {
    const errors: string[] = []
    if (!variable.name || variable.name.trim() === '') {
      errors.push('Variable name is required')
    }
    if (!variable.tag || variable.tag.trim() === '') {
      errors.push('Variable tag is required')
    }
    if (!variable.columnName || variable.columnName.trim() === '') {
      errors.push('Data column is required')
    }
    // Validate conditions
    variable.conditions?.forEach((condition, index) => {
      if (!condition.columnName) {
        errors.push(`Condition ${index + 1}: Column is required`)
      }
      if (!condition.value) {
        errors.push(`Condition ${index + 1}: Value is required`)
      }
    })
    return errors
  }, [])

  // Validate all variables on mount and when variables change
  React.useEffect(() => {
    const errors: Record<number, string[]> = {}
    safeMarkupVariables.forEach((variable, index) => {
      const variableErrors = validateVariable(variable)
      if (variableErrors.length > 0) {
        errors[index] = variableErrors
      }
    })

    // Only update if errors have actually changed (use deep equality)
    setValidationErrors(prev => {
      const errorsChanged = !_.isEqual(prev, errors)
      return errorsChanged ? errors : prev
    })
  }, [safeMarkupVariables, validateVariable]) // Re-validate when variables change


  const addVariable = () => {
    const newVariable: MarkupVariable = {
      name: '',
      tag: '',
      columnName: '',
      conditions: [],
      addCommas: false,
      hideOnNull: false
    }
    const newVariables = [...safeMarkupVariables, newVariable]
    onChange(newVariables)
    const newIndex = safeMarkupVariables.length
    setEditingIndex(newIndex)

    // Immediately show validation errors for the new empty variable
    const errors = validateVariable(newVariable)
    setValidationErrors(prev => ({
      ...prev,
      [newIndex]: errors
    }))
  }

  const updateVariable = (index: number, updates: Partial<MarkupVariable>) => {
    const updated = safeMarkupVariables.map((variable, i) =>
      i === index ? { ...variable, conditions: variable.conditions || [], ...updates } : variable
    )
    onChange(updated)

    // Validate and update errors for this variable
    const errors = validateVariable(updated[index])
    setValidationErrors(prev => ({
      ...prev,
      [index]: errors
    }))
  }

  const removeVariable = (index: number) => {
    const updated = safeMarkupVariables.filter((_, i) => i !== index)
    onChange(updated)
    if (editingIndex === index) {
      setEditingIndex(null)
    }
  }

  const generateTag = (name: string) => {
    if (!name) return ''
    // Convert name to tag format: "My Variable" -> "{{my-variable}}"
    return `{{${name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}}}`
  }



  const addCondition = (variableIndex: number) => {
    const variable = safeMarkupVariables[variableIndex]
    const newCondition: MarkupCondition = {
      columnName: '',
      isOrIsNotEqualTo: 'is',
      value: ''
    }
    const updatedConditions = [...(variable.conditions || []), newCondition]
    updateVariable(variableIndex, { conditions: updatedConditions })
  }

  const updateCondition = (variableIndex: number, conditionIndex: number, updates: Partial<MarkupCondition>) => {
    const variable = safeMarkupVariables[variableIndex]
    const conditions = variable.conditions || []
    const updatedConditions = conditions.map((condition, i) =>
      i === conditionIndex ? { ...condition, ...updates } : condition
    )
    updateVariable(variableIndex, { conditions: updatedConditions })
  }

  const removeCondition = (variableIndex: number, conditionIndex: number) => {
    const variable = safeMarkupVariables[variableIndex]
    const updatedConditions = variable.conditions.filter((_, i) => i !== conditionIndex)
    updateVariable(variableIndex, { conditions: updatedConditions })
  }

  return (
    <div className='markup-variables-editor'>
      <div className='mb-3'>
        <CheckBox
          value={enableMarkupVariables}
          fieldName='enableMarkupVariables'
          label='Enable Markup Variables'
          updateField={(_section, _subsection, _fieldName, value) => {
            if (onToggleEnable) {
              onToggleEnable(value)
            }
          }}
        />
      </div>

      {enableMarkupVariables && (
        <>
          <div className='mb-3'>
            <p className='text-sm text-gray-600'>
              Use variables in your content with <code>{'{{variable-name}}'}</code> syntax.
              Variables will be replaced with values from your data.
            </p>
          </div>

          {safeMarkupVariables.length > 0 && (
            <div className='variables-list mb-3'>
              {safeMarkupVariables.map((variable, index) => variable ? (
                <div key={index} className='variable-item p-3 border rounded mb-2' style={{ backgroundColor: '#fff' }}>
                  <div className='d-flex justify-content-between align-items-start mb-2'>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
                        {variable.name || 'Unnamed Variable'}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'monospace', marginBottom: '4px' }}>
                        {variable.tag}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6c757d' }}>
                        Column: <strong>{variable.columnName || 'Not selected'}</strong>
                        {variable.conditions && variable.conditions.length > 0 && (
                          <span> • {variable.conditions.length} condition{variable.conditions.length !== 1 ? 's' : ''}</span>
                        )}
                      </div>
                      {validationErrors[index] && validationErrors[index].length > 0 && (
                        <div style={{ fontSize: '12px', color: '#dc3545', marginTop: '8px' }}>
                          <strong>⚠ Validation Errors:</strong>
                          <ul style={{ margin: '4px 0 0 0', paddingLeft: '20px' }}>
                            {validationErrors[index].map((error, errorIndex) => (
                              <li key={errorIndex}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className='d-flex gap-2'>
                      <Button
                        className='btn-sm'
                        onClick={() => setEditingIndex(editingIndex === index ? null : index)}
                      >
                        {editingIndex === index ? 'Close' : 'Edit'}
                      </Button>
                    </div>
                  </div>

                  {editingIndex === index && (
                    <div className='mt-3 pt-3 border-t'>
                      <Accordion>
                        <Accordion.Section title='Basic Settings'>
                          <div className='mb-3'>
                            <TextField
                              value={variable.name}
                              fieldName='name'
                              label='Variable Name'
                              placeholder='e.g., "State Name"'
                              updateField={(section, subsection, fieldName, value) => {
                                updateVariable(index, {
                                  name: value,
                                  tag: generateTag(value)
                                })
                              }}
                            />
                          </div>
                          <div className='mb-3'>
                            <label>
                              <span className='edit-label column-heading'>Tag (auto-generated)</span>
                              <input
                                type='text'
                                value={variable.tag}
                                placeholder='{{variable-name}}'
                                readOnly
                                style={{ backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
                              />
                            </label>
                          </div>

                          <div className='mb-3'>
                            <Select
                              value={variable.columnName}
                              fieldName='columnName'
                              label='Data Column'
                              options={[
                                { value: '', label: 'Select Column...' },
                                ...getAvailableColumns.map(col => ({ value: col, label: col }))
                              ]}
                              updateField={(_section, _subsection, _fieldName, value) => {
                                updateVariable(index, { columnName: value })
                              }}
                            />
                          </div>
                        </Accordion.Section>

                        <Accordion.Section title='Conditions'>
                          <div className='text-sm text-gray-500 mb-2'>
                            Add conditions to filter when this variable should display data
                          </div>

                          {variable.conditions && variable.conditions.length > 0 && (
                            <div className='conditions-list mb-2'>
                              {variable.conditions.map((condition, conditionIndex) => (
                                <div key={`condition-${index}-${conditionIndex}`} className='condition-item p-2 border rounded mb-2' style={{ backgroundColor: '#f8f9fa' }}>
                                  <div className='mb-2'>
                                    <Select
                                      value={condition.columnName || ''}
                                      fieldName={`condition-column-${index}-${conditionIndex}`}
                                      label='Column'
                                      options={[
                                        { value: '', label: 'Select Column...' },
                                        ...getAvailableColumns.map(col => ({ value: col, label: col }))
                                      ]}
                                      updateField={(_section, _subsection, _fieldName, newColumnName) => {
                                        // Reset value when column changes
                                        updateCondition(index, conditionIndex, {
                                          columnName: newColumnName,
                                          value: ''
                                        })
                                      }}
                                    />
                                  </div>
                                  <div className='mb-2'>
                                    <Select
                                      value={condition.isOrIsNotEqualTo || 'is'}
                                      fieldName={`condition-operator-${index}-${conditionIndex}`}
                                      label='Operator'
                                      options={[
                                        { value: 'is', label: 'is' },
                                        { value: 'is not', label: 'is not' }
                                      ]}
                                      updateField={(_section, _subsection, _fieldName, value) => {
                                        updateCondition(index, conditionIndex, { isOrIsNotEqualTo: value as 'is' | 'is not' })
                                      }}
                                    />
                                  </div>
                                  <div className='mb-2'>
                                    <Select
                                      value={condition.value || ''}
                                      fieldName={`condition-value-${index}-${conditionIndex}`}
                                      label='Value'
                                      options={[
                                        { value: '', label: 'Select Value...' },
                                        ...(condition.columnName
                                          ? getColumnValues(condition.columnName).map(val => ({
                                            value: String(val),
                                            label: String(val)
                                          }))
                                          : [])
                                      ]}
                                      updateField={(_section, _subsection, _fieldName, value) => {
                                        updateCondition(index, conditionIndex, { value })
                                      }}
                                    />
                                  </div>
                                  <Button
                                    className='btn-sm btn-danger'
                                    onClick={() => removeCondition(index, conditionIndex)}
                                  >
                                    Remove Condition
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}

                          <Button
                            className='btn-sm'
                            onClick={() => addCondition(index)}
                          >
                            <Icon display='plus' size={14} className='mr-1' />
                            Add Condition
                          </Button>
                        </Accordion.Section>

                        <Accordion.Section title='Formatting Options'>
                          <div className='mb-3'>
                            <CheckBox
                              value={variable.addCommas || false}
                              fieldName='addCommas'
                              label='Format numbers with commas'
                              updateField={(_section, _subsection, _fieldName, value) =>
                                updateVariable(index, { addCommas: value })
                              }
                            />
                          </div>

                          <div className='mb-3'>
                            <CheckBox
                              value={variable.hideOnNull || false}
                              fieldName='hideOnNull'
                              label='Hide section when value is null'
                              updateField={(_section, _subsection, _fieldName, value) =>
                                updateVariable(index, { hideOnNull: value })
                              }
                            />
                          </div>
                        </Accordion.Section>
                      </Accordion>

                      <div className='mt-3 pt-3 border-t' style={{ textAlign: 'center' }}>
                        <Button
                          className='btn-sm btn-danger'
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete the variable "${variable.name || 'Unnamed Variable'}"?`)) {
                              removeVariable(index)
                            }
                          }}
                        >
                          Delete Variable
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : <></>)}
            </div>
          )}

          <Button className='btn-primary' onClick={addVariable}>
            <Icon display='plus' size={16} className='mr-2' />
            Add Variable
          </Button>
        </>
      )}
    </div>
  )
}

export default MarkupVariablesEditor
