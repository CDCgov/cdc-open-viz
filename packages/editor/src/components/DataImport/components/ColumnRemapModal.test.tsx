import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import ColumnRemapModal from './ColumnRemapModal'

const baseProps = {
  isShown: true,
  status: 'mapping' as const,
  rawRequiredColumns: ['oldCategory', 'oldValue'],
  rawAvailableColumns: ['newCategory', 'newValue'],
  rawMapping: {},
  transformedRequiredColumns: [],
  transformedAvailableColumns: [],
  transformedMapping: {},
  replacementCount: undefined,
  canApply: false,
  conflicts: [],
  onRawMappingChange: vi.fn(),
  onTransformedMappingChange: vi.fn(),
  onApply: vi.fn(),
  onCancel: vi.fn()
}

describe('ColumnRemapModal', () => {
  beforeEach(() => vi.clearAllMocks())

  it('requires complete mappings and removes a target selected by another source', () => {
    const { rerender } = render(<ColumnRemapModal {...baseProps} />)
    expect(screen.getByRole('button', { name: 'Apply & replace data' })).toBeDisabled()
    expect(screen.getByText('Select a replacement for every removed column to enable Apply.')).toBeInTheDocument()

    rerender(<ColumnRemapModal {...baseProps} rawMapping={{ oldCategory: 'newCategory' }} />)
    const valueOptions = Array.from(
      (screen.getByLabelText('Replacement for oldValue') as HTMLSelectElement).options
    ).map(option => option.value)
    expect(valueOptions).not.toContain('newCategory')

    rerender(
      <ColumnRemapModal
        {...baseProps}
        rawMapping={{ oldCategory: 'newCategory', oldValue: 'newValue' }}
        replacementCount={5}
        canApply
      />
    )
    expect(screen.queryByRole('button', { name: 'Continue' })).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Apply & replace data' }))
    expect(baseProps.onApply).toHaveBeenCalledOnce()
  })

  it('does not offer reserved names as replacement targets', () => {
    render(
      <ColumnRemapModal {...baseProps} rawAvailableColumns={['newCategory', '__proto__', 'prototype', 'constructor']} />
    )
    const options = Array.from((screen.getByLabelText('Replacement for oldCategory') as HTMLSelectElement).options).map(
      option => option.value
    )
    expect(options).toEqual(['', 'newCategory'])
  })

  it('shows raw and generated mappings together with the exact replacement count', () => {
    render(
      <ColumnRemapModal
        {...baseProps}
        rawMapping={{ oldCategory: 'newCategory' }}
        transformedRequiredColumns={['Cases']}
        transformedAvailableColumns={['Count']}
        transformedMapping={{ Cases: 'Count' }}
        replacementCount={7}
        canApply
      />
    )
    expect(screen.getByRole('heading', { name: 'Data columns' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Generated columns' })).toBeInTheDocument()
    expect(screen.getByLabelText('Replacement for oldCategory')).toHaveValue('newCategory')
    expect(screen.getByLabelText('Replacement for Cases')).toHaveValue('Count')
    expect(screen.getByText('7')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Apply & replace data' }))
    expect(baseProps.onApply).toHaveBeenCalledOnce()
  })

  it('shows a specific blocking conflict and allows cancellation', () => {
    render(
      <ColumnRemapModal
        {...baseProps}
        status='blocked'
        conflicts={[
          {
            kind: 'literal-value-overlap',
            column: 'category',
            message:
              '"category" appears both as a column name and as a value in the current data, so COVE cannot safely distinguish every use. Keep "category" as the column name, or first replace the data with a same-schema version that changes the literal value, then try again.'
          }
        ]}
      />
    )
    expect(screen.getByText(/first replace the data with a same-schema version/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Apply/ })).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(baseProps.onCancel).toHaveBeenCalledOnce()
  })
})
