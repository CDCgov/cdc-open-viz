import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import InitialState from '../../../../../data/initial-state'
import ConfigContext from '../../../../../ConfigContext'
import MarkupVariablesPanel from './MarkupVariablesPanel'

vi.mock('@cdc/core/components/EditorPanel/components/MarkupVariablesEditor', () => ({
  default: ({ data, editorData, onChange, onToggleEnable }) => (
    <div>
      <span data-testid='render-data'>{JSON.stringify(data)}</span>
      <span data-testid='editor-data'>{JSON.stringify(editorData)}</span>
      <button onClick={() => onChange([{ name: 'Added' }])}>Change variables</button>
      <button onClick={() => onToggleEnable(true)}>Enable variables</button>
    </div>
  )
}))

describe('MarkupVariablesPanel', () => {
  it('preserves render/editor data and change/toggle payloads', () => {
    const updateConfig = vi.fn()
    const renderData = [{ value: 'filtered' }]
    const editorData = [{ value: 'raw' }]
    render(
      <ConfigContext.Provider value={{ config: InitialState, data: renderData, editorData, updateConfig } as any}>
        <MarkupVariablesPanel />
      </ConfigContext.Provider>
    )
    expect(JSON.parse(screen.getByTestId('render-data').textContent || '[]')).toEqual(renderData)
    expect(JSON.parse(screen.getByTestId('editor-data').textContent || '[]')).toEqual(editorData)
    fireEvent.click(screen.getByRole('button', { name: 'Change variables' }))
    expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ markupVariables: [{ name: 'Added' }] }))
    fireEvent.click(screen.getByRole('button', { name: 'Enable variables' }))
    expect(updateConfig).toHaveBeenCalledWith(expect.objectContaining({ enableMarkupVariables: true }))
  })
})
