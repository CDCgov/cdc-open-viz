import { type ConfigureData } from './ConfigureData'
import { type ConfigTracking } from './ConfigTracking'
import { type FilterBehavior } from './FilterBehavior'
import type Footnotes from './Footnotes'

type StatefulProperties = {
  editing: boolean
  newViz: boolean
}

export type CommonVisualizationProperties = Partial<StatefulProperties> & {
  showEditorPanel?: boolean
  uid?: string | number
  visualizationType?: string
  filterBehavior: FilterBehavior
  footnotes?: Footnotes
  generatedBy?: 'dataset-import'
  tracking?: ConfigTracking
} & Partial<ConfigureData>
