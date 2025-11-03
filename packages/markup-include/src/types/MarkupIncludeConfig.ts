import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { EditorPanel_Visual } from '@cdc/core/types/EditorPanel_Visual'
import { Runtime } from '@cdc/core/types/Runtime'
import { Variable } from '@cdc/markup-include/src/types/Variable'
import { EditorPanel_MarkupVariables } from '@cdc/core/types/EditorPanel_MarkupVariables'

/**
 * Configuration interface for Markup Include visualizations.
 * Extends BaseVisualizationConfig with markup-include-specific properties.
 */
export interface MarkupIncludeConfig extends BaseVisualizationConfig, EditorPanel_MarkupVariables {
  // Override base properties to be more specific
  type: 'markup-include'

  // Markup Include uses base visual properties
  visual: EditorPanel_Visual

  // Markup Include specific properties
  formattedData: Record<string, any> // This was originally {} but should be more specific
  contentEditor: {
    // Changing the base config object creates an infinite loop, nesting it is a workaround
    allowHideSection?: boolean
    inlineHTML: string
    markupVariables?: Variable[]
    showHeader: boolean
    showNoDataMessage?: boolean
    noDataMessageText?: string
    srcUrl: string
    title: string
    useInlineHTML: boolean
  }
  runtime?: Runtime
}
