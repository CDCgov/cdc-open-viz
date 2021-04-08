import React, { useState, useEffect, useCallback, memo } from 'react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import ReactTooltip from 'react-tooltip'
import { useDebounce } from 'use-debounce';

// IE11 Custom Event polyfill
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();

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
//   const {
//     state,
//     loadConfig,
//     setState,
//     generateValuesForFilter,
//     processData,
//     processLegend
//   } = props

//   const { general, color, columns, legend, data, filters, dataTable, tooltips, processedData, processedLegend, loading } = state

  const [ requiredColumns, setRequiredColumns ] = useState([]) // Simple state so we know if we need more information before parsing the map

//   const [ configData, setConfigData ] = useState({})

//   const [ loadedDefault, setLoadedDefault ] = useState(false)

  const [ displayPanel, setDisplayPanel ] = useState(true)
  
//   const [ advancedToggle, setAdvancedToggle ] = useState(false)

//   const [ activeFilterValueForDescription, setActiveFilterValueForDescription ] = useState([0,0])

//   const [ editorCatOrder, setEditorCatOrder ] = useState([])

//   const headerColors = ['theme-blue','theme-purple','theme-brown','theme-teal','theme-pink','theme-orange','theme-slate','theme-indigo','theme-cyan','theme-green','theme-amber']

//   const resetColumnsObj = {
//     geo: {
//         dataTable: true,
//         label: "",
//         name: "",
//         tooltip: false
//     },
//     primary: {
//         dataTable: true,
//         label: "",
//         name: "",
//         prefix: "",
//         suffix: "",
//         tooltip: true
//     },
//     navigate: {
//         dataTable: false,
//         name: "",
//         tooltip: false
//     },
//     geosInRegion: {
//         name: ''
//     }
//   }

//   const handleEditorChanges = async (property, value) => {
//     switch (property) {
//       case 'showTitle':
//         setState( (prevState) => {

//             return {
//                 general: {
//                     ...prevState.general,
//                     showTitle: value
//                 }
//             }
//         })
//       break;
//       case 'showSidebar':
//         setState( (prevState) => {

//             return {
//                 general: {
//                     ...prevState.general,
//                     showSidebar: value
//                 }
//             }
//         })
//       break;
//       case 'fullBorder':
//         setState( (prevState) => {

//             return {
//                 general: {
//                     ...prevState.general,
//                     fullBorder: value
//                 }
//             }
//         })
//       break;
//       case 'expandDataTable':
//         setState( (prevState) => {

//             return {
//                 general: {
//                     ...prevState.general,
//                     expandDataTable: value
//                 }
//             }
//         })
//       break;
//       case 'color':
//         setState( (prevState) => {

//             return {
//                 color: value
//             }
//         })
//       break;
//       case 'hasRegions':
//         setState( (prevState) => {

//               return {
//                   general: {
//                       ...prevState.general,
//                       hasRegions: value
//                   },
//                   columns: resetColumnsObj,
//                   processedData: {}
//               }
//         })
//       break;
//       case 'sidebarPosition':
//         setState( (prevState) => {

//             return {
//                 legend: {
//                     ...prevState.legend,
//                     position: value
//                 }
//             }
//         })
//       break;
//       case 'geoBorderColor':
//         setState( (prevState) => {

//             return {
//                 general: {
//                     ...prevState.general,
//                     geoBorderColor: value
//                 }
//             }
//         })
//       break;
//       case 'headerColor':
//         setState( (prevState) => {

//             return {
//                 general: {
//                     ...prevState.general,
//                     headerColor: value
//                 }
//             }
//         })
//       break;
//       case 'geoColumn':
//         setState( (prevState) => {

//               return {
//                   columns: {
//                       ...prevState.columns,
//                       geo: {
//                           ...prevState.columns.geo,
//                           name: value
//                       }
//                   }
//               }
//         })
//       break;
//       case 'navigateColumn':
//         setState( (prevState) => {

//             return {
//                 columns: {
//                     ...prevState.columns,
//                     navigate: {
//                         ...prevState.columns.navigate,
//                         name: value
//                     }
//                 }
//             }
//         })
//       break;
//       case 'legendDescription':
//         setState( (prevState) => {

//             return {
//                 legend: {
//                     ...prevState.legend,
//                     description: value
//                 }
//             }
//         })
//       break;
//       case 'legendType':
//         setState( (prevState) => { return {legend: {...legend, type: value} } } )
//       break;
//       case 'legendNumber':
//         setState( (prevState) => {
//               return {
//                   legend: {
//                     ...prevState.legend,
//                     numberOfItems: parseInt(value)
//                   }
//               }
//         })
//       break;
//       case 'changeActiveFilterValue':
//         const arrVal = value.split(',')

//         setActiveFilterValueForDescription(arrVal)
//       break;
//       case 'unifiedLegend':
//         setState( () => {
//             return {
//                 legend: {...legend, unified: value}
//             }
//         })
//       break;
//       case 'separateZero':
//         setState( () => {
//             return {
//                 legend: {...legend, separateZero: value}
//             }
//         })
//       break;
//       case 'editorDataUrl':
//         setState({dataUrl: value})
//       break;
//       case 'toggleDownloadButton':
//             setState( (prevState) => {
//                 return {
//                     general: {
//                         ...prevState.general,
//                         showDownloadButton: !prevState.general.showDownloadButton
//                     }
//                 }
//             })
//       break;
//       case 'editorMapType':
//         switch(value) {
//             case 'data':
//                 setState( (prevState) => {
//                     return {
//                         general: {
//                             ...prevState.general,
//                             showSidebar: true,
//                             type: "data"
//                         },
//                     }
//                 })
//                 break;
//             case 'navigation':
//                 setState( (prevState) => {
//                     return {
//                         general: {
//                           ...prevState.general,
//                           showSidebar: false,
//                           type: "navigation",
//                         },
//                         tooltips: {
//                             ...prevState.tooltips,
//                             appearanceType: "hover"
//                         }
//                     }
//                 })
//                 break;
//             default:
//                 console.warn("Map type not set")
//             break;
//         }

//         setState(() => {
//             return {
//                 processedData: processData()
//             }
//         })
//       break;
//       case 'geoType':
//         // If we're still working with default data, switch to the world default to show it as an example
//         if(true === loadedDefault && 'world' === value) {
//           loadConfig(worldDefaultConfig)
//           ReactTooltip.rebuild()
//           break;
//         }

//         if(true === loadedDefault && 'us' === value) {
//           loadConfig(usaDefaultConfig)
//           ReactTooltip.rebuild()
//           break;
//         }

//         switch(value) {
//             case 'us':
//                 setState( (prevState) => {
//                     return {
//                         general: {
//                             ...prevState.general,
//                             geoType: "us"
//                         }
//                     }
//                 })
//                 break;
//             case 'world':
//                 setState( (prevState) => {
//                     return {
//                         general: {
//                             ...prevState.general,
//                             geoType: "world",
//                         }
//                     }
//                 })
//                 break;
//             default:
//                 console.warn("Map type not set.")
//             break;
//         }

//         ReactTooltip.rebuild()
//       break;
//       case 'categoryOrder':
//         const categoryValuesOrder = arrayMove(processedLegend.categoryValuesOrder, value[0], value[1])

//         setState( (prevState) => {
//             return {
//               legend: {
//                 ...prevState.legend,
//                 categoryValuesOrder
//               }
//             }
//         })
//       break;
//       case 'singleColumnLegend':
//         setState( (prevState) => {
//             return {
//                 legend: {
//                     ...prevState.legend,
//                     singleColumn: !prevState.legend.singleColumn
//                 }
//             }
//         })
//       break;
//       case 'dynamicDescription':
//         setState( (prevState) => {
//             return {
//                 editor: {
//                     ...prevState.editor,
//                     activeFilterValueForDescription: value
//                 },
//                 legend: {
//                     ...prevState.legend,
//                     dynamicDescription: !prevState.legend.dynamicDescription
//                 }
//             }
//         })
//       break;
//       case 'changeLegendDescription':
//         const [filterValKey, filterValDesc] = value

//         setState( (prevState) => {
//             return {
//                 legend: {
//                     ...prevState.legend,
//                     descriptions: {
//                         ...prevState.legend.descriptions,
//                         [filterValKey]: [filterValDesc]
//                     }
//                 }
//             }
//         })
//       break;
//       case 'appearanceType':
//         setState( (prevState) => {

//             return {
//                 tooltips: {
//                     ...prevState.tooltips,
//                     appearanceType: value
//                 }
//             }
//         })
//       break;
//       case 'linkLabel':
//         setState( (prevState) => {

//             return {
//                 tooltips: {
//                     ...prevState.tooltips,
//                     linkLabel: value
//                 }
//             }
//         })
//       break;
//       case 'capitalizeLabels':
//           setState( (prevState) => {

//               return {
//                   tooltips: {
//                       ...prevState.tooltips,
//                       capitalizeLabels: value
//                   }
//               }
//           })
//       break;
//       default:
//           console.warn(`Did not recognize editor property.`)
//       break;
//     }
//   }

//   const columnsRequiredChecker = useCallback(() => {
//     const columnList = []

//     // Geo is always required
//     if('' === state.columns.geo.name) {
//       let colName = state.general.hasRegions ? 'Region' : 'Geography'

//       columnList.push(colName)
//     }

//     // Geos in Region is required for region maps
//     if(true === state.general.hasRegions && '' === state.columns.geosInRegion.name) {
//       columnList.push('Geos in Region')
//     }

//     // Primary is required if we're on a data map
//     if('data' === state.general.type && '' === state.columns.primary.name) {
//       columnList.push('Primary')
//     }

//     // Navigate is required for navigation maps
//     if('navigation' === state.general.type && ('' === state.columns.navigate.name || undefined === state.columns.navigate) ) {
//       columnList.push('Navigation')
//     }

//     setRequiredColumns(columnList)
//   }, [state.columns, state.general.hasRegions, state.general.type])

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

    // Remove viewport
    delete strippedState.viewport

    // Remove default data marker if the user started this map from default data
    delete strippedState.defaultData
    
    // Remove tooltips if they're active in the editor
    let strippedGeneral = JSON.parse(JSON.stringify(state.general))

    delete strippedGeneral.modalOpen;
    delete strippedGeneral.modalContent;
    delete strippedGeneral.parentUrl;
    delete strippedGeneral.logoImage;

    // Strip out computed items
    delete strippedGeneral.viewportSize;

    strippedState.general = strippedGeneral

    return JSON.stringify( strippedState )
  }

//   useEffect(() => setLoadedDefault(state.defaultData), [state.defaultData])

//   useEffect(() => columnsRequiredChecker(), [state.columns, state.general])

//   useEffect(() => {
//     if(0 === requiredColumns.length && false === loading) {
//       const processedData = processData()

//       setState(() => { return {processedData} })
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [requiredColumns])

  // Generate all columns available by looping through the data - add a blank value at the top
//   const columnsInData = [""]

//   state.data.forEach( (row) => {

//     Object.keys(row).forEach( (columnName) => {
//       if(false === columnsInData.includes(columnName)) {
//         columnsInData.push(columnName)
//       }
//     })

//   } )

//   const columnsOptions = columnsInData.map( (name) => {

//     if("" === name) {
//       return (<option value="" key={"Select Option"}>- Select Option -</option>)
//     }

//     return (<option value={name} key={name}>{name}</option>)
//   })

//   const specialClasses = []

//   if("" !== legend.specialClasses[0]) {
//     legend.specialClasses.forEach( (specialClass, index) => {
//       specialClasses.push({id: index, name: specialClass})
//     })
//   }

//   const additionalColumns = Object.keys(state.columns).filter( (value) => {
//     const defaultCols = [
//       'geo',
//       'navigate',
//       'primary',
//       'geosInRegion'
//     ]
    
//     if( true === defaultCols.includes(value) ) {
//       return false
//     }
//     return true
//   })

//   const updateField = (section, subsection, fieldName, newValue) => {
//     const isArray = Array.isArray(state[section]);
//     let sectionValue = isArray ? [...state[section], newValue] : {...state[section], [fieldName]: newValue};

//     if(null !== subsection) {
//       if(isArray) {
//         sectionValue = [...state[section]]
//         sectionValue[subsection] = {...sectionValue[subsection], [fieldName]: newValue}
//       } else {
//         sectionValue = {...state[section], [subsection]: { ...state[section][subsection], [fieldName]: newValue}}
//       }
//     }

//     let updatedState = {
//       [section]: sectionValue
//     }

//     setState(() => updatedState)
//   }

//   useEffect(() => {
//     const parsedData = convertStateToConfigFile()

//     const formattedData = JSON.stringify(JSON.parse(parsedData), undefined, 2);

//     setConfigData(formattedData)

//     // Emit the data in a regular JS event so it can be consumed by anything.
//     const event = new CustomEvent('updateMapConfig', { detail: parsedData})

//     window.dispatchEvent(event)
      
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [state])

//   useEffect(() => {
//     if('data' === state.general.type) {
//       const processedLegend = processLegend()

//       setState(() => { return {processedLegend} })
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [legend, processedData])

//   if(loading) {
//     return null
//   }

  return (
    <ErrorBoundary component="EditorPanel">
      {0 !== requiredColumns.length && <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />}
      <button className={displayPanel ? `editor-toggle` : `editor-toggle collapsed`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={() => setDisplayPanel(!displayPanel) }></button>
      <section className={displayPanel ? 'editor-panel' : 'hidden editor-panel'}>
        <h2>Configure Chart</h2>
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
                    Lorem Ipsum
                  {/* <label>
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
                  <TextField value={general.title} updateField={updateField} section="general" fieldName="title" label="Title" placeholder="Map Title" />
                  <p className="info">For accessibility, you should enter a title even if you are not planning on displaying it.</p>
                  <TextField type="textarea" value={general.subtext} updateField={updateField} section="general" fieldName="subtext" label="Subtext" />
                  {'us' === state.general.geoType &&
                    <TextField value={general.territoriesLabel} updateField={updateField} section="general" fieldName="territoriesLabel" label="Territories Label" placeholder="Territories" />
                  } */}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Y Axis
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    Lorem Ipsum
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    X Axis
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    Lorem Ipsum
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Legend
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    Lorem Ipsum
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Visual
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    Lorem Ipsum
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Data Table
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    Lorem Ipsum
                </AccordionItemPanel>
              </AccordionItem>
           </Accordion>
          </form>
        </section>
      </section>
    </ErrorBoundary>
  )
})

export default EditorPanel;