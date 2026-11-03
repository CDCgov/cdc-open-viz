import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import DefaultConfig from '../../../../../../examples/default.json'
import Context from '../../../../../context'
import VisualPanel from './VisualPanel'

vi.mock('@cdc/core/components/EditorPanel/sections/Tp5VisualSection', () => ({
  Tp5VisualSection: () => <div>TP5 visual controls</div>
}))
vi.mock('@cdc/core/components/EditorPanel/sections/VisualSection', () => ({
  VisualSection: ({ beforeCheckboxes }: { beforeCheckboxes?: ReactNode }) => (
    <div>Standard visual controls{beforeCheckboxes}</div>
  )
}))

describe('VisualPanel', () => {
  const renderPanel = (variant: 'tp5' | 'standard') =>
    render(
      <Context.Provider value={{ config: DefaultConfig, updateConfig: vi.fn() }}>
        <VisualPanel variant={variant} />
      </Context.Provider>
    )

  it('preserves the TP5 visual variant', () => {
    renderPanel('tp5')
    expect(screen.getByText('TP5 visual controls')).toBeInTheDocument()
    expect(screen.getByLabelText('Value Above Message')).toBeInTheDocument()
    expect(screen.queryByText('Standard visual controls')).not.toBeInTheDocument()
  })

  it('preserves the standard visual variant', () => {
    renderPanel('standard')
    expect(screen.getByText(/Standard visual controls/)).toBeInTheDocument()
    expect(screen.getByLabelText('Bite Font Size')).toBeInTheDocument()
    expect(screen.getByLabelText('Overall Font Size')).toBeInTheDocument()
    expect(screen.queryByText('TP5 visual controls')).not.toBeInTheDocument()
  })
})
