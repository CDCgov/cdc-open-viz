import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import VizFilterEditor from './VizFilterEditor'

vi.mock('@hello-pangea/dnd', () => ({
  DragDropContext: ({ children }) => <div>{children}</div>,
  Droppable: ({ children }) =>
    children(
      {
        droppableProps: {},
        innerRef: vi.fn(),
        placeholder: null
      },
      { isDraggingOver: false }
    ),
  Draggable: ({ children }) =>
    children(
      {
        draggableProps: { style: {} },
        dragHandleProps: {},
        innerRef: vi.fn()
      },
      { isDragging: false }
    )
}))

vi.mock('../../ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

const config = {
  filters: [
    {
      id: 1,
      label: 'State',
      note: 'Existing note',
      columnName: 'state',
      values: ['Alabama', 'Alaska'],
      active: 'Alabama',
      showDropdown: true,
      filterStyle: 'dropdown',
      order: 'asc',
      parents: []
    }
  ],
  filterBehavior: 'Filter Change'
} as any

describe('VizFilterEditor filter notes', () => {
  it('updates filters[index].note from the Note textarea', async () => {
    const updateField = vi.fn()

    render(<VizFilterEditor config={config} updateField={updateField} rawData={[{ state: 'Alabama' }]} />)

    fireEvent.change(screen.getByLabelText('Note'), { target: { value: 'Helpful note' } })

    await waitFor(() => {
      expect(updateField).toHaveBeenCalledWith('filters', 0, 'note', 'Helpful note', null)
    })
  })
})
