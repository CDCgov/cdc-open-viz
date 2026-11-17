import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import FiltersPanel from './FiltersPanel'

vi.mock('@cdc/core/components/EditorPanel/VizFilterEditor', () => ({ default: () => <div>filter editor</div> }))

describe('FiltersPanel', () => {
  it('renders its accordion heading', () => {
    render(
      <Accordion>
        <FiltersPanel config={{} as any} updateField={vi.fn()} rawData={[]} hasFootnotes={false} />
      </Accordion>
    )
    expect(screen.getByRole('button', { name: 'Filters' })).toBeInTheDocument()
  })
})
