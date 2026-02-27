type DataWithMetadata = {
  data: any[]
  dataMetadata: Record<string, string>
}

/**
 * Separates a data file response into the data array and any sibling metadata fields.
 * Supports both plain arrays (current format) and the wrapper format:
 *   { "lastUpdated": "...", "source": "...", "data": [...] }
 */
export function extractDataAndMetadata(response: any): DataWithMetadata {
  if (Array.isArray(response)) {
    return { data: response, dataMetadata: {} }
  }
  if (response && typeof response === 'object' && Array.isArray(response.data)) {
    const { data, ...dataMetadata } = response
    return { data, dataMetadata }
  }
  return { data: response, dataMetadata: {} }
}
