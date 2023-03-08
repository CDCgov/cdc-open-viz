// Helpers
import dataTransform from '../../helpers/data/dataTransform'
import fetchAsyncUrl from '../../helpers/fetchAsyncUrl'

const transform = new dataTransform()

const dataSliceActions = (set, get) => ({
  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------
  setData: value => set(state => { state.data = value }),
  setDatasets: value => set(state => { state.datasets = value }),
  setFormattedData: value => set(state => { state.formattedData = value }),
  getData: async (response) => {
    let res = await response

    let resData = res.data || []
    let resFormattedData = res.formattedData || []
    let resDataset = res.datasets || []

    // If a data URL is provided, fetch data then return. Overrides any previous data set.
    if (response.dataUrl) {
      resData = await fetchAsyncUrl(response.dataUrl)

      // If data from the URL has a "data description", use the standardization functions on that returned data
      if (response.dataDescription) {
        resData = transform.autoStandardize(resData)
        resData = transform.developerStandardize(resData, response.dataDescription)
      }
    }

    await get().setData(resData)
    await get().setFormattedData(resFormattedData)
    await get().setDatasets(resDataset)
  }
})

export default dataSliceActions
