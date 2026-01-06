import React, { forwardRef } from 'react'
import VisualizationWrapper from '../Layout/components/Visualization'
import Responsive from '../Layout/components/Responsive'
import { Visualization } from '../../types/Visualization'



export interface CoveComponentWrapperProps {
  // Core props
  config: Visualization
  isEditor: boolean
  children: React.ReactNode

  // Editor panel
  EditorPanel?: React.ComponentType<any>
  editorPanelProps?: Record<string, any>

  // Customization
  innerContainerClassName?: string | string[]
  skipInnerContainer?: boolean

  // VisualizationWrapper pass-through
  currentViewport?: string
  imageId?: string
  showEditorPanel?: boolean
}

const CoveComponentWrapper = forwardRef<HTMLDivElement, CoveComponentWrapperProps>(
  (
    {
      config,
      isEditor,
      children,
      EditorPanel,
      editorPanelProps = {},
      innerContainerClassName = 'cove-component__content',
      skipInnerContainer = false,
      currentViewport,
      imageId,
      showEditorPanel
    },
    ref
  ) => {
    // Build inner container class names
    const getInnerClasses = () => {
      if (skipInnerContainer) return null

      const baseClasses = Array.isArray(innerContainerClassName)
        ? innerContainerClassName
        : [innerContainerClassName]

      return baseClasses.join(' ')
    }

    // Render content with optional inner container
    const renderContent = () => {
      if (skipInnerContainer) {
        return children
      }

      return (
        <div className={getInnerClasses()}>
          {children}
        </div>
      )
    }

    return (
      <VisualizationWrapper
        config={config}
        isEditor={isEditor}
        ref={ref}
        currentViewport={currentViewport}
        imageId={imageId}
        showEditorPanel={showEditorPanel}
      >
        {isEditor && EditorPanel && <EditorPanel {...editorPanelProps} />}
        <Responsive isEditor={isEditor}>
          {renderContent()}
        </Responsive>
      </VisualizationWrapper>
    )
  }
)

CoveComponentWrapper.displayName = 'CoveComponentWrapper'

export default CoveComponentWrapper
