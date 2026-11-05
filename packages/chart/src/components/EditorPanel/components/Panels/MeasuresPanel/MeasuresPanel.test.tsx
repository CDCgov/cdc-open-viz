import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../../ConfigContext'
import MeasuresPanel from './MeasuresPanel'
import { createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
vi.mock('../../../EditorPanelContext', () => ({ useEditorPanelContext: () => ({ updateField: vi.fn() }) }))
vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))
describe('MeasuresPanel', () => {
  it('is hidden for non-box-plot charts', () => {
    const { container } = render(
      <ConfigContext.Provider value={{ config: { visualizationType: 'Bar' } } as any}>
        <MeasuresPanel name='Measures' />
      </ConfigContext.Provider>
    )
    expect(container).toBeEmptyDOMElement()
  })
  it('renders its controls for Box Plot charts', () => {
    const config = createMockConfig({
      visualizationType: 'Box Plot',
      boxplot: {
        labels: {
          maximum: 'Maximum',
          q3: 'Upper Quartile',
          median: 'Median',
          q1: 'Lower Quartile',
          minimum: 'Minimum',
          iqr: 'Interquartile Range',
          count: 'Count',
          mean: 'Mean',
          outliers: 'Outliers',
          values: 'Values'
        }
      } as any
    })
    render(
      <ConfigContext.Provider value={{ config } as any}>
        <Accordion>
          <MeasuresPanel name='Measures' />
        </Accordion>
      </ConfigContext.Provider>
    )
    expect(screen.getByRole('button', { name: 'Measures' })).toBeInTheDocument()
  })
})
