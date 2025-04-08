import _ from 'lodash'
import './Legend.Group.css'
import LegendShape from '@cdc/core/components/LegendShape'
const LegendGroup = ({ state, legendItems }) => {
  function getGroupedData(legendItems, data, groupByKey) {
    if (!groupByKey || !data || !legendItems) return {}
    const result = {}
    const column = state.columns.primary.name || ''
    data.forEach(item => {
      // Check if the group key is undefined or null and skip adding it
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
  const groupedData = getGroupedData(legendItems, state.data, state.legend.groupBy)
  return (
    <div className='space-y-4'>
      {Object.entries(groupedData).map(([groupName, legendItems]) => {
        return (
          <div key={groupName} className='border p-4 rounded-xl shadow'>
            <h2 className='text-lg font-semibold mb-2'>{groupName}</h2>
            {legendItems.map(item => {
              return (
                <li title={`Legend item ${item.label} - Click to disable`}>
                  <LegendShape shape={state.legend.style === 'boxes' ? 'square' : 'circle'} fill={item.color} />
                  <span>{item.label}</span>
                </li>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default LegendGroup
