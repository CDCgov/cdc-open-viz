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
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import Layout from '@cdc/core/components/Layout'

// external
import parse from 'html-react-parser'

// styles
import './scss/main.scss'
import { resolveThemeVariant } from '@cdc/core/helpers/resolveThemeVariant.ts'

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
  const fontSize = config.fontSize === 'small' ? '16px' : config.fontSize === 'medium' ? '22px' : '27px'

  const { contentClasses, innerContainerClasses } = useDataVizClasses(config)

  // Default Functions

  const loadConfig = async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)

      data = await dataString.json()
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
    loadConfig().catch(err => console.log(err))
  }, []) // eslint-disable-line

  useEffect(() => {
    if (configObj && !configObj.dataUrl) {
      updateConfig({ ...defaults, ...configObj })
      setStateData(configObj.data)
      setExcludedData(configObj.data)
    }
  }, [configObj?.data]) // eslint-disable-line

  let content = <Loading />

  if (loading === false) {
    let body = (
      <>
        <Layout.Responsive isEditor={isEditor}>
          <div className={`cove-component__content no-borders`}>
            <Title theme={resolveThemeVariant(config.theme)} title={title} style={{ fontSize }} />
            <div className={`${contentClasses.join(' ')} body`}>
              {filterByTextColumn()
                .slice(0, 1)
                .map((el, i) => (
                  <p style={{ fontSize }} key={i}>
                    {' '}
                    {parse(el[config.textColumn] || '')}{' '}
                  </p>
                ))}
            </div>
          </div>
        </Layout.Responsive>
      </>
    )

    content = (
      <>
        {isEditor && <EditorPanel />}
        {body}
      </>
    )
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
        <Layout.VisualizationWrapper config={config} isEditor={isEditor} showEditorPanel={config?.showEditorPanel}>
          {content}
        </Layout.VisualizationWrapper>
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
