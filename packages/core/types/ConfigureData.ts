import { DataDescription } from './DataDescription'
import { DataRow } from './DataRow'

export type ConfigureData = {
  dataDescription: Partial<DataDescription>
  data?: DataRow[]
  formattedData?: DataRow[]
  dataKey: string // This is the key of the dataset in the config
}
