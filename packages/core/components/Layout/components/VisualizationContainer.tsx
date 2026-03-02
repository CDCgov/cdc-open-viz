import React, { forwardRef } from 'react'
import type { AnyVisualization } from '@cdc/core/types/Visualization'
import Responsive from './Responsive'
import Visualization from './Visualization'

type VisualizationContainerProps = {
  children: React.ReactNode
  className?: string
  config: AnyVisualization
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

VisualizationContainer.displayName = 'VisualizationContainer'

export default VisualizationContainer
