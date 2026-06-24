import { describe, expect, it } from 'vitest'
import { getYAxisDomainData, getYAxisFilterDomainBehavior } from '../getYAxisDomainData'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

describe('getYAxisDomainData', () => {
  const filteredRows = [{ value: 3 }]
  const tableRows = [{ value: 3 }, { value: 9 }]
  const postExclusionRows = [{ value: 3 }, { value: 12 }]

  const buildConfig = ({
    brushActive = false,
    brushDynamicYAxis = false,
    filterDomainBehavior
  }: {
    brushActive?: boolean
    brushDynamicYAxis?: boolean
    filterDomainBehavior?: 'dynamic' | 'stable'
  }) => {
    const baseConfig = createMockConfig()
    return createMockConfig({
      xAxis: {
        ...baseConfig.xAxis,
        brushActive,
        brushDynamicYAxis
      },
      yAxis: {
        ...baseConfig.yAxis,
        filterDomainBehavior
      }
    })
  }

  it('defaults omitted filterDomainBehavior to dynamic', () => {
    const config = createMockConfig()

    expect(getYAxisFilterDomainBehavior(config)).toBe('dynamic')
  })

  it.each([
    {
      name: 'brush off with dynamic filter domains',
      configOptions: { brushActive: false, filterDomainBehavior: 'dynamic' as const },
      expectedRows: filteredRows
    },
    {
      name: 'brush off with stable filter domains',
      configOptions: { brushActive: false, filterDomainBehavior: 'stable' as const },
      expectedRows: postExclusionRows
    },
    {
      name: 'dynamic brush Y-axis with dynamic filter domains',
      configOptions: { brushActive: true, brushDynamicYAxis: true, filterDomainBehavior: 'dynamic' as const },
      expectedRows: filteredRows
    },
    {
      name: 'dynamic brush Y-axis with stable filter domains',
      configOptions: { brushActive: true, brushDynamicYAxis: true, filterDomainBehavior: 'stable' as const },
      expectedRows: filteredRows
    },
    {
      name: 'non-dynamic brush Y-axis with dynamic filter domains',
      configOptions: { brushActive: true, brushDynamicYAxis: false, filterDomainBehavior: 'dynamic' as const },
      expectedRows: tableRows
    },
    {
      name: 'non-dynamic brush Y-axis with stable filter domains',
      configOptions: { brushActive: true, brushDynamicYAxis: false, filterDomainBehavior: 'stable' as const },
      expectedRows: postExclusionRows
    }
  ])('selects the expected domain data for $name', ({ configOptions, expectedRows }) => {
    expect(
      getYAxisDomainData({
        config: buildConfig(configOptions),
        data: filteredRows,
        tableData: tableRows,
        fullEligibleDomainData: postExclusionRows
      })
    ).toBe(expectedRows)
  })

  it('falls back to rendered data for non-dynamic brush domains when table data is unavailable', () => {
    expect(
      getYAxisDomainData({
        config: buildConfig({
          brushActive: true,
          brushDynamicYAxis: false,
          filterDomainBehavior: 'dynamic'
        }),
        data: filteredRows
      })
    ).toBe(filteredRows)
  })

  it('falls back to rendered data for stable filter domains when full eligible data is unavailable', () => {
    expect(
      getYAxisDomainData({
        config: buildConfig({
          filterDomainBehavior: 'stable'
        }),
        data: filteredRows,
        tableData: tableRows
      })
    ).toBe(filteredRows)
  })

  it('falls back to table data for non-dynamic brush stable domains when full eligible data is unavailable', () => {
    expect(
      getYAxisDomainData({
        config: buildConfig({
          brushActive: true,
          brushDynamicYAxis: false,
          filterDomainBehavior: 'stable'
        }),
        data: filteredRows,
        tableData: tableRows
      })
    ).toBe(tableRows)
  })
})
