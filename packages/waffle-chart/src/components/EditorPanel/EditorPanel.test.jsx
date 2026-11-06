import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ConfigContext from '../../ConfigContext'
import InitialState from '../../data/initial-state'
import EditorPanel from './EditorPanel'

vi.mock('@cdc/core/components/EditorPanel/EditorPanel', () => ({
  EditorPanel: ({ children }) => <div>{children({ convertStateToConfig: vi.fn() })}</div>
}))
vi.mock('@cdc/core/components/AdvancedEditor', () => ({
  default: ({ loadConfig, config, convertStateToConfig }) => (
    <div
      data-testid='advanced-editor'
      data-config={config.visualizationType}
      data-converter={typeof convertStateToConfig}
      data-loader={typeof loadConfig}
    >
      Advanced editor
    </div>
  )
}))
vi.mock('../../images/warning.svg', () => ({ default: () => <span data-testid='warning-icon' /> }))
vi.mock('./components/Panels', () => ({
  default: {
    General: () => <div>General body</div>,
    Data: () => <div>Data body</div>,
    ChartSettings: () => <div>Chart Settings body</div>,
    Visual: ({ variant }) => <div>Visual {variant}</div>,
    MarkupVariables: () => <div>Markup Variables body</div>
  }
}))

describe('EditorPanel', () => {
  const renderEditor = (visualizationType, configOverrides = {}) =>
    render(
      <ConfigContext.Provider
        value={{
          config: { ...InitialState, visualizationType, dataColumn: 'Value', dataFunction: 'Sum', ...configOverrides },
          updateConfig: vi.fn(),
          loading: false
        }}
      >
        <EditorPanel />
      </ConfigContext.Provider>
    )

  it('preserves standard section order and Advanced Editor wiring', () => {
    renderEditor('Waffle')
    expect(screen.getAllByRole('button').map(button => button.textContent)).toEqual([
      'General',
      'Data',
      'Chart Settings',
      'Visual',
      'Markup Variables'
    ])
    expect(screen.getByText('Visual standard')).toBeInTheDocument()
    expect(screen.getByTestId('advanced-editor')).toHaveAttribute('data-config', 'Waffle')
    expect(screen.getByTestId('advanced-editor')).toHaveAttribute('data-converter', 'function')
    expect(screen.getByTestId('advanced-editor')).toHaveAttribute('data-loader', 'function')
  })

  it('hides Chart Settings and uses the TP5 visual branch for TP5 Gauge', () => {
    renderEditor('TP5 Gauge')
    expect(screen.getAllByRole('button').map(button => button.textContent)).toEqual([
      'General',
      'Data',
      'Visual',
      'Markup Variables'
    ])
    expect(screen.getByText('Visual tp5')).toBeInTheDocument()
  })

  it('preserves Gauge and TP5 Waffle section gates and visual variants', () => {
    const gauge = renderEditor('Gauge')
    expect(screen.getAllByRole('button').map(button => button.textContent)).toEqual([
      'General',
      'Data',
      'Visual',
      'Markup Variables'
    ])
    expect(screen.getByText('Visual standard')).toBeInTheDocument()
    gauge.unmount()

    renderEditor('TP5 Waffle')
    expect(screen.getAllByRole('button').map(button => button.textContent)).toEqual([
      'General',
      'Data',
      'Chart Settings',
      'Visual',
      'Markup Variables'
    ])
    expect(screen.getByText('Visual tp5')).toBeInTheDocument()
  })

  it('preserves the Data warning icon for incomplete required fields', () => {
    renderEditor('Waffle', { dataColumn: '' })
    expect(screen.getByTestId('warning-icon')).toBeInTheDocument()
  })
})
