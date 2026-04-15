import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import AdvancedEditor from './AdvancedEditor'

vi.mock('../../assets/map-folded.svg', () => ({
  default: () => <span data-testid='map-icon' />
}))

vi.mock('../../assets/icon-chart-bar.svg', () => ({
  default: () => <span data-testid='chart-icon' />
}))

vi.mock('../../assets/icon-code.svg', () => ({
  default: () => <span data-testid='markup-icon' />
}))

vi.mock('json-edit-react', () => ({
  JsonEditor: () => <div data-testid='json-editor' />,
  FilterFunction: undefined,
  UpdateFunction: undefined
}))

vi.mock('../ui/Tooltip', () => ({
  default: ({ children }) => <div>{children}</div>
}))

vi.mock('./EmbedEditor', () => ({
  default: () => <div data-testid='embed-editor' />
}))

vi.mock('../elements/Button', () => ({
  default: ({ children, ...props }) => <button {...props}>{children}</button>
}))

describe('AdvancedEditor', () => {
  const baseProps = {
    loadConfig: vi.fn(),
    convertStateToConfig: vi.fn(() => ({ type: 'chart' })),
    stripConfig: vi.fn(config => config),
    onExpandCollapse: vi.fn()
  }

  it('renders the correct help label for data tables', () => {
    render(<AdvancedEditor {...baseProps} config={{ type: 'table' }} />)

    expect(screen.getByText('Get Help with Data Table')).toBeInTheDocument()
  })

  it('falls back to a generic help label for unknown visualization types', () => {
    render(<AdvancedEditor {...baseProps} config={{ type: 'unknown-viz' }} />)

    expect(screen.getByText('Get Help with Visualization')).toBeInTheDocument()
    expect(screen.getByTestId('embed-editor')).toBeInTheDocument()
  })
})
