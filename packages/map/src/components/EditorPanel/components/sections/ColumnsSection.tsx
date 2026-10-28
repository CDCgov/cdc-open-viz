import React, { useContext, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import Alert from '@cdc/core/components/Alert'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../context'
import { addUIDs } from '../../../../helpers/addUIDs'
import useColumnsRequiredChecker from '../../../../hooks/useColumnsRequiredChecker'
import type { MapContext } from '../../../../types/MapContext'

type ColumnsSectionProps = {
  columnNames: string[]
}

type ColumnSectionProps = {
  fieldKey: 'geo' | 'primary'
  fieldName: string
  show: boolean
  setShow: (fieldKey: 'geo' | 'primary', value: boolean) => void
  children: React.ReactNode
  requiredFieldTarget?: string
}

const ColumnSection = ({ fieldKey, fieldName, show, setShow, children, requiredFieldTarget }: ColumnSectionProps) => {
  if (!show) {
    return (
      <div className='mb-1'>
        <button
          type='button'
          className='btn btn-light'
          aria-expanded='false'
          data-required-field-subsection={requiredFieldTarget}
          onClick={() => setShow(fieldKey, true)}
        >
          <Icon display='caretDown' />
        </button>
        <span> {fieldName}</span>
      </div>
    )
  }

  return (
    <fieldset className='primary-fieldset edit-block column-section' key={fieldKey}>
      <div className='column-section__header'>
        <button
          type='button'
          className='btn btn-light'
          aria-expanded='true'
          data-required-field-subsection={requiredFieldTarget}
          onClick={() => setShow(fieldKey, false)}
        >
          <Icon display='caretUp' />
        </button>
        <span className='column-section__title'>{fieldName}</span>
      </div>
      {children}
    </fieldset>
  )
}

const ColumnsSection = ({ columnNames }: ColumnsSectionProps) => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)
  const { columnsRequiredChecker } = useColumnsRequiredChecker()
  const { columns, legend } = config
  const [columnSectionsOpen, setColumnSectionsOpen] = useState({ geo: true, primary: true })

  const setColumnSectionOpen = (fieldKey: 'geo' | 'primary', value: boolean) => {
    setColumnSectionsOpen(prev => ({ ...prev, [fieldKey]: value }))
  }

  let specialClasses = []
  if (legend.specialClasses && legend.specialClasses.length && typeof legend.specialClasses[0] === 'string') {
    legend.specialClasses.forEach(specialClass => {
      specialClasses.push({
        key: config.columns.primary && config.columns.primary.name ? config.columns.primary.name : columnNames[0],
        value: specialClass,
        label: specialClass
      })
    })
    // DEV-3303 - since the above was a repair of bad config - need to backpopulate into the state
    setConfig({
      ...config,
      legend: {
        ...config.legend,
        specialClasses
      }
    })
  } else {
    specialClasses = legend.specialClasses || []
  }

  const handleEditorChanges = async (property, value) => {
    switch (property) {
      case 'hidePrimaryColumnInTooltip':
        setConfig({
          ...config,
          general: {
            ...config.general,
            [property]: value
          }
        })
        break
      default:
        console.warn(`COVE: Did not recognize editor property.`) // eslint-disable-line
        break
    }
  }

  const editColumn = async (columnName, editTarget, value) => {
    let newSpecialClasses
    switch (editTarget) {
      case 'specialClassEdit':
        newSpecialClasses = Array.from(specialClasses)

        newSpecialClasses[value.index][value.prop] = value.value

        setConfig({
          ...config,
          legend: {
            ...config.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'specialClassDelete':
        newSpecialClasses = Array.from(specialClasses)

        newSpecialClasses.splice(value, 1)

        setConfig({
          ...config,
          legend: {
            ...config.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'specialClassAdd':
        newSpecialClasses = specialClasses

        newSpecialClasses.push(value)

        setConfig({
          ...config,
          legend: {
            ...config.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'name':
        addUIDs(config, config.columns.geo.name)
        setConfig({
          ...config,
          columns: {
            ...config.columns,
            [columnName]: {
              ...config.columns[columnName],
              [editTarget]: value
            }
          }
        })

        break
      default:
        setConfig({
          ...config,
          columns: {
            ...config.columns,
            [columnName]: {
              ...config.columns[columnName],
              [editTarget]: value
            }
          }
        })
        break
    }
  }

  const updateColumnOrder = (columnName, value) => {
    const parsedValue = Number.parseInt(value, 10)
    editColumn(columnName, 'order', Number.isNaN(parsedValue) ? undefined : parsedValue)
  }

  // just adds a new column but not set to any data yet
  const addAdditionalColumn = number => {
    const columnKey = `additionalColumn${number}`

    setConfig({
      ...config,
      columns: {
        ...config.columns,
        [columnKey]: {
          label: 'New Column',
          dataTable: false,
          tooltips: false,
          prefix: '',
          suffix: ''
        }
      }
    })
  }

  const removeAdditionalColumn = columnName => {
    const newColumns = config.columns

    delete newColumns[columnName]

    setConfig({
      ...config,
      columns: newColumns
    })
  }

  useEffect(() => {
    columnsRequiredChecker()
  }, [config])

  const columnsOptions = [
    <option value='' key='Select Option'>
      - Select Option -
    </option>
  ]

  columnNames.map(columnName =>
    columnsOptions.push(
      <option value={columnName} key={columnName}>
        {columnName}
      </option>
    )
  )

  const columnsByKey = {}
  config.data.forEach(datum => {
    Object.keys(datum).forEach(key => {
      columnsByKey[key] = columnsByKey[key] || []
      const value = typeof datum[key] === 'number' ? datum[key].toString() : datum[key]

      if (columnsByKey[key].indexOf(value) === -1) {
        columnsByKey[key].push(value)
      }
    })
  })

  const additionalColumns = Object.keys(config.columns).filter(value => {
    const defaultCols = ['geo', 'navigate', 'primary', 'latitude', 'longitude']

    return !defaultCols.includes(value)
  })

  const updateField = updateFieldFactory(config, setConfig)

  return (
    <AccordionItem>
      {' '}
      {/* Columns */}
      <AccordionItemHeading>
        <AccordionItemButton data-required-field-section='map-columns'>Columns</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ColumnSection
          fieldKey='geo'
          fieldName='Geography'
          show={columnSectionsOpen.geo}
          setShow={setColumnSectionOpen}
          requiredFieldTarget='map-geography-section'
        >
          <label>
            <span className='edit-label column-heading'>
              Geography
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>
                    Select the source column containing the map location names or, for county-level maps, the FIPS
                    codes.
                  </p>
                </Tooltip.Content>
              </Tooltip>
            </span>
            <Select
              data-required-field-control='map-geography'
              value={config.columns.geo ? config.columns.geo.name : columnsOptions[0]}
              options={columnsOptions.map(c => c.key)}
              onChange={event => {
                editColumn('geo', 'name', event.target.value)
              }}
            />
          </label>
          {config.general.type === 'us-geocode' && (
            <CheckBox
              value={config.general.convertFipsCodes}
              section='general'
              subsection={null}
              fieldName='convertFipsCodes'
              label='Convert FIPS Codes to Geography Name'
              updateField={updateField}
            />
          )}

          <CheckBox
            value={config.general.hideGeoColumnInTooltip || false}
            section='general'
            subsection={null}
            fieldName='hideGeoColumnInTooltip'
            label='Hide Geography Column Name in Tooltip'
            updateField={updateField}
          />
          <TextField
            value={columns.geo.label}
            section='columns'
            subsection='geo'
            fieldName='label'
            label='Geography Column Label'
            updateField={updateField}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Enter a label for the geography column in tooltips and the data table.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
          <TextField
            value={config.general.geoLabelOverride}
            section='general'
            fieldName='geoLabelOverride'
            label='Geography Label'
            className='edit-label'
            updateField={updateField}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Enter a geography label for use in tooltips.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
          <label className='mt-2'>
            <span className='edit-label column-heading'>
              Geography Display Column
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>
                    Optional. Select a column containing alternate display names for geographies (e.g., translated
                    names). These will be shown in tooltips, the data table, and navigation menus instead of the
                    geography column values.
                  </p>
                </Tooltip.Content>
              </Tooltip>
            </span>
            <Select
              value={config.columns.geo?.displayColumn || ''}
              options={columnsOptions.map(c => c.key)}
              onChange={event => {
                editColumn('geo', 'displayColumn', event.target.value)
              }}
            />
          </label>
          <CheckBox
            value={config.columns.geo?.dataTable || false}
            section='columns'
            subsection='geo'
            fieldName='dataTable'
            label='Show in Data Table'
            updateField={updateField}
          />
          <CheckBox
            value={config.columns.geo?.tooltip || false}
            section='columns'
            subsection='geo'
            fieldName='tooltip'
            label='Show in Tooltips'
            updateField={updateField}
          />
          <label className='mt-2'>
            <span className='edit-label column-heading'>Order</span>
            <input
              onWheel={e => e.currentTarget.blur()}
              type='number'
              min='1'
              value={config.columns.geo?.order ?? ''}
              onChange={event => {
                updateColumnOrder('geo', event.target.value)
              }}
            />
          </label>
        </ColumnSection>
        {config.general.geoType === 'us-county' && config.general.showHSABoundaries && (
          <Select
            label='HSA Description Column'
            value={config.columns.hsa?.name}
            options={columnsOptions.map(c => c.key)}
            onChange={e => {
              editColumn('hsa', 'name', e.target.value)
            }}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Select the source column containing the HSA description.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        )}
        {'navigation' !== config.general.type && (
          <ColumnSection
            fieldKey='primary'
            fieldName='Data'
            show={columnSectionsOpen.primary}
            setShow={setColumnSectionOpen}
            requiredFieldTarget='map-data-section'
          >
            <Select
              data-required-field-control='map-data-column'
              label='Data Column'
              value={columns.primary.name}
              options={columnsOptions.map(c => c.key)}
              onChange={event => {
                const _state = cloneConfig(config)
                _state.columns.primary.name = event.target.value
                _state.columns.primary.label = event.target.value
                setConfig(_state)
              }}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Select the source column containing the categorical or numeric values to be mapped.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            <label>
              <CheckBox
                value={config.general.hidePrimaryColumnInTooltip || false}
                section='general'
                subsection={null}
                fieldName='hidePrimaryColumnInTooltip'
                label='Hide Data Column Name in Tooltip'
                updateField={updateField}
                onChange={event => {
                  handleEditorChanges('hidePrimaryColumnInTooltip', event.target.checked)
                }}
              />
            </label>
            <TextField
              value={columns.primary.label}
              section='columns'
              subsection='primary'
              fieldName='label'
              label='Data Label'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Enter a data label for use in tooltips and the data table.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            <ul className='column-edit'>
              <li className='three-col'>
                <TextField
                  value={columns.primary.prefix}
                  section='columns'
                  subsection='primary'
                  fieldName='prefix'
                  label='Prefix'
                  updateField={updateField}
                />
                <TextField
                  value={columns.primary.suffix}
                  section='columns'
                  subsection='primary'
                  fieldName='suffix'
                  label='Suffix'
                  updateField={updateField}
                />
                <TextField
                  type='number'
                  value={columns.primary.roundToPlace}
                  section='columns'
                  subsection='primary'
                  fieldName='roundToPlace'
                  label='Round'
                  updateField={updateField}
                  min={0}
                />
              </li>
              <CheckBox
                value={config.columns.primary.useCommas}
                section='columns'
                subsection='primary'
                fieldName='useCommas'
                label='Add Commas to Numbers'
                updateField={updateField}
              />
              <CheckBox
                value={config.columns.primary.dataTable || false}
                section='columns'
                subsection='primary'
                fieldName='dataTable'
                label='Show in Data Table'
                updateField={updateField}
              />
              <CheckBox
                value={config.columns.primary.tooltip || false}
                section='columns'
                subsection='primary'
                fieldName='tooltip'
                label='Show in Tooltips'
                updateField={updateField}
              />
              <label>
                <span className='edit-label column-heading'>Order</span>
                <input
                  onWheel={e => e.currentTarget.blur()}
                  type='number'
                  min='1'
                  value={config.columns.primary?.order ?? ''}
                  onChange={event => {
                    updateColumnOrder('primary', event.target.value)
                  }}
                />
              </label>
            </ul>
          </ColumnSection>
        )}

        {
          <>
            <Select
              label='Latitude Column'
              value={config.columns.latitude.name}
              options={columnsOptions.map(c => c.key)}
              onChange={e => {
                editColumn('latitude', 'name', e.target.value)
              }}
            />
            <Select
              label='Longitude Column'
              value={config.columns.longitude.name}
              options={columnsOptions.map(c => c.key)}
              onChange={e => {
                editColumn('longitude', 'name', e.target.value)
              }}
            />
          </>
        }

        <label className='edit-block navigate column-heading'>
          <span className='edit-label column-heading'>
            Navigation
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  To provide end users with navigation functionality, select the source column containing the navigation
                  URLs.
                </p>
              </Tooltip.Content>
            </Tooltip>
          </span>
          <Select
            value={config.columns.navigate ? config.columns.navigate.name : ''}
            options={columnsOptions.map(c => c.key)}
            onChange={event => {
              editColumn('navigate', 'name', event.target.value)
            }}
          />
        </label>
        {'navigation' !== config.general.type && (
          <fieldset className='primary-fieldset edit-block'>
            <label>
              <span className='edit-label'>
                Special Classes
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      For secondary values such as "NA", the system can automatically color-code them in shades of gray,
                      one shade for each special class.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              </span>
            </label>
            {config.legend.specialClasses.length === 2 && (
              <Alert
                type='info'
                message='If a third special class is needed you can apply a pattern to set it apart.'
                showCloseButton={false}
              />
            )}
            <GroupedList
              items={specialClasses}
              label='Special Classes'
              droppableId='map-special-classes'
              draggable={false}
              renderItem={(specialClass, i) => (
                <Accordion allowZeroExpanded key={`special-class-${i}`}>
                  <AccordionItem className='series-item series-item--chart'>
                    <AccordionItemHeading className='series-item__title'>
                      <AccordionItemButton className='accordion__button'>
                        {specialClass.label || specialClass.value || `Special Class ${i + 1}`}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='series-item__panel-actions'>
                        <Button
                          type='button'
                          variant='danger'
                          size='sm'
                          className='grouped-list__remove'
                          onClick={() => editColumn('primary', 'specialClassDelete', i)}
                        >
                          Remove
                        </Button>
                      </div>
                      <Select
                        label='Data Key'
                        value={specialClass.key}
                        options={columnsOptions.map(option => ({
                          value: option.key,
                          label: option.key
                        }))}
                        onChange={event => {
                          editColumn('primary', 'specialClassEdit', {
                            prop: 'key',
                            index: i,
                            value: event.target.value
                          })
                        }}
                      />
                      <Select
                        label='Value'
                        value={specialClass.value}
                        options={[
                          { value: '', label: '- Select Value -' },
                          ...(columnsByKey[specialClass.key] || [])
                            .sort()
                            .map(option => ({ value: option, label: option }))
                        ]}
                        onChange={event => {
                          editColumn('primary', 'specialClassEdit', {
                            prop: 'value',
                            index: i,
                            value: event.target.value
                          })
                        }}
                      />
                      <label>
                        <span className='edit-label column-heading'>Label</span>
                        <input
                          type='text'
                          value={specialClass.label}
                          onChange={e => {
                            editColumn('primary', 'specialClassEdit', {
                              prop: 'label',
                              index: i,
                              value: e.target.value
                            })
                          }}
                        />
                      </label>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              )}
            />
            {config.legend.specialClasses.length < 2 && (
              <Button
                type='button'
                variant='editor-primary'
                onClick={() => editColumn('primary', 'specialClassAdd', {})}
              >
                Add Special Class
              </Button>
            )}
          </fieldset>
        )}
        {'navigation' !== config.general.type && (
          <fieldset className='primary-fieldset edit-block'>
            <GroupedList
              items={additionalColumns}
              label={
                <>
                  Additional Columns
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        You can specify additional columns to display in tooltips and / or the supporting data table.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                </>
              }
              droppableId='map-additional-columns'
              draggable={false}
              renderItem={val => (
                <Accordion allowZeroExpanded key={val}>
                  <AccordionItem className='series-item series-item--chart'>
                    <AccordionItemHeading className='series-item__title'>
                      <AccordionItemButton className='accordion__button'>
                        {columns[val]?.label || config.columns[val]?.name || 'New Column'}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='series-item__panel-actions'>
                        <Button
                          type='button'
                          variant='danger'
                          size='sm'
                          className='grouped-list__remove'
                          onClick={() => removeAdditionalColumn(val)}
                        >
                          Remove
                        </Button>
                      </div>
                      <Select
                        label='Column'
                        value={config.columns[val] ? config.columns[val].name : ''}
                        options={columnsOptions.map(option => ({
                          value: option.props.value,
                          label: option.props.children
                        }))}
                        onChange={event => {
                          editColumn(val, 'name', event.target.value)
                        }}
                      />
                      <TextField
                        value={columns[val].label}
                        section='columns'
                        subsection={val}
                        fieldName='label'
                        label='Label'
                        updateField={updateField}
                      />
                      <ul className='column-edit'>
                        <li className='three-col'>
                          <TextField
                            value={columns[val].prefix}
                            section='columns'
                            subsection={val}
                            fieldName='prefix'
                            label='Prefix'
                            updateField={updateField}
                          />
                          <TextField
                            value={columns[val].suffix}
                            section='columns'
                            subsection={val}
                            fieldName='suffix'
                            label='Suffix'
                            updateField={updateField}
                          />
                          <TextField
                            type='number'
                            value={columns[val].roundToPlace}
                            section='columns'
                            subsection={val}
                            fieldName='roundToPlace'
                            label='Round'
                            updateField={updateField}
                          />
                        </li>
                        <CheckBox
                          value={config.columns[val].useCommas}
                          section='columns'
                          subsection={val}
                          fieldName='useCommas'
                          label='Add Commas to Numbers'
                          updateField={updateField}
                          onChange={event => {
                            editColumn(val, 'useCommas', event.target.checked)
                          }}
                        />
                        <CheckBox
                          value={config.columns[val].dataTable}
                          section='columns'
                          subsection={val}
                          fieldName='dataTable'
                          label='Show in Data Table'
                          updateField={updateField}
                          onChange={event => {
                            editColumn(val, 'dataTable', event.target.checked)
                          }}
                        />
                        <CheckBox
                          value={config.columns[val].tooltip}
                          section='columns'
                          subsection={val}
                          fieldName='tooltip'
                          label='Show in Tooltips'
                          updateField={updateField}
                          onChange={event => {
                            editColumn(val, 'tooltip', event.target.checked)
                          }}
                        />
                        <label>
                          <span className='edit-label column-heading'>Order</span>
                          <input
                            onWheel={e => e.currentTarget.blur()}
                            type='number'
                            min='1'
                            value={config.columns[val]?.order ?? ''}
                            onChange={event => {
                              updateColumnOrder(val, event.target.value)
                            }}
                          />
                        </label>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              )}
            />
            <Button
              type='button'
              variant='editor-primary'
              onClick={() => addAdditionalColumn(additionalColumns.length + 1)}
            >
              Add Column
            </Button>
          </fieldset>
        )}
        {'category' === config.legend.type && (
          <fieldset className='primary-fieldset edit-block'>
            <label>
              <span className='edit-label'>
                Additional Category
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>You can provide additional categories to ensure they appear in the legend</p>
                  </Tooltip.Content>
                </Tooltip>
              </span>
            </label>
            {config.legend.additionalCategories &&
              config.legend.additionalCategories.map((val, i) => (
                <fieldset className='edit-block' key={val}>
                  <button
                    type='button'
                    className='remove-column'
                    onClick={event => {
                      event.preventDefault()
                      const updatedAdditionaCategories = [...config.legend.additionalCategories]
                      updatedAdditionaCategories.splice(i, 1)
                      updateField('legend', null, 'additionalCategories', updatedAdditionaCategories)
                    }}
                  >
                    Remove
                  </button>
                  <label>
                    <span className='edit-label column-heading'>Category</span>
                    <TextField
                      value={val}
                      section='legend'
                      subsection={null}
                      fieldName='additionalCategories'
                      updateField={(section, subsection, fieldName, value) => {
                        const updatedAdditionaCategories = [...config.legend.additionalCategories]
                        updatedAdditionaCategories[i] = value
                        updateField(section, subsection, fieldName, updatedAdditionaCategories)
                      }}
                    />
                  </label>
                </fieldset>
              ))}
            <Button
              className={'btn btn-primary full-width editor-panel-action-button'}
              onClick={event => {
                event.preventDefault()
                const updatedAdditionaCategories = [...(config.legend.additionalCategories || [])]
                updatedAdditionaCategories.push('')
                updateField('legend', null, 'additionalCategories', updatedAdditionaCategories)
              }}
            >
              Add Category
            </Button>
          </fieldset>
        )}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ColumnsSection
