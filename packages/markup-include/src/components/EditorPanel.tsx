import React, { useState, useEffect, memo, useContext, useRef, useMemo, useReducer } from 'react'

// Third Party
import _ from 'lodash'

import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

// Context
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
import Accordion from '@cdc/core/components/ui/Accordion'

// styles
import '@cdc/core/styles/v2/components/editor.scss'
import './editorPanel.style.css'
import VariableSection from './Variables'
import { CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import { Datasets } from '@cdc/core/types/DataSet'

const headerColors = [
  'theme-blue',
  'theme-purple',
  'theme-brown',
  'theme-teal',
  'theme-pink',
  'theme-orange',
  'theme-slate',
  'theme-indigo',
  'theme-cyan',
  'theme-green',
  'theme-amber'
]

type MarkupIncludeEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MarkupIncludeEditorPanelProps> = ({ datasets }) => {
  const { config, data, isDashboard, loading, setParentConfig, updateConfig } = useContext(ConfigContext)
  const { contentEditor, theme, visual } = config
  const { inlineHTML, markupVariables, srcUrl, title, useInlineHTML, allowHideSection } = contentEditor
  const [displayPanel, setDisplayPanel] = useState(true)
  const updateField = updateFieldFactory(config, updateConfig, true)
  const hasData = data?.[0] !== undefined

  const openVariableControls = useState<boolean[]>([])

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig()

      setParentConfig(newConfig)
    }
  }, [config])

  useEffect(() => {
    const newConfig = { ...config }
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
    const strippedState = cloneConfig(config)
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
    <Accordion>
      <Accordion.Section title='General'>
        <InputText
          value={title || ''}
          section='contentEditor'
          fieldName='title'
          label='Title'
          placeholder='Markup Include Title'
          updateField={updateField}
        />
      </Accordion.Section>
      <Accordion.Section title='Content Editor'>
        <span className='divider-heading'>Enter Markup</span>
        <InputCheckbox
          inline
          value={useInlineHTML}
          section='contentEditor'
          fieldName='useInlineHTML'
          label='Use Inline HTML&nbsp;'
          updateField={updateField}
        />
        <div className='column-edit'>
          {useInlineHTML ? (
            <>
              {/* HTML Textbox */}
              <div ref={textAreaInEditorContainer}>
                <InputText
                  value={inlineHTML}
                  section='contentEditor'
                  fieldName='inlineHTML'
                  label='HTML'
                  placeholder='Add HTML here'
                  type='textarea'
                  rows={10}
                  updateField={updateField}
                />

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
                {hasData === false && (
                  <span className='need-data-source-prompt'>To use variables, add data source.</span>
                )}
                {variableArray && variableArray.length > 0 && (
                  <div className='section-border'>
                    {variableArray?.map((variableObject, index) => {
                      return (
                        <VariableSection
                          key={`${variableObject.name}-${index}`}
                          controls={openVariableControls}
                          data={data}
                          deleteVariable={deleteVariable}
                          updateVariableArray={updateVariableArray}
                          variableConfig={variableObject}
                          variableIndex={index}
                        />
                      )
                    })}
                  </div>
                )}
                <div className='pt-2'>
                  <CheckBox
                    value={allowHideSection}
                    section='contentEditor'
                    fieldName='allowHideSection'
                    label='Hide Section on Null'
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>{`Hide this entire Markup Include section if any variable is null or blank.`}</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />

                  <CheckBox
                    value={contentEditor.showNoDataMessage}
                    section='contentEditor'
                    fieldName='showNoDataMessage'
                    label='Add No Data Message'
                    updateField={updateField}
                  />
                </div>

                <div className='mb-1 d-flex'>
                  <button
                    className={'btn btn-primary'}
                    onClick={handleCreateNewVariableButtonClick}
                    disabled={!hasData}
                  >
                    Create New Variable
                  </button>
                </div>
              </fieldset>
            </>
          ) : (
            <InputText
              value={srcUrl || ''}
              section='contentEditor'
              fieldName='srcUrl'
              label='Source URL;'
              placeholder='https://www.example.com/file.html'
              updateField={updateField}
            />
          )}
        </div>
      </Accordion.Section>
      <Accordion.Section title='Visual'>
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
          <InputCheckbox
            value={visual.border}
            section='visual'
            fieldName='border'
            label='Display Border&nbsp;'
            updateField={updateField}
          />
          <InputCheckbox
            value={visual.borderColorTheme}
            section='visual'
            fieldName='borderColorTheme'
            label='Use Border Color Theme&nbsp;'
            updateField={updateField}
          />
          <InputCheckbox
            value={visual.accent}
            section='visual'
            fieldName='accent'
            label='Use Accent Style&nbsp;'
            updateField={updateField}
          />
          <InputCheckbox
            value={visual.background}
            section='visual'
            fieldName='background'
            label='Use Theme Background Color&nbsp;'
            updateField={updateField}
          />
          <InputCheckbox
            value={visual.hideBackgroundColor}
            section='visual'
            fieldName='hideBackgroundColor'
            label='Hide Background Color&nbsp;'
            updateField={updateField}
          />
        </div>
      </Accordion.Section>
      {isDashboard && (
        <Accordion.Section title='Footnotes'>
          <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
        </Accordion.Section>
      )}
    </Accordion>
  )

  if (loading && !config?.showEditorPanel) return null

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar
        displayPanel={displayPanel}
        isDashboard={isDashboard}
        title={'Configure Markup Include'}
        onBackClick={onBackClick}
      >
        {editorContent}
      </Layout.Sidebar>
    </ErrorBoundary>
  )
}

export default EditorPanel
