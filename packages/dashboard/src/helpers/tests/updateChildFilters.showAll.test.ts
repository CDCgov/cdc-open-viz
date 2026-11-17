import { updateChildFilters } from '../updateChildFilters'
import { SharedFilter } from '../../types/SharedFilter'

const makeFilter = (props = {}) =>
  ({
    key: 'Substance',
    type: 'datafilter',
    filterStyle: 'multi-select',
    showAllOption: true,
    columnName: 'substance',
    active: ['All'],
    values: ['All', 'Acetone', 'Benzene'],
    order: 'data',
    ...props
  } as SharedFilter)

describe('DEV-13957 cascading show-all filters', () => {
  const data = {
    small: [
      { substance: 'Acetone', year: '2022' },
      { substance: 'Benzene', year: '2012' }
    ]
  }
  const child = makeFilter({ key: 'Year', columnName: 'year', parents: ['Substance'], values: [], defaultValue: 'All' })

  it('does not narrow child options when its parent is All', () => {
    const result = updateChildFilters([makeFilter(), child], data)
    expect(result[1].values).toEqual(['All', '2022', '2012'])
    expect(result[1].active).toEqual(['All'])
    expect(child.values).toEqual([])
  })

  it('narrows real child options but preserves its synthetic All when a parent is specific', () => {
    const result = updateChildFilters([makeFilter({ active: ['Acetone'] }), child], data)
    expect(result[1].values).toEqual(['All', '2022'])
    expect(result[1].active).toEqual(['All'])
  })

  it('retains a deliberately empty child selection rather than defaulting to All', () => {
    const result = updateChildFilters([makeFilter(), { ...child, active: [] }], data)
    expect(result[1].active).toEqual([])
  })
})

it('falls back to All when a parent change invalidates a nonempty child selection', () => {
  const filters = [
    makeFilter({ active: ['Acetone'] }),
    makeFilter({ key: 'Year', columnName: 'year', parents: ['Substance'], active: ['2012'], defaultValue: 'All' })
  ]
  const data = {
    small: [
      { substance: 'Acetone', year: '2022' },
      { substance: 'Benzene', year: '2012' }
    ]
  }
  expect(updateChildFilters(filters, data)[1].active).toEqual(['All'])
})

it('preserves child options for normalized string selections of numeric source values', () => {
  const parent = makeFilter({ key: 'Year', columnName: 'year', showAllOption: false, active: ['2022'] })
  const child = makeFilter({ parents: ['Year'] })
  const result = updateChildFilters([parent, child], { small: [{ year: 2022, substance: 'Acetone' }] })
  expect(result[1].values).toEqual(['All', 'Acetone'])
})
