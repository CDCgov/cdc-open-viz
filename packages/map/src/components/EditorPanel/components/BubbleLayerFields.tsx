import React from 'react'
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'
import { DEFAULT_MAX_BUBBLE_SIZE, DEFAULT_MIN_BUBBLE_SIZE } from '../../../helpers/bubbleLayers'
import type { BubbleLayer, MapConfig } from '../../../types/MapConfig'

type PaletteSection = {
  label: string
  palettes: unknown[]
}

type BubbleLayerFieldsProps = {
  columnNames: string[]
  config: MapConfig
  group: 'data' | 'visual'
  index: number
  layer: BubbleLayer
  paletteSections: PaletteSection[]
  updateBubbleLayer: (index: number, updater: (layer: BubbleLayer) => void) => void
  updateLayerField: (index: number, fieldName: string, value: string | number | boolean) => void
}

type BubbleTooltipColumnKey = 'geo' | 'primary' | 'size'

const BubbleLayerFields = ({
  columnNames,
  config,
  group,
  index,
  layer,
  paletteSections,
  updateBubbleLayer,
  updateLayerField
}: BubbleLayerFieldsProps) => {
  const getPaletteClassName = (p: string) => (layer.palette?.name === p ? 'selected' : '')
  const locationSource = layer.locationSource ?? 'data-column'
  const usesLatLong = locationSource === 'latitude-longitude'

  const updateLayerColumn = (
    columnKey: BubbleTooltipColumnKey,
    updater: (column: NonNullable<BubbleLayer['columns'][BubbleTooltipColumnKey]>) => void
  ) => {
    updateBubbleLayer(index, draft => {
      const currentColumn = draft.columns[columnKey] ?? { name: '' }
      draft.columns[columnKey] = { ...currentColumn }
      updater(draft.columns[columnKey] as NonNullable<BubbleLayer['columns'][BubbleTooltipColumnKey]>)
    })
  }

  const renderTooltipControls = (columnKey: BubbleTooltipColumnKey, label: string, display: boolean) => {
    if (!display) return null

    return (
      <TextField
        value={layer.columns[columnKey]?.label ?? ''}
        section='bubble'
        subsection={`layer-${index}-${columnKey}`}
        fieldName='label'
        label={`${label} Tooltip Label`}
        updateField={(_section, _subsection, _fieldName, value) => {
          updateLayerColumn(columnKey, column => {
            column.label = value
          })
        }}
      />
    )
  }

  if (group === 'data') {
    return (
      <>
        <Select
          label='Bubble Location'
          section='bubble'
          subsection={`layer-${index}`}
          fieldName='locationSource'
          value={locationSource}
          options={[
            { label: 'Use data column', value: 'data-column' },
            { label: 'Use lat/long', value: 'latitude-longitude' }
          ]}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubbleLayer(index, draft => {
              draft.locationSource = e.target.value as BubbleLayer['locationSource']
            })
          }}
        />
        <Select
          label={usesLatLong ? 'Label Column' : 'Location Data Column'}
          section='bubble'
          subsection={`layer-${index}`}
          fieldName='geo-column'
          value={layer.columns.geo.name ?? ''}
          initial='- None -'
          options={columnNames}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubbleLayer(index, draft => {
              draft.columns.geo = { ...draft.columns.geo, name: e.target.value }
            })
          }}
        />
        {renderTooltipControls('geo', usesLatLong ? 'Label' : 'Location', Boolean(layer.columns.geo.name))}
        {usesLatLong && (
          <>
            <Select
              label='Latitude Column'
              section='bubble'
              subsection={`layer-${index}`}
              fieldName='latitude-column'
              initial='- None -'
              value={layer.columns.latitude?.name ?? ''}
              options={columnNames}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                updateBubbleLayer(index, draft => {
                  if (e.target.value) {
                    draft.columns.latitude = { name: e.target.value }
                  } else {
                    delete draft.columns.latitude
                  }
                })
              }}
            />
            <Select
              label='Longitude Column'
              section='bubble'
              subsection={`layer-${index}`}
              fieldName='longitude-column'
              initial='- None -'
              value={layer.columns.longitude?.name ?? ''}
              options={columnNames}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                updateBubbleLayer(index, draft => {
                  if (e.target.value) {
                    draft.columns.longitude = { name: e.target.value }
                  } else {
                    delete draft.columns.longitude
                  }
                })
              }}
            />
          </>
        )}
        <Select
          label='Coloring Field'
          section='bubble'
          subsection={`layer-${index}`}
          fieldName='primary-column'
          initial='- None -'
          value={layer.columns.primary.name ?? ''}
          options={columnNames}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubbleLayer(index, draft => {
              draft.columns.primary = { ...draft.columns.primary, name: e.target.value }
            })
          }}
        />
        {renderTooltipControls(
          'primary',
          'Coloring Field',
          Boolean(layer.columns.primary.name)
        )}
        <Select
          label='Size Column'
          section='bubble'
          subsection={`layer-${index}`}
          fieldName='size-column'
          initial={layer.columns.primary.name ? '- Same as Coloring Field -' : '- None -'}
          value={layer.columns.size?.name ?? ''}
          options={columnNames}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubbleLayer(index, draft => {
              if (e.target.value) {
                draft.columns.size = { ...(draft.columns.size ?? {}), name: e.target.value }
              } else {
                delete draft.columns.size
              }
            })
          }}
        />
        {renderTooltipControls('size', 'Size', Boolean(layer.columns.size?.name))}
        <TextField
          type='number'
          value={layer.minBubbleSize ?? DEFAULT_MIN_BUBBLE_SIZE}
          section='bubble'
          subsection={`layer-${index}`}
          fieldName='minBubbleSize'
          label='Minimum Bubble Size'
          updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
        />
        <TextField
          type='number'
          value={layer.maxBubbleSize ?? DEFAULT_MAX_BUBBLE_SIZE}
          section='bubble'
          subsection={`layer-${index}`}
          fieldName='maxBubbleSize'
          label='Maximum Bubble Size'
          updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
        />
      </>
    )
  }

  return (
    <>
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
    </>
  )
}

export default BubbleLayerFields
