import React from 'react'
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'
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
  const getColumnTooltipValue = (columnKey: BubbleTooltipColumnKey, fallback = false) =>
    layer.columns[columnKey]?.tooltip ?? fallback

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

  const renderTooltipControls = (
    columnKey: BubbleTooltipColumnKey,
    label: string,
    display: boolean,
    fallbackTooltip = false
  ) => {
    if (!display) return null

    return (
      <>
        <CheckBox
          value={getColumnTooltipValue(columnKey, fallbackTooltip)}
          fieldName={`${columnKey}-tooltip`}
          label={`Show ${label} in Tooltips`}
          updateField={() => {}}
          onChange={() => {
            updateLayerColumn(columnKey, column => {
              column.tooltip = !getColumnTooltipValue(columnKey, fallbackTooltip)
            })
          }}
        />
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
      </>
    )
  }

  if (group === 'data') {
    return (
      <>
        <TextField
          value={layer.label ?? ''}
          section='bubble'
          subsection={`layer-${index}`}
          fieldName='label'
          label='Layer Label'
          updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
        />
        <Select
          label='Bubble Location'
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
          value={layer.columns.geo.name ?? ''}
          initial='- None -'
          options={columnNames}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubbleLayer(index, draft => {
              draft.columns.geo = { ...draft.columns.geo, name: e.target.value }
            })
          }}
        />
        {renderTooltipControls(
          'geo',
          usesLatLong ? 'Label' : 'Location',
          Boolean(layer.columns.geo.name),
          config.columns.geo?.tooltip ?? false
        )}
        {usesLatLong && (
          <>
            <Select
              label='Latitude Column'
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
          label='Data Column'
          initial='- None -'
          value={layer.columns.primary.name ?? ''}
          options={columnNames}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateBubbleLayer(index, draft => {
              draft.columns.primary = { ...draft.columns.primary, name: e.target.value }
            })
          }}
        />
        {renderTooltipControls('primary', 'Data', Boolean(layer.columns.primary.name), config.columns.primary?.tooltip)}
        <Select
          label='Size Column'
          initial={layer.columns.primary.name ? '- Same as Data Column -' : '- None -'}
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
