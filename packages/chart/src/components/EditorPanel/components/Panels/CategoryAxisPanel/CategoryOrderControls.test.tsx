import { type ComponentProps } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CategoryOrderControls from './CategoryOrderControls'

vi.mock('@cdc/core/components/EditorPanel/CustomSortOrder', () => ({
  default: ({ customOrder, draggableIdPrefix, droppableId, updateField }) => (
    <div
      data-testid='custom-sort-order'
      data-custom-order={(customOrder || []).join(',')}
      data-draggable-id-prefix={draggableIdPrefix}
      data-droppable-id={droppableId}
    >
      <button type='button' onClick={() => updateField('xAxis', null, 'categoryOrder', ['Beta', 'Alpha'])}>
        Reorder categories
      </button>
    </div>
  )
}))

const data = [{ category: 'Gamma' }, { category: 'Alpha' }, { category: 'Beta' }]

const renderControls = (overrides: Partial<ComponentProps<typeof CategoryOrderControls>> = {}) => {
  const onOrderChange = vi.fn()
  const onOrderTypeChange = vi.fn()

  render(
    <CategoryOrderControls
      axisType='categorical'
      data={data}
      dataKey='category'
      onOrderChange={onOrderChange}
      onOrderTypeChange={onOrderTypeChange}
      {...overrides}
    />
  )

  return { onOrderChange, onOrderTypeChange }
}

describe('CategoryOrderControls', () => {
  it.each([
    ['a non-categorical axis', { axisType: 'date' }],
    ['a missing data key', { dataKey: undefined }],
    ['no usable category values', { data: [{ category: '' }, { category: null }] }]
  ])('stays hidden for %s', (_description, overrides) => {
    const { onOrderChange, onOrderTypeChange } = renderControls(overrides)

    expect(screen.queryByLabelText('Category Order')).toBeNull()
    expect(onOrderChange).not.toHaveBeenCalled()
    expect(onOrderTypeChange).not.toHaveBeenCalled()
  })

  it('defaults to Data order without rendering the custom sorter', () => {
    renderControls()

    expect(screen.getByLabelText('Category Order')).toHaveValue('data')
    expect(screen.queryByTestId('custom-sort-order')).toBeNull()
  })

  it('initializes Custom mode with configured values followed by newly discovered categories', () => {
    const { onOrderTypeChange } = renderControls({ categoryOrder: ['Alpha'] })

    fireEvent.change(screen.getByLabelText('Category Order'), { target: { value: 'custom' } })

    expect(onOrderTypeChange).toHaveBeenCalledWith('custom', ['Alpha', 'Gamma', 'Beta'])
  })

  it('clears the custom order when Data order is selected', () => {
    const { onOrderTypeChange } = renderControls({
      categoryOrder: ['Beta', 'Alpha', 'Gamma'],
      categoryOrderType: 'custom'
    })

    fireEvent.change(screen.getByLabelText('Category Order'), { target: { value: 'data' } })

    expect(onOrderTypeChange).toHaveBeenCalledWith('data', [])
  })

  it('adapts custom-sort updates to the explicit order command and preserves DnD identifiers', () => {
    const { onOrderChange, onOrderTypeChange } = renderControls({
      categoryOrder: ['Alpha', 'Beta'],
      categoryOrderType: 'custom'
    })

    const sorter = screen.getByTestId('custom-sort-order')
    expect(sorter).toHaveAttribute('data-droppable-id', 'category_order')
    expect(sorter).toHaveAttribute('data-draggable-id-prefix', 'categoryOrder')

    fireEvent.click(screen.getByRole('button', { name: 'Reorder categories' }))

    expect(onOrderChange).toHaveBeenCalledWith(['Beta', 'Alpha'])
    expect(onOrderTypeChange).not.toHaveBeenCalled()
  })

  it('supports the Pie editor Segment Order label', () => {
    renderControls({ label: 'Segment Order' })

    expect(screen.getByLabelText('Segment Order')).toHaveValue('data')
    expect(screen.queryByLabelText('Category Order')).toBeNull()
  })
})
