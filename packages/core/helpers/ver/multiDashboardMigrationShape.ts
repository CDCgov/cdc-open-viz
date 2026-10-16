// Historical single-dashboard migrations expect these collections to exist.
// These neutral values are temporary migration scaffolding, not current defaults.
const neutralRootCollections = {
  dashboard: () => ({}),
  rows: () => [],
  visualizations: () => ({})
}

export type SyntheticRootCollection = keyof typeof neutralRootCollections

export const addSyntheticMultiDashboardRootCollections = (config): SyntheticRootCollection[] => {
  const isMultiDashboardContainer = config.type === 'dashboard' && Array.isArray(config.multiDashboards)
  if (!isMultiDashboardContainer) return []

  const syntheticCollections: SyntheticRootCollection[] = []
  const rootCollectionKeys = Object.keys(neutralRootCollections) as SyntheticRootCollection[]

  rootCollectionKeys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(config, key)) return
    config[key] = neutralRootCollections[key]()
    syntheticCollections.push(key)
  })

  return syntheticCollections
}

export const removeSyntheticMultiDashboardRootCollections = (
  config,
  syntheticCollections: SyntheticRootCollection[]
) => {
  syntheticCollections.forEach(key => delete config[key])
}
