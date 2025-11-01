import React, { useState, useEffect, useContext, useRef } from 'react'

import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

// Context
import ConfigContext from '../ConfigContext'

// Helpers
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

// Components
import { TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Layout from '@cdc/core/components/Layout'
import Accordion from '@cdc/core/components/ui/Accordion'
import MarkupVariablesEditor from '@cdc/core/components/EditorPanel/components/MarkupVariablesEditor'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import { HeaderThemeSelector } from '@cdc/core/components/HeaderThemeSelector'
import { type Datasets } from '@cdc/core/types/DataSet'

// styles
import '@cdc/core/styles/v2/components/editor.scss'
import './editorPanel.style.css'

type MarkupIncludeEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MarkupIncludeEditorPanelProps> = ({ datasets }) => {
  const { config, data, isDashboard, loading, setParentConfig, updateConfig } = useContext(ConfigContext)
  const { contentEditor, theme, visual } = config
  const { inlineHTML, srcUrl, title, useInlineHTML } = contentEditor
  const [displayPanel, setDisplayPanel] = useState(true)
  const updateField = updateFieldFactory(config, updateConfig, true)

  const textAreaInEditorContainer = useRef(null)

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

  const handleMarkupVariablesChange = (variables: any[]) => {
    updateConfig({
      ...config,
      markupVariables: variables
    })
  }

  const handleToggleEnable = (enabled: boolean) => {
    updateConfig({
      ...config,
      enableMarkupVariables: enabled
    })
  }

  const editorContent = (
    <Accordion>
      <Accordion.Section title='General'>
        <TextField
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
        <CheckBox
          value={useInlineHTML}
          section='contentEditor'
          fieldName='useInlineHTML'
          label='Use Inline HTML'
          updateField={updateField}
        />
        <div className='column-edit'>
          {useInlineHTML ? (
            <>
              {/* HTML Textbox */}
              <div ref={textAreaInEditorContainer}>
                <TextField
                  value={inlineHTML}
                  section='contentEditor'
                  fieldName='inlineHTML'
                  label='HTML'
                  placeholder='Add HTML here'
                  type='textarea'
                  updateField={updateField}
                />
              </div>
            </>
          ) : (
            <TextField
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
        <HeaderThemeSelector
          selectedTheme={theme}
          onThemeSelect={theme => updateConfig({ ...config, theme })}
          label='Theme'
        />
        <div className='checkbox-group'>
          <CheckBox
            value={visual.border}
            section='visual'
            fieldName='border'
            label='Display Border'
            updateField={updateField}
          />
          <CheckBox
            value={visual.borderColorTheme}
            section='visual'
            fieldName='borderColorTheme'
            label='Use Border Color Theme'
            updateField={updateField}
          />
          <CheckBox
            value={visual.accent}
            section='visual'
            fieldName='accent'
            label='Use Accent Style'
            updateField={updateField}
          />
          <CheckBox
            value={visual.background}
            section='visual'
            fieldName='background'
            label='Use Theme Background Color'
            updateField={updateField}
          />
          <CheckBox
            value={visual.hideBackgroundColor}
            section='visual'
            fieldName='hideBackgroundColor'
            label='Hide Background Color'
            updateField={updateField}
          />
        </div>
      </Accordion.Section>
      {isDashboard && (
        <Accordion.Section title='Footnotes'>
          <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
        </Accordion.Section>
      )}
      <Accordion.Section title='Markup Variables'>
        <MarkupVariablesEditor
          markupVariables={config.markupVariables || []}
          data={data || []}
          onChange={handleMarkupVariablesChange}
          enableMarkupVariables={config.enableMarkupVariables || false}
          onToggleEnable={handleToggleEnable}
        />
      </Accordion.Section>
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
