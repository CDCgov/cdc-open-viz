import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import ForestPlotSettingsPanel from './ForestPlotSettingsPanel'
import { createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
vi.mock('../../../EditorPanelContext', () => ({ useEditorPanelContext: () => ({ getColumns: () => [] }) }))
vi.mock('../../../../../images/warning.svg', () => ({ default: () => <svg /> }))
vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))
describe('ForestPlotSettingsPanel', () => {
  it('is hidden for other visualization types', () => {
    const { container } = render(
      <ConfigContext.Provider value={{ config: { visualizationType: 'Bar' } } as any}>
        <ForestPlotSettingsPanel name='Forest Plot Settings' />
      </ConfigContext.Provider>
    )
    expect(container).toBeEmptyDOMElement()
  })
  it('renders its controls for Forest Plot charts', () => {
    const config = createMockConfig({
      visualizationType: 'Forest Plot',
      forestPlot: {
        type: '',
        estimateField: '',
        lower: '',
        upper: '',
        shape: 'square',
        pooledResult: { column: '' },
        lineOfNoEffect: { show: true },
        rowHeight: 20,
        radius: { scalingColumn: '', min: 2, max: 10 },
        leftLabel: '',
        rightLabel: ''
      } as any
    })
    render(
      <ConfigContext.Provider value={{ config, rawData: [], updateConfig: vi.fn() } as any}>
        <Accordion>
          <ForestPlotSettingsPanel name='Forest Plot Settings' />
        </Accordion>
      </ConfigContext.Provider>
    )
    expect(screen.getByRole('button', { name: /Forest Plot Settings/ })).toBeInTheDocument()
  })
})
