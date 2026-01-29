import { useContext, FC } from 'react'
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import ConfigContext from '../../../../ConfigContext'
import { useEditorPanelContext } from '../../EditorPanelContext'
import { type PanelProps } from './../PanelProps'

const PanelRadar: FC<PanelProps> = props => {
  const { config } = useContext(ConfigContext)

  if (config.visualizationType !== 'Radar') return null

  const { updateField } = useEditorPanelContext()
  const radar = config.radar || {}

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{props.name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {/* Grid Settings */}
        <fieldset className='fieldset'>
          <legend style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Grid Settings</legend>

          <TextField
            type='number'
            value={radar.gridRings ?? 5}
            fieldName='gridRings'
            section='radar'
            label='Number of Grid Rings'
            updateField={updateField}
            min={3}
            max={10}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Number of concentric rings in the grid (3-10)</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />

          <CheckBox
            value={radar.showGridRings ?? true}
            fieldName='showGridRings'
            section='radar'
            label='Show Grid Rings'
            updateField={updateField}
          />

          <Select
            value={radar.gridRingStyle ?? 'polygons'}
            fieldName='gridRingStyle'
            section='radar'
            label='Grid Style'
            updateField={updateField}
            options={['polygons', 'circles']}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Shape of the grid rings - polygons match the data shape, circles are rounded</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        </fieldset>

        {/* Scale Settings */}
        <fieldset className='fieldset' style={{ marginTop: '20px' }}>
          <legend style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Scale Settings</legend>

          <TextField
            type='number'
            value={radar.scaleMin ?? 0}
            fieldName='scaleMin'
            section='radar'
            label='Minimum Value'
            updateField={updateField}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Minimum value for the radar scale (center point)</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />

          <TextField
            type='number'
            value={radar.scaleMax ?? ''}
            fieldName='scaleMax'
            section='radar'
            label='Maximum Value'
            updateField={updateField}
            placeholder='Auto-calculated'
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Maximum value for the radar scale. Leave empty to auto-calculate from data.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        </fieldset>

        {/* Visual Settings */}
        <fieldset className='fieldset' style={{ marginTop: '20px' }}>
          <legend style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Visual Settings</legend>

          <TextField
            type='number'
            value={radar.fillOpacity ?? 0.3}
            fieldName='fillOpacity'
            section='radar'
            label='Fill Opacity'
            updateField={updateField}
            min={0}
            max={1}
            step={0.1}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Opacity of the polygon fill (0 = transparent, 1 = solid)</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />

          <TextField
            type='number'
            value={radar.strokeWidth ?? 2}
            fieldName='strokeWidth'
            section='radar'
            label='Stroke Width'
            updateField={updateField}
            min={1}
            max={5}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Width of the polygon outline</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />

          <CheckBox
            value={radar.showPoints ?? true}
            fieldName='showPoints'
            section='radar'
            label='Show Data Points'
            updateField={updateField}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Display circular markers at each data point vertex</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />

          {(radar.showPoints ?? true) && (
            <TextField
              type='number'
              value={radar.pointRadius ?? 4}
              fieldName='pointRadius'
              section='radar'
              label='Point Size'
              updateField={updateField}
              min={2}
              max={10}
            />
          )}

          <TextField
            type='number'
            value={radar.axisLabelOffset ?? 15}
            fieldName='axisLabelOffset'
            section='radar'
            label='Axis Label Offset'
            updateField={updateField}
            min={5}
            max={50}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Distance between axis endpoint and label</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        </fieldset>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PanelRadar
