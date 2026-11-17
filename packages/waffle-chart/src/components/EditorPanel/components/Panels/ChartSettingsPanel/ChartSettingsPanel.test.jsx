import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import ConfigContext from '../../../../../ConfigContext'
import InitialState from '../../../../../data/initial-state'
import ChartSettingsPanel from './ChartSettingsPanel'

describe('ChartSettingsPanel', () => {
  afterEach(() => vi.restoreAllMocks())

  const panel = (visualizationType, overrides = {}) => (
    <ConfigContext.Provider
      value={{ config: { ...InitialState, visualizationType, ...overrides }, updateConfig: vi.fn() }}
    >
      <ChartSettingsPanel />
    </ConfigContext.Provider>
  )
  const renderPanel = (visualizationType, overrides = {}) => render(panel(visualizationType, overrides))

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

  it('keeps incomplete settings controlled without replacing explicit zero values', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    const view = renderPanel('Waffle', {
      shape: '',
      orientation: '',
      nodeWidth: null,
      nodeSpacer: 0,
      fontSize: undefined
    })

    expect(screen.getByLabelText('Shape')).toHaveValue('circle')
    expect(screen.getByLabelText('Layout')).toHaveValue('horizontal')
    expect(screen.getByLabelText('Width')).toHaveValue(10)
    expect(screen.getByLabelText('Spacer')).toHaveValue(0)

    view.rerender(
      panel('Waffle', { shape: 'square', orientation: 'vertical', nodeWidth: 12, nodeSpacer: 0, fontSize: 40 })
    )
    expect(screen.getByLabelText('Shape')).toHaveValue('square')
    expect(screen.getByLabelText('Layout')).toHaveValue('vertical')
    expect(screen.getByLabelText('Width')).toHaveValue(12)
    expect(document.getElementById('input-root-none-fontSize')).toHaveValue(40)
    expect(consoleError).not.toHaveBeenCalled()
  })
})
