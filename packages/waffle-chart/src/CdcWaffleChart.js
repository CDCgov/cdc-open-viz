import React, { useEffect, useState } from 'react'

import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import Loading from '@cdc/core/components/Loading'
import ResizeObserver from 'resize-observer-polyfill'
import Context from './context'
import './scss/main.scss'

let chartText = 'of cases occurred at home/apartment'
const canvas = React.createRef()

const WaffleChart = ({ data, isEditor, color = '#B0BBDB', highlight = '#33437B', spacer, radius }) => {
  const ratio = (10 * (radius * 2)) + (9 * spacer)

  const calculatePos = (axis, index) => {
    let mod = axis === 'x' ? index % 10 : axis === 'y' ? Math.floor(index / 10) : null
    return mod > 0 ? (mod * ((radius * 2) + spacer)) + radius : radius
  }

  const drawCircle = (ctx, x, y, fill = color, stroke = false, strokeWidth = 0) => {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
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

    for (let i = 0; i <= 100; i++) {
      drawCircle(ctx, calculatePos('x', i), calculatePos('y', i), i + 1 <= (100 - Math.round(data)) ? color : highlight)
    }
  })

  return (
    <section className={'cdc-waffle-chart'} style={isEditor ? {paddingLeft: 350 + 'px'} : null}>
      <div className="cdc-waffle-chart__chart">
        <canvas ref={canvas} width={ratio} height={ratio}/>
      </div>
      <div className="cdc-waffle-chart__data">
        <div className="cdc-waffle-chart__data--primary" style={{ color: highlight }}>{data + '%'}</div>
        <div className="cdc-waffle-chart__data--text" style={{ color: highlight }}>{chartText}</div>
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

  const {
    title,
    filters,
    subtext
  } = config

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

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json()

    // If data is included through a URL, fetch that and store
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)
      responseData = await dataString.json()
    }

    response.data = responseData

    updateConfig({ ...defaults, ...response })
    setLoading(false)
  }

  useEffect(() => {
    loadConfig()
  }, [])

  let body = (<Loading/>)

  if (loading === false) {
    let classList = []

    classList.push(config.theme)

    body = (
      <div className={'cdc-open-viz-module type-waffle-chart'}>
        {isEditor && <EditorPanel/>}
        <WaffleChart data={78} spacer={1} radius={6} isEditor={isEditor}/>
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

/* Constant */
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
  'title'
:
  'As a title in the body',
    'body'
:
  'At the beginning of the body text',
    'graphic'
:
  'As a graphic'
}


export const IMAGE_POSITION_LEFT = 'Left'
export const IMAGE_POSITION_RIGHT = 'Right'
export const IMAGE_POSITION_TOP = 'Top'
export const IMAGE_POSITION_BOTTOM = 'Bottom'
export const IMAGE_POSITIONS = [
  IMAGE_POSITION_LEFT,
  IMAGE_POSITION_RIGHT,
  IMAGE_POSITION_TOP,
  IMAGE_POSITION_BOTTOM,
]

