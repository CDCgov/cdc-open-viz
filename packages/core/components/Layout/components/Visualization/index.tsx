// main visualization wrapper
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import React, { forwardRef } from 'react'
import { Config as DataBiteConfig } from '@cdc/data-bite/src/types/Config'
import { Config as DataTableConfig } from '@cdc/data-table/src/types/Config'
import { Config as WaffleChartConfig } from '@cdc/waffle-chart/src/types/Config'
import { MarkupIncludeConfig } from '@cdc/core/types/MarkupInclude'
import { DashboardFilters } from '@cdc/dashboard/src/types/DashboardFilters'
import { MapConfig } from '@cdc/map/src/types/MapConfig'

// styles
import './visualizations.css'

type VisualizationWrapper = {
  children: React.ReactNode
  className?: string
  config: ChartConfig | DataBiteConfig | WaffleChartConfig | MarkupIncludeConfig | DashboardFilters | MapConfig | DataTableConfig
  currentViewport?: string
  imageId?: string
  isEditor: boolean
  showEditorPanel?: boolean
}

const Visualization = forwardRef<HTMLDivElement, VisualizationWrapper>((props, ref) => {
  const {
    config,
    isEditor = false,
    currentViewport = 'lg',
    imageId = '',
    showEditorPanel = true,
    className
  } = props

  const getWrappingClasses = () => {
    const { general, type } = config
    const classes = ['cdc-open-viz-module', currentViewport, general?.headerColor]

    if (className) {
      classes.push(className)
    }

    if (isEditor) {
      classes.push('spacing-wrapper', 'isEditor')
      classes.push(showEditorPanel ? 'editor-panel--visible' : 'editor-panel--hidden')
    }

    switch (type) {
      case 'filtered-text': {
        const { fontSize } = config
        classes.push('type-filtered-text', `font-${fontSize}`)
        return classes.filter(item => item !== 'cove-component__content')
      }

      case 'chart': {
        const { visualizationType } = config
        classes.push('type-chart')
        if (visualizationType === 'Spark Line') {
          classes.push('type-sparkline')
        }
        return classes
      }

      case 'map': {
        const { runtime } = config
        classes.push('type-map')
        if (runtime?.editorErrorMessage.length !== 0) {
          classes.push('type-map--has-error')
        }
        break
      }

      case 'data-bite': {
        const { fontSize } = config
        classes.push('type-data-bite', `font-${fontSize}`)
        if (isEditor) {
          classes.push('is-editor')
        }
        break
      }

      case 'markup-include':
        classes.push('markup-include')
        break

      case 'waffle-chart': {
        const { overallFontSize } = config
        classes.push('cove', 'type-waffle-chart', `font-${overallFontSize}`)
        if (isEditor) {
          classes.push('is-editor')
        }
        classes.push('cove-component', 'waffle-chart')
        break
      }
    }

    return classes
  }

  const { type } = config
  const isLollipopChart = type === 'chart' ? config.isLollipopChart : undefined

  return (
    <div
      {...(type === 'chart' ? { 'data-lollipop': isLollipopChart } : {})}
      className={getWrappingClasses().join(' ')}
      data-download-id={imageId}
      ref={ref}
    >
      {props.children}
    </div>
  )
})

export default Visualization
