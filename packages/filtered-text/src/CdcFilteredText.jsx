import React, { Suspense } from 'react'

// Hooks
import { VisConfigProvider } from '@cdc/core/hooks/store/useVisConfig'

// Data
import defaults from './data/initial-state'

// Components - Core
import Component from '@cdc/core/components/hoc/Component'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import RenderFallback from '@cdc/core/components/loader/RenderFallback'
import View from '@cdc/core/components/hoc/View'

// Components - Local
import EditorPanels from './components/EditorPanels'
import FilteredText from './components/FilteredText'

// Styles
import './scss/cove-filtered-text.scss'

// Visualization
const CdcFilteredText = visProps => {
  return (
    <ErrorBoundary component="CdcFilteredText">
      <Suspense fallback={<RenderFallback/>}>
        <VisConfigProvider {...visProps} defaultConfig={defaults}>
          <View editorPanels={<EditorPanels/>}>
            <Component className="cove-filtered-text">
              <FilteredText/>
            </Component>
          </View>
        </VisConfigProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
