import { DataDescription } from './DataDescription'
import { DataRows } from './Data'

export type ConfigureData = {
  dataDescription: Partial<DataDescription>
  data?: DataRows
  dataMetadata?: Record<string, string>
  formattedData?: DataRows
  dataKey: string // This is the key of the dataset in the config
}
