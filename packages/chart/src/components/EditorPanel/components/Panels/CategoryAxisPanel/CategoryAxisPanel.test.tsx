import React from 'react'
import { Accordion } from 'react-accessible-accordion'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
import CategoryAxisPanel from './CategoryAxisPanel'
import { type CategoryAxisPanelContextValue, useCategoryAxisPanelContext } from './CategoryAxisPanelContext'

vi.mock('../../../../../images/warning.svg', () => ({
  default: props => <svg data-testid='warning-icon' {...props} />
}))

vi.mock('./CategoryAxisPanelBody', () => {
  const MockCategoryAxisPanelBody = () => {
    const { config } = useCategoryAxisPanelContext()
    return <div data-testid='category-axis-body'>{config.visualizationType}</div>
  }
  return { default: MockCategoryAxisPanelBody }
})

const renderPanel = (visualizationType: string, dataKey = 'category') => {
  const config = createMockConfig({
    visualizationType,
    xAxis: { dataKey } as any
  })
  const value = { config } as CategoryAxisPanelContextValue

  return render(
    <Accordion allowZeroExpanded>
      <CategoryAxisPanel config={config} value={value} />
    </Accordion>
  )
}

describe('CategoryAxisPanel', () => {
  it('preserves the standard heading, required metadata, and dedicated body context', () => {
    renderPanel('Bar')

    expect(screen.getByRole('button', { name: 'Date/Category Axis' })).toHaveAttribute(
      'data-required-field-section',
      'date-category-axis'
    )
    expect(screen.getByTestId('category-axis-body')).toHaveTextContent('Bar')
    expect(screen.queryByTestId('warning-icon')).not.toBeInTheDocument()
  })

  it('preserves the Pie heading and missing-segments warning', () => {
    renderPanel('Pie', '')

    expect(screen.getByRole('button', { name: 'Segments' })).toHaveAttribute(
      'data-required-field-section',
      'pie-segments'
    )
    expect(screen.getByTestId('warning-icon')).toBeInTheDocument()
  })
})
