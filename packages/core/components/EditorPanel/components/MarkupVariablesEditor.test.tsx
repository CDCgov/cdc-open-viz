import React from 'react'
import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import MarkupVariablesEditor from './MarkupVariablesEditor'
import { MarkupVariable } from '../../../types/MarkupVariable'

vi.mock('../../ui/Icon', () => ({
  default: ({ display }: { display?: string }) => <span data-testid={`icon-${display || 'unknown'}`} />
}))

describe('MarkupVariablesEditor', () => {
  const defaultData = [
    { category: 'Up', trend: 'up' },
    { category: 'Down', trend: 'down' }
  ]

  const renderEditor = (markupVariables: MarkupVariable[], dataMetadata: Record<string, string> = {}) => {
    const onChange = vi.fn()
    const onToggleEnable = vi.fn()
    const view = render(
      <MarkupVariablesEditor
        markupVariables={markupVariables}
        data={defaultData}
        dataMetadata={dataMetadata}
        enableMarkupVariables={true}
        onChange={onChange}
        onToggleEnable={onToggleEnable}
      />
    )

    return { ...view, onChange, onToggleEnable }
  }

  const openBasicSettings = () => {
    fireEvent.click(screen.getByRole('button', { name: 'Edit' }))
    const basicSettingsButton = screen.getByRole('button', { name: 'Basic Settings' })
    fireEvent.click(basicSettingsButton)
    const basicSettingsItem = basicSettingsButton.closest('.cove-accordion__item')
    expect(basicSettingsItem).toBeTruthy()
    return basicSettingsItem as HTMLElement
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

  it('loads data-driven icon variables under the icon source and removes the dedicated accordion', () => {
    const { container } = renderEditor([
      {
        sourceType: 'column',
        name: 'Trend',
        tag: '{{trend}}',
        columnName: 'trend',
        conditions: [{ columnName: 'category', isOrIsNotEqualTo: 'is', value: 'Up' }],
        outputType: 'svg',
        svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }]
      }
    ])

    expect(screen.getByText('Data-Driven Icon:')).toBeInTheDocument()
    expect(screen.getByText('trend')).toBeInTheDocument()

    const basicSettingsItem = openBasicSettings()
    const basicSettings = within(basicSettingsItem)

    expect(screen.getByRole('combobox', { name: 'Source' })).toHaveDisplayValue('Icon')
    expect(screen.getByRole('combobox', { name: 'Icon Mode' })).toHaveDisplayValue('Data-Driven Icon')
    expect(screen.getByRole('combobox', { name: 'Data Column' })).toHaveDisplayValue('trend')
    expect(screen.getByText('up')).toBeInTheDocument()
    expect(screen.getByText('down')).toBeInTheDocument()

    const accordionButtons = Array.from(container.querySelectorAll('.cove-accordion__button')).map(button =>
      button.textContent?.trim()
    )

    expect(accordionButtons).toContain('Conditions')
    expect(accordionButtons).not.toContain('Formatting Options')
    expect(accordionButtons).not.toContain('Data-Driven Icons')

    expect(basicSettings.getByLabelText('Variable Name')).toHaveValue('Trend')
  })

  it('updates the data-driven icon name and tag when the data column changes', () => {
    const onChange = vi.fn()

    render(
      <MarkupVariablesEditor
        markupVariables={[
          {
            sourceType: 'column',
            name: 'Trend',
            tag: '{{trend}}',
            columnName: 'trend',
            conditions: [],
            outputType: 'svg',
            svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }]
          }
        ]}
        data={defaultData}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    openBasicSettings()
    fireEvent.change(screen.getByRole('combobox', { name: 'Data Column' }), { target: { value: 'category' } })

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'column',
        outputType: 'svg',
        columnName: 'category',
        name: 'icon-category',
        tag: '{{icon-category}}'
      })
    ])
  })

  it('preserves data-driven icon settings when switching to static icon mode', () => {
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
        data={defaultData}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    openBasicSettings()
    fireEvent.change(screen.getByRole('combobox', { name: 'Icon Mode' }), { target: { value: 'static' } })

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'icon',
        name: 'icon-trend-arrow-up',
        tag: '{{icon-trend-arrow-up}}',
        iconId: 'trend-arrow-up',
        columnName: 'trend',
        conditions: [{ columnName: 'category', isOrIsNotEqualTo: 'is', value: 'Up' }],
        outputType: 'svg',
        svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }]
      })
    ])
  })

  it('preserves hidden icon settings when switching from static to data-driven icon mode', () => {
    const onChange = vi.fn()

    render(
      <MarkupVariablesEditor
        markupVariables={[
          {
            sourceType: 'icon',
            name: 'Trend Up',
            tag: '{{trend-up}}',
            iconId: 'trend-arrow-up',
            columnName: 'trend',
            conditions: [{ columnName: 'category', isOrIsNotEqualTo: 'is', value: 'Up' }],
            outputType: 'value',
            svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }]
          }
        ]}
        data={defaultData}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    openBasicSettings()
    fireEvent.change(screen.getByRole('combobox', { name: 'Icon Mode' }), { target: { value: 'data-driven' } })

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'column',
        name: 'icon-trend',
        tag: '{{icon-trend}}',
        iconId: 'trend-arrow-up',
        columnName: 'trend',
        conditions: [{ columnName: 'category', isOrIsNotEqualTo: 'is', value: 'Up' }],
        outputType: 'svg',
        svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }]
      })
    ])
  })

  it('clears data-driven icon mode when switching back to the Data Column source', () => {
    const onChange = vi.fn()

    render(
      <MarkupVariablesEditor
        markupVariables={[
          {
            sourceType: 'column',
            name: 'Trend',
            tag: '{{trend}}',
            columnName: 'trend',
            conditions: [],
            outputType: 'svg',
            svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }]
          }
        ]}
        data={defaultData}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    openBasicSettings()
    fireEvent.change(screen.getByRole('combobox', { name: 'Source' }), { target: { value: 'column' } })

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'column',
        outputType: 'value',
        columnName: 'trend',
        svgMappings: [{ sourceValue: 'up', svgId: 'trend-arrow-up' }]
      })
    ])
  })

  it('renders static icon fields in the new Basic Settings order and resets name and tag when the icon changes', () => {
    const { onChange } = renderEditor([
      {
        sourceType: 'icon',
        name: 'trend-arrow-up',
        tag: '{{trend-arrow-up}}',
        iconId: 'trend-arrow-up',
        conditions: []
      }
    ])

    const basicSettingsItem = openBasicSettings()
    const labels = Array.from(basicSettingsItem.querySelectorAll('.edit-label')).map(label =>
      label.textContent?.replace(/\s+/g, ' ').trim()
    )

    expect(labels).toEqual(['Source', 'Icon Mode', 'Icon', 'Variable Name', 'Tag (auto-generated)'])
    expect(within(basicSettingsItem).queryByRole('spinbutton', { name: 'Icon Scale' })).not.toBeInTheDocument()

    const iconButton = basicSettingsItem.querySelector('button[aria-haspopup="listbox"]') as HTMLButtonElement
    expect(iconButton).toBeTruthy()
    fireEvent.click(iconButton)
    fireEvent.click(screen.getByRole('option', { name: /External link/ }))

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'icon',
        iconId: 'link-external',
        name: 'icon-link-external',
        tag: '{{icon-link-external}}'
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
        data={defaultData}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    openBasicSettings()
    fireEvent.change(screen.getByRole('combobox', { name: 'Source' }), { target: { value: 'icon' } })

    expect(onChange).toHaveBeenLastCalledWith([
      expect.objectContaining({
        sourceType: 'icon',
        name: 'icon-trend-arrow-up',
        tag: '{{icon-trend-arrow-up}}'
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
        data={defaultData}
        enableMarkupVariables={true}
        onChange={onChange}
      />
    )

    openBasicSettings()
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
