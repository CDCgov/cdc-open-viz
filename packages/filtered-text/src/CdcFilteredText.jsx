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
import FilteredText from './components/FilteredText'

// Styles
import './scss/cove-filtered-text.scss'

// Visualization
const CdcFilteredText = ({ config: configObj, configUrl, setConfig: setWizardConfig, isWizard = false }) => {
  return (
    <ErrorBoundary component="CdcFilteredText">
      <ConfigProxy configObj={configObj} configUrl={configUrl} setWizardConfig={setWizardConfig} defaults={defaults}>
        <View EditorPanels={EditorPanels} isWizard={isWizard}>
          <Component className="cove-filtered-text">
            <FilteredText/>
          </Component>
        </View>
      </ConfigProxy>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
