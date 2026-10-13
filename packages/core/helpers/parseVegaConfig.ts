import { compile as vegaLiteCompile } from 'vega-lite'

export const parseVegaConfig = vegaConfig => {
  try {
    vegaConfig = vegaLiteCompile(vegaConfig).spec
  } catch {}
  return vegaConfig
}
