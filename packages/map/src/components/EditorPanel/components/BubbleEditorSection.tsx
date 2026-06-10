import React, { useContext, useMemo } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { filterColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import Button from '@cdc/core/components/elements/Button'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import ConfigContext from '../../../context'
import type { MapContext } from '../../../types/MapContext'
import type { BubbleLayer } from '../../../types/MapConfig'
import { createDefaultBubbleLayer, getBubbleLayers, normalizeBubbleLayer } from '../../../helpers/bubbleLayers'
import BubbleLayerFields from './BubbleLayerFields'
import BubbleLegendFields from './BubbleLegendFields'
import BubbleSizeLegendFields from './BubbleSizeLegendFields'

type Props = {
  columnNames: string[]
  numberOfItemsLimit: number
}

const numericFields = new Set(['minBubbleSize', 'maxBubbleSize', 'numberOfItems'])

const BubbleEditorSection: React.FC<Props> = ({ columnNames, numberOfItemsLimit }) => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)
  const isReversed = config.general.palette.isReversed
  const bubbleLayers = getBubbleLayers(config.bubble)

  const { sequential, nonSequential, accessibleColors } = useMemo(
    () => filterColorPalettes({ config, isReversed, colorPalettes }),
    [isReversed, config.general.palette.version]
  )

  const paletteSections = [
    { label: 'Sequential', palettes: sequential },
    { label: 'Non-Sequential', palettes: nonSequential },
    { label: 'Colorblind Safe', palettes: accessibleColors }
  ]

  const setBubbleLayers = (updater: (layers: BubbleLayer[]) => void) => {
    const _newConfig = cloneConfig(config)
    const layers = getBubbleLayers(_newConfig.bubble)
    updater(layers)
    _newConfig.bubble = {
      migratedToBubbleAccordion: _newConfig.bubble?.migratedToBubbleAccordion,
      layers
    }
    setConfig(_newConfig)
  }

  const updateBubbleLayer = (index: number, updater: (layer: BubbleLayer) => void) => {
    setBubbleLayers(layers => {
      layers[index] = normalizeBubbleLayer(layers[index])
      updater(layers[index])
    })
  }

  const addBubbleLayer = () => {
    setBubbleLayers(layers => {
      layers.push(
        createDefaultBubbleLayer({
          columns: {
            geo: { name: config.columns.geo.name || '' },
            primary: { name: config.columns.primary.name || '' }
          }
        })
      )
    })
  }

  const removeBubbleLayer = (index: number) => {
    setBubbleLayers(layers => {
      layers.splice(index, 1)
    })
  }

  const updateLayerField = (index: number, fieldName: string, value: string | number | boolean) => {
    updateBubbleLayer(index, layer => {
      ;(layer as any)[fieldName] = numericFields.has(fieldName) ? Number(value) : value
    })
  }

  const updateLayerLegend = (
    index: number,
    updater: (legend: NonNullable<BubbleLayer['legend']>, layer: BubbleLayer) => void
  ) => {
    updateBubbleLayer(index, layer => {
      layer.legend = { ...(layer.legend ?? {}) }
      updater(layer.legend, layer)
    })
  }

  const updateLayerSizeLegend = (
    index: number,
    updater: (sizeLegend: NonNullable<NonNullable<BubbleLayer['legend']>['size']>) => void
  ) => {
    const _newConfig = cloneConfig(config)
    const layers = getBubbleLayers(_newConfig.bubble)
    layers[index] = normalizeBubbleLayer(layers[index])
    layers[index].legend = { ...(layers[index].legend ?? {}) }
    layers[index].legend.size = { ...(layers[index].legend.size ?? {}) }
    updater(layers[index].legend.size)
    if (layers[index].legend.size.show) _newConfig.general.showSidebar = true
    _newConfig.bubble = {
      migratedToBubbleAccordion: _newConfig.bubble?.migratedToBubbleAccordion,
      layers
    }
    setConfig(_newConfig)
  }

  const renderLayer = (layer: BubbleLayer, index: number) => {
    const title = layer.label || layer.columns.primary.name || `Bubble Layer ${index + 1}`

    return (
      <Accordion allowZeroExpanded key={`bubble-layer-${index}`}>
        <AccordionItem className='series-item series-item--chart'>
          <AccordionItemHeading className='series-item__title'>
            <AccordionItemButton className='accordion__button'>{title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='series-item__panel-actions'>
              <Button
                type='button'
                variant='danger'
                size='sm'
                className='grouped-list__remove'
                onClick={() => removeBubbleLayer(index)}
              >
                Remove Layer
              </Button>
            </div>
            <BubbleLayerFields
              columnNames={columnNames}
              config={config}
              index={index}
              layer={layer}
              paletteSections={paletteSections}
              updateBubbleLayer={updateBubbleLayer}
              updateLayerField={updateLayerField}
            />
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Legend</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <BubbleLegendFields
                    columnNames={columnNames}
                    config={config}
                    index={index}
                    layer={layer}
                    numberOfItemsLimit={numberOfItemsLimit}
                    updateBubbleLayer={updateBubbleLayer}
                    updateLayerLegend={updateLayerLegend}
                  />
                  <BubbleSizeLegendFields index={index} layer={layer} updateLayerSizeLegend={updateLayerSizeLegend} />
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    )
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Bubbles</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {bubbleLayers.length === 0 && <p>There are currently no bubble layers.</p>}
        <GroupedList
          items={bubbleLayers}
          label='Bubble Layers'
          droppableId='map-bubble-layers'
          draggable={false}
          renderItem={renderLayer}
        />
        <Button type='button' variant='editor-primary' onClick={addBubbleLayer}>
          Add Bubble Layer
        </Button>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default BubbleEditorSection
