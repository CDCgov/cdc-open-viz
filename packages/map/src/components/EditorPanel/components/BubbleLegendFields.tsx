import React from 'react'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import type { BubbleLayer, MapConfig } from '../../../types/MapConfig'

type BubbleLegendFieldsProps = {
  columnNames: string[]
  config: MapConfig
  index: number
  layer: BubbleLayer
  numberOfItemsLimit: number
  updateBubbleLayer: (index: number, updater: (layer: BubbleLayer) => void) => void
  updateLayerLegend: (
    index: number,
    updater: (legend: NonNullable<BubbleLayer['legend']>, layer: BubbleLayer) => void
  ) => void
}

const BubbleLegendFields = ({
  columnNames,
  config,
  index,
  layer,
  numberOfItemsLimit,
  updateBubbleLayer,
  updateLayerLegend
}: BubbleLegendFieldsProps) => {
  const bubbleLegend = layer.legend ?? {}
  const bubbleLegendType = bubbleLegend.type ?? config.legend.type
  const isNumeric = bubbleLegendType === 'equalnumber' || bubbleLegendType === 'equalinterval'

  return (
    <>
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
    </>
  )
}

export default BubbleLegendFields
