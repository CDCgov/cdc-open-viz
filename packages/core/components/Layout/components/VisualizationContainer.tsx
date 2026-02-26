import React, { forwardRef } from 'react'
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { Config as DataBiteConfig } from '@cdc/data-bite/src/types/Config'
import { Config as DataTableConfig } from '@cdc/data-table/src/types/Config'
import { Config as WaffleChartConfig } from '@cdc/waffle-chart/src/types/Config'
import { MarkupIncludeConfig } from '@cdc/core/types/MarkupInclude'
import { DashboardFilters } from '@cdc/dashboard/src/types/DashboardFilters'
import { MapConfig } from '@cdc/map/src/types/MapConfig'
import Responsive from './Responsive'
import Visualization from './Visualization'

type VisualizationContainerProps = {
  children: React.ReactNode
  className?: string
  config:
  | ChartConfig
  | DataBiteConfig
  | WaffleChartConfig
  | MarkupIncludeConfig
  | DashboardFilters
  | MapConfig
  | DataTableConfig
  currentViewport?: string
  editorPanel?: React.ReactNode
  imageId?: string
  isEditor: boolean
}

const VisualizationContainer = forwardRef<HTMLDivElement, VisualizationContainerProps>(
  ({ children, className, config, currentViewport, editorPanel, imageId, isEditor }, ref) => {
    return (
      <Visualization
        ref={ref}
        config={config}
        isEditor={isEditor}
        showEditorPanel={config?.showEditorPanel}
        currentViewport={currentViewport}
        imageId={imageId}
        className={className}
      >
        {isEditor && editorPanel}
        <Responsive isEditor={isEditor}>
          {children}
        </Responsive>
      </Visualization>
    )
  }
)

export default VisualizationContainer
