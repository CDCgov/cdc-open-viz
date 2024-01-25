import { useContext } from 'react'
import ConfigContext from '../../../../ConfigContext'
import { CheckBox } from '@cdc/core/components/EditorPanel/Inputs'

import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import EditorPanelContext, { type EditorPanelContext as EPContext } from '../../EditorPanelContext'

const SankeySettings = () => {
  const { config } = useContext(ConfigContext)
  const { updateField } = useContext<EPContext>(EditorPanelContext)

  /**
   * !todo: consider moving the checkbox values below underneath config.sankey
   * I realize that the Checkbox component might limit how you update those values.
   * If needed just copy the checkbox element from ''@cdc/core/components/EditorPanel/Inputs' and change the handler
   * Also worth noting is we have an editor panel context now if you need easier access to functions from EditorPanel
   */
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Sankey Settings</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <CheckBox value={config.enableKPIs} fieldName='enableKPIs' label='Enable KPIs' updateField={updateField} />
        <CheckBox value={config.enableStoryNodes} fieldName='enableStoryNodes' label='Enable StoryNodes' updateField={updateField} />
        <CheckBox value={config.enableTooltips} fieldName='enableTooltips' label='Enable Tooltips' updateField={updateField} />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default SankeySettings
