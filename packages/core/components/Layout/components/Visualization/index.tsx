// main visualization wrapper
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import React, { forwardRef, useRef } from 'react'

type VisualizationWrapper = {
  config: ChartConfig
  isEditor: boolean
  currentViewport: string
  imageId: string
  children: React.ReactNode
}

const Visualization: React.FC<VisualizationWrapper> = forwardRef((props, ref) => {
  const { config = {}, isEditor = false, currentViewport = 'lg', imageId = '' } = props

  const getWrappingClasses = () => {
    const classes = ['cdc-open-viz-module', `${currentViewport}`, `font-${config?.fontSize}`, `${config?.theme}`]
    isEditor && classes.push('spacing-wrapper')
    isEditor && classes.push('isEditor')
    if (config.type === 'chart') {
      classes.push('type-chart')
      config?.visualizationType === 'Spark Line' && classes.push(`type-sparkline`)
      return classes
    }
    if (config.type === 'map') {
      classes.push(`type-map`)
    }
    return classes
  }

  return (
    // prettier-ignore
    <div
      {...(config.type === 'chart' ? { 'data-lollipop': config.isLollipopChart } : {})}
      className={getWrappingClasses().join(' ')}
      data-download-id={imageId}
      ref={ref}
    >
      {props.children}
    </div>
  )
})

export default Visualization
