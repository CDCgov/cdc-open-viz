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
import DataBite from './components/DataBite'
import EditorPanels from './components/EditorPanels'

// Styles
import './scss/cove-data-bite.scss'

// Visualization
const CdcDataBite = visProps => {
  return (
    <ErrorBoundary component="CdcDataBite">
      <Suspense fallback={<RenderFallback/>}>
        <VisConfigProvider {...visProps} defaultConfig={defaults}>
          <View editorPanels={<EditorPanels/>}>
            <Component className="cove-data-bite">
              <DataBite/>
            </Component>
          </View>
        </VisConfigProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default CdcDataBite
