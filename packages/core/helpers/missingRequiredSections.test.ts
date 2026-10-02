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

  it('requires node and parent mappings for Dendrogram charts', () => {
    expect(
      missingRequiredSections({ visualizationType: 'Dendrogram', dendrogram: { columns: { node: '', parent: '' } } })
    ).toBe(true)
    expect(
      missingRequiredSections({
        visualizationType: 'Dendrogram',
        dendrogram: { columns: { node: 'node', parent: 'parent' } }
      })
    ).toBe(false)
  })
})
