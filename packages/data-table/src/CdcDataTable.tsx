import { useCallback, useEffect, useReducer } from 'react'

import DataTable from '@cdc/core/components/DataTable'
import { TableConfig } from '@cdc/core/components/DataTable/types/TableConfig'
import Filters from '@cdc/core/components/Filters'
import Layout from '@cdc/core/components/Layout'
import Loading from '@cdc/core/components/Loading'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { filterVizData } from '@cdc/core/helpers/filterVizData'
import getViewport from '@cdc/core/helpers/getViewport'
import { Visualization } from '@cdc/core/types/Visualization'

import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state.js'
import { processData } from './helpers/dataHelpers'
import { getInitialState, reducer, State } from './store/dataTable.reducer'
import { Config } from './types/Config'

type CdcDataTableProps = {
  config?: Config
  configUrl?: string
  isEditor: boolean
}

const CdcDataTable = ({ config: configObj, configUrl, isEditor }: CdcDataTableProps) => {
  /* STORE */
  const initialState = getInitialState(isEditor)
  const [state, dispatch] = useReducer(reducer, initialState)

  /* STATES */
  const { config, showEditorPanel, columns, data, table, filters, currentViewport, filterIntro, filterBehavior } =
    state as State

  /* CONFIG VARS */
  const { data: inputData, dataUrl, dataDescription } = config || {}
  const { label, indexLabel, expanded } = table || {}

  /* FILTERED DATA */
  const filteredData = data ? filterVizData(filters, data) : []

  /* LOADING VARS */
  const configLoading = configUrl && config === undefined
  const dataLoading = data === undefined
  /* INVALID VARS */
  const invalidConfig = config === null
  const invalidData = data === null

  // processes initial config and sets state
  const initConfig = (newConfig: Config) => {
    const updatedConfig = { ...coveUpdateWorker(newConfig), ...defaults }
    dispatch({ type: 'SET_CONFIG', payload: updatedConfig })
    dispatch({ type: 'SET_TABLE', payload: updatedConfig.table })
    dispatch({ type: 'SET_COLUMNS', payload: updatedConfig.columns })
    dispatch({ type: 'SET_FILTERS', payload: updatedConfig.filters })
    dispatch({ type: 'SET_FILTER_BEHAVIOR', payload: updatedConfig.filterBehavior })
    dispatch({ type: 'SET_FILTER_INTRO', payload: updatedConfig.filterIntro })
  }

  const loadConfig = () => {
    /* NO VALID INPUT */
    if (!configObj && !configUrl) {
      dispatch({ type: 'SET_CONFIG', payload: null })
      return
    }

    /* FULL CONFIG PROVIDED */
    if (configObj) {
      initConfig(configObj)
      return
    }

    /* FETCH REQUIRED */
    fetch(configUrl)
      .then(res => res.json())
      .then(resConfig => initConfig(resConfig))
      .catch(err => dispatch({ type: 'SET_CONFIG', payload: null }))
  }

  const loadData = () => {
    if (configLoading || invalidConfig) return

    /* NO CONFIG DATA */
    if (!inputData && !dataUrl) return

    /* DATA PROVIDED */
    if (inputData) {
      const processedData = processData(inputData, dataDescription)
      dispatch({ type: 'SET_DATA', payload: processedData })
      return
    }

    /* FETCH DATA */
    fetchRemoteData(`${dataUrl}`)
      .then(resData => {
        const processedData = processData(resData, dataDescription)
        dispatch({ type: 'SET_DATA', payload: processedData })
      })
      .catch(() => dispatch({ type: 'SET_DATA', payload: null }))
  }

  const updateFilters = (newConfig: Config) => {
    const { filters: newFilters } = newConfig
    dispatch({ type: 'SET_FILTERS', payload: newFilters })
  }

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width)
      dispatch({ type: 'SET_CURRENT_VIEWPORT', payload: newViewport })
    }
  })
  // Load data when component first mounts
  const outerContainerRef = useCallback(node => {
    if (node === null) return
    resizeObserver.observe(node)
  }, [])

  useEffect(() => {
    loadConfig()
    loadData()
  }, [configObj, configUrl, inputData, dataUrl, configLoading, invalidConfig, dataDescription])

  /* HANDLE LOADING/ERROR STATES */
  if (configLoading || dataLoading) return <Loading />
  if (invalidConfig || invalidData) throw new Error('Invalid config or data provided to CdcDataTable component')

  return (
    <Layout.VisualizationWrapper
      ref={outerContainerRef}
      config={config}
      isEditor={isEditor}
      showEditorPanel={showEditorPanel}
      currentViewport={currentViewport}
    >
      {/* EDITOR */}
      {isEditor && <EditorPanel dispatch={dispatch} state={state} />}

      {/* FILTERS */}
      <div className='bg-white z-1'>
        {filters && (
          <Filters
            config={config as unknown as Visualization}
            setConfig={updateFilters}
            setFilteredData={() => {}}
            filteredData={filteredData}
            excludedData={data}
          />
        )}

        {/* DATA TABLE */}
        <DataTable
          config={config as unknown as TableConfig}
          tableTitle={label}
          indexTitle={indexLabel}
          isEditor={isEditor}
          rawData={filteredData}
          runtimeData={filteredData}
          columns={columns}
          viewport={currentViewport}
          tabbingId={'dataTableSection'}
          expandDataTable={expanded}
        />
      </div>
    </Layout.VisualizationWrapper>
  )
}

export default CdcDataTable
