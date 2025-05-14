import { useCallback, useEffect, useState } from 'react'

import DataTable from '@cdc/core/components/DataTable'
import { TableConfig } from '@cdc/core/components/DataTable/types/TableConfig'
import Filters from '@cdc/core/components/Filters'
import Layout from '@cdc/core/components/Layout'
import Loading from '@cdc/core/components/Loading'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { filterVizData } from '@cdc/core/helpers/filterVizData'
import getViewport from '@cdc/core/helpers/getViewport'
import { Table } from '@cdc/core/types/Table'
import { ViewPort } from '@cdc/core/types/ViewPort'
import { Visualization } from '@cdc/core/types/Visualization'
import { VizFilter } from '@cdc/core/types/VizFilter'

import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state.js'
import { processData } from './helpers/dataHelpers'
import { fetchConfig, fetchData } from './helpers/fetchers'
import { Config } from './types/Config'

type CdcDataTableProps = {
  config?: Config
  configUrl?: string
  isEditor: boolean
}

const CdcDataTable = ({ config: inputConfig, configUrl, isEditor }: CdcDataTableProps) => {
  /* STATES */
  // config is only used to capture the initial config data anything dynamic is updated in other states
  const [config, setConfig] = useState<Config>()
  const [showEditorPanel, setShowEditorPanel] = useState(isEditor)
  const [columns, setColumns] = useState()
  const [data, setData] = useState()
  const [table, setTable] = useState<Table>()
  const [currentViewport, setCurrentViewport] = useState<ViewPort>('lg')
  const [filters, setFilters] = useState<VizFilter[]>()
  const [filterIntro, setFilterIntro] = useState<string>()

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
    setFilterIntro(updatedConfig.filterIntro)
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
    /* NO VALID INPUT */
    if (!inputConfig && !configUrl) {
      setConfig(null)
      return
    }

    /* FULL CONFIG PROVIDED */
    if (inputConfig) {
      initConfig(inputConfig)
      return
    }

    /* FETCH REQUIRED */
    fetchConfig(configUrl)
      .then(resConfig => initConfig(resConfig))
      .catch(err => setConfig(null))
  }, [inputConfig, configUrl])

  useEffect(() => {
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
    fetchData(dataUrl)
      .then(resData => {
        const processedData = processData(resData, dataDescription)
        setData(processedData)
      })
      .catch(() => setData(null))
  }, [inputData, dataUrl, configLoading, invalidConfig, dataDescription])

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
    filterIntro
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
