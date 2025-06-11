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
import { ActionType } from './store/dataTable.actions'
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

  const builtSetter = (type: ActionType) => payload => {
    dispatch({ type, payload })
  }

  /* STATES */
  const { config, showEditorPanel, columns, data, table, filters, currentViewport, filterIntro, filterBehavior } =
    state as State

  const setConfig = builtSetter('SET_CONFIG')
  const setShowEditorPanel = builtSetter('SET_SHOW_EDITOR_PANEL')
  const setColumns = builtSetter('SET_COLUMNS')
  const setData = builtSetter('SET_DATA')
  const setTable = builtSetter('SET_TABLE')
  const setFilters = builtSetter('SET_FILTERS')
  const setFilterBehavior = builtSetter('SET_FILTER_BEHAVIOR')
  const setCurrentViewport = builtSetter('SET_CURRENT_VIEWPORT')
  const setFilterIntro = builtSetter('SET_FILTER_INTRO')

  /* CONFIG VARS */
  const { data: inputData, dataUrl, dataDescription } = config || {}
  const { label, indexLabel, expanded } = table || {}

  /* FILTERED DATA */
  const filteredData = filterVizData(filters, data)

  /* LOADING VARS */
  const configLoading = configUrl && config === undefined
  const dataLoading = data === undefined
  /* INVALID VARS */
  const invalidConfig = config === null
  const invalidData = data === null

  // processes initial config and sets state
  const initConfig = (newConfig: Config) => {
    const updatedConfig = { ...coveUpdateWorker(newConfig), ...defaults }
    setConfig(updatedConfig)
    setTable(updatedConfig.table)
    setColumns(updatedConfig.columns)
    setFilters(updatedConfig.filters)
    setFilterBehavior(updatedConfig.filterBehavior)
    setFilterIntro(updatedConfig.filterIntro)
  }

  const loadConfig = () => {
    /* NO VALID INPUT */
    if (!configObj && !configUrl) {
      setConfig(null)
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
      .catch(err => setConfig(null))
  }

  const loadData = () => {
    if (configLoading || invalidConfig) return

    /* NO CONFIG DATA */
    if (!inputData && !dataUrl) return

    /* DATA PROVIDED */
    if (inputData) {
      const processedData = processData(inputData, dataDescription)
      setData(processedData)
      return
    }

    /* FETCH DATA */
    fetchRemoteData(`${dataUrl}`)
      .then(resData => {
        const processedData = processData(resData, dataDescription)
        setData(processedData)
      })
      .catch(() => setData(null))
  }

  const updateFilters = (newConfig: Config) => {
    const { filters: newFilters } = newConfig
    setFilters(newFilters)
  }

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width)
      setCurrentViewport(newViewport)
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
  if (invalidConfig || invalidData) return <div>Something went wrong</div>

  // initial static config combined with dynamic states
  const configWithStates = {
    ...config,
    table,
    columns,
    data,
    filters,
    filterIntro,
    filterBehavior
  }

  return (
    <Layout.VisualizationWrapper
      ref={outerContainerRef}
      config={config}
      isEditor={isEditor}
      showEditorPanel={showEditorPanel}
      currentViewport={currentViewport}
    >
      {/* EDITOR */}
      {isEditor && (
        <EditorPanel
          config={configWithStates}
          columnsState={[columns, setColumns]}
          tableState={[table, setTable]}
          filtersState={[filters, setFilters]}
          setFilterBehavior={setFilterBehavior}
          showEditorPanelState={[showEditorPanel, setShowEditorPanel]}
          setFilterIntro={setFilterIntro}
          data={data}
        />
      )}

      {/* FILTERS */}
      <div className='bg-white z-1'>
        {filters && (
          <Filters
            config={configWithStates as unknown as Visualization}
            setConfig={updateFilters}
            setFilteredData={() => {}}
            filteredData={filteredData}
            excludedData={data}
          />
        )}

        {/* DATA TABLE */}
        <DataTable
          config={configWithStates as unknown as TableConfig}
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
