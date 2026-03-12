// main visualization wrapper
import React, { forwardRef } from 'react'
import './visualizations.scss'
import type { AnyVisualization } from '@cdc/core/types/Visualization'

export type VisualizationShellConfig = Partial<AnyVisualization> & {
  type?: AnyVisualization['type'] | 'dashboard'
  theme?: string
  visual?: {
    highlightWrappers?: boolean
    whiteBackground?: boolean
  }
}

type VisualizationWrapper = {
  children: React.ReactNode
  className?: string
  config: VisualizationShellConfig
  currentViewport?: string
  imageId?: string
  isEditor: boolean
  showEditorPanel?: boolean
}

const Visualization = forwardRef<HTMLDivElement, VisualizationWrapper>((props, ref) => {
  const {
    config = {},
    isEditor = false,
    currentViewport = 'lg',
    imageId = '',
    showEditorPanel = true,
    className
  } = props

  const themeClass = config.type === 'map' ? config?.general?.headerColor || config?.theme : config?.theme

  const getWrappingClasses = () => {
    let classes = ['cove-visualization', 'cdc-open-viz-module', `${currentViewport}`, `${themeClass}`]

    if (className) {
      classes.push(className)
    }

    isEditor && classes.push('spacing-wrapper')
    isEditor && classes.push('is-editor')

    if (isEditor && showEditorPanel) {
      classes = classes.filter(item => item !== 'editor-panel--hidden')
      classes.push('editor-panel--visible')
    }

    if (isEditor && !showEditorPanel) {
      classes = classes.filter(item => item !== 'editor-panel--visible')
      classes.push('editor-panel--hidden')
    }

    if (isEditor && config.visual?.highlightWrappers) {
      classes.push('cove-highlight-wrappers')
    }

    if (config.type === 'filtered-text') {
      classes.push('type-filtered-text', `font-${config.fontSize}`)
      classes = classes.filter(item => item !== 'cove-visualization__body')
      return classes
    }

    if (config.type === 'dashboard') {
      classes.push('type-dashboard')
      return classes
    }

    if (config.type === 'chart') {
      classes.push('type-chart')
      config?.visualizationType === 'Spark Line' && classes.push(`type-sparkline`)
      return classes
    }

    if (config.type === 'map') {
      classes.push(`type-map`)
      if (config?.runtime?.editorErrorMessage?.length) classes.push('type-map--has-error')
      return classes
    }

    if (config.type === 'table') {
      classes.push('type-data-table')
      return classes
    }

    if (config.type === 'data-bite') {
      classes.push('type-data-bite', `font-${config.fontSize}`)
      return classes
    }

    if (config.type === 'markup-include') {
      classes.push('type-markup-include')
      if (config.contentEditor?.style === 'tp5') {
        classes.push('markup-include__style--tp5')
      }
      return classes
    }

    if (config.type === 'waffle-chart') {
      classes.push('type-waffle-chart', 'font-' + config.overallFontSize)

      if (config.visualizationType === 'TP5 Waffle') {
        classes.push('waffle__style--tp5')
        if (config.visual?.whiteBackground) {
          classes.push('white-background-style')
        }
      }

      if (config.visualizationType === 'TP5 Gauge') {
        classes.push('gauge__style--tp5')
        if (config.visual?.whiteBackground) {
          classes.push('white-background-style')
        }
      }

      return classes
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

Visualization.displayName = 'Visualization'

export default Visualization
