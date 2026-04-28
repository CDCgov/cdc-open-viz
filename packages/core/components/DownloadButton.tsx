import { useRef } from 'react'
import Papa from 'papaparse'
import { publishAnalyticsEvent } from '../helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

type DownloadButtonProps = {
  getRawData: () => any[]
  fileName: string
  skipId?: string | number
  configUrl?: string
  interactionLabel?: string
  title?: string
  config?: any
}

const DownloadButton = ({
  getRawData,
  fileName,
  skipId,
  interactionLabel,
  configUrl,
  title,
  config
}: DownloadButtonProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleDownload = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const data = getRawData()
    const csvData = Papa.unparse(data)

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
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: 'data_downloaded',
      eventAction: 'click',
      eventLabel: interactionLabel || configUrl,
      vizTitle: getVizTitle(config)
    })
  }

  return (
    <a
      ref={linkRef}
      type='button'
      onClick={handleDownload}
      aria-label='Download this data in a CSV file format.'
      className='no-border'
      id={skipId != null ? `${skipId}` : undefined}
      data-html2canvas-ignore
      role='button'
      style={{ cursor: 'pointer' }}
    >
      {config?.table?.downloadDataLabel || 'Download Data (CSV)'}
    </a>
  )
}

export default DownloadButton
