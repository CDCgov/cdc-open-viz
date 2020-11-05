import React, { useRef, useState, useEffect, useCallback } from 'react'
import ReactTooltip from 'react-tooltip'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
// import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import Papa from 'papaparse';

import Waiting from './Waiting'
import mapIcon from '../images/map-folded.svg'
import UsaGraphic from '../images/united-states-editor.svg'
import WorldGraphic from '../images/globe-editor.svg'
import colorPalettes from '../data/color-palettes'
import arrayMove from 'array-move'

const ReactTags = require('react-tag-autocomplete');

const Editor = (props) => {

  const {
    state,
    loadConfig,
    setState,
    generateValuesForFilter,
    processData,
    processLegend,
    cleanCsvData,
    fetchRemoteData,
    loading
  } = props

  const { legend, processedData, processedLegend } = state

  const fileInput = useRef(null);

  const [ requiredColumns, setRequiredColumns ] = useState([]) // Simple state so we know if we need more information before parsing the map

  const [ configData, setConfigData ] = useState({})

  const [ loadedDefault, setLoadedDefault ] = useState(state.defaultData)

  const [ displayPanel, setDisplayPanel ] = useState(true)
  
  const [ advancedToggle, setAdvancedToggle ] = useState(false)

  const [ keepUrl, setKeepUrl ] = useState(false)

  const [ dataSource, setDataSource ] = useState('local')

  const [ localData, setLocalData ] = useState(null)

  const [ activeFilterValueForDescription, setActiveFilterValueForDescription ] = useState(null)

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
      case 'title':

          setState( (prevState) => {

              return {
                  general: {
                      ...prevState.general,
                      title: value
                  }
              }
          })

      break;
      case 'subtext':

          setState( (prevState) => {

              return {
                  general: {
                      ...prevState.general,
                      subtext: value
                  }
              }
          })

      break;
      case 'territoriesLabel':

          setState( (prevState) => {

              return {
                  general: {
                      ...prevState.general,
                      territoriesLabel: value
                  }
              }
          })

          break;
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
      case 'backgroundColor':
          setState( (prevState) => {

              return {
                  general: {
                      ...prevState.general,
                      backgroundColor: value
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
      case 'legendTitle':

          setState( (prevState) => {

              return {
                  legend: {
                      ...prevState.legend,
                      title: value
                  }
              }
          })

      break;
      case 'dataTableTitle':

          setState( (prevState) => {

              return {
                  dataTable: {
                      ...prevState.dataTable,
                      title: value
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
      break;
      case 'editorDataUrl':
          setState({dataUrl: value})
      break;
      case 'loadFileData':

          if("csv" === value[1]) {
              const parsedCsv = Papa.parse(value[0], {
                  header: true,
                  dynamicTyping: true
              })

              const uploadedCsvData = cleanCsvData(parsedCsv.data)

              setLocalData(uploadedCsvData)
          } else if("json" === value[1]) {
              const uploadedJsonData = JSON.parse(value[0])

              setLocalData(uploadedJsonData)
          }
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
                          },
                          tooltips: {
                              ...prevState.tooltips,
                              appearanceType: "hover"
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
            const worldDefaultConfig = await import('../examples/default-world.json');

            loadConfig(worldDefaultConfig)
            ReactTooltip.rebuild()
            break;
          }

          if(true === loadedDefault && 'us' === value) {
            const usaDefaultConfig = await import('../examples/default-usa.json');

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
          setState( (prevState) => {
              return {
                  legend: {
                    ...prevState.legend,
                    categoryValuesOrder: arrayMove(processedLegend.categoryValuesOrder, value[0], value[1])
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

          const filterValKey = value[0]

          const filterValDesc = value[1]

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

  const loadData = async (e) => {
    e.preventDefault()

    // If this started out using default data we are not anymore
    if(true === loadedDefault) {
      setLoadedDefault(false)
    }

    setState(() => { return {loading: true} })

    // Reset a lot of state when loading new data
    let resetObj = {
        columns: resetColumnsObj,
        filters: [],
        legend: {
            ...legend,
            data: [],
            descriptions: {},
            specialClasses: [],
        },
        processedData: {}
    }

    let data = {}

    switch(dataSource) {
        case 'local':
            data = localData
        break;
        case 'url':
            data = await fetchRemoteData(state.dataUrl)
        break;
        default:
            console.warn(`Editor Load Data type not set`)
        break;
    }

    setState({...resetObj, data, loading: false})
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
    if('navigation' === state.general.type && '' === state.columns.navigate.name) {
      columnList.push('Navigation')
    }

    setRequiredColumns(columnList)
  }, [state.columns])

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
      let newFilters = Array.from(state.filters)

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

    const filterName = state.filters[ arr[0] ].label || `Unlabeled Legend`

    const filterValue = state.filters[ arr[0] ].values[ arr[1] ]

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

  const convertStateToConfigFile = () => {
    let strippedState = JSON.parse(JSON.stringify(state))

    // Strip ref
    delete strippedState[""]

    // Delete processed data and legend
    delete strippedState.processedData
    delete strippedState.processedLegend

    // Remove the legend
    let strippedLegend = JSON.parse(JSON.stringify(state.legend))

    delete strippedLegend.data
    delete strippedLegend.disabledAmt

    strippedState.legend = strippedLegend

    // Remove loading status
    delete strippedState.loading

    // Remove default data marker if the user started this map from default data
    delete strippedState.defaultData
    
    // Remove tooltips if they're active in the editor
    let strippedGeneral = JSON.parse(JSON.stringify(state.general))

    delete strippedGeneral.modalOpen;
    delete strippedGeneral.modalContent;
    delete strippedGeneral.parentUrl;

    // Strip out computed items
    delete strippedGeneral.viewportSize;

    strippedState.general = strippedGeneral

    if(state.dataUrl && true === keepUrl) {
        delete strippedState.data // If the data is pulled dynamically from a URL, don't store the data locally
    }

    if(state.dataUrl && false === keepUrl) {
        delete strippedState.dataUrl
    }

    return JSON.stringify( strippedState )
  }

  useEffect(() => columnsRequiredChecker(), [columnsRequiredChecker, state.columns, state.general])

  useEffect(() => {
    if(0 === requiredColumns.length && false === loading) {
      const processedData = processData()

      setState(() => { return {processedData} })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requiredColumns])

  // const SortableItem = SortableElement(({value}) => <li style={sortableItemStyles}>{value}</li>);

  // const SortableList = SortableContainer(({items}) => {
  //   if(undefined === items) {
  //     return (<div></div>)
  //   }

  //   return (
  //       <ul className="sort-list">
  //         {items.map((value, index) => (
  //             <SortableItem key={`item-${index}`} index={index} value={value} />
  //         ))}
  //       </ul>
  //   )
  // });

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

  const filters = state.filters.map( (filter, index) => {
    return (
        <fieldset className="edit-block">
          <button className="remove-column" onClick={(event) => { event.preventDefault(); changeFilter(index, "remove")}}>Remove</button>
          <label>
            <span className="edit-label column-heading">Filter</span>
            <select value={filter.columnName} onChange={(event) => { changeFilter(index, "columnName", event.target.value) }}>
              {columnsOptions}
            </select>
          </label>
          <label>
            <span className="edit-label">Label</span>
            <input type="text" value={filter.label} onChange={(event) => { changeFilter(index, "label", event.target.value) }} />
          </label>
        </fieldset>
  )
  })

  const filterValueOptionList = []

  if(state.filters.length > 0) {

    state.filters.forEach( (filter, index) => {

      state.filters[index].values.forEach( (value, valueNum) => {

        filterValueOptionList.push([index, valueNum])

      })

    })

  }

  useEffect(() => {
    const parsedData = convertStateToConfigFile()

    const formattedData = JSON.stringify(JSON.parse(parsedData), undefined, 2);

    setConfigData(formattedData)

    if(true === state.usingWidgetLoader) {

      const event = new CustomEvent('updateConfig', { detail: parsedData})

      try {
        // Pass the information to the hidden input in the WCMS
        window.parent.document.dispatchEvent(event)
      } catch {
        console.warn(`Unable to reach WCMS to store edits.`)
      }
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

  return (
    <>
      {0 !== requiredColumns.length && <Waiting requiredColumns={requiredColumns} />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={() => setDisplayPanel(!displayPanel) }></button>
      <section className={displayPanel ? 'editor-panel' : 'hidden editor-panel'}>
        <h2>Configuration </h2>
        <section className="form-container">
          <form>
            <Accordion allowZeroExpanded={true}>
              <AccordionItem> {/* Data */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Import Data
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul className="data-toggle">
                    <li className={ dataSource === "local" ? "active" : ""} onClick={ () => { setDataSource('local') } }>
                      <label>
                        <span className="edit-label column-heading">Local File</span>
                        <input type="file"
                              ref={fileInput}
                              id="file" name="file"
                              onChange={() => {

                                const file = fileInput.current.files[0];

                                const extension = file.name.split('.').pop().toLowerCase()

                                if(false === ['csv','json'].includes(extension)) {
                                  alert("Wrong file type! File must be a .csv or .json file.");
                                }

                                const reader = new FileReader();

                                reader.readAsText(file, "UTF-8");

                                reader.onload = (evt) => {
                                  handleEditorChanges("loadFileData", [evt.target.result, extension])
                                }

                              }}
                              />
                      </label>
                    </li>
                    <li className={ dataSource === "url" ? "active" : ""} onClick={ () => { setDataSource('url') } }>
                      <label>
                        <span className="edit-label column-heading">URL</span>
                        <input type="text" placeholder="http://" value={state.dataUrl || ''} onChange={(event) => { handleEditorChanges("editorDataUrl", event.target.value) }} />
                      </label>
                      <label className="checkbox">
                        <input type="checkbox" checked={ keepUrl || false } onChange={(event) => { setKeepUrl(event.target.checked) }} />
                        <span className="edit-label">Always fetch from url</span>
                      </label>
                    </li>
                  </ul>
                  <button className="btn full-width" onClick={(e) => loadData(e)}>Load Data</button>
                </AccordionItemPanel>
              </AccordionItem>
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
                        <img src={UsaGraphic} alt="Continental United States" />
                        <span>United States</span>
                      </li>
                      <li className={state.general.geoType === 'world' ? 'active' : ''} onClick={() => handleEditorChanges("geoType", "world")}>
                        <img src={WorldGraphic} alt="Globe" />
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
                  <label>
                    <span className="edit-label column-heading">Title</span>
                    <input type="text" value={state.general.title || ""} onChange={(event) => { handleEditorChanges("title", event.target.value) }} />                
                  </label>
                  <p className="info">For accessibility purposes, you must enter an accurate title even if you are not planning on displaying this title.</p>
                  <label>
                    <span className="edit-label column-heading">Subtext</span>
                    <textarea value={state.general.subtext || ""} onChange={(event) => { handleEditorChanges("subtext", event.target.value) }} />
                  </label>
                  {'us' === state.general.geoType &&
                  <label>
                    <span className="edit-label column-heading">Territories Label</span>
                    <input type="text" value={state.general.territoriesLabel || "Territories"} onChange={(event) => { handleEditorChanges("territoriesLabel", event.target.value) }}/>
                  </label>}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem> {/* Columns */}
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Columns
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {'us' === state.general.geoType && 
                  <label className="checkbox">
                    <input type="checkbox" checked={ state.general.hasRegions || false} onChange={(event) => { handleEditorChanges("hasRegions", event.target.checked) }} />
                    <span className="edit-label">This map uses regions</span>
                  </label>
                  }
                  <label className="edit-block geo">
                    <span className="edit-label column-heading">{state.general.hasRegions ? `Region` : `Geography`}</span>
                    <select value={state.columns.geo ? state.columns.geo.name : columnsOptions[0] } onChange={(event) => { editColumn("geo", "name", event.target.value) }}>
                      {columnsOptions}
                    </select>
                  </label>
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
                    <span className="edit-label">Label</span>
                    <input type="text" value={state.columns.primary.label || ""} onChange={(event) => { editColumn("primary", "label", event.target.value) }} />
                  </label>
                  <ul className="column-edit">
                    <li className="three-col">
                      <label className="prefix">
                        <span className="edit-label">Prefix</span>
                        <input type="text" value={state.columns.primary.prefix || ""} onChange={(event) => { editColumn("primary", "prefix", event.target.value) }} />
                      </label>
                      <label className="suffix">
                        <span className="edit-label">Suffix</span>
                        <input type="text" value={state.columns.primary.suffix || ""} onChange={(event) => { editColumn("primary", "suffix", event.target.value) }} />
                      </label>
                      <label className="round">
                        <span className="edit-label">Round</span>
                        <input type="number" min="0" value={state.columns.primary.hasOwnProperty('roundToPlace') ? state.columns.primary.roundToPlace : "" } onChange={(event) => { editColumn("primary", "roundToPlace", event.target.value.length === 0 ? "None" : parseFloat( event.target.value ) ) }} />
                      </label>
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
                        <label>
                          <span className="edit-label">Label</span>
                          <input type="text" value={state.columns[val].label} onChange={(event) => { editColumn(val, "label", event.target.value) }} />
                        </label>
                        <ul className="column-edit">
                          <li className="three-col">
                            <label className="prefix">
                              <span className="edit-label">Prefix</span>
                              <input type="text" value={state.columns[val].prefix} onChange={(event) => { editColumn(val, "prefix", event.target.value) }} />
                            </label>
                            <label className="suffix">
                              <span className="edit-label">Suffix</span>
                              <input type="text" value={state.columns[val].suffix} onChange={(event) => { editColumn(val, "suffix", event.target.value) }} />
                            </label>
                            <label className="round">
                              <span className="edit-label">Round</span>
                              <input type="number" min="0" value={state.columns[val].hasOwnProperty('roundToPlace') ? state.columns[val].roundToPlace : "" } onChange={(event) => { editColumn(val, "roundToPlace", event.target.value.length === 0 ? "None" : parseFloat( event.target.value ) ) }} />
                            </label>
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
                  <label>
                    <span className="edit-label">Legend Type</span>
                    <select value={legend.type} onChange={(event) => { handleEditorChanges("legendType", event.target.value) }}>
                      <option value="equalnumber">Equal Number</option>
                      <option value="equalinterval">Equal Interval</option>
                      <option value="category">Categorical</option>
                    </select>
                  </label>
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
                      {/* <SortableList items={processedLegend.categoryValuesOrder} onSortEnd={(obj) => {  handleEditorChanges("categoryOrder", [obj.oldIndex, obj.newIndex]) }} /> */}
                      {processedLegend.categoryValuesOrder.length === 9 && <section className="warning"><strong>Warning</strong> The maximum number of categorical legend items is 9. If your data has more than 9 categories the additional categories will display as black on the map.</section>}
                    </React.Fragment>
                  }
                  <label>
                    <span>Legend Title</span>
                    <input type="text" value={legend.title || ""} onChange={(event) => { handleEditorChanges("legendTitle", event.target.value) }} />
                  </label>
                  {false === legend.dynamicDescription && (
                    <label>
                      <span>Legend Description</span>
                      <textarea value={legend.description || ""} onChange={(event) => { handleEditorChanges("legendDescription", event.target.value) }} />
                    </label>)}
                  {true === legend.dynamicDescription && (
                    <React.Fragment>
                      <label>
                        <span>Legend Description</span>
                        <span className="subtext">For {displayFilterLegendValue( activeFilterValueForDescription || [0,0] )}</span>
                        <textarea value={legend.descriptions[String(activeFilterValueForDescription)] || ""} onChange={(event) => { handleEditorChanges("changeLegendDescription", [String(activeFilterValueForDescription), event.target.value]) }} />
                      </label>
                      <label>
                        <select value={String(activeFilterValueForDescription)} onChange={(event) => { "changeActiveFilterValue", event.target.value }}>
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
                  {filters.length > 0 && (
                      <label className="checkbox">
                        <input type="checkbox" checked={ legend.dynamicDescription} onChange={() => { handleEditorChanges("dynamicDescription", filterValueOptionList[0]) }} />
                        <span className="edit-label">Dynamic Legend Description</span>
                      </label>)}
                  {filters.length > 0 &&
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
                  {filters.length > 0 ? filters : (<p style={{textAlign: "center"}}>There are currently no filters.</p>) }
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
                  <label>
                    <span>Data Table Title</span>
                    <input type="text" value={state.dataTable.title || ""} onChange={(event) => { handleEditorChanges("dataTableTitle", event.target.value) }} />
                  </label>
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
                  <label>
                    <span>Tooltips Link Label</span>
                    <input type="text" value={state.tooltips.linkLabel} onChange={(event) => { handleEditorChanges("linkLabel", event.target.value) }} />
                  </label>
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
                    <span className="edit-label">Background Color</span>
                    <select value={state.general.backgroundColor || false } onChange={(event) => { handleEditorChanges("backgroundColor", event.target.value) }}>
                      <option value="#FFF">White (Default)</option>
                      <option value="#f5f5f5">Gray</option>
                    </select>
                  </label>
                  <label>
                    <span className="edit-label">Geo Border Color</span>
                    <select value={state.general.geoBorderColor || false } onChange={(event) => { handleEditorChanges("geoBorderColor", event.target.value) }}>
                      <option value="darkGray">Dark Gray (Default)</option>
                      <option value="sameAsBackground">Same as Background</option>
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
            <img src={mapIcon} alt="Map Icon" />
            <div>
              <h3>Get Maps Help</h3>
              <p>Examples and documentation</p>
            </div>
          </a>
          <div className="advanced">
                  <span className="advanced-toggle-link" onClick={() => setAdvancedToggle(!advancedToggle)}><span>{advancedToggle ? `— ` : `+ `}</span>Advanced Options</span>
            {advancedToggle && (
              <React.Fragment>
                <section className="warning"><strong>Warning</strong> This can cause serious errors in your map.</section>
                <p>This tool displays the actual map configuration <acronym title="JavaScript Object Notation">JSON</acronym> that is generated by this editor and allows you to edit properties directly and apply them.</p>
                <textarea value={ configData } onChange={(event) => setConfigData(event.target.value)} />
                <button className="btn full-width" onClick={() => loadConfig(JSON.parse(configData))}>Apply</button>
              </React.Fragment>
            )}
          </div>
        </section>
      </section>
    </>
  )
}

export default Editor;