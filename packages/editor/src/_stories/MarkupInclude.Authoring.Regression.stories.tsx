import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, openAccordion, waitForEditor } from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'
import MarkupPersistenceFixture from '../../../markup-include/examples/default.json'

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Misc/Markup Include/Authoring',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>

const MarkupPersistenceConfig = {
  ...MarkupPersistenceFixture,
  contentEditor: {
    ...MarkupPersistenceFixture.contentEditor,
    title: 'Persisted Markup Include',
    useInlineHTML: true,
    inlineHTML: '<p>Markup include persistence example.</p>'
  }
}

const PersistenceHarness = ({ config }) => {
  const serialized = JSON.stringify(config)
  const [loaded, setLoaded] = useState({ config, generation: 0 })
  return (
    <>
      <button
        type='button'
        onClick={() => setLoaded(current => ({ config: JSON.parse(serialized), generation: current.generation + 1 }))}
      >
        Save and reload configuration
      </button>
      <CdcEditor key={loaded.generation} config={loaded.config} />
    </>
  )
}

export const MISC002: Story = {
  name: 'MISC-002 — Markup Include Empty-Editor Workflow',
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Markup Include' }))
    await user.click(canvas.getByText('3. Configure'))
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    const titleInput = canvas.getByRole('textbox', { name: /^Title/ })
    await user.clear(titleInput)
    await user.type(titleInput, 'Markup regression')

    await openAccordion(canvas, 'Content Editor')
    const inlineHTML = canvasElement.querySelector<HTMLInputElement>('input[name*="useInlineHTML"]')
    expect(inlineHTML).toBeTruthy()
    if (!inlineHTML!.checked) {
      await user.click((inlineHTML!.closest('.cove-input__checkbox--small') || inlineHTML) as HTMLElement)
    }
    const content = canvasElement.querySelector<HTMLTextAreaElement>('textarea[name*="inlineHTML"]')
    expect(content).toBeTruthy()
    await user.clear(content!)
    await user.type(content!, '<p>Authored markup content</p>')

    await assertVisualizationRendered(canvasElement)
    expect(await canvas.findByText('Markup regression')).toBeVisible()
    expect(await canvas.findByText('Authored markup content')).toBeVisible()
  }
}

export const MISC006: Story = {
  name: 'MISC-006 — Save and Reload Markup Configuration',
  args: { config: MarkupPersistenceConfig },
  render: args => <PersistenceHarness config={args.config} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    await waitForEditor(canvas)
    expect(await canvas.findByText('Markup include persistence example.')).toBeVisible()
    await user.click(canvas.getByRole('button', { name: 'Save and reload configuration' }))
    await waitForEditor(canvas)
    expect(await canvas.findByText('Markup include persistence example.')).toBeVisible()
  }
}
