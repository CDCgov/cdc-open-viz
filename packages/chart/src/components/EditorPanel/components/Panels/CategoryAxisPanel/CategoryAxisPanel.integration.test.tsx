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

  it('keeps omitted date-format fields controlled without authoring config defaults', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    const baseConfig = createMockConfig()
    const config = createMockConfig({
      visualizationType: 'Spark Line',
      xAxis: {
        ...baseConfig.xAxis,
        dataKey: 'Time Period',
        type: 'date'
      } as any,
      table: {} as any,
      tooltips: { ...baseConfig.tooltips },
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
      getColumns: () => ['Time Period'],
      getAutoDetectedXAxisDateParseFormat: () => undefined,
      updateCategoryOrder: vi.fn(),
      updateCategoryOrderType: vi.fn(),
      setCategoryAxis: () => 'Time Period',
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

    const parseFormat = screen.getByLabelText('Date Parse Format')
    const axisDisplayFormat = screen.getByLabelText('AXIS DATE DISPLAY FORMAT')
    const tableDisplayFormat = screen.getByLabelText('DATA TABLE DATE DISPLAY FORMAT')
    const hoverDisplayFormat = screen.getByLabelText('HOVER DATE DISPLAY FORMAT')
    expect(parseFormat).toHaveValue('')
    expect(axisDisplayFormat).toHaveValue('')
    expect(tableDisplayFormat).toHaveValue('')
    expect(hoverDisplayFormat).toHaveValue('')

    fireEvent.change(parseFormat, { target: { value: '%m/%d/%Y' } })
    fireEvent.change(axisDisplayFormat, { target: { value: '%m/%d/%Y' } })
    fireEvent.change(tableDisplayFormat, { target: { value: '%Y-%m-%d' } })
    fireEvent.change(hoverDisplayFormat, { target: { value: '%b %Y' } })

    expect(parseFormat).toHaveValue('%m/%d/%Y')
    expect(axisDisplayFormat).toHaveValue('%m/%d/%Y')
    expect(tableDisplayFormat).toHaveValue('%Y-%m-%d')
    expect(hoverDisplayFormat).toHaveValue('%b %Y')
    expect(consoleError.mock.calls.flat().join(' ')).not.toContain('uncontrolled input to be controlled')
    expect(config.xAxis).not.toHaveProperty('dateParseFormat')
    expect(config.xAxis).not.toHaveProperty('dateDisplayFormat')
    expect(config.table).not.toHaveProperty('dateDisplayFormat')
    expect(config.tooltips).not.toHaveProperty('dateDisplayFormat')
    consoleError.mockRestore()
  })
})
