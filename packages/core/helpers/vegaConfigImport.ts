/**
 * Shared Vega-to-COVE conversion helper for stories.
 */
import {
  convertVegaConfig,
  getVegaConfigType,
  getVegaErrors,
  getVegaWarnings,
  isVegaConfig,
  parseVegaConfig
} from './vegaConfig'

/** Chart-type "button" definitions used to seed new COVE configs. */
const buttons = [
  {
    id: 1,
    category: 'Charts',
    label: 'Bar',
    type: 'chart',
    subType: 'Bar',
    orientation: 'vertical',
    barThickness: '0.37',
    visualizationSubType: 'regular',
    xAxis: { type: 'categorical', size: 75, maxTickRotation: 45, labelOffset: 0 },
    content: 'Use bars to show comparisons between data categories.'
  },
  {
    id: 3,
    category: 'Charts',
    label: 'Combo Chart',
    type: 'chart',
    subType: 'Combo',
    orientation: 'vertical',
    content: 'Use bars to show comparisons between data categories.'
  },
  {
    id: 4,
    category: 'Charts',
    label: 'Line',
    type: 'chart',
    subType: 'Line',
    orientation: 'vertical',
    content: 'Present one or more data trends over time.'
  },
  {
    id: 6,
    category: 'Charts',
    label: 'Area Chart',
    type: 'chart',
    subType: 'Area Chart',
    orientation: 'vertical',
    content: 'Display an area chart to visualize quantities over time.'
  },
  {
    id: 8,
    category: 'Charts',
    label: 'Scatter Plot',
    type: 'chart',
    subType: 'Scatter Plot',
    orientation: 'vertical',
    content: 'Display a scatter plot to explore relationships between numeric variables.'
  },
  {
    id: 12,
    category: 'Charts',
    label: 'Horizontal Bar (Stacked)',
    type: 'chart',
    subType: 'Bar',
    visualizationSubType: 'stacked',
    orientation: 'horizontal',
    content: 'Use bars to show comparisons between data categories.'
  },
  {
    id: 19,
    category: 'Maps',
    label: 'United States (State- or County-Level)',
    type: 'map',
    subType: 'us',
    content: 'Present a U.S. choropleth map at state or county level.',
    position: 'right'
  }
]

/** Build a seed COVE config from a button definition. */
const generateNewConfig = (props: any) => {
  let newConfig: any = {}
  switch (props.category) {
    case 'Charts': {
      const visualizationType = props.subType
      const visualizationSubType = !props.visualizationSubType ? 'regular' : props.visualizationSubType
      newConfig = {
        ...props,
        visualizationType,
        visualizationSubType,
        newViz: true,
        datasets: {}
      }
      break
    }
    case 'Maps': {
      newConfig = { ...props, newViz: true, datasets: {}, type: 'map' }
      newConfig['general'] = { geoType: props.subType, type: props?.generalType }
      break
    }
  }
  return newConfig
}

/**
 * Convert a raw Vega/Vega-Lite config into a COVE config.
 * Returns `null` if the config has errors.
 */
export const importVegaConfig = async (rawConfig: any): Promise<any | null> => {
  const vegaConfig = await parseVegaConfig(rawConfig)
  const vegaErrors = getVegaErrors(rawConfig, vegaConfig)
  if (vegaErrors.length > 0) {
    console.warn('Vega import errors:', vegaErrors)
    return null
  }

  const configType = getVegaConfigType(vegaConfig)
  const configSubType = configType === 'Map' ? 'United States (State- or County-Level)' : configType
  const button = buttons.find(b => b.label === configSubType)
  if (!button) {
    console.warn(`No button found for config type "${configSubType}"`)
    return null
  }

  const coveConfig = generateNewConfig(JSON.parse(JSON.stringify(button)))
  try {
    const warnings = getVegaWarnings(rawConfig, vegaConfig)
    if (warnings.length) {
      console.warn('Vega import warnings:', warnings)
    }
    const result = convertVegaConfig(configType, vegaConfig, coveConfig)

    // Ensure imported Vega configs use the v1 qualitative palette so CdcChart
    // doesn't apply v2 sequential-blue defaults (which would change the colors).
    if (result && result.type !== 'map') {
      result.general = result.general || {}
      result.general.palette = {
        name: 'qualitative-bold',
        version: '1.0'
      }
    }

    return result
  } catch (err) {
    console.error('Vega conversion error:', err)
    return null
  }
}

/** Check if a config is a Vega config and convert it; otherwise pass through. */
export const maybeConvertVega = async (config: any): Promise<any | null> => {
  if (isVegaConfig(config)) {
    return importVegaConfig(config)
  }
  return config
}
