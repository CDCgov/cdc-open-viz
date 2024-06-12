import { useContext } from 'react'
import ConfigContext from '../../../../ConfigContext'
import { CheckBox, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'

import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import EditorPanelContext, { type EditorPanelContext as EPContext } from '../../EditorPanelContext'

const SankeySettings = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const data = config.data?.[0]
  const { updateField } = useContext<EPContext>(EditorPanelContext)

  if (config.visualizationType !== 'Sankey') return

  const updateStoryNode = (fieldName, value, i) => {
    let storyNodes = []

    if (data?.storyNodeText) {
      storyNodes = [...data?.storyNodeText]
    }

    storyNodes[i][fieldName] = value
    updateConfig({
      ...config,
      sankey: {
        ...config.sankey,
        data: {
          ...config.sankey.data,
          storyNodeText: storyNodes
        }
      }
    })
  }

  const addStoryNode = () => {
    const newData = data

    newData.storyNodeText.push({
      StoryNode: '',
      segmentTextBefore: '',
      segmentTextAfter: ''
    })

    updateConfig({
      ...config,
      sankey: {
        ...config.sankey,
        data: [{ ...newData }]
      }
    })
  }

  const removeStoryNode = index => {
    const newData = data
    newData.storyNodeText.splice(index, 1)

    updateConfig({ ...config, sankey: { ...config.sankey, data: { ...newData } } })
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Sankey Settings</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>Node stories can provide additional details to support public health messaging. COVE can display a maximum of 3 node stories.</p>
        {data?.storyNodeText &&
          data?.storyNodeText.map(({ StoryNode, segmentTextBefore, segmentTextAfter }, i) => (
            <div key={i} style={{ border: '1px solid black', margin: '15px auto', padding: '15px', borderRadius: '10px' }}>
              <label>
                Story Node Text
                <input type='text' value={StoryNode} fieldName='StoryNode' label='StoryNode' onChange={e => updateStoryNode('StoryNode', e.target.value, i)} />
              </label>
              <label>
                Story Text Before
                <input type='text' value={segmentTextBefore} fieldName='segmentTextBefore' label='Segment Text Before' onChange={e => updateStoryNode('segmentTextBefore', e.target.value, i)} />
              </label>
              <label>
                Story Text After
                <input type='text' value={segmentTextAfter} fieldName='segmentTextAfter' label='Segment Text After' onChange={e => updateStoryNode('segmentTextAfter', e.target.value, i)} />
              </label>
              <Button onClick={e => removeStoryNode(i)} className='btn' style={{ background: 'tomato' }}>
                Remove Story Node
              </Button>
            </div>
          ))}
        {data?.storyNodeText?.length < 3 && (
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
