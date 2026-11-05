import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ConfigContext from '../../../../../ConfigContext'
import InitialState from '../../../../../data/initial-state'
import MarkupVariablesPanel from './MarkupVariablesPanel'

vi.mock('@cdc/core/components/EditorPanel/components/PanelMarkup', () => ({
  default: ({ data, editorData, onMarkupVariablesChange, onToggleEnable, withAccordion }) => (
    <div>
      <span data-testid='render-data'>{JSON.stringify(data)}</span>
      <span data-testid='editor-data'>{JSON.stringify(editorData)}</span>
      <span data-testid='with-accordion'>{String(withAccordion)}</span>
      <button onClick={() => onMarkupVariablesChange([{ name: 'Added' }])}>Change variables</button>
      <button onClick={() => onToggleEnable(true)}>Enable variables</button>
    </div>
  )
}))

describe('MarkupVariablesPanel', () => {
  it('preserves data forwarding and change/toggle payloads', () => {
    const updateConfig = vi.fn()
    const data = [{ value: 'filtered' }]
    const editorData = [{ value: 'raw' }]
    render(
      <ConfigContext.Provider value={{ config: InitialState, updateConfig, data, editorData }}>
        <MarkupVariablesPanel />
      </ConfigContext.Provider>
    )

    expect(JSON.parse(screen.getByTestId('render-data').textContent)).toEqual(data)
    expect(JSON.parse(screen.getByTestId('editor-data').textContent)).toEqual(editorData)
    expect(screen.getByTestId('with-accordion')).toHaveTextContent('false')

    fireEvent.click(screen.getByRole('button', { name: 'Change variables' }))
    expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ markupVariables: [{ name: 'Added' }] }))
    fireEvent.click(screen.getByRole('button', { name: 'Enable variables' }))
    expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ enableMarkupVariables: true }))
  })
})
