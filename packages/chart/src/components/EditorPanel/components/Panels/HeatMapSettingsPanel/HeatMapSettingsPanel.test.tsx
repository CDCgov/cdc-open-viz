import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import HeatMapSettingsPanel from './HeatMapSettingsPanel'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))

describe('HeatMapSettingsPanel', () => {
  it('renders only for heatmaps', () => {
    const { rerender } = render(
      <Accordion>
        <HeatMapSettingsPanel config={{ visualizationType: 'HeatMap' } as any} updateField={vi.fn()} />
      </Accordion>
    )
    expect(screen.getByRole('button', { name: 'HeatMap Settings' })).toBeInTheDocument()
    rerender(
      <Accordion>
        <HeatMapSettingsPanel config={{ visualizationType: 'Bar' } as any} updateField={vi.fn()} />
      </Accordion>
    )
    expect(screen.queryByRole('button', { name: 'HeatMap Settings' })).not.toBeInTheDocument()
  })
})
