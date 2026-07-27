type Tp5DashboardComponentType = 'data-bite' | 'waffle' | 'gauge' | 'markup-include'

type Tp5DashboardComponentConfig = {
  type?: string
  biteStyle?: string
  visualizationType?: string
  contentEditor?: {
    style?: string
  }
  visual?: {
    whiteBackground?: boolean
  }
}

const BASE_CLASS = 'tp5-dashboard-component'

const MODIFIER_CLASSES: Record<Tp5DashboardComponentType, string> = {
  'data-bite': 'tp5-dashboard-component--data-bite',
  waffle: 'tp5-dashboard-component--waffle',
  gauge: 'tp5-dashboard-component--gauge',
  'markup-include': 'tp5-dashboard-component--markup-include'
}

export const getTp5DashboardComponentType = (
  config: Tp5DashboardComponentConfig
): Tp5DashboardComponentType | null => {
  if (config.type === 'data-bite' && config.biteStyle === 'tp5') return 'data-bite'
  if ((!config.type || config.type === 'waffle-chart') && config.visualizationType === 'TP5 Waffle') return 'waffle'
  if ((!config.type || config.type === 'waffle-chart') && config.visualizationType === 'TP5 Gauge') return 'gauge'
  if (config.type === 'markup-include' && config.contentEditor?.style === 'tp5') return 'markup-include'

  return null
}

export const getTp5DashboardComponentClasses = (config: Tp5DashboardComponentConfig) => {
  const componentType = getTp5DashboardComponentType(config)

  if (!componentType) return []

  const classes = [BASE_CLASS, MODIFIER_CLASSES[componentType]]

  if (config.visual?.whiteBackground) {
    classes.push('tp5-dashboard-component--white-background')
  }

  return classes
}
