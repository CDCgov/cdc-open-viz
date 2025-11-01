import { useRef } from 'react'
import Papa from 'papaparse'
import { publishAnalyticsEvent } from '../helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { COVE_VISUALIZATION_TYPES } from '../helpers/metrics/types'

type DownloadButtonProps = {
  rawData: any[]
  fileName: string
  headerColor: string
  skipId: string | number
  configUrl?: string
  interactionLabel?: string
  title?: string
  config?: { type: COVE_VISUALIZATION_TYPES;[key: string]: any }
}

const DownloadButton = ({ rawData, fileName, headerColor, skipId, interactionLabel, configUrl, title, config }: DownloadButtonProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleDownload = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const csvData = Papa.unparse(rawData)

    // Prepend a Byte Order Mark (BOM) to the CSV data.
    // The BOM is a special marker that helps applications like Excel recognize the file as UTF-8 encoded.
    // Adding the BOM ensures that Excel interprets special characters correctly.
    const bom = '\uFEFF'
    const utf8EncodedCsvData = new TextEncoder().encode(bom + csvData)
    const blob = new Blob([utf8EncodedCsvData], { type: 'text/csv;charset=utf-8;' })

    const url = URL.createObjectURL(blob)

    //@ts-ignore
    if (typeof window.navigator.msSaveBlob === 'function') {
      //@ts-ignore
      navigator.msSaveBlob(blob, fileName)
    } else {
      const downloadLink = document.createElement('a')
      downloadLink.href = url
      downloadLink.download = fileName
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
    URL.revokeObjectURL(url)
    if (config) {
      publishAnalyticsEvent({
        vizType: config.type as COVE_VISUALIZATION_TYPES,
        vizSubType: getVizSubType(config),
        eventType: 'data_downloaded',
        eventAction: 'click',
        eventLabel: interactionLabel || configUrl,
        vizTitle: getVizTitle(config)
      })
    }
  }

  return (
    <a
      ref={linkRef}
      type='button'
      onClick={handleDownload}
      aria-label='Download this data in a CSV file format.'
      className={`${headerColor} no-border`}
      id={`${skipId}`}
      data-html2canvas-ignore
      role='button'
      style={{ cursor: 'pointer' }}
    >
      Download Data (CSV)
    </a>
  )
}

export default DownloadButton
