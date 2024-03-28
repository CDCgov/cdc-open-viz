import { memo, useContext } from 'react'
import { useEditorPermissions } from '../../useEditorPermissions.js'
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { type ChartConfig } from '../../../../types/ChartConfig.js'
import { TextField, Select } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import { type ChartContext } from '../../../../types/ChartContext.js'
import { type PanelProps } from '../PanelProps.js'
import ConfigContext from '../../../../ConfigContext.js'

const RegionSettings = memo(({ config, updateConfig }: { config: ChartConfig; updateConfig: Function }) => {
  let regionUpdate = (fieldName, value, i) => {
    let regions = []

    if (config.regions) {
      regions = [...config.regions]
    }

    regions[i][fieldName] = value
    updateConfig({ ...config, regions })
  }

  // only for Regions
  let updateField = (section, subsection, fieldName, value, i) => regionUpdate(fieldName, value, i)

  let removeColumn = i => {
    let regions = []

    if (config.regions) {
      regions = [...config.regions]
    }

    regions.splice(i, 1)

    updateConfig({ ...config, regions })
  }

  let addColumn = () => {
    let regions = []

    if (config.regions) {
      regions = [...config.regions]
    }

    regions.push({})

    updateConfig({ ...config, regions })
  }

  const fromOptions = ['Fixed', 'Previous Days']
  const toOptions = ['Last Date', 'Fixed']

  return (
    <>
      {config.regions &&
        config.regions.map(({ label, color, from, to, background, range = 'Custom' }, i) => (
          <div className='edit-block' key={`region-${i}`}>
            <button
              type='button'
              className='remove-column'
              onClick={event => {
                event.preventDefault()
                removeColumn(i)
              }}
            >
              Remove
            </button>
            <TextField value={label} label='Region Label' fieldName='label' i={i} updateField={updateField} />
            <div className='two-col-inputs'>
              <TextField value={color} label='Text Color' fieldName='color' updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)} />
              <TextField value={background} label='Background' fieldName='background' updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)} />
            </div>

            <Select
              value={config.regions[i].fromType ?? 'Fixed'}
              label='Minimum Region Type'
              initial={'Select'}
              required={true}
              onChange={e => {
                if (e.target.value !== '' && e.target.value !== 'Select') {
                  const newRegions = [...config.regions]
                  newRegions[i].fromType = e.target.value
                  updateConfig({
                    ...config,
                    regions: newRegions
                  })
                }
                e.target.value = ''
              }}
              options={fromOptions}
            />

            {(config.regions[i].fromType === 'Fixed' || config.regions[i].fromType === 'Previous Days' || !config.regions[i].fromType) && (
              <>
                <TextField
                  value={from}
                  label={config.regions[i].fromType === 'Fixed' || !config.regions[i]?.fromType ? 'From Value' : 'Previous Number of Days'}
                  fieldName='from'
                  updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)}
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.</p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />
              </>
            )}

            <Select
              value={config.regions[i].toType ?? 'Fixed'}
              label='Maximum Region Type'
              initial={'Select'}
              required={true}
              onChange={e => {
                if (e.target.value !== '' && e.target.value !== 'Select') {
                  const newRegions = [...config.regions]
                  newRegions[i].toType = e.target.value
                  updateConfig({
                    ...config,
                    regions: newRegions
                  })
                }
                e.target.value = ''
              }}
              options={toOptions}
            />

            {(config.regions[i].toType === 'Fixed' || !config.regions[i].toType) && <TextField value={to} label='To Value' fieldName='to' updateField={(section, subsection, fieldName, value) => regionUpdate(fieldName, value, i)} />}
          </div>
        ))}
      {!config.regions && <p style={{ textAlign: 'center' }}>There are currently no regions.</p>}
      <button
        type='button'
        className='btn full-width'
        onClick={e => {
          e.preventDefault()
          addColumn()
        }}
      >
        Add Region
      </button>
    </>
  )
})

const RegionsPanel = ({ name }: PanelProps) => {
  const { visSupportsRegions } = useEditorPermissions()
  const { config, updateConfig } = useContext<ChartContext>(ConfigContext)

  return visSupportsRegions() ? (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <RegionSettings config={config} updateConfig={updateConfig} />
      </AccordionItemPanel>
    </AccordionItem>
  ) : null
}

export default RegionsPanel
