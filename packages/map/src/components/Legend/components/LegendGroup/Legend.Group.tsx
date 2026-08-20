import { useContext, useMemo } from 'react'
import './legend.group.css'
import LegendShape from '@cdc/core/components/LegendShape'
import { toggleLegendActive } from '../../../../helpers/toggleLegendActive'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext, { MapDispatchContext } from '../../../../context'
import { sortAutomaticCategoryValues, sortByConfiguredCategoryOrder } from '../../../../helpers/categorySortHelpers'

interface LegendItem {
  color: string
  label: string
  rawLabel?: string
  disabled?: boolean
  special: boolean
  runtimeIndex?: number
}

interface GroupedData {
  [key: string]: LegendItem[]
}

export const sortGroupedLegendItems = (items: LegendItem[], categoryValuesOrder: unknown[] = []) => {
  if (categoryValuesOrder.length) {
    return sortByConfiguredCategoryOrder(items, categoryValuesOrder, {
      getValue: item => item.rawLabel ?? item.label
    })
  }

  return sortAutomaticCategoryValues(items, item => item.rawLabel ?? item.label)
}

const getLegendButtonClasses = (item: LegendItem, hasDisabledItems: boolean) => {
  return [
    'legend-container__li-btn',
    'legend-container__item--interactive',
    item.disabled ? 'legend-group-item-disable' : hasDisabledItems ? 'legend-group-item-not-disable' : ''
  ]
    .filter(Boolean)
    .join(' ')
}

const LegendGroup = ({ legendItems }) => {
  const { runtimeLegend, config } = useContext(ConfigContext)
  const dispatch = useContext(MapDispatchContext)
  const groupLegendItems = (items: LegendItem[], data: object[], groupByKey: string): GroupedData => {
    if (!groupByKey || !data || !items) return {}

    const columnKey = config.columns.primary.name || ''
    const result: GroupedData = {}
    const itemsByLabel = new Map<LegendItem['label'], LegendItem>()

    items.forEach(item => {
      if (!itemsByLabel.has(item.label)) {
        itemsByLabel.set(item.label, item)
      }
    })

    for (const row of data) {
      const groupValue = row[groupByKey]
      if (!groupValue) continue

      const label = row[columnKey]
      const match = itemsByLabel.get(label)
      if (!match) continue

      result[groupValue] ||= []
      if (!result[groupValue].some(i => i.label === label)) {
        result[groupValue].push(match)
      }
    }

    // Sort items in each group
    Object.entries(result).forEach(([group, items]) => {
      result[group] = sortGroupedLegendItems(items, config.legend.categoryValuesOrder ?? [])
    })

    return result
  }

  const handleToggleItem = (item: LegendItem, fallbackIndex: number) => {
    const itemLabel = item.rawLabel ?? item.label

    toggleLegendActive(item.runtimeIndex ?? fallbackIndex, itemLabel, runtimeLegend, dispatch, config.legend.behavior)
  }

  const gridClass =
    config.legend.position === 'bottom' || config.legend.position === 'top'
      ? 'col-12 col-sm-6 col-md-4 col-lg-3'
      : 'col-12'

  const groupedData = useMemo(
    () => groupLegendItems(legendItems, config.data, config.legend.groupBy),
    [legendItems, config.data, config.legend.groupBy, config.legend.categoryValuesOrder, config.columns.primary.name]
  )

  const hasDisabledItems = runtimeLegend.items.some(item => item.disabled)

  return (
    <ErrorBoundary component='Grouped Legend'>
      <div className='row'>
        {Object.entries(groupedData).map(([groupName, items]) => (
          <div className={`${gridClass} group-container`} key={groupName}>
            <p className='group-label'>{groupName}</p>
            <ul className='row'>
              {items.map((item, index) => (
                <li className='group-list-item' key={`${item.label}-${index}`}>
                  <button
                    type='button'
                    title={`Legend item ${item.label} - Click to disable`}
                    className={getLegendButtonClasses(item, hasDisabledItems)}
                    onClick={() => handleToggleItem(item, index)}
                  >
                    <LegendShape shape={config.legend.style === 'boxes' ? 'square' : 'circle'} fill={item.color} />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  )
}

export default LegendGroup
