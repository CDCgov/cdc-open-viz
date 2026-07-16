import React from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'
import { filterColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { isCoveDeveloperMode } from '@cdc/core/helpers/queryStringUtils'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import {
  BUBBLE_STATIC_COLOR_SWATCHES,
  DEFAULT_BUBBLE_STATIC_COLOR,
  DEFAULT_MAX_BUBBLE_SIZE,
  DEFAULT_MIN_BUBBLE_SIZE,
  getBubbleLayerLocationSource,
  getBubbleLayerOpacity,
  getBubbleLayerPaletteForReverseState,
  getEffectiveBubbleLayerPalette,
  getFiniteBubbleNumber
} from '../../../helpers/bubbleLayers'
import { generateBubbleLayerRuntimeData } from '../../../helpers/generateRuntimeData'
import { getOrderedBubbleSizeCategories, shouldIncludeNonGeoDataInBubbleSizeDomain } from '../../../helpers/bubbleSize'
import type { BubbleLayer, MapConfig } from '../../../types/MapConfig'

type BubbleLayerFieldsProps = {
  columnNames: string[]
  config: MapConfig
  group: 'data' | 'visual'
  index: number
  layer: BubbleLayer
  updateBubbleLayer: (index: number, updater: (layer: BubbleLayer) => void) => void
  updateLayerField: (index: number, fieldName: string, value: string | number | boolean) => void
}

type BubbleTooltipColumnKey = 'geo' | 'primary' | 'size'
type BubbleSizeSortMode = 'automatic' | 'custom'

const BubbleSizeCategoryList = ({ values }: { values: string[] }) => (
  <>
    {values.map((value, valueIndex) => (
      <Draggable key={value} draggableId={`bubble-size-category-${value}`} index={valueIndex}>
        {(provided, snapshot) => (
          <li style={{ position: 'relative' }}>
            <div
              className={snapshot.isDragging ? 'currently-dragging' : ''}
              style={provided.draggableProps.style}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {value}
            </div>
          </li>
        )}
      </Draggable>
    ))}
  </>
)

const BubbleLayerFields = ({
  columnNames,
  config,
  group,
  index,
  layer,
  updateBubbleLayer,
  updateLayerField
}: BubbleLayerFieldsProps) => {
  const effectivePalette = getEffectiveBubbleLayerPalette(config, layer) ?? config.general.palette
  const isLayerPaletteReversed = Boolean(effectivePalette?.isReversed)
  const { sequential, nonSequential, accessibleColors } = React.useMemo(
    () => filterColorPalettes({ config, isReversed: isLayerPaletteReversed, colorPalettes }),
    [config, isLayerPaletteReversed]
  )
  const paletteSections = [
    { label: 'Sequential', palettes: sequential },
    { label: 'Non-Sequential', palettes: nonSequential },
    { label: 'Colorblind Safe', palettes: accessibleColors }
  ]
  const staticColor = layer.staticColor || DEFAULT_BUBBLE_STATIC_COLOR
  const getPaletteClassName = (p: string) => (effectivePalette?.name === p ? 'selected' : '')
  const locationSource = getBubbleLayerLocationSource(layer)
  const usesLatLong = locationSource === 'latitude-longitude'
  const hasColoringField = Boolean(layer.columns.primary.name)
  const sizeColumnName = layer.columns.size?.name ?? ''
  const sizeType = layer.sizeType ?? 'numeric'
  const canIncludeNonGeoDataInSizeDomain = Boolean(sizeColumnName) && sizeType === 'category' && !usesLatLong
  const bubbleSizeSortMode: BubbleSizeSortMode = layer.sizeCategoryValuesOrder?.length ? 'custom' : 'automatic'
  const hasNonNumericSizeValues =
    Boolean(sizeColumnName) &&
    sizeType === 'numeric' &&
    (config.data ?? []).some(row => {
      const value = row[sizeColumnName]
      if (value === null || value === undefined || String(value).trim() === '') return false
      return getFiniteBubbleNumber(value) === null
    })
  const getBubbleSizeCategoryRows = (categoryLayer: BubbleLayer = layer) => {
    const runtimeData = generateBubbleLayerRuntimeData(
      config,
      categoryLayer,
      [],
      0,
      shouldIncludeNonGeoDataInBubbleSizeDomain(categoryLayer)
    )

    return Object.values(runtimeData ?? {}) as any[]
  }
  const getBubbleSizeCategoryValuesOrder = (categoryLayer: BubbleLayer = layer) =>
    getOrderedBubbleSizeCategories(
      getBubbleSizeCategoryRows(categoryLayer),
      sizeColumnName,
      categoryLayer.sizeCategoryValuesOrder ?? [],
      categoryLayer.showBubbleZeros
    )

  const setBubbleSizeSortMode = (mode: BubbleSizeSortMode) => {
    updateBubbleLayer(index, draft => {
      draft.sizeCategoryValuesOrder =
        mode === 'custom' ? getBubbleSizeCategoryValuesOrder({ ...draft, sizeCategoryValuesOrder: [] }) : []
    })
  }

  const moveBubbleSizeCategory = (sourceIndex: number, destinationIndex?: number) => {
    if (destinationIndex === undefined || sourceIndex === destinationIndex) return

    updateBubbleLayer(index, draft => {
      const categoryValuesOrder = getBubbleSizeCategoryValuesOrder()
      const [movedItem] = categoryValuesOrder.splice(sourceIndex, 1)
      categoryValuesOrder.splice(destinationIndex, 0, movedItem)
      draft.sizeCategoryValuesOrder = categoryValuesOrder
    })
  }

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

  const renderStaticColorControls = () => (
    <>
      <label className='edit-label mt-3'>Bubble Color</label>
      <div className='color-palette' style={{ flexWrap: 'wrap', maxWidth: '13em' }}>
        {BUBBLE_STATIC_COLOR_SWATCHES.map(color => (
          <button
            key={color}
            type='button'
            title={color}
            aria-label={`Bubble Color ${color}`}
            className={staticColor.toLowerCase() === color.toLowerCase() ? 'selected' : ''}
            style={{
              backgroundColor: color,
              height: '1.5em',
              marginBottom: '0.5em',
              marginRight: '0.5em',
              width: '1.5em'
            }}
            onClick={e => {
              e.preventDefault()
              updateBubbleLayer(index, draft => {
                draft.staticColor = color
              })
            }}
          />
        ))}
      </div>
      {isCoveDeveloperMode() && (
        <label htmlFor={`bubble-static-color-${index}`}>
          <span className='edit-label column-heading'>Custom Bubble Color</span>
          <input
            id={`bubble-static-color-${index}`}
            name={`bubble-layer-${index}-staticColor`}
            type='text'
            value={staticColor}
            onChange={e => {
              updateBubbleLayer(index, draft => {
                draft.staticColor = e.target.value
              })
            }}
          />
        </label>
      )}
    </>
  )

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
        {renderTooltipControls('primary', 'Coloring Field', Boolean(layer.columns.primary.name))}
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
                draft.sizeType = 'numeric'
                draft.sizeCategoryValuesOrder = []
              }
            })
          }}
        />
        {sizeColumnName && (
          <Select
            label='Bubble Size Type'
            section='bubble'
            subsection={`layer-${index}`}
            fieldName='sizeType'
            value={sizeType}
            options={[
              { label: 'Numeric', value: 'numeric' },
              { label: 'Categorical', value: 'category' }
            ]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              updateBubbleLayer(index, draft => {
                draft.sizeType = e.target.value as BubbleLayer['sizeType']
                if (draft.sizeType === 'numeric') {
                  draft.sizeCategoryValuesOrder = []
                }
              })
            }}
          />
        )}
        {hasNonNumericSizeValues && (
          <section className='error-box my-2' role='alert'>
            <div>
              <strong className='pt-1'>Warning</strong>
              <p>
                This size column contains non-numeric values. Switch Bubble Size Type to Categorical to use these values
                for sizing.
              </p>
            </div>
          </section>
        )}
        {sizeColumnName && sizeType === 'category' && (
          <>
            <CheckBox
              value={layer.includeNonGeoDataInSizeDomain === true}
              fieldName='includeNonGeoDataInSizeDomain'
              label='Include non-geographic size categories'
              display={canIncludeNonGeoDataInSizeDomain}
              updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
              section='bubble'
              subsection={`layer-${index}`}
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
                      Adds category values from rows that do not match a map geography to the bubble size scale and size
                      legend. These rows do not render as bubbles.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            <Select
              label='Bubble Size Sort'
              section='bubble'
              subsection={`layer-${index}`}
              fieldName='sizeCategorySortMode'
              value={bubbleSizeSortMode}
              options={[
                { label: 'Automatic sort', value: 'automatic' },
                { label: 'Custom sort', value: 'custom' }
              ]}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setBubbleSizeSortMode(e.target.value as BubbleSizeSortMode)
              }
            />
            {bubbleSizeSortMode === 'custom' && (
              <React.Fragment>
                <label>
                  <span className='edit-label'>Category Order</span>
                </label>
                <DragDropContext
                  onDragEnd={({ source, destination }) => moveBubbleSizeCategory(source.index, destination?.index)}
                >
                  <Droppable droppableId={`bubble_size_category_order_${index}`}>
                    {provided => (
                      <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef}>
                        <BubbleSizeCategoryList values={getBubbleSizeCategoryValuesOrder()} />
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </DragDropContext>
              </React.Fragment>
            )}
          </>
        )}
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
        label='Show bubbles for zeroes'
        updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
        section='bubble'
        subsection={`layer-${index}`}
      />
      <CheckBox
        value={layer.extraBubbleBorder ?? false}
        fieldName='extraBubbleBorder'
        label='Add dark outline to bubbles'
        updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
        section='bubble'
        subsection={`layer-${index}`}
      />
      <TextField
        type='number'
        value={getBubbleLayerOpacity(layer)}
        section='bubble'
        subsection={`layer-${index}`}
        fieldName='opacity'
        label='Bubble Opacity'
        min={0}
        max={1}
        step={0.1}
        updateField={(_section, _subsection, fieldName, value) => updateLayerField(index, fieldName, value)}
      />
      {hasColoringField && (
        <>
          <label className='edit-label mt-3'>Bubble Color Palette</label>
          <CheckBox
            value={isLayerPaletteReversed}
            fieldName=''
            label='Reverse colors'
            updateField={() => {}}
            onChange={() => {
              updateBubbleLayer(index, draft => {
                draft.palette = getBubbleLayerPaletteForReverseState(config, draft, !isLayerPaletteReversed)
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
                    draft.palette = { ...effectivePalette, name: paletteName, isReversed: isLayerPaletteReversed }
                  })
                }}
                selectedPalette={effectivePalette?.name ?? ''}
                colorIndices={[2, 3, 5]}
                className='color-palette'
                element='button'
                getItemClassName={getPaletteClassName}
              />
            </React.Fragment>
          ))}
        </>
      )}
      {!hasColoringField && renderStaticColorControls()}
    </>
  )
}

export default BubbleLayerFields
