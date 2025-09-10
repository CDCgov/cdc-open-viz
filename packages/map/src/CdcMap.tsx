import React, { useState, useEffect, useContext } from 'react'
import CdcMapComponent from './CdcMapComponent'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import initialState from './data/initial-state'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { addUIDs, validateFipsCodeLength } from './helpers'
import EditorContext from '@cdc/core/contexts/EditorContext'
import { extractCoveData, updateVegaData } from '@cdc/core/helpers/vegaConfig'
import { MapConfig } from './types/MapConfig'
import _ from 'lodash'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'

type CdcMapProps = {
  config: MapConfig
  configUrl?: string
  isEditor?: boolean
  isDashboard?: boolean
  link?: string
  logo?: string
  navigationHandler: Function
  setConfig: Function
  interactionLabel?: string
}

const CdcMap: React.FC<CdcMapProps> = ({
  navigationHandler: customNavigationHandler,
  isEditor,
  isDashboard,
  configUrl,
  logo = '',
  link,
  config: editorsConfig,
  interactionLabel = ''
}) => {
  const editorContext = useContext(EditorContext)
  const [config, _setConfig] = useState(editorsConfig ?? null)

  const setConfig = newConfig => {
    _setConfig(newConfig)
    if (isEditor && !isDashboard) {
      editorContext.setTempConfig(newConfig)
    }
  }

  const [loading, setLoading] = useState(true)
  const transform = new DataTransform()

  const loadConfig = async configObj => {
    if (!loading) setLoading(true)
    const configToLoad = editorsConfig ?? configObj

    let newState = {
      ...initialState,
      ...configToLoad
    }
    if (newState.dataUrl) {
      let newData = await fetchRemoteData(newState.dataUrl, 'map')

      if (newState.vegaConfig) {
        newData = extractCoveData(updateVegaData(newState.vegaConfig, newData))
      }

      if (newData && newState.dataDescription) {
        newData = transform.autoStandardize(newData)
        newData = transform.developerStandardize(newData, newState.dataDescription)
      }

      if (newData) {
        newState.data = newData
      }
    } else if (newState.formattedData) {
      newState.data = newState.formattedData
    } else if (newState.dataDescription) {
      newState.data = transform.autoStandardize(newState.data)
      newState.data = transform.developerStandardize(newState.data, newState.dataDescription)
    }

    Object.keys(newState).forEach(key => {
      if ('object' === typeof newState[key] && false === Array.isArray(newState[key])) {
        if (initialState[key]) {
          Object.keys(initialState[key]).forEach(property => {
            if (undefined === newState[key][property]) {
              newState[key][property] = initialState[key][property]
            }
          })
        }
      }
    })

    if (newState.columns.geo.name || newState.columns.geo.fips) {
      addUIDs(newState, newState.columns.geo.name || newState.columns.geo.fips)
    }

    if (newState.table.forceDisplay === undefined) {
      newState.table.forceDisplay = true
    }

    validateFipsCodeLength(newState)

    const processedConfig = { ...coveUpdateWorker(newState) }

    setTimeout(() => {
      setConfig(processedConfig)
      setLoading(false)
    }, 10)
  }

  const init = async () => {
    let _newConfig = _.cloneDeep(config ?? initialState)

    if (configUrl) {
      _newConfig = await fetchRemoteData(configUrl)
    }
    if ('object' === typeof _newConfig) {
      loadConfig(_newConfig)
    }
  }

  useEffect(() => {
    init()
    publishAnalyticsEvent('map_loaded', 'load', interactionLabel, 'map', { title: config?.title })
  }, [])

  useEffect(() => {
    init()
  }, [configUrl])

  useEffect(() => {
    setConfig(editorsConfig)
  }, [editorsConfig])

  if (loading) return null

  return (
    <CdcMapComponent
      config={config}
      navigationHandler={customNavigationHandler}
      isEditor={isEditor}
      isDashboard={isDashboard}
      logo={logo}
      link={link}
      loadConfig={loadConfig}
      interactionLabel={interactionLabel}
    />
  )
}

export default CdcMap
