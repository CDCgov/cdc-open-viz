import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { useContext, useMemo, useState } from 'react'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import FieldSetWrapper from '@cdc/core/components/EditorPanel/FieldSetWrapper'
import FilterEditor from './components/FilterEditor'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { DashboardContext, DashboardDispatchContext } from '../../../DashboardContext'
import _ from 'lodash'
import { DashboardFilters } from '../../../types/DashboardFilters'
import { SharedFilter } from '../../../types/SharedFilter'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import DeleteFilterModal from './components/DeleteFilterModal'
import { addValuesToDashboardFilters } from '../../../helpers/addValuesToDashboardFilters'
import { FILTER_STYLE } from '../../../types/FilterStyles'
import { handleSorting } from '@cdc/core/components/Filters'
import { mapFilterValues } from '../../../helpers/getFilteredData'
import { stateToIso } from '@cdc/map/src/data/supported-geos.js'

type DashboardFitlersEditorProps = {
  vizConfig: DashboardFilters
  updateConfig: Function
}

const DashboardFiltersEditor: React.FC<DashboardFitlersEditorProps> = ({ vizConfig, updateConfig }) => {
  const { config, loadAPIFilters, data } = useContext(DashboardContext)
  const { overlay } = useGlobalContext()
  const {
    dashboard: { sharedFilters },
    visualizations
  } = config
  const dispatch = useContext(DashboardDispatchContext)

  const existingOptions = useMemo(() => {
    const sharedFilterIndexes = (config.visualizations[vizConfig.uid] as DashboardFilters).sharedFilterIndexes.map(
      Number
    )
    return config.dashboard.sharedFilters
      ?.map<[number, string]>(({ key }, i) => [i, key])
      .filter(([filterIndex]) => !sharedFilterIndexes.includes(filterIndex)) // filter out already added filters
      .map(([filterIndex, filterName]) => (
        <option key={filterIndex} value={filterIndex}>{`${filterIndex} - ${filterName}`}</option>
      ))
  }, [config.visualizations, vizConfig.uid])

  const openControls = useState({})
  const [canAddExisting, setCanAddExisting] = useState(false)

  const updateFilterProp = (prop: string, index: number, value) => {
    const newSharedFilters = _.cloneDeep(sharedFilters)
    const {
      apiEndpoint: oldEndpoint,
      valueSelector: oldValueSelector,
      textSelector: oldTextSelector,
      subgroupValueSelector: oldSubgroupValueSelector,
      subgroupTextSelector: oldSubgroupTextSelector
    } = sharedFilters[index].apiFilter || {}
    const apiFilterChanged =
      value?.apiEndpoint !== oldEndpoint ||
      value?.valueSelector !== oldValueSelector ||
      value?.textSelector !== oldTextSelector ||
      value?.subgroupValueSelector !== oldSubgroupValueSelector ||
      value?.subgroupTextSelector !== oldSubgroupTextSelector

    newSharedFilters[index][prop] = value

    if (prop === 'columnName') {
      if (newSharedFilters[index].subGrouping) delete newSharedFilters[index].subGrouping
      // changing a data column and want to load the data into the preview options
      const sharedFiltersWithValues = addValuesToDashboardFilters(newSharedFilters, data)
      dispatch({ type: 'SET_SHARED_FILTERS', payload: sharedFiltersWithValues })
    } else if (prop === 'filterStyle') {
      newSharedFilters[index] = {
        ...newSharedFilters[index],
        active: '',
        apiFilter: {
          apiEndpoint: '',
          subgroupValueSelector: '',
          textSelector: '',
          valueSelector: ''
        },
        filterStyle: value
      }
      dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
    } else if (prop === 'apiFilter' && value.apiEndpoint && value.valueSelector && apiFilterChanged) {
      if (sharedFilters[index].filterStyle === FILTER_STYLE.nestedDropdown && value.subgroupValueSelector) {
        newSharedFilters[index].subGrouping = {
          active: '',
          columnName: '',
          setByQueryParameter: '',
          valuesLookup: {}
        }
      }
      // changing a api filter and want to load the api data into the preview.
      // automatically dispatches SET_SHARED_FILTERS
      loadAPIFilters(newSharedFilters, {})
    } else if (prop === 'propertyToUpdate' && value === 'geoType') {
      if (
        newSharedFilters[index].visualizationType === 'map' &&
        newSharedFilters[index].propertyToUpdate === 'geoType'
      ) {
        newSharedFilters[index].values = mapFilterValues
        dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
      }
    } else if (prop === 'propertyToUpdate' && value === 'focusedState') {
      if (
        newSharedFilters[index].visualizationType === 'map' &&
        newSharedFilters[index].propertyToUpdate === 'focusedState'
      ) {
        // get all state names
        debugger
        newSharedFilters[index].values = Object.keys(stateToIso)
        dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
      }
    } else {
      handleSorting(newSharedFilters[index])
      dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
    }
  }

  const toggleNestedQueryParameters = (index, checked: boolean) => {
    const newSharedFilters = _.cloneDeep(sharedFilters)
    const filter = newSharedFilters[index]
    const isUrlFilter = filter.type === 'urlfilter'
    const groupColumnName = isUrlFilter ? filter.apiFilter.valueSelector : filter.columnName
    const subGroupColumnName = isUrlFilter ? filter.apiFilter.subgroupValueSelector : filter.subGrouping.columnName
    filter.setByQueryParameter = checked ? groupColumnName : undefined
    filter.subGrouping.setByQueryParameter = checked ? subGroupColumnName : undefined
    dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
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
                  <p>
                    The Apply Button option changes the visualization when the user clicks "apply". The Filter Change
                    option immediately changes the visualization when the selection is changed.
                  </p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
          {vizConfig.filterBehavior === 'Apply Button' && (
            <TextField
              label='Apply Filter Button Text'
              maxLength={20}
              value={vizConfig.applyFiltersButtonText}
              updateField={(_section, _subsection, _key, value) => {
                updateConfig({ ...vizConfig, applyFiltersButtonText: value })
              }}
            />
          )}
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
                    <p>
                      Check if you would like for all URL filters to automatically select a value when a parent filter
                      is changed.
                    </p>
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
              <FieldSetWrapper
                key={filter.key + index}
                fieldName={filter.key}
                fieldKey={index}
                fieldType='Dashboard Filter'
                controls={openControls}
                deleteField={() => {
                  overlay?.actions.openOverlay(
                    <DeleteFilterModal
                      removeFilterCompletely={removeFilter}
                      removeFilterFromViz={index => {
                        updateConfig({
                          ...vizConfig,
                          sharedFilterIndexes: vizConfig.sharedFilterIndexes.filter(i => i !== index)
                        })
                      }}
                      filterIndex={index}
                    />
                  )
                }}
              >
                <FilterEditor
                  filter={filter}
                  filterIndex={index}
                  updateFilterProp={(name, value) => {
                    updateFilterProp(name, index, value)
                  }}
                  toggleNestedQueryParameters={checked => {
                    toggleNestedQueryParameters(index, checked)
                  }}
                  config={config}
                />
              </FieldSetWrapper>
            )
          })}
          <button onClick={addNewFilter} className='btn btn-primary full-width'>
            Add Filter
          </button>
          {canAddExisting ? (
            <label>
              <span className='edit-label column-heading'>
                Select Existing Dashboard Filter
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      This feature is indentended to support legacy functionality. Be advised that any change to the
                      filter in this editor will reflect on the whole dashboard.{' '}
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              </span>
              <select
                value={''}
                onChange={e => {
                  updateConfig({
                    ...vizConfig,
                    sharedFilterIndexes: [...vizConfig.sharedFilterIndexes, e.target.value]
                  })
                  setCanAddExisting(false)
                }}
              >
                {[
                  <option key='select' value=''>
                    Select
                  </option>,
                  ...existingOptions
                ]}
              </select>
            </label>
          ) : (
            <button onClick={() => setCanAddExisting(true)} className='btn btn-primary full-width mt-2'>
              Add Existing Dashboard Filter
            </button>
          )}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default DashboardFiltersEditor
