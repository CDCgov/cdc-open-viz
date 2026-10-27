import { describe, expect, it } from 'vitest'
import { DataTransform } from '@cdc/core/helpers/DataTransform'

import {
  applyColumnMapping,
  buildReplacementConfig,
  calculateColumnSchemaDiff,
  collectColumnNames,
  createColumnRemapPlan,
  evaluateRemapMappings,
  findColumnRemapMatches,
  findDashboardColumnAmbiguities,
  findLiteralValueOverlaps,
  getDashboardDatasetSchemas,
  getEffectiveColumnNames,
  getSafeColumnTargets,
  getReferencedRemovedColumns,
  prepareConfigForDataReplacement,
  validateColumnMapping
} from '../helpers/columnRemap'

describe('column remapping', () => {
  it('collects the union of columns across sparse rows', () => {
    expect(collectColumnNames([{ beta: 1 }, null, { alpha: 2, beta: 3 }, ['ignored']])).toEqual(['alpha', 'beta'])
  })

  it('calculates removed, added, and unchanged columns', () => {
    expect(calculateColumnSchemaDiff([{ old: 1, stable: 2 }], [{ replacement: 1, stable: 2 }])).toEqual({
      oldColumns: ['old', 'stable'],
      newColumns: ['replacement', 'stable'],
      removed: ['old'],
      added: ['replacement'],
      unchanged: ['stable']
    })
  })

  it('finds Chart column-identity keys, string values, and array items without matching structural keys', () => {
    const matches = findColumnRemapMatches(
      {
        type: 'chart',
        old: { field: 'old' },
        columns: { old: { name: 'old' } },
        fields: ['old', 'older'],
        label: 'old label'
      },
      ['old']
    )
    expect(matches).toEqual([
      { kind: 'string', path: ['old', 'field'], value: 'old' },
      { kind: 'key', path: ['columns', 'old'], value: 'old' },
      { kind: 'string', path: ['columns', 'old', 'name'], value: 'old' },
      { kind: 'string', path: ['fields', 0], value: 'old' }
    ])
  })

  it('preserves structural keys while renaming Chart and Table column-identity keys', () => {
    const chart = applyColumnMapping(
      {
        type: 'chart',
        columns: {
          old: { name: 'old', label: 'old' },
          keyOnly: { name: '', label: 'Old label' },
          additionalColumn1: { name: 'old' }
        },
        old: { nested: true }
      },
      { old: 'replacement', keyOnly: 'replacementKey' }
    )

    expect(chart.conflicts).toEqual([])
    expect(chart.replacements).toBe(5)
    expect(chart.value).toEqual({
      type: 'chart',
      columns: {
        replacement: { name: 'replacement', label: 'replacement' },
        replacementKey: { name: '', label: 'Old label' },
        additionalColumn1: { name: 'replacement' }
      },
      old: { nested: true }
    })

    expect(
      applyColumnMapping({ type: 'table', columns: { old: { name: 'old' } } }, { old: 'replacement' }).value
    ).toEqual({ type: 'table', columns: { replacement: { name: 'replacement' } } })
  })

  it.each(['data', 'formattedData', 'runtime'])(
    'treats "%s" as a column identity inside a Chart columns registry',
    columnName => {
      const config = { type: 'chart', columns: { [columnName]: { name: columnName } } }

      expect(findColumnRemapMatches(config, [columnName])).toEqual([
        { kind: 'key', path: ['columns', columnName], value: columnName },
        { kind: 'string', path: ['columns', columnName, 'name'], value: columnName }
      ])
      expect(applyColumnMapping(config, { [columnName]: 'replacement' })).toEqual({
        value: { type: 'chart', columns: { replacement: { name: 'replacement' } } },
        replacements: 2,
        conflicts: []
      })
    }
  )

  it('preserves Map and role-based column keys while remapping their string values', () => {
    const result = applyColumnMapping(
      {
        type: 'map',
        columns: {
          old: { name: 'old' },
          primary: { name: 'old' }
        },
        bubble: { layers: [{ columns: { size: { name: 'old' } } }] },
        sankey: { columns: { source: 'old', target: 'target', value: 'value' } }
      },
      { old: 'replacement' }
    )

    expect(result.conflicts).toEqual([])
    expect(result.value).toEqual({
      type: 'map',
      columns: {
        old: { name: 'replacement' },
        primary: { name: 'replacement' }
      },
      bubble: { layers: [{ columns: { size: { name: 'replacement' } } }] },
      sankey: { columns: { source: 'replacement', target: 'target', value: 'value' } }
    })
  })

  it('renames column-identity keys in dashboard child Chart and Table configs', () => {
    const result = applyColumnMapping(
      {
        type: 'dashboard',
        visualizations: {
          chart: { type: 'chart', columns: { old: { name: 'old' } } },
          table: { type: 'table', columns: { old: { name: 'old' } } }
        },
        multiDashboards: [{ visualizations: { chart: { type: 'chart', columns: { old: { name: 'old' } } } } }]
      },
      { old: 'replacement' }
    )

    expect(result.conflicts).toEqual([])
    expect(result.value).toMatchObject({
      visualizations: {
        chart: { columns: { replacement: { name: 'replacement' } } },
        table: { columns: { replacement: { name: 'replacement' } } }
      },
      multiDashboards: [{ visualizations: { chart: { columns: { replacement: { name: 'replacement' } } } } }]
    })
  })

  it('excludes payload, metadata, derived, and runtime branches at every depth', () => {
    const config = {
      field: 'old',
      nested: {
        data: [{ old: 'old' }],
        formattedData: [{ old: 'old' }],
        originalFormattedData: ['old'],
        yAxisDomainData: ['old'],
        tableData: ['old'],
        dataMetadata: { old: 'old' },
        runtime: { old: 'old' },
        runtimeDataUrl: 'old'
      }
    }
    expect(findColumnRemapMatches(config, ['old'])).toEqual([{ kind: 'string', path: ['field'], value: 'old' }])
  })

  it('applies mappings simultaneously, immutably, and without cascading', () => {
    const original = { a: 'a', values: ['a', 'b'], nested: { field: 'b' } }
    const result = applyColumnMapping(original, { a: 'b', b: 'c' })

    expect(result.conflicts).toEqual([])
    expect(result.replacements).toBe(4)
    expect(result.value).toEqual({ a: 'b', values: ['b', 'c'], nested: { field: 'c' } })
    expect(original).toEqual({ a: 'a', values: ['a', 'b'], nested: { field: 'b' } })
  })

  it('preserves own __proto__ properties without changing cloned object prototypes', () => {
    const original = JSON.parse('{"__proto__":{"polluted":true},"field":"old"}')
    const result = applyColumnMapping(original, { old: 'replacement' })

    expect(result.conflicts).toEqual([])
    expect(result.value).toEqual({ ...original, field: 'replacement' })
    expect(Object.getPrototypeOf(result.value)).toBe(Object.prototype)
    expect(Object.prototype.hasOwnProperty.call(result.value, '__proto__')).toBe(true)
    expect(result.value.__proto__).toEqual({ polluted: true })
    expect(({} as any).polluted).toBeUndefined()
  })

  it('does not treat matching structural keys as references or collision candidates', () => {
    const config = { old: { nested: true }, replacement: { authored: true } }

    expect(findColumnRemapMatches(config, ['old'])).toEqual([])
    expect(applyColumnMapping(config, { old: 'replacement' })).toEqual({
      value: config,
      replacements: 0,
      conflicts: []
    })
  })

  it('preserves Sankey role keys while remapping the selected column values', () => {
    const result = applyColumnMapping(
      {
        type: 'chart',
        visualizationType: 'Sankey',
        sankey: { columns: { source: 'source', target: 'target', value: 'value' } }
      },
      { source: 'origin', target: 'destination', value: 'amount' }
    )

    expect(result.conflicts).toEqual([])
    expect(result.replacements).toBe(3)
    expect(result.value).toEqual({
      type: 'chart',
      visualizationType: 'Sankey',
      sankey: { columns: { source: 'origin', target: 'destination', value: 'amount' } }
    })
  })

  it('does not count or modify excluded branches', () => {
    const data = [{ old: 'old' }]
    const result = applyColumnMapping({ field: 'old', data }, { old: 'new' })
    expect(result.replacements).toBe(1)
    expect(result.value).toEqual({ field: 'new', data })
    expect(result.value?.data).toBe(data)
  })

  it('blocks mappings that create object-key collisions', () => {
    const result = applyColumnMapping(
      { type: 'chart', columns: { old: { name: 'old' }, replacement: { name: 'replacement' } } },
      { old: 'replacement' }
    )
    expect(result.value).toBeUndefined()
    expect(result.conflicts[0].kind).toBe('object-key-collision')
    expect(result.conflicts[0].message).toBe(
      'Remapping "old" to "replacement" would overwrite existing configuration at columns.replacement. Choose a different replacement column or remove the existing "replacement" configuration before trying again.'
    )
  })

  it('attributes object-key collisions to the remapped source regardless of key order', () => {
    const result = applyColumnMapping(
      { type: 'chart', columns: { replacement: { name: 'replacement' }, old: { name: 'old' } } },
      { old: 'replacement' }
    )
    expect(result.conflicts[0].message).toBe(
      'Remapping "old" to "replacement" would overwrite existing configuration at columns.replacement. Choose a different replacement column or remove the existing "replacement" configuration before trying again.'
    )
  })

  it.each([
    'data',
    'formattedData',
    'originalFormattedData',
    'yAxisDomainData',
    'tableData',
    'dataMetadata',
    'runtime',
    'runtimeDataUrl'
  ])('blocks collisions with excluded branch "%s" regardless of property order', excludedKey => {
    const authoredConfig = { name: 'old', label: 'Authored setting' }
    const excludedValue = { cached: true }
    const sourceFirst = {
      type: 'chart',
      columns: Object.fromEntries([
        ['old', authoredConfig],
        [excludedKey, excludedValue]
      ])
    }
    const excludedFirst = {
      type: 'chart',
      columns: Object.fromEntries([
        [excludedKey, excludedValue],
        ['old', authoredConfig]
      ])
    }

    for (const original of [sourceFirst, excludedFirst]) {
      const result = applyColumnMapping(original, { old: excludedKey })
      expect(result.value).toBeUndefined()
      expect(result.conflicts).toEqual([
        expect.objectContaining({
          kind: 'object-key-collision',
          message: expect.stringContaining(`Remapping "old" to "${excludedKey}" would overwrite`)
        })
      ])
    }
  })

  it('allows an excluded branch name when it is only a string mapping target', () => {
    const result = applyColumnMapping({ xAxis: { dataKey: 'old' } }, { old: 'data' })

    expect(result.conflicts).toEqual([])
    expect(result.value).toEqual({ xAxis: { dataKey: 'data' } })
  })

  it('blocks mappings that introduce array duplicates', () => {
    const result = applyColumnMapping({ fields: ['old', 'replacement'] }, { old: 'replacement' })
    expect(result.value).toBeUndefined()
    expect(result.conflicts[0].kind).toBe('array-duplicate')
    expect(result.conflicts[0].message).toBe(
      'Remapping "old" to "replacement" would create a duplicate configuration entry at fields. Choose a different replacement column or remove the existing "replacement" entry before trying again.'
    )
  })

  it('removes reserved names from selectable replacement targets', () => {
    expect(getSafeColumnTargets(['safe', '__proto__', 'prototype', 'constructor'])).toEqual(['safe'])
  })

  it('requires complete one-to-one removed-to-added mappings and rejects unsafe keys', () => {
    expect(validateColumnMapping({ old: 'replacement' }, ['old', 'other'], ['replacement', 'newOther'])).toEqual([
      expect.objectContaining({ kind: 'incomplete-mapping', column: 'other' })
    ])
    expect(
      validateColumnMapping({ old: 'replacement', other: 'replacement' }, ['old', 'other'], ['replacement'])
    ).toEqual([expect.objectContaining({ kind: 'reused-target', column: 'replacement' })])
    expect(validateColumnMapping({ old: '__proto__' }, ['old'], ['__proto__'])).toEqual([
      expect.objectContaining({
        kind: 'unsafe-key',
        column: '__proto__',
        message: expect.stringContaining('reserved name')
      })
    ])
  })

  it('detects literal-value overlap in existing rows', () => {
    expect(findLiteralValueOverlaps([{ category: 'old' }, { category: 'safe' }], ['old'])).toEqual([
      expect.objectContaining({
        kind: 'literal-value-overlap',
        column: 'old',
        message: expect.stringContaining('same-schema version')
      })
    ])
  })

  it('detects cross-dataset dashboard ambiguity', () => {
    const datasets = {
      selected: { data: [{ old: 1 }] },
      other: { data: [{ old: 2 }, { unique: 3 }] }
    }
    expect(findDashboardColumnAmbiguities(getDashboardDatasetSchemas(datasets), 'selected', ['old'])).toEqual([
      expect.objectContaining({
        kind: 'dashboard-ambiguity',
        column: 'old',
        message: expect.stringContaining('replaces one dataset at a time')
      })
    ])
  })

  it('preserves dashboard dataset keys and references and blocks a column with the same name', () => {
    const config = {
      datasets: { primary: { data: [{ primary: 1 }] } },
      rows: [{ dataKey: 'primary' }],
      visualizations: { chart: { dataKey: 'primary', xAxis: { dataKey: 'category' } } }
    }
    expect(findColumnRemapMatches(config, ['primary'])).toEqual([])
    expect(applyColumnMapping(config, { primary: 'renamed' }).value).toEqual(config)
    expect(findDashboardColumnAmbiguities(getDashboardDatasetSchemas(config.datasets), 'primary', ['primary'])).toEqual(
      [
        expect.objectContaining({
          kind: 'dashboard-ambiguity',
          column: 'primary',
          message: expect.stringContaining('Dataset IDs cannot be renamed')
        })
      ]
    )
  })

  it('requires mappings only for removed columns referenced by authored config', () => {
    const diff = calculateColumnSchemaDiff([{ used: 1, unused: 2 }], [{ next: 1 }])
    expect(getReferencedRemovedColumns({ xAxis: { dataKey: 'used' }, data: [{ unused: 2 }] }, diff)).toEqual(['used'])
  })

  it('detects referenced generated columns in the transformed schema pass', () => {
    const transform = new DataTransform()
    const description = {
      horizontal: false,
      series: true,
      singleRow: false,
      xKey: 'year',
      seriesKey: 'measure',
      valueKey: 'value'
    }
    const oldTransformed = transform.developerStandardize([{ year: '2025', measure: 'Cases', value: 1 }], description)
    const newTransformed = transform.developerStandardize([{ year: '2025', measure: 'Count', value: 10 }], description)
    const diff = calculateColumnSchemaDiff(oldTransformed, newTransformed)

    expect(diff.removed).toEqual(['Cases'])
    expect(diff.added).toEqual(['Count'])
    expect(getReferencedRemovedColumns({ series: [{ dataKey: 'Cases' }] }, diff)).toEqual(['Cases'])
  })

  it('blocks a new raw column from masking a referenced generated-column removal', () => {
    const description = {
      horizontal: false,
      series: true,
      singleRow: false,
      xKey: 'year',
      seriesKey: 'measure',
      valueKey: 'value'
    }
    const pending = createColumnRemapPlan({
      config: {
        type: 'chart',
        data: [{ year: '2025', measure: 'Cases', value: 1 }],
        dataDescription: description,
        xAxis: { dataKey: 'year' },
        series: [{ dataKey: 'Cases' }]
      } as any,
      keepURL: false,
      newData: [{ Cases: '2025', measure: 'Count', value: 10 }],
      dataMetadata: {},
      fileSource: 'replacement.json',
      fileSourceType: 'file',
      fileSize: 100,
      mimeType: 'application/json'
    })

    expect(pending?.status).toBe('blocked')
    expect(pending?.readyToApply).toBe(false)
    expect(pending?.conflicts).toEqual([
      expect.objectContaining({
        kind: 'schema-ambiguity',
        column: 'Cases',
        message: expect.stringContaining('generated column in the current data and also a raw column')
      })
    ])
  })

  it('blocks a raw mapping target that could cascade through a generated mapping pass', () => {
    const description = {
      horizontal: false,
      series: true,
      singleRow: false,
      xKey: 'year',
      seriesKey: 'measure',
      valueKey: 'value'
    }
    const pending = createColumnRemapPlan({
      config: {
        type: 'chart',
        data: [{ year: '2025', measure: 'Cases', value: 1, filterColumn: 'North' }],
        dataDescription: description,
        filters: [{ columnName: 'filterColumn' }]
      } as any,
      keepURL: false,
      newData: [{ year: '2025', measure: 'Count', value: 10, Cases: 'North' }],
      dataMetadata: {},
      fileSource: 'replacement.json',
      fileSourceType: 'file',
      fileSize: 100,
      mimeType: 'application/json'
    })

    expect(pending?.status).toBe('blocked')
    expect(pending?.rawRequiredColumns).toEqual(['filterColumn'])
    expect(pending?.rawAvailableColumns).toEqual([])
    expect(pending?.conflicts).toEqual([expect.objectContaining({ kind: 'invalid-target' })])
  })

  it('collects raw and freshly transformed columns in one effective schema', () => {
    const description = {
      horizontal: false,
      series: true,
      singleRow: false,
      xKey: 'year',
      seriesKey: 'measure',
      valueKey: 'value'
    }

    expect(getEffectiveColumnNames([{ year: '2025', measure: 'Cases', value: 1 }], description)).toEqual([
      'Cases',
      'measure',
      'value',
      'year'
    ])
  })

  it.each([
    ['raw', { data: [{ Cases: 2 }] }],
    [
      'generated',
      {
        data: [{ year: '2025', measure: 'Cases', value: 2 }],
        dataDescription: {
          horizontal: false,
          series: true,
          singleRow: false,
          xKey: 'year',
          seriesKey: 'measure',
          valueKey: 'value'
        }
      }
    ]
  ])('blocks a generated-column remap owned by another dataset as %s data', (_schemaType, otherDataset) => {
    const description = {
      horizontal: false,
      series: true,
      singleRow: false,
      xKey: 'year',
      seriesKey: 'measure',
      valueKey: 'value'
    }
    const config = {
      type: 'dashboard',
      datasets: {
        selected: {
          data: [{ year: '2025', measure: 'Cases', value: 1 }],
          dataDescription: description
        },
        other: otherDataset
      },
      visualizations: {
        selectedChart: { dataKey: 'selected', series: [{ dataKey: 'Cases' }] },
        otherChart: { dataKey: 'other', xAxis: { dataKey: 'Cases' } }
      }
    } as any

    const pending = createColumnRemapPlan({
      config,
      keepURL: false,
      newData: [{ year: '2025', measure: 'Count', value: 10 }],
      dataMetadata: {},
      fileSource: 'replacement.json',
      fileSourceType: 'file',
      fileSize: 100,
      mimeType: 'application/json',
      datasetKey: 'selected'
    })

    expect(pending?.status).toBe('blocked')
    expect(pending?.readyToApply).toBe(false)
    expect(pending?.conflicts).toEqual([expect.objectContaining({ kind: 'dashboard-ambiguity', column: 'Cases' })])
  })

  it('allows a generated-column remap when no other dataset owns the column', () => {
    const description = {
      horizontal: false,
      series: true,
      singleRow: false,
      xKey: 'year',
      seriesKey: 'measure',
      valueKey: 'value'
    }
    const config = {
      type: 'dashboard',
      datasets: {
        selected: {
          data: [{ year: '2025', measure: 'Cases', value: 1 }],
          dataDescription: description
        },
        other: { data: [{ Region: 'North', Population: 2 }] }
      },
      visualizations: {
        selectedChart: { dataKey: 'selected', series: [{ dataKey: 'Cases' }] },
        otherChart: { dataKey: 'other', xAxis: { dataKey: 'Region' } }
      }
    } as any

    const pending = createColumnRemapPlan({
      config,
      keepURL: false,
      newData: [{ year: '2025', measure: 'Count', value: 10 }],
      dataMetadata: {},
      fileSource: 'replacement.json',
      fileSourceType: 'file',
      fileSize: 100,
      mimeType: 'application/json',
      datasetKey: 'selected'
    })

    expect(pending?.status).toBe('mapping')
    expect(pending?.transformedRequiredColumns).toEqual(['Cases'])
    expect(pending?.transformedAvailableColumns).toEqual(['Count'])
    expect(pending?.conflicts).toEqual([])
  })

  it('blocks raw remapping when required sources outnumber safe targets', () => {
    const pending = createColumnRemapPlan({
      config: {
        type: 'chart',
        xAxis: { dataKey: 'oldCategory' },
        series: [{ dataKey: 'oldValue' }],
        data: [{ oldCategory: 'A', oldValue: 1 }]
      } as any,
      keepURL: false,
      newData: [{ replacement: 'A', constructor: 'reserved' }],
      dataMetadata: {},
      fileSource: 'replacement.json',
      fileSourceType: 'file',
      fileSize: 100,
      mimeType: 'application/json'
    })

    expect(pending?.status).toBe('blocked')
    expect(pending?.readyToApply).toBe(false)
    expect(pending?.conflicts).toEqual([
      expect.objectContaining({
        kind: 'invalid-target',
        message: expect.stringContaining('only 1 usable new column is available for 2 required mappings')
      })
    ])
  })

  it('blocks generated remapping when required sources outnumber generated targets', () => {
    const description = {
      horizontal: false,
      series: true,
      singleRow: false,
      xKey: 'year',
      seriesKey: 'measure',
      valueKey: 'value'
    }
    const pending = createColumnRemapPlan({
      config: {
        type: 'chart',
        data: [
          { year: '2025', measure: 'Cases', value: 1 },
          { year: '2025', measure: 'Deaths', value: 2 }
        ],
        dataDescription: description,
        series: [{ dataKey: 'Cases' }, { dataKey: 'Deaths' }]
      } as any,
      keepURL: false,
      newData: [{ year: '2025', measure: 'Count', value: 10 }],
      dataMetadata: {},
      fileSource: 'replacement.json',
      fileSourceType: 'file',
      fileSize: 100,
      mimeType: 'application/json'
    })

    expect(pending?.status).toBe('blocked')
    expect(pending?.readyToApply).toBe(false)
    expect(pending?.transformedRequiredColumns).toEqual(['Cases', 'Deaths'])
    expect(pending?.transformedAvailableColumns).toEqual(['Count'])
    expect(pending?.conflicts).toEqual([
      expect.objectContaining({
        kind: 'invalid-target',
        message: expect.stringContaining('only 1 usable new column is available for 2 required mappings')
      })
    ])
  })

  it('commits a pending dashboard label together with remapped replacement data', () => {
    const config = {
      type: 'dashboard',
      datasets: {
        primary: {
          label: 'Original dataset',
          data: [{ oldColumn: 1 }],
          dataFileName: 'original.json'
        }
      },
      visualizations: {
        chart: { dataKey: 'primary', xAxis: { dataKey: 'oldColumn' } }
      }
    } as any
    const pending = createColumnRemapPlan({
      config,
      keepURL: false,
      newData: [{ newColumn: 2 }],
      dataMetadata: {},
      fileSource: 'replacement.json',
      fileSourceType: 'file',
      fileSize: 100,
      mimeType: 'application/json',
      datasetKey: 'primary',
      datasetLabel: 'Renamed dataset'
    })

    expect(pending).toBeDefined()
    const ready = evaluateRemapMappings(pending!, { oldColumn: 'newColumn' }, {})
    const result = buildReplacementConfig(ready, false)

    expect(result.datasets.primary.label).toBe('Renamed dataset')
    expect(result.datasets.primary.data).toEqual([{ newColumn: 2 }])
    expect(result.visualizations.chart.xAxis.dataKey).toBe('newColumn')
  })

  it('clears selected dashboard payload caches across root and tabs and discards runtime state', () => {
    const original = {
      runtime: { loading: true },
      runtimeDataUrl: 'stale.csv',
      rows: [
        { dataKey: 'primary', data: [1], formattedData: [2] },
        { dataKey: 'secondary', data: [3] }
      ],
      visualizations: {
        first: { dataKey: 'primary', dataMetadata: { source: 'old' }, tableData: [1] },
        second: { dataKey: 'secondary', formattedData: [3] }
      },
      multiDashboards: [
        {
          rows: [{ dataKey: 'primary', originalFormattedData: [1] }],
          visualizations: { tab: { dataKey: 'primary', yAxisDomainData: [1], runtime: { stale: true } } }
        }
      ]
    }

    const result = prepareConfigForDataReplacement(original, 'primary')
    expect(result.runtime).toBeUndefined()
    expect(result.runtimeDataUrl).toBeUndefined()
    expect(result.rows[0]).toEqual({ dataKey: 'primary' })
    expect(result.rows[1]).toEqual(original.rows[1])
    expect(result.visualizations.first).toEqual({ dataKey: 'primary' })
    expect(result.visualizations.second).toEqual(original.visualizations.second)
    expect(result.multiDashboards[0].rows[0]).toEqual({ dataKey: 'primary' })
    expect(result.multiDashboards[0].visualizations.tab).toEqual({ dataKey: 'primary' })
    expect(original.rows[0]).toHaveProperty('data')
  })
})
