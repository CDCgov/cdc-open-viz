import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import MarkupVariablesPanel from './MarkupVariablesPanel'

vi.mock('@cdc/core/components/EditorPanel/components/PanelMarkup', () => ({ default: ({ name }) => <div>{name}</div> }))

describe('MarkupVariablesPanel', () => {
  it('renders for standard charts and hides for Radar', () => {
    const props = { data: [], updateField: vi.fn() }
    const { rerender } = render(<MarkupVariablesPanel {...props} config={{ visualizationType: 'Bar' } as any} />)
    expect(screen.getByText('Markup Variables')).toBeInTheDocument()
    rerender(<MarkupVariablesPanel {...props} config={{ visualizationType: 'Radar' } as any} />)
    expect(screen.queryByText('Markup Variables')).not.toBeInTheDocument()
  })
})
