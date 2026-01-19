import { DataVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { ComponentStyles } from '@cdc/core/types/ComponentStyles'

export interface FilteredTextConfig extends DataVisualizationConfig {
  type: 'filtered-text'
  title: string
  titleStyle: 'legacy' | 'large' | 'small'
  theme: string
  fontSize: 'small' | 'medium' | 'large'
  shadow: boolean
  textColumn?: string
  dataDescription?: object
  formattedData?: object
  runtime?: {
    uniqueId: number
    editorErrorMessage: string
  }
  visual: ComponentStyles & {
    roundedBorders?: boolean
  }
}
