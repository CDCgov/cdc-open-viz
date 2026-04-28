import type { AltTextConfig } from '@cdc/core/types/AltText'

const getAutoLabel = (state): string => {
  const {
    general: { title, geoType, statesPicked }
  } = state
  let ariaLabel = ''
  switch (geoType) {
    case 'world':
      ariaLabel += 'World map'
      break
    case 'us':
      ariaLabel += 'United States map'
      break
    case 'us-county':
      ariaLabel += `United States county map`
      break
    case 'single-state':
      ariaLabel += `${statesPicked.map(sp => sp.stateName).join(', ')} county map`
      break
    case 'us-region':
      ariaLabel += `United States HHS Region map`
      break
    default:
      ariaLabel = 'Data visualization container'
      break
  }

  if (title) {
    ariaLabel += ` with the title: ${title}`
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

export type MapAriaLabels = { title: string; description?: string }

export const handleMapAriaLabels = (state: {
  general?: { geoType?: string; title?: string; statesPicked?: { stateName: string }[] }
  altText?: AltTextConfig
  dataMetadata?: Record<string, string>
}): MapAriaLabels => {
  try {
    if (!state.general?.geoType) throw Error('handleMapAriaLabels: no geoType found in state')

    const title = getAutoLabel(state)
    const description = resolveDescription(state.altText, state.dataMetadata)

    return { title, description }
  } catch (e) {
    console.error('COVE: ', e.message) // eslint-disable-line
    return { title: 'Data visualization container' }
  }
}
