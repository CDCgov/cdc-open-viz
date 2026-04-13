import { useContext, useMemo, useRef } from 'react'

// Context
import ConfigContext from '../../ConfigContext'

// Helpers
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'

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
import { DataColorSelector } from '@cdc/core/components/DataColorSelector'
import { DATA_COLOR_PRESETS } from '@cdc/core/helpers/dataColors'
import Button from '@cdc/core/components/elements/Button'
import { Datasets } from '@cdc/core/types/DataSet'

// styles
import './EditorPanel.styles.css'

type MarkupIncludeEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MarkupIncludeEditorPanelProps> = ({ datasets }) => {
  const { config, data, editorData, isDashboard, loading, setParentConfig, updateConfig } = useContext(ConfigContext)
  const { contentEditor, theme, visual } = config || {}
  const { inlineHTML, srcUrl, title, useInlineHTML } = contentEditor || {}
  const isTp5Style = contentEditor?.style === 'tp5'
  const updateField = updateFieldFactory(config, updateConfig, true)
  const styleTreatment = (visual as any)?.tp5Treatment ? 'tp5' : 'legacy'
  const markupEditorData = Array.isArray(editorData) ? editorData : data || []
  const columns = useDataColumns(markupEditorData)
  const dataColorMappings = config.dataColors?.mappings || []

  const dataColorValues = useMemo(() => {
    const colorColumn = config.dataColors?.column
    if (!colorColumn) return []

    const uniqueValues = new Set<string>()
    markupEditorData?.forEach(row => {
      const value = row?.[colorColumn]
      if (value !== undefined && value !== null) {
        uniqueValues.add(String(value))
      }
    })

    return Array.from(uniqueValues).sort()
  }, [markupEditorData, config.dataColors?.column])

  type DataColorDisplayEntry = { sourceValue: string; fromData: boolean; key: string }

  const dataColorDisplayList = useMemo<DataColorDisplayEntry[]>(() => {
    const dataSet = new Set(dataColorValues)
    const list: DataColorDisplayEntry[] = dataColorValues.map(v => ({
      sourceValue: v,
      fromData: true,
      key: `data-${v}`
    }))
    dataColorMappings.forEach((m, i) => {
      if (!dataSet.has(m.sourceValue)) {
        list.push({ sourceValue: m.sourceValue, fromData: false, key: `custom-${i}` })
      }
    })
    return list
  }, [dataColorValues, dataColorMappings])

  const updateDataColorMapping = (sourceValue: string, color: string) => {
    const nextMappings = [...dataColorMappings]
    const existingIndex = nextMappings.findIndex(m => m.sourceValue === sourceValue)

    if (!color) {
      if (existingIndex > -1) {
        nextMappings.splice(existingIndex, 1)
      }
    } else {
      const nextMapping = { sourceValue, color }
      if (existingIndex > -1) {
        nextMappings[existingIndex] = nextMapping
      } else {
        nextMappings.push(nextMapping)
      }
    }

    updateConfig({
      ...config,
      dataColors: {
        ...config.dataColors,
        mappings: nextMappings
      }
    })
  }

  const addCustomDataColorMapping = () => {
    const nextMappings = [...dataColorMappings, { sourceValue: '', color: DATA_COLOR_PRESETS[0] }]
    updateConfig({
      ...config,
      dataColors: {
        ...config.dataColors,
        mappings: nextMappings
      }
    })
  }

  const updateDataColorMappingValue = (oldValue: string, newValue: string) => {
    const nextMappings = dataColorMappings.map(m => (m.sourceValue === oldValue ? { ...m, sourceValue: newValue } : m))
    updateConfig({
      ...config,
      dataColors: {
        ...config.dataColors,
        mappings: nextMappings
      }
    })
  }

  const removeDataColorMapping = (sourceValue: string) => {
    const nextMappings = dataColorMappings.filter(m => m.sourceValue !== sourceValue)
    updateConfig({
      ...config,
      dataColors: {
        ...config.dataColors,
        mappings: nextMappings
      }
    })
  }

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
              value={contentEditor?.style || 'default'}
              section='contentEditor'
              fieldName='style'
              label='Style'
              updateField={updateField}
              options={[
                { value: 'default', label: 'Default' },
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
            {!isTp5Style && (
              <HeaderThemeSelector
                selectedTheme={config.theme}
                onThemeSelect={theme => updateConfig({ ...config, theme })}
              />
            )}
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
          {isTp5Style && (
            <Accordion.Section title='Data-Driven Colors'>
              <Select
                value={config.dataColors?.column || ''}
                section='dataColors'
                fieldName='column'
                label='Color Column'
                updateField={updateField}
                initial='Select'
                options={columns}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Choose a column whose values determine the background color of this visualization. Map each
                        value to a color below. Text color adjusts automatically for contrast.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
              {config.dataColors?.column && dataColorDisplayList.length > 0 && (
                <div className='mt-2'>
                  {dataColorDisplayList.map(({ sourceValue, fromData, key }) => {
                    const selectedColor = dataColorMappings.find(m => m.sourceValue === sourceValue)?.color || ''

                    return (
                      <div className='cove-accordion__panel-row align-center mb-2' key={key}>
                        <div className='cove-accordion__panel-col' style={{ flex: '1 1 0', minWidth: 0 }}>
                          {fromData ? (
                            sourceValue
                          ) : (
                            <input
                              type='text'
                              value={sourceValue}
                              placeholder='Enter value'
                              style={{ width: '100%' }}
                              onChange={e => updateDataColorMappingValue(sourceValue, e.target.value)}
                            />
                          )}
                        </div>
                        <div className='cove-accordion__panel-col' style={{ flex: '0 0 4.5rem' }}>
                          <DataColorSelector
                            value={selectedColor}
                            onChange={color => updateDataColorMapping(sourceValue, color)}
                          />
                        </div>
                        <div className='cove-accordion__panel-col' style={{ flex: '0 0 1.5rem' }}>
                          {!fromData && (
                            <button
                              type='button'
                              className='btn btn-danger'
                              style={{ padding: '0.15rem 0.45rem', lineHeight: 1 }}
                              title='Remove mapping'
                              onClick={() => removeDataColorMapping(sourceValue)}
                            >
                              −
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              {config.dataColors?.column && (
                <Button type='button' onClick={addCustomDataColorMapping} className='btn btn-primary full-width mt-3'>
                  Add Color Mapping
                </Button>
              )}
            </Accordion.Section>
          )}
          {isDashboard && (
            <Accordion.Section title='Footnotes'>
              <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
            </Accordion.Section>
          )}
          <Accordion.Section title='Markup Variables'>
            <MarkupVariablesEditor
              markupVariables={config.markupVariables || []}
              data={markupEditorData}
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
