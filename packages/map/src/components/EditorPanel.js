import React, { useState, useEffect, useCallback, memo } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import ReactTooltip from 'react-tooltip'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDebounce } from 'use-debounce';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Waiting from '@cdc/core/components/Waiting'

import MapIcon from '../images/map-folded.svg';
import UsaGraphic from '../images/usa-graphic.svg';
import WorldGraphic from '../images/world-graphic.svg';
import colorPalettes from '../data/color-palettes';
import worldDefaultConfig from '../examples/default-world.json';
import usaDefaultConfig from '../examples/default-usa.json';

const ReactTags = require('react-tag-autocomplete'); // Future: Lazy

const arrayMoveMutate = (array, from, to) => {
	const startIndex = from < 0 ? array.length + from : from;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = to < 0 ? array.length + to : to;

		const [item] = array.splice(from, 1);
		array.splice(endIndex, 0, item);
	}
};

const arrayMove = (array, from, to) => {
	array = [...array];
	arrayMoveMutate(array, from, to);
	return array;
};

const TextField = memo(({label, section = null, subsection = null, fieldName, updateField, value: stateValue, type = "input", ...attributes}) => {
  const [ value, setValue ] = useState(stateValue);

  const [ debouncedValue ] = useDebounce(value, 500);

  useEffect(() => {
    if('string' === typeof debouncedValue && stateValue !== debouncedValue ) {
      updateField(section, subsection, fieldName, debouncedValue)
    }
  }, [debouncedValue])

  let name = subsection ? `${section}-${subsection}-${fieldName}` : `${section}-${subsection}-${fieldName}`;

  const onChange = (e) => setValue(e.target.value);

  let formElement = <input type="text" name={name} onChange={onChange} {...attributes} value={value} />

  if('textarea' === type) {
    formElement = (
      <textarea name={name} onChange={onChange} {...attributes} value={value}></textarea>
    )
  }

  if('number' === type) {
    formElement = <input type="number" name={name} onChange={onChange} {...attributes} value={value} />
  }

  return (
    <label>
      <span className="edit-label column-heading">{label}</span>
      {formElement}
    </label>
  )
})

const EditorPanel = memo((props) => {
  const {
    state,
    loadConfig,
    setState,
    generateValuesForFilter,
    processData,
    processLegend,
    setParentConfig
  } = props

  const { general, color, columns, legend, data, filters, dataTable, tooltips, processedData, processedLegend, loading } = state

  const [ requiredColumns, setRequiredColumns ] = useState([]) // Simple state so we know if we need more information before parsing the map

  const [ configData, setConfigData ] = useState({})

  const [ loadedDefault, setLoadedDefault ] = useState(false)

  const [ displayPanel, setDisplayPanel ] = useState(true)

  const [ advancedToggle, setAdvancedToggle ] = useState(false)

  const [ activeFilterValueForDescription, setActiveFilterValueForDescription ] = useState([0,0])

  const [ editorCatOrder, setEditorCatOrder ] = useState([])

  const headerColors = ['theme-blue','theme-purple','theme-brown','theme-teal','theme-pink','theme-orange','theme-slate','theme-indigo','theme-cyan','theme-green','theme-amber']

  const resetColumnsObj = {
    geo: {
        dataTable: true,
        label: "",
        name: "",
        tooltip: false
    },
    primary: {
        dataTable: true,
        label: "",
        name: "",
        prefix: "",
        suffix: "",
        tooltip: true
    },
    navigate: {
        dataTable: false,
        name: "",
        tooltip: false
    },
    geosInRegion: {
        name: ''
    }
  }

  const handleEditorChanges = async (property, value) => {
    switch (property) {
      case 'showTitle':
        setState( (prevState) => {

            return {
                general: {
                    ...prevState.general,
                    showTitle: value
                }
            }
        })
      break;
      case 'showSidebar':
        setState( (prevState) => {

            return {
                general: {
                    ...prevState.general,
                    showSidebar: value
                }
            }
        })
      break;
      case 'fullBorder':
        setState( (prevState) => {

            return {
                general: {
                    ...prevState.general,
                    fullBorder: value
                }
            }
        })
      break;
      case 'expandDataTable':
        setState( (prevState) => {

            return {
                general: {
                    ...prevState.general,
                    expandDataTable: value
                }
            }
        })
      break;
      case 'color':
        setState( (prevState) => {

            return {
                color: value
            }
        })
      break;
      case 'hasRegions':
        setState( (prevState) => {

              return {
                  general: {
                      ...prevState.general,
                      hasRegions: value
                  },
                  columns: resetColumnsObj,
                  processedData: {}
              }
        })
      break;
      case 'sidebarPosition':
        setState( (prevState) => {

            return {
                legend: {
                    ...prevState.legend,
                    position: value
                }
            }
        })
      break;
      case 'geoBorderColor':
        setState( (prevState) => {

            return {
                general: {
                    ...prevState.general,
                    geoBorderColor: value
                }
            }
        })
      break;
      case 'headerColor':
        setState( (prevState) => {

            return {
                general: {
                    ...prevState.general,
                    headerColor: value
                }
            }
        })
      break;
      case 'geoColumn':
        setState( (prevState) => {

              return {
                  columns: {
                      ...prevState.columns,
                      geo: {
                          ...prevState.columns.geo,
                          name: value
                      }
                  }
              }
        })
      break;
      case 'navigateColumn':
        setState( (prevState) => {

            return {
                columns: {
                    ...prevState.columns,
                    navigate: {
                        ...prevState.columns.navigate,
                        name: value
                    }
                }
            }
        })
      break;
      case 'legendDescription':
        setState( (prevState) => {

            return {
                legend: {
                    ...prevState.legend,
                    description: value
                }
            }
        })
      break;
      case 'legendType':
        setState( (prevState) => { return {legend: {...legend, type: value} } } )
      break;
      case 'legendNumber':
        setState( (prevState) => {
              return {
                  legend: {
                    ...prevState.legend,
                    numberOfItems: parseInt(value)
                  }
              }
        })
      break;
      case 'changeActiveFilterValue':
        const arrVal = value.split(',')

        setActiveFilterValueForDescription(arrVal)
      break;
      case 'unifiedLegend':
        setState( () => {
            return {
                legend: {...legend, unified: value}
            }
        })
      break;
      case 'separateZero':
        setState( () => {
            return {
                legend: {...legend, separateZero: value}
            }
        })
      break;
      case 'editorDataUrl':
        setState({dataUrl: value})
      break;
      case 'toggleDownloadButton':
            setState( (prevState) => {
                return {
                    general: {
                        ...prevState.general,
                        showDownloadButton: !prevState.general.showDownloadButton
                    }
                }
            })
      break;
      case 'toggleDownloadMediaButton':
            setState( (prevState) => {
                return {
                    general: {
                        ...prevState.general,
                        showDownloadMediaButton: !prevState.general.showDownloadMediaButton
                    }
                }
            })
      break;
      case 'toggleDisplayAsHex':
            setState( (prevState) => {
                return {
                    general: {
                        ...prevState.general,
                        displayAsHex: !prevState.general.displayAsHex
                    }
                }
            })
      break;
      case 'editorMapType':
        switch(value) {
            case 'data':
                setState( (prevState) => {
                    return {
                        general: {
                            ...prevState.general,
                            showSidebar: true,
                            type: "data"
                        },
                    }
                })
                break;
            case 'navigation':
                setState( (prevState) => {
                    return {
                        general: {
                          ...prevState.general,
                          showSidebar: false,
                          type: "navigation",
                          displayAsHex: false
                        },
                        tooltips: {
                            ...prevState.tooltips,
                            appearanceType: "hover"
                        }
                    }
                })
                break;
            case 'hex':
            setState( (prevState) => {
                return {
                    general: {
                      ...prevState.general,
                      showSidebar: true,
                      type: "hex",
                    }
                }
            })
            break;
            default:
                console.warn("Map type not set")
            break;
        }

        setState(() => {
            return {
                processedData: processData()
            }
        })
      break;
      case 'geoType':
        // If we're still working with default data, switch to the world default to show it as an example
        if(true === loadedDefault && 'world' === value) {
          loadConfig(worldDefaultConfig)
          ReactTooltip.rebuild()
          break;
        }

        if(true === loadedDefault && 'us' === value) {
          loadConfig(usaDefaultConfig)
          ReactTooltip.rebuild()
          break;
        }

        switch(value) {
            case 'us':
                setState( (prevState) => {
                    return {
                        general: {
                            ...prevState.general,
                            geoType: "us"
                        }
                    }
                })
                break;
            case 'world':
                setState( (prevState) => {
                    return {
                        general: {
                            ...prevState.general,
                            geoType: "world",
                        }
                    }
                })
                break;
            default:
                console.warn("Map type not set.")
            break;
        }

        ReactTooltip.rebuild()
      break;
      case 'categoryOrder':
        const categoryValuesOrder = arrayMove(processedLegend.categoryValuesOrder, value[0], value[1])

        setState( (prevState) => {
            return {
              legend: {
                ...prevState.legend,
                categoryValuesOrder
              }
            }
        })
      break;
      case 'singleColumnLegend':
        setState( (prevState) => {
            return {
                legend: {
                    ...prevState.legend,
                    singleColumn: !prevState.legend.singleColumn
                }
            }
        })
      break;
      case 'dynamicDescription':
        setState( (prevState) => {
            return {
                editor: {
                    ...prevState.editor,
                    activeFilterValueForDescription: value
                },
                legend: {
                    ...prevState.legend,
                    dynamicDescription: !prevState.legend.dynamicDescription
                }
            }
        })
      break;
      case 'changeLegendDescription':
        const [filterValKey, filterValDesc] = value

        setState( (prevState) => {
            return {
                legend: {
                    ...prevState.legend,
                    descriptions: {
                        ...prevState.legend.descriptions,
                        [filterValKey]: [filterValDesc]
                    }
                }
            }
        })
      break;
      case 'appearanceType':
        setState( (prevState) => {

            return {
                tooltips: {
                    ...prevState.tooltips,
                    appearanceType: value
                }
            }
        })
      break;
      case 'linkLabel':
        setState( (prevState) => {

            return {
                tooltips: {
                    ...prevState.tooltips,
                    linkLabel: value
                }
            }
        })
      break;
      case 'displayStateLabels':
            setState( (prevState) => {
                return {
                    general: {
                        ...prevState.general,
                        displayStateLabels: !prevState.general.displayStateLabels
                    }
                }
            })
      break;
      case 'capitalizeLabels':
          setState( (prevState) => {

              return {
                  tooltips: {
                      ...prevState.tooltips,
                      capitalizeLabels: value
                  }
              }
          })
      break;
      default:
          console.warn(`Did not recognize editor property.`)
      break;
    }
  }

  const columnsRequiredChecker = useCallback(() => {
    const columnList = []

    // Geo is always required
    if('' === state.columns.geo.name) {
      let colName = state.general.hasRegions ? 'Region' : 'Geography'

      columnList.push(colName)
    }

    // Geos in Region is required for region maps
    if(true === state.general.hasRegions && '' === state.columns.geosInRegion.name) {
      columnList.push('Geos in Region')
    }

    // Primary is required if we're on a data map
    if('data' === state.general.type && '' === state.columns.primary.name) {
      columnList.push('Primary')
    }

    // Navigate is required for navigation maps
    if('navigation' === state.general.type && ('' === state.columns.navigate.name || undefined === state.columns.navigate) ) {
      columnList.push('Navigation')
    }

    setRequiredColumns(columnList)
  }, [state.columns, state.general.hasRegions, state.general.type])

  const editColumn = async (columnName, editTarget, value) => {
    switch (editTarget) {
        case 'specialClassDelete':
            const updatedSpecialClasses = Array.from(legend.specialClasses)

            updatedSpecialClasses.splice(value, 1)

            setState( () => {
                return {
                    legend: {
                      ...legend, specialClasses: updatedSpecialClasses}
                }
            })
        break;
        case 'specialClassAdd':
            let newSpecialClasses = legend.specialClasses

            newSpecialClasses.push(value.name)

            setState( (prevState) => {
                return {
                    ...prevState,
                    legend: {
                      ...legend,
                      specialClasses: newSpecialClasses
                    }
                }
            })
        break;
        case 'name':
          setState( (prevState) => {

            return {
                columns: {
                    ...prevState.columns,
                    [columnName]: {
                        ...prevState.columns[columnName],
                        [editTarget]: value
                    }
                }
            }
          })

          break;
        default:
            setState( (prevState) => {

                return {
                    columns: {
                        ...prevState.columns,
                        [columnName]: {
                            ...prevState.columns[columnName],
                            [editTarget]: value
                        }
                    }
                }
            })
        break;
    }
  }

  const changeFilter = async (filterIndex, target, value) => {
      let newFilters = Array.from(filters)

      switch (target) {
          case 'addNew':
              newFilters.push({
                  values:[]
              })
          break;
          case 'remove':
              newFilters = newFilters.filter( (value, index) => index !== filterIndex);
          break;
          case 'columnName':
              newFilters[filterIndex].columnName = value

              // Regenerate legend values set one to active to pass to state
              let values = generateValuesForFilter(value)

              newFilters[filterIndex].values = values

              newFilters[filterIndex].active = values[0]
          break;
          default:
              newFilters[filterIndex][target] = value
          break;

      }

      setState(() => { return {filters: newFilters}})

      const processedData = processData()

      setState(() => { return {processedData} })
  }

  const addAdditionalColumn = (number) => {
      const columnKey = `additionalColumn${number}`

      setState( (prevState) => {
          return {
              columns: {
                  ...prevState.columns,
                  [columnKey]: {
                      label: "New Column",
                      dataTable: false,
                      tooltips: false,
                      prefix: "",
                      suffix: ""
                  }
              }
          }
      }
    )

  }

  const removeAdditionalColumn = (columnName) => {

      const newColumns = state.columns

      delete newColumns[columnName]

      setState( (prevState) => {
          return {
              columns: newColumns
          }
      })

  }

  const displayFilterLegendValue = (arr) => {

    const filterName = filters[ arr[0] ].label || `Unlabeled Legend`

    const filterValue = filters[ arr[0] ].values[ arr[1] ]

    return filterName + ' - ' + filterValue

  }

  const sortableItemStyles = {
    display:"block",
    boxSizing:"border-box",
    border:"1px solid #D1D1D1",
    borderRadius:"2px",
    background:"#F1F1F1",
    padding:".4em .6em",
    fontSize:".8em",
    marginRight:".3em",
    marginBottom:".3em",
    cursor:"move",
    zIndex:"999"
  }

  const convertStateToConfig = (type = "JSON") => {
    let strippedState = JSON.parse(JSON.stringify(state))

    // Strip ref
    delete strippedState[""]

    delete strippedState.newViz

    // Remove the legend
    let strippedLegend = JSON.parse(JSON.stringify(state.legend))

    delete strippedLegend.data
    delete strippedLegend.disabledAmt

    strippedState.legend = strippedLegend

    // Remove default data marker if the user started this map from default data
    delete strippedState.defaultData

    // Remove tooltips if they're active in the editor
    let strippedGeneral = JSON.parse(JSON.stringify(state.general))

    delete strippedGeneral.modalOpen;
    delete strippedGeneral.modalContent;
    delete strippedGeneral.parentUrl;
    delete strippedGeneral.logoImage;

    strippedState.general = strippedGeneral

    if(type === "JSON") {
      return JSON.stringify( strippedState )
    }

    return strippedState
  }

  useEffect(() => setLoadedDefault(state.defaultData), [state.defaultData])

  useEffect(() => columnsRequiredChecker(), [state.columns, state.general])

  useEffect(() => {
    if(0 === requiredColumns.length && false === loading) {
      const processedData = processData()

      setState(() => { return {processedData} })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requiredColumns])

  // Generate all columns available by looping through the data - add a blank value at the top
  const columnsInData = [""]

  state.data.forEach( (row) => {

    Object.keys(row).forEach( (columnName) => {
      if(false === columnsInData.includes(columnName)) {
        columnsInData.push(columnName)
      }
    })

  } )

  const columnsOptions = columnsInData.map( (name) => {

    if("" === name) {
      return (<option value="" key={"Select Option"}>- Select Option -</option>)
    }

    return (<option value={name} key={name}>{name}</option>)
  })

  const specialClasses = []

  if("" !== legend.specialClasses[0]) {
    legend.specialClasses.forEach( (specialClass, index) => {
      specialClasses.push({id: index, name: specialClass})
    })
  }

  const additionalColumns = Object.keys(state.columns).filter( (value) => {
    const defaultCols = [
      'geo',
      'navigate',
      'primary',
      'geosInRegion'
    ]

    if( true === defaultCols.includes(value) ) {
      return false
    }
    return true
  })

  const updateField = (section, subsection, fieldName, newValue) => {
    const isArray = Array.isArray(state[section]);
    let sectionValue = isArray ? [...state[section], newValue] : {...state[section], [fieldName]: newValue};

    if(null !== subsection) {
      if(isArray) {
        sectionValue = [...state[section]]
        sectionValue[subsection] = {...sectionValue[subsection], [fieldName]: newValue}
      } else {
        sectionValue = {...state[section], [subsection]: { ...state[section][subsection], [fieldName]: newValue}}
      }
    }

    let updatedState = {
      [section]: sectionValue
    }

    setState(() => updatedState)
  }

  const filtersJSX = filters.map( (filter, index) => {
    return (
        <fieldset className="edit-block">
          <button className="remove-column" onClick={(event) => { event.preventDefault(); changeFilter(index, "remove")}}>Remove</button>
          <label>
            <span className="edit-label column-heading">Filter</span>
            <select value={filter.columnName} onChange={(event) => { changeFilter(index, "columnName", event.target.value) }}>
              {columnsOptions}
            </select>
          </label>
          <TextField value={filters[index].label} section="filters" subsection={index} fieldName="label" label="Label" updateField={updateField} />
        </fieldset>
  )
  })

  const filterValueOptionList = []

  if(filters.length > 0) {
    filters.forEach( (filter, index) => {
      filters[index].values.forEach( (value, valueNum) => {

        filterValueOptionList.push([index, valueNum])

      })

    })
  }

  useEffect(() => {
    const parsedData = convertStateToConfig()

    const formattedData = JSON.stringify(JSON.parse(parsedData), undefined, 2);

    setConfigData(formattedData)

    // Pass up to Editor if needed
    if(setParentConfig) {
      const newConfig = convertStateToConfig("object")
      setParentConfig(newConfig)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  useEffect(() => {
    if('data' === state.general.type) {
      const processedLegend = processLegend()

      setState(() => { return {processedLegend} })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legend, processedData])

  let numberOfItemsLimit = 8

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle
  });

  useEffect(() => {
    setEditorCatOrder(processedLegend.categoryValuesOrder)
  }, [processedLegend.categoryValuesOrder])

  const CategoryList = () => {
    return editorCatOrder.map((value, index) => (
      <Draggable key={value} draggableId={`${value}`} index={index}>
        {(provided, snapshot) => (
          <li
            style={{position: 'relative'}}
          >
            <div
              className={snapshot.isDragging ? 'currently-dragging': ''}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
                sortableItemStyles
              )}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >{value}</div>
          </li>
        )}
      </Draggable>
    ))
  }

  if(loading) {
    return null
  }

  return (
    <ErrorBoundary component="EditorPanel">
      {0 !== requiredColumns.length && <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={() => setDisplayPanel(!displayPanel) } data-html2canvas-ignore></button>
      <section className={displayPanel ? 'editor-panel' : 'hidden editor-panel'} data-html2canvas-ignore>
        <h2>Configure Map</h2>
        <section className="form-container">
          <form>
            <Accordion allowZeroExpanded={true}>
              <AccordionItem> {/* General */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    General
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <label>
                    <span className="edit-label column-heading">Geography</span>
                    <ul className="geo-buttons">
                      <li className={state.general.geoType === 'us' ? 'active' : ''} onClick={() => handleEditorChanges("geoType", "us")}>
                        <UsaGraphic />
                        <span>United States</span>
                      </li>
                      <li className={state.general.geoType === 'world' ? 'active' : ''} onClick={() => handleEditorChanges("geoType", "world")}>
                        <WorldGraphic />
                        <span>World</span>
                      </li>
                    </ul>
                  </label>
                  <label>
                    <span className="edit-label column-heading">Map Type</span>
                    <select value={state.general.type} onChange={(event) => { handleEditorChanges("editorMapType", event.target.value) }}>
                      <option value="data">Data</option>
                      <option value="navigation">Navigation</option>
                    </select>
                  </label>
                  {'us' === state.general.geoType && 'data' === state.general.type &&
                    <label className="checkbox mt-4">
                      <input type="checkbox" checked={ state.general.displayAsHex } onChange={(event) => { handleEditorChanges("toggleDisplayAsHex", event.target.checked) }} />
                      <span className="edit-label">Display As Hex Map</span>
                    </label>
                  }
                  {'us' === state.general.geoType && 'data' === state.general.type && false === state.general.displayAsHex &&
                    <label className="checkbox mt-4">
                      <input type="checkbox" checked={ state.general.displayStateLabels } onChange={(event) => { handleEditorChanges("displayStateLabels", event.target.checked) }} />
                      <span className="edit-label">Display state labels</span>
                    </label>
                  }
                  <TextField value={general.title} updateField={updateField} section="general" fieldName="title" label="Title" placeholder="Map Title" />
                  <p className="info">For accessibility, you should enter a title even if you are not planning on displaying it.</p>
                  <TextField type="textarea" value={general.subtext} updateField={updateField} section="general" fieldName="subtext" label="Subtext" />
                  {'us' === state.general.geoType &&
                    <TextField value={general.territoriesLabel} updateField={updateField} section="general" fieldName="territoriesLabel" label="Territories Label" placeholder="Territories" />
                  }
                  {/* <label className="checkbox mt-4">
                    <input type="checkbox" checked={ state.general.showDownloadMediaButton } onChange={(event) => { handleEditorChanges("toggleDownloadMediaButton", event.target.checked) }} />
                    <span className="edit-label">Enable Media Download</span>
                  </label> */}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem> {/* Columns */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Columns
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <label className="edit-block geo">
                    <span className="edit-label column-heading">{state.general.hasRegions ? `Region` : `Geography`}</span>
                    <select value={state.columns.geo ? state.columns.geo.name : columnsOptions[0] } onChange={(event) => { editColumn("geo", "name", event.target.value) }}>
                      {columnsOptions}
                    </select>
                  </label>
                  {'us' === state.general.geoType &&
                  <label className="checkbox">
                    <input type="checkbox" checked={ state.general.hasRegions || false} onChange={(event) => { handleEditorChanges("hasRegions", event.target.checked) }} />
                    <span className="edit-label">This map uses regions</span>
                  </label>
                  }
                  {state.general.hasRegions &&
                    <label className="edit-block geo">
                      <span className="edit-label column-heading">Geos In Region</span>
                      <select value={state.columns.geo ? state.columns.geosInRegion.name : columnsOptions[0] } onChange={(event) => { editColumn("geosInRegion", "name", event.target.value) }}>
                        {columnsOptions}
                      </select>
                    </label>
                  }
                  {"navigation" !== state.general.type &&
                  <fieldset className="primary-fieldset edit-block">
                    <label>
                      <span className="edit-label column-heading">Primary</span>
                      <select value={state.columns.primary ? state.columns.primary.name : columnsOptions[0] } onChange={(event) => { editColumn("primary", "name", event.target.value) }}>
                        {columnsOptions}
                      </select>
                    </label>
                    <label>
                      <span className="edit-label">Data Classification Type</span>
                      <select value={legend.type} onChange={(event) => { handleEditorChanges("legendType", event.target.value) }}>
                        <option value="equalnumber">Equal Number</option>
                        <option value="equalinterval">Equal Interval</option>
                        <option value="category">Categorical</option>
                      </select>
                    </label>
                    <TextField value={columns.primary.label} section="columns" subsection="primary" fieldName="label" label="Label" updateField={updateField} />
                    <ul className="column-edit">
                      <li className="three-col">
                        <TextField value={columns.primary.prefix} section="columns" subsection="primary" fieldName="prefix" label="Prefix" updateField={updateField} />
                        <TextField value={columns.primary.suffix} section="columns" subsection="primary" fieldName="suffix" label="Suffix" updateField={updateField} />
                        <TextField type="number" value={columns.primary.roundToPlace} section="columns" subsection="primary" fieldName="roundToPlace" label="Round" updateField={updateField} />
                      </li>
                      <li>
                        <label className="checkbox">
                          <input type="checkbox" checked={ state.columns.primary.useCommas } onChange={(event) => { editColumn("primary", "useCommas", event.target.checked) }} />
                          <span className="edit-label">Add Commas to Numbers</span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox">
                          <input type="checkbox" checked={ state.columns.primary.dataTable || false} onChange={(event) => { editColumn("primary", "dataTable", event.target.checked) }} />
                          <span className="edit-label">Display in Data Table</span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox">
                          <input type="checkbox" checked={ state.columns.primary.tooltip || false} onChange={(event) => { editColumn("primary", "tooltip", event.target.checked) }} />
                          <span className="edit-label">Display in Tooltips</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <span className="edit-label">Special Classes</span>
                        </label>
                          <ReactTags
                              placeholder="Separate by comma"
                              delimiters={[' ',',','Enter']}
                              allowNew={true}
                              minQueryLength={1}
                              tags={specialClasses}
                              onDelete={(event) => { editColumn("primary", "specialClassDelete", event) }}
                              onAddition={(value) => { editColumn("primary", "specialClassAdd", value) }}
                          />
                      </li>
                    </ul>
                  </fieldset>}
                  <label className="edit-block navigate column-heading">
                    <span className="edit-label column-heading">Navigation</span>
                    <select value={state.columns.navigate ? state.columns.navigate.name : columnsOptions[0] } onChange={(event) => { editColumn("navigate", "name", event.target.value) }}>
                      {columnsOptions}
                    </select>
                  </label>
                  {"navigation" !== state.general.type && additionalColumns.map((val) => (
                      <fieldset className="edit-block" key={val}>
                        <button className="remove-column" onClick={(event) => { event.preventDefault(); removeAdditionalColumn(val)}}>Remove</button>
                        <label>
                          <span className="edit-label column-heading">Column</span>
                          <select value={state.columns[val] ? state.columns[val].name : columnsOptions[0] } onChange={(event) => { editColumn(val, "name", event.target.value) }}>
                            {columnsOptions}
                          </select>
                        </label>
                        <TextField value={columns[val].label} section="columns" subsection={val} fieldName="label" label="Label" updateField={updateField} />
                        <ul className="column-edit">
                          <li className="three-col">
                            <TextField value={columns[val].prefix} section="columns" subsection={val} fieldName="prefix" label="Prefix" updateField={updateField} />
                            <TextField value={columns[val].suffix} section="columns" subsection={val} fieldName="suffix" label="Suffix" updateField={updateField} />
                            <TextField type="number" value={columns[val].roundToPlace} section="columns" subsection={val} fieldName="roundToPlace" label="Round" updateField={updateField} />
                          </li>
                          <li>
                            <label className="checkbox">
                              <input type="checkbox" checked={ state.columns[val].useCommas } onChange={(event) => { editColumn(val, "useCommas", event.target.checked) }} />
                              <span className="edit-label">Add Commas to Numbers</span>
                            </label>
                          </li>
                          <li>
                            <label className="checkbox">
                              <input type="checkbox" checked={ state.columns[val].dataTable } onChange={(event) => { editColumn(val, "dataTable", event.target.checked) }} />
                              <span className="edit-label">Display in Data Table</span>
                            </label>
                          </li>
                          <li>
                            <label className="checkbox">
                              <input type="checkbox" checked={ state.columns[val].tooltip } onChange={(event) => { editColumn(val, "tooltip", event.target.checked) }} />
                              <span className="edit-label">Display in Tooltips</span>
                            </label>
                          </li>
                        </ul>
                      </fieldset>
                  ))}
                  {"navigation" !== state.general.type && <button className={"btn full-width"} onClick={(event) => {event.preventDefault(); addAdditionalColumn(additionalColumns.length + 1)}}>Add Column</button>}
                </AccordionItemPanel>
              </AccordionItem> {/* Columns */}
              {"navigation" !== state.general.type && <AccordionItem> {/* Legend */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Legend
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {"category" !== legend.type &&
                    <label>
                      <span className="edit-label">Number of Items</span>
                      <select value={legend.numberOfItems} onChange={(event) => { handleEditorChanges("legendNumber", event.target.value) }}>
                        {[...Array(numberOfItemsLimit).keys()].map( (num) => {
                          return (<option value={num + 1} key={num + 1}>{num + 1}</option>)
                        })}
                      </select>
                    </label>
                  }
                  {"category" === legend.type &&
                    <React.Fragment>
                      <label>
                        <span className="edit-label">Category Order</span>
                      </label>
                      {/* TODO: Swap out this drag and drop library back to something simpler. I had to remove the old one because it hadn't been updated and wouldn't work with Webpack 5. This is overkill for our needs. */}
                      <DragDropContext onDragEnd={({source, destination}) => { setEditorCatOrder(arrayMove(editorCatOrder, source.index, destination.index));  handleEditorChanges("categoryOrder", [source.index, destination.index]); }}>
                        <Droppable droppableId="category_order">
                          {(provided, snapshot) => (
                            <ul
                              {...provided.droppableProps}
                              className="sort-list"
                              ref={provided.innerRef}
                            >
                              <CategoryList />
                              {provided.placeholder}
                            </ul>
                          )}
                        </Droppable>
                      </DragDropContext>
                      {editorCatOrder.length === 9 && <section className="error-box my-2"><div><h5 className="pt-1">Warning</h5><p>The maximum number of categorical legend items is 9. If your data has more than 9 categories the additional categories will display as black on the map.</p></div></section>}
                    </React.Fragment>
                  }
                  <TextField value={legend.title} updateField={updateField} section="legend" fieldName="title" label="Legend Title" placeholder="Legend Title" />
                  {false === legend.dynamicDescription && (
                    <TextField type="textarea" value={legend.description} updateField={updateField} section="legend" fieldName="description" label="Legend Description" />
                  )}
                  {true === legend.dynamicDescription && (
                    <React.Fragment>
                      <label>
                        <span>Legend Description</span>
                        <span className="subtext">For {displayFilterLegendValue( activeFilterValueForDescription || [0,0] )}</span>
                        <textarea value={legend.descriptions[String(activeFilterValueForDescription)] || ""} onChange={(event) => { handleEditorChanges("changeLegendDescription", [String(activeFilterValueForDescription), event.target.value]) }} />
                      </label>
                      <label>
                        <select value={String(activeFilterValueForDescription)} onChange={(event) => { handleEditorChanges("changeActiveFilterValue", event.target.value) }}>
                          {filterValueOptionList.map( (arr, i) => {
                            return (<option value={arr} key={i}>{displayFilterLegendValue(arr)}</option>)
                          })}
                        </select>
                      </label>
                    </React.Fragment>)}
                    {"category" !== legend.type && (
                    <label className="checkbox">
                      <input type="checkbox"
                            checked={legend.separateZero || false}
                            onChange={(event) => handleEditorChanges("separateZero", event.target.checked)}
                      />
                      <span className="edit-label">Separate Zero</span>
                    </label>)}
                  {filtersJSX.length > 0 && (
                      <label className="checkbox">
                        <input type="checkbox" checked={ legend.dynamicDescription} onChange={() => { handleEditorChanges("dynamicDescription", filterValueOptionList[0]) }} />
                        <span className="edit-label">Dynamic Legend Description</span>
                      </label>)}
                  {filtersJSX.length > 0 &&
                    <label className="checkbox">
                      <input type="checkbox"
                            checked={legend.unified}
                            onChange={(event) => handleEditorChanges("unifiedLegend", event.target.checked)}
                      />
                      <span className="edit-label">Unified Legend</span>
                    </label>
                  }
                </AccordionItemPanel>
              </AccordionItem>}
              {"navigation" !== state.general.type && <AccordionItem> {/* Filters */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Filters
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {filtersJSX.length > 0 ? filtersJSX : (<p style={{textAlign: "center"}}>There are currently no filters.</p>) }
                  <button className={"btn full-width"} onClick={(event) => {event.preventDefault(); changeFilter(null, "addNew")}}>Add Filter</button>
                </AccordionItemPanel>
              </AccordionItem>}
              {"navigation" !== state.general.type && (
              <AccordionItem> {/* Data Table */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Data Table
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <TextField value={dataTable.title} updateField={updateField} section="dataTable" fieldName="title" label="Data Table Title" placeholder="Data Table" />
                  <label className="checkbox">
                    <input type="checkbox" checked={ state.general.expandDataTable || false } onChange={(event) => { handleEditorChanges("expandDataTable", event.target.checked) }} />
                    <span className="edit-label">Map loads with data table expanded</span>
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" checked={ state.general.showDownloadButton } onChange={(event) => { handleEditorChanges("toggleDownloadButton", event.target.checked) }} />
                    <span className="edit-label">Enable Download CSV Button</span>
                  </label>
                </AccordionItemPanel>
              </AccordionItem>)}
              <AccordionItem> {/* Tooltips */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Tooltips / Modals
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <label>
                    <span className="edit-label">Information on map appears on</span>
                    <select value={state.tooltips.appearanceType } onChange={(event) => { handleEditorChanges("appearanceType", event.target.value) }}>
                      <option value="hover">Hover - Tooltip</option>
                      <option value="click">Click - Popover Modal</option>
                    </select>
                  </label>
                  <p className="info">On mobile, information always appears in a popover modal when a user taps on an item.</p>
                  {'click' === state.tooltips.appearanceType &&
                    <TextField value={tooltips.linkLabel} section="tooltips" fieldName="linkLabel" label="Tooltips Link Label" updateField={updateField} />
                  }
                  <label className="checkbox">
                    <input type="checkbox" checked={state.tooltips.capitalizeLabels} onChange={(event) => { handleEditorChanges("capitalizeLabels", event.target.checked) }} />
                    <span className="edit-label">Capitalize text inside tooltip</span>
                  </label>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem> {/* Visual */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Visual
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <label className="header">
                    <span className="edit-label">Header Theme</span>
                    <ul className="color-palette">
                      {headerColors.map( (palette) => {

                        return (
                            <li title={ palette } key={ palette } onClick={ () => { handleEditorChanges("headerColor", palette) }} className={ state.general.headerColor === palette ? "selected " + palette : palette}>
                            </li>
                        )
                      })}
                    </ul>
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" checked={ state.general.showTitle || false } onChange={(event) => { handleEditorChanges("showTitle", event.target.checked) }} />
                    <span className="edit-label">Show Title</span>
                  </label>
                  {"navigation" !== state.general.type && (
                  <label className="checkbox">
                    <input type="checkbox" checked={ state.general.showSidebar || false } onChange={(event) => { handleEditorChanges("showSidebar", event.target.checked) }} />
                    <span className="edit-label">Show Legend</span>
                  </label>)}
                  {"navigation" !== state.general.type && (
                  <label>
                    <span className="edit-label">Legend Position</span>
                    <select value={legend.position || false } onChange={(event) => { handleEditorChanges("sidebarPosition", event.target.value) }}>
                      <option value="side">Side</option>
                      <option value="bottom">Bottom</option>
                    </select>
                  </label>)}
                  {"side" === legend.position && (
                      <label className="checkbox">
                        <input type="checkbox" checked={ legend.singleColumn} onChange={(event) => { handleEditorChanges("singleColumnLegend", event.target.checked) }} />
                        <span className="edit-label">Single Column Legend</span>
                      </label>)}
                  {"navigation" === state.general.type && (
                  <label className="checkbox">
                    <input type="checkbox" checked={ state.general.fullBorder || false } onChange={(event) => { handleEditorChanges("fullBorder", event.target.checked) }} />
                    <span className="edit-label">Add border around map</span>
                  </label>)}
                  <label>
                    <span className="edit-label">Geo Border Color</span>
                    <select value={state.general.geoBorderColor || false } onChange={(event) => { handleEditorChanges("geoBorderColor", event.target.value) }}>
                      <option value="darkGray">Dark Gray (Default)</option>
                      <option value="sameAsBackground">White</option>
                    </select>
                  </label>
                  <label>
                    <span className="edit-label">Map Color Palette</span>
                  </label>
                  <h5>Quantitative</h5>
                  <ul className="color-palette">
                    {Object.keys(colorPalettes).filter((name) => !name.includes('qualitative')).map( (palette) => {

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
                          <li title={ palette } key={ palette } onClick={ () => { handleEditorChanges("color", palette) }} className={ state.color === palette ? "selected" : ""}>
                            <span style={colorOne}></span>
                            <span  style={colorTwo}></span>
                            <span  style={colorThree}></span>
                          </li>
                      )
                    })}
                  </ul>
                  <h5>Qualitative</h5>
                  <ul className="color-palette">
                    {Object.keys(colorPalettes).filter((name) => name.includes('qualitative')).map( (palette) => {

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
                          <li title={ palette } key={ palette } onClick={ () => { handleEditorChanges("color", palette) }} className={ state.color === palette ? "selected" : ""}>
                            <span style={colorOne}></span>
                            <span  style={colorTwo}></span>
                            <span  style={colorThree}></span>
                          </li>
                      )
                    })}
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </form>
          <a href="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html" target="_blank" rel="noopener noreferrer" className="guidance-link">
            <MapIcon />
            <div>
              <h3>Get Maps Help</h3>
              <p>Examples and documentation</p>
            </div>
          </a>
          <div className="advanced">
            <span className="advanced-toggle-link" onClick={() => setAdvancedToggle(!advancedToggle)}><span>{advancedToggle ? `— ` : `+ `}</span>Advanced Options</span>
            {advancedToggle && (
              <React.Fragment>
                <section className="error-box my-2"><div><h5 className="pt-1">Warning</h5><p>This can cause serious errors in your map.</p></div></section>
                <p className="pb-2">This tool displays the actual map configuration <acronym title="JavaScript Object Notation">JSON</acronym> that is generated by this editor and allows you to edit properties directly and apply them.</p>
                <textarea value={ configData } onChange={(event) => setConfigData(event.target.value)} />
                <button className="btn full-width" onClick={() => loadConfig(JSON.parse(configData))}>Apply</button>
              </React.Fragment>
            )}
          </div>
        </section>
      </section>
    </ErrorBoundary>
  )
})

export default EditorPanel;
