import DataTransform from '@cdc/core/helpers/DataTransform'

export const processData = (resData, dataDescription) => {
  if (!dataDescription) return resData

  const transform = new DataTransform()
  const standardizedData = transform.autoStandardize(resData)
  const devStandardizedData = transform.developerStandardize(standardizedData, dataDescription)

  return devStandardizedData
}
