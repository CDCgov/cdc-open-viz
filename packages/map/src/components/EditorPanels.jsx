import React, { useState, useEffect, useCallback } from 'react'

// Third Party
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useDebounce } from 'use-debounce'

// Data
import colorPalettes from '@cdc/core/data/colorPalettes'
import { supportedStatesFipsCodes } from '../data/supported-geos'

// Hooks
import { useColorPalette } from '../hooks/useColorPalette'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import Icon from '@cdc/core/components/ui/Icon'
import InputCheckbox from '@cdc/core/components/input/InputCheckbox'
import InputSelect from '@cdc/core/components/input/InputSelect'
import InputText from '@cdc/core/components/input/InputText'
import InputToggle from '@cdc/core/components/input/InputToggle'
import Label from '@cdc/core/components/element/Label'
import PanelComponentAdvanced from '@cdc/core/components/editor/Panel.Component.Advanced.jsx'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'

// Assets
import UsaGraphic from '@cdc/core/assets/icon-map-usa.svg'
import UsaRegionGraphic from '@cdc/core/assets/usa-region-graphic.svg'
import WorldGraphic from '@cdc/core/assets/icon-map-world.svg'
import AlabamaGraphic from '@cdc/core/assets/icon-map-alabama.svg'
import worldDefaultConfig from '../../examples/default-world.json'
import usaDefaultConfig from '../../examples/default-usa.json'
import countyDefaultConfig from '../../examples/default-county.json'
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'
import produce from 'immer'
import Button from '@cdc/core/components/element/Button'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global'
import SectionWrapper from '@cdc/core/components/ui/SectionWrapper'

const TextField = ({ label, section = null, subsection = null, fieldName, updateField, value: configValue, type = 'input', tooltip, ...attributes }) => {
  const [value, setValue] = useState(configValue)

  const [debouncedValue] = useDebounce(value, 500)

  useEffect(() => {
    if ('string' === typeof debouncedValue && configValue !== debouncedValue) {
      updateField(section, subsection, fieldName, debouncedValue)
    }
  }, [debouncedValue])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`

  const onChange = e => setValue(e.target.value)

  let formElement = <input type='text' name={name} onChange={onChange} {...attributes} value={value} />

  if ('textarea' === type) {
    formElement = <textarea name={name} onChange={onChange} {...attributes} value={value}></textarea>
  }

  if ('number' === type) {
    formElement = <input type='number' name={name} onChange={onChange} {...attributes} value={value} />
  }

  return (
    <label>
      <span className='edit-label column-heading'>
        {label}
        {tooltip}
      </span>
      {formElement}
    </label>
  )
}

const EditorPanels = () => {
  const { config, updateVisConfig, updateVisConfigField } = useVisConfig()

  const { general, columns, legend, dataTable, tooltips, filters } = config

  const [requiredColumns, setRequiredColumns] = useState(null) // Simple config so we know if we need more information before parsing the map
  const [configTextboxValue, setConfigTextbox] = useState({})
  const [loadedDefault, setLoadedDefault] = useState(false)
  const [activeFilterValueForDescription, setActiveFilterValueForDescription] = useState([0, 0])

  const { filteredPallets, filteredQualitative, isPaletteReversed, paletteName } = useColorPalette(colorPalettes, config)

  const categoryMove = (idx1, idx2) => {
    let categoryValuesOrder = [...config.legend.categoryValuesOrder]

    let [movedItem] = categoryValuesOrder.splice(idx1, 1)

    categoryValuesOrder.splice(idx2, 0, movedItem)
    updateVisConfig(
      produce(config, draft => {
        draft.legend.categoryValuesOrder = categoryValuesOrder
      })
    )
  }

  const handleFilterOrder = (idx1, idx2, filterIndex, filter) => {
    let filterOrder = filter.values
    let [movedItem] = filterOrder.splice(idx1, 1)
    filterOrder.splice(idx2, 0, movedItem)
    let newFilters = [...filters]
    let filterItem = { ...newFilters[filterIndex] }
    filterItem.active = filter.values[0]
    filterItem.values = filterOrder
    filterItem.order = 'cust'
    filters[filterIndex] = filterItem

    updateVisConfig(
      produce(config, draft => {
        draft.filters = newFilters
      })
    )
  }

  const DynamicDesc = ({ label, fieldName, value: configValue, type = 'input', ...attributes }) => {
    const [value, setValue] = useState(configValue)

    const [debouncedValue] = useDebounce(value, 500)

    useEffect(() => {
      if ('string' === typeof debouncedValue && configValue !== debouncedValue) {
        handleEditorChanges('changeLegendDescription', [String(activeFilterValueForDescription), debouncedValue])
      }
    }, [debouncedValue])

    const onChange = e => setValue(e.target.value)

    return <textarea onChange={onChange} {...attributes} value={value}></textarea>
  }

  const handleEditorChanges = async (property, value) => {
    switch (property) {
      case 'legendType':
        let testForType = Number(typeof config.data[0][config.columns.primary.name])
        let hasValue = config.data[0][config.columns.primary.name]
        let messages = []

        if (!hasValue) {
          messages.push(`There appears to be values missing for data in the primary column ${config.columns.primary.name}`)
        }

        if (testForType === 'string' && isNaN(testForType) && value !== 'category') {
          messages.push('Error with legend. Primary columns that are text must use a categorical legend type. Try changing the legend type to DEV-12345categorical.')
        } else {
          messages = []
        }

        updateVisConfigField(['legend', 'type'], value)
        updateVisConfigField(['runtime', 'editorErrorMessage'], messages)
        break
      case 'legendNumber':
        updateVisConfigField(['legend', 'numberOfItems'], parseInt(value))
        break
      case 'changeActiveFilterValue':
        const arrVal = value.split(',')

        setActiveFilterValueForDescription(arrVal)
        break
      case 'editorMapType':
        switch (value) {
          case 'us-geocode':
            updateVisConfigField(['general', 'type'], value)
            break
          case 'data':
            updateVisConfigField(['general', 'showSidebar'], true)
            updateVisConfigField(['general', 'type'], 'data')
            break
          case 'navigation':
            updateVisConfigField(['general', 'showSidebar'], false)
            updateVisConfigField(['general', 'type'], 'navigation')
            updateVisConfigField(['tooltips', 'appearanceType'], 'hover')
            break
          case 'bubble':
            updateVisConfigField(['general', 'showSidebar'], false)
            updateVisConfigField(['general', 'type'], 'bubble')
            updateVisConfigField(['tooltips', 'appearanceType'], 'hover')
            break
          default:
            console.warn('Map type not set')
            break
        }
        break
      case 'geoType':
        // If we're still working with default data, switch to the world default to show it as an example
        if (true === loadedDefault && 'world' === value) {
          updateVisConfig(worldDefaultConfig)
          break
        }

        if (true === loadedDefault && 'us' === value) {
          updateVisConfig(usaDefaultConfig)
          break
        }

        if (true === loadedDefault && 'us-county' === value) {
          updateVisConfig(countyDefaultConfig)
          break
        }

        switch (value) {
          case 'us':
            updateVisConfigField(['general', 'geoType'], 'us')
            updateVisConfigField(['dataTable', 'forceDisplay'], true)
            break
          case 'us-region':
            updateVisConfigField(['general', 'geoType'], 'us-region')
            updateVisConfigField(['dataTable', 'forceDisplay'], true)
            break
          case 'world':
            updateVisConfigField(['general', 'geoType'], 'world')
            updateVisConfigField(['dataTable', 'forceDisplay'], true)
            break
          case 'us-county':
            updateVisConfigField(['general', 'geoType'], 'us-county')
            updateVisConfigField(['general', 'expandDataTable'], false)
            updateVisConfigField(['dataTable', 'forceDisplay'], true)
            break
          case 'single-config':
            updateVisConfigField(['general', 'geoType'], 'single-config')
            updateVisConfigField(['general', 'expandDataTable'], false)
            updateVisConfigField(['dataTable', 'forceDisplay'], true)
            break
          default:
            break
        }
        break
      case 'singleColumnLegend':
        updateVisConfigField(['legend', 'singleColumn'], !config.legend.singleColumn)
        updateVisConfigField(['legend', 'singleRow'], false)
        break
      case 'singleRowLegend':
        updateVisConfigField(['legend', 'singleRow'], !config.legend.singleRow)
        updateVisConfigField(['legend', 'singleColumn'], false)
        break
      case 'dynamicDescription':
        updateVisConfigField(['editor', 'activeFilterValueForDescription'], value)
        updateVisConfigField(['legend', 'dynamicDescription'], !config.legend.dynamicDescription)
        break
      case 'changeLegendDescription':
        const [filterValKey, filterValDesc] = value
        updateVisConfigField(['legend', 'descriptions', filterValKey], [filterValDesc])
        break
      case 'displayStateLabels':
        updateVisConfigField(['general', 'displayStateLabels'], !config.general.displayStateLabels)
        break

      case 'chooseState':
        let fipsCode = Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === value)
        let configName = value
        let configData = { fipsCode, configName }

        updateVisConfigField(['general', 'configPicked'], configData)
        break
      default:
        console.warn(`Did not recognize editor property.`)
        break
    }
  }

  const columnsRequiredChecker = useCallback(() => {
    console.info('Running columns required check.')
    let columnList = []

    // Geo is always required
    if ('' === config.columns.geo.name) {
      columnList.push('Geography')
    }

    // Primary is required if we're on a data map or a point map
    if ('navigation' !== config.general.type && '' === config.columns.primary.name) {
      columnList.push('Primary')
    }

    // Navigate is required for navigation maps
    if ('navigation' === config.general.type && ('' === config.columns.navigate.name || undefined === config.columns.navigate)) {
      columnList.push('Navigation')
    }

    if ('us-geocode' === config.general.type && '' === config.columns.latitude.name) {
      columnList.push('Latitude')
    }

    if ('us-geocode' === config.general.type && '' === config.columns.longitude.name) {
      columnList.push('Longitude')
    }

    if (columnList.length === 0) columnList = null

    setRequiredColumns(columnList)
  }, [config.columns, config.general.type])

  const editColumn = async (columnName, editTarget, value) => {
    let newSpecialClasses

    switch (editTarget) {
      case 'specialClassEdit':
        newSpecialClasses = Array.from(legend.specialClasses)

        newSpecialClasses[value.index][value.prop] = value.value

        updateVisConfigField(['legend', 'specialClasses'], newSpecialClasses)
        break
      case 'specialClassDelete':
        newSpecialClasses = Array.from(legend.specialClasses)

        newSpecialClasses.splice(value, 1)

        updateVisConfigField(['legend', 'specialClasses'], newSpecialClasses)
        break
      case 'specialClassAdd':
        newSpecialClasses = legend.specialClasses

        newSpecialClasses.push(value)

        updateVisConfigField(['legend', 'specialClasses'], newSpecialClasses)
        break
      default:
        updateVisConfigField(['columns', columnName, editTarget], value)
        break
    }
  }

  const changeFilter = async (idx, target, value) => {
    let newFilters = [...config.filters]

    switch (target) {
      case 'addNew':
        newFilters.push({
          label: '',
          values: []
        })
        break
      case 'remove':
        if (newFilters.length === 1) {
          newFilters = []
        } else {
          newFilters.splice(idx, 1)
        }
        break
      case 'columnName':
        newFilters[idx] = { ...newFilters[idx] }
        newFilters[idx].columnName = value
        newFilters[idx].values = [] // when a column name changes knock the previous values out
        break
      case 'filterOrder':
        if (value === 'desc') {
          newFilters[idx] = { ...filters[idx] }
          delete newFilters[idx].active
          newFilters[idx].order = 'desc'
        }
        if (value === 'asc') {
          newFilters[idx] = { ...filters[idx] }
          delete newFilters[idx].active
          newFilters[idx].order = 'asc'
        }
        if (value === 'cust') {
          newFilters[idx] = { ...filters[idx] }
          newFilters[idx].order = 'cust'
        }
        break
      default:
        newFilters[idx][target] = value
        break
    }

    updateVisConfigField('filters', newFilters)
  }

  const addAdditionalColumn = number => {
    const columnKey = `additionalColumn${number}`

    updateVisConfigField(['columns', columnKey], {
      label: 'New Column',
      dataTable: false,
      tooltips: false,
      prefix: '',
      suffix: ''
    })
  }

  const removeAdditionalColumn = columnName => {
    const newColumns = config.columns

    delete newColumns[columnName]

    updateVisConfigField('columns', newColumns)
  }

  const displayFilterLegendValue = arr => {
    const filterName = config.filters[arr[0]].label || `Unlabeled Legend`

    const filterValue = filters[arr[0]]

    if (filterValue) {
      return filterName + ' - ' + filterValue.values[arr[1]]
    }
  }

  const sortableItemStyles = {
    display: 'block',
    boxSizing: 'border-box',
    border: '1px solid #D1D1D1',
    borderRadius: '2px',
    background: '#F1F1F1',
    padding: '.4em .6em',
    fontSize: '.8em',
    marginRight: '.3em',
    marginBottom: '.3em',
    cursor: 'move',
    zIndex: '999'
  }

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config)) // Deep copy

    // Strip ref
    delete strippedState['']

    delete strippedState.newViz

    // Remove the legend
    let strippedLegend = JSON.parse(JSON.stringify(config.legend))

    delete strippedLegend.disabledAmt

    strippedState.legend = strippedLegend

    // Remove default data marker if the user started this map from default data
    delete strippedState.defaultData

    // Remove tooltips if they're active in the editor
    let strippedGeneral = JSON.parse(JSON.stringify(config.general))

    strippedState.general = strippedGeneral

    // Add columns property back to data if it's there
    if (config.data.columns) {
      strippedState.data.columns = config.data.columns
    }

    return strippedState
  }

  useEffect(() => {
    setLoadedDefault(config.defaultData)
    columnsRequiredChecker()
  }, [config])

  useEffect(() => {
    //If a categorical map is used and the order is either not defined or incorrect, fix it
    if ('category' === config.legend.type) {
      let valid = true
      if (config.legend.categoryValuesOrder) {
        config.legend.forEach(item => {
          if (!item.special && config.legend.categoryValuesOrder.indexOf(item.value) === -1) {
            valid = false
          }
        })
        let legendKeys = config.legend.map(item => item.value)
        config.legend.categoryValuesOrder.forEach(category => {
          if (legendKeys.indexOf(category) === -1) {
            valid = false
          }
        })
      } else {
        valid = false
      }

      if (!valid) {
        if (config.legend.filter) {
          let arr = config.legend.filter(item => !item.special).map(({ value }) => value)
          updateVisConfigField(['legend', 'categoryValuesOrder'], arr)
        }
      }
    }
  }, [config.legend, updateVisConfigField])

  // if no config choice by default show alabama
  useEffect(() => {
    if (!config.general.configPicked) {
      updateVisConfigField(['general', 'configPicked'], {
        fipsCode: '01',
        configName: 'Alabama'
      })
    }
  }, [])

  const columnsOptions = [
    <option value='' key={'Select Option'}>
      - Select Option -
    </option>
  ]

  const columnsInData = Object.keys(config.data[0])
  columnsInData.map(colName => {
    columnsOptions.push(
      <option value={colName} key={colName}>
        {colName}
      </option>
    )
  })

  let columnsByKey = {}
  config.data.forEach(datum => {
    Object.keys(datum).forEach(key => {
      columnsByKey[key] = columnsByKey[key] || []
      const value = typeof datum[key] === 'number' ? datum[key].toString() : datum[key]

      if (columnsByKey[key].indexOf(value) === -1) {
        columnsByKey[key].push(value)
      }
    })
  })

  let specialClasses = []
  if (legend.specialClasses && legend.specialClasses.length && typeof legend.specialClasses[0] === 'string') {
    legend.specialClasses.forEach(specialClass => {
      specialClasses.push({
        key: config.columns.primary && config.columns.primary.name ? config.columns.primary.name : columnsInData[0],
        value: specialClass,
        label: specialClass
      })
    })
  } else {
    specialClasses = legend.specialClasses || []
  }

  const additionalColumns = Object.keys(config.columns).filter(value => {
    const defaultCols = ['geo', 'navigate', 'primary', 'latitude', 'longitude']

    if (true === defaultCols.includes(value)) {
      return false
    }
    return true
  })

  const usedFilterColumns = {}

  const filtersJSX = config.filters.map((filter, index) => {
    if (filter.columnName) {
      usedFilterColumns[filter.columnName] = true
    }

    const filterOptions = [
      {
        label: 'Ascending Alphanumeric',
        value: 'asc'
      },
      {
        label: 'Descending Alphanumeric',
        value: 'desc'
      },
      {
        label: 'Custom',
        value: 'cust'
      }
    ]

    return (
      <SectionBlock key={index}>
        <Button className='cove-button--remove' onClick={() => changeFilter(index, 'remove')}>
          Remove
        </Button>
        <TextField value={config.filters[index].label} section='filters' subsection={index} fieldName='label' label='Label' />

        <InputSelect label='Filter Column' options={columnsOptions} configField={['filter', 'columnName']} tooltip='Selecting a column will add a dropdown menu below the map legend and allow users to filter based on the values in this column.' />

        <InputSelect label='Filter Order' options={filterOptions} configField={['filter', 'order']} onChange={e => changeFilter(index, 'filterOrder', e.target.value)} />

        {filter.order === 'cust' && (
          <DragDropContext onDragEnd={({ source, destination }) => handleFilterOrder(source.index, destination.index, index, filters[index])}>
            <Droppable droppableId='filter_order'>
              {provided => (
                <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef} style={{ marginTop: '1em' }}>
                  {filters[index]?.values.map((value, index) => {
                    return (
                      <Draggable key={value} draggableId={`draggableFilter-${value}`} index={index}>
                        {(provided, snapshot) => (
                          <li>
                            <div className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                              {value}
                            </div>
                          </li>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </SectionBlock>
    )
  })

  const StateOptionList = () => {
    const arrOfArrays = Object.entries(supportedStatesFipsCodes)

    let sorted = arrOfArrays.sort((a, b) => {
      return a[0].localeCompare(b[0])
    })

    let options = []
    sorted.forEach(config => {
      options.push(
        <option key={config[0]} value={config[1]}>
          {config[1]}
        </option>
      )
    })

    return options
  }

  const filterValueOptionList = []

  if (filters.length > 0) {
    filters.forEach((filter, index) => {
      filters[index].values.forEach((value, valueNum) => {
        filterValueOptionList.push([index, valueNum])
      })
    })
  }

  useEffect(() => {
    if (paletteName) handleEditorChanges('color', paletteName)
  }, [paletteName]) // dont add handleEditorChanges as a dependency even if it requires

  useEffect(() => {
    const parsedData = convertStateToConfig()
    const formattedData = JSON.stringify(parsedData, undefined, 2)

    setConfigTextbox(formattedData)
  }, [config])

  let numberOfItemsLimit = 8

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle
  })

  const CategoryList = () => {
    return config.legend.categoryValuesOrder ? (
      config.legend.categoryValuesOrder.map((value, index) => (
        <Draggable key={value} draggableId={`item-${value}`} index={index}>
          {(provided, snapshot) => (
            <li style={{ position: 'relative' }}>
              <div className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                {value}
              </div>
            </li>
          )}
        </Draggable>
      ))
    ) : (
      <></>
    )
  }

  /*{config?.runtime?.editorErrorMessage.length > 0 && <Error />}*/
  /*{requiredColumns && <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`}/>}*/

  /** Panels ------------------------------------------------------------------------------------- */

  const panelType = (
    <Accordion.Section label='Type'>
      <label>
        <span className='edit-label column-heading'>
          <span>Geography</span>
        </span>
        <ul className='geo-buttons'>
          <button
            className={config.general.geoType === 'us' || config.general.geoType === 'us-county' ? 'active' : ''}
            onClick={e => {
              e.preventDefault()
              handleEditorChanges('geoType', 'us')
            }}
          >
            <UsaGraphic />
            <span>United States</span>
          </button>
          <button
            className={config.general.geoType === 'us-region' ? 'active' : ''}
            onClick={e => {
              e.preventDefault()
              handleEditorChanges('geoType', 'us-region')
            }}
          >
            <UsaRegionGraphic />
            <span>U.S. Region</span>
          </button>
          <button
            className={config.general.geoType === 'world' ? 'active' : ''}
            onClick={e => {
              e.preventDefault()
              handleEditorChanges('geoType', 'world')
            }}
          >
            <WorldGraphic />
            <span>World</span>
          </button>
          <button
            className={config.general.geoType === 'single-config' ? 'active' : ''}
            onClick={e => {
              e.preventDefault()
              handleEditorChanges('geoType', 'single-config')
            }}
          >
            <AlabamaGraphic />
            <span>U.S. State</span>
          </button>
        </ul>
      </label>

      {/* Select > State or County Map */}
      {(config.general.geoType === 'us' || config.general.geoType === 'us-county') && <InputSelect label='Geography Subtype' options={['US State-Level', 'US County-Level']} configField={['general', 'geoType']} onChange={e => handleEditorChanges('geoType', e.target.value)} />}

      {/* Select > Filter a config */}
      {config.general.geoType === 'single-config' && <InputSelect label='State Selector' options={supportedStatesFipsCodes} configField={['general', 'configPicked']} onChange={e => handleEditorChanges('chooseState', e.target.value)} />}

      {/* Map Type */}
      <InputSelect
        label='Map Style'
        configField={['general', 'type']}
        onChange={e => handleEditorChanges('editorMapType', e.target.value)}
        options={{
          data: 'Data',
          'us-geocode': 'United States Geocode',
          navigation: 'Navigation',
          bubble: config.general.geoType === 'world' || config.general.geoType === 'us' ? 'Bubble' : null
        }}
      />

      {/*TODO: Build out Radio Input*/}
      <label>
        <span className='edit-label'>Data Classification Type</span>
        <div>
          <label>
            <input type='radio' name='equalnumber' value='equalnumber' checked={config.legend.type === 'equalnumber'} onChange={e => handleEditorChanges('classificationType', e.target.value)} />
            Numeric/Quantitative
          </label>
          <label>
            <input type='radio' name='category' value='category' checked={config.legend.type === 'category'} onChange={e => handleEditorChanges('classificationType', e.target.value)} />
            Categorical
          </label>
        </div>
      </label>

      {/* SubType */}
      {'us' === config.general.geoType && 'data' === config.general.type && <InputCheckbox label='Display As Hex Map' configField={['general', 'displayAsHex']} />}

      {'us' === config.general.geoType && 'bubble' !== config.general.type && false === config.general.displayAsHex && <InputCheckbox label='Display config labels' configField={['general', 'displayStateLabels']} />}
    </Accordion.Section>
  )

  const panelGeneral = (
    <Accordion.Section label='General'>
      <InputText label='Title' configField={['general', 'title']} placeholder='Map Title' tooltip='For accessibility reasons, you should enter a title even if you are not planning on displaying it.' />

      <InputText label='Super Title' configField={['general', 'superTitle']} placeholder='Super Title' />

      <InputText type='textarea' label='Intro Text' configField={['general', 'introText']} placeholder='Intro Text' />

      <InputText type='textarea' label='Subtext' configField={['general', 'subtext']} tooltip='Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.' />

      <InputText type='textarea' label='Footnotes' configField={['general', 'footnotes']} />

      {'us' === config.general.geoType && <InputText label='Territories Label' configField={['general', 'territoriesLabel']} placeholder='Territories' />}
      {/*
        <label className="checkbox mt-4">
          <input type="checkbox" checked={ config.general.showDownloadMediaButton } onChange={(event) => { handleEditorChanges("toggleDownloadMediaButton", event.target.checked) }} />
          <span className="edit-label">Enable Media Download</span>
        </label>
      */}
    </Accordion.Section>
  )

  const panelColumns = (
    <Accordion.Section label='Columns'>
      <SectionWrapper>
        <InputSelect label='Geography' options={columnsOptions} configField={['columns', 'geo', 'name']} tooltip='Select the source column containing the map location names or, for county-level maps, the FIPS codes.' />
        <InputCheckbox label='Hide Geography Column Name in Tooltip' configField={['general', 'hideGeoColumnInTooltip']} />
        <InputText label='Geography Label' configField={['general', 'geoLabelOverride']} placeholder='Geography Label' tooltip='Enter a geography label for use in tooltips.' />
      </SectionWrapper>

      {'navigation' !== config.general.type && (
        <SectionWrapper>
          <InputSelect label='Data Column' options={columnsOptions} configField={['columns', 'primary', 'name']} tooltip='Select the source column containing the categorical or numeric values to be mapped.' />
          <InputCheckbox label='Hide Data Column Name in Tooltip' configField={['general', 'hidePrimaryColumnInTooltip']} />
          <InputText label='Data Label' configField={['columns', 'primary', 'label']} placeholder='Data Label' tooltip='Enter a data label for use in tooltips and the data table.' />

          <div className='cove-grid cove-grid--gap--2'>
            <div className='cove-grid__col--4'>
              <InputText label='Prefix' configField={['columns', 'primary', 'prefix']} />
            </div>
            <div className='cove-grid__col--4'>
              <InputText label='Suffix' configField={['columns', 'primary', 'suffix']} />
            </div>
            <div className='cove-grid__col--4'>
              <InputText type='number' label='Round' configField={['columns', 'primary', 'roundToPlace']} min={0} />
            </div>
          </div>

          <InputCheckbox label='Add Commas to Numbers' configField={['columns', 'primary', 'useCommas']} />
          <InputCheckbox label='Display in Data Table' configField={['columns', 'primary', 'dataTable']} />
          <InputCheckbox label='Display in Tooltips' configField={['columns', 'primary', 'tooltip']} />
        </SectionWrapper>
      )}

      {config.general.type === 'bubble' && config.legend.type === 'category' && (
        <SectionWrapper>
          <InputSelect label='Category Column' options={columnsOptions} configField={['columns', 'categorical', 'name']} tooltip='Select the source column containing the categorical bubble values to be mapped.' />
        </SectionWrapper>
      )}

      {'us-geocode' === config.general.type && (
        <>
          <InputSelect label='Latitude Column' options={columnsOptions} configField={['columns', 'latitude', 'name']} />
          <InputSelect label='Longitude Column' options={columnsOptions} configField={['columns', 'longitude', 'name']} />
        </>
      )}

      {'navigation' !== config.general.type && (
        <SectionWrapper>
          <Label tooltip="For secondary values such as 'NA', the system can automatically color-code them in shades of gray, one shade for each special class.">Special Classes</Label>

          {specialClasses.map((specialClass, i) => (
            <SectionBlock>
              <Button className='cove-button--remove' onClick={() => editColumn('primary', 'specialClassDelete', i)}>
                Remove
              </Button>
              <div>
                <p className='cove-heading--5 mb-1'>Special Class {i + 1}</p>
              </div>
              <InputSelect
                label='Data Key'
                options={columnsOptions}
                value={specialClass.key}
                onChange={e => {
                  editColumn('primary', 'specialClassEdit', { prop: 'key', index: i, value: e.target.value })
                }}
              />
              <InputSelect
                label='Value'
                options={columnsByKey[specialClass.key] && columnsByKey[specialClass.key].sort()}
                value={specialClass.value}
                onChange={e => {
                  editColumn('primary', 'specialClassEdit', { prop: 'value', index: i, value: e.target.value })
                }}
              />
              <InputText
                label='Label'
                onChange={e => {
                  editColumn('primary', 'specialClassEdit', { prop: 'label', index: i, value: e.target.value })
                }}
                value={specialClass.label}
              />
            </SectionBlock>
          ))}

          {(!specialClasses || specialClasses.length === 0) && (
            <p className='my-2' style={{ fontStyle: 'italic', textAlign: 'center' }}>
              There are currently no special classes.
            </p>
          )}

          <Button onClick={e => editColumn('primary', 'specialClassAdd', {})} fluid>
            Add Filter
          </Button>
        </SectionWrapper>
      )}

      <InputSelect label='Navigation' options={columnsOptions} configField={['columns', 'navigate', 'name']} />

      {'navigation' !== config.general.type && (
        <>
          <Label tooltip='You can specify additional columns to display in tooltips and / or the supporting data table.'>Additional Columns</Label>
          {additionalColumns.map(val => (
            <SectionBlock key={val}>
              <Button className='cove-button--remove' onClick={() => removeAdditionalColumn(val)}>
                Remove
              </Button>

              <InputSelect label='Column' options={columnsOptions} configField={['columns', val, 'name']} />

              <InputText label='Label' configField={['columns', val, 'label']} placeholder='Label' />

              <div className='cove-grid cove-grid--gap--2'>
                <div className='cove-grid__col--4'>
                  <InputText label='Prefix' configField={['columns', val, 'prefix']} />
                </div>
                <div className='cove-grid__col--4'>
                  <InputText label='Suffix' configField={['columns', val, 'suffix']} />
                </div>
                <div className='cove-grid__col--4'>
                  <InputText type='number' label='Round' configField={['columns', val, 'roundToPlace']} min={0} />
                </div>
              </div>

              <InputCheckbox label='Add Commas to Numbers' configField={['columns', val, 'useCommas']} />

              <InputCheckbox label='Display in Data Table' configField={['columns', val, 'dataTable']} />

              <InputCheckbox label='Display in Tooltips' configField={['columns', val, 'tooltip']} />
            </SectionBlock>
          ))}

          {(!additionalColumns || additionalColumns.length === 0) && (
            <p className='my-2' style={{ fontStyle: 'italic', textAlign: 'center' }}>
              There are currently no additional columns.
            </p>
          )}

          <Button onClick={() => addAdditionalColumn(additionalColumns.length + 1)} fluid>
            Add Column
          </Button>
        </>
      )}

      {'category' === config.legend.type && (
        <fieldset className='primary-fieldset edit-block'>
          <label>
            <span className='edit-label'>
              Additional Category
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
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
          <button
            className={'btn full-width'}
            onClick={event => {
              event.preventDefault()
              const updatedAdditionaCategories = [...(config.legend.additionalCategories || [])]
              updatedAdditionaCategories.push('')
              updateField('legend', null, 'additionalCategories', updatedAdditionaCategories)
            }}
          >
            Add Category
          </button>
        </fieldset>
      )}
    </Accordion.Section>
  )

  const panelLegend = (
    <Accordion.Section label='Legend'>
      {(config.legend.type === 'equalnumber' || config.legend.type === 'equalinterval') && (
        <label>
          <span className='edit-label'>Legend Type</span>
          <select
            value={legend.type}
            onChange={event => {
              handleEditorChanges('legendType', event.target.value)
            }}
          >
            <option value='equalnumber'>Equal Number (Quantiles)</option>
            <option value='equalinterval'>Equal Interval</option>
          </select>
        </label>
      )}
      {'navigation' !== config.general.type && (
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={config.general.showSidebar || false}
            onChange={event => {
              handleEditorChanges('showSidebar', event.target.checked)
            }}
          />
          <span className='edit-label'>Show Legend</span>
        </label>
      )}
      {'navigation' !== config.general.type && (
        <label>
          <span className='edit-label'>Legend Position</span>
          <select
            value={legend.position || false}
            onChange={event => {
              handleEditorChanges('sidebarPosition', event.target.value)
            }}
          >
            <option value='side'>Side</option>
            <option value='bottom'>Bottom</option>
          </select>
        </label>
      )}
      {'side' === legend.position && (
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={legend.singleColumn}
            onChange={event => {
              handleEditorChanges('singleColumnLegend', event.target.checked)
            }}
          />
          <span className='edit-label'>Single Column Legend</span>
        </label>
      )}
      {'bottom' === legend.position && (
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={legend.singleRow}
            onChange={event => {
              handleEditorChanges('singleRowLegend', event.target.checked)
            }}
          />
          <span className='edit-label'>Single Row Legend</span>
        </label>
      )}
      {'category' !== legend.type && (
        <label className='checkbox'>
          <input type='checkbox' checked={legend.separateZero || false} onChange={event => handleEditorChanges('separateZero', event.target.checked)} />
          <span className='edit-label'>
            Separate Zero
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>For numeric data, you can separate the zero value as its own data class.</p>
              </Tooltip.Content>
            </Tooltip>
          </span>
        </label>
      )}
      {/* Temp Checkbox */}

      {config.legend.type === 'equalnumber' && (
        <label className='checkbox mt-4'>
          <input
            type='checkbox'
            checked={config.general.equalNumberOptIn}
            onChange={event => {
              handleEditorChanges('showEqualNumber', event.target.checked)
            }}
          />
          <span className='edit-label'>Use new quantile legend</span>
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>This prevents numbers from being used in more than one category (ie. 0-1, 1-2, 2-3) </p>
            </Tooltip.Content>
          </Tooltip>
        </label>
      )}
      {'category' !== legend.type && (
        <label>
          <span className='edit-label'>
            Number of Items
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>For numeric maps, select the number of data classes. Do not include designated special classes.</p>
              </Tooltip.Content>
            </Tooltip>
          </span>
          <select
            value={legend.numberOfItems}
            onChange={event => {
              handleEditorChanges('legendNumber', event.target.value)
            }}
          >
            {[...Array(numberOfItemsLimit).keys()].map(num => {
              return (
                <option value={num + 1} key={num + 1}>
                  {num + 1}
                </option>
              )
            })}
          </select>
        </label>
      )}
      {'category' === legend.type && (
        <React.Fragment>
          <label>
            <span className='edit-label'>
              Category Order
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Drag map categories into preferred legend order. </p>
                </Tooltip.Content>
              </Tooltip>
            </span>
          </label>
          {/* TODO: Swap out this drag and drop library back to something simpler. I had to remove the old one because it hadn't been updated and wouldn't work with Webpack 5. This is overkill for our needs. */}
          <DragDropContext onDragEnd={({ source, destination }) => categoryMove(source.index, destination.index)}>
            <Droppable droppableId='category_order'>
              {provided => (
                <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef}>
                  <CategoryList />
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          {config.legend.categoryValuesOrder && config.legend.categoryValuesOrder.length >= 10 && (
            <section className='error-box my-2'>
              <div>
                <strong className='pt-1'>Warning</strong>
                <p>The maximum number of categorical legend items is 10. If your data has more than 10 categories your map will not display properly.</p>
              </div>
            </section>
          )}
        </React.Fragment>
      )}
      <TextField value={legend.title} section='legend' fieldName='title' label='Legend Title' placeholder='Legend Title' />
      {false === legend.dynamicDescription && <TextField type='textarea' value={legend.description} section='legend' fieldName='description' label='Legend Description' />}
      {true === legend.dynamicDescription && (
        <React.Fragment>
          <label>
            <span>Legend Description</span>
            <span className='subtext'>For {displayFilterLegendValue(activeFilterValueForDescription)}</span>
            <DynamicDesc value={legend.descriptions[String(activeFilterValueForDescription)]} />
          </label>
          <label>
            <select
              value={String(activeFilterValueForDescription)}
              onChange={event => {
                handleEditorChanges('changeActiveFilterValue', event.target.value)
              }}
            >
              {filterValueOptionList.map((arr, i) => {
                return (
                  <option value={arr} key={i}>
                    {displayFilterLegendValue(arr)}
                  </option>
                )
              })}
            </select>
          </label>
        </React.Fragment>
      )}
      {filtersJSX.length > 0 && (
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={legend.dynamicDescription}
            onChange={() => {
              handleEditorChanges('dynamicDescription', filterValueOptionList[0])
            }}
          />
          <span className='edit-label'>
            Dynamic Legend Description
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Check this option if the map has multiple filter controls and you want to specify a description for each filter selection.</p>
              </Tooltip.Content>
            </Tooltip>
          </span>
        </label>
      )}
      {(filtersJSX.length > 0 || config.general.type === 'bubble' || config.general.geoType === 'us') && (
        <label className='checkbox'>
          <input type='checkbox' checked={legend.unified} onChange={event => handleEditorChanges('unifiedLegend', event.target.checked)} />
          <span className='edit-label'>
            Unified Legend
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  For a map with filters, check this option if you want the high and low values in the legend to be based on <em>all</em> mapped values.
                </p>
              </Tooltip.Content>
            </Tooltip>
          </span>
        </label>
      )}
    </Accordion.Section>
  )
  const panelFilters = (
    <Accordion.Section label='Filters'>
      {filtersJSX.length > 0 ? filtersJSX : <p style={{ textAlign: 'center' }}>There are currently no filters.</p>}
      <button
        className={'btn full-width'}
        onClick={event => {
          event.preventDefault()
          changeFilter(null, 'addNew')
        }}
      >
        Add Filter
      </button>
    </Accordion.Section>
  )

  const panelDataTable = (
    <Accordion.Section>
      <InputText label='Data Table Title' placeholder='Data Table' configField={['dataTable', 'title']} tooltip='Label is required for Data Table for 508 Compliance' />

      <InputText label='Index Column Header' placeholder='Location' configField={['dataTable', 'indexLabel']} tooltip='To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.' />

      <InputText label='Data Table Caption' placeholder='Data Table' configField={['dataTable', 'caption']} tooltip='Enter a description of the data table to be read by screen readers.' />

      <InputCheckbox label='Show Table' configField={['dataTable', 'forceDisplay']} tooltip='Data tables are required for 508 compliance. When choosing to hide this data table, replace with your own version.' />

      <InputCheckbox label='Limit Table Height' configField={['dataTable', 'limitHeight']} />

      {config.dataTable.limitHeight && <InputText label='Data Table Height' placeholder='Height(px)' configField={['dataTable', 'height']} type='number' min='0' max='500' />}

      <InputCheckbox label={'Map Loads With Data Table Expanded'} configField={['general', 'expandDataTable']} />

      <InputCheckbox label='Enable Link to Dataset' configField={['table', 'showDownloadUrl']} />

      <InputCheckbox label='Enable Download CSV Button' configField={['general', 'showDownloadButton']} />

      {/*<InputCheckbox label="Enable Image Download" configField={['general', 'showDownloadImgButton']}/>*/}

      {/*<InputCheckbox label="Enable PDF Download" configField={['general', 'showDownloadPdfButton']}/>*/}
    </Accordion.Section>
  )

  const panelInteractivity = (
    <Accordion.Section label='Interactivity'>
      <label>
        <span className='edit-label'>
          Detail displays on{' '}
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>At mobile sizes, information always appears in a popover modal when a user taps on an item.</p>
            </Tooltip.Content>
          </Tooltip>
        </span>
        <select
          value={config.tooltips.appearanceType}
          onChange={event => {
            handleEditorChanges('appearanceType', event.target.value)
          }}
        >
          <option value='hover'>Hover - Tooltip</option>
          <option value='click'>Click - Popover Modal</option>
        </select>
      </label>
      {'click' === config.tooltips.appearanceType && <TextField value={tooltips.linkLabel} section='tooltips' fieldName='linkLabel' label='Tooltips Link Label' />}
      <label className='checkbox'>
        <input
          type='checkbox'
          checked={config.tooltips.capitalizeLabels}
          onChange={event => {
            handleEditorChanges('capitalizeLabels', event.target.checked)
          }}
        />
        <span className='edit-label'>Capitalize text inside tooltip</span>
      </label>
    </Accordion.Section>
  )

  const panelVisual = (
    <Accordion.Section label='Visual'>
      <InputCheckbox configField={['general', 'showTitle']} label={'Show Title'} />

      {'navigation' === config.general.type && <InputCheckbox label='Add border around map' configField={['general', 'fullBorder']} />}

      <InputSelect
        label='Geo Border Color'
        configField={['general', 'geoBorderColor']}
        options={{
          darkGray: 'Dark Gray (Default)',
          sameAsBackground: 'White'
        }}
      />

      <div className='cove-heading--4'>Map Color Palette</div>

      <InputToggle type='3d' label='Reverse Selected Palette' configField={['general', 'palette', 'isReversed']} value={isPaletteReversed} />

      <span>Sequential</span>
      <ul className='color-palette'>
        {filteredPallets.map(palette => {
          const colorOne = {
            backgroundColor: colorPalettes[palette][2]
          }

          const colorTwo = {
            backgroundColor: colorPalettes[palette][4]
          }

          const colorThree = {
            backgroundColor: colorPalettes[palette][6]
          }

          return (
            <li
              title={palette}
              key={palette}
              onClick={() => {
                handleEditorChanges('color', palette)
              }}
              className={config.color === palette ? 'selected' : ''}
            >
              <span style={colorOne}></span>
              <span style={colorTwo}></span>
              <span style={colorThree}></span>
            </li>
          )
        })}
      </ul>

      <span>Non-Sequential</span>
      <ul className='color-palette'>
        {filteredQualitative.map(palette => {
          const colorOne = {
            backgroundColor: colorPalettes[palette][2]
          }

          const colorTwo = {
            backgroundColor: colorPalettes[palette][4]
          }

          const colorThree = {
            backgroundColor: colorPalettes[palette][6]
          }

          // hide palettes with too few colors for region maps
          if (colorPalettes[palette].length <= 8 && config.general.geoType === 'us-region') {
            return ''
          }
          return (
            <li
              title={palette}
              key={palette}
              onClick={() => {
                handleEditorChanges('color', palette)
              }}
              className={config.color === palette ? 'selected' : ''}
            >
              <span style={colorOne}></span>
              <span style={colorTwo}></span>
              <span style={colorThree}></span>
            </li>
          )
        })}
      </ul>

      {'us-geocode' === config.general.type && <InputText type='number' label='Geocode Circle Size' configField={['visual', 'geoCodeCircleSize']} min='0' max='10' />}

      {config.general.type === 'bubble' && (
        <>
          <InputText type='number' label='Minimum Bubble Size' configField={['visual', 'minBubbleSize']} />
          <InputText type='number' label='Maximum Bubble Size' configField={['visual', 'maxBubbleSize']} />
        </>
      )}

      {(config.general.geoType === 'world' || (config.general.geoType === 'us' && config.general.type === 'bubble')) && <InputCheckbox label="Show Data with Zero's on Bubble Map" configField={['visual', 'showBubbleZeros']} />}

      {config.general.geoType === 'world' && <InputCheckbox label='Allow Map Zooming' configField={['general', 'allowMapZoom']} />}

      {config.general.type === 'bubble' && <InputCheckbox label='Bubble Map has extra border' configField={['visual', 'extraBubbleBorder']} />}

      {config.general.geoType === 'us' ||
        (config.general.geoType === 'us-county' && (
          <InputSelect
            label='City Style'
            configField={['visual', 'cityStyle']}
            options={{
              circle: 'Circle',
              pin: 'Pin'
            }}
          />
        ))}
    </Accordion.Section>
  )

  const panelAdvanced = <PanelComponentAdvanced config={config} convertStateToConfig={convertStateToConfig} />

  return (
    <>
      <Accordion>
        {panelType}
        {panelGeneral}
        {panelColumns}
        {'navigation' !== config.general.type && (
          <>
            {panelLegend}
            {panelFilters}
            {panelDataTable}
          </>
        )}
        {panelInteractivity}
        {panelVisual}
        {panelAdvanced}
        {PanelGlobal}
      </Accordion>
    </>
  )
}

export default EditorPanels
