type Tp5DashboardComponentType = 'data-bite' | 'waffle' | 'gauge' | 'markup-include'

type Tp5DashboardComponentConfig = {
  type?: string
  biteStyle?: string
  visualizationType?: string
  contentEditor?: {
    style?: string
  }
  tp5Visual?: {
    calloutStyle?: string
    accentPosition?: string
    colorTheme?: string
  }
}

const BASE_CLASS = 'tp5-dashboard-component'
const THEME_ELIGIBLE_CALLOUT_STYLES = ['thin-border', 'drop-shadow']

export const TP5_DASHBOARD_COLOR_THEMES = {
  cyan: {
    accent: 'var(--colors-cyan-40v, #009EC1)',
    accentText: 'var(--colors-cyan-60v, #007A99)',
    accentLight: 'var(--colors-cyan-15, #DFF2F6)'
  },
  blue: {
    accent: 'var(--colors-blue-dark, #0B4778)',
    accentText: 'var(--colors-link-blue, #005EA2)',
    accentLight: 'var(--colors-gray-cool-3, #F5F6F7)'
  }
} as const

export type Tp5DashboardColorThemeName = keyof typeof TP5_DASHBOARD_COLOR_THEMES

const MODIFIER_CLASSES: Record<Tp5DashboardComponentType, string> = {
  'data-bite': 'tp5-dashboard-component--data-bite',
  waffle: 'tp5-dashboard-component--waffle',
  gauge: 'tp5-dashboard-component--gauge',
  'markup-include': 'tp5-dashboard-component--markup-include'
}

const CALLOUT_STYLE_CLASSES: Record<string, string | undefined> = {
  'thin-border': 'tp5-dashboard-component--thin-border',
  'drop-shadow': 'tp5-dashboard-component--drop-shadow'
}

const ACCENT_POSITION_CLASSES: Record<string, string | undefined> = {
  left: 'tp5-dashboard-component--accent-left',
  top: 'tp5-dashboard-component--accent-top'
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

export const isTp5DashboardColorThemeEligible = (config: Tp5DashboardComponentConfig) =>
  Boolean(getTp5DashboardComponentType(config)) &&
  THEME_ELIGIBLE_CALLOUT_STYLES.includes(config.tp5Visual?.calloutStyle ?? '')

export const getTp5DashboardColorTheme = (colorTheme?: string) => {
  if (colorTheme === 'blue') return TP5_DASHBOARD_COLOR_THEMES.blue

  return TP5_DASHBOARD_COLOR_THEMES.cyan
}

export const getTp5DashboardColorThemeVariables = (config: Tp5DashboardComponentConfig) => {
  if (!isTp5DashboardColorThemeEligible(config)) return undefined

  const theme = getTp5DashboardColorTheme(config.tp5Visual?.colorTheme)

  return {
    '--tp5-dashboard-accent': theme.accent,
    '--tp5-dashboard-accent-text': theme.accentText,
    '--tp5-dashboard-accent-light': theme.accentLight
  }
}

const getTp5DashboardAccentPositionClass = (accentPosition?: string) =>
  ACCENT_POSITION_CLASSES[accentPosition === 'top' ? 'top' : 'left']

export const getTp5DashboardComponentClasses = (config: Tp5DashboardComponentConfig) => {
  const componentType = getTp5DashboardComponentType(config)

  if (!componentType) return []

  const classes = [BASE_CLASS, MODIFIER_CLASSES[componentType]]

  const styleClass = CALLOUT_STYLE_CLASSES[config.tp5Visual?.calloutStyle ?? '']
  if (styleClass) {
    classes.push(styleClass)
  }

  if (config.tp5Visual?.calloutStyle === 'drop-shadow') {
    classes.push(getTp5DashboardAccentPositionClass(config.tp5Visual?.accentPosition))
  }

  return classes
}
