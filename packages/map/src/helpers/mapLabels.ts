type MapLabels = {
  usTerritories: string
  freelyAssociatedStates: string
}

const DEFAULT_MAP_LABELS: MapLabels = {
  usTerritories: 'U.S. territories',
  freelyAssociatedStates: 'Freely associated states'
}

const SPANISH_MAP_LABELS: MapLabels = {
  usTerritories: 'Territorios de los EE. UU.',
  freelyAssociatedStates: 'Estados libres asociados'
}

const MAP_LABELS_BY_LOCALE: Record<string, MapLabels> = {
  es: SPANISH_MAP_LABELS,
  'es-MX': SPANISH_MAP_LABELS
}

export const getMapLabels = (locale?: string): MapLabels => {
  if (!locale) return DEFAULT_MAP_LABELS

  const labels = MAP_LABELS_BY_LOCALE[locale]
  if (labels) return labels

  const language = locale.split('-')[0]
  return MAP_LABELS_BY_LOCALE[language] ?? DEFAULT_MAP_LABELS
}
