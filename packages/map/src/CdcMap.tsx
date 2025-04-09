import React, { useState, useEffect, useContext, useCallback } from 'react'
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
  isDashboard?: boolean
  isEditor?: boolean
  link?: string
  logo?: string
  navigationHandler: Function
  setSharedFilter: Function
  setSharedFilterValue: Function
}

const CdcMap: React.FC<CdcMapProps> = ({
  navigationHandler: customNavigationHandler,
  isDashboard = false,
  isEditor = false,
  configUrl,
  logo = '',
  setSharedFilter,
  setSharedFilterValue,
  link,
  config: editorsConfig
}) => {
  const editorContext = useContext(EditorContext)
  const [state, _setState] = useState({ ...initialState })

  const setState = newConfig => {
    _setState(newConfig)
    if (isEditor) {
      editorContext.setTempConfig(newConfig)
    }
  }

  const [loading, setLoading] = useState(true)
  const transform = new DataTransform()

  const loadConfig = async configObj => {
    if (!loading) setLoading(true)

    const configToLoad = editorsConfig ? editorsConfig : configObj

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
      newState.table.forceDisplay = !isDashboard
    }

    validateFipsCodeLength(newState)

    const processedConfig = { ...coveUpdateWorker(newState) }

    setTimeout(() => {
      setState(processedConfig)
      setLoading(false)
    }, 10)
  }

  const init = async () => {
    let configData = null

    if (state) {
      configData = state
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
      config={state}
      navigationHandler={customNavigationHandler}
      isDashboard={isDashboard}
      isEditor={isEditor}
      configUrl={configUrl}
      logo={logo}
      setSharedFilter={setSharedFilter}
      setSharedFilterValue={setSharedFilterValue}
      link={link}
      loading={loading}
    />
  )
}

export default CdcMap
