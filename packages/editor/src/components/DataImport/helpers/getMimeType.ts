import { supportedDataTypes } from './supportedDataTypes'

type MimeTypeParams = {
  // data received from the url request
  // if a direct file upload will be equal to fileData otherwise will be null.
  fileBlob: Blob | null
  // url string
  externalURL: string
  // name of file
  fileName: string
  // file or url
  fileSourceType: 'file' | 'url'
  // data from the file
  fileData: Blob
}
// checking the file source type allows us to handle real urls better
// For example, query parameters in API's and cache busting strings
// file matching can handle .csv and .json, but doesn't handle
// .csv?version=1 or .json?version=1
export const getMimeType = ({ fileBlob, externalURL, fileName, fileSourceType, fileData }: MimeTypeParams) => {
  const path = fileBlob?.name || externalURL || fileName
  if (fileSourceType === 'file') {
    const pathMatch = path.match(/(?:\.([^.]+))?$/g)
    const ext = pathMatch.length === 0 ? '.csv' : pathMatch[0]
    return supportedDataTypes[ext]
  }

  if (fileSourceType === 'url') {
    // if no fileData.type check the externalURL for csv or json extension
    if (!fileData.type || fileData.type === 'application/octet-stream') {
      const pathMatch = externalURL.match(/(?:\.([^.]+))?$/g)
      const ext = pathMatch.length === 0 ? '.csv' : pathMatch[0]
      return supportedDataTypes[ext]
    }
    return fileData.type
  }
}
