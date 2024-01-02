import Papa from 'papaparse'

type DownloadButtonProps = {
  rawData: Object
  fileName: string
  headerColor: string
  skipId: string | number
}

const DownloadButton = ({ rawData, fileName, headerColor, skipId }: DownloadButtonProps) => {
  const csvData = Papa.unparse(rawData)
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })

  const saveBlob = () => {
    //@ts-ignore
    if (typeof window.navigator.msSaveBlob === 'function') {
      //@ts-ignore
      navigator.msSaveBlob(blob, fileName)
    }
  }

  return (
    <a download={fileName} type='button' onClick={saveBlob} href={URL.createObjectURL(blob)} aria-label='Download this data in a CSV file format.' className={`${headerColor} no-border`} id={`${skipId}`} data-html2canvas-ignore role='button'>
      Download Data (CSV)
    </a>
  )
}

export default DownloadButton
