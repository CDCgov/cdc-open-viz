import update_4_26_6_1 from '../4.26.6-1'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { describe, expect, it } from 'vitest'

describe('update_4_26_6_1', () => {
  it('preserves static table footnotes for legacy table visualizations', () => {
    const config: any = {
      type: 'table',
      version: '4.26.6',
      table: { expanded: false, collapsible: true },
      footnotes: {
        staticFootnotes: [{ text: 'Legacy table footnote' }]
      }
    }

    const result = update_4_26_6_1(config)

    expect(result.table.preserveFootnotesOnCollapse).toBe(true)
    expect(result.version).toBe('4.26.6-1')
    expect(config.table.preserveFootnotesOnCollapse).toBeUndefined()
  })

  it('preserves dynamic table footnotes for legacy table visualizations', () => {
    const result = update_4_26_6_1({
      type: 'table',
      version: '4.26.6',
      table: { expanded: false, collapsible: true },
      footnotes: {
        dataKey: 'footnote-data',
        dynamicFootnotes: {
          textColumn: 'Note'
        }
      }
    } as any)

    expect(result.table.preserveFootnotesOnCollapse).toBe(true)
  })

  it('does not add the compatibility flag to tables without footnotes', () => {
    const result = update_4_26_6_1({
      type: 'table',
      version: '4.26.6',
      table: { expanded: false, collapsible: true }
    } as any)

    expect(result.table.preserveFootnotesOnCollapse).toBeUndefined()
  })

  it('does not add the compatibility flag for empty static footnote markup', () => {
    const result = update_4_26_6_1({
      type: 'table',
      version: '4.26.6',
      table: { expanded: false, collapsible: true },
      footnotes: {
        staticFootnotes: [{ text: '<br><span> </span>' }]
      }
    } as any)

    expect(result.table.preserveFootnotesOnCollapse).toBeUndefined()
  })

  it('preserves explicit table footnote collapse settings', () => {
    const result = update_4_26_6_1({
      type: 'table',
      version: '4.26.6',
      table: {
        expanded: false,
        collapsible: true,
        preserveFootnotesOnCollapse: false
      },
      footnotes: {
        staticFootnotes: [{ text: 'Use the new collapse behavior' }]
      }
    } as any)

    expect(result.table.preserveFootnotesOnCollapse).toBe(false)
  })

  it('updates dashboard table visualizations recursively', () => {
    const result = update_4_26_6_1({
      type: 'dashboard',
      version: '4.26.6',
      visualizations: {
        chartA: {
          type: 'chart',
          table: { expanded: false },
          footnotes: {
            staticFootnotes: [{ text: 'Chart footnote stays outside table collapse' }]
          }
        },
        tableA: {
          type: 'table',
          table: { expanded: false, collapsible: true },
          footnotes: {
            staticFootnotes: [{ text: 'Dashboard table footnote' }]
          }
        },
        nestedDashboard: {
          type: 'dashboard',
          visualizations: {
            tableB: {
              type: 'table',
              table: { expanded: false, collapsible: true },
              footnotes: {
                staticFootnotes: [{ text: 'Nested dashboard table footnote' }]
              }
            }
          }
        }
      }
    } as any)

    expect(result.visualizations.chartA.table.preserveFootnotesOnCollapse).toBeUndefined()
    expect(result.visualizations.tableA.table.preserveFootnotesOnCollapse).toBe(true)
    expect(result.visualizations.nestedDashboard.visualizations.tableB.table.preserveFootnotesOnCollapse).toBe(true)
  })

  it('runs after 4.26.6 in coveUpdateWorker', () => {
    const result = coveUpdateWorker({
      type: 'table',
      version: '4.26.6',
      table: { expanded: false, collapsible: true },
      footnotes: {
        staticFootnotes: [{ text: 'Already 4.26.6 table footnote' }]
      }
    } as any)

    expect(result.table.preserveFootnotesOnCollapse).toBe(true)
    expect(result.version).toBe('4.26.6-2')
  })

  it('does not rerun for configs already migrated to 4.26.6-1', () => {
    const result = coveUpdateWorker({
      type: 'table',
      version: '4.26.6-1',
      table: { expanded: false, collapsible: true },
      footnotes: {
        staticFootnotes: [{ text: 'Already migrated table footnote' }]
      }
    } as any)

    expect(result.table.preserveFootnotesOnCollapse).toBeUndefined()
    expect(result.version).toBe('4.26.6-2')
  })
})
