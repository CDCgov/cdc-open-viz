import React, { useEffect } from 'react'

// Context
import { useConfigStore } from '@cdc/core/stores/configStore'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/element/Button'
import ColorPicker from '@cdc/core/components/ui/ColorPicker'
import EditorPanelGlobal from '@cdc/core/components/editor/EditorPanelGlobal'
import InputCheckbox from '@cdc/core/components/input/InputCheckbox'
import InputSelect from '@cdc/core/components/input/InputSelect'
import InputText from '@cdc/core/components/input/InputText'
import Label from '@cdc/core/components/element/Label'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'
import SectionWrapper from '@cdc/core/components/ui/SectionWrapper'

// Constants
import { BITE_LOCATIONS, DATA_FUNCTIONS, DATA_OPERATORS, IMAGE_POSITIONS } from '../data/consts'

const EditorPanels = () => {
  const { config, setMissingRequiredSections, updateConfig } = useConfigStore()

  const requiredSections = [
    config.dataColumn,
    config.dataFunction
  ]

  useEffect(() => {
    if (requiredSections) setMissingRequiredSections(!requiredSections.every(isValid => !!isValid === true))
  }, [ config ])

  // Filters -----------------------------------------------
  const addNewFilter = () => {
    let filters = config.filters ? [ ...config.filters ] : []
    filters.push({ values: [] })
    updateConfig({ ...config, filters })
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [ ...config.filters ]
    filters[index][name] = value
    updateConfig({ ...config, filters })
  }

  const removeFilter = (index) => {
    let filters = [ ...config.filters ]
    filters.splice(index, 1)
    updateConfig({ ...config, filters })
  }

  const getColumns = (filter = true) => {
    let columns = {}
    config.data.map(row => Object.keys(row).forEach(columnName => columns[columnName] = true))
    return Object.keys(columns)
  }

  const getFilterColumnValues = (index) => {
    let filterDataOptions = []
    const filterColumnName = config.filters[index].columnName
    if (config.data && filterColumnName) {
      config.data.forEach(function (row) {
        if (undefined !== row[filterColumnName] && -1 === filterDataOptions.indexOf(row[filterColumnName])) {
          filterDataOptions.push(row[filterColumnName])
        }
      })
      filterDataOptions.sort()
    }
    return filterDataOptions
  }

  // Dynamic Images ----------------------------------------
  const updateDynamicImage = (name, index, subindex = null, value) => {
    let imageOptions = [ ...config.imageData.options ]
    null === subindex ? imageOptions[index][name] = value : imageOptions[index].arguments[subindex][name] = value

    let payload = { ...config.imageData, options: imageOptions }
    updateConfig({ ...config, imageData: payload })
  }

  const setDynamicArgument = (optionIndex, name, value) => {
    let imageArguments = [ ...config.imageData.options[optionIndex].arguments ]
    imageArguments[1] = { ...imageArguments[1], [name]: value }
    let argumentsPayload = { ...config.imageData.options[optionIndex], arguments: imageArguments }
    let optionsPayload = [ ...config.imageData.options ]
    optionsPayload[optionIndex] = argumentsPayload
    let payload = { ...config.imageData, options: optionsPayload }
    updateConfig({ ...config, imageData: payload })
  }

  const removeDynamicArgument = (optionIndex) => {
    if (config.imageData.options[optionIndex].arguments.length > 1) {
      let imageArguments = [ ...config.imageData.options[optionIndex].arguments ]
      imageArguments.pop()
      let argumentsPayload = { ...config.imageData.options[optionIndex], arguments: imageArguments }
      let optionsPayload = [ ...config.imageData.options ]
      optionsPayload[optionIndex] = argumentsPayload
      let payload = { ...config.imageData, options: optionsPayload }
      updateConfig({ ...config, imageData: payload })
    }
  }

  const addDynamicImage = () => {
    let imageOptions = config.imageData.options ? [ ...config.imageData.options ] : []
    imageOptions.push({ source: '', arguments: [ { operator: '', threshold: '' } ], alt: '', secondArgument: false })

    let payload = { ...config.imageData, options: imageOptions }
    updateConfig({ ...config, imageData: payload })
  }

  const removeDynamicImage = (index) => {
    let imageOptions = [ ...config.imageData.options ]
    imageOptions.splice(index, 1)

    let payload = { ...config.imageData, options: imageOptions }
    updateConfig({ ...config, imageData: payload })
  }

  // Panels -----------------------------------------------
  const panelGeneral = (
    <Accordion.Section label="General">
      <InputSelect label="Data bite Style" options={BITE_LOCATIONS} configField="biteStyle" initialDisabled/>

      {[ 'graphic' ].includes(config.biteStyle) &&
        <InputSelect label="Graphic Position" options={IMAGE_POSITIONS} configField="bitePosition" initialDisabled/>
      }

      <InputText label="Title" configField="title" placeholder="Data bite Title"/>

      <InputText label="Message" configField="biteBody" type="textarea" tooltip={<>
        <p>
          Enter the message text for the visualization. <br/>
          <br/>
          <small>The following HTML tags are supported:<br/> strong, em, sup, and sub.</small>
        </p>
      </>}/>

      <InputText label="Subtext/Citation" configField="subtext" placeholder="Data bite Subtext or Citation" tooltip={<>
        <p>
          Enter supporting text to display below the data visualization, if applicable. <br/>
          <br/>
          <small>The following HTML tags are supported: strong, em, sup, and sub.</small>
        </p>
      </>}/>

    </Accordion.Section>
  )
  const panelData = (
    <Accordion.Section label="Data" warnIf={(!config.dataColumn || !config.dataFunction)}>
      <div className="cove-grid cove-grid--gap--2">
        <div className="cove-grid__col--6">
          <InputSelect label="Data Column" options={getColumns()} configField="dataColumn" initialDisabled required/>
        </div>
        <div className="cove-grid__col--6">
          <InputSelect label="Data Function" options={DATA_FUNCTIONS} configField="dataFunction" initialDisabled required/>
        </div>
      </div>

      <SectionWrapper label="Number Formatting">
        <div className="cove-grid cove-grid--gap--2">
          <div className="cove-grid__col--4">
            <InputText label="Prefix" configField={[ 'dataFormat', 'prefix' ]}/>
          </div>
          <div className="cove-grid__col--4">
            <InputText label="Suffix" configField={[ 'dataFormat', 'suffix' ]}/>
          </div>
          <div className="cove-grid__col--4">
            <InputText label="Round" configField={[ 'dataFormat', 'roundToPlace' ]} type="number" min="0" max="99"/>
          </div>
        </div>
        <InputCheckbox label="Add commas" size="small" configField={[ 'dataFormat', 'commas' ]}/>
      </SectionWrapper>
    </Accordion.Section>
  )

  const panelFilters = (
    <Accordion.Section label="Filters">
      <Label tooltip={`To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").`}>
        Data Point Filters
      </Label>
      {config.filters && config.filters.map((filter, index) => (
        <SectionBlock key={index}>
          <Button className="cove-button--remove" onClick={() => {
            removeFilter(index)
          }}>Remove</Button>

          <InputSelect label="Column" options={getColumns()} initial="Select data column" onChange={(e) => {
            updateFilterProp('columnName', index, e.target.value)
          }} value={filter.columnName}/>

          <InputSelect label="Column Value" options={getFilterColumnValues(index)} initial="Select column value" onChange={(e) => {
            updateFilterProp('columnValue', index, e.target.value)
          }} value={filter.columnValue} disabled={!config.filters[index].columnName}/>
        </SectionBlock>
      ))}

      {(!config.filters || config.filters.length === 0) &&
        <p className="my-2" style={{ textAlign: 'center' }}>There are currently no filters.</p>
      }

      <Button onClick={addNewFilter} fluid>Add Filter</Button>
    </Accordion.Section>
  )

  const panelVisual = (
    <Accordion.Section label="Visual">
      <InputText label="bite Font Size" configField="biteFontSize" type="number" min="16" max="65"/>
      <InputSelect label="Overall Font Size" options={[ 'small', 'medium', 'large' ]} configField="fontSize"/>
    </Accordion.Section>
  )

  const panelImages = (
    <Accordion.Section label={`Image${[ 'dynamic' ].includes(config.imageData.display) ? 's' : ''}`}>
      <InputSelect label="Image Display Type" options={[ 'none', 'static', 'dynamic' ]} configField={[ 'imageData', 'display' ]} initialDisabled/>
      <InputSelect label="Image/Graphic Position" options={IMAGE_POSITIONS} configField="bitePosition" initialDisabled/>

      {[ 'static' ].includes(config.imageData.display) &&
        <>
          <InputText label="Image URL" configField={[ 'imageData', 'url' ]}/>
          <InputText label="Alt Text" configField={[ 'imageData', 'alt' ]}/>
        </>
      }

      {[ 'dynamic' ].includes(config.imageData.display) &&
        <>
          <InputText label="Image URL (default)" configField={[ 'imageData', 'url' ]}/>
          <InputText label="Alt Text (default)" configField={[ 'imageData', 'alt' ]}/>

          <hr className="cove-editor__divider"/>

          {(!config.imageData.options || config.imageData.options.length === 0) &&
            <p className="mb-2" style={{ textAlign: 'center' }}>
              There are currently no dynamic images.
            </p>
          }

          {config.imageData.options && config.imageData.options.length > 0 &&
            <>
              {config.imageData.options.map((option, index) => (
                <SectionBlock key={index}>
                  <Button className="cove-button--remove" onClick={() => {
                    removeDynamicImage(index)
                  }}>Remove</Button>

                  <Label>{'Image #' + (index + 1)}</Label>

                  <div className="cove-grid cove-grid--gap--2">
                    <div className="cove-grid__col--4">If Value</div>
                    <div className="cove-grid__col--4">
                      {/*<select value={option.arguments[0]?.operator || ''} onChange={(e) => {
                        updateDynamicImage('operator', index, 0, e.target.value)
                      }}>
                        <option value="" disabled/>
                        {DATA_OPERATORS.map((operator, index) => (
                          <option value={operator} key={index}>{operator}</option>
                        ))}
                      </select>*/}
                      <InputSelect label="" options={DATA_OPERATORS} onChange={(e) => {
                        updateDynamicImage('operator', index, 0, e.target.value)
                      }} initialDisabled/>
                    </div>
                    <div className="cove-grid__col--4">
                      {/*<input type="number" value={option.arguments[0]?.threshold || ''} onChange={(e) => {
                        updateDynamicImage('threshold', index, 0, e.target.value)
                      }}/>*/}
                      <InputText onChange={(e) => {
                        updateDynamicImage('threshold', index, 0, e.target.value)
                      }}/>
                    </div>
                  </div>

                  {/*<select className="border-dashed text-center" value={option.secondArgument ? 'and' : 'then'} onChange={(e) => {
                    if ('then' === e.target.value) {
                      updateDynamicImage('secondArgument', index, null, false)
                      removeDynamicArgument(index)
                    }
                    if ('and' === e.target.value) updateDynamicImage('secondArgument', index, null, true)
                  }}>
                    <option value={'then'}>Then</option>
                    <option value={'and'}>And</option>
                  </select>*/}
                  <InputSelect className="cove-input__border--dashed" value={option.secondArgument ? 'and' : 'then'} options={[ 'then', 'and' ]} onChange={(e) => {
                    if ('then' === e.target.value) {
                      updateDynamicImage('secondArgument', index, null, false)
                      removeDynamicArgument(index)
                    }
                    if ('and' === e.target.value) updateDynamicImage('secondArgument', index, null, true)
                  }}/>

                  {option.secondArgument && true === option.secondArgument &&
                    <>
                      <div className="cove-grid cove-grid--gap--2 mb-2">
                        <div className="cove-grid__col--4">
                          If Value
                        </div>
                        <div className="cove-grid__col--4">
                          {/*<select value={option.arguments[1]?.operator || ''} onChange={(e) => {
                            setDynamicArgument(index, 'operator', e.target.value)
                          }}>
                            <option value="" disabled/>
                            {DATA_OPERATORS.map((operator, index) => (
                              <option value={operator} key={index}>{operator}</option>
                            ))}
                          </select>*/}
                          <InputSelect className="mb-0" options={DATA_OPERATORS} onChange={(e) => {
                            setDynamicArgument(index, 'operator', e.target.value)
                          }}/>
                        </div>
                        <div className="cove-grid__col--4">
                          {/*<input type="number" value={option.arguments[1]?.threshold || ''} onChange={(e) => {
                            setDynamicArgument(index, 'threshold', e.target.value)
                          }}/>*/}
                          <InputText className="mb-0" type="number" onChange={(e) => {
                            setDynamicArgument(index, 'threshold', e.target.value)
                          }}/>
                        </div>
                      </div>
                      <p>THEN</p>
                    </>
                  }

                  {/*<input type="text" value={option.source || ''} onChange={(e) => {
                        updateDynamicImage('source', index, null, e.target.value)
                      }}/>*/}
                  <InputText label="Image URL" onChange={(e) => {
                    updateDynamicImage('source', index, null, e.target.value)
                  }}/>

                  {/*<input type="text" value={option.alt || ''} onChange={(e) => {
                        updateDynamicImage('alt', index, null, e.target.value)
                      }}/>*/}
                  <InputText label="Image Alt Text" onChange={(e) => {
                    updateDynamicImage('alt', index, null, e.target.value)
                  }}/>
                </SectionBlock>
              ))}
            </>
          }
          <Button className="mb-2" onClick={() => addDynamicImage()} fluid>Add Dynamic Image</Button>
        </>
      }
    </Accordion.Section>
  )

  return (
    <>
      {panelGeneral}
      {panelData}
      {panelFilters}
      {[ 'title', 'body' ].includes(config.biteStyle) && panelImages}
      {panelVisual}
      {EditorPanelGlobal()}
    </>
  )
}

export default EditorPanels
