// Helpers
import dataTransform from '../../helpers/data/dataTransform'
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'
import CoveHelper from '../../helpers/cove'

import Papa from 'papaparse'

const transform = new dataTransform()

const dataSliceActions = (set, get) => ({
  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------
  setData: value =>
    set(state => {
      state.data = value
    }),
  setDatasets: value =>
    set(state => {
      state.datasets = value
    }),
  setFormattedData: value =>
    set(state => {
      state.formattedData = value
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
