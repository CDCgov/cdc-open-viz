import React, { Suspense } from 'react'

// Hooks
import { useLoadConfig } from '@cdc/core/hooks/store/useLoadConfig'

// Data
import defaults from './data/initial-state'

// Components - Core
import Component from '@cdc/core/components/hoc/Component'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import RenderFallback from '@cdc/core/components/loader/RenderFallback'
import View from '@cdc/core/components/hoc/View'

// Components - Local
import EditorPanels from './components/EditorPanels'
import MarkupInclude from './components/MarkupInclude'

// Styles
import './scss/cove-markup-include.scss'

// Visualization
const CdcMarkupInclude = visualizationProps => {
  const [ isLoading ] = useLoadConfig(visualizationProps, defaults)

  return (
    <ErrorBoundary component="CdcMarkupInclude">
      <Suspense fallback={<RenderFallback/>}>
        {!isLoading &&
          <View editorPanels={<EditorPanels/>}>
            <Component className="cove-markup-include">
              <MarkupInclude/>
            </Component>
          </View>
        }
      </Suspense>
    </ErrorBoundary>
  )
}

export default CdcMarkupInclude
