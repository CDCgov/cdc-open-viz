import { useContext, useRef } from 'react'

// Context
import ConfigContext from '../../ConfigContext'

// Helpers
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import { TextField, CheckBox, Select } from '@cdc/core/components/EditorPanel/Inputs'
import Accordion from '@cdc/core/components/ui/Accordion'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import MarkupVariablesEditor from '@cdc/core/components/EditorPanel/components/MarkupVariablesEditor'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import StyleTreatmentSection from '@cdc/core/components/EditorPanel/sections/StyleTreatmentSection'
import { HeaderThemeSelector } from '@cdc/core/components/HeaderThemeSelector'
import { Datasets } from '@cdc/core/types/DataSet'

// styles
import './EditorPanel.styles.css'

type MarkupIncludeEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MarkupIncludeEditorPanelProps> = ({ datasets }) => {
  const { config, data, isDashboard, loading, setParentConfig, updateConfig } = useContext(ConfigContext)
  const { contentEditor, theme, visual } = config || {}
  const { inlineHTML, srcUrl, title, useInlineHTML } = contentEditor || {}
  const isTp5Style = contentEditor?.style === 'tp5'
  const updateField = updateFieldFactory(config, updateConfig, true)
  const styleTreatment = (visual as any)?.tp5Treatment ? 'tp5' : 'legacy'

  const handleStyleTreatmentChange = (value: string) => {
    const useTp5Treatment = value === 'tp5'
    updateConfig({
      ...config,
      visual: {
        ...config.visual,
        tp5Treatment: useTp5Treatment,
        border: useTp5Treatment ? false : config.visual?.border,
        borderColorTheme: useTp5Treatment ? false : config.visual?.borderColorTheme,
        accent: useTp5Treatment ? false : config.visual?.accent
      }
    })
  }

  const textAreaInEditorContainer = useRef(null)

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

  return (
    <BaseEditorPanel
      config={config}
      updateConfig={updateConfig as (config: any) => void}
      loading={loading}
      setParentConfig={setParentConfig as ((config: any) => void) | undefined}
      isDashboard={isDashboard}
      title='Configure Markup Include'
    >
      {() => (
        <Accordion>
          <Accordion.Section title='General'>
            <Select
              value={contentEditor?.style || 'legacy'}
              section='contentEditor'
              fieldName='style'
              label='Style'
              updateField={updateField}
              options={[
                { value: 'legacy', label: 'Legacy' },
                { value: 'tp5', label: 'TP5' }
              ]}
            />
            <TextField
              value={title || ''}
              section='contentEditor'
              fieldName='title'
              label='Title'
              placeholder='Markup Include Title'
              updateField={updateField}
            />
            {!isTp5Style && (
              <Select
                value={contentEditor?.titleStyle || 'small'}
                section='contentEditor'
                fieldName='titleStyle'
                label='Title Style'
                updateField={updateField}
                options={[
                  { value: 'small', label: 'Small (h3)' },
                  { value: 'large', label: 'Large (h2)' },
                  { value: 'legacy', label: 'Legacy' }
                ]}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>Choose the visual style for the title.</p>
                      <p>
                        Consider heading order on your page when selecting the title style. For 508 reasons, ensure your
                        page follows a proper heading order.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
            )}
            <Select
              value={config.locale}
              fieldName='locale'
              label='Language for dates and numbers'
              updateField={updateField}
              options={[
                { value: 'en-US', label: 'English (en-US)' },
                { value: 'es-MX', label: 'Spanish (es-MX)' }
              ]}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      Change the language (locale) for this visualization to alter the way dates and numbers are
                      formatted.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
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
              selectedTheme={config.theme}
              onThemeSelect={theme => updateConfig({ ...config, theme })}
            />
            {isTp5Style ? (
              <CheckBox
                value={visual?.whiteBackground}
                section='visual'
                fieldName='whiteBackground'
                label='Use White Background Style'
                updateField={updateField}
              />
            ) : (
              <StyleTreatmentSection
                styleTreatment={styleTreatment}
                onStyleTreatmentChange={handleStyleTreatmentChange}
                showStyleTreatment={false}
                border={config.visual?.border}
                borderColorTheme={config.visual?.borderColorTheme}
                accent={config.visual?.accent}
                background={config.visual?.background}
                hideBackgroundColor={config.visual?.hideBackgroundColor}
                showBackground
                showHideBackgroundColor
                updateField={updateField}
              />
            )}
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
              datasets={datasets}
              config={config}
              onChange={handleMarkupVariablesChange}
              enableMarkupVariables={config.enableMarkupVariables || false}
              onToggleEnable={handleToggleEnable}
              dataMetadata={config.dataMetadata}
            />
          </Accordion.Section>
        </Accordion>
      )}
    </BaseEditorPanel>
  )
}

export default EditorPanel
