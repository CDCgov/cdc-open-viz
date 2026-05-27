import React from 'react'
import { Accordion } from 'react-accessible-accordion'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../../ConfigContext'
import EditorPanelContext from '../../EditorPanelContext'
import PanelSmallMultiples from './Panel.SmallMultiples'
import { createMockChartContext, createMockConfig } from '../../../LinearChart/tests/mockConfigContext'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: () => <span data-testid='icon' />
}))

const renderPanel = config => {
  const context = createMockChartContext(config, {
    rawData: [{ Date: '2024-01-01', series_a: 1, series_b: 2 }]
  } as any)

  render(
    <ConfigContext.Provider value={context}>
      <EditorPanelContext.Provider value={{ updateField: vi.fn() }}>
        <Accordion allowZeroExpanded>
          <PanelSmallMultiples name='Small Multiples' />
        </Accordion>
      </EditorPanelContext.Provider>
    </ConfigContext.Provider>
  )

  fireEvent.click(screen.getByRole('button', { name: 'Small Multiples' }))
}

describe('PanelSmallMultiples color assignments warning', () => {
  it('shows the by-series same-color override warning only when assignments are active', () => {
    const config = createMockConfig({
      visualizationType: 'Line',
      general: {
        palette: {
          colorAssignmentMode: 'by-value',
          colorAssignments: [{ key: 'series_a', color: '#123456' }]
        }
      } as any,
      smallMultiples: {
        mode: 'by-series',
        colorMode: 'same'
      },
      series: [
        { dataKey: 'series_a', name: 'Alpha', type: 'Line' },
        { dataKey: 'series_b', name: 'Beta', type: 'Line' }
      ] as any
    })

    renderPanel(config)

    expect(screen.queryByText(/Color assignments are enabled/)).toBeInTheDocument()
  })

  it('does not show the override warning when assignment mode is ordered', () => {
    const config = createMockConfig({
      visualizationType: 'Line',
      general: {
        palette: {
          colorAssignmentMode: 'ordered',
          colorAssignments: [{ key: 'series_a', color: '#123456' }]
        }
      } as any,
      smallMultiples: {
        mode: 'by-series',
        colorMode: 'same'
      },
      series: [{ dataKey: 'series_a', name: 'Alpha', type: 'Line' }] as any
    })

    renderPanel(config)

    expect(screen.queryByText(/Color assignments are enabled/)).not.toBeInTheDocument()
  })
})
