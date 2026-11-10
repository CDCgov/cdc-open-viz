import { fireEvent, render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it, vi } from 'vitest'
import { createMockConfig } from '../../../../LinearChart/tests/mockConfigContext'
import CategoryAxisPanel from './CategoryAxisPanel'
import type { CategoryAxisPanelContextValue } from './CategoryAxisPanelContext'

vi.mock('@cdc/core/components/ui/Icon', () => ({ default: () => null }))
vi.mock('../../../../../images/warning.svg', () => ({ default: () => <svg /> }))

describe('CategoryAxisPanel integration', () => {
  it('renders the real category-axis body for a supported Bar chart', () => {
    const config = createMockConfig({
      visualizationType: 'Bar',
      xAxis: { ...createMockConfig().xAxis, dataKey: 'category', type: 'categorical' },
      exclusions: { active: false, keys: [], dateStart: '', dateEnd: '' },
      forestPlot: { type: '' } as any
    })
    const falsePermission = () => false
    const value = {
      config,
      isBarRace: false,
      excludedData: [],
      lineOptions: [],
      displayViewportOverrides: false,
      highlightedBarValues: [],
      highlightedSeriesOptions: [],
      updateConfig: vi.fn(),
      updateField: vi.fn(),
      updateFieldDeprecated: vi.fn(),
      getColumns: () => ['category'],
      getAutoDetectedXAxisDateParseFormat: () => undefined,
      updateCategoryOrder: vi.fn(),
      updateCategoryOrderType: vi.fn(),
      setCategoryAxis: () => 'category',
      getAvailableExclusionValues: () => [],
      addNewExclusion: vi.fn(),
      removeExclusion: vi.fn(),
      setDisplayViewportOverrides: vi.fn(),
      updateViewportOverrides: vi.fn(),
      visHasBrushChart: falsePermission,
      visSupportsDateCategoryAxisLabel: falsePermission,
      visSupportsDateCategoryAxisLine: falsePermission,
      visSupportsDateCategoryAxisMax: falsePermission,
      visSupportsDateCategoryAxisMin: falsePermission,
      visSupportsDateCategoryAxisPadding: falsePermission,
      visSupportsDateCategoryAxisTicks: falsePermission,
      visSupportsDateCategoryHeight: falsePermission,
      visSupportsDateCategoryNumTicks: falsePermission,
      visSupportsDateCategoryTickRotation: falsePermission,
      visSupportsResponsiveTicks: falsePermission,
      visHasAnchors: falsePermission,
      handleAddNewHighlightedBar: vi.fn(),
      handleHighlightedBarLegendLabel: vi.fn(),
      handleUpdateHighlightedBar: vi.fn(),
      handleRemoveHighlightedBar: vi.fn(),
      handleUpdateHighlightedBorderWidth: vi.fn(),
      handleUpdateHighlightedBarColor: vi.fn()
    } satisfies CategoryAxisPanelContextValue

    render(
      <Accordion allowZeroExpanded>
        <CategoryAxisPanel config={config} value={value} />
      </Accordion>
    )
    fireEvent.click(screen.getByRole('button', { name: 'Date/Category Axis' }))

    expect(screen.getByLabelText('Data Scaling Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Data Key')).toHaveValue('category')
  })
})
