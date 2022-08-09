import React from 'react'

// Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/elements/Button'
import EditorPanelGlobal from '@cdc/core/components/EditorPanelGlobal'
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox'
import InputSelect from '@cdc/core/components/inputs/InputSelect'
import InputText from '@cdc/core/components/inputs/InputText'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'

const EditorPanels = () => {
  const { config, configActions, data } = useConfigContext()

  const getColumns = (filter = true) => {
    let columns = {}

    data.map(row => {
      Object.keys(row).forEach(columnName => columns[columnName] = true)
    })

    if (filter) {
      Object.keys(columns).forEach(key => {
        if ((config.series && config.series.filter(series => series.dataKey === key).length > 0) || (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key))) {
          delete columns[key]
        }
      })
    }

    return Object.keys(columns)
  }

  const removeFilter = (index) => {
    let dashboardConfig = config.dashboard
    dashboardConfig.filters.splice(index, 1)
    configActions.updateConfig({ ...config, dashboard: dashboardConfig })
  }

  const updateFilterProp = (name, index, value) => {
    let dashboardConfig = config.dashboard
    dashboardConfig.filters[index][name] = value
    configActions.updateConfig({ ...config, dashboard: dashboardConfig })
  }

  const addNewFilter = () => {
    let dashboardConfig = config.dashboard
    dashboardConfig.filters = dashboardConfig.filters || []
    dashboardConfig.filters.push({ values: [] })
    configActions.updateConfig({ ...config, dashboard: dashboardConfig })
  }

  const panelGeneral = (
    <Accordion.Section label="General">
      <InputText label="Title" configField={[ 'dashboard', 'title' ]}/>
      <InputText label="Label" configField={[ 'dashboard', 'description' ]} tooltip={<>
        <p>Enter supporting text to display below the data visualization, if applicable.<br/>
          <br/>
          <small>The following HTML tags are supported: strong, em, sup, and sub.</small>
        </p>
      </>}/>
    </Accordion.Section>
  )
  const panelFilters = (
    <Accordion.Section label="Filters">
      {config.dashboard.filters && config.dashboard.filters.map((filter, index) => (
        <SectionBlock key={index}>
          <Button className="cove-button--remove" onClick={() => {
            removeFilter(index)
          }}>Remove</Button>

          <InputSelect label="Filter" options={getColumns()} initial="Select data column" onChange={(e) => {
            updateFilterProp('columnName', index, e.target.value)
          }} value={filter.columnName}/>

          <InputText label="Filter Label" configField={[ 'filter', 'label' ]}/>
        </SectionBlock>
      ))}

      {(!config.filters || config.filters.length === 0) &&
        <p className="my-2" style={{ textAlign: 'center' }}>There are currently no filters.</p>
      }

      <Button onClick={addNewFilter} fluid>Add Filter</Button>
    </Accordion.Section>
  )

  const panelDataTable = (
    <Accordion.Section label="Data Table">
      <InputCheckbox label="Show Table" configField={[ 'table', 'show' ]}/>
      <InputCheckbox label="Expanded by Default" configField={[ 'table', 'expanded' ]}/>
      <InputCheckbox label="Display Download Button" configField={[ 'table', 'download' ]}/>
      <InputText label="Label" configField={[ 'table', 'label' ]}/>
    </Accordion.Section>
  )

  return (<>
    {EditorPanelGlobal()}
    {panelGeneral}
    {panelFilters}
    {panelDataTable}
  </>)
}

export default EditorPanels
