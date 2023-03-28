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
import GeoMap from './components/GeoMap'
import { transformCdcMapConfig } from './runtime'

import './scss/main.scss'
import './scss/btn.scss'

// <EditorPanel isDashboard={isDashboard} setRuntimeFilters={setRuntimeFilters} runtimeFilters={runtimeFilters} runtimeLegend={runtimeLegend} columnsInData={Object.keys(config.data[0])} />

// Visualization
const CdcMap = visProps => {
  return (
    <ErrorBoundary component='CdcMap'>
      <Suspense fallback={<RenderFallback />}>
        <VisConfigProvider {...visProps} defaultConfig={defaults} transformConfig={transformCdcMapConfig}>
          <View editorPanels={<EditorPanels />} isEditorComponent={visProps.isEditor}>
            <Component className='cove-markup-include'>
              <GeoMap />
            </Component>
          </View>
        </VisConfigProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default CdcMap
