import type { AltTextConfig } from '@cdc/core/types/AltText'

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

const resolveDescription = (
  altText: AltTextConfig | undefined,
  dataMetadata: Record<string, string> | undefined
): string | undefined => {
  if (altText?.type === 'static' && altText.value) {
    return altText.value
  }
  if (altText?.type === 'metadata' && altText.metadataKey && dataMetadata) {
    const metadataValue = dataMetadata[altText.metadataKey]
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

    const title = getAutoLabel(state)
    const description = resolveDescription(state.altText, state.dataMetadata)

    return { title, description }
  } catch (e) {
    console.error('COVE: ', e.message) // eslint-disable-line
    return { title: 'Data visualization container' }
  }
}
