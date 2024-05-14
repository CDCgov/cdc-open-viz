// main visualization wrapper
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import React, { forwardRef, useRef } from 'react'
import { Config as DataBiteConfig } from '@cdc/data-bite/src/types/Config'
import './visualizations.scss'
import { Config as WaffleChartConfig } from '@cdc/waffle-chart/src/types/Config'

type VisualizationWrapper = {
  config: ChartConfig | DataBiteConfig | WaffleChartConfig
  isEditor: boolean
  currentViewport: string
  imageId: string
  children: React.ReactNode
}

const Visualization: React.FC<VisualizationWrapper> = forwardRef((props, ref) => {
  const { config = {}, isEditor = false, currentViewport = 'lg', imageId = '', showEditorPanel = true } = props

  const getWrappingClasses = () => {
    let classes = ['cdc-open-viz-module', `${currentViewport}`, `font-${config?.fontSize}`, `${config?.theme}`]
    isEditor && classes.push('spacing-wrapper')
    isEditor && classes.push('isEditor')

    if (isEditor && showEditorPanel) {
      classes = classes.filter(item => item !== 'editor-panel--hidden')
      classes.push('editor-panel--visible')
    }

    if (isEditor && !showEditorPanel) {
      classes = classes.filter(item => item !== 'editor-panel--visible')
      classes.push('editor-panel--hidden')
    }

    if (config.type === 'chart') {
      classes.push('type-chart')
      config?.visualizationType === 'Spark Line' && classes.push(`type-sparkline`)
      return classes
    }
    if (config.type === 'map') {
      classes.push(`type-map`)
    }

    if (config.type === 'data-bite') {
      classes.push('cdc-open-viz-module', 'type-data-bite', currentViewport, config.theme, `font-${config.fontSize}`)
      if (isEditor) {
        classes.push('is-editor')
      }
    }

    if (config.type === 'filtered-text') {
      classes.push('cdc-open-viz-module', 'type-filtered-text', currentViewport, config.theme, `font-${config.fontSize}`)
      if (isEditor) {
        classes.push('is-editor')
      }
    }

    if (config.type === 'markup-include') {
      classes.push('markup-include', 'cdc-open-viz-module')
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
