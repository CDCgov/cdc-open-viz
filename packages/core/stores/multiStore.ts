import { StateCreator } from 'zustand'

interface WizardSlice {
  wizards: Record<string, WizardConfig>
}
interface WizardConfig {
  dashboardKeys: string[]
  // TODO: rest of dashboard config
}

interface DashboardSlice {
  dashboards: Record<string, DashboardConfig>
}

interface DashboardConfig {
  visualizationKeys: string[]
  // TODO: rest of dashboard config
}

interface VisualizationSlice {
  visualizations: Record<string, VisualizationConfig>
  addVisualization(key: string, config: VisualizationConfig): void
  removeVisualization(key: string): void
}

interface VisualizationConfig {
  // TODO: rest of viz config
}

const createVisualizationsSlice: StateCreator<VisualizationSlice> = set => ({
  visualizations: {},
  addVisualization(key, config) {
    set(state => ({ visualizations: { ...state.visualizations, [key]: config } }))
  },
  removeVisualization(key) {
    set(state => {
      delete state.visualizations[key]
      return { ...state }
    })
  }
})

// React Property sets

interface CoveConfigBase {
  theme: string
  title: string
  description: string
}
