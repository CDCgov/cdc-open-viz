import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../context'
import { createNewMapConfig } from '../../../helpers/createNewMapConfig'
import { createDefaultBubbleLayer } from '../../../helpers/bubbleLayers'
import BubbleEditorSection from './BubbleEditorSection'

vi.mock('./BubbleLayerFields', () => ({ default: () => null }))
vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

const renderEditor = (sizeShown: boolean) => {
  const config = createNewMapConfig({
    general: { showSidebar: false },
    bubble: {
      layers: [createDefaultBubbleLayer({ legend: { size: { show: sizeShown } } }), createDefaultBubbleLayer()]
    }
  })
  const setConfig = vi.fn()
  render(
    <ConfigContext.Provider value={{ config, setConfig } as any}>
      <Accordion allowZeroExpanded>
        <BubbleEditorSection columnNames={[]} numberOfItemsLimit={5} />
      </Accordion>
    </ConfigContext.Provider>
  )
  fireEvent.click(screen.getByRole('button', { name: 'Bubble Layers', exact: true }))
  for (const name of ['Layer 1', 'Layer 2']) {
    const button = screen.getByRole('button', { name, exact: true })
    fireEvent.click(button)
    fireEvent.click(
      within(button.closest('.series-item') as HTMLElement).getByRole('button', { name: 'Legend', exact: true })
    )
  }
  return { config, setConfig }
}

describe('BubbleEditorSection legend controls', () => {
  it('saves a single-item label only on the selected layer', async () => {
    const { config, setConfig } = renderEditor(true)
    const inputs = screen.getAllByRole('textbox', { name: /^Single-item Label/ })
    expect(new Set(inputs.map(input => input.id)).size).toBe(2)
    fireEvent.change(inputs[0], { target: { value: 'Recent cases' } })
    await waitFor(() => expect(setConfig).toHaveBeenCalled())
    const updated = setConfig.mock.calls[0][0]
    expect(updated.bubble.layers[0].legend.size.singleItemLabel).toBe('Recent cases')
    expect(updated.bubble.layers[0].legend.size.show).toBe(true)
    expect(updated.bubble.layers[1]).toEqual(config.bubble.layers[1])
  })

  it.each([true, false])('changes size visibility independently with initial visibility %s', shown => {
    const { config, setConfig } = renderEditor(shown)
    fireEvent.click(screen.getByRole('checkbox', { name: 'Show Size Legend for Layer 1' }))
    const updated = setConfig.mock.calls[0][0]
    expect(updated.bubble.layers[0].legend.size.show).toBe(!shown)
    expect(updated.general.showSidebar).toBe(!shown)
    expect(updated.bubble.layers[0].legend.show).toBe(config.bubble.layers[0].legend.show)
    expect(updated.bubble.layers[1]).toEqual(config.bubble.layers[1])
    expect(updated.bubble.layers[0].columns).toEqual(config.bubble.layers[0].columns)
  })

  it('has unique input IDs per layer and changes only the selected color visibility', () => {
    const { config, setConfig } = renderEditor(true)
    const controls = screen.getAllByRole('checkbox', { name: /^Show (Color|Size) Legend for Layer/ })
    expect(new Set(controls.map(input => input.id)).size).toBe(4)
    fireEvent.click(screen.getByRole('checkbox', { name: 'Show Color Legend for Layer 2' }))
    const updated = setConfig.mock.calls[0][0]
    expect(updated.bubble.layers[1].legend.show).toBe(false)
    expect(updated.bubble.layers[1].legend.size).toEqual(config.bubble.layers[1].legend.size)
    expect(updated.bubble.layers[0]).toEqual(config.bubble.layers[0])
    expect(updated.general.showSidebar).toBe(false)
  })
})
