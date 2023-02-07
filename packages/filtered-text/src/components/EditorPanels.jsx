// Store
import { useConfigStore } from '@cdc/core/stores/configStore'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/element/Button'
import EditorPanelGlobal from '@cdc/core/components/editor/EditorPanelGlobal'
import InputText from '@cdc/core/components/input/InputText'
import InputSelect from '@cdc/core/components/input/InputSelect'
import Label from '@cdc/core/components/element/Label'
import SectionBlock from '@cdc/core/components/ui/SectionBlock'

const EditorPanels = () => {
  const { config, updateConfig } = useConfigStore()

  // Filters -----------------------------------------------
  const addNewFilter = () => {
    let filters = config.filters ? [ ...config.filters ] : []
    filters.push({ values: [] })
    updateConfig({ ...config, filters })
  }

  const removeFilter = (index) => {
    let filters = [ ...config.filters ]
    filters.splice(index, 1)
    updateConfig({ ...config, filters })
  }

  const updateFilterProp = (name, index, value) => {
    let filters = [ ...config.filters ]
    filters[index][name] = value
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

  // Panels -----------------------------------------------
  const panelGeneral = (
    <Accordion.Section label="General">
      <InputText label="Title" placeholder="Filterable Text Title" configField="title"/>
    </Accordion.Section>
  )

  const panelData = (
    <Accordion.Section label="Data">
      <InputSelect label="Text Column" options={getColumns()} configField="textColumn" initialDisabled/>

      <hr className="cove-editor__divider"/>

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
        <p className="my-2" style={{ fontStyle: 'italic', textAlign: 'center' }}>There are currently no filters.</p>
      }

      <Button onClick={addNewFilter} fluid>Add Filter</Button>
    </Accordion.Section>
  )

  return (
    <>
      {panelGeneral}
      {panelData}
      {EditorPanelGlobal()}
    </>
  )
}

export default EditorPanels
