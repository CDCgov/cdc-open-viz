import { EditorPanel_Visual } from '@cdc/core/types/EditorPanel_Visual'

/**
 * Data Bite specific visual configuration.
 * Extends EditorPanel_Visual with data-bite-specific visual properties.
 */
export interface DataBiteVisual extends EditorPanel_Visual {
  /** Whether to show the title */
  showTitle: boolean
}
