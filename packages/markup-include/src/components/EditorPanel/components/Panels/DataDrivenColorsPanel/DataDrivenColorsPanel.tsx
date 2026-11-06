import { useContext, useMemo } from 'react'
import { DataColorSelector } from '@cdc/core/components/DataColorSelector'
import Button from '@cdc/core/components/elements/Button'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { DATA_COLOR_PRESETS } from '@cdc/core/helpers/dataColors'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'
import ConfigContext from '../../../../../ConfigContext'

type DataColorDisplayEntry = { sourceValue: string; fromData: boolean; key: string }

const DataDrivenColorsPanel = () => {
  const { config, data, editorData, updateConfig } = useContext(ConfigContext)
  const updateField = updateFieldFactory(config, updateConfig, true)
  const markupEditorData = Array.isArray(editorData) ? editorData : data || []
  const columns = useDataColumns(markupEditorData)
  const dataColorMappings = config.dataColors?.mappings || []

  const dataColorValues = useMemo(() => {
    const colorColumn = config.dataColors?.column
    if (!colorColumn) return []
    const uniqueValues = new Set<string>()
    markupEditorData?.forEach(row => {
      const value = row?.[colorColumn]
      if (value !== undefined && value !== null) uniqueValues.add(String(value))
    })
    return Array.from(uniqueValues).sort()
  }, [markupEditorData, config.dataColors?.column])

  const dataColorDisplayList = useMemo<DataColorDisplayEntry[]>(() => {
    const dataSet = new Set(dataColorValues)
    const list = dataColorValues.map(sourceValue => ({ sourceValue, fromData: true, key: `data-${sourceValue}` }))
    dataColorMappings.forEach((mapping, index) => {
      if (!dataSet.has(mapping.sourceValue)) {
        list.push({ sourceValue: mapping.sourceValue, fromData: false, key: `custom-${index}` })
      }
    })
    return list
  }, [dataColorValues, dataColorMappings])

  const saveMappings = (mappings: typeof dataColorMappings) =>
    updateConfig({ ...config, dataColors: { ...config.dataColors, mappings } })

  const updateDataColorMapping = (sourceValue: string, color: string) => {
    const nextMappings = [...dataColorMappings]
    const existingIndex = nextMappings.findIndex(mapping => mapping.sourceValue === sourceValue)
    if (!color) {
      if (existingIndex > -1) nextMappings.splice(existingIndex, 1)
    } else if (existingIndex > -1) {
      nextMappings[existingIndex] = { sourceValue, color }
    } else {
      nextMappings.push({ sourceValue, color })
    }
    saveMappings(nextMappings)
  }

  const addCustomDataColorMapping = () =>
    saveMappings([...dataColorMappings, { sourceValue: '', color: DATA_COLOR_PRESETS[0] }])

  const updateDataColorMappingValue = (oldValue: string, newValue: string) =>
    saveMappings(
      dataColorMappings.map(mapping =>
        mapping.sourceValue === oldValue ? { ...mapping, sourceValue: newValue } : mapping
      )
    )

  const removeDataColorMapping = (sourceValue: string) =>
    saveMappings(dataColorMappings.filter(mapping => mapping.sourceValue !== sourceValue))

  return (
    <>
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
                Choose a column whose values determine the background color of this visualization. Map each value to a
                color below. Text color adjusts automatically for contrast.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      {config.dataColors?.column && dataColorDisplayList.length > 0 && (
        <div className='mt-2'>
          {dataColorDisplayList.map(({ sourceValue, fromData, key }) => {
            const selectedColor = dataColorMappings.find(mapping => mapping.sourceValue === sourceValue)?.color || ''
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
                      onChange={event => updateDataColorMappingValue(sourceValue, event.target.value)}
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
    </>
  )
}

export default DataDrivenColorsPanel
