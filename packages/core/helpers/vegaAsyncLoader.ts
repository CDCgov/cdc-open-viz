// Async loader for Vega and Vega-Lite packages to reduce main bundle size
let vegaParsePromise: Promise<any> | null = null
let vegaViewPromise: Promise<any> | null = null
let vegaLitePromise: Promise<any> | null = null

const loadVegaParse = async () => {
  if (!vegaParsePromise) {
    vegaParsePromise = import(/* webpackChunkName: "vega-parser" */ 'vega-parser')
  }
  const vegaParseModule = await vegaParsePromise
  return vegaParseModule.parse
}

const loadVegaView = async () => {
  if (!vegaViewPromise) {
    vegaViewPromise = import(/* webpackChunkName: "vega-view" */ 'vega-view')
  }
  const vegaViewModule = await vegaViewPromise
  return vegaViewModule.View
}

export const loadVegaModules = async () => {
  const [vegaParse, vegaView] = await Promise.all([loadVegaParse(), loadVegaView()])
  return {
    vegaParse: vegaParse,
    vegaView: vegaView
  }
}

export const loadVegaLiteModules = async () => {
  if (!vegaLitePromise) {
    vegaLitePromise = import(/* webpackChunkName: "vega-lite" */ 'vega-lite')
  }
  const vegaLiteModule = await vegaLitePromise
  return {
    vegaLiteCompile: vegaLiteModule.compile
  }
}
