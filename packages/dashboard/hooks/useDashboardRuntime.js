// COVE Refactor - This hook should be used at some point to run any runtime functions on the data.
// The below does not work, but serves as an example of how Dashboard data should be pre-processed
// following a proper refactor.

/*// Helpers
import { cacheBustingString } from '@cdc/core/helpers/coveHelpers'
import dataTransform from '@cdc/core/helpers/dataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import filterData from '@cdc/core/helpers/filterData'

const transform = new dataTransform()

// Gets filer values from dataset
const generateValuesForFilter = (columnName, data) => {
  const values = []

  Object.keys(data).forEach(key => {
    data[key].forEach(row => {
      const value = row[columnName]
      if (value && false === values.includes(value)) {
        values.push(value)
      }
    })
  })

  return values
}

const processData = async (config) => {
  let dataset = config.formattedData || config.data

  if (config.dataUrl) {
    dataset = fetchRemoteData(`${config.dataUrl}?v=${cacheBustingString()}`)

    if (dataset && config.dataDescription) {
      try {
        dataset = transform.autoStandardize(dataset)
        dataset = transform.developerStandardize(dataset, config.dataDescription)
      } catch (e) {
        //Data not able to be standardized, leave as is
      }
    }
  }

  return dataset
}

const useDashboardRuntime = async (newConfig) => {
  if (newConfig) {
    let datasets = {}

    if (newConfig.datasets) {
      await Promise.all(
        Object.keys(newConfig.datasets).map(async key => {
          datasets[key] = await processData(newConfig.datasets[key])
        })
      )
    } else {
      let dataKey = newConfig.dataFileName || 'backwards-compatibility'
      datasets[dataKey] = await processData(newConfig)

      let datasetsFull = {}
      datasetsFull[dataKey] = {
        data: datasets[dataKey],
        dataDescription: newConfig.dataDescription
      }
      newConfig.datasets = datasetsFull

      Object.keys(newConfig.visualizations).forEach(vizKey => {
        newConfig.visualizations[vizKey].dataKey = dataKey
        newConfig.visualizations[vizKey].dataDescription = newConfig.dataDescription
        newConfig.visualizations[vizKey].formattedData = newConfig.formattedData
      })

      delete newConfig.data
      delete newConfig.dataUrl
      delete newConfig.dataFileName
      delete newConfig.dataFileSourceType
      delete newConfig.dataDescription
      delete newConfig.formattedData

      if (newConfig.dashboard && newConfig.dashboard.filters) {
        newConfig.dashboard.sharedFilters = newConfig.dashboard.sharedFilters || []
        newConfig.dashboard.filters.forEach(filter => {
          newConfig.dashboard.sharedFilters.push({ ...filter, key: filter.label, showDropdown: true, usedBy: Object.keys(newConfig.visualizations) })
        })

        delete newConfig.dashboard.filters
      }
    }

    let newFilteredData = {}
    let visualizationKeys = Object.keys(newConfig.visualizations)

    if (newConfig.dashboard.sharedFilters) {
      newConfig.dashboard.sharedFilters.forEach((filter, i) => {
        for (let j = 0; j < visualizationKeys.length; j++) {
          if (visualizationKeys[j] === filter.setBy) {
            const filterValues = generateValuesForFilter(filter.columnName, newConfig.data)

            if (newConfig.dashboard.sharedFilters[i].order === 'asc') {
              filterValues.sort()
            }
            if (newConfig.dashboard.sharedFilters[i].order === 'desc') {
              filterValues.sort().reverse()
            }

            newConfig.dashboard.sharedFilters[i].values = filterValues
            if (filterValues.length > 0) {
              newConfig.dashboard.sharedFilters[i].active = newConfig.dashboard.sharedFilters[i].active || newConfig.dashboard.sharedFilters[i].values[0]
            }
            break
          }
        }

        if ((!newConfig.dashboard.sharedFilters[i].values || newConfig.dashboard.sharedFilters[i].values.length === 0) && newConfig.dashboard.sharedFilters[i].showDropdown) {
          newConfig.dashboard.sharedFilters[i].values = generateValuesForFilter(filter.columnName, newConfig.data)
          if (newConfig.dashboard.sharedFilters[i].values.length > 0) {
            newConfig.dashboard.sharedFilters[i].active = newConfig.dashboard.sharedFilters[i].active || newConfig.dashboard.sharedFilters[i].values[0]
          }
        }
      })

      visualizationKeys.forEach(visualizationKey => {
        let applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1)

        if (applicableFilters.length > 0) {
          newFilteredData[visualizationKey] = filterData(
            applicableFilters,
            newConfig.visualizations[visualizationKey].formattedData
            || newConfig.visualizations[visualizationKey].data
            || newConfig.data[newConfig.visualizations[visualizationKey].dataKey]
          )
        }
      })
    }

    newConfig.runtime = {}
  }
}

export default useDashboardRuntime*/
