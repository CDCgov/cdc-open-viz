import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
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
  CheckBox: ({ label, fieldName, value, section = null, subsection = null, updateField }) => (
    <label>
      <input
        type='checkbox'
        aria-label={label}
        name={fieldName}
        checked={Boolean(value)}
        onChange={() => updateField(section, subsection, fieldName, !value)}
      />
      {label}
    </label>
  ),
  TextField: ({ label, value = '', fieldName, section = null, subsection = null, type = 'text', updateField }) => (
    <label>
      {label}
      {type === 'textarea' ? (
        <textarea aria-label={label} name={fieldName} value={value} readOnly />
      ) : (
        <input
          aria-label={label}
          name={fieldName}
          type={type}
          value={value}
          onChange={event => updateField?.(section, subsection, fieldName, event.target.value)}
        />
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
      search: false,
      searchPlaceholder: '',
      download: false,
      showDownloadUrl: false,
      downloadUrlLabel: '',
      showDownloadImgButton: false,
      defaultSort: {}
    }
  }

  const renderEditor = (config, updateField = vi.fn(), props = {}) => {
    render(
      <DataTableEditor
        config={config}
        columns={['category', 'value']}
        updateField={updateField}
        isDashboard={false}
        {...props}
      />
    )
    return updateField
  }

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

  it('shows the dashboard dataset link checkbox only when the table dataset has dataUrl', () => {
    renderEditor(
      {
        ...baseConfig,
        type: 'table',
        dataKey: 'datasetA'
      },
      vi.fn(),
      {
        isDashboard: true,
        datasets: {
          datasetA: {
            dataUrl: '/wcms/vizdata/table-data.json'
          }
        }
      }
    )

    expect(screen.getByLabelText('Show Dataset Link')).toBeInTheDocument()
  })

  it('hides the dashboard dataset link checkbox when the table dataset has no dataUrl', () => {
    renderEditor(
      {
        ...baseConfig,
        type: 'table',
        dataKey: 'datasetA'
      },
      vi.fn(),
      {
        isDashboard: true,
        datasets: {
          datasetA: {
            data: [{ category: 'A', value: 1 }]
          }
        }
      }
    )

    expect(screen.queryByLabelText('Show Dataset Link')).not.toBeInTheDocument()
  })

  it('wires the dashboard dataset link checkbox to table.showDatasetLink', () => {
    const updateField = renderEditor(
      {
        ...baseConfig,
        type: 'table',
        dataKey: 'datasetA',
        table: {
          ...baseConfig.table,
          showDatasetLink: false
        }
      },
      vi.fn(),
      {
        isDashboard: true,
        datasets: {
          datasetA: {
            dataUrl: '/wcms/vizdata/table-data.json'
          }
        }
      }
    )

    fireEvent.click(screen.getByLabelText('Show Dataset Link'))

    expect(updateField).toHaveBeenCalledWith('table', null, 'showDatasetLink', true)
  })

  it('shows the dataset link text field for dashboard tables when the dataset link is enabled', () => {
    renderEditor(
      {
        ...baseConfig,
        type: 'table',
        dataKey: 'datasetA',
        table: {
          ...baseConfig.table,
          showDatasetLink: true
        }
      },
      vi.fn(),
      {
        isDashboard: true,
        datasets: {
          datasetA: {
            dataUrl: '/wcms/vizdata/table-data.json'
          }
        }
      }
    )

    expect(screen.getByLabelText('Dataset Link Text')).toBeInTheDocument()
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

  it('shows the enable search checkbox', () => {
    renderEditor(baseConfig)

    expect(screen.getByLabelText('Enable Search')).toBeInTheDocument()
  })

  it('wires the enable search checkbox to table.search', () => {
    const updateField = renderEditor(baseConfig)

    fireEvent.click(screen.getByLabelText('Enable Search'))

    expect(updateField).toHaveBeenCalledWith('table', null, 'search', true)
  })

  it('shows the search placeholder field when search is enabled', () => {
    renderEditor({
      ...baseConfig,
      table: {
        ...baseConfig.table,
        search: true,
        searchPlaceholder: 'Search by county or site ID'
      }
    })

    expect(screen.getByLabelText('Search Placeholder Text')).toHaveValue('Search by county or site ID')
  })

  it('wires the search placeholder field to table.searchPlaceholder', () => {
    const updateField = renderEditor({
      ...baseConfig,
      table: {
        ...baseConfig.table,
        search: true
      }
    })

    fireEvent.change(screen.getByLabelText('Search Placeholder Text'), { target: { value: 'Search table' } })

    expect(updateField).toHaveBeenCalledWith('table', null, 'searchPlaceholder', 'Search table')
  })

  it('hides the enable search checkbox for box plots', () => {
    renderEditor({
      ...baseConfig,
      visualizationType: 'Box Plot'
    })

    expect(screen.queryByLabelText('Enable Search')).not.toBeInTheDocument()
  })
})
