import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DefaultConfig from '../../../../../../examples/default.json'
import ConfigContext from '../../../../../context'
import MarkupVariablesPanel from './MarkupVariablesPanel'

vi.mock('@cdc/core/components/EditorPanel/components/PanelMarkup', () => ({
  default: ({ name, data, dataMetadata, onMarkupVariablesChange, onToggleEnable }) => (
    <div data-data-length={data.length} data-metadata={Object.keys(dataMetadata || {}).join(',')}>
      {name}
      <button onClick={() => onMarkupVariablesChange([{ name: 'Added', columnName: 'STATE' }])}>
        Change variables
      </button>
      <button onClick={() => onToggleEnable(true)}>Enable variables</button>
    </div>
  )
}))

describe('MarkupVariablesPanel', () => {
  it('forwards Map data and writes complete config updates', () => {
    const config = { ...structuredClone(DefaultConfig), dataMetadata: { STATE: { label: 'State' } } }
    const setConfig = vi.fn()

    render(
      <ConfigContext.Provider value={{ config, setConfig } as any}>
        <MarkupVariablesPanel />
      </ConfigContext.Provider>
    )

    expect(screen.getByText('Markup Variables')).toHaveAttribute('data-data-length', String(config.data.length))
    expect(screen.getByText('Markup Variables')).toHaveAttribute('data-metadata', 'STATE')

    fireEvent.click(screen.getByRole('button', { name: 'Change variables' }))
    expect(setConfig).toHaveBeenCalledWith({
      ...config,
      markupVariables: [{ name: 'Added', columnName: 'STATE' }]
    })

    fireEvent.click(screen.getByRole('button', { name: 'Enable variables' }))
    expect(setConfig).toHaveBeenLastCalledWith({ ...config, enableMarkupVariables: true })
  })
})
