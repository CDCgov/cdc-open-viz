import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import { getFileExtension } from './getFileExtension'
import axios from 'axios'
import { getMimeType } from './getMimeType'
import { parseTextByMimeType } from './parseTextByMimeType'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { errorMessages, maxFileSize } from '../../../helpers/errorMessages'

type MetaData = {
  fileSource: string
  fileSize: number
  fileSourceType: 'file' | 'url'
  mimeType: string
}

const loadExternal = async externalURL => {
  let responseBlob: Blob = null
  let dataURL: URL
  // Is URL valid?

  try {
    dataURL =
      isSolrCsv(externalURL) || isSolrJson(externalURL) ? externalURL : new URL(externalURL, window.location.origin)
  } catch {
    throw errorMessages.urlInvalid
  }
  const fileExtension = getFileExtension(dataURL)

  try {
    // eslint-disable-next-line no-unused-vars
    await axios
      .get(dataURL.toString(), {
        responseType: 'blob'
      })
      .then(response => {
        responseBlob = response.data

        // Sometimes the files are coming in as plain text types... Maybe when saved from Macs
        const csvTypes = ['text/csv', 'text/plain']
        if ((fileExtension === '.csv' && csvTypes.includes(responseBlob.type)) || isSolrCsv(externalURL)) {
          responseBlob = responseBlob.slice(0, responseBlob.size, 'text/csv')
        } else if (
          responseBlob.type === 'application/json' ||
          (fileExtension === '.json' && responseBlob.type === 'text/plain') ||
          isSolrJson(externalURL)
        ) {
          responseBlob = responseBlob.slice(0, responseBlob.size, 'application/json')
        }
      })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in loadExternal', err)

    const error = err.toString()

    if (Object.values(errorMessages).includes(err)) {
      throw error
    }

    throw errorMessages.failedFetch
  }

  return responseBlob
}

/**
 * Handle loading data
 */
export const loadData = async (fileBlob = null, fileName, externalURL) => {
  return new Promise<{ result: Object[]; metadata: MetaData }>(async (resolve, reject) => {
    let fileData = fileBlob
    const fileSourceType = fileBlob ? 'file' : 'url'
    // Get the raw data as text from the file
    if (fileSourceType === 'url') {
      try {
        fileData = await loadExternal(externalURL)
      } catch (error) {
        reject(error)
      }
    }

    const fileSize = fileData.size

    // Check if file is too big
    if (fileSize > maxFileSize * 1048576) {
      reject(errorMessages.fileTooLarge)
    }

    const mimeType = getMimeType({
      fileBlob,
      externalURL,
      fileName,
      fileSourceType,
      fileData
    })

    // Convert from blob into raw text
    // Have to use FileReader instead of just .text because IE11 and the polyfills for this are bugged
    const filereader = new FileReader()

    filereader.onload = function () {
      const transform = new DataTransform()
      // Validate parsed data and set if no issues.
      try {
        const parsed = parseTextByMimeType(this.result.toString(), mimeType, externalURL, reject)
        const result = transform.autoStandardize(parsed)
        let fileSource = fileData?.path ?? fileName ?? externalURL
        if (typeof fileSource === 'string') fileSource = fileSource.trim()
        const metadata: MetaData = {
          fileSource,
          fileSize,
          fileSourceType,
          mimeType
        }
        resolve({ result, metadata })
      } catch (err) {
        reject(err)
      }
    }
    // Set encoding for CSV files - needed to render special characters properly
    const encoding = mimeType === 'text/csv' ? 'utf-8' : ''
    filereader.readAsText(fileData, encoding)
  })
}
