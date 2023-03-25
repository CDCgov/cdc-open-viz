// Helpers
import DataTransform from '../../helpers/data/DataTransform'
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'
import CoveHelper from '../../helpers/cove'

import Papa from 'papaparse'

const transform = new DataTransform()

const dataSliceActions = (set, get) => ({
  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------
  setData: data =>
    set(state => {
      state.data = data
    }),
  setDatasets: datasets =>
    set(state => {
      state.datasets = datasets
    }),
  setFilteredData: filteredData =>
    set(state => {
      state.filteredData = filteredData
    }),
  setFormattedData: formattedData =>
    set(state => {
      state.formattedData = formattedData
    }),
  getData: async (visKey, response) => {
    let res = await response

    let resData = res.data || []
    let resFormattedData = res.formattedData || []
    let resDatasets = res.datasets || []

    // If a data URL is provided, fetch data then return. Overrides any previous data set.
    if (response.dataUrl) {
      const regex = /(?:\.([^.]+))?$/

      const ext = regex.exec(response.dataUrl)[1]
      if ('csv' === ext) {
        resData = await fetch(response.dataUrl + `?v=${CoveHelper.String.generateCacheBustString()}`)
          .then(response => response.text())
          .then(responseText => {
            const parsedCsv = Papa.parse(responseText, {
              header: true,
              dynamicTyping: true,
              skipEmptyLines: true
            })
            return parsedCsv.data
          })
      } else {
        resData = await fetch(response.dataUrl + `?v=${CoveHelper.String.generateCacheBustString()}`).then(response => response.json())
      }

      // If data from the URL has a "data description", use the standardization functions on that returned data
      if (response.dataDescription) {
        resData = transform.autoStandardize(resData)
        resData = transform.developerStandardize(resData, response.dataDescription)
      }
    }

    await get().updateVisConfig(visKey, { data: resData })
    await get().setData(resData)
    await get().setFormattedData(resFormattedData)
    await get().setDatasets(resDatasets)
    return resData
  }
})

export default dataSliceActions
