import React, { useState, useEffect, memo, useContext, useRef, useMemo, useReducer } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

// Third Party
import _ from 'lodash'

// Context
import { Condition } from '../types/Condition'
import { Variable } from '../types/Variable'
import ConfigContext from '../ConfigContext'

// Helpers
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

// Components
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Icon from '@cdc/core/components/ui/Icon'
import InputText from '@cdc/core/components/inputs/InputText'
import Layout from '@cdc/core/components/Layout'
import Tooltip from '@cdc/core/components/ui/Tooltip'

// styles
import '@cdc/core/styles/v2/components/editor.scss'
import './editorPanel.style.css'

const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

type CondtionsProps = {
  conditionControls: OpenControls
  conditionLookup: Record<string, string[] | number[]>
  conditionSettings: Condition
  conditionIndex: number
  removeCondition: Function
  selectedColumn: string
  updateConditionsList: Function
}

const Conditions: React.FC<CondtionsProps> = ({ conditionControls, conditionLookup, conditionSettings, conditionIndex, removeCondition, selectedColumn, updateConditionsList }) => {
  const [openConditionControls, setOpenConditionControls] = conditionControls
  const showCondition = openConditionControls[conditionIndex]
  const setShowCondition = (index, value) => {
    const newOpenConditionsControls = [...openConditionControls]
    newOpenConditionsControls[index] = value
    setOpenConditionControls(newOpenConditionsControls)
  }

  const columnNames = Object.keys(conditionLookup)
  const columnNameConditionOptions = columnNames.filter(optionName => optionName !== selectedColumn)

  const { columnName, isOrIsNotEqualTo, value } = conditionSettings

  const handleConditionChange = (selectionValue: string | number, conditionSetting: string) => {
    const conditionSettingUpdate = _.cloneDeep(conditionSettings)
    if (conditionSetting === 'columnName') {
      conditionSettingUpdate['value'] = ''
    }
    conditionSettingUpdate[conditionSetting] = selectionValue
    updateConditionsList(conditionSettingUpdate, conditionIndex)
  }

  return !showCondition ? (
    <>
      <div className='mb-1'>
        <button onClick={() => setShowCondition(conditionIndex, true)}>
          <Icon display='caretDown' />
        </button>
        <span> {value ? `${columnName} ${isOrIsNotEqualTo === 'is' ? 'is' : 'is not'} ${value}` : 'New Condition'}</span>
      </div>
    </>
  ) : (
    <>
      <div className='d-flex justify-content-between'>
        <button
          onClick={() => {
            const newOpenConditionsControls = [...openConditionControls]
            newOpenConditionsControls[conditionIndex] = false
            setOpenConditionControls(newOpenConditionsControls)
          }}
        >
          <Icon display='caretDown' />
        </button>
        <button className='btn btn-danger btn-sm mt-0 ml-2' onClick={() => removeCondition(conditionIndex)}>
          Remove
        </button>
      </div>
      <div id={`condition_${conditionIndex}`}>
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

              {conditionLookup[columnName]?.map(valueItem => {
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

type VariableSectionProps = {
  controls: OpenControls
  data: Object[]
  deleteVariable: Function
  updateVariableArray: Function
  variableConfig: Variable
  variableIndex: number
}

const VariableSection: React.FC<VariableSectionProps> = ({ controls, data, deleteVariable, updateVariableArray, variableConfig, variableIndex }) => {
  const [openVariableControls, setOpenVariableControls] = controls
  const show = openVariableControls[variableIndex]
  const setShow = (key, value) => {
    setOpenVariableControls({ openVariableControls, [key]: value })
  }

  const openConditionControls = useState([])

  const columnNames = Object.keys(data?.[0] || {})
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

  const updateConditionsList = (conditionSettings: Condition, conditionIndex: number) => {
    const { columnName, isOrIsNotEqualTo, value } = conditionSettings
    const newConditionsList = _.cloneDeep(conditionsList)
    newConditionsList[conditionIndex] = {
      columnName: columnName,
      isOrIsNotEqualTo: isOrIsNotEqualTo,
      value: value
    }
    setConditionsList(newConditionsList)
  }

  const removeCondition = (conditionIndex: number) => {
    const updatedConditionsList = _.cloneDeep(conditionsList)
    updatedConditionsList.splice(conditionIndex, 1)
    setConditionsList(updatedConditionsList)
  }

  const handleAddConditionClick = () => {
    setConditionsList([
      ...conditionsList,
      {
        columnName: '',
        isOrIsNotEqualTo: 'is',
        value: ''
      }
    ])

    const [conditionControls, setConditionControls] = openConditionControls

    const newConditionsControls = [...conditionControls]
    newConditionsControls[conditionsList.length + 1] = true
    setConditionControls(newConditionsControls)
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
          <label className='d-block py-2'>
            <span className='edit-label column-heading'>Conditions:</span>
            {conditionsList.map((condition, index) => {
              return (
                <div className='condition-section mt-2'>
                  <Conditions
                    key={variableName + '-condition-' + index}
                    conditionControls={openConditionControls}
                    conditionLookup={conditionLookup}
                    conditionSettings={condition}
                    conditionIndex={index}
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

type OpenControls = [[boolean], Function] // useState type

type EditorPanelProps = { children }

const EditorPanel: React.FC<EditorPanelProps> = ({ children }) => {
  const { config, data, isDashboard, loading, setParentConfig, updateConfig } = useContext(ConfigContext)
  const { contentEditor, runtime, theme, visual, newViz } = config
  const { inlineHTML, markupVariables, showHeader, srcUrl, title, useInlineHTML } = contentEditor
  const [displayPanel, setDisplayPanel] = useState(true)
  const updateField = updateFieldFactory(config, updateConfig, true)
  const hasData = data?.[0] !== undefined ?? false

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

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    delete strippedState.newViz
    delete strippedState.runtime

    return strippedState
  }

  const [variableArray, setVariableArray] = useState<Variable[]>([...markupVariables])
  const [isCreatingVariable, setIsCreatingVariable] = useState(false)

  const textAreaInEditorContainer = useRef(null)
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
    const newVariableArray = _.cloneDeep(variableArray)
    newVariableArray[variableIndex] = newVariable
    setVariableArray(newVariableArray)
    updateField('contentEditor', null, 'markupVariables', newVariableArray)
    return
  }

  const deleteVariable = (variableIndex: number) => {
    const newVariableArray = _.cloneDeep(variableArray)
    newVariableArray.splice(variableIndex, 1)
    setVariableArray(newVariableArray)
    updateField('contentEditor', null, 'markupVariables', newVariableArray)

    const newControls = _.cloneDeep(controls)
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
          <InputCheckbox inline value={useInlineHTML} section='contentEditor' fieldName='useInlineHTML' label='Use Inline HTML&nbsp;' updateField={updateField} />
          <div className='column-edit'>
            <div className={useInlineHTML ? 'hide' : ''}>
              <InputText value={srcUrl || ''} section='contentEditor' fieldName='srcUrl' label='Source URL;' placeholder='https://www.example.com/file.html' updateField={updateField} />
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
                      <Tooltip.Content>{`To use created variables wrap the variable name in curly brackets, e.g. {{some_variable}}, and place the variable directly in your Inline HTML`}</Tooltip.Content>
                    </Tooltip>
                  </span>
                </label>
                {hasData === false && <span className='need-data-source-prompt'>To use variables, add data source.</span>}
                {variableArray && variableArray.length > 0 && (
                  <div className='section-border'>
                    {variableArray?.map((variableObject, index) => {
                      return <VariableSection key={`${variableObject.name}-${index}`} controls={openVariableControls} data={data} deleteVariable={deleteVariable} updateVariableArray={updateVariableArray} variableConfig={variableObject} variableIndex={index} />
                    })}
                  </div>
                )}
                <div className='mb-1 d-flex'>
                  <button className={'btn btn-primary'} onClick={handleCreateNewVariableButtonClick} disabled={!hasData}>
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
          <AccordionItemButton>Visual</AccordionItemButton>
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
            <InputCheckbox value={visual.border} section='visual' fieldName='border' label='Display Border&nbsp;' updateField={updateField} />
            <InputCheckbox value={visual.borderColorTheme} section='visual' fieldName='borderColorTheme' label='Use Border Color Theme&nbsp;' updateField={updateField} />
            <InputCheckbox value={visual.accent} section='visual' fieldName='accent' label='Use Accent Style&nbsp;' updateField={updateField} />
            <InputCheckbox value={visual.background} section='visual' fieldName='background' label='Use Theme Background Color&nbsp;' updateField={updateField} />
            <InputCheckbox value={visual.hideBackgroundColor} section='visual' fieldName='hideBackgroundColor' label='Hide Background Color&nbsp;' updateField={updateField} />
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
