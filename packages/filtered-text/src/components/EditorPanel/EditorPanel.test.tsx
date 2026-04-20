import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../ConfigContext'
import EditorPanel from './EditorPanel'

vi.mock('@cdc/core/helpers/updateFieldFactory', () => ({
  updateFieldFactory: () => vi.fn()
}))

vi.mock('@cdc/core/hooks/useFilterManagement', () => ({
  useFilterManagement: () => ({
    addNewFilter: vi.fn(),
    removeFilter: vi.fn(),
    updateFilterProp: vi.fn(),
    getFilterColumnValues: () => []
  })
}))

vi.mock('@cdc/core/hooks/useDataColumns', () => ({
  useDataColumns: () => ['Value']
}))

vi.mock('@cdc/core/components/EditorPanel/EditorPanel', () => ({
  EditorPanel: ({ children }) => (
    <div data-testid='base-editor-panel'>
      {children({
        config: {},
        updateConfig: vi.fn(),
        displayPanel: true,
        convertStateToConfig: () => ({ type: 'filtered-text' })
      })}
    </div>
  )
}))

vi.mock('@cdc/core/components/AdvancedEditor', () => ({
  default: ({ config, convertStateToConfig }) => (
    <div data-testid='advanced-editor'>
      {config.type}:{convertStateToConfig().type}
    </div>
  )
}))

vi.mock('@cdc/core/components/EditorPanel/Inputs', () => ({
  TextField: ({ label }) => <div>{label}</div>,
  Select: ({ label }) => <div>{label}</div>
}))

vi.mock('@cdc/core/components/elements/Button', () => ({
  default: ({ children, onClick }) => (
    <button type='button' onClick={onClick}>
      {children}
    </button>
  )
}))

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: () => <span data-testid='icon' />
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => ({
  default: Object.assign(({ children }) => <div>{children}</div>, {
    Target: ({ children }) => <>{children}</>,
    Content: ({ children }) => <>{children}</>
  })
}))

vi.mock('@cdc/core/components/ui/Accordion', () => {
  const Accordion = ({ children }) => <div>{children}</div>
  Accordion.Section = ({ children, title }) => (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
  return { default: Accordion }
})

vi.mock('@cdc/core/components/EditorPanel/sections/StyleTreatmentSection', () => ({
  default: () => <div>Style Treatment</div>
}))

vi.mock('@cdc/core/components/HeaderThemeSelector', () => ({
  HeaderThemeSelector: () => <div>Header Theme</div>
}))

describe('Filtered Text EditorPanel', () => {
  it('renders advanced options below the filtered text editor sections', () => {
    const value = {
      config: {
        type: 'filtered-text',
        title: 'Filtered Text',
        titleStyle: 'large',
        locale: 'en-US',
        textColumn: 'Value',
        filters: [],
        visual: {},
        theme: 'theme-blue'
      },
      updateConfig: vi.fn(),
      loading: false,
      stateData: [{ Value: 'Example' }],
      setParentConfig: vi.fn(),
      isDashboard: false
    }

    render(
      <ConfigContext.Provider value={value}>
        <EditorPanel />
      </ConfigContext.Provider>
    )

    expect(screen.getByTestId('advanced-editor')).toHaveTextContent('filtered-text:filtered-text')
  })
})
