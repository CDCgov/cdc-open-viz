import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import PatternSettingsPanel from './PatternSettingsPanel'
import { createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
describe('PatternSettingsPanel', () => {
  it('is hidden for heatmaps', () => {
    const { container } = render(
      <ConfigContext.Provider value={{ config: { visualizationType: 'HeatMap' } } as any}>
        <PatternSettingsPanel name='Pattern Settings' />
      </ConfigContext.Provider>
    )
    expect(container).toBeEmptyDOMElement()
  })
  it('renders its controls for supported charts', () => {
    const config = createMockConfig({ visualizationType: 'Bar' })
    render(
      <ConfigContext.Provider value={{ config, transformedData: [], updateConfig: vi.fn() } as any}>
        <Accordion>
          <PatternSettingsPanel name='Pattern Settings' />
        </Accordion>
      </ConfigContext.Provider>
    )
    expect(screen.getByRole('button', { name: 'Pattern Settings' })).toBeInTheDocument()
  })
})
