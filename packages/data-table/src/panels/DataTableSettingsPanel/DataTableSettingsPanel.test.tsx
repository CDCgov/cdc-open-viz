import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DataTableSettingsPanel from './DataTableSettingsPanel'

vi.mock('react-accessible-accordion', () => ({
  AccordionItem: ({ children }) => <div>{children}</div>,
  AccordionItemButton: ({ children }) => <button type='button'>{children}</button>,
  AccordionItemHeading: ({ children }) => <div>{children}</div>,
  AccordionItemPanel: ({ children }) => <div>{children}</div>
}))

vi.mock('@cdc/core/components/EditorPanel/DataTableEditor', () => ({
  default: ({ columns, updateField }) => (
    <div data-testid='data-table-editor' data-columns={columns.join(',')}>
      <button type='button' onClick={() => updateField('table', null, 'label', 'Updated Table')}>
        Update Table
      </button>
    </div>
  )
}))

vi.mock('@cdc/core/components/EditorPanel/Inputs', () => ({
  Select: ({ updateField }) => (
    <button type='button' onClick={() => updateField(null, null, 'locale', 'es-MX')}>
      Change Locale
    </button>
  )
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }) => <div>{children}</div>, {
    Target: ({ children }) => <>{children}</>,
    Content: ({ children }) => <>{children}</>
  })
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span {...props} />
}))

const config = { type: 'table', locale: 'en-US' } as any

describe('DataTableSettingsPanel', () => {
  it('renders populated data columns and forwards table and locale updates', () => {
    const updateDataTable = vi.fn()
    const updateConfigField = vi.fn()

    render(
      <DataTableSettingsPanel
        config={config}
        columns={['Region', 'Value']}
        updateDataTable={updateDataTable}
        updateConfigField={updateConfigField}
      />
    )

    expect(screen.getByRole('button', { name: 'Data Table' })).toBeInTheDocument()
    expect(screen.getByTestId('data-table-editor')).toHaveAttribute('data-columns', 'Region,Value')

    fireEvent.click(screen.getByRole('button', { name: 'Update Table' }))
    expect(updateDataTable).toHaveBeenCalledWith('table', null, 'label', 'Updated Table')

    fireEvent.click(screen.getByRole('button', { name: 'Change Locale' }))
    expect(updateConfigField).toHaveBeenCalledWith(null, null, 'locale', 'es-MX')
  })

  it('passes an empty column list when data has no rows', () => {
    render(
      <DataTableSettingsPanel config={config} columns={[]} updateDataTable={vi.fn()} updateConfigField={vi.fn()} />
    )

    expect(screen.getByTestId('data-table-editor')).toHaveAttribute('data-columns', '')
  })
})
