import React, { useState, useEffect, memo, useContext, useRef, useMemo, useReducer } from 'react'
import _ from 'lodash'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import ConfigContext from '../ConfigContext'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import InputText from '@cdc/core/components/inputs/InputText'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import Layout from '@cdc/core/components/Layout'

//styles
import '@cdc/core/styles/v2/components/editor.scss'
import './editorPanel.style.css'

const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

type CondtionsProps = {
  conditionControls: OpenControls
  conditionLookup: Record<string, string[] | number[]> | []
  conditionSettings: Condition
  number: number
  removeCondition: Function
  selectedColumn: string
  updateConditionsList: Function
}

const Condition: React.FC<CondtionsProps> = ({ conditionControls, conditionLookup, conditionSettings, number, removeCondition, selectedColumn, updateConditionsList }) => {
  const [openConditionControls, setOpenConditionControls] = conditionControls
  const showCondition = openConditionControls[number]
  const setShowCondition = (index, value) => {
    setOpenConditionControls({ ..._.cloneDeep(openConditionControls), [index]: value })
  }

  const columnNames = Object.keys(conditionLookup)
  const columnNameConditionOptions = columnNames.filter(optionName => optionName !== selectedColumn)

  const { columnName, isOrIsNotEqualTo, value } = conditionSettings

  const handleConditionChange = (selectionValue: string | number, conditionSetting: string) => {
    const conditionSettingUpdate = { ..._.cloneDeep(conditionSettings) }
    if (conditionSetting === 'columnName') {
      conditionSettingUpdate['value'] = ''
    }
    conditionSettingUpdate[conditionSetting] = selectionValue
    updateConditionsList(conditionSettingUpdate, number)
  }

  return !showCondition ? (
    <>
      <div className='mb-1'>
        <button onClick={() => setShowCondition(number, true)}>
          <Icon display='caretDown' />
        </button>
        <span> {value ? `${columnName} ${isOrIsNotEqualTo === 'is' ? 'is' : 'is not'} ${value}` : 'New Condition'}</span>
      </div>
    </>
  ) : (
    <>
      <div className='d-flex justify-content-between'>
        <button onClick={() => setOpenConditionControls({ ..._.cloneDeep(openConditionControls), [number]: false })}>
          <Icon display='caretDown' />
        </button>
        <button className='btn btn-danger btn-sm mt-0 ml-2' onClick={() => removeCondition(number)}>
          Remove
        </button>
      </div>
      <div id={`condition_${number}`}>
        <label className='d-block'>
          <span>Condition : </span>
          <div className='pt-1'>
            <select className='ml-1' value={columnName} onChange={e => handleConditionChange(e.target.value, 'columnName')}>
              <option value=''>Select</option>
              {columnNameConditionOptions?.map(columnName => (
                <option key={columnName} value={columnName}>
                  {columnName}
                </option>
              ))}
            </select>
            <select className='ml-1' value={isOrIsNotEqualTo} onChange={e => handleConditionChange(e.target.value, 'isOrIsNotEqualTo')}>
              <option value='is'>is</option>
              <option value='isNot'>is not</option>
            </select>
            <select className='ml-1' value={value} onChange={e => handleConditionChange(e.target.value, 'value')}>
              <option value=''>Select</option>
              {columnName === ''
                ? []
                : conditionLookup[columnName].map(valueItem => {
                    return (
                      <option key={valueItem} value={valueItem}>
                        {valueItem}
                      </option>
                    )
                  })}
            </select>
          </div>
        </label>
      </div>
    </>
  )
}

type Variable = {
  columnName: string
  conditions: Condition[]
  name: string
  tag: string
}

type Condition = {
  columnName: string
  isOrIsNotEqualTo: string
  value: string
}

type VariableSectionProps = {
  allVariableNames: string[]
  controls: OpenControls
  data: Object[]
  deleteVariable: Function
  updateVariableArray: Function
  variableConfig: Variable
  variableIndex: number
}

const VariableSection: React.FC<VariableSectionProps> = ({ allVariableNames, controls, data, deleteVariable, updateVariableArray, variableConfig, variableIndex }) => {
  const [openVariableControls, setOpenVariableControls] = controls
  const show = openVariableControls[variableIndex]
  const setShow = (key, value) => {
    setOpenVariableControls({ ..._.cloneDeep(openVariableControls), [key]: value })
  }

  const openConditionControls = useState({})

  const columnNames = Object.keys(data[0])
  const [selectedColumn, setNewVariableColumnName] = useState(variableConfig.columnName)
  const [conditionsList, setConditionsList] = useState(variableConfig.conditions)
  const [variableName, setVariableName] = useState(variableConfig.name)

  const conditionLookup: Record<string, string[] | number[]> = useMemo(() => {
    return columnNames.reduce((acc, column) => {
      acc[column] = _.uniq(data.map(row => row[column]))
      return acc
    }, {})
  }, [columnNames])

  const handleVariableColumnChange = (columnName: string) => {
    setNewVariableColumnName(columnName)
    setConditionsList([])
  }

  const updateConditionsList = (conditionSettings: Condition, number: number) => {
    const { columnName, isOrIsNotEqualTo, value } = conditionSettings
    const newConditionsList = [..._.cloneDeep(conditionsList)]
    newConditionsList[number] = {
      columnName: columnName,
      isOrIsNotEqualTo: isOrIsNotEqualTo,
      value: value
    }
    setConditionsList(newConditionsList)
  }

  const removeCondition = (conditionNumber: number) => {
    const updatedConditionsList = [..._.cloneDeep(conditionsList)]
    updatedConditionsList.splice(conditionNumber, 1)
    setConditionsList(updatedConditionsList)
  }

  const handleAddConditionClick = () => {
    const newConditionsList = [..._.cloneDeep(conditionsList)]
    newConditionsList.push({
      columnName: '',
      isOrIsNotEqualTo: 'is',
      value: ''
    })
    setConditionsList(newConditionsList)
    const [conditionControls, setConditionControls] = openConditionControls
    setConditionControls({ ..._.cloneDeep(conditionControls), [conditionsList.length + 1]: true })
  }

  const handleVariableDoneClick = () => {
    const filteredConditionsList = conditionsList.filter(condition => condition.columnName !== '' && condition.value !== '')
    const newVariable = {
      columnName: selectedColumn,
      conditions: filteredConditionsList,
      name: variableName,
      tag: `{{${variableName}}}`
    }
    updateVariableArray(newVariable, variableIndex)
    setShow(variableIndex, false)
  }

  const columnSelectDisabled = variableName === ''
  const addConditionDisabled = columnSelectDisabled || selectedColumn === ''

  return (
    <>
      {!show ? (
        <>
          <div className='mb-2'>
            <button onClick={() => setShow(variableIndex, true)}>
              <Icon display='caretDown' />
            </button>
            <span> {variableName ? `${variableName}` : 'New Variable'}</span>
          </div>
        </>
      ) : (
        <fieldset className='edit-block mb-1' key={variableIndex}>
          <div className='d-flex justify-content-between'>
            <button onClick={handleVariableDoneClick} disabled={addConditionDisabled}>
              <Icon display='caretUp' />
            </button>
            <button
              className='btn btn-danger btn-sm mt-0 ml-2'
              onClick={event => {
                event.preventDefault()
                deleteVariable(variableIndex)
              }}
            >
              Delete
            </button>
          </div>
          <label className='d-block'>
            <span className='edit-label column-heading'>Variable Name:</span>
            <input className={`variable-${variableIndex} ml-1`} type='text' value={variableName} onChange={e => setVariableName(e.target.value)} />
          </label>
          <div className='pt-2'>
            <label className='d-block'>
              <span className='edit-label column-heading'>Column:</span>
              <select className={`variable-${variableIndex} ml-1`} onChange={e => handleVariableColumnChange(e.target.value)} value={selectedColumn} disabled={columnSelectDisabled}>
                <option value=''>Select</option>
                {columnNames.map(columnName => (
                  <option key={columnName} value={columnName}>
                    {columnName}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className='d-block'>
            <span className='edit-label column-heading'>Conditions:</span>
            {conditionsList.map((condition, index) => {
              return (
                <div className='condition-section mt-2'>
                  <Condition
                    key={variableName + '-condition-' + index}
                    conditionControls={openConditionControls}
                    conditionLookup={conditionLookup}
                    conditionSettings={condition}
                    number={index}
                    removeCondition={removeCondition}
                    selectedColumn={selectedColumn}
                    updateConditionsList={updateConditionsList}
                  />
                </div>
              )
            })}
          </label>
          <div className='mt-1'>
            <button onClick={handleAddConditionClick} disabled={addConditionDisabled}>
              Add Condition
            </button>
            <button className='ml-2' onClick={handleVariableDoneClick} disabled={addConditionDisabled}>
              Done
            </button>
          </div>
        </fieldset>
      )}
    </>
  )
}

type CheckBoxProps = {
  fieldName: string
  label: string
  section?: string
  subsection?: string
  tooltip?: string
  updateField: Function
  value: boolean
}

const CheckBox: React.FC<CheckBoxProps> = memo(({ fieldName, label, subsection = null, tooltip, section = null, updateField, value, ...attributes }) => (
  <label className='checkbox'>
    <input
      type='checkbox'
      name={fieldName}
      checked={value}
      onChange={() => {
        updateField(section, subsection, fieldName, !value)
      }}
      {...attributes}
    />
    <span className='edit-label column-heading'>{label}</span>
    <span className='cove-icon'>{tooltip}</span>
  </label>
))
type OpenControls = [Record<string, boolean>, Function] // useState type

type EditorPanelProps = { children }

const EditorPanel: React.FC<EditorPanelProps> = ({ children }) => {
  const { config, data, isDashboard, loading, setParentConfig, updateConfig } = useContext(ConfigContext)
  const { contentEditor, runtime, theme, visual, newViz } = config
  // const { contentEditor, runtime, theme, visual, newViz } = config
  const { inlineHTML, showHeader, srcUrl, title, useInlineHTML } = contentEditor
  const [displayPanel, setDisplayPanel] = useState(true)
  const updateField = updateFieldFactory(config, updateConfig, true)

  const openVariableControls = useState({})

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig()

      setParentConfig(newConfig)
    }
  }, [config])

  useEffect(() => {
    let newConfig = { ...config }
    delete newConfig.newViz
    updateConfig(newConfig)
  }, [])

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
    updateConfig({
      ...config,
      showEditorPanel: !displayPanel
    })
  }

  const Error = () => {
    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  const Confirm = () => {
    const confirmDone = e => {
      e.preventDefault()
      let newConfig = { ...config }
      delete newConfig.newViz
      updateConfig(newConfig)
    }

    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display a preview of the markup.</p>
          <button className='btn' style={{ margin: '1em auto' }} onClick={confirmDone}>
            I'm Done
          </button>
        </section>
      </section>
    )
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    delete strippedState.newViz
    delete strippedState.runtime

    return strippedState
  }

  const [variableArray, setVariableArray] = useState<Variable[]>([])
  const [isCreatingVariable, setIsCreatingVariable] = useState(false)

  const textAreaInEditorContainer = useRef(null)
  const variableNames = variableArray.map(variable => variable.name)
  const [controls, setControls] = openVariableControls

  const handleCreateNewVariableButtonClick = () => {
    const newVariableArray = [..._.cloneDeep(variableArray)]
    const newVariable = {
      columnName: '',
      conditions: [],
      name: '',
      tag: ''
    }

    setControls({ ...controls, [variableArray.length + 1]: true })

    newVariableArray.push(newVariable)
    setVariableArray(newVariableArray)
    setIsCreatingVariable(!isCreatingVariable)
  }

  const updateVariableArray = (newVariable: Variable, variableIndex: number) => {
    const newVariableArray = [..._.cloneDeep(variableArray)]
    newVariableArray[variableIndex] = newVariable
    setVariableArray(newVariableArray)
    updateField('contentEditor', null, 'markupVariables', newVariableArray)
    config.contentEditor.markupVariables
    return
  }

  const deleteVariable = (variableIndex: number) => {
    const newVariableArray = [..._.cloneDeep(variableArray)]
    newVariableArray.splice(variableIndex, 1)
    setVariableArray(newVariableArray)
    updateField('contentEditor', null, 'markupVariables', newVariableArray)
    config.contentEditor.markupVariables

    const newControls = { ..._.cloneDeep(controls) }
    delete newControls[variableIndex]
    setControls(newControls)
  }

  const editorContent = (
    <Accordion allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>General</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <InputText value={title || ''} section='contentEditor' fieldName='title' label='Title' placeholder='Markup Include Title' updateField={updateField} />
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Content Editor</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <span className='divider-heading'>Enter Markup</span>
          <CheckBox value={useInlineHTML} section='contentEditor' fieldName='useInlineHTML' label='Use Inline HTML' updateField={updateField} />
          <div className='column-edit'>
            <div className={useInlineHTML ? 'hide' : ''}>
              <InputText value={srcUrl || ''} section='contentEditor' fieldName='srcUrl' label='Source URL' placeholder='https://www.example.com/file.html' updateField={updateField} />
            </div>

            <div className={useInlineHTML ? '' : 'hide'}>
              {/* HTML Textbox */}
              <div ref={textAreaInEditorContainer}>
                <InputText value={inlineHTML} section='contentEditor' fieldName='inlineHTML' label='HTML' placeholder='Add HTML here' type='textarea' rows={10} updateField={updateField} />

                <hr className='accordion__divider' />
              </div>
              {/* Create New Variable*/}

              {/* Variable Options List */}
              <fieldset>
                <label>
                  <span className='edit-label'>
                    Variables
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>Create variables to be placeholders for potential values</p>
                      </Tooltip.Content>
                    </Tooltip>
                  </span>
                </label>
                {variableArray && variableArray.length > 0 && (
                  <div className='section-border'>
                    {variableArray?.map((variableObject, index) => {
                      return <VariableSection key={`${variableObject.name}-${index}`} allVariableNames={variableNames} controls={openVariableControls} data={data} deleteVariable={deleteVariable} updateVariableArray={updateVariableArray} variableConfig={variableObject} variableIndex={index} />
                    })}
                  </div>
                )}
                <div className='mb-1 d-flex'>
                  <button className={'btn btn-primary'} onClick={handleCreateNewVariableButtonClick}>
                    Create New Variable
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>General</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className='input-group'>
            <label>Theme</label>
            <ul className='color-palette'>
              {headerColors.map(palette => (
                <li
                  title={palette}
                  key={palette}
                  onClick={() => {
                    updateConfig({ ...config, theme: palette })
                  }}
                  className={theme === palette ? 'selected ' + palette : palette}
                ></li>
              ))}
            </ul>
          </div>
          <div className='cove-accordion__panel-section checkbox-group'>
            <CheckBox value={visual.border} section='visual' fieldName='border' label='Display Border' updateField={updateField} />
            <CheckBox value={visual.borderColorTheme} section='visual' fieldName='borderColorTheme' label='Use Border Color Theme' updateField={updateField} />
            <CheckBox value={visual.accent} section='visual' fieldName='accent' label='Use Accent Style' updateField={updateField} />
            <CheckBox value={visual.background} section='visual' fieldName='background' label='Use Theme Background Color' updateField={updateField} />
            <CheckBox value={visual.hideBackgroundColor} section='visual' fieldName='hideBackgroundColor' label='Hide Background Color' updateField={updateField} />
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )

  if (loading) return null

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar displayPanel={displayPanel} isDashboard={isDashboard} title={'Configure Markup Include'} onBackClick={onBackClick}>
        {editorContent}
      </Layout.Sidebar>
    </ErrorBoundary>
  )
}

export default EditorPanel
