import { DataDescription } from './DataDescription'

export type ConfigureData = {
  dataDescription: Partial<DataDescription>
  data?: Object[]
  formattedData?: Object[]
  dataKey: string // This is the key of the dataset in the config
}
