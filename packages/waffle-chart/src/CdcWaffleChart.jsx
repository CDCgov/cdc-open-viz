import React, { useEffect } from 'react'

// Context
import { useGlobalContext } from '@cdc/core/context/GlobalContext'

// Data
import defaults from './data/initial-state'

// Hooks
import useLoadConfig from '@cdc/core/hooks/useLoadConfig'

// Components - Core
import Editor from '@cdc/core/components/Editor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Ghost from '@cdc/core/components/elements/Ghost'

// Components - Local
import WaffleChart from './components/WaffleChart'
import EditorPanels from './components/EditorPanels'

// Styles
import './scss/cove-waffle-chart.scss'

// Visualization
const CdcWaffleChart = ({ configObj, configUrlObj }) => {
  const { view } = useGlobalContext()

  const [ loadingConfig, reloadConfig ] = useLoadConfig(configObj, configUrlObj, defaults)

  useEffect(() => {
    reloadConfig()
  }, [ configObj, configUrlObj ])

  return (
    <ErrorBoundary component="CdcWaffleChart">
      {view === 'editor' ?
        <>
          {loadingConfig ?
            <Ghost display="editor"/> :
            <Editor EditorPanels={EditorPanels}>
              <WaffleChart/>
            </Editor>
          }
        </> :
        <>
          {loadingConfig ?
            <></> :
            <WaffleChart/>
          }
        </>
      }
    </ErrorBoundary>
  )
}


export default CdcWaffleChart
