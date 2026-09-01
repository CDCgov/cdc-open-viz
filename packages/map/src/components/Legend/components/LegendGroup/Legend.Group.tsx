import { useContext, useMemo } from 'react'
import './legend.group.css'
import LegendShape from '@cdc/core/components/LegendShape'
import { toggleLegendActive } from '../../../../helpers/toggleLegendActive'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext, { MapDispatchContext } from '../../../../context'
import { groupLegendItems, type LegendItem } from './LegendGroup.helpers'

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

  const handleToggleItem = (item: LegendItem, fallbackIndex: number) => {
    const itemLabel = item.rawLabel ?? item.label

    toggleLegendActive(item.runtimeIndex ?? fallbackIndex, itemLabel, runtimeLegend, dispatch, config.legend.behavior)
  }

  const gridClass =
    config.legend.position === 'bottom' || config.legend.position === 'top'
      ? 'col-12 col-sm-6 col-md-4 col-lg-3'
      : 'col-12'

  const groupedData = useMemo(
    () =>
      groupLegendItems(
        legendItems,
        config.data,
        config.legend.groupBy,
        config.columns.primary.name || '',
        config.legend.categoryValuesOrder ?? []
      ),
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
