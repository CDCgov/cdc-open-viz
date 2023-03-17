import React, { Suspense } from 'react'

// Hooks
import { VisConfigProvider } from '@cdc/core/hooks/store/useVisConfig'

// Runtime
import { transformCdcChartConfig } from './runtime'

// Data
import defaults from './data/initial-state'

// Components - Core
import Component from '@cdc/core/components/hoc/Component'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import RenderFallback from '@cdc/core/components/loader/RenderFallback'
import View from '@cdc/core/components/hoc/View'

// Components - Local
import EditorPanels from './components/EditorPanels'
import Chart from './components/Chart'

// Styles
import './scss/main.scss'
import './scss/cove-chart.scss'

// Visualization
const CdcChart = visProps => {
  return (
    <ErrorBoundary component='CdcChart'>
      <Suspense fallback={<RenderFallback />}>
        <VisConfigProvider {...visProps} defaultConfig={defaults} transformConfig={transformCdcChartConfig}>
          <View editorPanels={<EditorPanels />}>
            <Component className='cove-chart'>
              <Chart />
            </Component>
          </View>
        </VisConfigProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default CdcChart
