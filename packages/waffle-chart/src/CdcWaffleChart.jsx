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
import WaffleChart from './components/WaffleChart.jsx'

// Styles
import './scss/cove-waffle-chart.scss'

// Visualization
const CdcWaffleChart = ({ config: configObj, configUrl, setConfig: setWizardConfig, isWizard }) => {
  return (
    <ErrorBoundary component="CdcWaffleChart">
      <ConfigProxy configObj={configObj} configUrl={configUrl} setWizardConfig={setWizardConfig} defaults={defaults}>
        <View EditorPanels={EditorPanels} isWizard={isWizard}>
          <Component className="cove-waffle-chart">
            <WaffleChart/>
          </Component>
        </View>
      </ConfigProxy>
    </ErrorBoundary>
  )
}

export default CdcWaffleChart
