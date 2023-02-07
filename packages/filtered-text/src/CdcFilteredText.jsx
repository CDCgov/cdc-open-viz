// Third Party
import parse from 'html-react-parser'

// Store
import { useConfigStore } from '@cdc/core/stores/configStore'

// Data
import defaults from './data/initial-state'

// Helpers
import filterDataByTextColumn from './helpers/filterDataByTextColumn'

// Components - Core
import Component from '@cdc/core/components/hoc/Component'
import ConfigProxy from '@cdc/core/components/hoc/ConfigProxy'
import ErrorBoundary from '@cdc/core/components/hoc/ErrorBoundary'
import View from '@cdc/core/components/hoc/View'

// Components - Local
import EditorPanels from './components/EditorPanels'

// Styles
import './scss/cove-filtered-text.scss'

// Visualization
const CdcFilteredText = ({ configObj, configUrl }) => {
  const { config } = useConfigStore()

  return (
    <ErrorBoundary component="CdcFilteredText">
      <ConfigProxy configObj={configObj} configUrl={configUrl} defaults={defaults}>
        <View EditorPanels={EditorPanels}>
          <Component className="cove-filtered-text">
            {filterDataByTextColumn(config.data, config.filters, config.textColumn)
              .slice(0, 1)
              .map((entry, i) => (
                <p key={i}>
                  {parse(entry[config.textColumn] || '')}
                </p>
              ))
            }
          </Component>
        </View>
      </ConfigProxy>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
