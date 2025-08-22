import Papa from 'papaparse'
import { publishAnalyticsEvent } from '../helpers/metrics/helpers'

type DownloadButtonProps = {
  rawData: Object
  fileName: string
  headerColor: string
  skipId: string | number
  configUrl?: string
}

const DownloadButton = ({ rawData, fileName, headerColor, skipId, configUrl }: DownloadButtonProps) => {
  const csvData = Papa.unparse(rawData)
  // Prepend a Byte Order Mark (BOM) to the CSV data.
  // The BOM is a special marker that helps applications like Excel recognize the file as UTF-8 encoded.
  // Adding the BOM ensures that Excel interprets special characters correctly.
  const bom = '\uFEFF'
  const utf8EncodedCsvData = new TextEncoder().encode(bom + csvData)
  const blob = new Blob([utf8EncodedCsvData], { type: 'text/csv;charset=utf-8;' })

  const saveBlob = () => {
    //@ts-ignore
    if (typeof window.navigator.msSaveBlob === 'function') {
      //@ts-ignore
      navigator.msSaveBlob(blob, fileName)
    }
    publishAnalyticsEvent('data_downloaded', 'click', configUrl)
  }

  return (
    <a
      download={fileName}
      type='button'
      onClick={saveBlob}
      href={URL.createObjectURL(blob)}
      aria-label='Download this data in a CSV file format.'
      className={`${headerColor} no-border`}
      id={`${skipId}`}
      data-html2canvas-ignore
      role='button'
    >
      Download Data (CSV)
    </a>
  )
}

export default DownloadButton
