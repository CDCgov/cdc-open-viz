import { useContext, useMemo } from 'react'
import './Legend.Group.css'
import LegendShape from '@cdc/core/components/LegendShape'
import { toggleLegendActive } from '@cdc/map/src/helpers/toggleLegendActive'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../../../../context'

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
  const { runtimeLegend, setAccessibleStatus, setRuntimeLegend, state, currentViewport } = useContext(ConfigContext)

  const getGridColClass = (viewport: string) => {
    const map = { xs: 'col-12', sm: 'col-6', md: 'col-4' }
    return map[viewport] || 'col-3'
  }

  const groupLegendItems = (items: LegendItem[], data: object[], groupByKey: string): GroupedData => {
    if (!groupByKey || !data || !items) return {}

    const columnKey = state.columns.primary.name || ''
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
          state.legend.categoryValuesOrder?.indexOf(a.label) - state.legend.categoryValuesOrder?.indexOf(b.label)
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

    setRuntimeLegend({
      ...runtimeLegend,
      items: newItems,
      disabledAmt: (runtimeLegend.disabledAmt ?? 0) + delta
    })

    setAccessibleStatus(
      `${wasDisabled ? 'Enabled' : 'Disabled'} legend item ${item.label}. Please reference the data table.`
    )
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
    state.legend.position === 'bottom' || state.legend.position === 'top' ? getGridColClass(currentViewport) : 'col-12'

  const groupedData = useMemo(
    () => groupLegendItems(legendItems, state.data, state.legend.groupBy),
    [legendItems, state.data, state.legend.groupBy]
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
                      toggleLegendActive(index, item.label, runtimeLegend, setRuntimeLegend, setAccessibleStatus)
                    }
                  }}
                >
                  <LegendShape shape={state.legend.style === 'boxes' ? 'square' : 'circle'} fill={item.color} />
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
