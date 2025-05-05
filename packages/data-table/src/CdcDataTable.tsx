import { useCallback, useEffect, useState } from 'react'

import Layout from '@cdc/core/components/Layout'
import Loading from '@cdc/core/components/Loading'
import DataTable from '@cdc/core/components/DataTable'
import getViewport from '@cdc/core/helpers/getViewport'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'

import { Config } from './types/Config'
import EditorPanel from './components/EditorPanel'
import { fetchConfig, fetchData } from './helpers/fetchers'
import { processData } from './helpers/dataHelpers'
import defaults from './data/initial-state.js'

type CdcDataTableProps = {
  config?: Config
  configUrl?: string
  isEditor: boolean
}

const CdcDataTable = ({ config: inputConfig, configUrl, isEditor }: CdcDataTableProps) => {
  const [showEditorPanel, setShowEditorPanel] = useState(isEditor)
  const [columns, setColumns] = useState()
  const [config, setConfig] = useState<Config>()
  const [data, setData] = useState()
  const [table, setTable] = useState()

  const [currentViewport, setCurrentViewport] = useState('lg')

  const { data: inputData, dataUrl, dataDescription, expanded } = config || {}
  const { label, indexLabel } = table || {}

  const configLoading = configUrl && config === undefined
  const dataLoading = data === undefined
  const invalidConfig = config === null
  const invalidData = data === null

  const dataTableConfig = {
    ...config,
    table,
    columns,
    data
  }

  const initConfig = (newConfig: Config) => {
    const configWithDefaultsAndUpdates = { ...coveUpdateWorker(newConfig), ...defaults }
    const { columns: configColumns, table: configTable } = configWithDefaultsAndUpdates
    setConfig(configWithDefaultsAndUpdates)
    setTable(configTable)
    setColumns(configColumns)
  }

  //Observes changes to outermost container and changes viewport size in state
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

  if (configLoading || dataLoading) return <Loading />

  if (invalidConfig || invalidData) return <div>Something went wrong</div>

  return (
    <Layout.VisualizationWrapper
      ref={outerContainerRef}
      config={config}
      isEditor={isEditor}
      showEditorPanel={showEditorPanel}
      currentViewport={currentViewport}
    >
      {isEditor && (
        <EditorPanel
          config={dataTableConfig}
          columnsState={[columns, setColumns]}
          tableState={[table, setTable]}
          showEditorPanelState={[showEditorPanel, setShowEditorPanel]}
          data={data}
        />
      )}
      <div className='bg-white z-1'>
        <DataTable
          config={dataTableConfig}
          tableTitle={label}
          indexTitle={indexLabel}
          isEditor={isEditor}
          rawData={data}
          runtimeData={data}
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
