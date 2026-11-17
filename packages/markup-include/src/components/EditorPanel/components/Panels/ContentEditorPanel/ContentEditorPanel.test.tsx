import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import InitialState from '../../../../../data/initial-state'
import ConfigContext from '../../../../../ConfigContext'
import ContentEditorPanel from './ContentEditorPanel'

describe('ContentEditorPanel', () => {
  it('preserves inline HTML and source URL branches', () => {
    const updateConfig = vi.fn()
    const renderWithInline = useInlineHTML => (
      <ConfigContext.Provider
        value={
          {
            config: { ...InitialState, contentEditor: { ...InitialState.contentEditor, useInlineHTML } },
            updateConfig
          } as any
        }
      >
        <ContentEditorPanel />
      </ConfigContext.Provider>
    )
    const { rerender } = render(renderWithInline(true))
    expect(screen.getByLabelText('HTML')).toBeInTheDocument()
    expect(screen.queryByLabelText('Source URL;')).not.toBeInTheDocument()
    rerender(renderWithInline(false))
    expect(screen.getByLabelText('Source URL;')).toBeInTheDocument()
    expect(screen.queryByLabelText('HTML')).not.toBeInTheDocument()
  })
})
