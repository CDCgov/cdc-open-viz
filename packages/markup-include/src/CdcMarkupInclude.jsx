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
const CdcMarkupInclude = visualizationProps => {
  console.log('render')
  return (
    <ErrorBoundary component='CdcMarkupInclude'>
      <View editorPanels={<EditorPanels {...visualizationProps} />}>
        <MarkupInclude {...visualizationProps} />
      </View>
    </ErrorBoundary>
  )
}

export default CdcMarkupInclude
