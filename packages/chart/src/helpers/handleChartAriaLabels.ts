import type { AltTextConfig } from '@cdc/core/types/AltText'
import { resolveAltTextDescription } from '@cdc/core/helpers/resolveAltTextDescription'

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

    const title = getAutoLabel(state)
    const description = resolveAltTextDescription(state.altText, state.dataMetadata)

    return description ? `${title}. ${description}` : title
  } catch (e) {
    console.error('COVE: ', e.message) // eslint-disable-line
    return 'Data visualization container'
  }
}
