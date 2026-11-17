import { changeFilterActive } from '../changeFilterActive'
import { filterData } from '../filterData'
import { SharedFilter } from '../../types/SharedFilter'
import { DashboardFilters } from '@cdc/core/types/DashboardFilters'

const makeFilter = (active: string[], props = {}) =>
  ({
    key: 'Substance',
    columnName: 'substance',
    type: 'datafilter',
    filterStyle: 'multi-select',
    showAllOption: true,
    showDropdown: true,
    active,
    values: ['All', 'Acetone', 'Benzene'],
    ...props
  } as SharedFilter)
const config = (apply = false) =>
  ({ filterBehavior: apply ? 'Apply Button' : 'Filter Change', autoLoad: false } as DashboardFilters)

describe('DEV-13957 show-all interaction', () => {
  it('replaces All when a specific value is added', () => {
    const original = makeFilter(['All'])
    const [[result]] = changeFilterActive(0, ['All', 'Acetone'], [original], config())
    expect(result.active).toEqual(['Acetone'])
    expect(original.active).toEqual(['All'])
  })

  it('replaces specific values when All is added', () => {
    const [[result]] = changeFilterActive(
      0,
      ['Acetone', 'Benzene', 'All'],
      [makeFilter(['Acetone', 'Benzene'])],
      config()
    )
    expect(result.active).toEqual(['All'])
  })

  it('keeps empty selections empty', () => {
    const [[result]] = changeFilterActive(0, [], [makeFilter(['All'])], config())
    expect(result.active).toEqual([])
  })

  it('normalizes queued selections against the previous queue and leaves applied data unchanged', () => {
    const rows = [{ substance: 'Acetone' }, { substance: 'Benzene' }]
    const [[first]] = changeFilterActive(0, ['Acetone', 'All'], [makeFilter(['Acetone'])], config(true))
    expect(first.active).toEqual(['Acetone'])
    expect(first.queuedActive).toEqual(['All'])
    expect(filterData([first], rows)).toEqual([rows[0]])
    const [[second]] = changeFilterActive(0, ['All', 'Benzene'], [first], config(true))
    expect(second.queuedActive).toEqual(['Benzene'])
    expect(second.active).toEqual(['Acetone'])
  })

  it('preserves mixed literal values for legacy filters', () => {
    const [[result]] = changeFilterActive(
      0,
      ['Acetone', 'All'],
      [makeFilter(['Acetone'], { showAllOption: false })],
      config()
    )
    expect(result.active).toEqual(['Acetone', 'All'])
  })
})
