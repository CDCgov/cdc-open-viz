import React, { useEffect } from 'react'

//Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Components
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/elements/Button'
import ColorPicker from '@cdc/core/components/ui/ColorPicker'
import EditorPanelGlobal from '@cdc/core/components/EditorPanelGlobal'
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox'
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import InputText from '@cdc/core/components/inputs/InputText'
import Label from '@cdc/core/components/elements/Label'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'
import SectionWrapper from '@cdc/core/components/ui/SectionWrapper'

//Constants
import { DATA_OPERATORS, DATA_FUNCTIONS } from '../consts'

const themeColors = [ 'theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber' ]

const EditorPanels = () => {
  const { config, configActions, data, missingRequiredSections } = useConfigContext()

  /*useEffect(() => {
    if (setParentConfig) {
      const newConfig = convertStateToConfig()

      setParentConfig(newConfig)
    }
  }, [ config ])*/

  useEffect(() => {
    //Verify comparate data type
    let operators = [ '<', '>', '<=', '>=' ]
    if (config.dataConditionalComparate !== '') {
      if (operators.indexOf(config.dataConditionalOperator) > -1 && isNaN(config.dataConditionalComparate)) {
        configActions.updateConfig({ ...config, invalidComparate: true })
      } else {
        if (config.invalidComparate) {
          configActions.updateConfig({ ...config, invalidComparate: false })
        }
      }
    } else {
      configActions.updateConfig({ ...config, invalidComparate: false })
    }
  }, [ config.dataConditionalOperator, config.dataConditionalComparate ])

  const convertStateToConfig = () => {
    let strippedState = JSON.parse(JSON.stringify(config))
    if (false === missingRequiredSections()) {
      delete strippedState.newViz
    }
    delete strippedState.runtime
    return strippedState
  }

  // Filters -----------------------------------------------
  const addNewFilter = () => {
    let filters = config.filters ? [ ...config.filters ] : []
    filters.push({ values: [] })
    configActions.updateConfig({ ...config, filters })
  }

  const removeFilter = (index) => {
    let filters = [ ...config.filters ]
    filters.splice(index, 1)
    configActions.updateConfig({ ...config, filters })
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [ ...config.filters ]
    filters[index][name] = value
    configActions.updateConfig({ ...config, filters })
  }

  const getColumns = (filter = true) => {
    let columns = {}
    data.map(row => Object.keys(row).forEach(columnName => columns[columnName] = true))
    return Object.keys(columns)
  }

  const getFilterColumnValues = (index) => {
    let filterDataOptions = []
    const filterColumnName = config.filters[index].columnName
    if (data && filterColumnName) {
      data.forEach(function (row) {
        if (undefined !== row[filterColumnName] && -1 === filterDataOptions.indexOf(row[filterColumnName])) {
          filterDataOptions.push(row[filterColumnName])
        }
      })
      filterDataOptions.sort()
    }
    return filterDataOptions
  }

  // Panels -----------------------------------------------
  const panelGeneral = (
    <Accordion.Section label="General">
      <InputText label="Title" placeholder="Waffle Chart Title" configField="title"/>
      <InputText label="Message" type="textarea" configField="content"
                 tooltip="Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub."/>
      <InputText label="Subtext/Citation" placeholder="Waffle Chart Subtext or Citation" configField="subtext"
                 tooltip="Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub."/>
    </Accordion.Section>
  )

  const panelData = (
    <Accordion.Section label="Data">
      <SectionWrapper label="Numerator">
        <InputSelect label="Data Column" options={getColumns()} configField="dataColumn" initialDisabled/>
        <InputSelect label="Data Function" options={DATA_FUNCTIONS} configField="dataFunction" initialDisabled/>

        <Label>Data Conditional</Label>
        <div className="grid grid-gap-2 mb-3">
          <div className="col-4">
            <InputSelect className="mb-0" options={getColumns()} configField="dataConditionalColumn" initialDisabled/>
          </div>
          <div className="col-4">
            <InputSelect className="mb-0" options={DATA_OPERATORS} configField="dataConditionalOperator" initialDisabled/>
          </div>
          <div className="col-4">
            <InputText className="mb-0" configField="dataConditionalComparate"/>
          </div>
        </div>

        {config.invalidComparate &&
          <div className="accordion__panel-error">
            Non-numerical comparate values can only be used with = or ≠.
          </div>
        }
      </SectionWrapper>

      <SectionWrapper label="Denominator">
        <InputCheckbox label="Select from data" size="small" configField="customDenom"/>

        {!config.customDenom &&
          <div className="grid grid-gap-2 mb-3">
            <div className="col-6">
              <InputText className="mb-0" configField="dataDenom"/>
            </div>
            <div className="col-6">
              <small>default (100)</small>
            </div>
          </div>
        }
        {config.customDenom &&
          <>
            <InputSelect label="Data Column" options={getColumns()} configField="dataDenomColumn"/>
            <InputSelect label="Data Function" options={DATA_FUNCTIONS} configField="dataDenomFunction"/>
          </>
        }
      </SectionWrapper>

      <hr className="cove-editor__divider"/>

      <div className="grid grid-gap-2 mb-3">
        <div className="col-4">
          <InputText label="Prefix" className="mb-0" configField="prefix"/>
        </div>
        <div className="col-4">
          <InputText label="Suffix" className="mb-0" configField="suffix"/>
        </div>
        <div className="col-4">
          <InputText label="Round" className="mb-0" type="number" configField="roundToPlace"/>
        </div>
      </div>

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
      <InputSelect label="Shape" options={[ 'circle', 'square', 'person' ]} configField="shape"/>

      <div className="grid grid-gap-2 mb-3">
        <div className="col-6">
          <InputText label="Width" className="mb-0" type="number" configField="nodeWidth"/>
        </div>
        <div className="col-6">
          <InputText label="Spacer" className="mb-0" type="number" configField="nodeSpacer"/>
        </div>
      </div>

      <InputSelect label="Layout" options={[ 'horizontal', 'vertical' ]} configField="orientation"/>

      <Label>Data Point Font Size</Label>
      <div className="grid grid-gap-2 mb-3">
        <div className="col-6">
          <InputText className="mb-0" type="number" configField="fontSize"/>
        </div>
        <div className="col-6">
          <small>default (50px)</small>
        </div>
      </div>

      <InputSelect label="Overall Font Size" options={[ 'small', 'medium', 'large' ]} configField="overallFontSize"/>

      <ColorPicker label="Theme Colors" colors={themeColors}
                   tooltip="Select the theme color for the component" colorTooltip/>

    </Accordion.Section>
  )

  return (
    <>
      {EditorPanelGlobal()}
      {panelGeneral}
      {panelData}
      {panelFilters}
      {panelVisual}
    </>
  )
}

export default EditorPanels
