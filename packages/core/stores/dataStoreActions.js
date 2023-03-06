// Helpers
import dataTransform from '../helpers/data/dataTransform'
import fetchAsyncUrl from '../helpers/fetchAsyncUrl'

const transform = new dataTransform()

const dataStoreActions = (set, get) => ({
  // Actions --------------------------------------------------------------------------------------------------------------------------------------------------------------
  setData: value => set(state => {
    state.data = value
  }),

  getData: async (response) => {
    let res = await response

    let resData = res.formattedData || res.data || []

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
  }
})

export default dataStoreActions
