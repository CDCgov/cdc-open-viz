import React, { useState, useMemo, useCallback } from 'react'
import {
  MarkupVariable,
  MarkupCondition,
  MarkupVariableSvgMapping,
  MarkupVariableSourceType,
  getMarkupVariableSourceType,
  isDataDrivenIconsVariable
} from '../../../types/MarkupVariable'
import { SVG_REGISTRY_OPTIONS, getSvgRegistryLabel } from '../../../helpers/svgRegistry'
import Button from '../../elements/Button'
import { TextField, Select, CheckBox } from '../Inputs'
import SvgIconSelect from './SvgIconSelect'
import Icon from '../../ui/Icon'
import Accordion from '../../ui/Accordion'
import Tooltip from '../../ui/Tooltip'
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

const METADATA_DOCS_URL =
  'https://www.cdc.gov/cove/data-toolkit/index.html#cdc_toolkit_main_toolkit_cat_3-json-file-format'
type MarkupVariableEditorSourceType = MarkupVariableSourceType
type MarkupVariableIconMode = 'static' | 'data-driven'

const generateTagFromName = (name: string) => {
  if (!name) return ''

  // Convert a display name to tag format: "My Variable" -> "{{my-variable}}"
  return `{{${name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')}}}`
}

const removeTagWrappers = (tag: string) => tag.replace(/^{{/, '').replace(/}}$/, '')

const getMarkupVariableEditorSourceType = (variable: Partial<MarkupVariable>): MarkupVariableEditorSourceType => {
  return isDataDrivenIconsVariable(variable) ? 'icon' : getMarkupVariableSourceType(variable)
}

const getMarkupVariableIconMode = (variable: Partial<MarkupVariable>): MarkupVariableIconMode => {
  return isDataDrivenIconsVariable(variable) ? 'data-driven' : 'static'
}

/**
 * Editor for creating and managing markup variables with {{variable-name}} syntax.
 * Supports data-driven values, metadata values, static icons, and data-driven icon mappings.
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
    [getTargetData]
  )

  const getIconDefaults = useCallback((iconId?: MarkupVariable['iconId']) => {
    const resolvedIconId = iconId || SVG_REGISTRY_OPTIONS[0]?.value

    if (!resolvedIconId) {
      return {
        iconId: undefined,
        name: '',
        tag: ''
      }
    }

    const defaultName = `icon-${resolvedIconId}`

    return {
      iconId: resolvedIconId,
      name: removeTagWrappers(generateTagFromName(defaultName)),
      tag: generateTagFromName(defaultName)
    }
  }, [])

  const getDataDrivenIconDefaults = useCallback((columnName?: string) => {
    if (!columnName) {
      return {
        name: '',
        tag: ''
      }
    }

    const defaultName = `icon-${columnName}`

    return {
      name: removeTagWrappers(generateTagFromName(defaultName)),
      tag: generateTagFromName(defaultName)
    }
  }, [])

  // Validate a variable and return array of error messages
  const validateVariable = React.useCallback((variable: MarkupVariable): string[] => {
    const errors: string[] = []
    const sourceType = getMarkupVariableSourceType(variable)
    const usesDataDrivenIcons = isDataDrivenIconsVariable(variable)

    if (sourceType === 'icon') {
      if (!variable.name || variable.name.trim() === '') {
        errors.push('Variable name is required')
      }
      if (!variable.tag || variable.tag.trim() === '') {
        errors.push('Variable tag is required')
      }
      if (!variable.iconId) {
        errors.push('Icon is required')
      }

      return errors
    }

    if (sourceType === 'metadata') {
      if (!variable.metadataKey || variable.metadataKey.trim() === '') {
        errors.push('Metadata field is required')
        return errors
      }

      if (!variable.name || variable.name.trim() === '') {
        errors.push('Variable name is required')
      }
      if (!variable.tag || variable.tag.trim() === '') {
        errors.push('Variable tag is required')
      }

      return errors
    }

    if (!variable.name || variable.name.trim() === '') {
      errors.push('Variable name is required')
    }
    if (!variable.tag || variable.tag.trim() === '') {
      errors.push('Variable tag is required')
    }

    if (!variable.columnName || variable.columnName.trim() === '') {
      errors.push('Data column is required')
    }

    if (usesDataDrivenIcons) {
      if (!variable.columnName || variable.columnName.trim() === '') {
        errors.push('Data-driven icon column is required')
      }
      if (!variable.svgMappings || variable.svgMappings.length === 0) {
        errors.push('At least one icon mapping is required')
      }
    }

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
      sourceType: 'column',
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

  const addCustomSvgMapping = (variableIndex: number) => {
    const variable = safeMarkupVariables[variableIndex]
    const nextMappings = [...(variable.svgMappings || []), { sourceValue: '', svgId: '' as MarkupVariableSvgMapping['svgId'] }]
    updateVariable(variableIndex, { svgMappings: nextMappings })
  }

  const updateSvgMappingValue = (variableIndex: number, oldValue: string, newValue: string) => {
    const variable = safeMarkupVariables[variableIndex]
    const nextMappings = (variable.svgMappings || []).map(m =>
      m.sourceValue === oldValue ? { ...m, sourceValue: newValue } : m
    )
    updateVariable(variableIndex, { svgMappings: nextMappings })
  }

  const removeSvgMapping = (variableIndex: number, sourceValue: string) => {
    const variable = safeMarkupVariables[variableIndex]
    const nextMappings = (variable.svgMappings || []).filter(m => m.sourceValue !== sourceValue)
    updateVariable(variableIndex, { svgMappings: nextMappings })
  }

  const updateSourceType = (index: number, sourceType: MarkupVariableSourceType) => {
    const variable = safeMarkupVariables[index]

    if (sourceType === 'icon') {
      const iconDefaults = getIconDefaults(variable.iconId)
      updateVariable(index, { sourceType, ...iconDefaults })
      return
    }

    if (sourceType === 'metadata') {
      if (!variable.metadataKey && metadataKeys[0]) {
        updateVariable(index, {
          sourceType,
          metadataKey: metadataKeys[0],
          name: metadataKeys[0],
          tag: generateTagFromName(metadataKeys[0])
        })
        return
      }

      updateVariable(index, { sourceType, metadataKey: variable.metadataKey || '' })
      return
    }

    if (sourceType === 'column') {
      updateVariable(index, { sourceType, outputType: 'value' })
      return
    }

    updateVariable(index, { sourceType })
  }

  const updateIconMode = (index: number, iconMode: MarkupVariableIconMode) => {
    const variable = safeMarkupVariables[index]

    if (iconMode === 'data-driven') {
      const dataDrivenIconDefaults = getDataDrivenIconDefaults(variable.columnName)
      updateVariable(index, {
        sourceType: 'column',
        outputType: 'svg',
        ...dataDrivenIconDefaults
      })
      return
    }

    const iconDefaults = getIconDefaults(variable.iconId)
    updateVariable(index, {
      sourceType: 'icon',
      iconId: iconDefaults.iconId,
      name: iconDefaults.name,
      tag: iconDefaults.tag
    })
  }

  const renderReadonlyField = (label: string, value: string, placeholder: string) => (
    <div className='mb-3'>
      <label>
        <span className='edit-label column-heading'>{label}</span>
        <input
          type='text'
          value={value}
          placeholder={placeholder}
          readOnly
          style={{ backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
        />
      </label>
    </div>
  )

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
              Use variables in your content with <code>{'{{variable-name}}'}</code> syntax. Variables can resolve to
              data values, data file metadata, or selected icons.
            </p>
          </div>

          {safeMarkupVariables.length > 0 && (
            <div className='variables-list mb-3'>
              {safeMarkupVariables.map((variable, index) => {
                if (!variable) return <></>

                const sourceType = getMarkupVariableSourceType(variable)
                const editorSourceType = getMarkupVariableEditorSourceType(variable)
                const iconMode = getMarkupVariableIconMode(variable)
                const usesDataDrivenIcons = isDataDrivenIconsVariable(variable)
                const svgSourceValues =
                  sourceType === 'column' && usesDataDrivenIcons && variable.columnName
                    ? getColumnValues(variable.columnName)
                    : []
                const svgDisplayList = (() => {
                  const dataSet = new Set(svgSourceValues)
                  const list: { sourceValue: string; fromData: boolean; key: string }[] = svgSourceValues.map(v => ({
                    sourceValue: v,
                    fromData: true,
                    key: `data-${v}`
                  }))
                  ;(variable.svgMappings || []).forEach((m, i) => {
                    if (!dataSet.has(m.sourceValue)) {
                      list.push({ sourceValue: m.sourceValue, fromData: false, key: `custom-${i}` })
                    }
                  })
                  return list
                })()
                const iconLabel = getSvgRegistryLabel(variable.iconId) || 'Not selected'

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
                          {sourceType === 'metadata' ? (
                            <>
                              Metadata: <strong>{variable.metadataKey || 'Not selected'}</strong>
                            </>
                          ) : editorSourceType === 'icon' ? (
                            <>
                              {iconMode === 'data-driven' ? (
                                <>
                                  Data-Driven Icon: <strong>{variable.columnName || 'Not selected'}</strong>
                                </>
                              ) : (
                                <>
                                  Icon: <strong>{iconLabel}</strong>
                                </>
                              )}
                              {variable.conditions && variable.conditions.length > 0 && (
                                <span>
                                  {' '}
                                  • {variable.conditions.length} condition{variable.conditions.length !== 1 ? 's' : ''}
                                </span>
                              )}
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
                            <strong>Validation Errors:</strong>
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
                              <Select
                                value={editorSourceType}
                                fieldName='variableSource'
                                label='Source'
                                options={[
                                  { value: 'column', label: 'Data Column' },
                                  { value: 'metadata', label: 'Data File Metadata' },
                                  { value: 'icon', label: 'Icon' }
                                ]}
                                updateField={(_section, _subsection, _fieldName, value) => {
                                  updateSourceType(index, value as MarkupVariableSourceType)
                                }}
                              />
                            </div>

                            {editorSourceType === 'icon' && (
                              <>
                                <div className='mb-3'>
                                  <Select
                                    value={iconMode}
                                    fieldName='iconMode'
                                    label='Icon Mode'
                                    options={[
                                      { value: 'static', label: 'Static Icon' },
                                      { value: 'data-driven', label: 'Data-Driven Icon' }
                                    ]}
                                    updateField={(_section, _subsection, _fieldName, value) => {
                                      updateIconMode(index, value as MarkupVariableIconMode)
                                    }}
                                  />
                                </div>

                                {iconMode === 'static' ? (
                                  <div className='mb-3'>
                                    <span className='edit-label column-heading'>Icon</span>
                                    <div>
                                      <SvgIconSelect
                                        value={variable.iconId || ''}
                                        options={SVG_REGISTRY_OPTIONS}
                                        onChange={value => {
                                          updateVariable(index, {
                                            sourceType: 'icon',
                                            ...getIconDefaults(value as MarkupVariable['iconId'])
                                          })
                                        }}
                                      />
                                    </div>
                                  </div>
                                ) : (
                                  <>
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
                                          const dataDrivenIconDefaults = getDataDrivenIconDefaults(value)
                                          updateVariable(index, {
                                            sourceType: 'column',
                                            outputType: 'svg',
                                            columnName: value,
                                            ...dataDrivenIconDefaults
                                          })
                                        }}
                                      />
                                    </div>

                                    {variable.columnName ? (
                                      <>
                                        {svgDisplayList.length > 0 ? (
                                          svgDisplayList.map(({ sourceValue, fromData, key }) => {
                                            const selectedSvgId =
                                              variable.svgMappings?.find(mapping => mapping.sourceValue === sourceValue)
                                                ?.svgId || ''

                                            return (
                                              <div
                                                className='cove-accordion__panel-row align-center mb-2'
                                                key={key}
                                              >
                                                <div className='cove-accordion__panel-col' style={{ flex: '1 1 0', minWidth: 0 }}>
                                                  {fromData ? (
                                                    sourceValue
                                                  ) : (
                                                    <input
                                                      type='text'
                                                      value={sourceValue}
                                                      placeholder='Enter value'
                                                      style={{ width: '100%' }}
                                                      onChange={e =>
                                                        updateSvgMappingValue(index, sourceValue, e.target.value)
                                                      }
                                                    />
                                                  )}
                                                </div>
                                                <div className='cove-accordion__panel-col' style={{ flex: '1 1 0', minWidth: 0 }}>
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
                                                <div className='cove-accordion__panel-col' style={{ flex: '0 0 1.5rem' }}>
                                                  {!fromData && (
                                                    <button
                                                      type='button'
                                                      className='btn btn-danger'
                                                      style={{ padding: '0.15rem 0.45rem', lineHeight: 1 }}
                                                      title='Remove mapping'
                                                      onClick={() => removeSvgMapping(index, sourceValue)}
                                                    >
                                                      −
                                                    </button>
                                                  )}
                                                </div>
                                              </div>
                                            )
                                          })
                                        ) : (
                                          <div className='text-sm text-gray-500 mb-2'>
                                            No values found for the selected column.
                                          </div>
                                        )}
                                        <Button
                                          type='button'
                                          onClick={() => addCustomSvgMapping(index)}
                                          className='btn btn-primary full-width mt-2 mb-2'
                                        >
                                          Add Icon Mapping
                                        </Button>
                                      </>
                                    ) : (
                                      <div className='text-sm text-gray-500 mb-2'>
                                        Select a data column to map its values to icons.
                                      </div>
                                    )}
                                  </>
                                )}

                                <div className='mb-3'>
                                  <TextField
                                    value={variable.name}
                                    fieldName='name'
                                    label='Variable Name'
                                    placeholder={
                                      iconMode === 'data-driven'
                                        ? 'e.g., "Trend Indicator"'
                                        : 'e.g., "trend-arrow-up-small"'
                                    }
                                    updateField={(_section, _subsection, _fieldName, value) => {
                                      updateVariable(index, {
                                        name: value,
                                        tag: generateTagFromName(value)
                                      })
                                    }}
                                  />
                                </div>
                                {renderReadonlyField('Tag (auto-generated)', variable.tag, '{{icon-name}}')}
                              </>
                            )}

                            {sourceType === 'metadata' && (
                              <>
                                {hasMetadataKeys ? (
                                  <div className='mb-3'>
                                    <Select
                                      value={variable.metadataKey || ''}
                                      fieldName='metadataKey'
                                      label='Metadata Field'
                                      options={[
                                        { value: '', label: 'Select Metadata Field...' },
                                        ...metadataKeys.map(key => ({
                                          value: key,
                                          label: `${key}: ${dataMetadata[key]}`
                                        }))
                                      ]}
                                      updateField={(_section, _subsection, _fieldName, value) => {
                                        updateVariable(index, {
                                          sourceType: 'metadata',
                                          metadataKey: value,
                                          name: value,
                                          tag: generateTagFromName(value)
                                        })
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div className='mb-3 text-sm text-gray-500'>
                                    <p style={{ marginBottom: '0.5rem' }}>
                                      This config does not currently contain any data file metadata.
                                    </p>
                                    <a href={METADATA_DOCS_URL} target='_blank' rel='noreferrer'>
                                      Learn how to add metadata
                                    </a>
                                  </div>
                                )}

                                {hasMetadataKeys && (
                                  <>
                                    <div className='mb-3'>
                                      <TextField
                                        value={variable.name}
                                        fieldName='name'
                                        label='Variable Name'
                                        placeholder='e.g., "Data Source"'
                                        updateField={(_section, _subsection, _fieldName, value) => {
                                          updateVariable(index, {
                                            name: value,
                                            tag: generateTagFromName(value)
                                          })
                                        }}
                                      />
                                    </div>
                                    {renderReadonlyField('Tag (auto-generated)', variable.tag, '{{variable-name}}')}
                                  </>
                                )}
                              </>
                            )}

                            {sourceType === 'column' && editorSourceType !== 'icon' && (
                              <>
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
                                      updateVariable(index, {
                                        sourceType: 'column',
                                        columnName: value,
                                        name: value,
                                        tag: generateTagFromName(value)
                                      })
                                    }}
                                  />
                                </div>
                                <div className='mb-3'>
                                  <TextField
                                    value={variable.name}
                                    fieldName='name'
                                    label='Variable Name'
                                    placeholder='e.g., "State Name"'
                                    updateField={(_section, _subsection, _fieldName, value) => {
                                      updateVariable(index, {
                                        name: value,
                                        tag: generateTagFromName(value)
                                      })
                                    }}
                                  />
                                </div>
                                {renderReadonlyField('Tag (auto-generated)', variable.tag, '{{variable-name}}')}
                              </>
                            )}
                          </Accordion.Section>

                          {sourceType === 'column' && (
                            <Accordion.Section title='Conditions'>
                              <div className='text-sm text-gray-500 mb-2'>
                                Add conditions to filter when this variable should display data.
                              </div>

                              <Button className='btn-sm mb-3' onClick={() => addCondition(index)}>
                                <Icon display='plus' size={14} className='mr-1' />
                                Add Condition
                              </Button>

                              {editorSourceType !== 'icon' && (
                                <>
                                  <hr />

                                  <div className='mb-3'>
                                    <Select
                                      value={variable.selectionMode === 'first' ? 'no' : 'yes'}
                                      fieldName='selectionMode'
                                      label='Display all matching rows'
                                      tooltip={
                                        <Tooltip style={{ textTransform: 'none' }}>
                                          <Tooltip.Target>
                                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                          </Tooltip.Target>
                                          <Tooltip.Content>
                                            <p>
                                              Choose whether this variable shows every row that matches dashboard filters
                                              and conditions, or only the first matching row. Showing all rows keeps the
                                              default list-style output.
                                            </p>
                                          </Tooltip.Content>
                                        </Tooltip>
                                      }
                                      options={[
                                        { value: 'yes', label: 'Yes' },
                                        { value: 'no', label: 'No' }
                                      ]}
                                      updateField={(_section, _subsection, _fieldName, value) => {
                                        updateVariable(index, {
                                          selectionMode: value === 'no' ? 'first' : undefined
                                        })
                                      }}
                                    />
                                  </div>
                                </>
                              )}

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
                            </Accordion.Section>
                          )}

                          {((sourceType === 'column' && editorSourceType !== 'icon') ||
                            (sourceType === 'metadata' && hasMetadataKeys)) && (
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
                            )}
                        </Accordion>

                        <div className='mt-3 pt-3 border-t' style={{ textAlign: 'center' }}>
                          <Button
                            className='btn-sm btn-danger'
                            onClick={() => {
                              if (
                                window.confirm(
                                  `Are you sure you want to delete the variable "${variable.name || 'Unnamed Variable'
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

          <Button variant='primary' onClick={addVariable}>
            <Icon display='plus' size={16} className='mr-2' />
            Add Variable
          </Button>
        </>
      )}
    </div>
  )
}

export default MarkupVariablesEditor
