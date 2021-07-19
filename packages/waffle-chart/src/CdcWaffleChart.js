import React, { useEffect, useState } from 'react'

import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import Loading from '@cdc/core/components/Loading'
import ResizeObserver from 'resize-observer-polyfill'
import Context from './context'
import './scss/main.scss'

const canvas = React.createRef()

const themeColor = {
  'theme-blue': '#005eaa',
  'theme-purple': '#712177',
  'theme-brown': '#705043',
  'theme-teal': '#00695c',
  'theme-pink': '#af4448',
  'theme-orange': '#bb4d00',
  'theme-slate': '#29434e',
  'theme-indigo': '#26418f',
  'theme-cyan': '#006778',
  'theme-green': '#4b830d',
  'theme-amber': '#fbab18',
}

const WaffleChart = ({ config, data, color = '#ffdc9b', spacer, radius }) => {

  let {
    title,
    theme,
    prefix,
    suffix,
    subtext,
    content
  } = config

  const ratio = (10 * (radius * 2)) + (9 * spacer)

  const calculatePos = (axis, index) => {
    let mod = axis === 'x' ? index % 10 : axis === 'y' ? Math.floor(index / 10) : null
    return mod > 0 ? (mod * ((radius * 2) + spacer)) + radius : radius
  }

  const drawCircle = (ctx, x, y, fill = color, active = false, stroke = false, strokeWidth = 0) => {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)

    if (!active) ctx.globalAlpha = 0.35

    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }

    if (!active) ctx.globalAlpha = 1

    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
  }

  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    ctx.width = ratio
    ctx.height = ratio

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    for (let i = 0; i <= 100; i++) {
      drawCircle(ctx, calculatePos('x', i), calculatePos('y', i), themeColor[theme], i + 1 > (100 - Math.round(data)))
    }
  })

  return (
    <section className={`cdc-waffle-chart ${theme}${config.fontSize ? ' font-' + config.fontSize : ''}`}>
      <div className="cdc-waffle-chart__header">{title}</div>
      <div className="cdc-waffle-chart__inner-container">
        <div className="cdc-waffle-chart__chart">
          <canvas ref={canvas} width={ratio} height={ratio}/>
        </div>
        <div className="cdc-waffle-chart__data">
          <div className="cdc-waffle-chart__data--primary" style={{ color: themeColor[theme] }}>
            {prefix ? prefix : null}{data}{suffix ? suffix : null}
          </div>
          <div className="cdc-waffle-chart__data--text" style={{ color: themeColor[theme] }}>{content}</div>
        </div>
      </div>
      <div className="cdc-waffle-chart__subtext">
        {subtext}
      </div>
    </section>
  )
}

const CdcWaffleChart = (
  {
    configUrl,
    config: configObj,
    isDashboard = false,
    isEditor = false,
    setConfig: setParentConfig
  }
) => {
  const [ config, setConfig ] = useState({})
  const [ loading, setLoading ] = useState(true)

  const getViewport = size => {
    let result = 'lg'

    const viewports = {
      'lg': 1200,
      'md': 992,
      'sm': 768,
      'xs': 576,
      'xxs': 350
    }

    if (size > 1200) return result

    for (let viewport in viewports) {
      if (size <= viewports[viewport]) {
        result = viewport
      }
    }

    return result
  }

  const [ currentViewport, setCurrentViewport ] = useState('lg')

  //Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width)
      setCurrentViewport(newViewport)
    }
  })

  const updateConfig = (newConfig) => {
    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    newConfig.runtime.uniqueId = Date.now()

    //Check things that are needed and set error messages if needed
    newConfig.runtime.editorErrorMessage = ''
    setConfig(newConfig)
  }

  useEffect(() => {
    const loadData = async () => {
      let response = configObj || await (await fetch(configUrl)).json()

      // If data is included through a URL, fetch that and store
      let responseData = response.data ?? {}

      if (response.dataUrl) {
        const dataString = await fetch(response.dataUrl)
        responseData = await dataString.json()
      }

      response.data = responseData

      updateConfig({ ...defaults, ...response })
    }

    loadData().then(r => setLoading(false))
  }, [ configObj, configUrl ])

  let body = (<Loading/>)

  if (loading === false) {
    let classList = []

    classList.push(config.theme)

    body = (
      <div className={`cdc-open-viz-module type-waffle-chart${classList.length > 0 ? ' ' + classList.join(' '): ''}`}
           style={isEditor ? { paddingLeft: 350 + 'px' } : null}>
        {isEditor && <EditorPanel/>}
        <WaffleChart config={config} data={94.5} spacer={1} radius={6}/>
      </div>
    )
  }

  return (
    <Context.Provider value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard }}>
      {body}
    </Context.Provider>
  )
}

export default CdcWaffleChart

export const DATA_FUNCTION_MAX = 'Max'
export const DATA_FUNCTION_COUNT = 'Count'
export const DATA_FUNCTION_MEAN = 'Mean (Average)'
export const DATA_FUNCTION_MEDIAN = 'Median'
export const DATA_FUNCTION_MIN = 'Min'
export const DATA_FUNCTION_MODE = 'Mode'
export const DATA_FUNCTION_RANGE = 'Range'
export const DATA_FUNCTION_SUM = 'Sum'
export const DATA_FUNCTIONS = [
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_RANGE,
  DATA_FUNCTION_SUM
]

export const BITE_LOCATION_TITLE = 'title'
export const BITE_LOCATION_BODY = 'body'
export const BITE_LOCATION_GRAPHIC = 'graphic'
export const BITE_LOCATIONS =
  {
    'title': 'As a title in the body',
    'body': 'At the beginning of the body text',
    'graphic': 'As a graphic'
  }
