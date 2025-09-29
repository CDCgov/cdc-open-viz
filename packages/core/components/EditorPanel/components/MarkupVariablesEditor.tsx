import React, { useState } from 'react'
import { MarkupVariable } from '../../../types/MarkupVariable'
import Button from '../../elements/Button'
import { TextField, Select, CheckBox } from '../Inputs'
import Icon from '../../ui/Icon'

type MarkupVariablesEditorProps = {
  markupVariables: MarkupVariable[]
  data: any[]
  onChange: (variables: MarkupVariable[]) => void
  enableMarkupVariables?: boolean
  onToggleEnable?: (enabled: boolean) => void
}

export type { MarkupVariablesEditorProps }

const MarkupVariablesEditor: React.FC<MarkupVariablesEditorProps> = ({
  markupVariables = [],
  data = [],
  onChange,
  enableMarkupVariables = false,
  onToggleEnable
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  // Ensure we always have a valid array
  const safeMarkupVariables = markupVariables || []
  const availableColumns = data.length > 0 ? Object.keys(data[0]) : []


  const addVariable = () => {
    const newVariable: MarkupVariable = {
      name: '',
      tag: '',
      columnName: '',
      conditions: [],
      addCommas: false
    }
    const newVariables = [...safeMarkupVariables, newVariable]
    onChange(newVariables)
    setEditingIndex(safeMarkupVariables.length)
  }

  const updateVariable = (index: number, updates: Partial<MarkupVariable>) => {
    const updated = safeMarkupVariables.map((variable, i) =>
      i === index ? { ...variable, conditions: variable.conditions || [], ...updates } : variable
    )
    onChange(updated)
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

  return (
    <div className='markup-variables-editor'>
      {onToggleEnable && (
        <div className='mb-3'>
          <CheckBox
            value={enableMarkupVariables}
            fieldName='enableMarkupVariables'
            label='Enable Markup Variables'
            updateField={(section, subsection, fieldName, value) => onToggleEnable(value)}
          />
        </div>
      )}

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
                <div key={index} className='variable-item p-3 border rounded mb-2'>
                  <div className='flex justify-between items-start'>
                    <div className='flex-1'>
                      <div className='font-medium'>{variable.name || 'Unnamed Variable'}</div>
                      <div className='text-sm text-gray-500'>{variable.tag}</div>
                      <div className='text-sm text-gray-500'>
                        Column: {variable.columnName}
                        {variable.conditions && variable.conditions.length > 0 && ` (${variable.conditions.length} conditions)`}
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <Button
                        className='btn-sm'
                        onClick={() => setEditingIndex(editingIndex === index ? null : index)}
                      >
                        {editingIndex === index ? 'Close' : 'Edit'}
                      </Button>
                      <Button
                        className='btn-sm btn-danger'
                        onClick={() => removeVariable(index)}
                      >
                        {/* <Icon display='x' size={16} /> */}
                      </Button>
                    </div>
                  </div>

                  {editingIndex === index && (
                    <div className='mt-3 pt-3 border-t'>
                      <div className='grid grid-cols-2 gap-3'>
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
                        <TextField
                          value={variable.tag}
                          fieldName='tag'
                          label='Tag (auto-generated)'
                          placeholder='{{variable-name}}'
                        />
                      </div>

                      <div className='mt-3'>
                        <Select
                          value={variable.columnName}
                          fieldName='columnName'
                          label='Data Column'
                          options={[
                            { value: '', label: 'Select Column...' },
                            ...availableColumns.map(col => ({ value: col, label: col }))
                          ]}
                          updateField={(section, subsection, fieldName, value) => {
                            updateVariable(index, { columnName: value })
                          }}
                        />
                      </div>

                      <div className='mt-3'>
                        <CheckBox
                          value={variable.addCommas || false}
                          fieldName='addCommas'
                          label='Format numbers with commas'
                          updateField={(section, subsection, fieldName, value) =>
                            updateVariable(index, { addCommas: value })
                          }
                        />
                      </div>

                      {/* Conditions will be added in a future enhancement */}
                      {variable.conditions && variable.conditions.length > 0 && (
                        <div className='mt-3'>
                          <label className='text-sm font-medium text-gray-700'>
                            Conditions ({variable.conditions.length})
                          </label>
                          <div className='text-sm text-gray-500'>
                            Condition editing will be available in a future update
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : null)}
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
