// main visualization wrapper
import React, { forwardRef } from 'react'
import './visualizations.scss'
import type { AnyVisualization } from '@cdc/core/types/Visualization'
import { getTp5DashboardComponentClasses } from '@cdc/core/helpers/tp5DashboardComponentClasses'

export type VisualizationShellConfig = Partial<AnyVisualization> & {
  type?: AnyVisualization['type'] | 'dashboard'
  theme?: string
  visual?: {
    highlightWrappers?: boolean
  }
  tp5Visual?: {
    calloutStyle?: 'callout' | 'thin-border' | 'drop-shadow'
    valueAboveMessage?: boolean
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
      classes.push(...getTp5DashboardComponentClasses(config))
      return classes
    }

    if (config.type === 'markup-include') {
      classes.push('type-markup-include')
      classes.push(...getTp5DashboardComponentClasses(config))
      return classes
    }

    if (config.type === 'waffle-chart') {
      classes.push('type-waffle-chart', 'font-' + config.overallFontSize)
      const tp5Classes = getTp5DashboardComponentClasses(config)
      classes.push(...tp5Classes)
      if (config.visualizationType === 'TP5 Gauge' && config.tp5Visual?.valueAboveMessage) {
        classes.push('tp5-dashboard-component--value-above-message')
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
