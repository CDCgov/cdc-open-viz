import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DataTableEditor from './DataTableEditor'

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: ({ children }) => <div>{children}</div>
}))

vi.mock('../ui/Icon', () => ({
  default: () => <span data-testid='icon' />
}))

vi.mock('../MultiSelect', () => ({
  default: () => <div data-testid='multi-select' />
}))

vi.mock('./CustomSortOrder', () => ({
  default: () => <div data-testid='custom-sort-order' />
}))

vi.mock('./Inputs', () => ({
  CheckBox: ({ label, fieldName, value }) => (
    <label>
      <input type='checkbox' aria-label={label} name={fieldName} checked={Boolean(value)} readOnly />
      {label}
    </label>
  ),
  TextField: ({ label, value = '', fieldName, type = 'text' }) => (
    <label>
      {label}
      {type === 'textarea' ? (
        <textarea aria-label={label} name={fieldName} value={value} readOnly />
      ) : (
        <input aria-label={label} name={fieldName} type={type} value={value} readOnly />
      )}
    </label>
  ),
  Select: ({ label, value = '', fieldName, options = [] }) => (
    <label>
      {label}
      <select aria-label={label} name={fieldName} value={value} onChange={() => undefined}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}))

describe('DataTableEditor', () => {
  const baseConfig = {
    type: 'chart',
    visualizationType: 'Bar Chart',
    data: [{ category: 'A', value: 1 }],
    columns: {
      category: { name: 'category', dataTable: true },
      value: { name: 'value', dataTable: true }
    },
    table: {
      label: 'Data Table',
      show: true,
      showVertical: true,
      indexLabel: '',
      caption: '',
      limitHeight: false,
      collapsible: true,
      expanded: false,
      download: false,
      showDownloadUrl: false,
      downloadUrlLabel: '',
      showDownloadImgButton: false,
      defaultSort: {}
    }
  }

  const renderEditor = config =>
    render(<DataTableEditor config={config} columns={['category', 'value']} updateField={vi.fn()} isDashboard={false} />)

  it('shows the dataset link checkbox for url-backed standalone charts', () => {
    renderEditor({
      ...baseConfig,
      dataFileSourceType: 'url',
      dataFileName: '/wcms/vizdata/chart-data.json'
    })

    expect(screen.getByLabelText('Show URL to Automatically Updated Data')).toBeInTheDocument()
  })

  it('shows the dataset link checkbox for standalone tables with dataUrl', () => {
    renderEditor({
      ...baseConfig,
      type: 'table',
      dataUrl: '/wcms/vizdata/table-data.json'
    })

    expect(screen.getByLabelText('Show URL to Automatically Updated Data')).toBeInTheDocument()
  })

  it('hides the dataset link checkbox for file-backed standalone charts', () => {
    renderEditor({
      ...baseConfig,
      dataFileSourceType: 'file',
      dataFileName: 'chart-data.csv'
    })

    expect(screen.queryByLabelText('Show URL to Automatically Updated Data')).not.toBeInTheDocument()
  })

  it('shows the dataset link text field when the dataset link is enabled', () => {
    renderEditor({
      ...baseConfig,
      table: {
        ...baseConfig.table,
        showDownloadUrl: true
      },
      dataFileSourceType: 'url',
      dataFileName: '/wcms/vizdata/chart-data.json'
    })

    expect(screen.getByLabelText('Dataset Link Text')).toBeInTheDocument()
  })
})
