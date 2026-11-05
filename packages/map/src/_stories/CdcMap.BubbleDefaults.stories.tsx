import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import EditorContext from '@cdc/core/contexts/EditorContext'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import mapFixture from './_mock/usa-state-gradient.json'

export default { title: 'Components/Templates/Map/Bubble Defaults', component: CdcMap } as Meta<typeof CdcMap>
type Story = StoryObj<typeof CdcMap>

const ReloadableMap = ({ config }) => {
  const [saved, setSaved] = useState(config)
  const [loaded, setLoaded] = useState(config)
  const [revision, setRevision] = useState(0)
  return (
    <EditorContext.Provider value={{ setTempConfig: setSaved } as any}>
      <button
        onClick={() => {
          setLoaded(JSON.parse(JSON.stringify(saved)))
          setRevision(revision + 1)
        }}
      >
        Reload saved map
      </button>
      <output data-testid='saved-layers'>{JSON.stringify(saved.bubble.layers)}</output>
      <CdcMap key={revision} config={loaded} isEditor />
    </EditorContext.Provider>
  )
}

const emptyMapStory = (explicitEmpty: boolean): Story => {
  const starter: Record<string, any> = { ...mapFixture }
  delete starter.bubble
  const config = createNewMapConfig({ ...starter, ...(explicitEmpty ? { bubble: { layers: [] } } : {}) })
  return {
    args: { config, isEditor: true },
    render: args => <ReloadableMap config={args.config} />,
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement)
      await waitForEditor(canvas)
      await openAccordion(canvas, 'Bubble Layers')
      expect(canvas.getByText('There are currently no bubble layers.')).toBeVisible()
      expect(canvas.queryByRole('button', { name: /^Layer 1/ })).not.toBeInTheDocument()
      await performAndAssert(
        'Add the first draft layer',
        () => Boolean(canvas.queryByRole('button', { name: 'Layer 1', exact: true })),
        () => userEvent.click(canvas.getByRole('button', { name: 'Add Bubble Layer' })),
        (_before, after) => after
      )
      await userEvent.click(canvas.getByRole('button', { name: 'Layer 1', exact: true }))
      const layer = canvas.getByRole('button', { name: 'Layer 1', exact: true }).closest('.series-item') as HTMLElement
      await userEvent.click(within(layer).getByRole('button', { name: 'Legend', exact: true }))
      expect(canvas.getByRole('checkbox', { name: 'Show Color Legend for Layer 1' })).toBeChecked()
      expect(canvas.getByRole('checkbox', { name: 'Show Size Legend for Layer 1' })).toBeChecked()
      await performAndAssert(
        'Remove the final layer',
        () => canvas.getByTestId('saved-layers').textContent,
        () => userEvent.click(canvas.getByRole('button', { name: 'Remove Layer' })),
        (_before, after) => after === '[]'
      )
      expect(canvas.getByText('There are currently no bubble layers.')).toBeVisible()
      await userEvent.click(canvas.getByRole('button', { name: 'Reload saved map' }))
      await waitForEditor(canvas)
      await openAccordion(canvas, 'Bubble Layers')
      expect(canvas.getByText('There are currently no bubble layers.')).toBeVisible()
      expect(canvas.queryByRole('button', { name: /^Layer 1/ })).not.toBeInTheDocument()
    }
  }
}

export const Missing_Bubble_Settings = emptyMapStory(false)
export const Explicit_Empty_Layers = emptyMapStory(true)
