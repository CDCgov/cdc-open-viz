import { getDatasetDisplayLabel, getDatasetLabel, getUniqueDatasetKey } from './dashboardDatasetLabels'

describe('dashboard dataset labels', () => {
  it('falls back to the dataset key for legacy datasets without a label', () => {
    expect(getDatasetLabel('legacy-key', {})).toBe('legacy-key')
  })

  it('uses a trimmed authored label', () => {
    expect(getDatasetLabel('stable-key', { label: '  Weekly cases  ' })).toBe('Weekly cases')
  })

  it('adds a numeric suffix when a dataset key is already in use', () => {
    const datasets = {
      cases: {},
      'cases-2': {},
      'cases-3': {}
    } as any

    expect(getUniqueDatasetKey(' cases ', datasets)).toBe('cases-4')
  })

  it('disambiguates duplicate display labels without changing their keys', () => {
    const datasets = {
      cases: { label: 'Weekly cases' },
      'cases-2': { label: 'Weekly cases' }
    } as any

    expect(getDatasetDisplayLabel('cases', datasets)).toBe('Weekly cases (cases)')
    expect(getDatasetDisplayLabel('cases-2', datasets)).toBe('Weekly cases (cases-2)')
  })
})
