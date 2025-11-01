import React from 'react'
import MarkupVariablesEditor from './MarkupVariablesEditor'
import Accordion from '../../ui/Accordion'
import { MarkupVariable } from '../../../types/EditorPanel_MarkupVariables'

type PanelMarkupProps = {
  /** Display name for the panel */
  name: string
  /** Array of markup variable configurations */
  markupVariables: MarkupVariable[]
  /** Dataset to extract column names and values from */
  data: any[]
  /** Whether markup variables feature is enabled */
  enableMarkupVariables: boolean
  /** Callback when variables are added, updated, or removed */
  onMarkupVariablesChange: (variables: MarkupVariable[]) => void
  /** Callback when enable/disable toggle changes */
  onToggleEnable: (enabled: boolean) => void
  /** Optional: wrap in accordion. Default true */
  withAccordion?: boolean
}

/**
 * Shared panel for markup variables editor across all visualization packages.
 * Wraps MarkupVariablesEditor with optional accordion functionality.
 */
const PanelMarkup: React.FC<PanelMarkupProps> = ({
  name,
  markupVariables,
  data,
  enableMarkupVariables,
  onMarkupVariablesChange,
  onToggleEnable,
  withAccordion = true
}) => {
  const content = (
    <MarkupVariablesEditor
      markupVariables={markupVariables || []}
      data={data}
      onChange={onMarkupVariablesChange}
      enableMarkupVariables={enableMarkupVariables || false}
      onToggleEnable={onToggleEnable}
    />
  )

  if (!withAccordion) {
    return content
  }

  return (
    <Accordion key={name}>
      <Accordion.Section title={name} key={name}>
        {content}
      </Accordion.Section>
    </Accordion>
  )
}

export default PanelMarkup
