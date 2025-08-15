import { useContext, useMemo } from 'react'
import './legend.group.css'
import LegendShape from '@cdc/core/components/LegendShape'
import { toggleLegendActive } from '@cdc/map/src/helpers/toggleLegendActive'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext, { MapDispatchContext } from '../../../../context'

interface LegendItem {
  color: string
  label: string
  disabled?: boolean
  special: boolean
}

interface GroupedData {
  [key: string]: LegendItem[]
}

const LegendGroup = ({ legendItems }) => {
  const { runtimeLegend, config } = useContext(ConfigContext)
  const dispatch = useContext(MapDispatchContext)
  const groupLegendItems = (items: LegendItem[], data: object[], groupByKey: string): GroupedData => {
    if (!groupByKey || !data || !items) return {}

    const columnKey = config.columns.primary.name || ''
    const result: GroupedData = {}

    for (const row of data) {
      const groupValue = row[groupByKey]
      if (!groupValue) continue

      const label = row[columnKey]
      const match = items.find(i => i.label === label)
      if (!match) continue

      result[groupValue] ||= []
      if (!result[groupValue].some(i => i.label === label)) {
        result[groupValue].push(match)
      }
    }

    // Sort items in each group
    Object.entries(result).forEach(([group, items]) => {
      result[group] = [...items].sort(
        (a, b) =>
          (config.legend.categoryValuesOrder ?? []).indexOf(a.label) -
          (config.legend.categoryValuesOrder ?? []).indexOf(b.label)
      )
    })

    return result
  }

  const handleToggleItem = (item: LegendItem) => {
    const newItems = runtimeLegend.items.map(legend =>
      legend.value === item.label ? { ...legend, disabled: !legend.disabled } : legend
    )

    const wasDisabled = runtimeLegend.items.find(i => i.value === item.label)?.disabled
    const delta = wasDisabled ? -1 : 1

    dispatch({
      type: 'SET_RUNTIME_LEGEND',
      payload: {
        ...runtimeLegend,
        items: newItems,
        disabledAmt: (runtimeLegend.disabledAmt ?? 0) + delta
      }
    })
    const message = `${wasDisabled ? 'Enabled' : 'Disabled'} legend item ${
      item.label
    }. Please reference the data table.`
    dispatch({ type: 'SET_ACCESSIBLE_STATUS', payload: message })
  }

  const getLegendItemClasses = (item: LegendItem, hasDisabledItems: boolean) => {
    return [
      'group-list-item',
      item.disabled ? 'legend-group-item-disable' : hasDisabledItems ? 'legend-group-item-not-disable' : ''
    ]
      .filter(Boolean)
      .join(' ')
  }

  const gridClass =
    config.legend.position === 'bottom' || config.legend.position === 'top'
      ? 'col-12 col-sm-6 col-md-4 col-lg-3'
      : 'col-12'

  const groupedData = useMemo(
    () => groupLegendItems(legendItems, config.data, config.legend.groupBy),
    [legendItems, config.data, config.legend.groupBy]
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
                <li
                  key={`${item.label}-${index}`}
                  role='button'
                  tabIndex={0}
                  title={`Legend item ${item.label} - Click to disable`}
                  className={getLegendItemClasses(item, hasDisabledItems)}
                  onClick={() => handleToggleItem(item)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleLegendActive(index, item.label, runtimeLegend, dispatch)
                    }
                  }}
                >
                  <LegendShape shape={config.legend.style === 'boxes' ? 'square' : 'circle'} fill={item.color} />
                  <span>{item.label}</span>
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
