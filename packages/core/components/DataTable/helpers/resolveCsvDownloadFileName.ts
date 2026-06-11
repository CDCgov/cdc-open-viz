type CsvDownloadSource = {
  dataFileName?: string
  dataUrl?: string
  runtimeDataUrl?: string
  table?: {
    downloadFileName?: string
  }
}

type ResolveCsvDownloadFileNameArgs = {
  config?: CsvDownloadSource
  dataConfig?: CsvDownloadSource
  vizTitle?: string
}

const getNonEmptyString = (value?: unknown): string => (typeof value === 'string' ? value.trim() : '')

const getLastPathSegment = (value: string): string => {
  try {
    const url = new URL(value, 'https://example.com')
    const pathSegments = url.pathname.split('/').filter(Boolean)
    const lastSegment = pathSegments[pathSegments.length - 1]
    return lastSegment ? decodeURIComponent(lastSegment) : value
  } catch {
    const pathSegments = value.split(/[\\/]/).filter(Boolean)
    return pathSegments[pathSegments.length - 1] || value
  }
}

const toCsvFileName = (value: string): string => {
  const sourceName = getLastPathSegment(value)
    .replace(/[\u0000-\u001f\u007f\\/]/g, '-')
    .trim()
  const baseName = sourceName.replace(/\.(csv|geojson|json|tsv|txt)$/i, '').trim() || 'data-table'

  return `${baseName}.csv`
}

export const resolveCsvDownloadFileName = ({
  config,
  dataConfig,
  vizTitle
}: ResolveCsvDownloadFileNameArgs): string => {
  const explicitFileName = getNonEmptyString(config?.table?.downloadFileName)

  if (explicitFileName) return toCsvFileName(explicitFileName)

  const sourceFileName = [
    dataConfig?.runtimeDataUrl,
    dataConfig?.dataUrl,
    dataConfig?.dataFileName,
    config?.runtimeDataUrl,
    config?.dataUrl,
    config?.dataFileName,
    vizTitle,
    'data-table'
  ]
    .map(getNonEmptyString)
    .find(Boolean) || 'data-table'

  return toCsvFileName(sourceFileName)
}
