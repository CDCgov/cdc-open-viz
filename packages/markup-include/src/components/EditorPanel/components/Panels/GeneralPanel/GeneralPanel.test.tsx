import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import InitialState from '../../../../../data/initial-state'
import ConfigContext from '../../../../../ConfigContext'
import GeneralPanel from './GeneralPanel'

const renderPanel = style =>
  render(
    <ConfigContext.Provider
      value={
        {
          config: { ...InitialState, contentEditor: { ...InitialState.contentEditor, style } },
          updateConfig: vi.fn()
        } as any
      }
    >
      <GeneralPanel />
    </ConfigContext.Provider>
  )

describe('GeneralPanel', () => {
  it('preserves default and TP5 title-style applicability', () => {
    const { rerender } = renderPanel('default')
    expect(screen.getByLabelText(/^Title Style/)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Language for dates and numbers/)).toBeInTheDocument()
    rerender(
      <ConfigContext.Provider
        value={
          {
            config: { ...InitialState, contentEditor: { ...InitialState.contentEditor, style: 'tp5' } },
            updateConfig: vi.fn()
          } as any
        }
      >
        <GeneralPanel />
      </ConfigContext.Provider>
    )
    expect(screen.queryByLabelText(/^Title Style/)).not.toBeInTheDocument()
  })
})
