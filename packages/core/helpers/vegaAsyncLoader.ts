// Async loader for Vega and Vega-Lite packages to reduce main bundle size
let vegaPromise: Promise<typeof import('vega')> | null = null
let vegaLitePromise: Promise<typeof import('vega-lite')> | null = null

export const loadVega = async () => {
  if (!vegaPromise) {
    vegaPromise = import(/* webpackChunkName: "vega" */ 'vega')
  }
  return vegaPromise
}

export const loadVegaLite = async () => {
  if (!vegaLitePromise) {
    vegaLitePromise = import(/* webpackChunkName: "vega-lite" */ 'vega-lite')
  }
  return vegaLitePromise
}

export const loadVegaModules = async () => {
  const [vega, vegaLite] = await Promise.all([loadVega(), loadVegaLite()])
  return {
    vegaParse: vega.parse,
    vegaView: vega.View,
    vegaLiteCompile: vegaLite.compile
  }
}
