import React, { useEffect } from 'react'

//Context
import { useGlobalContext } from '@cdc/core/context/GlobalContext'
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Data
import defaults from './data/initial-state'

//Hooks
import useLoadConfig from '@cdc/core/hooks/useLoadConfig'
import useChartCreateRuntime from './hooks/useChartCreateRuntime'

//Components - Core
import Editor from '@cdc/core/components/Editor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

//Components - Local
import Chart from './components/Chart'
import EditorPanels from './components/EditorPanels'

import './scss/cove-chart.scss'

//Visualization
const CdcChart = ({ configObj, configUrlObj }) => {
  const { view } = useGlobalContext()
  const { config } = useConfigContext()

  const [ loadingConfig, reloadConfig ] = useLoadConfig(configObj, configUrlObj, defaults, useChartCreateRuntime)

  useEffect(() => {
    reloadConfig()
  }, [ configObj, configUrlObj ])

  return (
    <ErrorBoundary component="CdcChart">
      <>
        {loadingConfig ?
          <p>Build skeleton here</p> :
          <>
            {view === 'editor' ?
              <>
                <Editor EditorPanels={EditorPanels}>
                  <Chart config={config}/>
                </Editor>
              </> :
              <Chart/>
            }
          </>
        }
      </>
    </ErrorBoundary>
  )
}

export default CdcChart
