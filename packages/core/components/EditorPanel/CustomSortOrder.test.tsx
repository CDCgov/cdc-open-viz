import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CustomSortOrder from './CustomSortOrder'

vi.mock('@hello-pangea/dnd', () => ({
  DragDropContext: ({ children, onDragEnd }) => (
    <div>
      <button
        type='button'
        onClick={() => onDragEnd({ source: { index: 0 }, destination: { index: 1 } })}
      >
        Reorder
      </button>
      {children}
    </div>
  ),
  Droppable: ({ children }) =>
    children({ droppableProps: {}, innerRef: vi.fn(), placeholder: null }, { isDraggingOver: false }),
  Draggable: ({ children }) =>
    children(
      { draggableProps: { style: {} }, dragHandleProps: {}, innerRef: vi.fn() },
      { isDragging: false }
    )
}))

describe('CustomSortOrder', () => {
  it('fills missing update target fields from the defaults', () => {
    const updateField = vi.fn()

    render(
      <CustomSortOrder
        column='category'
        data={[{ category: 'Alpha' }, { category: 'Beta' }]}
        updateField={updateField}
        updateTarget={{ fieldName: 'categoryOrder' }}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Reorder' }))

    expect(updateField).toHaveBeenCalledTimes(1)
    expect(updateField).toHaveBeenCalledWith('table', 'defaultSort', 'categoryOrder', ['Beta', 'Alpha'])
  })

  it('uses the complete default update target when none is provided', () => {
    const updateField = vi.fn()

    render(
      <CustomSortOrder
        column='category'
        data={[{ category: 'Alpha' }, { category: 'Beta' }]}
        updateField={updateField}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Reorder' }))

    expect(updateField).toHaveBeenCalledTimes(1)
    expect(updateField).toHaveBeenCalledWith('table', 'defaultSort', 'customOrder', ['Beta', 'Alpha'])
  })

  it('preserves explicit null target values', () => {
    const updateField = vi.fn()

    render(
      <CustomSortOrder
        column='category'
        data={[{ category: 'Alpha' }, { category: 'Beta' }]}
        updateField={updateField}
        updateTarget={{ section: 'xAxis', subsection: null, fieldName: 'categoryOrder' }}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Reorder' }))

    expect(updateField).toHaveBeenCalledTimes(1)
    expect(updateField).toHaveBeenCalledWith('xAxis', null, 'categoryOrder', ['Beta', 'Alpha'])
  })
})
