import { missingRequiredSections } from './missingRequiredSections'

describe('missingRequiredSections', () => {
  it('requires source and target mappings for Network charts', () => {
    expect(
      missingRequiredSections({ visualizationType: 'Network', network: { columns: { source: '', target: '' } } })
    ).toBe(true)
    expect(
      missingRequiredSections({
        visualizationType: 'Network',
        network: { columns: { source: 'from', target: 'to' } }
      })
    ).toBe(false)
  })
})
