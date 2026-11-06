import { render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import FootnotesPanel from './FootnotesPanel'

vi.mock('@cdc/core/components/EditorPanel/FootnotesEditor', () => ({ default: () => <div>footnotes editor</div> }))

describe('FootnotesPanel', () => {
  it('renders its accordion heading', () => {
    render(
      <Accordion>
        <FootnotesPanel config={{} as any} updateField={vi.fn()} />
      </Accordion>
    )
    expect(screen.getByRole('button', { name: 'Footnotes' })).toBeInTheDocument()
  })
})
