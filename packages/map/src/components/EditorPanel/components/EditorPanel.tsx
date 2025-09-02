import React, { useContext, useEffect, useState, useMemo } from 'react'
import { filterColorPalettes } from '@cdc/core/helpers/filterColorPalettes'

// Third Party
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { useDebounce } from 'use-debounce'
import _ from 'lodash'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Panels from './Panels'
import Layout from '@cdc/core/components/Layout'

// Data
import { mapColorPalettes as colorPalettes } from '@cdc/core/data/colorPalettes'
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
import ConfigContext, { MapDispatchContext } from '../../../context.ts'
import { MapContext } from '../../../types/MapContext.js'
import Alert from '@cdc/core/components/Alert'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import useColumnsRequiredChecker from '../../../hooks/useColumnsRequiredChecker'
import { addUIDs, HEADER_COLORS } from '../../../helpers'
import './editorPanel.styles.css'
import FootnotesEditor from '@cdc/core/components/EditorPanel/FootnotesEditor'
import { Datasets } from '@cdc/core/types/DataSet'
import MultiSelect from '@cdc/core/components/MultiSelect'
import { migratePaletteName } from '@cdc/core/helpers/migratePaletteName'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'
import PaletteConversionModal from '@cdc/core/components/PaletteConversionModal'

type MapEditorPanelProps = {
  datasets?: Datasets
}

const EditorPanel: React.FC<MapEditorPanelProps> = ({ datasets }) => {
  const {
    setParentConfig,
    isDashboard,
    isEditor,
    loadConfig,
    runtimeFilters,
    runtimeLegend,
    setConfig,
    config,
    tooltipId,
    runtimeData,
    setRuntimeData
  } = useContext<MapContext>(ConfigContext)

  const { columnsRequiredChecker } = useColumnsRequiredChecker()
  const dispatch = useContext(MapDispatchContext)
  const { general, columns, legend, table, tooltips } = config
  const columnsInData = config?.data?.[0] ? Object.keys(config.data[0]) : []

  const [loadedDefault, setLoadedDefault] = useState(false)
  const [displayPanel, setDisplayPanel] = useState(true)
  const [activeFilterValueForDescription, setActiveFilterValueForDescription] = useState([0, 0])
  const [showConversionModal, setShowConversionModal] = useState(false)
  const [pendingPaletteSelection, setPendingPaletteSelection] = useState<{
    palette: string
    action: () => void
  } | null>(null)

  const {
    MapLayerHandlers: { handleMapLayer, handleAddLayer, handleRemoveLayer }
  } = useMapLayers(config, setConfig, false, tooltipId)

  useEffect(() => {
    // Pass up to Editor if needed
    if (setParentConfig) {
      setParentConfig(convertStateToConfig())
    }
  }, [config])

  const categoryMove = (idx1, idx2) => {
    let categoryValuesOrder = getCategoryValuesOrder()
    let [movedItem] = categoryValuesOrder.splice(idx1, 1)
    categoryValuesOrder.splice(idx2, 0, movedItem)
    config.legend.categoryValuesOrder?.forEach(value => {
      if (categoryValuesOrder.indexOf(value) === -1) {
        categoryValuesOrder.push(value)
      }
    })

    setConfig({
      ...config,
      legend: {
        ...config.legend,
        categoryValuesOrder
      }
    })
  }

  let specialClasses = []
  if (legend.specialClasses && legend.specialClasses.length && typeof legend.specialClasses[0] === 'string') {
    legend.specialClasses.forEach(specialClass => {
      specialClasses.push({
        key: config.columns.primary && config.columns.primary.name ? config.columns.primary.name : columnsInData[0],
        value: specialClass,
        label: specialClass
      })
    })
    // DEV-3303 - since the above was a repair of bad config - need to backpopulate into the state
    setConfig({
      ...config,
      legend: {
        ...config.legend,
        specialClasses: specialClasses
      }
    })
  } else {
    specialClasses = legend.specialClasses || []
  }

  const allowLegendSeparators = legend.style === 'gradient' && legend.subStyle === 'linear blocks'

  const getCityStyleOptions = target => {
    switch (target) {
      case 'value': {
        const values = ['Circle', 'Square', 'Triangle', 'Diamond', 'Star', 'Pin']
        const filteredValues = values.filter(
          val => String(config.visual.cityStyle).toLocaleLowerCase() !== val.toLocaleLowerCase()
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
        const additionalCityStyles = config.visual.additionalCityStyles ? [...config.visual.additionalCityStyles] : []
        additionalCityStyles.push({ label: '', column: '', value: '', shape: '' })
        setConfig({
          ...config,
          visual: {
            ...config.visual,
            additionalCityStyles: additionalCityStyles
          }
        })
        break
      }
      case 'remove': {
        let additionalCityStyles = []
        if (config.visual.additionalCityStyles) {
          additionalCityStyles = [...config.visual.additionalCityStyles]
        }

        additionalCityStyles.splice(index, 1)
        setConfig({
          ...config,
          visual: {
            ...config.visual,
            additionalCityStyles: additionalCityStyles
          }
        })
        break
      }
      case 'update': {
        let additionalCityStyles = []
        additionalCityStyles = [...config.visual.additionalCityStyles]
        additionalCityStyles[index][fieldName] = value
        setConfig({
          ...config,
          visual: {
            ...config.visual,
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
      case 'hidePrimaryColumnInTooltip':
        setConfig({
          ...config,
          general: {
            ...config.general,
            [property]: value
          }
        })
        break
      case 'geoLabelOverride':
        setConfig({
          ...config,
          general: {
            ...config.general,
            geoLabelOverride: value
          }
        })
        break
      case 'showTitle':
        setConfig({
          ...config,
          general: {
            ...config.general,
            showTitle: value
          }
        })
        break
      case 'expandDataTable':
        setConfig({
          ...config,
          table: {
            ...config.table,
            expanded: value
          }
        })
        break
      case 'sidebarPosition':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            position: value,
            hideBorder: _.includes(['top', 'bottom'], value)
          }
        })
        break
      case 'legendStyle':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            style: value
          }
        })
        break
      case 'legendSubStyle':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            subStyle: value
          }
        })
        break
      case 'legendGroupBy':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            groupBy: value
          }
        })
        break
      case 'legendTickRotation':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            tickRotation: value
          }
        })
        break
      case 'legendBorder':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            hideBorder: value
          }
        })
        break
      case 'handleCityStyle':
        setConfig({
          ...config,
          visual: {
            ...config.visual,
            cityStyle: value
          }
        })
        break
      case 'geoBorderColor':
        setConfig({
          ...config,
          general: {
            ...config.general,
            geoBorderColor: value
          }
        })
        break
      case 'headerColor':
        setConfig({
          ...config,
          general: {
            ...config.general,
            headerColor: value
          }
        })
        break
      case 'navigateColumn':
        setConfig({
          ...config,
          columns: {
            ...config.columns,
            navigate: {
              ...config.columns.navigate,
              name: value
            }
          }
        })
        break
      case 'legendDescription':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            description: value
          }
        })
        break
      case 'legendNumber':
        setConfig({
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
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            unified: value
          }
        })
        break
      case 'toggleShowFullGeoNameInCSV':
        setConfig({
          ...config,
          table: {
            // setting both bc DataTable new core needs it here
            ...config.table,
            showFullGeoNameInCSV: !config.table.showFullGeoNameInCSV
          }
        })
        break
      case 'toggleDownloadImgButton':
        setConfig({
          ...config,
          general: {
            ...config.general,
            showDownloadImgButton: !config.general.showDownloadImgButton
          }
        })
        break
      case 'toggleDownloadLinkBelow':
        setConfig({
          ...config,
          table: {
            ...config.table,
            showDownloadLinkBelow: !config.table.showDownloadLinkBelow
          }
        })
        break
      case 'toggleDownloadPdfButton':
        setConfig({
          ...config,
          general: {
            ...config.general,
            showDownloadPdfButton: !config.general.showDownloadPdfButton
          }
        })
        break
      case 'editorMapType':
        switch (value) {
          case 'us-geocode':
            setConfig({
              ...config,
              general: {
                ...config.general,
                type: value
              }
            })
            break
          case 'world-geocode':
            setConfig({
              ...config,
              general: {
                ...config.general,
                type: value
              }
            })
            break
          case 'data':
            setConfig({
              ...config,
              general: {
                ...config.general,
                showSidebar: true,
                type: 'data'
              }
            })
            break
          case 'navigation':
            setConfig({
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
            setConfig({
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
            console.warn('COVE: Map type not set') // eslint-disable-line
            break
        }
        break
      case 'geoType':
        addUIDs(config, config.columns.geo.name)
        dispatch({ type: 'SET_POSITION', payload: [0, 30] })

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
            setConfig({
              ...config,
              general: {
                ...config.general,
                geoType: 'us',
                type: config.type === 'us-geocode' ? 'data' : config.type
              },
              table: {
                ...config.table,
                forceDisplay: true
              }
            })
            break
          case 'us-region':
            setConfig({
              ...config,
              general: {
                ...config.general,
                geoType: 'us-region'
              },
              table: {
                ...config.table,
                forceDisplay: true
              }
            })
            break
          case 'world':
            setConfig({
              ...config,
              general: {
                ...config.general,
                geoType: 'world'
              },
              table: {
                ...config.table,
                forceDisplay: true
              }
            })
            break
          case 'us-county':
            setConfig({
              ...config,
              general: {
                ...config.general,
                geoType: 'us-county'
              },
              table: {
                ...config.table,
                expanded: false,
                forceDisplay: true
              }
            })
            break
          case 'single-state':
            setConfig({
              ...config,
              general: {
                ...config.general,
                geoType: 'single-state'
              },
              table: {
                ...config.table,
                expanded: false,
                forceDisplay: true
              }
            })
            break
          case 'google-map':
            setConfig({
              ...config,
              general: {
                ...config.general,
                geoType: 'google-map'
              }
            })
          default:
            break
        }

        break
      case 'verticalSortedLegend':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            verticalSorted: !config.legend.verticalSorted,
            singleRow: false,
            singleColumn: false
          }
        })
        break
      case 'legendShowSpecialClassesLast':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            showSpecialClassesLast: !config.legend.showSpecialClassesLast
          }
        })
        break
      case 'dynamicDescription':
        setConfig({
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
        setConfig({
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
        setConfig({
          ...config,
          tooltips: {
            ...config.tooltips,
            appearanceType: value
          }
        })
        break
      case 'linkLabel':
        setConfig({
          ...config,
          tooltips: {
            ...config.tooltips,
            linkLabel: value
          }
        })
        break
      case 'displayStateLabels':
        setConfig({
          ...config,
          general: {
            ...config.general,
            displayStateLabels: !config.general.displayStateLabels
          }
        })
        break
      case 'showDataTable':
        setConfig({
          ...config,
          table: {
            ...config.table,
            forceDisplay: value
          }
        })
        break
      case 'limitDataTableHeight':
        setConfig({
          ...config,
          table: {
            ...config.table,
            limitHeight: value
          }
        })
        break
      case 'chooseState':
        let stateData = value.map(state => ({
          fipsCode: Object.keys(supportedStatesFipsCodes).find(key => supportedStatesFipsCodes[key] === state),
          stateName: state
        }))

        setConfig({
          ...config,
          general: {
            ...config.general,
            statesPicked: stateData
          }
        })

        if (config) {
          const newData = generateRuntimeData(config)
          setRuntimeData(newData)
        }
        break
      case 'classificationType':
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            type: value
          }
        })
        break
      case 'countyCensusYear':
        setConfig({
          ...config,
          general: {
            ...config.general,
            countyCensusYear: value
          }
        })
        break
      case 'filterControlsCountyYear':
        setConfig({
          ...config,
          general: {
            ...config.general,
            filterControlsCountyYear: value
          }
        })
        break
      case 'filterControlsStatesPicked':
        setConfig({
          ...config,
          general: {
            ...config.general,
            filterControlsStatesPicked: value
          }
        })
        break
      case 'filterBehavior':
        setConfig({
          ...config,
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

  const displayFilterLegendValue = arr => {
    const filterName = config.filters?.[arr?.[0]]?.label || `Unlabeled Legend`

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
    let strippedState = _.cloneDeep(config) // Deep copy

    // Strip ref
    delete strippedState['']

    if (strippedState.columns.geo.name && strippedState.columns.primary.name) {
      delete strippedState.newViz
    }

    // Remove the legend
    let strippedLegend = _.cloneDeep(config.legend)

    delete strippedLegend.disabledAmt

    strippedState.legend = strippedLegend

    // Remove default data marker if the user started this map from default data
    delete strippedState.defaultData

    // Remove tooltips if they're active in the editor
    strippedState.general = _.cloneDeep(config.general)

    // Add columns property back to data if it's there
    if (config.columns) {
      strippedState.columns = config.columns
    }

    return strippedState
  }

  const isReversed = config.general.palette.isReversed

  const { sequential, nonSequential, accessibleColors } = useMemo(
    () => filterColorPalettes({ config, isReversed, colorPalettes }),
    [isReversed, colorPalettes, config.general.palette.version]
  )

  // Helper function to handle palette selection with conversion prompt
  const handlePaletteSelection = (palette: string) => {
    const currentVersion = getColorPaletteVersion(config)
    const isV1Palette =
      currentVersion === 1 || config.general.palette.version === '1.0' || !config.general.palette.version

    const executeSelection = () => {
      const _newConfig = _.cloneDeep(config)
      _newConfig.general.palette.name = migratePaletteName(palette)
      if (isV1Palette) {
        _newConfig.general.palette.version = '2.0'
      }
      setConfig(_newConfig)
    }

    if (isV1Palette) {
      setPendingPaletteSelection({ palette, action: executeSelection })
      setShowConversionModal(true)
    } else {
      executeSelection()
    }
  }

  // Modal handlers
  const handleConversionConfirm = () => {
    if (pendingPaletteSelection) {
      pendingPaletteSelection.action()
    }
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const handleConversionCancel = () => {
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  const handleReturnToV1 = () => {
    if (pendingPaletteSelection) {
      const _newConfig = _.cloneDeep(config)
      _newConfig.general.palette.name = pendingPaletteSelection.palette
      _newConfig.general.palette.version = '1.0'
      setConfig(_newConfig)
    }
    setShowConversionModal(false)
    setPendingPaletteSelection(null)
  }

  // Helper function to determine if a palette should be marked as selected
  const getPaletteClassName = (palette: string) => {
    const currentPaletteName = config.general.palette.name || ''

    // Direct comparison since the UI filters palettes by version
    // When v1 is selected, UI shows v1 palettes; when v2 is selected, UI shows v2 palettes
    return currentPaletteName === palette ? 'selected' : ''
  }

  useEffect(() => {
    setLoadedDefault(config.defaultData)
    columnsRequiredChecker()
  }, [config])

  useEffect(() => {
    const newConfig = convertStateToConfig()
    if (isEditor && setParentConfig) {
      setParentConfig(newConfig)
    }
  }, [config])

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

    return true !== defaultCols.includes(value)
  })

  const updateField = updateFieldFactory(config, setConfig)

  const onBackClick = () => {
    setDisplayPanel(!displayPanel)
    setConfig({
      ...config,
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

  const getCategoryValuesOrder = (): string[] | [] => {
    let values =
      runtimeLegend?.items?.length > 0
        ? runtimeLegend.items.filter(item => !item.special).map(runtimeLegendItem => runtimeLegendItem.value)
        : []

    if (config.legend.cateogryValuesOrder) {
      return values.sort((a, b) => {
        let aVal = config.legend.cateogryValuesOrder.indexOf(a)
        let bVal = config.legend.cateogryValuesOrder.indexOf(b)
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

  const isLoadedFromUrl = config?.dataKey?.includes('http://') || config?.dataKey?.includes('https://')

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
                      config.general.geoType === 'us' || config.general.geoType === 'us-county' ? 'active' : ''
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
                    className={`${config.general.geoType === 'us-region' ? 'active' : ''} full-width`}
                    onClick={e => {
                      e.preventDefault()
                      handleEditorChanges('geoType', 'us-region')
                    }}
                  >
                    <UsaRegionGraphic />
                    <span>U.S. Region</span>
                  </button>
                  <button
                    className={`${config.general.geoType === 'world' ? 'active' : ''} full-width`}
                    onClick={e => {
                      e.preventDefault()
                      handleEditorChanges('geoType', 'world')
                    }}
                  >
                    <WorldGraphic />
                    <span>World</span>
                  </button>
                  <button
                    className={`${config.general.geoType === 'single-state' ? 'active' : ''} full-width`}
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
              {(config.general.geoType === 'us' || config.general.geoType === 'us-county') && (
                <Select
                  label='Geography Subtype'
                  value={config.general.geoType}
                  options={[
                    { value: 'us', label: 'US State-Level' },
                    { value: 'us-county', label: 'US County-Level' }
                  ]}
                  onChange={event => {
                    handleEditorChanges('geoType', event.target.value)
                  }}
                />
              )}
              {(config.general.geoType === 'us-county' || config.general.geoType === 'single-state') && (
                <Select
                  label='County Census Year'
                  value={config.general.countyCensusYear || '2019'}
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
              {(config.general.geoType === 'us-county' || config.general.geoType === 'single-state') && (
                <Select
                  label='Filter Controlling County Census Year'
                  value={config.general.filterControlsCountyYear || ''}
                  options={[
                    { value: '', label: 'None' },
                    ...(config.filters
                      ? config.filters.map(filter => ({ value: filter.columnName, label: filter.columnName }))
                      : [])
                  ]}
                  onChange={event => {
                    handleEditorChanges('filterControlsCountyYear', event.target.value)
                  }}
                />
              )}

              {config.general.geoType === 'single-state' && runtimeData && (
                <Select
                  label='Filter Controlling State Picked'
                  value={config.general.filterControlsStatesPicked || ''}
                  options={[
                    { value: '', label: 'None' },
                    ...(runtimeData && columnsInData?.map(col => ({ value: col, label: col })))
                  ]}
                  onChange={event => {
                    handleEditorChanges('filterControlsStatesPicked', event.target.value)
                  }}
                />
              )}

              {/* Type */}
              {/* Select > Filter a state */}
              {config.general.geoType === 'single-state' && (
                <label>
                  <span>States Selector</span>
                  <MultiSelect
                    selected={config.general.statesPicked.map(state => state.stateName)}
                    options={StateOptionList().map(option => ({
                      value: option.props.value,
                      label: option.props.children
                    }))}
                    fieldName={'statesPicked'}
                    updateField={(_, __, ___, selectedOptions) => {
                      handleEditorChanges('chooseState', selectedOptions)
                    }}
                  />
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
                value={config.general.type}
                options={[
                  { value: 'data', label: 'Data' },
                  ...(config.general.geoType === 'us-county' ? [{ value: 'us-geocode', label: 'Geocode' }] : []),
                  ...(config.general.geoType === 'world' ? [{ value: 'world-geocode', label: 'Geocode' }] : []),
                  ...(config.general.geoType !== 'us-county' ? [{ value: 'navigation', label: 'Navigation' }] : []),
                  ...(config.general.geoType === 'world' || config.general.geoType === 'us'
                    ? [{ value: 'bubble', label: 'Bubble' }]
                    : [])
                ]}
                onChange={event => {
                  handleEditorChanges('editorMapType', event.target.value)
                }}
              />

              {/* Navigation Behavior */}
              {(config.general.type === 'navigation' || config.general.type === 'data') && (
                <Select
                  label='Navigation Behavior'
                  value={config.general.navigationTarget}
                  options={[
                    { value: '_self', label: 'Same Window' },
                    { value: '_blank', label: 'New Window' }
                  ]}
                  onChange={event => {
                    const _newConfig = _.cloneDeep(config)
                    _newConfig.general.navigationTarget = event.target.value
                    setConfig(_newConfig)
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
                      checked={config.legend.type === 'equalnumber' || config.legend.type === 'equalinterval'}
                      onChange={e => handleEditorChanges('classificationType', e.target.value)}
                    />
                    Numeric/Quantitative
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='category'
                      value='category'
                      checked={config.legend.type === 'category'}
                      onChange={e => handleEditorChanges('classificationType', e.target.value)}
                    />
                    Categorical
                  </label>
                </div>
              </label>

              {/* Display as Hex */}
              {general.geoType === 'us' && general.type !== 'navigation' && general.type !== 'bubble' && (
                <label className='checkbox mt-4'>
                  <input
                    type='checkbox'
                    checked={config.general.displayAsHex}
                    onChange={event => {
                      const _newConfig = _.cloneDeep(config)
                      _newConfig.general.displayAsHex = event.target.checked
                      setConfig(_newConfig)
                    }}
                  />
                  <span className='edit-label'>Display As Hex Map</span>
                </label>
              )}

              {/* Shapes on Hex */}
              <label className='checkbox mt-4'>
                <input
                  type='checkbox'
                  checked={config.hexMap.type === 'shapes'}
                  onChange={event => {
                    setConfig({
                      ...config,
                      hexMap: {
                        ...config.hexMap,
                        type: event.target.checked ? 'shapes' : 'standard'
                      }
                    })
                  }}
                />
                <span className='edit-label'>Display Shapes on Hex Map</span>
              </label>
              <HexSetting.ShapeColumns columnsOptions={columnsOptions} />

              {'us' === config.general.geoType &&
                'bubble' !== config.general.type &&
                false === config.general.displayAsHex && (
                  <CheckBox
                    label='Show state labels'
                    checked={config.general.displayStateLabels}
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

              {'us' === config.general.geoType && (
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={general.territoriesAlwaysShow || false}
                    onChange={event => {
                      const _newConfig = _.cloneDeep(config)
                      _newConfig.general.territoriesAlwaysShow = event.target.checked
                      setConfig(_newConfig)
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
                  checked={config.general.showTitle || false}
                  onChange={event => {
                    const _newConfig = _.cloneDeep(config)
                    _newConfig.general.showTitle = event.target.checked
                    setConfig(_newConfig)
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
                    value={config.columns.geo ? config.columns.geo.name : columnsOptions[0]}
                    options={columnsOptions.map(c => c.key)}
                    onChange={event => {
                      editColumn('geo', 'name', event.target.value)
                      checkConfigurationNeeded(config)
                    }}
                  />
                </label>
                {config.general.type === 'us-geocode' && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={config.general.convertFipsCodes}
                      onChange={event => {
                        setConfig({
                          ...config,
                          general: {
                            ...config.general,
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
                    checked={config.general.hideGeoColumnInTooltip || false}
                    onChange={event => {
                      const _newConfig = _.cloneDeep(config)
                      _newConfig.general.hideGeoColumnInTooltip = event.target.checked
                      setConfig(_newConfig)
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
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
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
                  <Select
                    label='Data Column'
                    value={columns.primary.name}
                    options={columnsOptions.map(c => c.key)}
                    onChange={event => {
                      const _state = _.cloneDeep(config)
                      _state.columns.primary.name = event.target.value
                      _state.columns.primary.label = event.target.value
                      setConfig(_state)
                      checkConfigurationNeeded(_state)
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
                        <span className='edit-label'>Show in Data Table</span>
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
                        <span className='edit-label'>Show in Tooltips</span>
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
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
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
                            For secondary values such as "NA", the system can automatically color-code them in shades of
                            gray, one shade for each special class.
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
                    </div>
                  ))}
                  {config.legend.specialClasses.length < 2 && (
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
                            <span className='edit-label'>Show in Data Table</span>
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
                    className={'btn btn-primary full-width'}
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
                  <Select
                    label='Legend Type'
                    value={legend.type}
                    options={[
                      { value: 'equalnumber', label: 'Equal Number (Quantiles)' },
                      { value: 'equalinterval', label: 'Equal Interval' }
                    ]}
                    onChange={event => {
                      let testForType = Number(typeof config.data[0][config.columns.primary.name])
                      let hasValue = config.data[0][config.columns.primary.name]
                      let messages = []

                      if (!hasValue) {
                        messages.push(
                          `There appears to be values missing for data in the primary column ${config.columns.primary.name}`
                        )
                      }

                      if (testForType === 'string' && isNaN(testForType) && value !== 'category') {
                        messages.push(
                          'Error with legend. Primary columns that are text must use a categorical legend type. Try changing the legend type to DEV-12345categorical.'
                        )
                      } else {
                        messages = []
                      }

                      const _newConfig = _.cloneDeep(config)
                      _newConfig.legend.type = event.target.value
                      _newConfig.runtime.editorErrorMessage = messages
                      setConfig(_newConfig)
                    }}
                  />
                )}
                {'navigation' !== config.general.type && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={config.general.showSidebar || false}
                      onChange={event => {
                        const _newConfig = _.cloneDeep(config)
                        _newConfig.general.showSidebar = event.target.checked
                        setConfig(_newConfig)
                      }}
                    />
                    <span className='edit-label'>Show Legend</span>
                  </label>
                )}
                {'navigation' !== config.general.type && (
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
                    {(config.legend.position === 'side' || !config.legend.position) &&
                      config.legend.style === 'gradient' && (
                        <span style={{ color: 'red', fontSize: '14px' }}>
                          Position must be set to top or bottom to use gradient style.
                        </span>
                      )}
                  </>
                )}
                {'navigation' !== config.general.type && (
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
                {'navigation' !== config.general.type && config.legend.style === 'gradient' && (
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
                {allowLegendSeparators && (
                  <TextField
                    value={legend.separators}
                    updateField={updateField}
                    section='legend'
                    fieldName='separators'
                    label='Legend Separators'
                    placeholder='ex: 1,4'
                    tooltip={
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            Separators between legend items represented by the legend item numbers separated by commas.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                    }
                  />
                )}
                {'navigation' !== config.general.type && config.legend.style === 'gradient' && (
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
                        const _newConfig = _.cloneDeep(config)
                        _newConfig.legend.singleColumn = event.target.checked
                        _newConfig.legend.singleRow = false
                        _newConfig.legend.verticalSorted = false

                        setConfig(_newConfig)
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
                        const _newConfig = _.cloneDeep(config)
                        _newConfig.legend.singleRow = event.target.checked
                        _newConfig.legend.singleColumn = false
                        _newConfig.legend.verticalSorted = false

                        setConfig(_newConfig)
                      }}
                    />
                    <span className='edit-label'>Single Row Legend</span>
                  </label>
                )}

                {'navigation' !== config.general.type && config.legend.type === 'category' && (
                  <Select
                    label='Legend Group By :'
                    value={legend.groupBy || ''}
                    options={columnsOptions.map(c => c.key)}
                    onChange={event => {
                      const _newConfig = _.cloneDeep(config)
                      _newConfig.legend.groupBy = event.target.value
                      setConfig(_newConfig)
                    }}
                  />
                )}
                {config.legend.style !== 'gradient' && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={legend.verticalSorted}
                      onChange={event => {
                        const _newConfig = _.cloneDeep(config)
                        _newConfig.legend.verticalSorted = event.target.checked
                        setConfig(_newConfig)
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
                      onChange={event => {
                        const _newConfig = _.cloneDeep(config)
                        _newConfig.legend.separateZero = event.target.checked
                        return setConfig(_newConfig)
                      }}
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
                {config.legend.type === 'equalnumber' && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={config.general.equalNumberOptIn}
                      onChange={event => {
                        const _newConfig = _.clone(config)
                        _newConfig.general.equalNumberOptIn = event.target.checked
                        setConfig(_newConfig)
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
                      <Select
                        label='Filter Value'
                        value={String(activeFilterValueForDescription)}
                        options={filterValueOptionList.map(arr => ({
                          value: arr,
                          label: displayFilterLegendValue(arr)
                        }))}
                        onChange={event => {
                          handleEditorChanges('changeActiveFilterValue', event.target.value)
                        }}
                      />
                    </label>
                  </React.Fragment>
                )}
                {config.filters.length > 0 && (
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
                {(config.filters.length > 0 || config.general.type === 'bubble' || config.general.geoType === 'us') && (
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
          {'navigation' !== config.general.type && (
            <>
              <AccordionItem>
                {/* Filters */}
                <AccordionItemHeading>
                  <AccordionItemButton>Filters</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <VizFilterEditor
                    config={config}
                    updateField={updateField}
                    rawData={config.data}
                    hasFootnotes={isDashboard}
                  />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Footnotes</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <FootnotesEditor config={config} updateField={updateField} datasets={datasets} />
                </AccordionItemPanel>
              </AccordionItem>
            </>
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
                    checked={config.table.wrapColumns}
                    onChange={event => {
                      setConfig({
                        ...config,
                        table: {
                          ...config.table,
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
                    checked={config.table.forceDisplay !== undefined ? config.table.forceDisplay : !isDashboard}
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
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={config.table.showNonGeoData}
                    onChange={event => {
                      setConfig({
                        ...config,
                        table: {
                          ...config.table,
                          showNonGeoData: event.target.checked
                        }
                      })
                    }}
                  />
                  <span className='edit-label column-heading'>
                    Show Non Geographic Data
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon
                          display='question'
                          style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                        />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>Show any data not associated with a geographic location</p>
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
                  value={config.table.caption}
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
                    checked={config.table.limitHeight}
                    onChange={event => {
                      handleEditorChanges('limitDataTableHeight', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Limit Table Height</span>
                </label>
                {config.table.limitHeight && (
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
                    checked={config.table.expanded || false}
                    onChange={event => {
                      handleEditorChanges('expandDataTable', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Map loads with data table expanded</span>
                </label>
                <CheckBox
                  value={config.table.download}
                  fieldName='download'
                  label='Show Download CSV Link'
                  section='table'
                  updateField={updateField}
                />
                {config.table.download && (
                  <>
                    <label className='checkbox'>
                      <input
                        type='checkbox'
                        className='ms-4'
                        checked={config.table.showDownloadLinkBelow}
                        onChange={event => {
                          handleEditorChanges('toggleDownloadLinkBelow', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Show Link Below Table</span>
                    </label>
                    <CheckBox
                      value={config.table.downloadVisibleDataOnly}
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
                      checked={config.table.showDataTableLink}
                      onChange={event => {
                        const _newConfig = _.cloneDeep(config)
                        _newConfig.table.showDataTableLink = event.target.checked
                        setConfig(_newConfig)
                      }}
                    />
                    <span className='edit-label'>Show Data Table Name & Link</span>
                  </label>
                )}
                {isLoadedFromUrl && (
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={config.table.showDownloadUrl}
                      onChange={event => {
                        const _newConfig = _.cloneDeep(config)
                        _newConfig.table.showDownloadUrl = event.target.checked
                        setConfig(_newConfig)
                      }}
                    />
                    <span className='edit-label'>Show URL to Automatically Updated Data</span>
                  </label>
                )}
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={config.table.showFullGeoNameInCSV}
                    onChange={event => {
                      handleEditorChanges('toggleShowFullGeoNameInCSV', event.target.checked)
                    }}
                  />
                  <span className='edit-label'>Include Full Geo Name in CSV Download</span>
                </label>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={config.general.showDownloadImgButton}
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
              <Select
                label={
                  <>
                    Detail displays on{' '}
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          At mobile sizes, information always appears in a popover modal when a user taps on an item.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  </>
                }
                value={config.tooltips.appearanceType}
                options={[
                  { value: 'hover', label: 'Hover - Tooltip' },
                  { value: 'click', label: 'Click - Popover Modal' }
                ]}
                onChange={event => {
                  handleEditorChanges('appearanceType', event.target.value)
                }}
              />
              {'click' === config.tooltips.appearanceType && (
                <TextField
                  value={tooltips.linkLabel}
                  section='tooltips'
                  fieldName='linkLabel'
                  label='Tooltips Link Label'
                  updateField={updateField}
                />
              )}
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
                      const _newConfig = _.cloneDeep(config)
                      _newConfig.general.fullBorder = event.target.checked
                      setConfig(_newConfig)
                    }}
                  />
                  <span className='edit-label'>Add border around map</span>
                </label>
              )}
              <Select
                label='Geo Border Color'
                value={config.general.geoBorderColor || ''}
                options={[
                  { value: 'darkGray', label: 'Dark Gray (Default)' },
                  { value: 'sameAsBackground', label: 'White' }
                ]}
                onChange={event => {
                  handleEditorChanges('geoBorderColor', event.target.value)
                }}
              />
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
                  const _state = _.cloneDeep(config)
                  const { name: currentPaletteName } = config.general.palette
                  _state.general.palette.isReversed = !_state.general.palette.isReversed
                  let paletteName = ''
                  if (_state.general.palette.isReversed && !currentPaletteName.endsWith('reverse')) {
                    paletteName = currentPaletteName + 'reverse'
                  }
                  if (!_state.general.palette.isReversed && currentPaletteName.endsWith('reverse')) {
                    paletteName = currentPaletteName.slice(0, -7)
                  }
                  if (paletteName) {
                    _state.general.palette.name = paletteName
                  }
                  setConfig(_state)
                }}
                value={config.general.palette.isReversed}
              />
              <span>Sequential</span>
              <PaletteSelector
                palettes={sequential}
                colorPalettes={colorPalettes}
                config={config}
                onPaletteSelect={handlePaletteSelection}
                selectedPalette={config.general?.palette?.name}
                colorIndices={[2, 3, 5]}
                className='color-palette'
                element='li'
                getItemClassName={getPaletteClassName}
              />
              <span>Non-Sequential</span>
              <PaletteSelector
                palettes={nonSequential}
                colorPalettes={colorPalettes}
                config={config}
                onPaletteSelect={handlePaletteSelection}
                selectedPalette={config.general?.palette?.name}
                colorIndices={[2, 3, 5]}
                className='color-palette'
                element='li'
                getItemClassName={getPaletteClassName}
                minColorsForFilter={(_, paletteAccessor, config) => {
                  if (paletteAccessor.length <= 8 && config.general.geoType === 'us-region') {
                    return false
                  }
                  return true
                }}
              />
              <span>Colorblind Safe</span>
              <PaletteSelector
                palettes={accessibleColors}
                colorPalettes={colorPalettes}
                config={config}
                onPaletteSelect={handlePaletteSelection}
                selectedPalette={config.general?.palette?.name}
                colorIndices={[2, 3, 5]}
                className='color-palette'
                element='li'
                getItemClassName={getPaletteClassName}
                minColorsForFilter={(_, paletteAccessor, config) => {
                  if (paletteAccessor.length <= 8 && config.general.geoType === 'us-region') {
                    return false
                  }
                  return true
                }}
              />
              <label>
                Geocode Settings
                <TextField
                  type='number'
                  value={config.visual.geoCodeCircleSize}
                  section='visual'
                  max='10'
                  fieldName='geoCodeCircleSize'
                  label='Geocode Circle Size'
                  updateField={updateField}
                />
              </label>

              {config.general.type === 'bubble' && (
                <>
                  <TextField
                    type='number'
                    value={config.visual.minBubbleSize}
                    section='visual'
                    fieldName='minBubbleSize'
                    label='Minimum Bubble Size'
                    updateField={updateField}
                  />
                  <TextField
                    type='number'
                    value={config.visual.maxBubbleSize}
                    section='visual'
                    fieldName='maxBubbleSize'
                    label='Maximum Bubble Size'
                    updateField={updateField}
                  />
                </>
              )}
              {(config.general.geoType === 'world' ||
                (config.general.geoType === 'us' && config.general.type === 'bubble')) && (
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={config.visual.showBubbleZeros}
                    onChange={event => {
                      const _newConfig = _.cloneDeep(config)
                      _newConfig.visual.showBubbleZeros = event.target.checked
                      setConfig(_newConfig)
                    }}
                  />
                  <span className='edit-label'>Show Data with Zero's on Bubble Map</span>
                </label>
              )}
              {(config.general.geoType === 'world' || config.general.geoType === 'single-state') && (
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    checked={config.general.allowMapZoom}
                    onChange={event => {
                      const _newConfig = _.cloneDeep(config)
                      _newConfig.general.allowMapZoom = event.target.checked
                      _newConfig.mapPosition.coordinates = config.general.geoType === 'world' ? [0, 30] : [0, 0]
                      _newConfig.mapPosition.zoom = 1
                      setConfig(_newConfig)
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
                      const _newConfig = _.cloneDeep(config)
                      _newConfig.visual.extraBubbleBorder = event.target.checked
                      setConfig(_newConfig)
                    }}
                  />
                  <span className='edit-label'>Bubble Map has extra border</span>
                </label>
              )}
              {(config.general.geoType === 'us' ||
                config.general.geoType === 'us-county' ||
                config.general.geoType === 'world') && (
                <>
                  <label>
                    <span className='edit-label'>Default City Style</span>
                    <select
                      value={config.visual.cityStyle || false}
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
                    value={config.visual.cityStyleLabel}
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
                {config.visual.additionalCityStyles.length > 0 &&
                  config.visual.additionalCityStyles.map(({ label, column, value, shape }, i) => {
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
                  value={config.tooltips.opacity ? config.tooltips.opacity : 100}
                  section='tooltips'
                  fieldName='opacity'
                  label='Tooltip Opacity (%)'
                  updateField={updateField}
                />
              </label>
              {/* Leaflet Map Type */}
              {config.general.geoType === 'leaflet' && (
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
              {config.map.layers.length === 0 && <p>There are currently no layers.</p>}

              {config.map.layers.map((layer, index) => {
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
          {config.general.geoType === 'us' && <Panels.PatternSettings name='Pattern Settings' />}
          {config.general.geoType !== 'us-county' && <Panels.Annotate name='Text Annotations' />}
        </Accordion>
        <AdvancedEditor loadConfig={setConfig} config={config} convertStateToConfig={convertStateToConfig} />
      </Layout.Sidebar>

      {showConversionModal && (
        <PaletteConversionModal
          onConfirm={handleConversionConfirm}
          onCancel={handleConversionCancel}
          onReturnToV1={handleReturnToV1}
          paletteName={pendingPaletteSelection?.palette}
        />
      )}
    </ErrorBoundary>
  )
}

export default EditorPanel
