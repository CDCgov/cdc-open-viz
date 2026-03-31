import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import MarkupVariablesEditor from './MarkupVariablesEditor'
import { MarkupVariable } from '../../../types/MarkupVariable'

vi.mock('../../ui/Icon', () => ({
  default: ({ display }: { display?: string }) => <span data-testid={`icon-${display || 'unknown'}`} />
}))

describe('MarkupVariablesEditor', () => {
  const renderEditor = (markupVariables: MarkupVariable[], dataMetadata: Record<string, string> = {}) => {
    const onChange = vi.fn()
    const onToggleEnable = vi.fn()
    const view = render(
      <MarkupVariablesEditor
        markupVariables={markupVariables}
        data={[{ category: 'Up', trend: 'up' }]}
        dataMetadata={dataMetadata}
        enableMarkupVariables={true}
        onChange={onChange}
        onToggleEnable={onToggleEnable}
      />
    )

    return { ...view, onChange, onToggleEnable }
  }

  it('defaults new variables to the Data Column source', () => {
    const { onChange } = renderEditor([])

    fireEvent.click(screen.getByRole('button', { name: /add variable/i }))

    expect(onChange).toHaveBeenCalledWith([
      expect.objectContaining({
        sourceType: 'column',
        outputType: 'value',
        columnName: ''
      })
    ])
  })

  it('keeps the metadata source selectable and shows the empty state when no metadata exists', () => {
    const { container } = renderEditor([
      {
        sourceType: 'metadata',
        name: '',
        tag: '',
        metadataKey: '',
        conditions: []
      }
    ])

    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))
    fireEvent.click(screen.getByRole('button', { name: 'Basic Settings' }))

    expect(screen.getByRole('combobox', { name: 'Source' })).toHaveDisplayValue('Data File Metadata')
    expect(screen.getByText('This config does not currently contain any data file metadata.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn how to add metadata' })).toBeInTheDocument()
    expect(screen.queryByLabelText('Variable Name')).not.toBeInTheDocument()
    expect(Array.from(container.querySelectorAll('.cove-accordion__button')).map(button => button.textContent?.trim())).not.toContain(
      'Formatting Options'
    )
  })

  it('shows Data-Driven Icons last for column variables and hides it for icon variables', () => {
    const columnView = renderEditor([
      {
        sourceType: 'column',
        name: 'Trend',
        tag: '{{trend}}',
        columnName: 'trend',
        conditions: []
      }
    ])

    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))

    let accordionButtons = Array.from(columnView.container.querySelectorAll('.cove-accordion__button')).map(button =>
      button.textContent?.trim()
    )

    expect(accordionButtons[accordionButtons.length - 1]).toBe('Data-Driven Icons')
    expect(accordionButtons).toContain('Conditions')

    columnView.unmount()

    const iconView = renderEditor([
      {
        sourceType: 'icon',
        name: 'Trend up',
        tag: '{{trend-arrow-up}}',
        iconId: 'trend-arrow-up',
        conditions: []
      }
    ])

    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))

    accordionButtons = Array.from(iconView.container.querySelectorAll('.cove-accordion__button')).map(button =>
      button.textContent?.trim()
    )

    expect(accordionButtons).not.toContain('Conditions')
    expect(accordionButtons).not.toContain('Data-Driven Icons')
  })

  it('preserves column-specific settings when switching to the icon source', () => {
    const onChange = vi.fn()

    render(
      <MarkupVariablesEditor
        markupVariables={[
          {
            sourceType: 'column',
            name: 'Trend',
            tag: '{{trend}}',
            columnName: 'trend',
            conditions: [{ columnName: 'category', isOrIsNotEqualTo: 'is', value: 'Up' }],
            outputType: 'svg',
            svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }]
          }
        ]}
        data={[{ category: 'Up', trend: 'up' }]}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))
    fireEvent.click(screen.getByRole('button', { name: 'Basic Settings' }))
    fireEvent.change(screen.getByRole('combobox', { name: 'Source' }), { target: { value: 'icon' } })

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'icon',
        columnName: 'trend',
        conditions: [{ columnName: 'category', isOrIsNotEqualTo: 'is', value: 'Up' }],
        outputType: 'svg',
        svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }],
        iconId: 'trend-arrow-up'
      })
    ])
  })

  it('uses the tag slug as the icon variable name', () => {
    const onChange = vi.fn()

    render(
      <MarkupVariablesEditor
        markupVariables={[
          {
            sourceType: 'column',
            name: 'Trend',
            tag: '{{trend}}',
            columnName: 'trend',
            conditions: []
          }
        ]}
        data={[{ category: 'Up', trend: 'up' }]}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))
    fireEvent.click(screen.getByRole('button', { name: 'Basic Settings' }))
    fireEvent.change(screen.getByRole('combobox', { name: 'Source' }), { target: { value: 'icon' } })

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'icon',
        name: 'trend-arrow-up',
        tag: '{{trend-arrow-up}}'
      })
    ])
  })

  it('lets icon variable names be edited and keeps the tag in sync', () => {
    vi.useFakeTimers()
    const onChange = vi.fn()

    render(
      <MarkupVariablesEditor
        markupVariables={[
          {
            sourceType: 'icon',
            name: 'trend-arrow-up',
            tag: '{{trend-arrow-up}}',
            iconId: 'trend-arrow-up',
            conditions: []
          }
        ]}
        data={[{ category: 'Up', trend: 'up' }]}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))
    fireEvent.click(screen.getByRole('button', { name: 'Basic Settings' }))
    fireEvent.change(screen.getByLabelText('Variable Name'), { target: { value: 'trend-arrow-up-large' } })
    act(() => {
      vi.advanceTimersByTime(600)
    })

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'icon',
        name: 'trend-arrow-up-large',
        tag: '{{trend-arrow-up-large}}'
      })
    ])

    vi.useRealTimers()
  })
})
