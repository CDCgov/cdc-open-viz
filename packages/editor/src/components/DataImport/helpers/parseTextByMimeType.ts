import { csvParse } from 'd3'
import { isSolrJson } from '@cdc/core/helpers/isSolr'
import { errorMessages } from '../../../helpers/errorMessages'

/**
 * Parses the given text based on the specified MIME type.
 *
 * @param resultText - The text content to be parsed.
 * @returns The parsed content based on the MIME type, or undefined if an error occurs or the MIME type is unsupported.
 *
 * @throws Will set errors if the text cannot be parsed due to formatting issues or unsupported file types.
 */
export const parseTextByMimeType = (
  resultText: string,
  mimeType: string,
  externalURL,
  errorHandler: (err: string[]) => void
) => {
  console.log('res', resultText)
  switch (mimeType) {
    case 'text/csv':
      return csvParse(resultText)
    case 'text/plain':
    case 'application/json':
      try {
        return isSolrJson(externalURL) ? JSON.parse(resultText).response.docs : JSON.parse(resultText)
      } catch (errors) {
        errorHandler([errorMessages.formatting])
        return
      }
    default:
      errorHandler([errorMessages.fileType])
      return
  }
}
