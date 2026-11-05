import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import ColumnsPanel from './ColumnsPanel'

vi.mock('@cdc/core/components/EditorPanel/ColumnsEditor', () => ({ default: () => <div>columns editor</div> }))

const config = { visualizationType: 'Bar' } as any
describe('ColumnsPanel', () => {
  it('renders for supported charts and hides for Sankey', () => {
    const { rerender } = render(
      <Accordion>
        <ColumnsPanel config={config} updateField={vi.fn()} deleteColumn={vi.fn()} hiddenColumnNames={[]} />
      </Accordion>
    )
    expect(screen.getByRole('button', { name: 'Columns' })).toBeInTheDocument()
    rerender(
      <Accordion>
        <ColumnsPanel
          config={{ ...config, visualizationType: 'Sankey' }}
          updateField={vi.fn()}
          deleteColumn={vi.fn()}
          hiddenColumnNames={[]}
        />
      </Accordion>
    )
    expect(screen.queryByRole('button', { name: 'Columns' })).not.toBeInTheDocument()
  })
})
