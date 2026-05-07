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
import { DashboardContext, DashboardDispatchContext } from '../../../DashboardContext'
import cloneDeep from 'lodash/cloneDeep'
import { DashboardFilters } from '../../../types/DashboardFilters'
import { SharedFilter } from '../../../types/SharedFilter'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import DeleteFilterModal from './components/DeleteFilterModal'
import { addValuesToDashboardFilters } from '../../../helpers/addValuesToDashboardFilters'
import { FILTER_STYLE } from '../../../types/FilterStyles'
import { handleSorting } from '@cdc/core/components/Filters'
import { removeDashboardFilter } from '../../../helpers/removeDashboardFilter'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import Button from '@cdc/core/components/elements/Button'

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
      .map(([filterIndex, filterName]) => ({
        value: String(filterIndex),
        label: `${filterIndex} - ${filterName}`
      }))
  }, [config.visualizations, vizConfig.uid])

  const openControls = useState({})
  const [canAddExisting, setCanAddExisting] = useState(false)
  const [isNestedDragHovered, setIsNestedDragHovered] = useState(false)

  const getActiveValueForFilterStyle = (filter: SharedFilter, filterStyle: string) => {
    const defaultValue = filter.defaultValue || filter.values?.[0] || ''
    return filterStyle === FILTER_STYLE.multiSelect ? (defaultValue ? [defaultValue] : []) : defaultValue
  }

  const updateFilterProp = (prop: string, index: number, value) => {
    const newSharedFilters = cloneDeep(sharedFilters)
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
      newSharedFilters[index].defaultValue = ''
      // changing a data column and want to load the data into the preview options
      const sharedFiltersWithValues = addValuesToDashboardFilters(newSharedFilters, data)
      dispatch({ type: 'SET_SHARED_FILTERS', payload: sharedFiltersWithValues })
    } else if (prop === 'filterStyle') {
      newSharedFilters[index] = {
        ...newSharedFilters[index],
        active: getActiveValueForFilterStyle(newSharedFilters[index], value),
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
    } else if (prop === 'defaultValue') {
      newSharedFilters[index].active = value
      dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
    } else {
      handleSorting(newSharedFilters[index])
      dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
    }
  }

  const toggleNestedQueryParameters = (index, checked: boolean) => {
    const newSharedFilters = cloneDeep(sharedFilters)
    const filter = newSharedFilters[index]
    const isUrlFilter = filter.type === 'urlfilter'
    const groupColumnName = isUrlFilter ? filter.apiFilter.valueSelector : filter.columnName
    const subGroupColumnName = isUrlFilter ? filter.apiFilter.subgroupValueSelector : filter.subGrouping.columnName
    filter.setByQueryParameter = checked ? groupColumnName : undefined
    filter.subGrouping.setByQueryParameter = checked ? subGroupColumnName : undefined
    dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
  }

  const removeFilter = index => {
    const [newSharedFilters, newVisualizations] = removeDashboardFilter(index, sharedFilters, visualizations)
    const dashboard = { ...config.dashboard, sharedFilters: newSharedFilters }
    dispatch({ type: 'SET_CONFIG', payload: { dashboard, visualizations: newVisualizations } })
  }

  const handleFilterReorder = (result: DropResult) => {
    const { source, destination } = result
    if (!destination || source.index === destination.index) return

    const newIndexes = [...vizConfig.sharedFilterIndexes]
    const [movedIndex] = newIndexes.splice(source.index, 1)
    newIndexes.splice(destination.index, 0, movedIndex)

    updateConfig({
      ...vizConfig,
      sharedFilterIndexes: newIndexes
    })
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    ...(isDragging && sortableItemStyles)
  })

  const sortableItemStyles = {
    background: 'rgba(0, 0, 0, 0.1)'
  }

  const addNewFilter = () => {
    const _sharedFilters = cloneDeep(sharedFilters) || []
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
          <TextField
            type='textarea'
            className='filter-editor__compact-textarea'
            label='Filter intro text'
            value={vizConfig.filterIntro || ''}
            updateField={(_section, _subsection, _key, value) => {
              updateConfig({ ...vizConfig, filterIntro: value })
            }}
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
          {vizConfig.filterBehavior === 'Apply Button' && (
            <CheckBox
              label='Show Clear Filters Button'
              value={vizConfig.showClearButton ?? true}
              updateField={(_section, _subsection, _key, value) => {
                updateConfig({ ...vizConfig, showClearButton: value })
              }}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      When enabled, displays a "Clear Filters" button that allows users to reset all filter selections.
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
          <AccordionItemButton>Visual</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <CheckBox
            label='Use Gray Background Style'
            section='visual'
            fieldName='grayBackground'
            value={vizConfig.visual?.grayBackground ?? false}
            updateField={(_section, _subsection, _key, value) => {
              updateConfig({
                ...vizConfig,
                visual: {
                  ...vizConfig.visual,
                  grayBackground: value
                }
              })
            }}
          />
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Filters</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <DragDropContext onDragEnd={handleFilterReorder}>
            <Droppable droppableId='dashboard_filters_list'>
              {provided => (
                <ul {...provided.droppableProps} ref={provided.innerRef} className='draggable-field-list'>
                  {vizConfig.sharedFilterIndexes.map((index, filterIndex) => {
                    const filter = sharedFilters[index]
                    return (
                      <Draggable
                        key={filter.key + index}
                        draggableId={`filter-${filter.key}-${index}`}
                        index={filterIndex}
                        isDragDisabled={isNestedDragHovered}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                            className={snapshot.isDragging ? 'currently-dragging' : ''}
                          >
                            <FieldSetWrapper
                              key={filter.key + index}
                              fieldName={filter.key}
                              fieldKey={index}
                              fieldType='Dashboard Filter'
                              controls={openControls}
                              draggable={true}
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
                                onNestedDragAreaHover={setIsNestedDragHovered}
                              />
                            </FieldSetWrapper>
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <Button variant='primary' fullWidth onClick={addNewFilter}>
            Add Filter
          </Button>
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
              <Select
                label=''
                value={''}
                options={[{ value: '', label: 'Select' }, ...(existingOptions || [])]}
                onChange={e => {
                  const parsed = Number(e.target.value)
                  if (!e.target.value || isNaN(parsed)) return
                  updateConfig({
                    ...vizConfig,
                    sharedFilterIndexes: [...vizConfig.sharedFilterIndexes, parsed]
                  })
                  setCanAddExisting(false)
                }}
              />
            </label>
          ) : (
            <Button variant='primary' fullWidth className='mt-2' onClick={() => setCanAddExisting(true)}>
              Add Existing Dashboard Filter
            </Button>
          )}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default DashboardFiltersEditor
