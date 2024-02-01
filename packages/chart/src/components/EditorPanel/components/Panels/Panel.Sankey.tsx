import { useContext } from 'react'
import ConfigContext from '../../../../ConfigContext'
import { CheckBox, TextField } from '@cdc/core/components/EditorPanel/Inputs'

import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import EditorPanelContext, { type EditorPanelContext as EPContext } from '../../EditorPanelContext'

const SankeySettings = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { sankey } = config
  const { updateField } = useContext<EPContext>(EditorPanelContext)

  /**
   * !todo: consider moving the checkbox values below underneath config.sankey
   * I realize that the Checkbox component might limit how you update those values.
   * If needed just copy the checkbox element from ''@cdc/core/components/EditorPanel/Inputs' and change the handler
   * Also worth noting is we have an editor panel context now if you need easier access to functions from EditorPanel
   */

  let storyNodeUpdate = (fieldName, value, i) => {
    let storyNodes = []

    if (config.sankey.data.storyNodeText) {
      storyNodes = [...config.sankey.data.storyNodeText]
    }

    storyNodes[i][fieldName] = value
    updateConfig({ ...config, storyNodes })
  }

  // only for Regions
  let updateStoryNode = (fieldName, value, i) => storyNodeUpdate(fieldName, value, i)

  let addStoryNode = () => {
    let storyNodes = []

    if (config.sankey.data.storyNodeText) {
      storyNodes = [...config.sankey.data.storyNodeText]
      console.log('inside if statement')
      console.log('storynodes array') 
      console.log(storyNodes) //prints storyNodeText array from config but with an extra empty set
      console.log(storyNodes.length) //prints 2 but when you click the object it says length is 3
      console.log('array from config')
      console.log(config.sankey.data.storyNodeText) //prints the two in the config
      console.log(config.sankey.data.storyNodeText.length) //prints 2
    }

    storyNodes.push({
      "StoryNode": "",
      "segmentTextBefore": "",
      "segmentTextAfter": ""
    })

    updateConfig({ ...config, storyNodes });

    console.log('after update config')
    console.log(config.sankey.data.storyNodeText) //prints the two in the config
    console.log(config.sankey.data.storyNodeText.length) //prints 2 

    // after selecting add storynode it should have the three text fields pop up but empty, its not doing that 

    //the button is still there aftere selecting add storynode, it should have updated to 3 entries and hid 
    //the button 
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Sankey Settings</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <CheckBox value={config.enableKPIs} fieldName='enableKPIs' label='Enable KPIs' updateField={updateField} />
        {config.sankey.data.storyNodeText && (
          config.sankey.data.storyNodeText.map(({ StoryNode, segmentTextBefore, segmentTextAfter }, i) =>
            <div key={i}>
              <TextField value={StoryNode} fieldName='StoryNode' label='StoryNode' updateField={(fieldName, value) => updateStoryNode(fieldName, value, i)} />
              <TextField value={segmentTextBefore} fieldName='segmentTextBefore' label='Segment Text Before' updateField={(fieldName, value) => updateStoryNode(fieldName, value, i)} />
              <TextField value={segmentTextAfter} fieldName='segmentTextAfter' label='Segment Text After' updateField={(fieldName, value) => updateStoryNode(fieldName, value, i)} />
            </div>
          ))}
        {config.sankey.data.storyNodeText.length < 3 && (
          <button
            type='button'
            className='btn full-width'
            onClick={e => {
              e.preventDefault()
              addStoryNode()
            }}
          >
            Add StoryNode
          </button>
        )}

        <CheckBox value={config.enableTooltips} fieldName='enableTooltips' label='Enable Tooltips' updateField={updateField} />
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default SankeySettings
