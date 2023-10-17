import DataTransform from '@cdc/core/helpers/DataTransform'

const transform = new DataTransform()

export const getFormattedData = (data, dataDescription) => {
  if (data && dataDescription) {
    try {
      let formattedData = transform.autoStandardize(data)
      formattedData = transform.developerStandardize(data, dataDescription)
      return formattedData
    } catch (e) {
      return data
    }
  }

  return data
}
