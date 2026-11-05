import { CheckBox, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import type { BubbleLayer } from '../../../../../types/MapConfig'

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
      <CheckBox
        value={bubbleSizeLegend.show === true}
        fieldName='show'
        label='Show Size Legend'
        aria-label={`Show Size Legend for Layer ${index + 1}`}
        section='bubble'
        subsection={`layer-${index}-size-legend`}
        updateField={() => {}}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          updateLayerSizeLegend(index, sizeLegend => {
            sizeLegend.show = event.target.checked
          })
        }}
      />
      <TextField
        value={bubbleSizeLegend.singleItemLabel ?? ''}
        section='bubble'
        subsection={`layer-${index}-size-legend`}
        fieldName='singleItemLabel'
        label='Single-item Label'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon
                display='question'
                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
              />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Replaces the label when the size legend contains exactly one item across all filters. Leave blank to use
                the data label.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
        updateField={(_section: string, _subsection: string, _fieldName: string, value: string) => {
          updateLayerSizeLegend(index, sizeLegend => {
            sizeLegend.singleItemLabel = value
          })
        }}
      />
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
