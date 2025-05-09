import { ConfigureData } from '@cdc/core/types/ConfigureData'

export type DataSet = ConfigureData & {
  dataFileFormat?: string
  dataFileName?: string
  dataFileSize?: number
  preview?: boolean
  dataUrl: string
  runtimeDataUrl: string
  dataFileSourceType: string
  loadQueryParam?: string // fetched from the browser's query string and appended to the dataUrl on load.
}
