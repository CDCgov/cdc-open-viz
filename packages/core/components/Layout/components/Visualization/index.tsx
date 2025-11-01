// main visualization wrapper
import React, { forwardRef } from 'react'
import { BaseVisualizationConfig } from '../../../../types/BaseVisualizationConfig'

// styles
import './visualizations.scss'

interface VisualizationWrapper {
  children: React.ReactNode
  config: BaseVisualizationConfig & {
    // Additional properties that may exist on specific visualization configs
    fontSize?: string
    overallFontSize?: string
    isLollipopChart?: boolean
    runtime?: {
      editorErrorMessage?: string | any[]
    }
  }
  currentViewport?: string
  imageId?: string
  isEditor: boolean
  showEditorPanel?: boolean
  className?: string
}

const Visualization = forwardRef<HTMLDivElement, VisualizationWrapper>((props, ref) => {
  const {
    config = { type: '' },
    isEditor = false,
    currentViewport = 'lg',
    imageId = '',
    showEditorPanel = true,
    className
  } = props

  const getWrappingClasses = () => {
    let classes = ['cdc-open-viz-module', `${currentViewport}`, `${config?.theme}`]

    if (className) {
      classes.push(className)
    }

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

    if (config.type === 'filtered-text') {
      classes.push('type-filtered-text', `font-${config.fontSize}`)
      classes = classes.filter(item => item !== 'cove-component__content')
      return classes
    }

    if (config.type === 'chart') {
      classes.push('type-chart')
      config?.visualizationType === 'Spark Line' && classes.push(`type-sparkline`)
      return classes
    }
    if (config.type === 'map') {
      classes.push(`type-map`)
      if (config?.runtime?.editorErrorMessage.length !== 0) classes.push('type-map--has-error')
    }

    if (config.type === 'data-bite') {
      classes.push('cdc-open-viz-module', 'type-data-bite', currentViewport, config.theme, `font-${config.fontSize}`)
      if (isEditor) {
        classes.push('is-editor')
      }
    }

    if (config.type === 'markup-include') {
      classes.push('markup-include', 'cdc-open-viz-module')
    }

    if (config.type === 'waffle-chart') {
      classes.push(
        'cove',
        'cdc-open-viz-module',
        'type-waffle-chart',
        currentViewport,
        config.theme,
        'font-' + config.overallFontSize
      )

      if (isEditor) {
        classes.push('is-editor')
      }

      classes.push('cove-component', 'waffle-chart')
    }
    return classes
  }

  return (
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
