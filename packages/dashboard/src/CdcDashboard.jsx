import React, { Suspense } from 'react'

// Hooks
import { VisConfigProvider } from '@cdc/core/hooks/store/useVisConfig'

// Data
import defaults from './data/initial-state'

// Components - Core
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import View from '@cdc/core/components/hoc/View'

// Components - Local
import Dashboard from './components/Dashboard'

// Styles
import './scss/cove-dashboard.scss'
import RenderFallback from '@cdc/core/components/loader/RenderFallback'

const CdcDashboard = visProps => {
  return (
    <ErrorBoundary component="CdcDashboard">
      <Suspense fallback={<RenderFallback/>}>
        <VisConfigProvider {...visProps} defaultConfig={defaults}>
          <View>
            <div className="cove">
              <Dashboard/>
            </div>
          </View>
        </VisConfigProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default CdcDashboard
