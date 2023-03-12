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
import WaffleChart from './components/WaffleChart.jsx'

// Styles
import './scss/cove-waffle-chart.scss'

// Visualization
const CdcWaffleChart = visProps => {
  return (
    <ErrorBoundary component="CdcWaffleChart">
      <Suspense fallback={<RenderFallback/>}>
        <VisConfigProvider {...visProps} defaultConfig={defaults}>
          <View editorPanels={<EditorPanels/>}>
            <Component className="cove-waffle-chart">
              <WaffleChart/>
            </Component>
          </View>
        </VisConfigProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default CdcWaffleChart
