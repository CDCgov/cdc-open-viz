import { useContext, FC } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'

// core
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

// contexts
import { ChartContext } from './../../../../types/ChartContext.js'
import { useEditorPermissions } from '../../useEditorPermissions.js'
import { useEditorPanelContext } from '../../EditorPanelContext.js'
import ConfigContext from '../../../../ConfigContext.js'
import { PanelProps } from '../PanelProps'
import { getTileKeys } from '../../../../helpers/smallMultiplesHelpers'

const PanelSmallMultiples: FC<PanelProps> = props => {
  const { config, rawData, updateConfig } = useContext<ChartContext>(ConfigContext)
  const { updateField } = useEditorPanelContext()
  const { visSupportsSmallMultiples } = useEditorPermissions()

  const getColumns = (filter = true) => {
    let columns = {}
    rawData?.forEach(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    if (filter) {
      const { lower, upper } = config.confidenceKeys || {}
      Object.keys(columns).forEach(key => {
        if (
          (config.series && config.series.filter(series => series.dataKey === key).length > 0) ||
          (config.confidenceKeys &&
            Object.keys(config.confidenceKeys).includes(key) &&
            ((lower && upper) || lower || upper) &&
            key !== lower &&
            key !== upper)
        ) {
          delete columns[key]
        }
      })
    }

    return Object.keys(columns)
  }

  return (
    <>
      {visSupportsSmallMultiples() && (
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Small Multiples</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Select
              value={config.smallMultiples?.mode || ''}
              fieldName='mode'
              section='smallMultiples'
              label='Tile Mode'
              initial='Select Mode'
              updateField={updateField}
              options={[
                { label: 'By data series', value: 'by-series' },
                { label: 'By column values', value: 'by-column' }
              ]}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      Choose how to create multiple charts. "By Data Series" creates a tile for each configured data
                      series. "By Column Values" creates a tile for each unique value in the selected column.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            {config.smallMultiples?.mode === 'by-column' && (
              <Select
                value={config.smallMultiples?.tileColumn || ''}
                fieldName='tileColumn'
                section='smallMultiples'
                label='Tile By Column'
                initial='Select Column'
                updateField={updateField}
                options={getColumns()}
              />
            )}

            {config.smallMultiples?.mode && (
              <>
                <div className='two-col-inputs'>
                  <TextField
                    type='number'
                    value={config.smallMultiples?.tilesPerRowDesktop}
                    section='smallMultiples'
                    fieldName='tilesPerRowDesktop'
                    label='Tiles Per Row'
                    updateField={updateField}
                    min={1}
                    max={6}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Number of tiles to display per row on desktop screens.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField
                    type='number'
                    value={config.smallMultiples?.tilesPerRowMobile}
                    section='smallMultiples'
                    fieldName='tilesPerRowMobile'
                    label='Mobile'
                    updateField={updateField}
                    min={1}
                    max={3}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Number of tiles to display per row on mobile screens.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                </div>

                {/* Tile Ordering */}
                {(() => {
                  const availableTiles = getTileKeys(config, rawData)
                  if (availableTiles.length === 0) return null

                  const tileOrderOptions = [
                    {
                      label: 'Ascending By Title',
                      value: 'asc'
                    },
                    {
                      label: 'Descending By Title',
                      value: 'desc'
                    },
                    {
                      label: 'Custom',
                      value: 'custom'
                    }
                  ]

                  const currentOrderType = config.smallMultiples?.tileOrderType || 'asc'

                  const handleOrderTypeChange = orderType => {
                    const newConfig = {
                      ...config,
                      smallMultiples: {
                        ...config.smallMultiples,
                        tileOrderType: orderType
                      }
                    }

                    // If switching to custom, initialize with current tile order
                    if (orderType === 'custom' && !config.smallMultiples?.tileOrder?.length) {
                      newConfig.smallMultiples.tileOrder = [...availableTiles]
                    }

                    updateConfig(newConfig)
                  }

                  const handleCustomTileOrderChange = (sourceIndex, destinationIndex) => {
                    if (destinationIndex === null) return

                    const currentOrder = config.smallMultiples?.tileOrder || [...availableTiles]
                    const newOrder = [...currentOrder]
                    const [removed] = newOrder.splice(sourceIndex, 1)
                    newOrder.splice(destinationIndex, 0, removed)

                    updateConfig({
                      ...config,
                      smallMultiples: {
                        ...config.smallMultiples,
                        tileOrder: newOrder,
                        tileOrderType: 'custom'
                      }
                    })
                  }

                  return (
                    <>
                      <Select
                        value={currentOrderType}
                        options={tileOrderOptions}
                        label='Tile Order'
                        updateField={(_section, _subsection, _fieldName, value) => {
                          handleOrderTypeChange(value)
                        }}
                      />

                      {currentOrderType === 'custom' && (
                        <DragDropContext
                          onDragEnd={({ source, destination }) =>
                            handleCustomTileOrderChange(source.index, destination?.index)
                          }
                        >
                          <Droppable droppableId='tile_order'>
                            {provided => (
                              <ul
                                {...provided.droppableProps}
                                className='sort-list'
                                ref={provided.innerRef}
                                style={{ marginTop: '1em' }}
                              >
                                {(config.smallMultiples?.tileOrder || availableTiles).map((tileKey, index) => (
                                  <Draggable key={tileKey} draggableId={`tile-${tileKey}`} index={index}>
                                    {(provided, snapshot) => (
                                      <li>
                                        <div
                                          className={snapshot.isDragging ? 'currently-dragging' : ''}
                                          style={provided.draggableProps.style}
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          {tileKey}
                                        </div>
                                      </li>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </ul>
                            )}
                          </Droppable>
                        </DragDropContext>
                      )}
                    </>
                  )
                })()}

                {/* Color Mode */}
                <Select
                  value={config.smallMultiples?.colorMode || 'different'}
                  options={[
                    {
                      label: 'Same Color',
                      value: 'same'
                    },
                    {
                      label: 'Different Colors',
                      value: 'different'
                    }
                  ]}
                  label='Color Mode'
                  updateField={(_section, _subsection, _fieldName, value) => {
                    updateConfig({
                      ...config,
                      smallMultiples: {
                        ...config.smallMultiples,
                        colorMode: value
                      }
                    })
                  }}
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          When "Different Colors" is selected, each tile will use the next color in the configured color
                          palette.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />

                {/* Custom Tile Titles - only show for by-column mode */}
                {config.smallMultiples?.mode === 'by-column' && (
                  <div>
                    <label style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Custom Tile Titles</label>

                    {(() => {
                      const availableTiles = getTileKeys(config, rawData)
                      if (availableTiles.length === 0) return null

                      const handleTitleChange = (tileKey, customTitle) => {
                        const newTitles = { ...config.smallMultiples?.tileTitles }
                        if (customTitle.trim() === '' || customTitle === tileKey) {
                          delete newTitles[tileKey] // Remove entry if empty or same as key
                        } else {
                          newTitles[tileKey] = customTitle
                        }

                        updateConfig({
                          ...config,
                          smallMultiples: {
                            ...config.smallMultiples,
                            tileTitles: newTitles
                          }
                        })
                      }

                      return (
                        <div className='tile-titles-editor' style={{ maxWidth: '100%', overflow: 'hidden' }}>
                          {availableTiles.map(tileKey => {
                            const customTitle = config.smallMultiples?.tileTitles?.[tileKey] || ''
                            return (
                              <div
                                key={tileKey}
                                className='tile-title-row'
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginBottom: '0.75rem',
                                  maxWidth: '100%'
                                }}
                              >
                                <label
                                  style={{
                                    minWidth: '80px',
                                    maxWidth: '120px',
                                    marginRight: '0.75rem',
                                    fontWeight: 'normal',
                                    fontSize: '13px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0
                                  }}
                                >
                                  {tileKey}:
                                </label>
                                <input
                                  type='text'
                                  value={customTitle}
                                  placeholder={tileKey}
                                  onChange={event => handleTitleChange(tileKey, event.target.value)}
                                  style={{
                                    flex: 1,
                                    minWidth: 0,
                                    maxWidth: '200px',
                                    fontSize: '13px',
                                    padding: '4px 8px',
                                    height: '30px',
                                    border: '1px solid #ccc',
                                    borderRadius: '3px'
                                  }}
                                />
                              </div>
                            )
                          })}
                        </div>
                      )
                    })()}
                  </div>
                )}

                <CheckBox
                  value={config.smallMultiples?.independentYAxis}
                  section='smallMultiples'
                  fieldName='independentYAxis'
                  label='Independent Y-Axis Scales'
                  updateField={updateField}
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          When checked, the y-axis scale for each tile will be calculated separately. The chart's y-axis
                          min/max will override this setting if they are configured.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />

                <CheckBox
                  value={config.smallMultiples?.hideLegend !== false}
                  section='smallMultiples'
                  fieldName='hideLegend'
                  label='Hide Legend'
                  updateField={updateField}
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          When checked, the legend is hidden in small multiples mode. When unchecked, the main chart
                          legend is displayed.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />
              </>
            )}
          </AccordionItemPanel>
        </AccordionItem>
      )}
    </>
  )
}

export default PanelSmallMultiples
