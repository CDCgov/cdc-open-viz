import React from 'react'
import { CheckBox, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import type { BubbleLayer } from '../../../types/MapConfig'

type BubbleSizeLegendFieldsProps = {
  index: number
  layer: BubbleLayer
  updateLayerSizeLegend: (
    index: number,
    updater: (sizeLegend: NonNullable<NonNullable<BubbleLayer['legend']>['size']>) => void
  ) => void
}

const BubbleSizeLegendFields = ({ index, layer, updateLayerSizeLegend }: BubbleSizeLegendFieldsProps) => {
  const bubbleSizeLegend = layer.legend?.size ?? {}

  return (
    <>
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
    </>
  )
}

export default BubbleSizeLegendFields
