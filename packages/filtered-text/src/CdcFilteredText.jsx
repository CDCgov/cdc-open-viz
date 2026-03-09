import React, { useEffect, useState } from 'react'

// context & initial state
import ConfigContext from './ConfigContext'
import defaults from './data/initial-state'

// components
import Title from '@cdc/core/components/ui/Title'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'
import EditorPanel from './components/EditorPanel'

// helpers
import DataTransform from '@cdc/core/helpers/DataTransform'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { VisualizationContainer } from '@cdc/core/components/Layout'

// external
import parse from 'html-react-parser'

// styles
import './scss/main.scss'

const CdcFilteredText = ({
  config: configObj,
  configUrl,
  isDashboard = false,
  isEditor = false,
  setConfig: setParentConfig
}) => {
  const transform = new DataTransform()
  // Default States
  const [config, setConfig] = useState(defaults)
  const [loading, setLoading] = useState(true)
  const [stateData, setStateData] = useState(config.data || [])
  const [excludedData, setExcludedData] = useState()
  let { title, filters } = config

  const { contentClasses, innerContainerClasses } = useDataVizClasses(config)
  const { visual } = config

  const shouldApplyTopPadding = visual?.border || visual?.background || (config.title && config.titleStyle === 'legacy')
  const shouldApplySidePadding = visual?.border || visual?.accent || visual?.background

  // Default Functions

  const loadConfig = async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {}

    if (response.dataUrl) {
      const { data: fetchedData, dataMetadata } = await fetchRemoteData(response.dataUrl)
      data = fetchedData
      response.dataMetadata = dataMetadata
      if (response.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, response.dataDescription)
      }
    }

    if (data) {
      setStateData(data)
      setExcludedData(data)
    }

    let newConfig = { ...config, ...response }
    const processedConfig = { ...coveUpdateWorker(newConfig) }

    updateConfig(processedConfig)
    setLoading(false)
  }

  const updateConfig = newConfig => {
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    newConfig.runtime = {}
    newConfig.runtime.uniqueId = Date.now()

    newConfig.runtime.editorErrorMessage = ''

    setConfig(newConfig)
  }

  const filterByTextColumn = () => {
    let filteredData = []

    if (filters.length) {
      filters.map(filter => {
        if (filter.columnName && filter.columnValue) {
          return (filteredData = stateData.filter(function (e) {
            return e[filter.columnName] === filter.columnValue
          }))
        } else {
          return null
        }
      })
    } else {
      // filter by textColumn if selected
      return (filteredData = stateData.filter((e, index) => {
        return e[config.textColumn] && index === 0
      }))
    }

    return filteredData
  }

  //Load initial config
  useEffect(() => {
    loadConfig().catch(err => console.error(err))
  }, []) // eslint-disable-line

  if (configObj && config && JSON.stringify(configObj.data) !== JSON.stringify(config.data)) {
    loadConfig()
  }

  let content = <Loading />

  if (loading === false) {
    let body = (
      <div className={innerContainerClasses.join(' ')}>
        <Title
          classes={[`${config.theme}`, 'mb-0']}
          title={title}
          titleStyle={config.titleStyle}
          config={config}
          noContent={!config.textColumn}
        />
        <div
          className={`${contentClasses.join(' ')} cove-visualization__body-wrap${
            shouldApplyTopPadding ? ' has-top-padding' : ''
          }${shouldApplySidePadding ? ' has-side-padding' : ''}`}
        >
          {filterByTextColumn()
            .slice(0, 1)
            .map((el, i) => (
              <p key={i}> {parse(el[config.textColumn] || '')} </p>
            ))}
        </div>
      </div>
    )

    content = body
  }
  const values = {
    config,
    updateConfig,
    loading,
    setParentConfig,
    isDashboard,
    stateData,
    unfilteredData: stateData
  }

  return (
    <ErrorBoundary component='CdcFilteredText'>
      <ConfigContext.Provider value={values}>
        <VisualizationContainer config={config} isEditor={isEditor} editorPanel={<EditorPanel />}>
          {content}
        </VisualizationContainer>
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
