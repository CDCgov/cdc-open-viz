import React from 'react'

// Data
import defaults from './data/initial-state'

// Components - Core
import Component from '@cdc/core/components/hoc/Component'
import ConfigProxy from '@cdc/core/components/hoc/ConfigProxy'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import View from '@cdc/core/components/hoc/View'

// Components - Local
import DataBite from './components/DataBite'
import EditorPanels from './components/EditorPanels'

// Styles
import './scss/cove-data-bite.scss'

// Visualization
const CdcDataBite = ({ config: configObj, configUrl, setConfig: setWizardConfig, isWizard = false }) => {
  return (
    <ErrorBoundary component="CdcDataBite">
      <ConfigProxy configObj={configObj} configUrl={configUrl} setWizardConfig={setWizardConfig} defaults={defaults}>
        <View EditorPanels={EditorPanels} isWizard={isWizard}>
          <Component className="cove-data-bite">
            <DataBite/>
          </Component>
        </View>
      </ConfigProxy>
    </ErrorBoundary>
  )
}

export default CdcDataBite
