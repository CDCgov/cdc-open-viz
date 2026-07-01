import { TextField } from '@cdc/core/components/EditorPanel/Inputs'
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
      <TextField
        value={bubbleSizeLegend.title ?? layer.columns.size?.name ?? layer.columns.primary.name ?? ''}
        section='bubble'
        subsection={`layer-${index}-size-legend`}
        fieldName='title'
        label='Size Legend Title'
        updateField={(_section: string, _subsection: string, _fieldName: string, value: string) => {
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
        updateField={(_section: string, _subsection: string, _fieldName: string, value: string) => {
          updateLayerSizeLegend(index, sizeLegend => {
            sizeLegend.description = value
          })
        }}
      />
    </>
  )
}

export default BubbleSizeLegendFields
