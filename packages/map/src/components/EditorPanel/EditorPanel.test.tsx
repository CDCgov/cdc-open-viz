import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DefaultConfig from '../../../examples/default.json'
import ConfigContext from '../../context'
import EditorPanel from './EditorPanel'

vi.mock('react-accessible-accordion', () => ({
  Accordion: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}))
vi.mock('react-tooltip', () => ({ Tooltip: () => null }))
vi.mock('@cdc/core/components/EditorPanel/EditorPanel', () => ({
  EditorPanel: ({ children }: { children: () => React.ReactNode }) => <div>{children()}</div>
}))
vi.mock('@cdc/core/components/EditorPanel/ModernStylesAction', () => ({
  default: () => <div data-testid='modern-styles'>Modern styles</div>
}))
vi.mock('@cdc/core/components/AdvancedEditor', () => ({
  default: ({ loadConfig, config, convertStateToConfig }) => (
    <div
      data-testid='advanced-editor'
      data-config={config.type}
      data-converter={typeof convertStateToConfig}
      data-loader={typeof loadConfig}
    />
  )
}))
vi.mock('./components/Panels', () => {
  const panel = (name: string) => (props: { columnNames?: string[] }) =>
    <div data-columns={props.columnNames?.join(',')} data-panel={name} />

  return {
    default: {
      Type: panel('Type'),
      General: panel('General'),
      Columns: panel('Columns'),
      Legend: panel('Legend'),
      Filters: panel('Filters'),
      Footnotes: panel('Footnotes'),
      TimePlayback: panel('Time Playback'),
      DataTable: panel('Data Table'),
      Interactivity: panel('Interactivity'),
      Visual: panel('Visual'),
      BubbleLayers: panel('Bubble Layers'),
      CustomMapLayers: panel('Custom Map Layers'),
      PatternSettings: panel('Pattern Settings'),
      TextAnnotations: panel('Text Annotations'),
      MarkupVariables: panel('Markup Variables'),
      SmallMultiples: panel('Small Multiples')
    }
  }
})

const cloneDefaultConfig = () => structuredClone(DefaultConfig)

const renderEditor = ({ config = cloneDefaultConfig(), datasets, isDashboard = false }: any = {}) => {
  const setConfig = vi.fn()

  const result = render(
    <ConfigContext.Provider
      value={
        {
          config,
          setConfig,
          setParentConfig: vi.fn(),
          loadConfig: setConfig,
          isDashboard
        } as any
      }
    >
      <EditorPanel datasets={datasets} />
    </ConfigContext.Provider>
  )

  return { ...result, setConfig }
}

describe('Map EditorPanel', () => {
  it('preserves panel order, public actions, and Advanced Editor wiring', () => {
    const { container } = renderEditor()

    expect(Array.from(container.querySelectorAll('[data-panel]')).map(node => node.getAttribute('data-panel'))).toEqual(
      [
        'Type',
        'General',
        'Columns',
        'Legend',
        'Filters',
        'Footnotes',
        'Time Playback',
        'Data Table',
        'Interactivity',
        'Visual',
        'Bubble Layers',
        'Custom Map Layers',
        'Pattern Settings',
        'Text Annotations',
        'Markup Variables',
        'Small Multiples'
      ]
    )
    expect(screen.getByTestId('modern-styles')).toBeInTheDocument()
    expect(screen.getByTestId('advanced-editor')).toHaveAttribute('data-config', 'map')
    expect(screen.getByTestId('advanced-editor')).toHaveAttribute('data-converter', 'function')
    expect(screen.getByTestId('advanced-editor')).toHaveAttribute('data-loader', 'function')
  })

  it('preserves dashboard column fallback and dashboard action gate', () => {
    const config = { ...cloneDefaultConfig(), data: [], dataKey: 'assigned' }
    const datasets = { assigned: { data: [{ Region: 'A', Value: 1 }] } }

    renderEditor({ config, datasets, isDashboard: true })

    expect(document.querySelector('[data-panel="Type"]')).toHaveAttribute('data-columns', 'Region,Value')
    expect(screen.queryByTestId('modern-styles')).not.toBeInTheDocument()
  })

  it('preserves geography and map-type panel gates', () => {
    const config = cloneDefaultConfig()
    config.general.geoType = 'us-county'
    config.general.type = 'navigation'

    renderEditor({ config })

    expect(document.querySelector('[data-panel="Bubble Layers"]')).not.toBeInTheDocument()
    expect(document.querySelector('[data-panel="Pattern Settings"]')).toBeInTheDocument()
    expect(document.querySelector('[data-panel="Text Annotations"]')).not.toBeInTheDocument()
  })
})
