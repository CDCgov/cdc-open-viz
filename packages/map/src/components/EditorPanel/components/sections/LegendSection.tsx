import React, { useContext, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import includes from 'lodash/includes'
import { useDebouncedCallback } from 'use-debounce'

import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../context'
import { parseBreakpointString } from '../../../../helpers/breakpointHelpers'
import { parseLegendNumber } from '../../../../helpers/legendNumberHelpers'
import { useManualBreakpoints } from '../../../../hooks/useManualBreakpoints'
import type { MapContext } from '../../../../types/MapContext'
import ManualBreakpointsEditor from '../ManualBreakpointsEditor'

type LegendSectionProps = {
  columnNames: string[]
  numberOfItemsLimit: number
}

type DynamicDescProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> & {
  value?: string | string[] | null
  activeFilterValueForDescription: unknown[]
  onDescriptionChange: (value: [string, string]) => void
}

type CategoryListProps = {
  categoryValuesOrder: any[]
}

type CategorySortMode = 'automatic' | 'custom'

const getDescriptionValue = (value: DynamicDescProps['value']) => {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}

const DynamicDesc = ({
  value: stateValue,
  activeFilterValueForDescription,
  onDescriptionChange,
  ...attributes
}: DynamicDescProps) => {
  const stateDescription = getDescriptionValue(stateValue)
  const debouncedDescriptionChange = useDebouncedCallback((filterValue: unknown[], description: string) => {
    if (stateDescription !== description) onDescriptionChange([String(filterValue), description])
  }, 500)

  return (
    <textarea
      onChange={event => debouncedDescriptionChange(activeFilterValueForDescription, event.target.value)}
      {...attributes}
      defaultValue={stateDescription}
    />
  )
}

const CategoryList = ({ categoryValuesOrder }: CategoryListProps) => {
  const categoryItems = categoryValuesOrder.reduce<React.ReactNode[]>((items, value) => {
    if (value?.special) return items

    items.push(
      <Draggable key={value} draggableId={`item-${value}`} index={items.length}>
        {(provided, snapshot) => (
          <li style={{ position: 'relative' }}>
            <div
              className={snapshot.isDragging ? 'currently-dragging' : ''}
              style={provided.draggableProps.style}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {value}
            </div>
          </li>
        )}
      </Draggable>
    )

    return items
  }, [])

  return <>{categoryItems}</>
}

const LegendSection = ({ columnNames, numberOfItemsLimit }: LegendSectionProps) => {
  const { config, setConfig, runtimeFilters, runtimeLegend } = useContext<MapContext>(ConfigContext)
  const { legend } = config
  const [activeFilterValueForDescription, setActiveFilterValueForDescription] = useState<unknown[]>([0, 0])
  const updateField = updateFieldFactory(config, setConfig)

  const handleEditorChanges = async (property, value) => {
    switch (property) {
      case 'sidebarPosition':
        setConfig({
          ...config,
          legend: { ...config.legend, position: value, hideBorder: includes(['top', 'bottom'], value) }
        })
        break
      case 'legendStyle':
        setConfig({ ...config, legend: { ...config.legend, style: value } })
        break
      case 'legendSubStyle':
        setConfig({ ...config, legend: { ...config.legend, subStyle: value } })
        break
      case 'legendTickRotation':
        setConfig({ ...config, legend: { ...config.legend, tickRotation: value } })
        break
      case 'legendBorder':
        setConfig({ ...config, legend: { ...config.legend, hideBorder: value } })
        break
      case 'legendNumber':
        setConfig({ ...config, legend: { ...config.legend, numberOfItems: parseInt(value) } })
        break
      case 'legendBreakpoints':
        setConfig({ ...config, legend: { ...config.legend, breakpoints: parseBreakpointString(value) } })
        break
      case 'changeActiveFilterValue':
        setActiveFilterValueForDescription(value.split(','))
        break
      case 'unifiedLegend':
        setConfig({ ...config, legend: { ...config.legend, unified: value } })
        break
      case 'legendShowSpecialClassesLast':
        setConfig({
          ...config,
          legend: { ...config.legend, showSpecialClassesLast: !config.legend.showSpecialClassesLast }
        })
        break
      case 'dynamicDescription':
        setConfig({
          ...config,
          editor: { ...config.editor, activeFilterValueForDescription: value },
          legend: { ...config.legend, dynamicDescription: !config.legend.dynamicDescription }
        })
        break
      case 'changeLegendDescription': {
        const [filterValKey, filterValDesc] = value
        setConfig({
          ...config,
          legend: {
            ...config.legend,
            descriptions: { ...config.legend.descriptions, [filterValKey]: [filterValDesc] }
          }
        })
        break
      }
      default:
        console.warn(`COVE: Did not recognize editor property.`) // eslint-disable-line
        break
    }
  }

  const breakpoints = useManualBreakpoints({
    breakpoints: config.legend.breakpoints,
    primaryColumnName: config.columns.primary.name,
    data: config.data,
    onCommit: value => handleEditorChanges('legendBreakpoints', value)
  })

  const getCategoryValuesOrder = (): any[] => {
    const values =
      runtimeLegend?.items?.length > 0
        ? runtimeLegend.items.filter(item => !item.special).map(runtimeLegendItem => runtimeLegendItem.value)
        : []

    if (!config.legend.categoryValuesOrder?.length) return values

    return values.sort((a, b) => {
      const aVal = config.legend.categoryValuesOrder.indexOf(a)
      const bVal = config.legend.categoryValuesOrder.indexOf(b)
      if (aVal === bVal) return 0
      if (aVal === -1) return 1
      if (bVal === -1) return -1
      return aVal - bVal
    })
  }

  const categoryMove = (idx1, idx2) => {
    const categoryValuesOrder = getCategoryValuesOrder()
    const [movedItem] = categoryValuesOrder.splice(idx1, 1)
    categoryValuesOrder.splice(idx2, 0, movedItem)
    config.legend.categoryValuesOrder?.forEach(value => {
      if (!categoryValuesOrder.includes(value)) categoryValuesOrder.push(value)
    })

    setConfig({ ...config, legend: { ...config.legend, categoryValuesOrder } })
  }

  const categorySortMode: CategorySortMode = config.legend.categoryValuesOrder?.length ? 'custom' : 'automatic'
  const setCategorySortMode = (mode: CategorySortMode) => {
    setConfig({
      ...config,
      legend: { ...config.legend, categoryValuesOrder: mode === 'custom' ? getCategoryValuesOrder() : [] }
    })
  }

  const displayFilterLegendValue = arr => {
    const filterName = config.filters?.[arr?.[0]]?.label || `Unlabeled Legend`
    const filterValue = runtimeFilters[arr[0]]
    if (filterValue) return filterName + ' - ' + filterValue.values[arr[1]]
  }

  const filterValueOptionList = []
  if (runtimeFilters.length > 0) {
    runtimeFilters.forEach((filter, index) => {
      runtimeFilters[index]?.values?.forEach((value, valueNum) => filterValueOptionList.push([index, valueNum]))
    })
  }

  const columnsOptions = [
    <option value='' key='Select Option'>
      - Select Option -
    </option>
  ]
  columnNames.forEach(columnName => {
    columnsOptions.push(
      <option value={columnName} key={columnName}>
        {columnName}
      </option>
    )
  })

  const allowLegendSeparators = legend.style === 'gradient' && legend.subStyle === 'linear blocks'

  if (config.general.type === 'navigation') return null

  return (
    <AccordionItem>
      {' '}
      <AccordionItemHeading>
        <AccordionItemButton>Legend</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {['equalnumber', 'equalinterval', 'manual'].includes(config.legend.type) && (
          <Select
            label='Legend Type'
            value={legend.type}
            options={[
              { value: 'equalnumber', label: 'Equal Number (Quantiles)' },
              { value: 'equalinterval', label: 'Equal Interval' },
              { value: 'manual', label: 'Manual Breakpoints' }
            ]}
            onChange={event => {
              const primaryValue = config.data?.[0]?.[config.columns.primary.name]
              const primaryType = typeof primaryValue
              let messages = []

              if (primaryValue === undefined || primaryValue === null || primaryValue === '') {
                messages.push(
                  `There appears to be values missing for data in the primary column ${config.columns.primary.name}`
                )
              }

              if (
                primaryType === 'string' &&
                parseLegendNumber(primaryValue, config.columns.primary) === null &&
                event.target.value !== 'category'
              ) {
                messages.push(
                  'Error with legend. Primary columns that are text must use a categorical legend type. Try changing the legend type to categorical.'
                )
              } else {
                messages = []
              }

              const nextConfig = cloneConfig(config)
              nextConfig.legend.type = event.target.value
              nextConfig.runtime.editorErrorMessage = messages
              setConfig(nextConfig)
            }}
          />
        )}
        {legend.type === 'manual' && (
          <ManualBreakpointsEditor
            inputs={breakpoints.inputs}
            items={breakpoints.items}
            analysis={breakpoints.analysis}
            onAdd={breakpoints.add}
            onRemove={breakpoints.remove}
            onClear={breakpoints.clear}
            onUpdate={breakpoints.update}
            onCommit={breakpoints.commit}
          />
        )}
        <CheckBox
          value={config.general.showSidebar || false}
          section='general'
          subsection={null}
          fieldName='showSidebar'
          label='Show Legend'
          updateField={updateField}
        />
        <Select
          label='Legend Position'
          value={legend.position || ''}
          options={[
            { value: 'side', label: 'Side' },
            { value: 'bottom', label: 'Bottom' },
            { value: 'top', label: 'Top' }
          ]}
          onChange={event => handleEditorChanges('sidebarPosition', event.target.value)}
        />
        {(config.legend.position === 'side' || !config.legend.position) && config.legend.style === 'gradient' && (
          <span style={{ color: 'red', fontSize: '14px' }}>
            Position must be set to top or bottom to use gradient style.
          </span>
        )}
        <Select
          label={
            <>
              Legend Style
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon
                    display='question'
                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                  />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>
                    If using gradient style, limit the legend to five items for better mobile visibility, and position
                    the legend at the top or bottom.
                  </p>
                </Tooltip.Content>
              </Tooltip>
            </>
          }
          value={legend.style || ''}
          options={[
            { value: 'circles', label: 'circles' },
            { value: 'boxes', label: 'boxes' },
            ...(legend.position !== 'side' ? [{ value: 'gradient', label: 'gradient' }] : [])
          ]}
          onChange={event => handleEditorChanges('legendStyle', event.target.value)}
        />
        {config.legend.style === 'gradient' && (
          <Select
            label='Gradient Style'
            value={legend.subStyle || ''}
            options={['linear blocks', 'smooth']}
            onChange={event => handleEditorChanges('legendSubStyle', event.target.value)}
          />
        )}
        {allowLegendSeparators && (
          <TextField
            value={legend.separators}
            updateField={updateField}
            section='legend'
            fieldName='separators'
            label='Legend Separators'
            placeholder='ex: 1,4'
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>Separators between legend items represented by the legend item numbers separated by commas.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        )}
        {config.legend.style === 'gradient' && (
          <label>
            <span className='edit-label'>Tick Rotation (Degrees)</span>
            <input
              type='number'
              className='number-narrow'
              value={legend.tickRotation || ''}
              onChange={event => handleEditorChanges('legendTickRotation', event.target.value)}
            />
          </label>
        )}
        <CheckBox
          value={legend.hideBorder}
          section='legend'
          subsection={null}
          fieldName='hideBorder'
          label='Hide Legend Box'
          updateField={updateField}
          onChange={event => handleEditorChanges('legendBorder', event.target.checked)}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon
                  display='question'
                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                />
              </Tooltip.Target>
              <Tooltip.Content>
                <p> Default option for top and bottom legends is 'No Box.'</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
        {'side' === legend.position && (
          <CheckBox
            value={legend.singleColumn}
            section='legend'
            subsection={null}
            fieldName='singleColumn'
            label='Single Column Legend'
            updateField={updateField}
            onChange={event => {
              const nextConfig = cloneConfig(config)
              nextConfig.legend.singleColumn = event.target.checked
              nextConfig.legend.singleRow = false
              nextConfig.legend.verticalSorted = false
              setConfig(nextConfig)
            }}
          />
        )}
        {'side' !== legend.position && legend.style !== 'gradient' && (
          <CheckBox
            value={legend.singleRow}
            section='legend'
            subsection={null}
            fieldName='singleRow'
            label='Single Row Legend'
            updateField={updateField}
            onChange={event => {
              const nextConfig = cloneConfig(config)
              nextConfig.legend.singleRow = event.target.checked
              nextConfig.legend.singleColumn = false
              nextConfig.legend.verticalSorted = false
              setConfig(nextConfig)
            }}
          />
        )}
        {config.legend.type === 'category' && (
          <Select
            label='Legend Group By :'
            value={legend.groupBy || ''}
            options={columnsOptions.map(option => option.key)}
            onChange={event => {
              const nextConfig = cloneConfig(config)
              nextConfig.legend.groupBy = event.target.value
              setConfig(nextConfig)
            }}
          />
        )}
        {config.legend.style !== 'gradient' && (
          <CheckBox
            value={legend.verticalSorted}
            section='legend'
            subsection={null}
            fieldName='verticalSorted'
            label='Vertical sorted legend'
            updateField={updateField}
          />
        )}
        <CheckBox
          value={legend.showSpecialClassesLast}
          section='legend'
          subsection={null}
          fieldName='showSpecialClassesLast'
          label='Show Special Classes Last'
          updateField={updateField}
          onChange={event => handleEditorChanges('legendShowSpecialClassesLast', event.target.checked)}
        />
        {['equalnumber', 'equalinterval', 'manual'].includes(legend.type) && (
          <CheckBox
            value={legend.separateZero || false}
            section='legend'
            subsection={null}
            fieldName='separateZero'
            label='Separate Zero'
            updateField={updateField}
            onChange={event => {
              const checked = event.target.checked
              setConfig({
                ...config,
                general: { ...config.general, equalNumberOptIn: checked ? true : config.general.equalNumberOptIn },
                legend: { ...config.legend, separateZero: checked }
              })
            }}
            tooltip={
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon
                    display='question'
                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                  />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>For numeric data, you can separate the zero value as its own data class.</p>
                </Tooltip.Content>
              </Tooltip>
            }
          />
        )}
        {['equalnumber', 'equalinterval'].includes(legend.type) && (
          <Select
            label={
              <>
                Number of Items
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      For numeric maps, select the number of data classes. Do not include designated special classes.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              </>
            }
            value={legend.numberOfItems}
            options={[...Array(numberOfItemsLimit).keys()].map(num => ({ value: num + 1, label: num + 1 }))}
            onChange={event => handleEditorChanges('legendNumber', event.target.value)}
          />
        )}
        {'category' === legend.type && (
          <>
            <CheckBox
              value={Boolean(legend.includeNonGeoDataInDomain)}
              section='legend'
              subsection={null}
              fieldName='includeNonGeoDataInDomain'
              label='Include Non-Geographic Categories'
              updateField={updateField}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      Adds category values from rows that are not associated with a map geography to the legend. These
                      rows do not appear on the map or in the map data table.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
            <Select
              label={
                <>
                  Category Sort
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Automatic sort places numeric values and ranges first, ordered by their numeric bounds.
                        Non-numeric categories appear after those in data order. If the legend does not contain numbers,
                        categories stay in data order.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                </>
              }
              fieldName='categorySortMode'
              value={categorySortMode}
              options={[
                { label: 'Automatic sort', value: 'automatic' },
                { label: 'Custom sort', value: 'custom' }
              ]}
              onChange={event => setCategorySortMode(event.target.value as CategorySortMode)}
            />
            {categorySortMode === 'custom' && (
              <>
                <label>
                  <span className='edit-label'>
                    Category Order
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>Drag map categories into preferred legend order. </p>
                      </Tooltip.Content>
                    </Tooltip>
                  </span>
                </label>
                <DragDropContext
                  onDragEnd={({ source, destination }) => {
                    if (!destination) return
                    categoryMove(source.index, destination.index)
                  }}
                >
                  <Droppable droppableId='category_order'>
                    {provided => (
                      <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef}>
                        <CategoryList categoryValuesOrder={getCategoryValuesOrder()} />
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </DragDropContext>
              </>
            )}
            {runtimeLegend && runtimeLegend.length >= 10 && (
              <section className='error-box my-2'>
                <div>
                  <strong className='pt-1'>Warning</strong>
                  <p>
                    The maximum number of categorical legend items is 10. If your data has more than 10 categories your
                    map will not display properly.
                  </p>
                </div>
              </section>
            )}
          </>
        )}
        <TextField
          value={legend.title}
          updateField={updateField}
          section='legend'
          fieldName='title'
          label='Legend Title'
          placeholder='Legend Title'
        />
        {false === legend.dynamicDescription && (
          <TextField
            type='textarea'
            value={legend.description}
            updateField={updateField}
            section='legend'
            fieldName='description'
            label='Legend Description'
          />
        )}
        {true === legend.dynamicDescription && (
          <>
            <label>
              <span>Legend Description</span>
              <span className='subtext'>For {displayFilterLegendValue(activeFilterValueForDescription)}</span>
              <DynamicDesc
                key={String(activeFilterValueForDescription)}
                value={legend.descriptions[String(activeFilterValueForDescription)]}
                activeFilterValueForDescription={activeFilterValueForDescription}
                onDescriptionChange={value => handleEditorChanges('changeLegendDescription', value)}
              />
            </label>
            <label>
              <Select
                label='Filter Value'
                value={String(activeFilterValueForDescription)}
                options={filterValueOptionList.map(arr => ({ value: arr, label: displayFilterLegendValue(arr) }))}
                onChange={event => handleEditorChanges('changeActiveFilterValue', event.target.value)}
              />
            </label>
          </>
        )}
        {config.filters.length > 0 && (
          <label className='checkbox column-heading'>
            <CheckBox
              value={legend.dynamicDescription}
              section='legend'
              subsection={null}
              fieldName='dynamicDescription'
              label='Dynamic Legend Description'
              updateField={updateField}
              onChange={() => handleEditorChanges('dynamicDescription', filterValueOptionList[0])}
            />
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon
                  display='question'
                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Check this option if the map has multiple filter controls and you want to specify a description for
                  each filter selection.
                </p>
              </Tooltip.Content>
            </Tooltip>
          </label>
        )}
        <span className='d-flex mt-2'>
          <CheckBox
            value={legend.unified}
            section='legend'
            subsection={null}
            fieldName='unified'
            label='Unified Legend'
            updateField={updateField}
            onChange={event => handleEditorChanges('unifiedLegend', event.target.checked)}
          />
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon
                display='question'
                style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
              />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Check this option if you want the high and low values in the legend to be based on <em>all</em> mapped
                values (useful for maps with filters or small multiples).
              </p>
            </Tooltip.Content>
          </Tooltip>
        </span>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default LegendSection
