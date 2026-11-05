import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import InitialState from '../../../../../data/initial-state'
import ConfigContext from '../../../../../ConfigContext'
import FootnotesPanel from './FootnotesPanel'

vi.mock('@cdc/core/components/EditorPanel/FootnotesEditor', () => ({
  default: ({ config, datasets, updateField }) => (
    <div
      data-config={config.type}
      data-datasets={Object.keys(datasets || {}).join(',')}
      data-update={typeof updateField}
    >
      Footnotes body
    </div>
  )
}))

describe('FootnotesPanel', () => {
  it('preserves config, datasets, and update wiring', () => {
    render(
      <ConfigContext.Provider value={{ config: InitialState, updateConfig: vi.fn() } as any}>
        <FootnotesPanel datasets={{ sample: { data: [] } } as any} />
      </ConfigContext.Provider>
    )
    expect(screen.getByText('Footnotes body')).toHaveAttribute('data-config', 'markup-include')
    expect(screen.getByText('Footnotes body')).toHaveAttribute('data-datasets', 'sample')
    expect(screen.getByText('Footnotes body')).toHaveAttribute('data-update', 'function')
  })
})
