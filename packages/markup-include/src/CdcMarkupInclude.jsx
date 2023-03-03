import React from 'react'

// Data
import defaults from './data/initial-state'

// Components - Core
import Component from '@cdc/core/components/hoc/Component'
import ConfigProxy from '@cdc/core/components/hoc/ConfigProxy'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import View from '@cdc/core/components/hoc/View'

// Components - Local
import EditorPanels from './components/EditorPanels'
import MarkupInclude from './components/MarkupInclude'

// Styles
import './scss/cove-markup-include.scss'

// Visualization
const CdcMarkupInclude = ({ config: configObj, configUrl, visualizationKey }) => {
  return (
    <ErrorBoundary component="CdcMarkupInclude">
        <ConfigProxy configObj={configObj} configUrl={configUrl} defaults={defaults} visualizationKey={visualizationKey}>
          <View editorPanels={<EditorPanels/>}>
            <Component className="cove-markup-include">
              <MarkupInclude/>
            </Component>
          </View>
        </ConfigProxy>
    </ErrorBoundary>
  )
}

export default CdcMarkupInclude
