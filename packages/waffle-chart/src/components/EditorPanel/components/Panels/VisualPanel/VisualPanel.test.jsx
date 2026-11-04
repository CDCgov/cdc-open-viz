import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ConfigContext from '../../../../../ConfigContext'
import InitialState from '../../../../../data/initial-state'
import VisualPanel from './VisualPanel'

vi.mock('@cdc/core/components/EditorPanel/sections/Tp5VisualSection', () => ({
  Tp5VisualSection: () => <div>TP5 visual controls</div>
}))
vi.mock('@cdc/core/components/EditorPanel/sections/VisualSection', () => ({
  VisualSection: ({ beforeCheckboxes }) => <div>Standard visual controls{beforeCheckboxes}</div>
}))

describe('VisualPanel', () => {
  const renderPanel = (variant, visualizationType) =>
    render(
      <ConfigContext.Provider value={{ config: { ...InitialState, visualizationType }, updateConfig: vi.fn() }}>
        <VisualPanel variant={variant} />
      </ConfigContext.Provider>
    )

  it('preserves TP5 Gauge controls', () => {
    renderPanel('tp5', 'TP5 Gauge')
    expect(screen.getByText('TP5 visual controls')).toBeInTheDocument()
    expect(screen.getByLabelText('Value Above Message')).toBeInTheDocument()
  })

  it('preserves standard controls and injected overall font size', () => {
    renderPanel('standard', 'Waffle')
    expect(screen.getByText(/Standard visual controls/)).toBeInTheDocument()
    expect(screen.getByLabelText('Overall Font Size')).toBeInTheDocument()
    expect(screen.queryByText('TP5 visual controls')).not.toBeInTheDocument()
  })
})
