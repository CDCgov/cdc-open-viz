import React from 'react'
import _ from 'lodash'
import './Legend.Group.css'

const LegendGroup = ({ state, legendItems, legendListItems, runtimeLegend }) => {
  // get unique subgroup itsms
  const getSubGroups = (data, key: string): string[] => _.uniq(_.map(data, key).filter(Boolean))
  const legendSubGroups = getSubGroups(state.data, state.legend.groupBy)
  function groupByLegendMatch(data, legendItems, groups, key) {
    // Create result object with empty arrays for each group
    const result = {}
    groups.forEach(group => {
      result[group] = []
    })

    // Create a set of all min and max values from legendItems
    const matchValues = new Set()
    legendItems.forEach(item => {
      matchValues.add(item.min)
      matchValues.add(item.max)
    })

    // Loop through the dataset
    data.forEach(entry => {
      const rate = parseFloat(entry.Rate) // parse in case it's string like "NA"
      const group = entry[key]

      if (matchValues.has(rate) && result.hasOwnProperty(group)) {
        result[group].push(entry)
      }
    })

    return result
  }

  function groupByGroupName(data, groups, key) {
    // Create result object with empty arrays for each group
    const result = {}
    groups.forEach(group => {
      result[group] = []
    })

    // Loop through the dataset and group based on the `group` field
    data.forEach(entry => {
      const group = entry[key]
      if (group && result.hasOwnProperty(group)) {
        result[group].push(entry)
      }
    })

    return result
  }
  function getMinMaxRatesPerGroup(groupedData) {
    const result = {}

    for (const groupName in groupedData) {
      const groupItems = groupedData[groupName]

      // Filter out non-numeric Rate values
      const numericRates = groupItems.map(item => parseFloat(item.Rate)).filter(rate => !isNaN(rate))
      const numericRatesX = groupItems.map(item => item.Rate).filter(item => !isNaN(item))
      // If we have valid rates, calculate min and max

      if (numericRates.length > 0) {
        const min = Math.min(...numericRatesX)
        const max = Math.max(...numericRatesX)
        result[groupName] = { min, max, label: `${min}- ${max}` }
      } else {
        result[groupName] = { min: null, max: null }
      }
    }

    return result
  }

  function addGroupsToLegendBins(legendBins, data, key) {
    // Convert Rates to numeric where possible
    const cleanedData = data.map(item => ({
      ...item,
      RateParsed: isNaN(parseFloat(item.Rate)) ? item.Rate : parseFloat(item.Rate)
    }))

    return legendBins.map(bin => {
      const groupsSet = new Set()

      if (bin.special && bin.label !== undefined) {
        // Special case: match by exact label (like "*", "NA", "ABC")
        cleanedData.forEach(entry => {
          if (entry.RateParsed === bin.label && entry[key]) {
            groupsSet.add(entry[key])
          }
        })
      } else {
        // Normal numeric min/max matching
        const min = Math.min(...bin.value)
        const max = Math.max(...bin.value)

        cleanedData.forEach(entry => {
          if (
            typeof entry.RateParsed === 'number' &&
            entry.RateParsed >= min &&
            entry.RateParsed <= max &&
            entry.group
          ) {
            groupsSet.add(entry[key])
          }
        })
      }

      return {
        ...bin,
        groups: Array.from(groupsSet)
      }
    })
  }

  const groupedLegendItems = groupByGroupName(state.data, legendSubGroups, state.legend.groupBy)
  const legendMinMax = getMinMaxRatesPerGroup(groupedLegendItems)
  const newLegendBins = addGroupsToLegendBins(legendItems, state.data, state.legend.groupBy)
  //   console.log(groupByGroupName(state.data, legendSubGroups, state.legend.groupBy), 'ddd')
  // Logging the output to see the structured groups and bins
  //   console.log(categorizedData, 'categorizedData')
  return (
    <div className='space-y-4'>
      {legendSubGroups.map(group => (
        <div key={group}>
          <h2 className='text-lg font-semibold'>{group}</h2>

          {newLegendBins
            .filter(bin => Array.isArray(bin.groups) && bin.groups.includes(group))
            .map((bin, idx) => (
              <p key={idx}>{bin.label}</p>
            ))}
        </div>
      ))}
    </div>
    // <div className='space-y-4'>
    //   {Object.entries(legendMinMax).map(([groupName, { label }]) => (
    //     <div key={groupName} className='border p-4 rounded-xl shadow'>
    //       <h2 className='text-lg font-semibold mb-2'>{groupName}</h2>
    //       <p>{label}</p>
    //     </div>
    //   ))}
    // </div>
  )
}

export default LegendGroup
