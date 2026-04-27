import type { AltTextConfig, AltTextEntry } from '@cdc/core/types/AltText'

const getAutoLabel = (state: { visualizationType?: string; title?: string }): string => {
  let ariaLabel = ''
  if (state.visualizationType) {
    ariaLabel += `${state.visualizationType} chart`
  }
  if (state.title && state.visualizationType) {
    ariaLabel += ` with the title: ${state.title}`
  }
  return ariaLabel
}

const resolveEntry = (
  entry: AltTextEntry | undefined,
  dataMetadata: Record<string, string> | undefined
): string | undefined => {
  if (entry?.type === 'static' && entry.value) {
    return entry.value
  }
  if (entry?.type === 'metadata' && entry.metadataKey && dataMetadata) {
    const metadataValue = dataMetadata[entry.metadataKey]
    if (metadataValue) return metadataValue
  }
  return undefined
}

export type ChartAriaLabels = { title: string; description?: string }

export const handleChartAriaLabels = (state: {
  visualizationType?: string
  title?: string
  altText?: AltTextConfig
  dataMetadata?: Record<string, string>
}): ChartAriaLabels => {
  try {
    if (!state.visualizationType) throw Error('handleChartAriaLabels: no visualization type found in state')

    const { altText, dataMetadata } = state
    const title = resolveEntry(altText?.title, dataMetadata) ?? getAutoLabel(state)
    const description = resolveEntry(altText?.description, dataMetadata)

    return { title, description }
  } catch (e) {
    console.error('COVE: ', e.message) // eslint-disable-line
    return { title: 'Data visualization container' }
  }
}
