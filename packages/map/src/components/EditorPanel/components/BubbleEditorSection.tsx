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
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'
import ConfigContext from '../../../context'
import type { MapContext } from '../../../types/MapContext'
import type { BubbleConfig } from '../../../types/MapConfig'

type Props = {
  columnNames: string[]
  numberOfItemsLimit: number
}

const BubbleEditorSection: React.FC<Props> = ({ columnNames, numberOfItemsLimit }) => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)
  const updateField = updateFieldFactory(config, setConfig)

  const isReversed = config.general.palette.isReversed
  const { sequential, nonSequential, accessibleColors } = useMemo(
    () => filterColorPalettes({ config, isReversed, colorPalettes }),
    [isReversed, config.general.palette.version]
  )

  const bubbleLegendType = config.bubble?.legend?.type ?? config.legend.type
  const bubbleLegend = config.bubble?.legend ?? {}
  const bubbleSizeLegend = bubbleLegend.size ?? {}
  const isNumeric = bubbleLegendType === 'equalnumber' || bubbleLegendType === 'equalinterval'

  const updateBubble = (updater: (draft: BubbleConfig) => void) => {
    const _newConfig = cloneConfig(config)
    if (!_newConfig.bubble) _newConfig.bubble = { ...config.bubble } as any
    updater(_newConfig.bubble)
    setConfig(_newConfig)
  }

  const updateBubbleLegend = (updater: (draft: NonNullable<BubbleConfig['legend']>) => void) => {
    updateBubble(b => {
      b.legend = { ...(b.legend ?? {}) }
      updater(b.legend)
    })
  }

  const updateBubbleSizeLegend = (
    updater: (draft: NonNullable<NonNullable<BubbleConfig['legend']>['size']>) => void
  ) => {
    const _newConfig = cloneConfig(config)
    if (!_newConfig.bubble) _newConfig.bubble = { ...config.bubble } as any
    _newConfig.bubble.legend = { ...(_newConfig.bubble.legend ?? {}) }
    _newConfig.bubble.legend.size = { ...(_newConfig.bubble.legend.size ?? {}) }
    updater(_newConfig.bubble.legend.size)
    if (_newConfig.bubble.legend.size.show) _newConfig.general.showSidebar = true
    setConfig(_newConfig)
  }

  const handlePaletteSelection = (paletteName: string) => {
    updateBubble(b => {
      b.palette = { name: paletteName, isReversed: config.bubble?.palette?.isReversed ?? false }
    })
  }

  const getPaletteClassName = (p: string) => (config.bubble?.palette?.name === p ? 'selected' : '')

  const paletteSections = [
    { label: 'Sequential', palettes: sequential },
    { label: 'Non-Sequential', palettes: nonSequential },
    { label: 'Colorblind Safe', palettes: accessibleColors }
  ]

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Bubble</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Select
          label='Geography Column'
          value={config.bubble?.columns?.geo?.name ?? ''}
          options={columnNames}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubble(b => {
              b.columns.geo.name = e.target.value
            })
          }}
        />
        <Select
          label='Data Column'
          value={config.bubble?.columns?.primary?.name ?? ''}
          options={columnNames}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubble(b => {
              b.columns.primary.name = e.target.value
            })
          }}
        />
        <Select
          label='Size Column'
          initial='— Same as Data Column —'
          value={config.bubble?.columns?.size?.name ?? ''}
          options={columnNames}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubble(b => {
              if (e.target.value) {
                b.columns.size = { name: e.target.value }
              } else {
                delete b.columns.size
              }
            })
          }}
        />
        <TextField
          type='number'
          value={config.bubble?.minBubbleSize ?? 1}
          section='bubble'
          fieldName='minBubbleSize'
          label='Minimum Bubble Size'
          updateField={updateField}
        />
        <TextField
          type='number'
          value={config.bubble?.maxBubbleSize ?? 20}
          section='bubble'
          fieldName='maxBubbleSize'
          label='Maximum Bubble Size'
          updateField={updateField}
        />
        <CheckBox
          value={config.bubble?.showBubbleZeros ?? false}
          fieldName='showBubbleZeros'
          label="Show Data with Zero's on Bubble Map"
          updateField={updateField}
          section='bubble'
        />
        <CheckBox
          value={config.bubble?.extraBubbleBorder ?? false}
          fieldName='extraBubbleBorder'
          label='Bubble Map has extra border'
          updateField={updateField}
          section='bubble'
        />
        <label className='edit-label mt-3'>Bubble Color Palette</label>
        <CheckBox
          value={config.bubble?.palette?.isReversed ?? false}
          fieldName=''
          label='Reverse colors'
          updateField={() => {}}
          onChange={() => {
            updateBubble(b => {
              b.palette = {
                name: config.bubble?.palette?.name ?? '',
                isReversed: !(config.bubble?.palette?.isReversed ?? false)
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
              onPaletteSelect={handlePaletteSelection}
              selectedPalette={config.bubble?.palette?.name ?? ''}
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
                  updateBubbleLegend(legend => {
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
                      name='bubbleClassificationType'
                      value='equalnumber'
                      checked={isNumeric}
                      onChange={() => {
                        updateBubbleLegend(legend => {
                          legend.type = 'equalnumber'
                          legend.numberOfItems =
                            config.bubble?.legend?.numberOfItems ?? config.legend.numberOfItems ?? 5
                        })
                      }}
                    />
                    Numeric/Quantitative
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='bubbleClassificationType'
                      value='category'
                      checked={bubbleLegendType === 'category'}
                      onChange={() => {
                        updateBubbleLegend(legend => {
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
                    updateBubbleLegend(legend => {
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
                  updateBubbleLegend(legend => {
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
                    updateBubbleLegend(legend => {
                      legend.numberOfItems = parseInt(e.target.value)
                    })
                  }}
                />
              )}
              {bubbleLegendType === 'category' && (
                <Select
                  label='Category Column'
                  value={config.bubble?.columns?.categorical?.name ?? columnNames[0] ?? ''}
                  options={columnNames}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    updateBubble(b => {
                      b.columns.categorical = { name: e.target.value }
                    })
                  }}
                />
              )}
              <TextField
                value={bubbleLegend.title ?? config.bubble?.columns?.primary?.name ?? ''}
                section='bubble'
                subsection='legend'
                fieldName='title'
                label='Legend Title'
                updateField={(_section, _subsection, _fieldName, value) => {
                  updateBubbleLegend(legend => {
                    legend.title = value
                  })
                }}
              />
              <TextField
                type='textarea'
                value={bubbleLegend.description ?? ''}
                section='bubble'
                subsection='legend'
                fieldName='description'
                label='Legend Description'
                updateField={(_section, _subsection, _fieldName, value) => {
                  updateBubbleLegend(legend => {
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
                  updateBubbleSizeLegend(sizeLegend => {
                    sizeLegend.show = event.target.checked
                  })
                }}
              />
              <TextField
                value={
                  bubbleSizeLegend.title ??
                  config.bubble?.columns?.size?.name ??
                  config.bubble?.columns?.primary?.name ??
                  ''
                }
                section='bubble'
                subsection='legend'
                fieldName='title'
                label='Size Legend Title'
                updateField={(_section, _subsection, _fieldName, value) => {
                  updateBubbleSizeLegend(sizeLegend => {
                    sizeLegend.title = value
                  })
                }}
              />
              <TextField
                type='textarea'
                value={bubbleSizeLegend.description ?? ''}
                section='bubble'
                subsection='legend'
                fieldName='description'
                label='Size Legend Description'
                updateField={(_section, _subsection, _fieldName, value) => {
                  updateBubbleSizeLegend(sizeLegend => {
                    sizeLegend.description = value
                  })
                }}
              />
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default BubbleEditorSection
