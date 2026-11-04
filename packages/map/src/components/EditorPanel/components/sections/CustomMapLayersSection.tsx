import { useContext } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import Button from '@cdc/core/components/elements/Button'

import ConfigContext from '../../../../context'
import useMapLayers from '../../../../hooks/useMapLayers'
import type { MapContext } from '../../../../types/MapContext'

const CustomMapLayersSection = () => {
  const { config, setConfig, tooltipId } = useContext<MapContext>(ConfigContext)
  const {
    MapLayerHandlers: { handleMapLayer, handleAddLayer, handleRemoveLayer }
  } = useMapLayers(config, setConfig, false, tooltipId)

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Custom Map Layers</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {config.map.layers.length === 0 && <p>There are currently no layers.</p>}
        <GroupedList
          items={config.map.layers}
          label='Custom Map Layers'
          droppableId='map-custom-layers'
          draggable={false}
          renderItem={(layer, index) => (
            <Accordion allowZeroExpanded key={`map-layer-${index}`}>
              <AccordionItem className='series-item series-item--chart map-layers-list'>
                <AccordionItemHeading className='series-item__title map-layers-list--title'>
                  <AccordionItemButton className='accordion__button'>
                    {`Layer ${index + 1}: ${layer.name}`}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='series-item__panel-actions'>
                    <Button
                      type='button'
                      variant='danger'
                      size='sm'
                      className='grouped-list__remove'
                      onClick={e => handleRemoveLayer(e, index)}
                    >
                      Remove Layer
                    </Button>
                  </div>
                  <div className='map-layers-panel'>
                    <label htmlFor='layerName'>Layer Name:</label>
                    <input
                      type='text'
                      name='layerName'
                      value={layer.name}
                      onChange={e => handleMapLayer(e, index, 'name')}
                    />
                    <label htmlFor='layerFilename'>File:</label>
                    <input
                      type='text'
                      name='layerFilename'
                      value={layer.url}
                      onChange={e => handleMapLayer(e, index, 'url')}
                    />
                    <label htmlFor='layerNamespace'>TOPOJSON Namespace:</label>
                    <input
                      type='text'
                      name='layerNamespace'
                      value={layer.namespace}
                      onChange={e => handleMapLayer(e, index, 'namespace')}
                    />
                    <label htmlFor='layerFill'>Fill Color:</label>
                    <input
                      type='text'
                      name='layerFill'
                      value={layer.fill}
                      onChange={e => handleMapLayer(e, index, 'fill')}
                    />
                    <label htmlFor='layerFill'>Fill Opacity (%):</label>
                    <input
                      type='number'
                      min={0}
                      max={100}
                      name='layerFill'
                      value={layer.fillOpacity ? layer.fillOpacity * 100 : ''}
                      onChange={e => handleMapLayer(e, index, 'fillOpacity')}
                    />
                    <label htmlFor='layerStroke'>Stroke Color:</label>
                    <input
                      type='text'
                      name='layerStroke'
                      value={layer.stroke}
                      onChange={e => handleMapLayer(e, index, 'stroke')}
                    />
                    <label htmlFor='layerStroke'>Stroke Width:</label>
                    <input
                      type='number'
                      min={0}
                      max={5}
                      name='layerStrokeWidth'
                      value={layer.strokeWidth}
                      onChange={e => handleMapLayer(e, index, 'strokeWidth')}
                    />
                    <label htmlFor='layerTooltip'>Tooltip:</label>
                    <textarea
                      name='layerTooltip'
                      value={layer.tooltip}
                      onChange={e => handleMapLayer(e, index, 'tooltip')}
                    ></textarea>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          )}
        />
        <Button type='button' variant='editor-primary' onClick={handleAddLayer}>
          Add Map Layer
        </Button>
        <p className='layer-purpose-details'>
          Context should be added to your visualization or associated page to describe the significance of layers that
          are added to maps.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default CustomMapLayersSection
