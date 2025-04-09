import _ from 'lodash'
import './Legend.Group.css'
import LegendShape from '@cdc/core/components/LegendShape'
interface LegendItem {
  color: string
  label: string
  disabled?: boolean
  special: boolean
}
interface GroupedData {
  [key: string]: LegendItem[]
}

const LegendGroup = ({ state, legendItems, currentViewport }) => {
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

  const classNameItem = [isSigleCol, 'mb-3']
  return (
    <div className='row'>
      {Object.entries(groupedData).map(([groupName, items]) => (
        <div className={classNameItem.join(' ')} key={groupName}>
          <p className='group-label mb-2'>{groupName}</p>
          <ul className='row'>
            {items.map((item, index) => (
              <li
                key={`${item.label}-${index}`}
                className={`group-list-item `}
                title={`Legend item ${item.label} - Click to disable`}
              >
                <LegendShape shape={state.legend.style === 'boxes' ? 'square' : 'circle'} fill={item.color} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default LegendGroup
