import Papa from 'papaparse'
import _ from 'lodash'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import { MapConfig } from '../types/MapConfig'
import { CSV_PARSE_CONFIG } from './constants'

export const buildQueryString = (params: Record<string, string>): string =>
  Object.keys(params)
    .map((param, i) => {
      let qs = i === 0 ? '?' : '&'
      qs += param + '='
      qs += params[param]
      return qs
    })
    .join('')

export const reloadURLData = async (config: MapConfig, setConfig: (config: MapConfig) => void): Promise<void> => {
  if (!config.dataUrl) return

  const dataUrl = new URL(config.runtimeDataUrl || config.dataUrl, window.location.origin)
  let qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))

  let isUpdateNeeded = false
  config.filters.forEach(filter => {
    if (filter.type === 'url' && qsParams[filter.queryParameter] !== decodeURIComponent(filter.active)) {
      qsParams[filter.queryParameter] = filter.active
      isUpdateNeeded = true
    }
  })

  if (!isUpdateNeeded) return

  let dataUrlFinal = `${dataUrl.origin}${dataUrl.pathname}${buildQueryString(qsParams)}`
  let data

  try {
    const regex = /(?:\.([^.]+))?$/
    const ext = regex.exec(dataUrl.pathname)[1]

    if ('csv' === ext || isSolrCsv(dataUrlFinal)) {
      data = await fetch(dataUrlFinal)
        .then(response => response.text())
        .then(responseText => {
          const parsedCsv = Papa.parse(responseText, CSV_PARSE_CONFIG)
          return parsedCsv.data
        })
    } else if ('json' === ext || isSolrJson(dataUrlFinal)) {
      data = await fetch(dataUrlFinal).then(response => response.json())
    } else {
      data = []
    }
  } catch (e) {
    console.error(`Cannot parse URL: ${dataUrlFinal}`) // eslint-disable-line
    console.log(e) // eslint-disable-line
    data = []
  }

  if (config.dataDescription) {
    const transform = new DataTransform()
    data = transform.autoStandardize(data)
    data = transform.developerStandardize(data, config.dataDescription)
  }

  const newConfig = _.cloneDeep(config)
  newConfig.data = data
  newConfig.runtimeDataUrl = dataUrlFinal

  setConfig(newConfig)
}
