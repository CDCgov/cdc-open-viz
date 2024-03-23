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

    if (config.type === 'data-bite') {
      classes.push('cove', 'cdc-open-viz-module', 'type-data-bite', currentViewport, config.theme, `font-${config.fontSize}`)
      if (isEditor) {
        classes.push('is-editor')
      }
    }

    if (config.type === 'markup-include') {
      classes.push('markup-include', 'cove')
    }

    if (config.type === 'waffle-chart') {
      classes.push('cove', 'cdc-open-viz-module', 'type-waffle-chart', currentViewport, config.theme, 'font-' + config.overallFontSize)

      if (isEditor) {
        classes.push('is-editor')
      }

      classes.push('cove-component', 'waffle-chart')
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
