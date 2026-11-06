import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import DataTablePanel from './DataTablePanel'

vi.mock('@cdc/core/components/EditorPanel/DataTableEditor', () => ({ default: () => <div>data table editor</div> }))

describe('DataTablePanel', () => {
  it('renders except for spark lines', () => {
    const props = { columns: [], updateField: vi.fn(), isDashboard: false, isLoadedFromUrl: false }
    const { rerender } = render(
      <Accordion>
        <DataTablePanel {...props} config={{ visualizationType: 'Bar' } as any} />
      </Accordion>
    )
    expect(screen.getByRole('button', { name: 'Data Table' })).toBeInTheDocument()
    rerender(
      <Accordion>
        <DataTablePanel {...props} config={{ visualizationType: 'Spark Line' } as any} />
      </Accordion>
    )
    expect(screen.queryByRole('button', { name: 'Data Table' })).not.toBeInTheDocument()
  })
})
