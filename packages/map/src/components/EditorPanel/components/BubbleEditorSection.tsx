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
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'
import Button from '@cdc/core/components/elements/Button'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import ConfigContext from '../../../context'
import type { MapContext } from '../../../types/MapContext'
import type { BubbleLayer } from '../../../types/MapConfig'
import { createDefaultBubbleLayer, getBubbleLayers, normalizeBubbleLayer } from '../../../helpers/bubbleLayers'

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
    const bubbleLegend = layer.legend ?? {}
    const bubbleLegendType = bubbleLegend.type ?? config.legend.type
    const bubbleSizeLegend = bubbleLegend.size ?? {}
    const isNumeric = bubbleLegendType === 'equalnumber' || bubbleLegendType === 'equalinterval'
    const getPaletteClassName = (p: string) => (layer.palette?.name === p ? 'selected' : '')
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
            <TextField
              value={layer.label ?? ''}
              section='bubble'
              subsection={`layer-${index}`}
              fieldName='label'
              label='Layer Label'
              updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
            />
            <Select
              label='Geography Column'
              value={layer.columns.geo.name ?? ''}
              options={columnNames}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                updateBubbleLayer(index, draft => {
                  draft.columns.geo.name = e.target.value
                })
              }}
            />
            <Select
              label='Data Column'
              value={layer.columns.primary.name ?? ''}
              options={columnNames}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                updateBubbleLayer(index, draft => {
                  draft.columns.primary.name = e.target.value
                })
              }}
            />
            <Select
              label='Size Column'
              initial='- Same as Data Column -'
              value={layer.columns.size?.name ?? ''}
              options={columnNames}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                updateBubbleLayer(index, draft => {
                  if (e.target.value) {
                    draft.columns.size = { name: e.target.value }
                  } else {
                    delete draft.columns.size
                  }
                })
              }}
            />
            <TextField
              type='number'
              value={layer.minBubbleSize ?? 1}
              section='bubble'
              subsection={`layer-${index}`}
              fieldName='minBubbleSize'
              label='Minimum Bubble Size'
              updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
            />
            <TextField
              type='number'
              value={layer.maxBubbleSize ?? 20}
              section='bubble'
              subsection={`layer-${index}`}
              fieldName='maxBubbleSize'
              label='Maximum Bubble Size'
              updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
            />
            <CheckBox
              value={layer.showBubbleZeros ?? false}
              fieldName='showBubbleZeros'
              label="Show Data with Zero's on Bubble Map"
              updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
              section='bubble'
              subsection={`layer-${index}`}
            />
            <CheckBox
              value={layer.extraBubbleBorder ?? false}
              fieldName='extraBubbleBorder'
              label='Bubble Map has extra border'
              updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
              section='bubble'
              subsection={`layer-${index}`}
            />
            <label className='edit-label mt-3'>Bubble Color Palette</label>
            <CheckBox
              value={layer.palette?.isReversed ?? false}
              fieldName=''
              label='Reverse colors'
              updateField={() => {}}
              onChange={() => {
                updateBubbleLayer(index, draft => {
                  draft.palette = {
                    name: layer.palette?.name ?? '',
                    isReversed: !(layer.palette?.isReversed ?? false)
                  }
                })
              }}
            />
            {paletteSections.map(({ label, palettes }) => (
              <React.Fragment key={label}>
                <span>{label}</span>
                <PaletteSelector
                  palettes={palettes}
                  colorPalettes={colorPalettes}
                  config={config}
                  onPaletteSelect={(paletteName: string) => {
                    updateBubbleLayer(index, draft => {
                      draft.palette = { name: paletteName, isReversed: layer.palette?.isReversed ?? false }
                    })
                  }}
                  selectedPalette={layer.palette?.name ?? ''}
                  colorIndices={[2, 3, 5]}
                  className='color-palette'
                  element='button'
                  getItemClassName={getPaletteClassName}
                />
              </React.Fragment>
            ))}
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Legend</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <CheckBox
                    value={bubbleLegend.show !== false}
                    fieldName='show'
                    label='Show Legend'
                    updateField={() => {}}
                    section='bubble'
                    subsection='legend'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      updateLayerLegend(index, legend => {
                        legend.show = event.target.checked
                      })
                    }}
                  />
                  <label>
                    <span className='edit-label'>Data Classification Type</span>
                    <div>
                      <label>
                        <input
                          type='radio'
                          name={`bubbleClassificationType-${index}`}
                          value='equalnumber'
                          checked={isNumeric}
                          onChange={() => {
                            updateLayerLegend(index, legend => {
                              legend.type = 'equalnumber'
                              legend.numberOfItems = bubbleLegend.numberOfItems ?? config.legend.numberOfItems ?? 5
                            })
                          }}
                        />
                        Numeric/Quantitative
                      </label>
                      <label>
                        <input
                          type='radio'
                          name={`bubbleClassificationType-${index}`}
                          value='category'
                          checked={bubbleLegendType === 'category'}
                          onChange={() => {
                            updateLayerLegend(index, legend => {
                              legend.type = 'category'
                            })
                          }}
                        />
                        Categorical
                      </label>
                    </div>
                  </label>
                  {isNumeric && (
                    <Select
                      label='Legend Type'
                      value={bubbleLegendType}
                      options={[
                        { value: 'equalnumber', label: 'Equal Number (Quantiles)' },
                        { value: 'equalinterval', label: 'Equal Interval' }
                      ]}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        updateLayerLegend(index, legend => {
                          legend.type = e.target.value
                        })
                      }}
                    />
                  )}
                  <Select
                    label='Legend Style'
                    value={bubbleLegend.style ?? config.legend.style ?? 'circles'}
                    options={[
                      { value: 'circles', label: 'circles' },
                      { value: 'boxes', label: 'boxes' }
                    ]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      updateLayerLegend(index, legend => {
                        legend.style = e.target.value
                      })
                    }}
                  />
                  {bubbleLegendType !== 'category' && (
                    <Select
                      label='Number of Items'
                      value={String(bubbleLegend.numberOfItems ?? config.legend.numberOfItems ?? 5)}
                      options={[...Array(numberOfItemsLimit).keys()].map(num => ({
                        value: String(num + 1),
                        label: String(num + 1)
                      }))}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        updateLayerLegend(index, legend => {
                          legend.numberOfItems = parseInt(e.target.value)
                        })
                      }}
                    />
                  )}
                  {bubbleLegendType === 'category' && (
                    <Select
                      label='Category Column'
                      value={layer.columns.categorical?.name ?? ''}
                      options={columnNames}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        updateBubbleLayer(index, draft => {
                          draft.columns.categorical = { name: e.target.value }
                        })
                      }}
                    />
                  )}
                  <TextField
                    value={bubbleLegend.title ?? layer.columns.primary.name ?? ''}
                    section='bubble'
                    subsection={`layer-${index}-legend`}
                    fieldName='title'
                    label='Legend Title'
                    updateField={(_section, _subsection, _fieldName, value) => {
                      updateLayerLegend(index, legend => {
                        legend.title = value
                      })
                    }}
                  />
                  <TextField
                    type='textarea'
                    value={bubbleLegend.description ?? ''}
                    section='bubble'
                    subsection={`layer-${index}-legend`}
                    fieldName='description'
                    label='Legend Description'
                    updateField={(_section, _subsection, _fieldName, value) => {
                      updateLayerLegend(index, legend => {
                        legend.description = value
                      })
                    }}
                  />
                  <label className='edit-label mt-3'>Size Legend</label>
                  <CheckBox
                    value={bubbleSizeLegend.show === true}
                    fieldName='show'
                    label='Show Size Legend'
                    updateField={() => {}}
                    section='bubble'
                    subsection='legend'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      updateLayerSizeLegend(index, sizeLegend => {
                        sizeLegend.show = event.target.checked
                      })
                    }}
                  />
                  <TextField
                    value={bubbleSizeLegend.title ?? layer.columns.size?.name ?? layer.columns.primary.name ?? ''}
                    section='bubble'
                    subsection={`layer-${index}-size-legend`}
                    fieldName='title'
                    label='Size Legend Title'
                    updateField={(_section, _subsection, _fieldName, value) => {
                      updateLayerSizeLegend(index, sizeLegend => {
                        sizeLegend.title = value
                      })
                    }}
                  />
                  <TextField
                    type='textarea'
                    value={bubbleSizeLegend.description ?? ''}
                    section='bubble'
                    subsection={`layer-${index}-size-legend`}
                    fieldName='description'
                    label='Size Legend Description'
                    updateField={(_section, _subsection, _fieldName, value) => {
                      updateLayerSizeLegend(index, sizeLegend => {
                        sizeLegend.description = value
                      })
                    }}
                  />
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
