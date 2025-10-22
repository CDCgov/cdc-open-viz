import { useContext, FC } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'

// core
import { TextField, Select } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

// contexts
import ConfigContext from '../../../../context'
import { MapContext } from '../../../../types/MapContext'
import { getTileKeys } from '../../../../helpers/smallMultiplesHelpers'

interface PanelSmallMultiplesProps {
  name?: string
}

const PanelSmallMultiples: FC<PanelSmallMultiplesProps> = props => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)
  const { general } = config

  const getColumns = () => {
    let columns = {}
    config.data?.forEach(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    // Filter out geo and primary columns
    if (config.columns?.geo?.name) {
      delete columns[config.columns.geo.name]
    }
    if (config.columns?.primary?.name) {
      delete columns[config.columns.primary.name]
    }

    return Object.keys(columns)
  }

  const updateField = (section, subsection, fieldName, value) => {
    const newConfig = { ...config }

    if (subsection) {
      newConfig[section] = {
        ...newConfig[section],
        [subsection]: {
          ...newConfig[section]?.[subsection],
          [fieldName]: value
        }
      }
    } else {
      newConfig[section] = {
        ...newConfig[section],
        [fieldName]: value
      }
    }

    setConfig(newConfig)
  }

  const handleColumnChange = (section, subsection, fieldName, value) => {
    const newConfig = { ...config }

    // Set the column value
    newConfig.smallMultiples = {
      ...newConfig.smallMultiples,
      tileColumn: value
    }

    // Automatically set mode based on whether a column is selected
    if (value) {
      newConfig.smallMultiples.mode = 'by-column'
    } else {
      newConfig.smallMultiples.mode = undefined
    }

    setConfig(newConfig)
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Small Multiples</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Select
          value={config.smallMultiples?.tileColumn || ''}
          fieldName='tileColumn'
          section='smallMultiples'
          label='Tile By Column'
          initial='Select Column'
          updateField={handleColumnChange}
          options={getColumns()}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Select the column whose unique values will create separate map tiles. Choosing a column will enable
                  small multiples mode.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        {config.smallMultiples?.tileColumn && (
          <>
            <TextField
              type='number'
              value={config.smallMultiples?.tilesPerRowDesktop}
              section='smallMultiples'
              fieldName='tilesPerRowDesktop'
              label='Tiles Per Row (Desktop)'
              updateField={updateField}
              min={1}
              max={4}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      Number of map tiles to display per row on desktop screens. Mobile will always show 1 tile per row.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />

            {/* Tile Ordering */}
            {(() => {
              const availableTiles = getTileKeys(config, config.data).map(String)
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

                setConfig(newConfig)
              }

              const handleCustomTileOrderChange = (sourceIndex, destinationIndex) => {
                if (destinationIndex === null) return

                const currentOrder = config.smallMultiples?.tileOrder || [...availableTiles]
                const newOrder = [...currentOrder]
                const [removed] = newOrder.splice(sourceIndex, 1)
                newOrder.splice(destinationIndex, 0, removed)

                setConfig({
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

            {/* Custom Tile Titles */}
            <div>
              <label style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Custom Tile Titles</label>

              {(() => {
                const availableTiles = getTileKeys(config, config.data).map(String)
                if (availableTiles.length === 0) return null

                const handleTitleChange = (tileKey, customTitle) => {
                  const newTitles = { ...config.smallMultiples?.tileTitles }
                  if (customTitle.trim() === '' || customTitle === tileKey) {
                    delete newTitles[tileKey] // Remove entry if empty or same as key
                  } else {
                    newTitles[tileKey] = customTitle
                  }

                  setConfig({
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
          </>
        )}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PanelSmallMultiples
