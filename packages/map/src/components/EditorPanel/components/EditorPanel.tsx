import React, { useState, useEffect, useContext } from 'react'

// Third Party
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useDebounce } from 'use-debounce'
import _ from 'lodash'
// import ReactTags from 'react-tag-autocomplete'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Panels from './Panels'
import Layout from '@cdc/core/components/Layout'

// Data
import colorPalettes from '@cdc/core/data/colorPalettes'
import { supportedStatesFipsCodes } from '../../../data/supported-geos.js'

// Components - Core
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Icon from '@cdc/core/components/ui/Icon'
import InputToggle from '@cdc/core/components/inputs/InputToggle'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'

// Assets
import UsaGraphic from '@cdc/core/assets/icon-map-usa.svg'
import UsaRegionGraphic from '@cdc/core/assets/usa-region-graphic.svg'
import WorldGraphic from '@cdc/core/assets/icon-map-world.svg'
import AlabamaGraphic from '@cdc/core/assets/icon-map-alabama.svg'
import worldDefaultConfig from '../../../../examples/default-world.json'
import usaDefaultConfig from '../../../../examples/default-usa.json'
import countyDefaultConfig from '../../../../examples/default-county.json'
import useMapLayers from '../../../hooks/useMapLayers.tsx'

import HexSetting from './HexShapeSettings.jsx'
import ConfigContext from '../../../context.ts'
import { MapContext } from '../../../types/MapContext.js'
import Alert from '@cdc/core/components/Alert'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import useColumnsRequiredChecker from '../../../hooks/useColumnsRequiredChecker'
import { addUIDs, HEADER_COLORS } from '../../../helpers'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import { Datasets } from '@cdc/core/types/DataSet'

type MapEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MapEditorPanelProps> = ({ datasets }) => {
  const {
    isDashboard,
    loadConfig,
    runtimeFilters,
    runtimeLegend,
    setParentConfig,
    setState,
    state,
    tooltipId,
    runtimeData,
    setPosition
  } = useContext<MapContext>(ConfigContext)

  const { columnsRequiredChecker } = useColumnsRequiredChecker()
  const { general, columns, legend, table, tooltips } = state
  const columnsInData = state?.data?.[0] ? Object.keys(state.data[0]) : []

  const [configTextboxValue, setConfigTextbox] = useState({}) // eslint-disable-line
  const [loadedDefault, setLoadedDefault] = useState(false)
  const [displayPanel, setDisplayPanel] = useState(true)
  const [activeFilterValueForDescription, setActiveFilterValueForDescription] = useState([0, 0])

  const {
    // prettier-ignore
    MapLayerHandlers: {
      handleMapLayer,
      handleAddLayer,
      handleRemoveLayer
    }
  } = useMapLayers(state, setState, false, tooltipId)

  const categoryMove = (idx1, idx2) => {
    let categoryValuesOrder = getCategoryValuesOrder()
    let [movedItem] = categoryValuesOrder.splice(idx1, 1)
    categoryValuesOrder.splice(idx2, 0, movedItem)
    state.legend.categoryValuesOrder?.forEach(value => {
      if (categoryValuesOrder.indexOf(value) === -1) {
        categoryValuesOrder.push(value)
      }
    })

    setState({
      ...state,
      legend: {
        ...state.legend,
        categoryValuesOrder
      }
    })
  }

  let specialClasses = []
  if (legend.specialClasses && legend.specialClasses.length && typeof legend.specialClasses[0] === 'string') {
    legend.specialClasses.forEach(specialClass => {
      specialClasses.push({
        key: state.columns.primary && state.columns.primary.name ? state.columns.primary.name : columnsInData[0],
        value: specialClass,
        label: specialClass
      })
    })
    // DEV-3303 - since the above was a repair of bad config - need to backpopulate into the state
    setState({
      ...state,
      legend: {
        ...state.legend,
        specialClasses: specialClasses
      }
    })
  } else {
    specialClasses = legend.specialClasses || []
  }

  const getCityStyleOptions = target => {
    switch (target) {
      case 'value': {
        const values = ['Circle', 'Square', 'Triangle', 'Diamond', 'Star', 'Pin']
        const filteredValues = values.filter(
          val => String(state.visual.cityStyle).toLocaleLowerCase() !== val.toLocaleLowerCase()
        )

        return (
          <>
            <option value='' key={'Select Option'}>
              - Select Option -
            </option>
            {filteredValues.map((val, i) => {
              return (
                <option key={i} value={val}>
                  {val}
                </option>
              )
            })}
          </>
        )
      }
    }
  }

  const editCityStyles = (target, index, fieldName, value) => {
    switch (target) {
      case 'add': {
        const additionalCityStyles = state.visual.additionalCityStyles ? [...state.visual.additionalCityStyles] : []
        additionalCityStyles.push({ label: '', column: '', value: '', shape: '' })
        setState({
          ...state,
          visual: {
            ...state.visual,
            additionalCityStyles: additionalCityStyles
          }
        })
        break
      }
      case 'remove': {
        let additionalCityStyles = []
        if (state.visual.additionalCityStyles) {
          additionalCityStyles = [...state.visual.additionalCityStyles]
        }

        additionalCityStyles.splice(index, 1)
        setState({
          ...state,
          visual: {
            ...state.visual,
            additionalCityStyles: additionalCityStyles
          }
        })
        break
      }
      case 'update': {
        let additionalCityStyles = []
        additionalCityStyles = [...state.visual.additionalCityStyles]
        additionalCityStyles[index][fieldName] = value
        setState({
          ...state,
          visual: {
            ...state.visual,
            additionalCityStyles: additionalCityStyles
          }
        })
      }
    }
  }

  const DynamicDesc = ({ label, fieldName, value: stateValue, type = 'input', ...attributes }) => {
    const [value, setValue] = useState(stateValue)

    const [debouncedValue] = useDebounce(value, 500)

    useEffect(() => {
      if ('string' === typeof debouncedValue && stateValue !== debouncedValue) {
        handleEditorChanges('changeLegendDescription', [String(activeFilterValueForDescription), debouncedValue])
      }
    }, [debouncedValue])

    const onChange = e => setValue(e.target.value)

    return <textarea onChange={onChange} {...attributes} value={value}></textarea>
  }

  const handleEditorChanges = async (property, value) => {
    switch (property) {
      case 'navigationTarget':
        setState({
          ...state,
          general: {
            ...state.general,
            navigationTarget: value
          }
        })
        break
      // change these to be more generic.
      // updateVisualPropertyValue
      // updateGeneralPropertyValue, etc.
      case 'showBubbleZeros':
        setState({
          ...state,
          visual: {
            ...state.visual,
            showBubbleZeros: value
          }
        })
        break
      case 'showEqualNumber':
        setState({
          ...state,
          general: {
            ...state.general,
            equalNumberOptIn: value
          }
        })
        break
      case 'hideGeoColumnInTooltip':
        setState({
          ...state,
          general: {
            ...state.general,
            [property]: value
          }
        })
        break

      case 'toggleDataTableLink':
        setState({
          ...state,
          table: {
            ...state.table,
            showDataTableLink: value
          }
        })
        break

      case 'toggleDataUrl':
        setState({
          ...state,
          table: {
            ...state.table,
            showDownloadUrl: value
          }
        })
        break
      case 'toggleExtraBubbleBorder':
        setState({
          ...state,
          visual: {
            ...state.visual,
            extraBubbleBorder: value
          }
        })
        break
      case 'allowMapZoom':
        setState({
          ...state,
          general: {
            ...state.general,
            allowMapZoom: value
          },
          mapPosition: {
            coordinates: state.general.geoType === 'world' ? [0, 30] : [0, 0],
            zoom: 1
          }
        })
        break
      case 'hidePrimaryColumnInTooltip':
        setState({
          ...state,
          general: {
            ...state.general,
            [property]: value
          }
        })
        break
      case 'geoLabelOverride':
        setState({
          ...state,
          general: {
            ...state.general,
            geoLabelOverride: value
          }
        })
        break
      case 'showTitle':
        setState({
          ...state,
          general: {
            ...state.general,
            showTitle: value
          }
        })
        break
      case 'showSidebar':
        setState({
          ...state,
          general: {
            ...state.general,
            showSidebar: value
          }
        })
        break
      case 'fullBorder':
        setState({
          ...state,
          general: {
            ...state.general,
            fullBorder: value
          }
        })
        break
      case 'expandDataTable':
        setState({
          ...state,
          table: {
            ...state.table,
            expanded: value
          }
        })
        break
      case 'color':
        setState({
          ...state,
          color: value
        })
        break
      case 'sidebarPosition':
        setState({
          ...state,
          legend: {
            ...state.legend,
            position: value,
            hideBorder: _.includes(['top', 'bottom'], value)
          }
        })
        break
      case 'legendStyle':
        setState({
          ...state,
          legend: {
            ...state.legend,
            style: value
          }
        })
        break
      case 'legendSubStyle':
        setState({
          ...state,
          legend: {
            ...state.legend,
            subStyle: value
          }
        })
        break
      case 'legendTickRotation':
        setState({
          ...state,
          legend: {
            ...state.legend,
            tickRotation: value
          }
        })
        break
      case 'legendBorder':
        setState({
          ...state,
          legend: {
            ...state.legend,
            hideBorder: value
          }
        })
        break
      case 'handleCityStyle':
        setState({
          ...state,
          visual: {
            ...state.visual,
            cityStyle: value
          }
        })
        break
      case 'geoBorderColor':
        setState({
          ...state,
          general: {
            ...state.general,
            geoBorderColor: value
          }
        })
        break
      case 'headerColor':
        setState({
          ...state,
          general: {
            ...state.general,
            headerColor: value
          }
        })
        break
      case 'navigateColumn':
        setState({
          ...state,
          columns: {
            ...state.columns,
            navigate: {
              ...state.columns.navigate,
              name: value
            }
          }
        })
        break
      case 'legendDescription':
        setState({
          ...state,
          legend: {
            ...state.legend,
            description: value
          }
        })
        break
      case 'legendType':
        let testForType = Number(typeof state.data[0][state.columns.primary.name])
        let hasValue = state.data[0][state.columns.primary.name]
        let messages = []

        if (!hasValue) {
          messages.push(
            `There appears to be values missing for data in the primary column ${state.columns.primary.name}`
          )
        }

        if (testForType === 'string' && isNaN(testForType) && value !== 'category') {
          messages.push(
            'Error with legend. Primary columns that are text must use a categorical legend type. Try changing the legend type to DEV-12345categorical.'
          )
        } else {
          messages = []
        }

        setState({
          ...state,
          legend: {
            ...state.legend,
            type: value
          },
          runtime: {
            ...state.runtime,
            editorErrorMessage: messages
          }
        })
        break
      case 'legendNumber':
        setState({
          ...state,
          legend: {
            ...state.legend,
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
          ...state,
          legend: {
            ...state.legend,
            unified: value
          }
        })
        break
      case 'separateZero':
        setState({
          ...state,
          legend: {
            ...state.legend,
            separateZero: value
          }
        })
        break
      case 'toggleShowFullGeoNameInCSV':
        setState({
          ...state,
          table: {
            // setting both bc DataTable new core needs it here
            ...state.table,
            showFullGeoNameInCSV: !state.table.showFullGeoNameInCSV
          }
        })
        break
      case 'toggleDownloadImgButton':
        setState({
          ...state,
          general: {
            ...state.general,
            showDownloadImgButton: !state.general.showDownloadImgButton
          }
        })
        break
      case 'toggleDownloadLinkBelow':
        setState({
          ...state,
          table: {
            ...state.table,
            showDownloadLinkBelow: !state.table.showDownloadLinkBelow
          }
        })
        break
      case 'toggleDownloadPdfButton':
        setState({
          ...state,
          general: {
            ...state.general,
            showDownloadPdfButton: !state.general.showDownloadPdfButton
          }
        })
        break
      case 'displayAsHex':
        setState({
          ...state,
          general: {
            ...state.general,
            displayAsHex: value
          }
        })
        break
      case 'editorMapType':
        switch (value) {
          case 'us-geocode':
            setState({
              ...state,
              general: {
                ...state.general,
                type: value
              }
            })
            break
          case 'world-geocode':
            setState({
              ...state,
              general: {
                ...state.general,
                type: value
              }
            })
            break
          case 'data':
            setState({
              ...state,
              general: {
                ...state.general,
                showSidebar: true,
                type: 'data'
              }
            })
            break
          case 'navigation':
            setState({
              ...state,
              general: {
                ...state.general,
                showSidebar: false,
                type: 'navigation'
              },
              tooltips: {
                ...state.tooltips,
                appearanceType: 'hover'
              }
            })
            break
          case 'bubble':
            setState({
              ...state,
              general: {
                ...state.general,
                showSidebar: false,
                type: 'bubble'
              },
              tooltips: {
                ...state.tooltips,
                appearanceType: 'hover'
              }
            })
            break
          default:
            console.warn('COVE: Map type not set') // eslint-disable-line
            break
        }
        break
      case 'geoType':
        addUIDs(state, state.columns.geo.name)
        setPosition([0, 30])

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
              ...state,
              general: {
                ...state.general,
                geoType: 'us',
                type: state.type === 'us-geocode' ? 'data' : state.type
              },
              table: {
                ...state.table,
                forceDisplay: true
              }
            })
            break
          case 'us-region':
            setState({
              ...state,
              general: {
                ...state.general,
                geoType: 'us-region'
              },
              table: {
                ...state.table,
                forceDisplay: true
              }
            })
            break
          case 'world':
            setState({
              ...state,
              general: {
                ...state.general,
                geoType: 'world'
              },
              table: {
                ...state.table,
                forceDisplay: true
              }
            })
            break
          case 'us-county':
            setState({
              ...state,
              general: {
                ...state.general,
                geoType: 'us-county'
              },
              table: {
                ...state.table,
                expanded: false,
                forceDisplay: true
              }
            })
            break
          case 'single-state':
            setState({
              ...state,
              general: {
                ...state.general,
                geoType: 'single-state'
              },
              table: {
                ...state.table,
                expanded: false,
                forceDisplay: true
              }
            })
            break
          case 'google-map':
            setState({
              ...state,
              general: {
                ...state.general,
                geoType: 'google-map'
              }
            })
          default:
            break
        }

        break
      case 'singleColumnLegend':
        setState({
          ...state,
          legend: {
            ...state.legend,
            singleColumn: !state.legend.singleColumn,
            singleRow: false,
            verticalSorted: false
          }
        })
        break
      case 'singleRowLegend':
        setState({
          ...state,
          legend: {
            ...state.legend,
            singleRow: !state.legend.singleRow,
            singleColumn: false,
            verticalSorted: false
          }
        })
        break
      case 'verticalSortedLegend':
        setState({
          ...state,
          legend: {
            ...state.legend,
            verticalSorted: !state.legend.verticalSorted,
            singleRow: false,
            singleColumn: false
          }
        })
        break
      case 'legendShowSpecialClassesLast':
        setState({
          ...state,
          legend: {
            ...state.legend,
            showSpecialClassesLast: !state.legend.showSpecialClassesLast
          }
        })
        break
      case 'dynamicDescription':
        setState({
          ...state,
          editor: {
            ...state.editor,
            activeFilterValueForDescription: value
          },
          legend: {
            ...state.legend,
            dynamicDescription: !state.legend.dynamicDescription
          }
        })
        break
      case 'changeLegendDescription':
        const [filterValKey, filterValDesc] = value
        setState({
          ...state,
          legend: {
            ...state.legend,
            descriptions: {
              ...state.legend.descriptions,
              [filterValKey]: [filterValDesc]
            }
          }
        })
        break
      case 'appearanceType':
        setState({
          ...state,
          tooltips: {
            ...state.tooltips,
            appearanceType: value
          }
        })
        break
      case 'linkLabel':
        setState({
          ...state,
          tooltips: {
            ...state.tooltips,
            linkLabel: value
          }
        })
        break
      case 'displayStateLabels':
        setState({
          ...state,
          general: {
            ...state.general,
            displayStateLabels: !state.general.displayStateLabels
          }
        })
        break
      case 'capitalizeLabels':
        setState({
          ...state,
          tooltips: {
            ...state.tooltips,
            capitalizeLabels: value
          }
        })
        break
      case 'showDataTable':
        setState({
          ...state,
          table: {
            ...state.table,
            forceDisplay: value
          }
        })
        break
      case 'limitDataTableHeight':
        setState({
          ...state,
          table: {
            ...state.table,
            limitHeight: value
          }
        })
        break
      case 'chooseState':
        let fipsCode = Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === value)
        let stateName = value
        let stateData = { fipsCode, stateName }

        setState({
          ...state,
          general: {
            ...state.general,
            statePicked: stateData
          }
        })

        if (state) {
          const newData = generateRuntimeData(state)
          setRuntimeData(newData)
        }
        break
      case 'classificationType':
        setState({
          ...state,
          legend: {
            ...state.legend,
            type: value
          }
        })
        break
      case 'territoriesAlwaysShow':
        setState({
          ...state,
          general: {
            ...state.general,
            territoriesAlwaysShow: value
          }
        })
        break
      case 'countyCensusYear':
        setState({
          ...state,
          general: {
            ...state.general,
            countyCensusYear: value
          }
        })
        break
      case 'filterControlsCountyYear':
        setState({
          ...state,
          general: {
            ...state.general,
            filterControlsCountyYear: value
          }
        })
        break
      case 'filterControlsStatePicked':
        setState({
          ...state,
          general: {
            ...state.general,
            filterControlsStatePicked: value
          }
        })
        break
      case 'filterBehavior':
        setState({
          ...state,
          filterBehavior: value
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

        setState({
          ...state,
          legend: {
            ...state.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'specialClassDelete':
        newSpecialClasses = Array.from(specialClasses)

        newSpecialClasses.splice(value, 1)

        setState({
          ...state,
          legend: {
            ...state.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'specialClassAdd':
        newSpecialClasses = specialClasses

        newSpecialClasses.push(value)

        setState({
          ...state,
          legend: {
            ...state.legend,
            specialClasses: newSpecialClasses
          }
        })
        break
      case 'name':
        addUIDs(state, state.columns.geo.name)
        setState({
          ...state,
          columns: {
            ...state.columns,
            [columnName]: {
              ...state.columns[columnName],
              [editTarget]: value
            }
          }
        })

        break
      default:
        setState({
          ...state,
          columns: {
            ...state.columns,
            [columnName]: {
              ...state.columns[columnName],
              [editTarget]: value
            }
          }
        })
        break
    }
  }

  const changeFilter = async (idx, target, value) => {
    let newFilters = [...state.filters]

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
      case 'filterStyle':
        newFilters[idx] = { ...newFilters[idx] }
        newFilters[idx].filterStyle = value
        break
      case 'showDropdown':
        newFilters[idx] = { ...newFilters[idx] }
        newFilters[idx].showDropdown = value
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
      ...state,
      filters: newFilters
    })
  }

  // just adds a new column but not set to any data yet
  const addAdditionalColumn = number => {
    const columnKey = `additionalColumn${number}`

    setState({
      ...state,
      columns: {
        ...state.columns,
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
    const newColumns = state.columns

    delete newColumns[columnName]

    setState({
      ...state,
      columns: newColumns
    })
  }

  const displayFilterLegendValue = arr => {
    const filterName = state.filters[arr[0]].label || `Unlabeled Legend`

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
    let strippedState = _.cloneDeep(state) // Deep copy

    // Strip ref
    delete strippedState['']

    delete strippedState.newViz

    // Remove the legend
    let strippedLegend = _.cloneDeep(state.legend)

    delete strippedLegend.disabledAmt

    strippedState.legend = strippedLegend

    // Remove default data marker if the user started this map from default data
    delete strippedState.defaultData

    // Remove tooltips if they're active in the editor
    let strippedGeneral = _.cloneDeep(state.general)

    strippedState.general = strippedGeneral

    // Add columns property back to data if it's there
    if (state.columns) {
      strippedState.columns = state.columns
    }

    return strippedState
  }

  const isReversed = state.general.palette.isReversed

  function filterColorPalettes() {
    let sequential = []
    let nonSequential = []
    let accessibleColors = []
    for (let paletteName in colorPalettes) {
      if (!isReversed) {
        if (paletteName.includes('qualitative') && !paletteName.endsWith('reverse')) {
          nonSequential.push(paletteName)
        }
        if (paletteName.includes('colorblindsafe') && !paletteName.endsWith('reverse')) {
          accessibleColors.push(paletteName)
        }
        if (
          !paletteName.includes('qualitative') &&
          !paletteName.includes('colorblindsafe') &&
          !paletteName.endsWith('reverse')
        ) {
          sequential.push(paletteName)
        }
      }
      if (isReversed) {
        if (paletteName.includes('qualitative') && paletteName.endsWith('reverse')) {
          nonSequential.push(paletteName)
        }
        if (paletteName.includes('colorblindsafe') && paletteName.endsWith('reverse')) {
          accessibleColors.push(paletteName)
        }
        if (
          !paletteName.includes('qualitative') &&
          !paletteName.includes('colorblindsafe') &&
          paletteName.endsWith('reverse')
        ) {
          sequential.push(paletteName)
        }
      }
    }

    return [sequential, nonSequential, accessibleColors]
  }
  const [sequential, nonSequential, accessibleColors] = filterColorPalettes()

  useEffect(() => {
    setLoadedDefault(state.defaultData)
    columnsRequiredChecker()
  }, [state])

  const columnsOptions = [
    <option value='' key={'Select Option'}>
      - Select Option -
    </option>
  ]

  columnsInData.map(colName => {
    return columnsOptions.push(
      <option value={colName} key={colName}>
        {colName}
      </option>
    )
  })

  let columnsByKey = {}
  state.data.forEach(datum => {
    Object.keys(datum).forEach(key => {
      columnsByKey[key] = columnsByKey[key] || []
      const value = typeof datum[key] === 'number' ? datum[key].toString() : datum[key]

      if (columnsByKey[key].indexOf(value) === -1) {
        columnsByKey[key].push(value)
      }
    })
  })

  const additionalColumns = Object.keys(state.columns).filter(value => {
    const defaultCols = ['geo', 'navigate', 'primary', 'latitude', 'longitude']

    if (true === defaultCols.includes(value)) {
      return false
    }
    return true
  })

  const updateField = updateFieldFactory(state, setState)

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
    setState({
      ...state,
      showEditorPanel: !displayPanel
    })
  }

  const StateOptionList = () => {
    const arrOfArrays = Object.entries(supportedStatesFipsCodes)

    let sorted = arrOfArrays.sort((a, b) => {
      return a[0].localeCompare(b[0])
    })

    let options = []
    sorted.forEach(state => {
      options.push(
        <option key={state[0]} value={state[1]}>
          {state[1]}
        </option>
      )
    })

    return options
  }

  const filterValueOptionList = []

  if (runtimeFilters.length > 0) {
    runtimeFilters.forEach((filter, index) => {
      runtimeFilters[index]?.values?.forEach((value, valueNum) => {
        filterValueOptionList.push([index, valueNum])
      })
    })
  }

  let numberOfItemsLimit = 8

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle
  })

  const getCategoryValuesOrder = () => {
    let values = runtimeLegend
      ? runtimeLegend.items.filter(item => !item.special).map(runtimeLegendItem => runtimeLegendItem.value)
      : []

    if (state.legend.cateogryValuesOrder) {
      return values.sort((a, b) => {
        let aVal = state.legend.cateogryValuesOrder.indexOf(a)
        let bVal = state.legend.cateogryValuesOrder.indexOf(b)
        if (aVal === bVal) return 0
        if (aVal === -1) return 1
        if (bVal === -1) return -1
        return aVal - bVal
      })
    } else {
      return values
    }
  }

  const CategoryList = () => {
    return getCategoryValuesOrder()
      .filter(item => !item?.special)
      .map((value, index) => (
        <Draggable key={value} draggableId={`item-${value}`} index={index}>
          {(provided, snapshot) => (
            <li style={{ position: 'relative' }}>
              <div
                className={snapshot.isDragging ? 'currently-dragging' : ''}
                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, sortableItemStyles)}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {value}
              </div>
            </li>
          )}
        </Draggable>
      ))
  }

  const isLoadedFromUrl = state?.dataKey?.includes('http://') || state?.dataKey?.includes('https://')

  return (
    <ErrorBoundary component='EditorPanel'>
      <Layout.Sidebar
        isDashboard={isDashboard}
        displayPanel={displayPanel}
        title='Configure Map'
        onBackClick={onBackClick}
      >
        <ReactTooltip multiline={true} />
        <Accordion allowZeroExpanded={true}>
          <AccordionItem>
            {' '}
            {/* Type */}
            <AccordionItemHeading>
              <AccordionItemButton>Type</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <label>
                <span className='edit-label column-heading'>
                  <span>Geography</span>
                </span>
                <ul className='geo-buttons d-grid' style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  <button
                    className={`${
                      state.general.geoType === 'us' || state.general.geoType === 'us-county' ? 'active' : ''
                    } full-width`}
                    onClick={e => {
                      e.preventDefault()
                      handleEditorChanges('geoType', 'us')
                    }}
                  >
                    <UsaGraphic />
                    <span>United States</span>
                  </button>
                  <button
                    className={`${state.general.geoType === 'us-region' ? 'active' : ''} full-width`}
                    onClick={e => {
                      e.preventDefault()
                      handleEditorChanges('geoType', 'us-region')
                    }}
                  >
                    <UsaRegionGraphic />
                    <span>U.S. Region</span>
                  </button>
                  <button
                    className={`${state.general.geoType === 'world' ? 'active' : ''} full-width`}
                    onClick={e => {
                      e.preventDefault()
                      handleEditorChanges('geoType', 'world')
                    }}
                  >
                    <WorldGraphic />
                    <span>World</span>
                  </button>
                  <button
                    className={`${state.general.geoType === 'single-state' ? 'active' : ''} full-width`}
                    onClick={e => {
                      e.preventDefault()
                      handleEditorChanges('geoType', 'single-state')
                    }}
                  >
                    <AlabamaGraphic />
                    <span>U.S. State</span>
                  </button>
                </ul>
              </label>
              {/* Select > State or County Map */}
              {(state.general.geoType === 'us' || state.general.geoType === 'us-county') && (
                <Select
                  label='Geography Subtype'
                  value={state.general.geoType}
                  options={[
                    { value: 'us', label: 'US State-Level' },
                    { value: 'us-county', label: 'US County-Level' }
                  ]}
                  onChange={event => {
                    handleEditorChanges('geoType', event.target.value)
                  }}
                />
              )}
              {(state.general.geoType === 'us-county' || state.general.geoType === 'single-state') && (
                <Select
                  label='County Census Year'
                  value={state.general.countyCensusYear || '2019'}
                  options={[
                    { value: '2022', label: '2022' },
                    { value: '2021', label: '2021' },
                    { value: '2020', label: '2020' },
                    { value: '2019', label: '2019' },
                    { value: '2015', label: '2015' },
                    { value: '2014', label: '2014' },
                    { value: '2013', label: '2013' }
                  ]}
                  onChange={event => {
                    handleEditorChanges('countyCensusYear', event.target.value)
                  }}
                />
              )}
              {(state.general.geoType === 'us-county' || state.general.geoType === 'single-state') && (
                <label>
                  <span className='edit-label column-heading'>Filter Controlling County Census Year</span>
                  <select
                    value={state.general.filterControlsCountyYear || ''}
                    onChange={event => {
                      handleEditorChanges('filterControlsCountyYear', event.target.value)
                    }}
                  >
                    <option value=''>None</option>
                    {state.filters && state.filters.map(filter => <option>{filter.columnName}</option>)}
                  </select>
                </label>
              )}

              {state.general.geoType === 'single-state' && runtimeData && (
                <label>
                  <span className='edit-label column-heading'>Filter Controlling State Picked</span>
                  <select
                    value={state.general.filterControlsStatePicked || ''}
                    onChange={event => {
                      handleEditorChanges('filterControlsStatePicked', event.target.value)
                    }}
                  >
                    <option value=''>None</option>
                    {runtimeData && columnsInData?.map(col => <option>{col}</option>)}
                  </select>
                </label>
              )}

              {/* Type */}
              {/* Select > Filter a state */}
              {state.general.geoType === 'single-state' && (
                <label>
                  <span className='edit-label column-heading'>State Selector</span>
                  <select
                    value={state.general.statePicked.stateName}
                    onChange={event => {
                      handleEditorChanges('chooseState', event.target.value)
                    }}
                  >
                    <StateOptionList />
                  </select>
                </label>
              )}
              {/* Type */}
              <Select
                label={
                  <>
                    Map Type
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          Select "Data" to create a color-coded data map. To create a navigation-only map, select
                          "Navigation."
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  </>
                }
                value={state.general.type}
                options={[
                  { value: 'data', label: 'Data' },
                  ...(state.general.geoType === 'us-county' ? [{ value: 'us-geocode', label: 'Geocode' }] : []),
                  ...(state.general.geoType === 'world' ? [{ value: 'world-geocode', label: 'Geocode' }] : []),
                  ...(state.general.geoType !== 'us-county' ? [{ value: 'navigation', label: 'Navigation' }] : []),
                  ...(state.general.geoType === 'world' || state.general.geoType === 'us'
                    ? [{ value: 'bubble', label: 'Bubble' }]
                    : [])
                ]}
                onChange={event => {
                  handleEditorChanges('editorMapType', event.target.value)
                }}
              />

              {/* Navigation Behavior */}
              {(state.general.type === 'navigation' || state.general.type === 'data') && (
                <Select
                  label='Navigation Behavior'
                  value={state.general.navigationTarget}
                  options={[
                    { value: '_self', label: 'Same Window' },
                    { value: '_blank', label: 'New Window' }
                  ]}
                  onChange={event => {
                    handleEditorChanges('navigationTarget', event.target.value)
                  }}
                />
              )}
              <label>
                <span className='edit-label'>Data Classification Type</span>
                <div>
                  <label>
                    <input
                      type='radio'
                      name='equalnumber'
                      value='equalnumber'
                      checked={state.legend.type === 'equalnumber' || state.legend.type === 'equalinterval'}
                      onChange={e => handleEditorChanges('classificationType', e.target.value)}
                    />
                    Numeric/Quantitative
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='category'
                      value='category'
                      checked={state.legend.type === 'category'}
                      onChange={e => handleEditorChanges('classificationType', e.target.value)}
                    />
                    Categorical
                  </label>
                </div>
              </label>

              <HexSetting.DisplayAsHexMap state={state} setState={setState} handleEditorChanges={handleEditorChanges} />
              <HexSetting.DisplayShapesOnHex state={state} setState={setState} />
              <HexSetting.ShapeColumns state={state} setState={setState} columnsOptions={columnsOptions} />

              {'us' === state.general.geoType &&
                'bubble' !== state.general.type &&
                false === state.general.displayAsHex && (
                  <CheckBox
                    label='Show state labels'
                    checked={state.general.displayStateLabels}
                    onChange={event => {
                      handleEditorChanges('displayStateLabels', event.target.checked)
                    }}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Recommended set to display for Section 508 compliance.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                )}

              {'us' === state.general.geoType && (
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={general.territoriesAlwaysShow || false}
                    onChange={event => {
                      handleEditorChanges('territoriesAlwaysShow', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Show All Territories</span>
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
                data-testid='title-input'
                updateField={updateField}
                section='general'
                fieldName='title'
                id='title'
                label='Title'
                placeholder='Map Title'
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Title is required to set the name of the download file but can be hidden using the option below.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
              <label className='checkbox'>
                <input
                  type='checkbox'
                  checked={state.general.showTitle || false}
                  onChange={event => {
                    handleEditorChanges('showTitle', event.target.checked)
                  }}
                />
                <span className='edit-label'>Show Title</span>
              </label>
              <TextField
                value={general.superTitle || ''}
                updateField={updateField}
                section='general'
                fieldName='superTitle'
                label='Super Title'
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
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
                label='Message'
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
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
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Enter supporting text to display below the data visualization, if applicable. The following HTML
                        tags are supported: strong, em, sup, and sub.
                      </p>
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
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>Footnotes</p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />

              {/* <label className="checkbox mt-4">
                    <input type="checkbox" checked={ state.general.showDownloadMediaButton } onChange={(event) => { handleEditorChanges("toggleDownloadMediaButton", event.target.checked) }} />
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
                    value={state.columns.geo ? state.columns.geo.name : columnsOptions[0]}
                    options={columnsOptions.map(c => c.key)}
                    onChange={event => {
                      editColumn('geo', 'name', event.target.value)
                    }}
                  />
                </label>
                {state.general.type === 'us-geocode' && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={state.general.convertFipsCodes}
                      onChange={event => {
                        setState({
                          ...state,
                          general: {
                            ...state.general,
                            convertFipsCodes: event.target.checked
                          }
                        })
                      }}
                    />
                    <span className='edit-label'>Convert FIPS Codes to Geography Name</span>
                  </label>
                )}

                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.general.hideGeoColumnInTooltip || false}
                    onChange={event => {
                      handleEditorChanges('hideGeoColumnInTooltip', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Hide Geography Column Name in Tooltip</span>
                </label>
                <TextField
                  value={state.general.geoLabelOverride}
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
              </fieldset>
              {'navigation' !== state.general.type && (
                <fieldset className='primary-fieldset edit-block'>
                  <Select
                    label='Data Column'
                    value={columns.primary.name}
                    options={columnsOptions.map(c => c.key)}
                    onChange={event => {
                      const _state = _.cloneDeep(state)
                      _state.columns.primary.name = event.target.value
                      _state.columns.primary.label = event.target.value
                      setState(_state)
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
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={state.general.hidePrimaryColumnInTooltip || false}
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
                    <li>
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={state.columns.primary.useCommas}
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
                          checked={state.columns.primary.dataTable || false}
                          onChange={event => {
                            editColumn('primary', 'dataTable', event.target.checked)
                          }}
                        />
                        <span className='edit-label'>Show in Data Table</span>
                      </label>
                    </li>
                    <li>
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={state.columns.primary.tooltip || false}
                          onChange={event => {
                            editColumn('primary', 'tooltip', event.target.checked)
                          }}
                        />
                        <span className='edit-label'>Show in Tooltips</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
              )}

              {state.general.type === 'bubble' && state.legend.type === 'category' && (
                <fieldset className='primary-fieldset edit-block'>
                  <label>
                    <span className='edit-label column-heading'>
                      Category Column
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Select the source column containing the categorical bubble values to be mapped.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                    <select
                      value={state.columns.categorical ? state.columns.categorical.name : columnsOptions[0]}
                      onChange={event => {
                        editColumn('categorical', 'name', event.target.value)
                      }}
                    >
                      {columnsOptions}
                    </select>
                  </label>
                </fieldset>
              )}
              {
                <>
                  <Select
                    label='Latitude Column'
                    value={state.columns.latitude.name}
                    options={columnsOptions.map(c => c.key)}
                    onChange={e => {
                      editColumn('latitude', 'name', e.target.value)
                    }}
                  />
                  <Select
                    label='Longitude Column'
                    value={state.columns.longitude.name}
                    options={columnsOptions.map(c => c.key)}
                    onChange={e => {
                      editColumn('longitude', 'name', e.target.value)
                    }}
                  />
                </>
              }

              {'navigation' !== state.general.type && (
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
                            For secondary values such as "NA", the system can automatically color-code them in shades of
                            gray, one shade for each special class.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                  </label>
                  {state.legend.specialClasses.length === 2 && (
                    <Alert
                      type='info'
                      message='If a third special class is needed you can apply a pattern to set it apart.'
                      showCloseButton={false}
                    />
                  )}
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
                            editColumn('primary', 'specialClassEdit', {
                              prop: 'value',
                              index: i,
                              value: e.target.value
                            })
                          }}
                        >
                          <option value=''>- Select Value -</option>
                          {columnsByKey[specialClass.key] &&
                            columnsByKey[specialClass.key]
                              .sort()
                              .map(option => (
                                <option key={`special-class-value-option-${i}-${option}`}>{option}</option>
                              ))}
                        </select>
                      </label>
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
                    </div>
                  ))}
                  {state.legend.specialClasses.length < 2 && (
                    <button
                      className='btn btn-primary full-width'
                      onClick={e => {
                        e.preventDefault()
                        editColumn('primary', 'specialClassAdd', {})
                      }}
                    >
                      Add Special Class
                    </button>
                  )}
                </fieldset>
              )}

              <label className='edit-block navigate column-heading'>
                <span className='edit-label column-heading'>
                  Navigation
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        To provide end users with navigation functionality, select the source column containing the
                        navigation URLs.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                </span>
                <Select
                  value={state.columns.navigate ? state.columns.navigate.name : ''}
                  options={columnsOptions.map(c => c.key)}
                  onChange={event => {
                    editColumn('navigate', 'name', event.target.value)
                  }}
                />
              </label>
              {'navigation' !== state.general.type && (
                <fieldset className='primary-fieldset edit-block'>
                  <label>
                    <span className='edit-label'>
                      Additional Columns
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            You can specify additional columns to display in tooltips and / or the supporting data
                            table.
                          </p>
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
                          value={state.columns[val] ? state.columns[val].name : columnsOptions[0]}
                          onChange={event => {
                            editColumn(val, 'name', event.target.value)
                          }}
                        >
                          {columnsOptions}
                        </select>
                      </label>
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
                        <li>
                          <label className='checkbox'>
                            <input
                              type='checkbox'
                              checked={state.columns[val].useCommas}
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
                              checked={state.columns[val].dataTable}
                              onChange={event => {
                                editColumn(val, 'dataTable', event.target.checked)
                              }}
                            />
                            <span className='edit-label'>Show in Data Table</span>
                          </label>
                        </li>
                        <li>
                          <label className='checkbox'>
                            <input
                              type='checkbox'
                              checked={state.columns[val].tooltip}
                              onChange={event => {
                                editColumn(val, 'tooltip', event.target.checked)
                              }}
                            />
                            <span className='edit-label'>Show in Tooltips</span>
                          </label>
                        </li>
                      </ul>
                    </fieldset>
                  ))}
                  <button
                    className={'btn btn-primary full-width'}
                    onClick={event => {
                      event.preventDefault()
                      addAdditionalColumn(additionalColumns.length + 1)
                    }}
                  >
                    Add Column
                  </button>
                </fieldset>
              )}
              {'category' === state.legend.type && (
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
                  {state.legend.additionalCategories &&
                    state.legend.additionalCategories.map((val, i) => (
                      <fieldset className='edit-block' key={val}>
                        <button
                          className='remove-column'
                          onClick={event => {
                            event.preventDefault()
                            const updatedAdditionaCategories = [...state.legend.additionalCategories]
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
                              const updatedAdditionaCategories = [...state.legend.additionalCategories]
                              updatedAdditionaCategories[i] = value
                              updateField(section, subsection, fieldName, updatedAdditionaCategories)
                            }}
                          />
                        </label>
                      </fieldset>
                    ))}
                  <button
                    className={'btn btn-primary full-width'}
                    onClick={event => {
                      event.preventDefault()
                      const updatedAdditionaCategories = [...(state.legend.additionalCategories || [])]
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
          {'navigation' !== state.general.type && (
            <AccordionItem>
              {' '}
              {/* Legend */}
              <AccordionItemHeading>
                <AccordionItemButton>Legend</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {(state.legend.type === 'equalnumber' || state.legend.type === 'equalinterval') && (
                  <Select
                    label='Legend Type'
                    value={legend.type}
                    options={[
                      { value: 'equalnumber', label: 'Equal Number (Quantiles)' },
                      { value: 'equalinterval', label: 'Equal Interval' }
                    ]}
                    onChange={event => {
                      handleEditorChanges('legendType', event.target.value)
                    }}
                  />
                )}
                {'navigation' !== state.general.type && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={state.general.showSidebar || false}
                      onChange={event => {
                        handleEditorChanges('showSidebar', event.target.checked)
                      }}
                    />
                    <span className='edit-label'>Show Legend</span>
                  </label>
                )}
                {'navigation' !== state.general.type && (
                  <>
                    <Select
                      label='Legend Position'
                      value={legend.position || ''}
                      options={[
                        { value: 'side', label: 'Side' },
                        { value: 'bottom', label: 'Bottom' },
                        { value: 'top', label: 'Top' }
                      ]}
                      onChange={event => {
                        handleEditorChanges('sidebarPosition', event.target.value)
                      }}
                    />
                    {(state.legend.position === 'side' || !state.legend.position) &&
                      state.legend.style === 'gradient' && (
                        <span style={{ color: 'red', fontSize: '14px' }}>
                          Position must be set to top or bottom to use gradient style.
                        </span>
                      )}
                  </>
                )}
                {'navigation' !== state.general.type && (
                  <Select
                    label={
                      <>
                        Legend Style
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon
                              display='question'
                              style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                            />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              If using gradient style, limit the legend to five items for better mobile visibility, and
                              position the legend at the top or bottom.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      </>
                    }
                    value={legend.style || ''}
                    options={[
                      { value: 'circles', label: 'circles' },
                      { value: 'boxes', label: 'boxes' },
                      ...(legend.position !== 'side' ? [{ value: 'gradient', label: 'gradient' }] : [])
                    ]}
                    onChange={event => {
                      handleEditorChanges('legendStyle', event.target.value)
                    }}
                  />
                )}
                {'navigation' !== state.general.type && state.legend.style === 'gradient' && (
                  <label>
                    <span className='edit-label'>Gradient Style</span>
                    <select
                      value={legend.subStyle || ''}
                      onChange={event => {
                        handleEditorChanges('legendSubStyle', event.target.value)
                      }}
                    >
                      <option value='linear blocks'>linear blocks</option>
                      <option value='smooth'>smooth</option>
                    </select>
                  </label>
                )}
                {'navigation' !== state.general.type && state.legend.style === 'gradient' && (
                  <label>
                    <span className='edit-label'>Tick Rotation (Degrees)</span>
                    <input
                      type='number'
                      className='number-narrow'
                      value={legend.tickRotation || ''}
                      onChange={event => {
                        handleEditorChanges('legendTickRotation', event.target.value)
                      }}
                    ></input>
                  </label>
                )}
                {
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={legend.hideBorder}
                      onChange={event => {
                        handleEditorChanges('legendBorder', event.target.checked)
                      }}
                    />
                    <span className='edit-label column-heading'>Hide Legend Box</span>
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon
                          display='question'
                          style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                        />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p> Default option for top and bottom legends is ‘No Box.’</p>
                      </Tooltip.Content>
                    </Tooltip>
                  </label>
                }
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
                {'side' !== legend.position && legend.style !== 'gradient' && (
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
                {state.legend.style !== 'gradient' && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={legend.verticalSorted}
                      onChange={event => {
                        handleEditorChanges('verticalSortedLegend', event.target.checked)
                      }}
                    />
                    <span className='edit-label'>Vertical sorted legend</span>
                  </label>
                )}

                {/* always show */}
                {
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={legend.showSpecialClassesLast}
                      onChange={event => {
                        handleEditorChanges('legendShowSpecialClassesLast', event.target.checked)
                      }}
                    />
                    <span className='edit-label'>Show Special Classes Last</span>
                  </label>
                }
                {'category' !== legend.type && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={legend.separateZero || false}
                      onChange={event => handleEditorChanges('separateZero', event.target.checked)}
                    />
                    <span className='edit-label column-heading'>
                      Separate Zero
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>For numeric data, you can separate the zero value as its own data class.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                  </label>
                )}
                {/* Temp Checkbox */}
                {state.legend.type === 'equalnumber' && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={state.general.equalNumberOptIn}
                      onChange={event => {
                        handleEditorChanges('showEqualNumber', event.target.checked)
                      }}
                    />
                    <span className='edit-label column-heading'>Use new quantile legend</span>
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon
                          display='question'
                          style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                        />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>This prevents numbers from being used in more than one category (ie. 0-1, 1-2, 2-3) </p>
                      </Tooltip.Content>
                    </Tooltip>
                  </label>
                )}
                {'category' !== legend.type && (
                  <Select
                    label={
                      <>
                        Number of Items
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              For numeric maps, select the number of data classes. Do not include designated special
                              classes.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      </>
                    }
                    value={legend.numberOfItems}
                    options={[...Array(numberOfItemsLimit).keys()].map(num => ({
                      value: num + 1,
                      label: num + 1
                    }))}
                    onChange={event => {
                      handleEditorChanges('legendNumber', event.target.value)
                    }}
                  />
                )}
                {'category' === legend.type && (
                  <React.Fragment>
                    <label>
                      <span className='edit-label'>
                        Category Order
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Drag map categories into preferred legend order. </p>
                          </Tooltip.Content>
                        </Tooltip>
                      </span>
                    </label>
                    {/* TODO: Swap out this drag and drop library back to something simpler. I had to remove the old one because it hadn't been updated and wouldn't work with Webpack 5. This is overkill for our needs. */}
                    <DragDropContext
                      onDragEnd={({ source, destination }) => categoryMove(source.index, destination.index)}
                    >
                      <Droppable droppableId='category_order'>
                        {provided => (
                          <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef}>
                            <CategoryList />
                            {provided.placeholder}
                          </ul>
                        )}
                      </Droppable>
                    </DragDropContext>
                    {runtimeLegend && runtimeLegend.length >= 10 && (
                      <section className='error-box my-2'>
                        <div>
                          <strong className='pt-1'>Warning</strong>
                          <p>
                            The maximum number of categorical legend items is 10. If your data has more than 10
                            categories your map will not display properly.
                          </p>
                        </div>
                      </section>
                    )}
                  </React.Fragment>
                )}
                <TextField
                  value={legend.title}
                  updateField={updateField}
                  section='legend'
                  fieldName='title'
                  label='Legend Title'
                  placeholder='Legend Title'
                />
                {false === legend.dynamicDescription && (
                  <TextField
                    type='textarea'
                    value={legend.description}
                    updateField={updateField}
                    section='legend'
                    fieldName='description'
                    label='Legend Description'
                  />
                )}
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
                {state.filters.length > 0 && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={legend.dynamicDescription}
                      onChange={() => {
                        handleEditorChanges('dynamicDescription', filterValueOptionList[0])
                      }}
                    />
                    <span className='edit-label column-heading'>
                      Dynamic Legend Description
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            Check this option if the map has multiple filter controls and you want to specify a
                            description for each filter selection.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                  </label>
                )}
                {(state.filters.length > 0 || state.general.type === 'bubble' || state.general.geoType === 'us') && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={legend.unified}
                      onChange={event => handleEditorChanges('unifiedLegend', event.target.checked)}
                    />
                    <span className='edit-label column-heading'>
                      Unified Legend
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon
                            display='question'
                            style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                          />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            For a map with filters, check this option if you want the high and low values in the legend
                            to be based on <em>all</em> mapped values.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                  </label>
                )}
              </AccordionItemPanel>
            </AccordionItem>
          )}
          {'navigation' !== state.general.type && (
            <>
              <AccordionItem>
                {/* Filters */}
                <AccordionItemHeading>
                  <AccordionItemButton>Filters</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <VizFilterEditor
                    config={state}
                    updateField={updateField}
                    rawData={state.data}
                    hasFootnotes={isDashboard}
                  />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Footnotes</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <FootnotesEditor config={state} updateField={updateField} datasets={datasets} />
                </AccordionItemPanel>
              </AccordionItem>
            </>
          )}
          {'navigation' !== state.general.type && (
            <AccordionItem>
              {' '}
              {/* Data Table */}
              <AccordionItemHeading>
                <AccordionItemButton>Data Table</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <TextField
                  value={table.label}
                  updateField={updateField}
                  section='table'
                  fieldName='label'
                  id='dataTableTitle'
                  label='Data Table Title'
                  placeholder='Data Table'
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>Label is required for Data Table for 508 Compliance</p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.table.wrapColumns}
                    onChange={event => {
                      setState({
                        ...state,
                        table: {
                          ...state.table,
                          wrapColumns: event.target.checked
                        }
                      })
                    }}
                  />
                  <span className='edit-label column-heading'>WRAP DATA TABLE COLUMNS</span>
                </label>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.table.forceDisplay !== undefined ? state.table.forceDisplay : !isDashboard}
                    onChange={event => {
                      handleEditorChanges('showDataTable', event.target.checked)
                    }}
                  />
                  <span className='edit-label column-heading'>
                    Show Data Table
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon
                          display='question'
                          style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                        />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          Data tables are required for 508 compliance. When choosing to hide this data table, replace
                          with your own version.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  </span>
                </label>
                <TextField
                  value={table.indexLabel || ''}
                  updateField={updateField}
                  section='table'
                  fieldName='indexLabel'
                  label='Index Column Header'
                  placeholder='Location'
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          To comply with 508 standards, if the first column in the data table has no header, enter a
                          brief one here.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />
                <TextField
                  value={state.table.caption}
                  updateField={updateField}
                  section='table'
                  fieldName='caption'
                  label='Screen Reader Description'
                  placeholder='Data Table'
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
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
                    checked={state.table.limitHeight}
                    onChange={event => {
                      handleEditorChanges('limitDataTableHeight', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Limit Table Height</span>
                </label>
                {state.table.limitHeight && (
                  <TextField
                    value={table.height}
                    updateField={updateField}
                    section='table'
                    fieldName='height'
                    label='Data Table Height'
                    placeholder='Height(px)'
                    type='number'
                    min='0'
                    max='500'
                  />
                )}

                <TextField
                  value={table.cellMinWidth}
                  updateField={updateField}
                  section='table'
                  fieldName='cellMinWidth'
                  label='Table Cell Min Width'
                  type='number'
                  min='0'
                  max='500'
                />

                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.table.expanded || false}
                    onChange={event => {
                      handleEditorChanges('expandDataTable', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Map loads with data table expanded</span>
                </label>
                <CheckBox
                  value={state.table.download}
                  fieldName='download'
                  label='Show Download CSV Link'
                  section='table'
                  updateField={updateField}
                />
                {state.table.download && (
                  <>
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        className='ms-4'
                        checked={state.table.showDownloadLinkBelow}
                        onChange={event => {
                          handleEditorChanges('toggleDownloadLinkBelow', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Show Link Below Table</span>
                    </label>
                    <CheckBox
                      value={state.table.downloadVisibleDataOnly}
                      fieldName='downloadVisibleDataOnly'
                      className='ms-4'
                      label='Download only visible data'
                      section='table'
                      updateField={updateField}
                    />
                  </>
                )}
                {isDashboard && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={state.table.showDataTableLink}
                      onChange={event => {
                        handleEditorChanges('toggleDataTableLink', event.target.checked)
                      }}
                    />
                    <span className='edit-label'>Show Data Table Name & Link</span>
                  </label>
                )}
                {isLoadedFromUrl && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={state.table.showDownloadUrl}
                      onChange={event => {
                        handleEditorChanges('toggleDataUrl', event.target.checked)
                      }}
                    />
                    <span className='edit-label'>Show URL to Automatically Updated Data</span>
                  </label>
                )}
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.general.showFullGeoNameInCSV}
                    onChange={event => {
                      handleEditorChanges('toggleShowFullGeoNameInCSV', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Include Full Geo Name in CSV Download</span>
                </label>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.general.showDownloadImgButton}
                    onChange={event => {
                      handleEditorChanges('toggleDownloadImgButton', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Enable Image Download</span>
                </label>

                {/* <label className='checkbox'>
                      <input
                        type='checkbox'
                        checked={state.general.showDownloadPdfButton}
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
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>At mobile sizes, information always appears in a popover modal when a user taps on an item.</p>
                    </Tooltip.Content>
                  </Tooltip>
                </span>
                <select
                  value={state.tooltips.appearanceType}
                  onChange={event => {
                    handleEditorChanges('appearanceType', event.target.value)
                  }}
                >
                  <option value='hover'>Hover - Tooltip</option>
                  <option value='click'>Click - Popover Modal</option>
                </select>
              </label>
              {'click' === state.tooltips.appearanceType && (
                <TextField
                  value={tooltips.linkLabel}
                  section='tooltips'
                  fieldName='linkLabel'
                  label='Tooltips Link Label'
                  updateField={updateField}
                />
              )}
              <label className='checkbox'>
                <input
                  type='checkbox'
                  checked={state.tooltips.capitalizeLabels}
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
                  {HEADER_COLORS.map(palette => {
                    return (
                      <li
                        title={palette}
                        key={palette}
                        onClick={() => {
                          handleEditorChanges('headerColor', palette)
                        }}
                        className={state.general.headerColor === palette ? 'selected ' + palette : palette}
                      ></li>
                    )
                  })}
                </ul>
              </label>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  checked={state.general.showTitle || false}
                  onChange={event => {
                    handleEditorChanges('showTitle', event.target.checked)
                  }}
                />
                <span className='edit-label'>Show Title</span>
              </label>

              {'navigation' === state.general.type && (
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.general.fullBorder || false}
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
                  value={state.general.geoBorderColor || false}
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
              <InputToggle
                type='3d'
                section='general'
                subsection='palette'
                fieldName='isReversed'
                size='small'
                label='Use selected palette in reverse order'
                onClick={() => {
                  const _state = _.cloneDeep(state)
                  _state.general.palette.isReversed = !_state.general.palette.isReversed
                  let paletteName = ''
                  if (_state.general.palette.isReversed && !state.color.endsWith('reverse')) {
                    paletteName = state.color + 'reverse'
                  }
                  if (!_state.general.palette.isReversed && state.color.endsWith('reverse')) {
                    paletteName = state.color.slice(0, -7)
                  }
                  if (paletteName) {
                    _state.color = paletteName
                  }
                  setState(_state)
                }}
                value={state.general.palette.isReversed}
              />
              <span>Sequential</span>
              <ul className='color-palette'>
                {sequential.map(palette => {
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
                      className={state.color === palette ? 'selected' : ''}
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
                {nonSequential.map(palette => {
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
                  if (colorPalettes[palette].length <= 8 && state.general.geoType === 'us-region') {
                    return ''
                  }
                  return (
                    <li
                      title={palette}
                      key={palette}
                      onClick={() => {
                        handleEditorChanges('color', palette)
                      }}
                      className={state.color === palette ? 'selected' : ''}
                    >
                      <span style={colorOne}></span>
                      <span style={colorTwo}></span>
                      <span style={colorThree}></span>
                    </li>
                  )
                })}
              </ul>
              <span>Colorblind Safe</span>
              <ul className='color-palette'>
                {accessibleColors.map(palette => {
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
                  if (colorPalettes[palette].length <= 8 && state.general.geoType === 'us-region') {
                    return ''
                  }
                  return (
                    <li
                      title={palette}
                      key={palette}
                      onClick={() => {
                        handleEditorChanges('color', palette)
                      }}
                      className={state.color === palette ? 'selected' : ''}
                    >
                      <span style={colorOne}></span>
                      <span style={colorTwo}></span>
                      <span style={colorThree}></span>
                    </li>
                  )
                })}
              </ul>
              <label>
                Geocode Settings
                <TextField
                  type='number'
                  value={state.visual.geoCodeCircleSize}
                  section='visual'
                  max='10'
                  fieldName='geoCodeCircleSize'
                  label='Geocode Circle Size'
                  updateField={updateField}
                />
              </label>

              {state.general.type === 'bubble' && (
                <>
                  <TextField
                    type='number'
                    value={state.visual.minBubbleSize}
                    section='visual'
                    fieldName='minBubbleSize'
                    label='Minimum Bubble Size'
                    updateField={updateField}
                  />
                  <TextField
                    type='number'
                    value={state.visual.maxBubbleSize}
                    section='visual'
                    fieldName='maxBubbleSize'
                    label='Maximum Bubble Size'
                    updateField={updateField}
                  />
                </>
              )}
              {(state.general.geoType === 'world' ||
                (state.general.geoType === 'us' && state.general.type === 'bubble')) && (
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.visual.showBubbleZeros}
                    onChange={event => {
                      handleEditorChanges('showBubbleZeros', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Show Data with Zero's on Bubble Map</span>
                </label>
              )}
              {(state.general.geoType === 'world' || state.general.geoType === 'single-state') && (
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.general.allowMapZoom}
                    onChange={event => {
                      handleEditorChanges('allowMapZoom', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Allow Map Zooming</span>
                </label>
              )}
              {state.general.type === 'bubble' && (
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={state.visual.extraBubbleBorder}
                    onChange={event => {
                      handleEditorChanges('toggleExtraBubbleBorder', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Bubble Map has extra border</span>
                </label>
              )}
              {(state.general.geoType === 'us' ||
                state.general.geoType === 'us-county' ||
                state.general.geoType === 'world') && (
                <>
                  <label>
                    <span className='edit-label'>Default City Style</span>
                    <select
                      value={state.visual.cityStyle || false}
                      onChange={event => {
                        handleEditorChanges('handleCityStyle', event.target.value)
                      }}
                    >
                      <option value='circle'>Circle</option>
                      <option value='pin'>Pin</option>
                      <option value='square'>Square</option>
                      <option value='triangle'>Triangle</option>
                      <option value='diamond'>Diamond</option>
                      <option value='star'>Star</option>
                    </select>
                  </label>
                  <TextField
                    value={state.visual.cityStyleLabel}
                    section='visual'
                    fieldName='cityStyleLabel'
                    label='Label (Optional) '
                    updateField={updateField}
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>When a label is provided, the default city style will appear in the legend.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                </>
              )}
              {/* <AdditionalCityStyles /> */}
              <>
                {state.visual.additionalCityStyles.length > 0 &&
                  state.visual.additionalCityStyles.map(({ label, column, value, shape }, i) => {
                    return (
                      <div className='edit-block' key={`additional-city-style-${i}`}>
                        <button
                          className='remove-column'
                          onClick={e => {
                            e.preventDefault()
                            editCityStyles('remove', i, '', '')
                          }}
                        >
                          Remove
                        </button>
                        <p>City Style {i + 1}</p>
                        <label>
                          <span className='edit-label column-heading'>Column with configuration value</span>
                          <select
                            value={column}
                            onChange={e => {
                              editCityStyles('update', i, 'column', e.target.value)
                            }}
                          >
                            {columnsOptions}
                          </select>
                        </label>
                        <label>
                          <span className='edit-label column-heading'>Value to Trigger</span>
                          <input
                            type='text'
                            value={value}
                            onChange={e => {
                              editCityStyles('update', i, 'value', e.target.value)
                            }}
                          ></input>
                        </label>
                        <label>
                          <span className='edit-label column-heading'>Shape</span>
                          <select
                            value={shape}
                            onChange={e => {
                              editCityStyles('update', i, 'shape', e.target.value)
                            }}
                          >
                            {getCityStyleOptions('value')}
                          </select>
                        </label>
                        <label>
                          <span className='edit-label column-heading'>Label</span>
                          <input
                            key={i}
                            type='text'
                            value={label}
                            onChange={e => {
                              editCityStyles('update', i, 'label', e.target.value)
                            }}
                          />
                        </label>
                      </div>
                    )
                  })}

                <button
                  type='button'
                  onClick={() => editCityStyles('add', 0, '', '')}
                  className='btn btn-primary full-width'
                >
                  Add city style
                </button>
              </>
              <label htmlFor='opacity'>
                <TextField
                  type='number'
                  min={0}
                  max={100}
                  value={state.tooltips.opacity ? state.tooltips.opacity : 100}
                  section='tooltips'
                  fieldName='opacity'
                  label='Tooltip Opacity (%)'
                  updateField={updateField}
                />
              </label>
              {/* Leaflet Map Type */}
              {state.general.geoType === 'leaflet' && (
                <>
                  <Select
                    label='Leaflet Theme'
                    options={layerOptions}
                    section={'leaflet'}
                    fieldName='theme'
                    updateField={updateField}
                  />
                </>
              )}
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Custom Map Layers</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {state.map.layers.length === 0 && <p>There are currently no layers.</p>}

              {state.map.layers.map((layer, index) => {
                return (
                  <>
                    <Accordion allowZeroExpanded>
                      <AccordionItem className='series-item map-layers-list'>
                        <AccordionItemHeading className='series-item__title map-layers-list--title'>
                          <AccordionItemButton>{`Layer ${index + 1}: ${layer.name}`}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='map-layers-panel'>
                            <label htmlFor='layerName'>Layer Name:</label>
                            <input
                              type='text'
                              name='layerName'
                              value={layer.name}
                              onChange={e => handleMapLayer(e, index, 'name')}
                            />
                            <label htmlFor='layerFilename'>File:</label>
                            <input
                              type='text'
                              name='layerFilename'
                              value={layer.url}
                              onChange={e => handleMapLayer(e, index, 'url')}
                            />
                            <label htmlFor='layerNamespace'>TOPOJSON Namespace:</label>
                            <input
                              type='text'
                              name='layerNamespace'
                              value={layer.namespace}
                              onChange={e => handleMapLayer(e, index, 'namespace')}
                            />
                            <label htmlFor='layerFill'>Fill Color:</label>
                            <input
                              type='text'
                              name='layerFill'
                              value={layer.fill}
                              onChange={e => handleMapLayer(e, index, 'fill')}
                            />
                            <label htmlFor='layerFill'>Fill Opacity (%):</label>
                            <input
                              type='number'
                              min={0}
                              max={100}
                              name='layerFill'
                              value={layer.fillOpacity ? layer.fillOpacity * 100 : ''}
                              onChange={e => handleMapLayer(e, index, 'fillOpacity')}
                            />
                            <label htmlFor='layerStroke'>Stroke Color:</label>
                            <input
                              type='text'
                              name='layerStroke'
                              value={layer.stroke}
                              onChange={e => handleMapLayer(e, index, 'stroke')}
                            />
                            <label htmlFor='layerStroke'>Stroke Width:</label>
                            <input
                              type='number'
                              min={0}
                              max={5}
                              name='layerStrokeWidth'
                              value={layer.strokeWidth}
                              onChange={e => handleMapLayer(e, index, 'strokeWidth')}
                            />
                            <label htmlFor='layerTooltip'>Tooltip:</label>
                            <textarea
                              name='layerTooltip'
                              value={layer.tooltip}
                              onChange={e => handleMapLayer(e, index, 'tooltip')}
                            ></textarea>
                            <button onClick={e => handleRemoveLayer(e, index)}>Remove Layer</button>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </>
                )
              })}
              <button className={'btn btn-primary full-width'} onClick={handleAddLayer}>
                Add Map Layer
              </button>
              <p className='layer-purpose-details'>
                Context should be added to your visualization or associated page to describe the significance of layers
                that are added to maps.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          {state.general.geoType === 'us' && <Panels.PatternSettings name='Pattern Settings' />}
          {state.general.geoType !== 'us-county' && <Panels.Annotate name='Text Annotations' />}
        </Accordion>
        <AdvancedEditor loadConfig={loadConfig} config={state} convertStateToConfig={convertStateToConfig} />
      </Layout.Sidebar>
    </ErrorBoundary>
  )
}

export default EditorPanel
