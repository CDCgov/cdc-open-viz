import React, { useEffect } from 'react'

// Context
import { ConfigContextProvider } from '@cdc/core/context/ConfigContext'

// Data
import defaults from './data/initial-state'

// Hooks
import useLoadConfig from '@cdc/core/hooks/useLoadConfig'

// Components - Core
import Editor from '@cdc/core/components/Editor'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Ghost from '@cdc/core/components/elements/Ghost'

// Components - Local
import Dashboard from './components/Dashboard'
import EditorPanels from './components/EditorPanels'

// Styles
//import './scss/cove-markup-include.scss'

// Visualization
const DataProxy = ({ configObj, configUrlObj, setParentConfig, editorMode, isConsumed }) => {
  const [ loadingConfig, reloadConfig ] = useLoadConfig(configObj, configUrlObj, defaults)

  useEffect(() => {
    reloadConfig()
  }, [ configObj, configUrlObj ])

  return (<>
    {isConsumed ?
      <>
        {loadingConfig ?
          <Ghost display="editor"/> :
          <Editor EditorPanels={EditorPanels} setParentConfig={setParentConfig}>
            <Dashboard/>
          </Editor>
        }
      </> :
      <>
        {editorMode ?
          <>
            {loadingConfig ?
              <Ghost display="editor"/> :
              <Editor EditorPanels={EditorPanels}>
                <Dashboard/>
              </Editor>
            }
          </> :
          <>
            {loadingConfig ?
              <></> :
              <Dashboard/>
            }
          </>
        }
      </>
    }
  </>)
}

// Visualization
const CdcDashboard = ({ configObj, configUrlObj, setParentConfig, editorMode, isConsumed }) => {
  return (
    <ErrorBoundary component="CdcMarkupInclude">
      <ConfigContextProvider>
        <DataProxy configObj={configObj} configUrlObj={configUrlObj} setParentConfig={setParentConfig} editorMode={editorMode} isConsumed={isConsumed}/>
      </ConfigContextProvider>
    </ErrorBoundary>
  )
}

export default CdcDashboard
