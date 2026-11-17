import { SharedFilter } from '../../types/SharedFilter'
import {
  getChangedMultiSelectActive,
  isShowAllEnabled,
  isShowAllSelection,
  normalizeMultiSelectActive,
  withShowAllOption
} from '../showAllOption'

const makeFilter = (overrides = {}) =>
  ({
    type: 'datafilter',
    filterStyle: 'multi-select',
    showAllOption: true,
    active: ['All'],
    ...overrides
  } as SharedFilter)

describe('explicit show-all option', () => {
  it.each([undefined, false, null, 'true', 1])('does not enable an omitted or invalid flag %s', showAllOption => {
    expect(isShowAllEnabled(makeFilter({ showAllOption }))).toBe(false)
  })

  it.each([{ type: 'urlfilter' }, { filterStyle: 'dropdown' }, { filterStyle: 'nested-dropdown' }])(
    'does not affect unsupported filters %s',
    overrides => {
      expect(isShowAllEnabled(makeFilter(overrides))).toBe(false)
    }
  )

  it('normalizes scalar, empty and mixed imported selections without mutating them', () => {
    const mixed = ['All', 'Acetone']
    expect(normalizeMultiSelectActive(makeFilter(), 'All')).toEqual(['All'])
    expect(normalizeMultiSelectActive(makeFilter(), '')).toEqual([])
    expect(normalizeMultiSelectActive(makeFilter(), undefined)).toEqual([])
    expect(normalizeMultiSelectActive(makeFilter(), mixed)).toEqual(['Acetone'])
    expect(mixed).toEqual(['All', 'Acetone'])
    expect(normalizeMultiSelectActive(makeFilter({ showAllOption: false }), mixed)).toEqual(mixed)
  })

  it('reserves All only when it is the entire nonempty selection', () => {
    expect(isShowAllSelection(makeFilter({ active: 'All' }))).toBe(true)
    expect(isShowAllSelection(makeFilter({ active: [] }))).toBe(false)
    expect(isShowAllSelection(makeFilter({ active: ['All', 'Acetone'] }))).toBe(false)
  })

  it('lets the newly selected choice replace the conflicting choice including pending selections', () => {
    expect(getChangedMultiSelectActive(makeFilter(), ['All', 'Acetone'])).toEqual(['Acetone'])
    expect(getChangedMultiSelectActive(makeFilter({ active: ['Acetone'] }), ['Acetone', 'All'])).toEqual(['All'])
    expect(getChangedMultiSelectActive(makeFilter({ queuedActive: ['Acetone'] }), ['Acetone', 'All'])).toEqual(['All'])
    expect(getChangedMultiSelectActive(makeFilter(), [])).toEqual([])
  })

  it('prepends one All without changing the ordering of specifics', () => {
    const values = ['Benzene', 'All', 'Acetone']
    expect(withShowAllOption(makeFilter(), values)).toEqual(['All', 'Benzene', 'Acetone'])
    expect(values).toEqual(['Benzene', 'All', 'Acetone'])
  })
})
