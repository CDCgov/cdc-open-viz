import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import ColumnsPanel from './ColumnsPanel'

vi.mock('react-accessible-accordion', () => ({
  AccordionItem: ({ children }) => <div>{children}</div>,
  AccordionItemButton: ({ children }) => <button type='button'>{children}</button>,
  AccordionItemHeading: ({ children }) => <div>{children}</div>,
  AccordionItemPanel: ({ children }) => <div>{children}</div>
}))

vi.mock('@cdc/core/components/EditorPanel/ColumnsEditor', () => ({
  default: ({ updateField, deleteColumn }) => (
    <div data-testid='columns-editor'>
      <button type='button' onClick={() => updateField(null, null, 'Region', { name: 'Region' })}>
        Update Region
      </button>
      <button type='button' onClick={() => deleteColumn('Region')}>
        Delete Region
      </button>
    </div>
  )
}))

describe('ColumnsPanel', () => {
  it('renders the columns editor and forwards update and delete interactions', () => {
    const updateField = vi.fn()
    const deleteColumn = vi.fn()

    render(<ColumnsPanel config={{ type: 'table' } as any} updateField={updateField} deleteColumn={deleteColumn} />)

    expect(screen.getByRole('button', { name: 'Columns' })).toBeInTheDocument()
    expect(screen.getByTestId('columns-editor')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Update Region' }))
    expect(updateField).toHaveBeenCalledWith(null, null, 'Region', { name: 'Region' })

    fireEvent.click(screen.getByRole('button', { name: 'Delete Region' }))
    expect(deleteColumn).toHaveBeenCalledWith('Region')
  })
})
