import React, { useState, useEffect, useCallback } from 'react'

// Third Party
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useDebounce } from 'use-debounce'
// import ReactTags from 'react-tag-autocomplete'
import { Tooltip as ReactTooltip } from 'react-tooltip'

// Data
import colorPalettes from '@cdc/core/data/colorPalettes'
import { supportedStatesFipsCodes } from '../data/supported-geos'

// Hooks
import { useColorPalette } from '../hooks/useColorPalette'

// Components - Core
import PanelComponentAdvanced from '@cdc/core/components/editor/Panel.Component.Advanced.jsx'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import Icon from '@cdc/core/components/ui/Icon'
import InputToggle from '@cdc/core/components/input/InputToggle'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Waiting from '@cdc/core/components/loader/Waiting'

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

const EditorPanels = props => {
  // const { isDashboard, setParentConfig, setRuntimeFilters, runtimeFilters, runtimeLegend } = props

  const { config, updateVisConfig, updateVisConfigField } = useVisConfig()

  const { general, columns, legend, dataTable, tooltips, filters } = config

  const [requiredColumns, setRequiredColumns] = useState(null) // Simple config so we know if we need more information before parsing the map

  const [configTextboxValue, setConfigTextbox] = useState({})

  const [loadedDefault, setLoadedDefault] = useState(false)

  const [displayPanel, setDisplayPanel] = useState(true)

  const [advancedToggle, setAdvancedToggle] = useState(false)

  const [activeFilterValueForDescription, setActiveFilterValueForDescription] = useState([0, 0])

  const { filteredPallets, filteredQualitative, isPaletteReversed, paletteName } = useColorPalette(colorPalettes, config)

  const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

  const categoryMove = (idx1, idx2) => {
    let categoryValuesOrder = [...config.legend.categoryValuesOrder]

    let [movedItem] = categoryValuesOrder.splice(idx1, 1)

    categoryValuesOrder.splice(idx2, 0, movedItem)
    updateVisConfig(
      config,
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
      // change these to be more generic.
      // updateVisualPropertyValue
      // updateGeneralPropertyValue, etc.
      case 'showBubbleZeros':
        updateVisConfigField(['visual', 'showBubbleZeros'], value)
        break
      case 'showEqualNumber':
        updateVisConfigField(['visual', 'equalNumberOptIn'], value)
        break
      case 'hideGeoColumnInTooltip':
      case 'hidePrimaryColumnInTooltip':
        updateVisConfigField(['general', property], value)
        break
      case 'toggleDataUrl':
        updateVisConfigField(['table', 'showDownloadUrl'], value)
        break
      case 'toggleExtraBubbleBorder':
        updateVisConfigField(['visual', 'extraBubbleBorder'], value)
        break
      case 'allowMapZoom':
        updateVisConfigField(['visual', 'allowMapZoom'], value)
        break
      case 'geoLabelOverride':
        updateVisConfigField(['general', 'geoLabelOverride'], value)
        break
      case 'showTitle':
        updateVisConfigField(['general', 'showTitle'], value)
        break
      case 'showSidebar':
        updateVisConfigField(['general', 'showSidebar'], value)
        break
      case 'fullBorder':
        updateVisConfigField(['general', 'fullBorder'], value)
        break
      case 'expandDataTable':
        updateVisConfigField(['general', 'expandDataTable'], value)
        break
      case 'color':
        updateVisConfigField('color', value)
        break
      case 'sidebarPosition':
        updateVisConfigField(['legend', 'position'], value)
        break
      case 'handleCityStyle':
        updateVisConfigField(['visual', 'cityStyle'], value)
        break
      case 'geoBorderColor':
        updateVisConfigField(['general', 'geoBorderColor'], value)
        break
      case 'headerColor':
        updateVisConfigField(['general', 'headerColor'], value)
        break
      case 'navigateColumn':
        updateVisConfigField(['columns', 'navigate', 'name'], value)
        break
      case 'legendDescription':
        updateVisConfigField(['legend', 'description'], value)
        break
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

        updateVisConfigField(['legend'])
        // TODO: rob halp!
        setState({
          ...config,
          legend: {
            ...config.legend,
            type: value
          },
          runtime: {
            ...config.runtime,
            editorErrorMessage: messages
          }
        })
        break
      case 'legendNumber':
        setState({
          ...config,
          legend: {
            ...config.legend,
            numberOfItems: parseInt(value)
          }
        })
        break
      case 'changeActiveFilterValue':
        const arrVal = value.split(',')

        setActiveFilterValueForDescription(arrVal)
        break
      case 'unifiedLegend':
        setState({
          ...config,
          legend: {
            ...config.legend,
            unified: value
          }
        })
        break
      case 'separateZero':
        setState({
          ...config,
          legend: {
            ...config.legend,
            separateZero: value
          }
        })
        break
      case 'toggleDownloadButton':
        setState({
          ...config,
          general: {
            ...config.general,
            showDownloadButton: !config.general.showDownloadButton
          }
        })
        break
      case 'toggleDownloadImgButton':
        setState({
          ...config,
          general: {
            ...config.general,
            showDownloadImgButton: !config.general.showDownloadImgButton
          }
        })
        break
      case 'toggleDownloadPdfButton':
        setState({
          ...config,
          general: {
            ...config.general,
            showDownloadPdfButton: !config.general.showDownloadPdfButton
          }
        })
        break
      case 'displayAsHex':
        setState({
          ...config,
          general: {
            ...config.general,
            displayAsHex: value
          }
        })
        break
      case 'editorMapType':
        switch (value) {
          case 'us-geocode':
            setState({
              ...config,
              general: {
                ...config.general,
                type: value
              }
            })
            break
          case 'data':
            setState({
              ...config,
              general: {
                ...config.general,
                showSidebar: true,
                type: 'data'
              }
            })
            break
          case 'navigation':
            setState({
              ...config,
              general: {
                ...config.general,
                showSidebar: false,
                type: 'navigation'
              },
              tooltips: {
                ...config.tooltips,
                appearanceType: 'hover'
              }
            })
            break
          case 'bubble':
            setState({
              ...config,
              general: {
                ...config.general,
                showSidebar: false,
                type: 'bubble'
              },
              tooltips: {
                ...config.tooltips,
                appearanceType: 'hover'
              }
            })
            break
          default:
            console.warn('Map type not set')
            break
        }
        break
      case 'geoType':
        // If we're still working with default data, switch to the world default to show it as an example
        if (true === loadedDefault && 'world' === value) {
          loadConfig(worldDefaultConfig)
          break
        }

        if (true === loadedDefault && 'us' === value) {
          loadConfig(usaDefaultConfig)
          break
        }

        if (true === loadedDefault && 'us-county' === value) {
          loadConfig(countyDefaultConfig)
          break
        }

        switch (value) {
          case 'us':
            setState({
              ...config,
              general: {
                ...config.general,
                geoType: 'us'
              },
              dataTable: {
                ...config.dataTable,
                forceDisplay: true
              }
            })
            break
          case 'us-region':
            setState({
              ...config,
              general: {
                ...config.general,
                geoType: 'us-region'
              },
              dataTable: {
                ...config.dataTable,
                forceDisplay: true
              }
            })
            break
          case 'world':
            setState({
              ...config,
              general: {
                ...config.general,
                geoType: 'world'
              },
              dataTable: {
                ...config.dataTable,
                forceDisplay: true
              }
            })
            break
          case 'us-county':
            setState({
              ...config,
              general: {
                ...config.general,
                geoType: 'us-county',
                expandDataTable: false
              },
              dataTable: {
                ...config.dataTable,
                forceDisplay: true
              }
            })
            break
          case 'single-config':
            setState({
              ...config,
              general: {
                ...config.general,
                geoType: 'single-config',
                expandDataTable: false
              },
              dataTable: {
                ...config.dataTable,
                forceDisplay: true
              }
            })
            break
          default:
            break
        }

        break
      case 'singleColumnLegend':
        setState({
          ...config,
          legend: {
            ...config.legend,
            singleColumn: !config.legend.singleColumn,
            singleRow: false
          }
        })
        break
      case 'singleRowLegend':
        setState({
          ...config,
          legend: {
            ...config.legend,
            singleRow: !config.legend.singleRow,
            singleColumn: false
          }
        })
        break
      case 'dynamicDescription':
        setState({
          ...config,
          editor: {
            ...config.editor,
            activeFilterValueForDescription: value
          },
          legend: {
            ...config.legend,
            dynamicDescription: !config.legend.dynamicDescription
          }
        })
        break
      case 'changeLegendDescription':
        const [filterValKey, filterValDesc] = value
        setState({
          ...config,
          legend: {
            ...config.legend,
            descriptions: {
              ...config.legend.descriptions,
              [filterValKey]: [filterValDesc]
            }
          }
        })
        break
      case 'appearanceType':
        setState({
          ...config,
          tooltips: {
            ...config.tooltips,
            appearanceType: value
          }
        })
        break
      case 'linkLabel':
        setState({
          ...config,
          tooltips: {
            ...config.tooltips,
            linkLabel: value
          }
        })
        break
      case 'displayStateLabels':
        setState({
          ...config,
          general: {
            ...config.general,
            displayStateLabels: !config.general.displayStateLabels
          }
        })
        break
      case 'capitalizeLabels':
        setState({
          ...config,
          tooltips: {
            ...config.tooltips,
            capitalizeLabels: value
          }
        })
        break
      case 'showDataTable':
        setState({
          ...config,
          dataTable: {
            ...config.dataTable,
            forceDisplay: value
          }
        })
        break
      case 'limitDataTableHeight':
        setState({
          ...config,
          dataTable: {
            ...config.dataTable,
            limitHeight: value
          }
        })
        break
      case 'chooseState':
        let fipsCode = Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === value)
        let configName = value
        let configData = { fipsCode, configName }

        setState({
          ...config,
          general: {
            ...config.general,
            configPicked: configData
          }
        })
        break
      case 'classificationType':
        setState({
          ...config,
          legend: {
            ...config.legend,
            type: value
          }
        })
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

        setState({
          ...config,
          legend: {
            ...config.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'specialClassDelete':
        newSpecialClasses = Array.from(legend.specialClasses)

        newSpecialClasses.splice(value, 1)

        setState({
          ...config,
          legend: {
            ...config.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'specialClassAdd':
        newSpecialClasses = legend.specialClasses

        newSpecialClasses.push(value)

        setState({
          ...config,
          legend: {
            ...config.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'name':
        setState({
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
        setState({
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
          newFilters[idx] = { ...runtimeFilters[idx] }
          delete newFilters[idx].active
          newFilters[idx].order = 'desc'
        }
        if (value === 'asc') {
          newFilters[idx] = { ...runtimeFilters[idx] }
          delete newFilters[idx].active
          newFilters[idx].order = 'asc'
        }
        if (value === 'cust') {
          newFilters[idx] = { ...runtimeFilters[idx] }
          newFilters[idx].order = 'cust'
        }
        break
      default:
        newFilters[idx][target] = value
        break
    }

    setState({
      ...config,
      filters: newFilters
    })
  }

  const addAdditionalColumn = number => {
    const columnKey = `additionalColumn${number}`

    setState({
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

    setState({
      ...config,
      columns: newColumns
    })
  }

  const displayFilterLegendValue = arr => {
    const filterName = config.filters[arr[0]].label || `Unlabeled Legend`

    const filterValue = runtimeFilters[arr[0]]

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
        runtimeLegend.forEach(item => {
          if (!item.special && config.legend.categoryValuesOrder.indexOf(item.value) === -1) {
            valid = false
          }
        })
        let runtimeLegendKeys = runtimeLegend.map(item => item.value)
        config.legend.categoryValuesOrder.forEach(category => {
          if (runtimeLegendKeys.indexOf(category) === -1) {
            valid = false
          }
        })
      } else {
        valid = false
      }

      if (!valid) {
        let arr = runtimeLegend.filter(item => !item.special).map(({ value }) => value)

        setState({
          ...config,
          legend: {
            ...config.legend,
            categoryValuesOrder: arr
          }
        })
      }
    }
  }, [runtimeLegend])

  // if no config choice by default show alabama
  useEffect(() => {
    if (!config.general.configPicked) {
      setState({
        ...config,
        general: {
          ...general,
          configPicked: {
            fipsCode: '01',
            configName: 'Alabama'
          }
        }
      })
    }
  }, [])

  const columnsOptions = [
    <option value='' key={'Select Option'}>
      - Select Option -
    </option>
  ]

  const [columnsInData] = config.data
  columnsInData.map(colName => {
    columnsOptions.push(
      <option value={colName} key={colName}>
        {colName}
      </option>
    )
  })

  let columnsByKey = {}
  console.log('config is', config)
  console.log('config.data is ', config.data)
  config.data.forEach(datum => {
    console.log('me datum es', datum)
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

  const updateField = (section, subsection, fieldName, newValue) => {
    const isArray = Array.isArray(config[section])
    let sectionValue = isArray ? [...config[section], newValue] : { ...config[section], [fieldName]: newValue }

    if (null !== subsection) {
      if (isArray) {
        sectionValue = [...config[section]]
        sectionValue[subsection] = { ...sectionValue[subsection], [fieldName]: newValue }
      } else {
        sectionValue = {
          ...config[section],
          [subsection]: { ...config[section][subsection], [fieldName]: newValue }
        }
      }
    }

    let updatedState = {
      ...config,
      [section]: sectionValue
    }

    setState(updatedState)
  }

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
  }

  const usedFilterColumns = {}

  console.log('wat is config even', config)
  console.log('config.filters', config.filters)

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
      <fieldset className='edit-block' key={`filter-${index}`}>
        <button
          className='remove-column'
          onClick={e => {
            e.preventDefault()
            changeFilter(index, 'remove')
          }}
        >
          Remove
        </button>
        <TextField value={config.filters[index].label} section='filters' subsection={index} fieldName='label' label='Label' updateField={updateField} />
        <label>
          <span className='edit-label column-heading'>
            Filter Column
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Selecting a column will add a dropdown menu below the map legend and allow users to filter based on the values in this column.</p>
              </Tooltip.Content>
            </Tooltip>
          </span>
          <select
            value={filter.columnName}
            onChange={event => {
              changeFilter(index, 'columnName', event.target.value)
            }}
          >
            {columnsOptions.filter(({ key }) => undefined === usedFilterColumns[key] || filter.columnName === key)}
          </select>
        </label>

        <label>
          <span className='edit-filterOrder column-heading'>Filter Order</span>
          <select
            value={filter.order}
            onChange={e => {
              changeFilter(index, 'filterOrder', e.target.value)
            }}
          >
            {filterOptions.map((option, index) => {
              return (
                <option value={option.value} key={`filter-${index}`}>
                  {option.label}
                </option>
              )
            })}
          </select>
        </label>

        {filter.order === 'cust' && (
          <DragDropContext onDragEnd={({ source, destination }) => handleFilterOrder(source.index, destination.index, index, runtimeFilters[index])}>
            <Droppable droppableId='filter_order'>
              {provided => (
                <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef} style={{ marginTop: '1em' }}>
                  {runtimeFilters[index]?.values.map((value, index) => {
                    return (
                      <Draggable key={value} draggableId={`draggableFilter-${value}`} index={index}>
                        {(provided, snapshot) => (
                          <li>
                            <div className={snapshot.isDragging ? 'currently-dragging' : ''} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
      </fieldset>
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

  if (runtimeFilters.length > 0) {
    runtimeFilters.forEach((filter, index) => {
      runtimeFilters[index].values.forEach((value, valueNum) => {
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

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      const newConfig = convertStateToConfig()
      setParentConfig(newConfig)
    }
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

  const Error = () => {
    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  return (
    <ErrorBoundary component='EditorPanel'>
      {config?.runtime?.editorErrorMessage.length > 0 && <Error />}
      {requiredColumns && <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={onBackClick} data-html2canvas-ignore></button>

      <section className={displayPanel ? 'editor-panel cove' : 'hidden editor-panel cove'} data-html2canvas-ignore>
        <ReactTooltip multiline={true} />
        <span className='base-label'>Configure Map</span>
        <section className='form-container'>
          <form>
            <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                {' '}
                {/* Type */}
                <AccordionItemHeading>
                  <AccordionItemButton>Type</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* Geography */}
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
                  {(config.general.geoType === 'us' || config.general.geoType === 'us-county') && (
                    <label>
                      <span className='edit-label column-heading'>Geography Subtype</span>
                      <select
                        value={config.general.geoType}
                        onChange={event => {
                          handleEditorChanges('geoType', event.target.value)
                        }}
                      >
                        <option value='us'>US State-Level</option>
                        <option value='us-county'>US County-Level</option>
                      </select>
                    </label>
                  )}
                  {/* Type */}
                  {/* Select > Filter a config */}
                  {config.general.geoType === 'single-config' && (
                    <label>
                      <span className='edit-label column-heading'>State Selector</span>
                      <select
                        value={config.general.hasOwnProperty('configPicked') ? config.general.configPicked.configName : { fipsCode: '04', configName: 'Alabama' }}
                        onChange={event => {
                          handleEditorChanges('chooseState', event.target.value)
                        }}
                      >
                        <StateOptionList />
                      </select>
                    </label>
                  )}
                  {/* Type */}
                  <label>
                    <span className='edit-label column-heading'>
                      Map Type
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Select "Data" to create a color-coded data map. To create a navigation-only map, select "Navigation."</p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                    <select
                      value={config.general.type}
                      onChange={event => {
                        handleEditorChanges('editorMapType', event.target.value)
                      }}
                    >
                      <option value='data'>Data</option>
                      <option value='us-geocode'>United States Geocode</option>
                      <option value='navigation'>Navigation</option>
                      {(config.general.geoType === 'world' || config.general.geoType === 'us') && <option value='bubble'>Bubble</option>}
                    </select>
                  </label>
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
                  {'us' === config.general.geoType && 'data' === config.general.type && (
                    <label className='checkbox mt-4'>
                      <input
                        type='checkbox'
                        checked={config.general.displayAsHex}
                        onChange={event => {
                          handleEditorChanges('displayAsHex', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Display As Hex Map</span>
                    </label>
                  )}
                  {'us' === config.general.geoType && 'bubble' !== config.general.type && false === config.general.displayAsHex && (
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.general.displayStateLabels}
                        onChange={event => {
                          handleEditorChanges('displayStateLabels', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Display config labels</span>
                    </label>
                  )}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                {' '}
                {/* General */}
                <AccordionItemHeading>
                  <AccordionItemButton>General</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <TextField
                    value={general.title}
                    updateField={updateField}
                    section='general'
                    fieldName='title'
                    label='Title'
                    placeholder='Map Title'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>For accessibility reasons, you should enter a title even if you are not planning on displaying it.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField
                    value={general.superTitle || ''}
                    updateField={updateField}
                    section='general'
                    fieldName='superTitle'
                    label='Super Title'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Super Title</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField
                    type='textarea'
                    value={general.introText}
                    updateField={updateField}
                    section='general'
                    fieldName='introText'
                    label='Intro Text'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Intro Text</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField
                    type='textarea'
                    value={general.subtext}
                    updateField={updateField}
                    section='general'
                    fieldName='subtext'
                    label='Subtext'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  <TextField
                    type='textarea'
                    value={general.footnotes}
                    updateField={updateField}
                    section='general'
                    fieldName='footnotes'
                    label='Footnotes'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Footnotes</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                  {'us' === config.general.geoType && <TextField value={general.territoriesLabel} updateField={updateField} section='general' fieldName='territoriesLabel' label='Territories Label' placeholder='Territories' />}
                  {/* <label className="checkbox mt-4">
                    <input type="checkbox" checked={ config.general.showDownloadMediaButton } onChange={(event) => { handleEditorChanges("toggleDownloadMediaButton", event.target.checked) }} />
                    <span className="edit-label">Enable Media Download</span>
                  </label> */}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                {' '}
                {/* Columns */}
                <AccordionItemHeading>
                  <AccordionItemButton>Columns</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <fieldset className='primary-fieldset edit-block'>
                    <label>
                      <span className='edit-label column-heading'>
                        Geography
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Select the source column containing the map location names or, for county-level maps, the FIPS codes.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      </span>
                      <select
                        value={config.columns.geo ? config.columns.geo.name : columnsOptions[0]}
                        onChange={event => {
                          editColumn('geo', 'name', event.target.value)
                        }}
                      >
                        {columnsOptions}
                      </select>
                    </label>
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.general.hideGeoColumnInTooltip || false}
                        onChange={event => {
                          handleEditorChanges('hideGeoColumnInTooltip', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Hide Geography Column Name in Tooltip</span>
                    </label>
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
                            <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Enter a geography label for use in tooltips.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                  </fieldset>
                  {'navigation' !== config.general.type && (
                    <fieldset className='primary-fieldset edit-block'>
                      <label>
                        <span className='edit-label column-heading'>
                          Data Column
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>Select the source column containing the categorical or numeric values to be mapped.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                        <select
                          value={config.columns.primary ? config.columns.primary.name : columnsOptions[0]}
                          onChange={event => {
                            editColumn('primary', 'name', event.target.value)
                          }}
                        >
                          {columnsOptions}
                        </select>
                      </label>
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={config.general.hidePrimaryColumnInTooltip || false}
                          onChange={event => {
                            handleEditorChanges('hidePrimaryColumnInTooltip', event.target.checked)
                          }}
                        />
                        <span className='edit-label'>Hide Data Column Name in Tooltip</span>
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
                              <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>Enter a data label for use in tooltips and the data table.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />
                      <ul className='column-edit'>
                        <li className='three-col'>
                          <TextField value={columns.primary.prefix} section='columns' subsection='primary' fieldName='prefix' label='Prefix' updateField={updateField} />
                          <TextField value={columns.primary.suffix} section='columns' subsection='primary' fieldName='suffix' label='Suffix' updateField={updateField} />
                          <TextField type='number' value={columns.primary.roundToPlace} section='columns' subsection='primary' fieldName='roundToPlace' label='Round' updateField={updateField} min={0} />
                        </li>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='checkbox'
                              checked={config.columns.primary.useCommas}
                              onChange={event => {
                                editColumn('primary', 'useCommas', event.target.checked)
                              }}
                            />
                            <span className='edit-label'>Add Commas to Numbers</span>
                          </label>
                        </li>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='checkbox'
                              checked={config.columns.primary.dataTable || false}
                              onChange={event => {
                                editColumn('primary', 'dataTable', event.target.checked)
                              }}
                            />
                            <span className='edit-label'>Display in Data Table</span>
                          </label>
                        </li>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='checkbox'
                              checked={config.columns.primary.tooltip || false}
                              onChange={event => {
                                editColumn('primary', 'tooltip', event.target.checked)
                              }}
                            />
                            <span className='edit-label'>Display in Tooltips</span>
                          </label>
                        </li>
                      </ul>
                    </fieldset>
                  )}

                  {config.general.type === 'bubble' && config.legend.type === 'category' && (
                    <fieldset className='primary-fieldset edit-block'>
                      <label>
                        <span className='edit-label column-heading'>
                          Category Column
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>Select the source column containing the categorical bubble values to be mapped.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                        <select
                          value={config.columns.categorical ? config.columns.categorical.name : columnsOptions[0]}
                          onChange={event => {
                            editColumn('categorical', 'name', event.target.value)
                          }}
                        >
                          {columnsOptions}
                        </select>
                      </label>
                    </fieldset>
                  )}

                  {'us-geocode' === config.general.type && (
                    <>
                      <label>Latitude Column</label>
                      <select
                        value={config.columns.latitude.name ? config.columns.latitude.name : ''}
                        onChange={e => {
                          editColumn('latitude', 'name', e.target.value)
                        }}
                      >
                        {columnsOptions}
                      </select>
                      <label>Longitude Column</label>
                      <select
                        value={config.columns.longitude.name ? config.columns.longitude.name : ''}
                        onChange={e => {
                          editColumn('longitude', 'name', e.target.value)
                        }}
                      >
                        {columnsOptions}
                      </select>
                    </>
                  )}

                  {'navigation' !== config.general.type && (
                    <fieldset className='primary-fieldset edit-block'>
                      <label>
                        <span className='edit-label'>
                          Special Classes
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>For secondary values such as "NA", the system can automatically color-code them in shades of gray, one shade for each special class.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                      </label>
                      {specialClasses.map((specialClass, i) => (
                        <div className='edit-block' key={`special-class-${i}`}>
                          <button
                            className='remove-column'
                            onClick={e => {
                              e.preventDefault()
                              editColumn('primary', 'specialClassDelete', i)
                            }}
                          >
                            Remove
                          </button>
                          <p>Special Class {i + 1}</p>
                          <label>
                            <span className='edit-label column-heading'>Data Key</span>
                            <select
                              value={specialClass.key}
                              onChange={e => {
                                editColumn('primary', 'specialClassEdit', { prop: 'key', index: i, value: e.target.value })
                              }}
                            >
                              {columnsOptions}
                            </select>
                          </label>
                          <label>
                            <span className='edit-label column-heading'>Value</span>
                            <select
                              value={specialClass.value}
                              onChange={e => {
                                editColumn('primary', 'specialClassEdit', { prop: 'value', index: i, value: e.target.value })
                              }}
                            >
                              <option value=''>- Select Value -</option>
                              {columnsByKey[specialClass.key] && columnsByKey[specialClass.key].sort().map(option => <option key={`special-class-value-option-${i}-${option}`}>{option}</option>)}
                            </select>
                          </label>
                          <label>
                            <span className='edit-label column-heading'>Label</span>
                            <input
                              type='text'
                              value={specialClass.label}
                              onChange={e => {
                                editColumn('primary', 'specialClassEdit', { prop: 'label', index: i, value: e.target.value })
                              }}
                            />
                          </label>
                        </div>
                      ))}
                      <button
                        className='btn full-width'
                        onClick={e => {
                          e.preventDefault()
                          editColumn('primary', 'specialClassAdd', {})
                        }}
                      >
                        Add Special Class
                      </button>
                    </fieldset>
                  )}

                  <label className='edit-block navigate column-heading'>
                    <span className='edit-label column-heading'>
                      Navigation
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>To provide end users with navigation functionality, select the source column containing the navigation URLs.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                    <select
                      value={config.columns.navigate ? config.columns.navigate.name : columnsOptions[0]}
                      onChange={event => {
                        editColumn('navigate', 'name', event.target.value)
                      }}
                    >
                      {columnsOptions}
                    </select>
                  </label>
                  {'navigation' !== config.general.type && (
                    <fieldset className='primary-fieldset edit-block'>
                      <label>
                        <span className='edit-label'>
                          Additional Columns
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>You can specify additional columns to display in tooltips and / or the supporting data table.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                      </label>
                      {additionalColumns.map(val => (
                        <fieldset className='edit-block' key={val}>
                          <button
                            className='remove-column'
                            onClick={event => {
                              event.preventDefault()
                              removeAdditionalColumn(val)
                            }}
                          >
                            Remove
                          </button>
                          <label>
                            <span className='edit-label column-heading'>Column</span>
                            <select
                              value={config.columns[val] ? config.columns[val].name : columnsOptions[0]}
                              onChange={event => {
                                editColumn(val, 'name', event.target.value)
                              }}
                            >
                              {columnsOptions}
                            </select>
                          </label>
                          <TextField value={columns[val].label} section='columns' subsection={val} fieldName='label' label='Label' updateField={updateField} />
                          <ul className='column-edit'>
                            <li className='three-col'>
                              <TextField value={columns[val].prefix} section='columns' subsection={val} fieldName='prefix' label='Prefix' updateField={updateField} />
                              <TextField value={columns[val].suffix} section='columns' subsection={val} fieldName='suffix' label='Suffix' updateField={updateField} />
                              <TextField type='number' value={columns[val].roundToPlace} section='columns' subsection={val} fieldName='roundToPlace' label='Round' updateField={updateField} />
                            </li>
                            <li>
                              <label className='checkbox'>
                                <input
                                  type='checkbox'
                                  checked={config.columns[val].useCommas}
                                  onChange={event => {
                                    editColumn(val, 'useCommas', event.target.checked)
                                  }}
                                />
                                <span className='edit-label'>Add Commas to Numbers</span>
                              </label>
                            </li>
                            <li>
                              <label className='checkbox'>
                                <input
                                  type='checkbox'
                                  checked={config.columns[val].dataTable}
                                  onChange={event => {
                                    editColumn(val, 'dataTable', event.target.checked)
                                  }}
                                />
                                <span className='edit-label'>Display in Data Table</span>
                              </label>
                            </li>
                            <li>
                              <label className='checkbox'>
                                <input
                                  type='checkbox'
                                  checked={config.columns[val].tooltip}
                                  onChange={event => {
                                    editColumn(val, 'tooltip', event.target.checked)
                                  }}
                                />
                                <span className='edit-label'>Display in Tooltips</span>
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      ))}
                      <button
                        className={'btn full-width'}
                        onClick={event => {
                          event.preventDefault()
                          addAdditionalColumn(additionalColumns.length + 1)
                        }}
                      >
                        Add Column
                      </button>
                    </fieldset>
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
                </AccordionItemPanel>
              </AccordionItem>{' '}
              {/* Columns */}
              {'navigation' !== config.general.type && (
                <AccordionItem>
                  {' '}
                  {/* Legend */}
                  <AccordionItemHeading>
                    <AccordionItemButton>Legend</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
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
                    <TextField value={legend.title} updateField={updateField} section='legend' fieldName='title' label='Legend Title' placeholder='Legend Title' />
                    {false === legend.dynamicDescription && <TextField type='textarea' value={legend.description} updateField={updateField} section='legend' fieldName='description' label='Legend Description' />}
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
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              {'navigation' !== config.general.type && (
                <AccordionItem>
                  {' '}
                  {/* Filters */}
                  <AccordionItemHeading>
                    <AccordionItemButton>Filters</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
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
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              {'navigation' !== config.general.type && (
                <AccordionItem>
                  {' '}
                  {/* Data Table */}
                  <AccordionItemHeading>
                    <AccordionItemButton>Data Table</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <TextField
                      value={dataTable.title}
                      updateField={updateField}
                      section='dataTable'
                      fieldName='title'
                      label='Data Table Title'
                      placeholder='Data Table'
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Label is required for Data Table for 508 Compliance</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    <TextField
                      value={dataTable.indexLabel || ''}
                      updateField={updateField}
                      section='dataTable'
                      fieldName='indexLabel'
                      label='Index Column Header'
                      placeholder='Location'
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                    />
                    <TextField
                      value={dataTable.caption}
                      updateField={updateField}
                      section='dataTable'
                      fieldName='caption'
                      label='Data Table Caption'
                      placeholder='Data Table'
                      tooltip={
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Enter a description of the data table to be read by screen readers.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      }
                      type='textarea'
                    />
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.dataTable.forceDisplay !== undefined ? config.dataTable.forceDisplay : !isDashboard}
                        onChange={event => {
                          handleEditorChanges('showDataTable', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>
                        Show Table
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='questionCircle' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Data tables are required for 508 compliance. When choosing to hide this data table, replace with your own version.</p>
                          </Tooltip.Content>
                        </Tooltip>
                      </span>
                    </label>
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.dataTable.limitHeight}
                        onChange={event => {
                          handleEditorChanges('limitDataTableHeight', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Limit Table Height</span>
                    </label>
                    {config.dataTable.limitHeight && <TextField value={dataTable.height} updateField={updateField} section='dataTable' fieldName='height' label='Data Table Height' placeholder='Height(px)' type='number' min='0' max='500' />}
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.general.expandDataTable || false}
                        onChange={event => {
                          handleEditorChanges('expandDataTable', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Map loads with data table expanded</span>
                    </label>
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.table.showDownloadUrl}
                        onChange={event => {
                          handleEditorChanges('toggleDataUrl', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Enable Link to Dataset</span>
                    </label>
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.general.showDownloadButton}
                        onChange={event => {
                          handleEditorChanges('toggleDownloadButton', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Enable Download CSV Button</span>
                    </label>
                    {/* <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.general.showDownloadImgButton}
                        onChange={event => {
                          handleEditorChanges('toggleDownloadImgButton', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Enable Image Download</span>
                    </label> */}
                    {/* <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.general.showDownloadPdfButton}
                        onChange={event => {
                          handleEditorChanges('toggleDownloadPdfButton', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Enable Pdf Download</span>
                    </label> */}
                  </AccordionItemPanel>
                </AccordionItem>
              )}
              <AccordionItem>
                {' '}
                {/* Tooltips */}
                <AccordionItemHeading>
                  <AccordionItemButton>Interactivity</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                  {'click' === config.tooltips.appearanceType && <TextField value={tooltips.linkLabel} section='tooltips' fieldName='linkLabel' label='Tooltips Link Label' updateField={updateField} />}
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
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                {' '}
                {/* Visual */}
                <AccordionItemHeading>
                  <AccordionItemButton>Visual</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <label>
                    <span className='edit-label'>Header Theme</span>
                    <ul className='color-palette'>
                      {headerColors.map(palette => {
                        return (
                          <li
                            title={palette}
                            key={palette}
                            onClick={() => {
                              handleEditorChanges('headerColor', palette)
                            }}
                            className={config.general.headerColor === palette ? 'selected ' + palette : palette}
                          ></li>
                        )
                      })}
                    </ul>
                  </label>
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={config.general.showTitle || false}
                      onChange={event => {
                        handleEditorChanges('showTitle', event.target.checked)
                      }}
                    />
                    <span className='edit-label'>Show Title</span>
                  </label>

                  {'navigation' === config.general.type && (
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.general.fullBorder || false}
                        onChange={event => {
                          handleEditorChanges('fullBorder', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Add border around map</span>
                    </label>
                  )}
                  <label>
                    <span className='edit-label'>Geo Border Color</span>
                    <select
                      value={config.general.geoBorderColor || false}
                      onChange={event => {
                        handleEditorChanges('geoBorderColor', event.target.value)
                      }}
                    >
                      <option value='darkGray'>Dark Gray (Default)</option>
                      <option value='sameAsBackground'>White</option>
                    </select>
                  </label>
                  <label>
                    <span className='edit-label'>Map Color Palette</span>
                  </label>
                  {/* <InputCheckbox  section="general" subsection="palette"  fieldName='isReversed'  size='small' label='Use selected palette in reverse order'   updateField={updateField}  value={isPaletteReversed} /> */}
                  <InputToggle type='3d' section='general' subsection='palette' fieldName='isReversed' size='small' label='Use selected palette in reverse order' updateField={updateField} value={isPaletteReversed} />
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
                  {'us-geocode' === config.general.type && (
                    <label>
                      Geocode Settings
                      <TextField type='number' value={config.visual.geoCodeCircleSize} section='visual' max='10' fieldName='geoCodeCircleSize' label='Geocode Circle Size' updateField={updateField} />
                    </label>
                  )}

                  {config.general.type === 'bubble' && (
                    <>
                      <TextField type='number' value={config.visual.minBubbleSize} section='visual' fieldName='minBubbleSize' label='Minimum Bubble Size' updateField={updateField} />
                      <TextField type='number' value={config.visual.maxBubbleSize} section='visual' fieldName='maxBubbleSize' label='Maximum Bubble Size' updateField={updateField} />
                    </>
                  )}
                  {(config.general.geoType === 'world' || (config.general.geoType === 'us' && config.general.type === 'bubble')) && (
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.visual.showBubbleZeros}
                        onChange={event => {
                          handleEditorChanges('showBubbleZeros', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Show Data with Zero's on Bubble Map</span>
                    </label>
                  )}
                  {config.general.geoType === 'world' && (
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.general.allowMapZoom}
                        onChange={event => {
                          handleEditorChanges('allowMapZoom', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Allow Map Zooming</span>
                    </label>
                  )}
                  {config.general.type === 'bubble' && (
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={config.visual.extraBubbleBorder}
                        onChange={event => {
                          handleEditorChanges('toggleExtraBubbleBorder', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Bubble Map has extra border</span>
                    </label>
                  )}
                  {config.general.geoType === 'us' ||
                    (config.general.geoType === 'us-county' && (
                      <label>
                        <span className='edit-label'>City Style</span>
                        <select
                          value={config.visual.cityStyle || false}
                          onChange={event => {
                            handleEditorChanges('handleCityStyle', event.target.value)
                          }}
                        >
                          <option value='circle'>Circle</option>
                          <option value='pin'>Pin</option>
                        </select>
                      </label>
                    ))}
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </form>
          <PanelComponentAdvanced loadConfig={loadConfig} config={config} convertStateToConfig={convertStateToConfig} />
        </section>
      </section>
    </ErrorBoundary>
  )
}

export default EditorPanels
