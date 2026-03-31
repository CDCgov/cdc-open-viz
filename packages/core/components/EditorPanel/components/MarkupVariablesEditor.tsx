import React, { useState, useMemo, useCallback } from 'react'
import { MarkupVariable, MarkupCondition, MarkupVariableSvgMapping } from '../../../types/MarkupVariable'
import { SVG_REGISTRY_OPTIONS } from '../../../helpers/svgRegistry'
import Button from '../../elements/Button'
import { TextField, Select, CheckBox } from '../Inputs'
import SvgIconSelect from './SvgIconSelect'
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
  /** File-level metadata extracted from the data source */
  dataMetadata?: Record<string, string>
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
  onToggleEnable,
  dataMetadata = {}
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

  const metadataKeys = useMemo(() => Object.keys(dataMetadata || {}), [dataMetadata])
  const hasMetadataKeys = metadataKeys.length > 0

  // Get columns from the available data (memoized for performance)
  const getAvailableColumns = useMemo((): string[] => {
    const targetData = getTargetData()
    return targetData.length > 0 ? Object.keys(targetData[0]) : []
  }, [getTargetData])

  // Get column values for a specific column (memoized for performance)
  const getColumnValues = useCallback(
    (columnName: string): string[] => {
      const targetData = getTargetData()
      if (targetData.length === 0) return []

      const uniqueValues = new Set<string>()
      targetData.forEach(row => {
        if (row[columnName] !== undefined && row[columnName] !== null) {
          uniqueValues.add(String(row[columnName]))
        }
      })
      return Array.from(uniqueValues).sort()
    },
    [data, datasets, config?.dataKey]
  )

  // Validate a variable and return array of error messages
  const validateVariable = React.useCallback((variable: MarkupVariable): string[] => {
    const errors: string[] = []
    const outputType = variable.outputType === 'svg' ? 'svg' : 'value'

    if (!variable.name || variable.name.trim() === '') {
      errors.push('Variable name is required')
    }
    if (!variable.tag || variable.tag.trim() === '') {
      errors.push('Variable tag is required')
    }
    if (
      outputType === 'value' &&
      !variable.metadataKey &&
      (!variable.columnName || variable.columnName.trim() === '')
    ) {
      errors.push('Data column is required')
    }
    if (outputType === 'svg' && variable.metadataKey) {
      errors.push('SVG output is not supported for metadata variables')
    }
    if (outputType === 'svg' && !variable.metadataKey) {
      if (!variable.columnName || variable.columnName.trim() === '') {
        errors.push('SVG column is required')
      }
      if (!variable.svgMappings || variable.svgMappings.length === 0) {
        errors.push('At least one SVG mapping is required')
      }
      if (variable.svgScale !== undefined) {
        const parsedScale = Number(variable.svgScale)
        if (!Number.isFinite(parsedScale) || parsedScale <= 0) {
          errors.push('SVG scale must be greater than 0')
        }
      }
    }
    // Validate conditions (not applicable to metadata-sourced variables)
    if (!variable.metadataKey) {
      variable.conditions?.forEach((condition, index) => {
        if (!condition.columnName) {
          errors.push(`Condition ${index + 1}: Column is required`)
        }
        if (!condition.value) {
          errors.push(`Condition ${index + 1}: Value is required`)
        }
      })
    }
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
      hideOnNull: false,
      outputType: 'value'
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
    return `{{${name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')}}}`
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

  const updateSvgMapping = (
    variableIndex: number,
    sourceValue: string,
    svgId: MarkupVariableSvgMapping['svgId'] | ''
  ) => {
    const variable = safeMarkupVariables[variableIndex]
    const nextMappings = [...(variable.svgMappings || [])]
    const existingIndex = nextMappings.findIndex(mapping => mapping.sourceValue === sourceValue)

    if (!svgId) {
      if (existingIndex > -1) {
        nextMappings.splice(existingIndex, 1)
      }
    } else {
      const nextMapping = { sourceValue, svgId }
      if (existingIndex > -1) {
        nextMappings[existingIndex] = nextMapping
      } else {
        nextMappings.push(nextMapping)
      }
    }

    updateVariable(variableIndex, { svgMappings: nextMappings })
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
              Use variables in your content with <code>{'{{variable-name}}'}</code> syntax. Variables will be replaced
              with values from your data.
            </p>
          </div>

          {safeMarkupVariables.length > 0 && (
            <div className='variables-list mb-3'>
              {safeMarkupVariables.map((variable, index) => {
                if (!variable) return <></>

                const outputType = variable.outputType === 'svg' ? 'svg' : 'value'
                const svgSourceValues =
                  outputType === 'svg' && variable.columnName ? getColumnValues(variable.columnName) : []
                const dataColumnLabel = outputType === 'svg' ? 'SVG Source Column' : 'Data Column'

                return (
                  <div
                    key={index}
                    className='variable-item p-3 border rounded mb-2'
                    style={{ backgroundColor: '#fff' }}
                  >
                    <div className='d-flex justify-content-between align-items-start mb-2'>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
                          {variable.name || 'Unnamed Variable'}
                        </div>
                        <div
                          style={{ fontSize: '13px', color: '#6c757d', fontFamily: 'monospace', marginBottom: '4px' }}
                        >
                          {variable.tag}
                        </div>
                        <div style={{ fontSize: '13px', color: '#6c757d' }}>
                          {variable.metadataKey ? (
                            <>
                              Metadata: <strong>{variable.metadataKey}</strong>
                            </>
                          ) : (
                            <>
                              Column: <strong>{variable.columnName || 'Not selected'}</strong>
                              {variable.conditions && variable.conditions.length > 0 && (
                                <span>
                                  {' '}
                                  • {variable.conditions.length} condition{variable.conditions.length !== 1 ? 's' : ''}
                                </span>
                              )}
                            </>
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
                            {hasMetadataKeys && (
                              <div className='mb-3'>
                                <Select
                                  value={variable.metadataKey ? 'metadata' : 'column'}
                                  fieldName='variableSource'
                                  label='Source'
                                  options={[
                                    { value: 'column', label: 'Data Column' },
                                    { value: 'metadata', label: 'Data File Metadata' }
                                  ]}
                                  updateField={(_section, _subsection, _fieldName, value) => {
                                    if (value === 'metadata') {
                                      const defaultMetadataKey = metadataKeys[0] || ''
                                      updateVariable(index, {
                                        metadataKey: defaultMetadataKey,
                                        columnName: '',
                                        conditions: [],
                                        outputType: 'value',
                                        name: defaultMetadataKey,
                                        tag: generateTag(defaultMetadataKey)
                                      })
                                    } else {
                                      updateVariable(index, { metadataKey: undefined, columnName: '' })
                                    }
                                  }}
                                />
                              </div>
                            )}

                            {variable.metadataKey !== undefined && variable.metadataKey !== null && hasMetadataKeys ? (
                              <div className='mb-3'>
                                <Select
                                  value={variable.metadataKey}
                                  fieldName='metadataKey'
                                  label='Metadata Field'
                                  options={metadataKeys.map(key => ({
                                    value: key,
                                    label: `${key}: ${dataMetadata[key]}`
                                  }))}
                                  updateField={(_section, _subsection, _fieldName, value) => {
                                    updateVariable(index, {
                                      metadataKey: value,
                                      name: value,
                                      tag: generateTag(value)
                                    })
                                  }}
                                />
                              </div>
                            ) : (
                              <div className='mb-3'>
                                <Select
                                  value={variable.columnName}
                                  fieldName='columnName'
                                  label={dataColumnLabel}
                                  options={[
                                    { value: '', label: 'Select Column...' },
                                    ...getAvailableColumns.map(col => ({ value: col, label: col }))
                                  ]}
                                  updateField={(_section, _subsection, _fieldName, value) => {
                                    updateVariable(index, {
                                      columnName: value,
                                      name: value,
                                      tag: generateTag(value)
                                    })
                                  }}
                                />
                              </div>
                            )}

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
                          </Accordion.Section>

                          <Accordion.Section title='SVG Output'>
                            {variable.metadataKey ? (
                              <div className='text-sm text-gray-500 mb-2'>
                                SVG output is not supported for metadata variables.
                              </div>
                            ) : (
                              <>
                                <div className='mb-3'>
                                  <CheckBox
                                    value={outputType === 'svg'}
                                    fieldName='enableSvgOutput'
                                    label='Enable SVG output'
                                    updateField={(_section, _subsection, _fieldName, value) => {
                                      updateVariable(index, { outputType: value ? 'svg' : 'value' })
                                    }}
                                  />
                                </div>
                                {outputType === 'svg' ? (
                                  <>
                                    <div className='text-sm text-gray-500 mb-2'>
                                      SVG output renders one SVG per distinct value after filters/conditions.
                                    </div>
                                    <div className='mb-3'>
                                      <TextField
                                        type='number'
                                        step={0.1}
                                        value={
                                          variable.svgScale === undefined || Number.isNaN(Number(variable.svgScale))
                                            ? 1
                                            : Number(variable.svgScale)
                                        }
                                        fieldName='svgScale'
                                        label='SVG Scale'
                                        updateField={(_section, _subsection, _fieldName, value) => {
                                          const parsedScale = value === '' ? undefined : Number(value)
                                          updateVariable(index, {
                                            svgScale:
                                              parsedScale === undefined || Number.isNaN(parsedScale)
                                                ? undefined
                                                : parsedScale
                                          })
                                        }}
                                      />
                                    </div>
                                    {variable.columnName ? (
                                      <>
                                        {svgSourceValues.length > 0 ? (
                                          svgSourceValues.map(sourceValue => {
                                            const selectedSvgId =
                                              variable.svgMappings?.find(mapping => mapping.sourceValue === sourceValue)
                                                ?.svgId || ''

                                            return (
                                              <div
                                                className='cove-accordion__panel-row align-center mb-2'
                                                key={sourceValue}
                                              >
                                                <div className='cove-accordion__panel-col flex-grow'>{sourceValue}</div>
                                                <div className='cove-accordion__panel-col flex-grow'>
                                                  <SvgIconSelect
                                                    value={selectedSvgId}
                                                    options={[{ value: '', label: 'None' }, ...SVG_REGISTRY_OPTIONS]}
                                                    onChange={value =>
                                                      updateSvgMapping(
                                                        index,
                                                        sourceValue,
                                                        value as MarkupVariableSvgMapping['svgId'] | ''
                                                      )
                                                    }
                                                  />
                                                </div>
                                              </div>
                                            )
                                          })
                                        ) : (
                                          <div className='text-sm text-gray-500 mb-2'>
                                            No values found for the selected column.
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <div className='text-sm text-gray-500 mb-2'>
                                        Select a data column to map values to SVGs.
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <div className='text-sm text-gray-500 mb-2'></div>
                                )}
                              </>
                            )}
                          </Accordion.Section>

                          {!variable.metadataKey && (
                            <Accordion.Section title='Conditions'>
                              <div className='text-sm text-gray-500 mb-2'>
                                Add conditions to filter when this variable should display data
                              </div>

                              {variable.conditions && variable.conditions.length > 0 && (
                                <div className='conditions-list mb-2'>
                                  {variable.conditions.map((condition, conditionIndex) => (
                                    <div
                                      key={`condition-${index}-${conditionIndex}`}
                                      className='condition-item p-2 border rounded mb-2'
                                      style={{ backgroundColor: '#f8f9fa' }}
                                    >
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
                                            updateCondition(index, conditionIndex, {
                                              isOrIsNotEqualTo: value as 'is' | 'is not'
                                            })
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

                              <Button className='btn-sm' onClick={() => addCondition(index)}>
                                <Icon display='plus' size={14} className='mr-1' />
                                Add Condition
                              </Button>
                            </Accordion.Section>
                          )}

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
                              if (
                                window.confirm(
                                  `Are you sure you want to delete the variable "${
                                    variable.name || 'Unnamed Variable'
                                  }"?`
                                )
                              ) {
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
                )
              })}
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
