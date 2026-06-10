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
  index: number
  layer: BubbleLayer
  paletteSections: PaletteSection[]
  updateBubbleLayer: (index: number, updater: (layer: BubbleLayer) => void) => void
  updateLayerField: (index: number, fieldName: string, value: string | number | boolean) => void
}

const BubbleLayerFields = ({
  columnNames,
  config,
  index,
  layer,
  paletteSections,
  updateBubbleLayer,
  updateLayerField
}: BubbleLayerFieldsProps) => {
  const getPaletteClassName = (p: string) => (layer.palette?.name === p ? 'selected' : '')

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
    </>
  )
}

export default BubbleLayerFields
