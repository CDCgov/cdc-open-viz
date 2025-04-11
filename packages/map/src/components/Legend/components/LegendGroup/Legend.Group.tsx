import { useContext } from 'react'
import _ from 'lodash'
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
  const getGridColumnClasses = (viewport: typeof currentViewport) => {
    switch (viewport) {
      case 'xs':
        return 'col-12'
      case 'sm':
        return 'col-6'
      case 'md':
        return 'col-4'
      default:
        return 'col-3'
    }
  }
  const getGroupedData = (legendItems: LegendItem[], data: object[], groupByKey: string): GroupedData => {
    if (!groupByKey || !data || !legendItems) return {}
    const result: GroupedData = {}
    const column = state.columns.primary.name || ''
    data.forEach(item => {
      if (item[groupByKey] == null) {
        return
      }
      if (!result[item[groupByKey]]) {
        result[item[groupByKey]] = []
      }
      const matchingLegend = legendItems.find(legend => legend.label === item[column])
      // Check if the legend is already in the group to prevent duplicates
      if (
        matchingLegend &&
        !result[item[groupByKey]].some(existingLegend => existingLegend.label === matchingLegend.label)
      ) {
        result[item[groupByKey]].push(matchingLegend)
      }
    })

    return result
  }
  const gridCol = getGridColumnClasses(currentViewport)

  const isSigleCol = state.legend.position === 'bottom' || state.legend.position === 'top' ? gridCol : 'col-12'
  const groupedData = getGroupedData(legendItems, state.data, state.legend.groupBy)

  const classNameItem = [isSigleCol, 'group-container']

  const handleListItemClass = item => {
    console.log(item.disabled, 'item')
    let classes = ['legend-container__li', 'd-flex', 'align-items-center']
    if (item.disabled) classes.push('legend-container__li--disabled')
    // else if (hasDisabledItems) classes.push('legend-container__li--not-disabled')
    if (item.special) classes.push('legend-container__li--special-class')
    return classes.join(' ')
  }
  return (
    <ErrorBoundary component='Grouped Legend'>
      <div className='row'>
        {Object.entries(groupedData).map(([groupName, items]) => (
          <div className={classNameItem.join(' ')} key={groupName}>
            <p className='group-label'>{groupName}</p>
            <ul className='row'>
              {items.map((item, index) => (
                <li
                  role='button'
                  onClick={() => {
                    toggleLegendActive(index, item.label, runtimeLegend, setRuntimeLegend, setAccessibleStatus)
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleLegendActive(index, item.label, runtimeLegend, setRuntimeLegend, setAccessibleStatus)
                    }
                  }}
                  key={`${item.label}-${index}`}
                  className={`group-list-item ${item.disabled ? 'bg-danger' : 'bg-blue'} ${index} `}
                  title={`Legend item ${item.label} - Click to disable`}
                  tabIndex={0}
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
