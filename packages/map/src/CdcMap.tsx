import React, { useState, useEffect, useContext } from 'react'
import CdcMapComponent from './CdcMapComponent'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import initialState from './data/initial-state'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { addUIDs, validateFipsCodeLength } from './helpers'
import EditorContext from '@cdc/editor/src/ConfigContext'
import { MapConfig } from './types/MapConfig'

type CdcMapProps = {
  config: MapConfig
  configUrl?: string
  isEditor?: boolean
  link?: string
  logo?: string
  navigationHandler: Function
  setConfig: Function
}

const CdcMap: React.FC<CdcMapProps> = ({
  navigationHandler: customNavigationHandler,
  isEditor = false,
  configUrl,
  logo = '',
  link,
  config: editorsConfig,
  setConfig: setEditorsConfig
}) => {
  const editorContext = useContext(EditorContext)
  const [config, _setConfig] = useState(null)

  const setConfig = newConfig => {
    if (isEditor) {
      editorContext.setTempConfig(newConfig)
    }
    _setConfig(newConfig)
  }

  const [loading, setLoading] = useState(true)
  const transform = new DataTransform()

  const loadConfig = async configObj => {
    if (!loading) setLoading(true)
    const configToLoad = editorsConfig || configObj

    let newState = {
      ...initialState,
      ...configToLoad
    }

    if (newState.dataUrl) {
      let newData = await fetchRemoteData(newState.dataUrl, 'map')

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
    let configData = null

    if (config) {
      configData = config
    }

    if (configUrl) {
      configData = await fetchRemoteData(configUrl)
    }
    if ('object' === typeof configData) {
      loadConfig(configData)
    }
  }

  useEffect(() => {
    init()
  }, [])

  if (loading) return null

  return (
    <CdcMapComponent
      config={config}
      setEditorConfig={setEditorsConfig}
      navigationHandler={customNavigationHandler}
      isEditor={isEditor}
      logo={logo}
      link={link}
    />
  )
}

export default CdcMap
