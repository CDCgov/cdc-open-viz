import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ConfigContext from '../../../../../ConfigContext'
import InitialState from '../../../../../data/initial-state'
import ChartSettingsPanel from './ChartSettingsPanel'

describe('ChartSettingsPanel', () => {
  const renderPanel = visualizationType =>
    render(
      <ConfigContext.Provider value={{ config: { ...InitialState, visualizationType }, updateConfig: vi.fn() }}>
        <ChartSettingsPanel />
      </ConfigContext.Provider>
    )

  it('preserves standard chart settings', () => {
    renderPanel('Waffle')
    expect(screen.getByLabelText('Shape')).toBeInTheDocument()
    expect(screen.getByLabelText('Width')).toBeInTheDocument()
    expect(screen.getByLabelText('Layout')).toBeInTheDocument()
  })

  it('keeps TP5 Waffle settings limited to shape', () => {
    renderPanel('TP5 Waffle')
    expect(screen.getByLabelText('Shape')).toBeInTheDocument()
    expect(screen.queryByLabelText('Width')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Layout')).not.toBeInTheDocument()
  })
})
