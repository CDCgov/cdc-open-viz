import React from 'react'
import MarkupVariablesEditor from './MarkupVariablesEditor'
import Accordion from '../../ui/Accordion'
import { MarkupVariable } from '../../../types/MarkupVariable'

type PanelMarkupProps = {
  name: string
  markupVariables: MarkupVariable[]
  data: any[]
  enableMarkupVariables: boolean
  onMarkupVariablesChange: (variables: MarkupVariable[]) => void
  onToggleEnable: (enabled: boolean) => void
  /** Optional: wrap in accordion. Default true */
  withAccordion?: boolean
}

/**
 * Shared Panel component for Markup Variables editor
 * Can be used across Chart, Map, Data Bite, and other packages
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