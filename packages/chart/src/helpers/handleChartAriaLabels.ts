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

export const handleChartAriaLabels = (state: {
  visualizationType?: string
  title?: string
  altText?: AltTextConfig
  dataMetadata?: Record<string, string>
}): string => {
  try {
    if (!state.visualizationType) throw Error('handleChartAriaLabels: no visualization type found in state')

    const { altText, dataMetadata } = state

    if (altText?.type === 'static' && altText.value) {
      return altText.value
    }

    if (altText?.type === 'metadata' && altText.metadataKey && dataMetadata) {
      const metadataValue = dataMetadata[altText.metadataKey]
      if (metadataValue) return metadataValue
    }

    return getAutoLabel(state)
  } catch (e) {
    console.error('COVE: ', e.message) // eslint-disable-line
    return 'Data visualization container'
  }
}
