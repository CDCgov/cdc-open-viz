import { describe, expect, it } from 'vitest'
import { getChartCellValue } from '../getChartCellValue'

const makeBarConfig = (columnOverrides: Record<string, any> = {}) =>
  ({
    type: 'chart',
    visualizationType: 'Bar',
    general: {},
    columns: {
      category: { name: 'category', label: 'Category', dataTable: true },
      cases: { name: 'cases', label: 'Cases', dataTable: true, ...columnOverrides.cases },
      rate: { name: 'rate', label: 'Rate', dataTable: true, ...columnOverrides.rate }
    },
    xAxis: { dataKey: 'category', type: 'categorical' },
    yAxis: {},
    dataFormat: {
      abbreviated: false,
      bottomAbbreviated: false,
      bottomPrefix: '',
      bottomRoundTo: 0,
      bottomSuffix: '',
      bottomCommas: false,
      commas: true,
      prefix: '',
      preserveOriginalDecimals: false,
      rightPrefix: '',
      rightRoundTo: 0,
      rightSuffix: '',
      roundTo: 1,
      suffix: ''
    },
    table: {},
    series: [{ dataKey: 'cases', type: 'Bar', axis: 'Left' }],
    runtime: { series: [{ dataKey: 'cases', type: 'Bar', axis: 'Left' }] },
    preliminaryData: []
  }) as any

const makePieConfig = (columnOverrides: Record<string, any> = {}) =>
  ({
    type: 'chart',
    visualizationType: 'Pie',
    general: {},
    columns: {
      value: { name: 'value', label: 'Value', dataTable: true, ...columnOverrides.value },
      population: { name: 'population', label: 'Population', dataTable: true, ...columnOverrides.population }
    },
    xAxis: { dataKey: 'category', type: 'categorical' },
    yAxis: { dataKey: 'value' },
    dataFormat: {
      abbreviated: false,
      bottomAbbreviated: false,
      bottomPrefix: '',
      bottomRoundTo: 0,
      bottomSuffix: '',
      bottomCommas: false,
      commas: true,
      prefix: '',
      preserveOriginalDecimals: false,
      rightPrefix: '',
      rightRoundTo: 0,
      rightSuffix: '',
      roundTo: 0,
      showPiePercent: false,
      suffix: ''
    },
    table: {},
    series: [],
    runtime: { series: [] },
    preliminaryData: []
  }) as any

describe('getChartCellValue', () => {
  it('uses runtime x-axis date settings when config.xAxis is stale', () => {
    const config = {
      xAxis: {
        type: 'categorical',
        dataKey: 'Timestamp',
        dateParseFormat: '%m/%d/%Y',
        dateDisplayFormat: '%Y'
      },
      runtime: {
        xAxis: {
          type: 'date-time',
          dataKey: 'Timestamp',
          dateParseFormat: '%m/%d/%Y',
          dateDisplayFormat: '%Y'
        }
      },
      table: {
        dateDisplayFormat: '%Y'
      },
      general: {
        showMissingDataLabel: true
      },
      visualizationType: 'Bump Chart',
      locale: 'en-US',
      dataFormat: {}
    }

    const runtimeData = [{ Timestamp: '1/1/2014' }]

    expect(getChartCellValue('0', 'Timestamp', config as any, runtimeData as any, new Map())).toBe('2014')
  })

  it('preserves HeatMap series column prefix and suffix formatting', () => {
    const config = {
      type: 'chart',
      visualizationType: 'HeatMap',
      general: {
        showMissingDataLabel: true
      },
      columns: {
        communityType: { name: 'communityType', label: 'Community Type', dataTable: true },
        Atlanta: {
          name: 'Atlanta',
          label: 'ATL',
          dataTable: true,
          prefix: '$',
          suffix: ' yrs',
          roundToPlace: 0,
          commas: false
        }
      },
      xAxis: { dataKey: 'communityType', type: 'categorical' },
      yAxis: {},
      dataFormat: {
        abbreviated: false,
        bottomAbbreviated: false,
        bottomPrefix: '',
        bottomRoundTo: 0,
        bottomSuffix: '',
        bottomCommas: false,
        commas: false,
        prefix: '',
        preserveOriginalDecimals: false,
        rightPrefix: '',
        rightRoundTo: 0,
        rightSuffix: '',
        roundTo: 0,
        suffix: ''
      },
      table: {},
      runtime: { series: [{ dataKey: 'Atlanta' }] },
      preliminaryData: []
    }
    const runtimeData = [{ communityType: 'Urban Core', Atlanta: 34 }]

    expect(getChartCellValue('0', 'Atlanta', config as any, runtimeData as any, new Map())).toBe('$34 yrs')
  })

  it('formats keyed column configs when the optional column name is omitted', () => {
    const config = {
      type: 'chart',
      visualizationType: 'HeatMap',
      general: {},
      columns: {
        communityType: { name: 'communityType', label: 'Community Type', dataTable: true },
        population: {
          label: 'Population',
          dataTable: true,
          prefix: '$',
          suffix: ' residents',
          roundToPlace: 0,
          commas: true
        }
      },
      xAxis: { dataKey: 'communityType', type: 'categorical' },
      yAxis: {},
      dataFormat: {
        abbreviated: false,
        bottomAbbreviated: false,
        bottomPrefix: '',
        bottomRoundTo: 0,
        bottomSuffix: '',
        bottomCommas: false,
        commas: false,
        prefix: '',
        preserveOriginalDecimals: false,
        rightPrefix: '',
        rightRoundTo: 0,
        rightSuffix: '',
        roundTo: 0,
        suffix: ''
      },
      table: {},
      runtime: { series: [{ dataKey: 'Atlanta' }] },
      preliminaryData: []
    }
    const runtimeData = [{ communityType: 'Urban Core', Atlanta: 34, population: 1000 }]

    expect(getChartCellValue('0', 'population', config as any, runtimeData as any, new Map())).toBe(
      '$1,000 residents'
    )
  })

  it('lets standard chart series columns inherit global decimal rounding when no column rounding exists', () => {
    const runtimeData = [{ category: 'Male', cases: 478363 }]

    expect(getChartCellValue('0', 'cases', makeBarConfig(), runtimeData as any, new Map())).toBe('478,363.0')
  })

  it('lets blank chart series column rounding inherit global decimal rounding', () => {
    const runtimeData = [{ category: 'Male', cases: 478363 }]
    const config = makeBarConfig({ cases: { roundToPlace: '' } })

    expect(getChartCellValue('0', 'cases', config, runtimeData as any, new Map())).toBe('478,363.0')
  })

  it('preserves explicit zero-decimal chart series overrides', () => {
    const runtimeData = [{ category: 'Male', cases: 478363 }]
    const config = makeBarConfig({ cases: { roundToPlace: 0 } })

    expect(getChartCellValue('0', 'cases', config, runtimeData as any, new Map())).toBe('478,363')
  })

  it('preserves explicit additional-column zero-decimal overrides', () => {
    const runtimeData = [{ category: 'Male', cases: 478363, rate: 12.34 }]
    const config = makeBarConfig({ rate: { roundToPlace: 0, commas: false } })

    expect(getChartCellValue('0', 'rate', config, runtimeData as any, new Map())).toBe('12')
  })

  it('does not apply left-axis affixes to additional columns', () => {
    const runtimeData = [{ category: 'Male', cases: 22, rate: 146 }]
    const config = makeBarConfig({
      rate: { prefix: '', suffix: '', roundToPlace: 0, commas: true }
    })
    config.dataFormat.prefix = '~'
    config.dataFormat.suffix = '%'

    expect(getChartCellValue('0', 'cases', config, runtimeData as any, new Map())).toBe('~22.0%')
    expect(getChartCellValue('0', 'rate', config, runtimeData as any, new Map())).toBe('146')
  })

  it('does not compute percentages or append percent suffixes for additional pie data table columns', () => {
    const runtimeData = [
      { category: 'A', value: 25, population: 200 },
      { category: 'B', value: 75, population: 300 }
    ]
    const config = makePieConfig({ population: { roundToPlace: 0, commas: true } })

    expect(getChartCellValue('0', 'value', config, runtimeData as any, new Map())).toBe('25%')
    expect(getChartCellValue('0', 'population', config, runtimeData as any, new Map())).toBe('200')
  })

  it('keeps computed percent formatting for a configured pie value column', () => {
    const runtimeData = [
      { category: 'A', value: 25, population: 200 },
      { category: 'B', value: 75, population: 300 }
    ]
    const config = makePieConfig({ value: { roundToPlace: 1, commas: false } })

    expect(getChartCellValue('0', 'value', config, runtimeData as any, new Map())).toBe('25.0%')
  })
})
