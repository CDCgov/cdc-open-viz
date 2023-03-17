import * as d3 from 'd3-array'
import CoveHelper from '@cdc/core/helpers/cove'
import produce from 'immer'

// Gets filer values from dataset
const generateValuesForFilter = (columnName, data = this.state.data) => {
  const values = []

  data.forEach(row => {
    const value = row[columnName]
    //@ts-ignore
    if (value && false === values.includes(value)) {
      values.push(value)
    }
  })

  return values
}

export const transformCdcChartConfig = config => {
  return produce(config, draft => {
    let newExcludedData = []
    if (draft.exclusions && draft.exclusions.active) {
      if (draft.xAxis.type === 'categorical' && draft.exclusions.keys?.length > 0) {
        newExcludedData = draft.data.filter(e => !draft.exclusions.keys.includes(e[draft.xAxis.dataKey]))
      } else if (draft.xAxis.type === 'date' && (draft.exclusions.dateStart || draft.exclusions.dateEnd) && draft.xAxis.dateParseFormat) {
        // Filter dates
        const timestamp = e => new Date(e).getTime()

        let startDate = timestamp(draft.exclusions.dateStart)
        let endDate = timestamp(draft.exclusions.dateEnd) + 86399999 //Increase by 24h in ms (86400000ms - 1ms) to include selected end date for .getTime() comparative

        let startDateValid = undefined !== typeof startDate && false === isNaN(startDate)
        let endDateValid = undefined !== typeof endDate && false === isNaN(endDate)

        if (startDateValid && endDateValid) {
          newExcludedData = draft.data.filter(e => timestamp(e[draft.xAxis.dataKey]) >= startDate && timestamp(e[draft.xAxis.dataKey]) <= endDate)
        } else if (startDateValid) {
          newExcludedData = draft.data.filter(e => timestamp(e[draft.xAxis.dataKey]) >= startDate)
        } else if (endDateValid) {
          newExcludedData = draft.data.filter(e => timestamp(e[draft.xAxis.dataKey]) <= endDate)
        }
      }
    }
    // After data is grabbed, loop through and generate filter column values if there are any
    let currentData
    if (draft.filters) {
      draft.filters.forEach((filter, index) => {
        let filterValues = []

        filterValues = filter.orderedValues || generateValuesForFilter(filter.columnName, newExcludedData)

        draft.filters[index].values = filterValues
        // Initial filter should be active
        draft.filters[index].active = filterValues[0]
      })
      currentData = CoveHelper.Data.filterData(draft.filters, newExcludedData)
    }

    const { externalFilters } = config

    if (Array.isArray(externalFilters)) {
      currentData = externalFilters.reduce((out, filter) => {
        if (filter.hasOwnProperty('active')) {
          return CoveHelper.Data.filterData(externalFilters, out)
        }

        return out
      }, newExcludedData)
    }

    // draft.data = currentData

    //Enforce default values that need to be calculated at runtime
    draft.runtime = {}
    draft.runtime.seriesLabels = {}
    draft.runtime.seriesLabelsAll = []
    draft.runtime.originalXAxis = draft.xAxis

    if (draft.visualizationType === 'Pie') {
      draft.runtime.seriesKeys = draft.map(d => d[draft.xAxis.dataKey])
      draft.runtime.seriesLabelsAll = draft.runtime.seriesKeys
    } else {
      draft.runtime.seriesKeys = draft.series
        ? draft.series.map(series => {
            draft.runtime.seriesLabels[series.dataKey] = series.label || series.dataKey
            draft.runtime.seriesLabelsAll.push(series.label || series.dataKey)
            return series.dataKey
          })
        : []
    }

    if (draft.visualizationType === 'Box Plot' && draft.series) {
      // stats
      let allKeys = draft.data.map(d => d[draft.xAxis.dataKey])
      let allValues = draft.data.map(d => Number(d[config?.series[0]?.dataKey]))

      const uniqueArray = function (arrArg) {
        return arrArg.filter(function (elem, pos, arr) {
          return arr.indexOf(elem) === pos
        })
      }

      const groups = uniqueArray(allKeys)
      let tableData = []
      const plots = []

      // group specific statistics
      // prevent re-renders
      groups.forEach((g, index) => {
        if (!g) return
        // filter data by group
        let filteredData = draft.data.filter(item => item[draft.xAxis.dataKey] === g)
        let filteredDataValues = filteredData.map(item => Number(item[config?.series[0]?.dataKey]))
        // let filteredDataValues = filteredData.map(item => Number(item[draft.yAxis.dataKey]))
        const q1 = d3.quantile(filteredDataValues, parseFloat(draft.boxplot.firstQuartilePercentage) / 100)
        const q3 = d3.quantile(filteredDataValues, parseFloat(draft.boxplot.thirdQuartilePercentage) / 100)
        const iqr = q3 - q1
        const lowerBounds = q1 - (q3 - q1) * 1.5
        const upperBounds = q3 + (q3 - q1) * 1.5
        const outliers = filteredDataValues.filter(v => v < lowerBounds || v > upperBounds)
        let nonOutliers = filteredDataValues

        nonOutliers = nonOutliers.filter(item => !outliers.includes(item))

        plots.push({
          columnCategory: g,
          columnMax: Number(q3 + 1.5 * iqr).toFixed(2),
          columnThirdQuartile: q3.toFixed(2),
          columnMedian: d3.median(filteredDataValues),
          columnFirstQuartile: q1.toFixed(2),
          columnMin: Number(q1 - 1.5 * iqr).toFixed(2),
          columnCount: filteredDataValues.reduce((partialSum, a) => partialSum + a, 0),
          columnSd: d3.deviation(filteredDataValues).toFixed(2),
          columnMean: d3.mean(filteredDataValues).toFixed(2),
          columnIqr: iqr.toFixed(2),
          columnOutliers: outliers,
          values: filteredDataValues,
          nonOutlierValues: nonOutliers
        })
      })

      // make deep copy so we can remove some fields for data
      // this appears to be the easiest option instead of running logic against the datatable cell...
      tableData = JSON.parse(JSON.stringify(plots))
      tableData.map(table => {
        delete table.columnIqr
        delete table.nonOutlierValues
      })

      // any other data we can add to boxplots
      draft.boxplot['allValues'] = allValues
      draft.boxplot['categories'] = groups
      draft.boxplot.plots = plots
      draft.boxplot.tableData = tableData
    }

    if (draft.visualizationType === 'Combo' && draft.series) {
      draft.runtime.barSeriesKeys = []
      draft.runtime.lineSeriesKeys = []
      draft.series.forEach(series => {
        if (series.type === 'Bar') {
          draft.runtime.barSeriesKeys.push(series.dataKey)
        }
        if (series.type === 'Line' || series.type === 'dashed-sm' || series.type === 'dashed-md' || series.type === 'dashed-lg') {
          draft.runtime.lineSeriesKeys.push(series.dataKey)
        }
      })
    }

    if ((draft.visualizationType === 'Bar' && draft.orientation === 'horizontal') || draft.visualizationType === 'Paired Bar') {
      draft.runtime.xAxis = draft.yAxis
      draft.runtime.yAxis = draft.xAxis
      draft.runtime.horizontal = true
    } else {
      draft.runtime.xAxis = draft.xAxis
      draft.runtime.yAxis = draft.yAxis
      draft.runtime.horizontal = false
    }
    draft.runtime.uniqueId = Date.now()
    draft.runtime.editorErrorMessage = draft.visualizationType === 'Pie' && !draft.yAxis.dataKey ? 'Data Key property in Y Axis section must be set for pie charts.' : ''
  })
  // Loop through and set initial data with exclusions - this should persist through any following data transformations (ie. filters)
}
