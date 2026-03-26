import React, { forwardRef } from 'react'
import Responsive from './Responsive'
import Visualization, { type VisualizationShellConfig } from './Visualization'

type VisualizationContainerProps = {
  children: React.ReactNode
  className?: string
  config: VisualizationShellConfig
  currentViewport?: string
  editorPanel?: React.ReactNode
  imageId?: string
  isEditor: boolean
  renderResponsive?: boolean
}

const VisualizationContainer = forwardRef<HTMLDivElement, VisualizationContainerProps>(
  ({ children, className, config, currentViewport, editorPanel, imageId, isEditor, renderResponsive = true }, ref) => {
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
        {renderResponsive ? <Responsive isEditor={isEditor}>{children}</Responsive> : children}
      </Visualization>
    )
  }
)

VisualizationContainer.displayName = 'VisualizationContainer'

export default VisualizationContainer
