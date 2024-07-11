import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { useContext, useState } from 'react'
import { CheckBox, Select } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import FieldSetWrapper from '@cdc/core/components/EditorPanel/FieldSetWrapper'
import FilterEditor from './FilterEditor'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { DashboardContext, DashboardDispatchContext } from '../../../DashboardContext'
import _ from 'lodash'
import { DashboardFilters } from '../../../types/DashboardFilters'
import { SharedFilter } from '../../../types/SharedFilter'
import { addValuesToFilters } from '@cdc/core/helpers/addValuesToFilters'

type DashboardFitlersEditorProps = {
  vizConfig: DashboardFilters
  updateConfig: Function
}

const DashboardFiltersEditor: React.FC<DashboardFitlersEditorProps> = ({ vizConfig, updateConfig }) => {
  const { config, loadAPIFilters, data } = useContext(DashboardContext)
  const {
    dashboard: { sharedFilters },
    visualizations
  } = config
  const dispatch = useContext(DashboardDispatchContext)

  const openControls = useState({})

  const updateFilterProp = (prop: string, index: number, value) => {
    const newSharedFilters = _.cloneDeep(sharedFilters)
    const oldEndpoint = sharedFilters[index].apiFilter?.apiEndpoint
    const oldAPIValueSelector = sharedFilters[index].apiFilter?.valueSelector
    const apiFilterChanged = value.apiEndpoint !== oldEndpoint || value.valueSelector !== oldAPIValueSelector
    newSharedFilters[index][prop] = value
    if (prop === 'columnName') {
      // changing a data column and want to load the data into the preview options
      const sharedFiltersWithValues = addValuesToFilters<SharedFilter>(newSharedFilters, data)
      dispatch({ type: 'SET_SHARED_FILTERS', payload: sharedFiltersWithValues })
    } else if (prop === 'apiFilter' && value.apiEndpoint && value.valueSelector && apiFilterChanged) {
      // changing a api filter and want to load the api data into the preview.
      // automatically dispatches SET_SHARED_FILTERS
      loadAPIFilters(newSharedFilters, {})
    } else {
      dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
    }
  }

  const removeFilter = index => {
    const newSharedFilters = _.cloneDeep(sharedFilters)

    newSharedFilters.splice(index, 1)
    const shiftDownIndexes = Object.keys(sharedFilters).slice(index + 1)
    const anyViz: Record<string, AnyVisualization> = visualizations
    Object.keys(anyViz).forEach(vizKey => {
      const viz = anyViz[vizKey]
      if (viz.type === 'dashboardFilters') {
        // shift the indexes down
        const sharedFilterIndexes = viz.sharedFilterIndexes
          .filter(filterIndex => filterIndex != index)
          .map(filterIndex => {
            if (shiftDownIndexes.includes(filterIndex.toString())) {
              return filterIndex - 1
            }
            return filterIndex
          })
        dispatch({ type: 'UPDATE_VISUALIZATION', payload: { vizKey, configureData: { sharedFilterIndexes } } })
      }
    })
    dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
  }

  const addNewFilter = () => {
    const _sharedFilters = _.cloneDeep(sharedFilters) || []
    const columnName = 'New Dashboard Filter ' + (_sharedFilters.length + 1)
    const newFilter = { key: columnName, showDropdown: true, values: [] } as SharedFilter
    dispatch({ type: 'SET_SHARED_FILTERS', payload: [..._sharedFilters, newFilter] })
    updateConfig({ ...vizConfig, sharedFilterIndexes: [...vizConfig.sharedFilterIndexes, _sharedFilters.length] })
  }

  return (
    <Accordion allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>General</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Select
            value={vizConfig.filterBehavior}
            label='Filter Behavior'
            updateField={(_section, _subsection, _key, value) => {
              updateConfig({ ...vizConfig, filterBehavior: value })
            }}
            options={['Apply Button', 'Filter Change']}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
          {vizConfig.filterBehavior === 'Filter Change' && (
            <CheckBox
              label='Auto Load'
              value={vizConfig.autoLoad}
              updateField={(_section, _subsection, _key, value) => {
                updateConfig({ ...vizConfig, autoLoad: value })
              }}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Check if you would like for all URL filters to automatically select a value when a parent filter is changed.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          )}
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Filters</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {vizConfig.sharedFilterIndexes.map(index => {
            const filter = sharedFilters[index]
            return (
              <FieldSetWrapper key={filter.key + index} fieldName={filter.key} fieldKey={index} fieldType='Dashboard Filter' controls={openControls} deleteField={() => removeFilter(index)}>
                <FilterEditor
                  filter={filter}
                  updateFilterProp={(name, value) => {
                    updateFilterProp(name, index, value)
                  }}
                  config={config}
                />
              </FieldSetWrapper>
            )
          })}
          <button type='button' onClick={addNewFilter} className='btn btn-primary full-width'>
            Add Filter
          </button>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default DashboardFiltersEditor
