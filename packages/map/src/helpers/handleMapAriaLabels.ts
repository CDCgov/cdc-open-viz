import type { AltTextConfig } from '@cdc/core/types/AltText'
import { resolveAltTextDescription } from '@cdc/core/helpers/resolveAltTextDescription'

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

export const handleMapAriaLabels = (state: {
  general?: { geoType?: string; title?: string; statesPicked?: { stateName: string }[] }
  altText?: AltTextConfig
  dataMetadata?: Record<string, string>
}): string => {
  try {
    if (!state.general?.geoType) throw Error('handleMapAriaLabels: no geoType found in state')

    const title = getAutoLabel(state)
    const description = resolveAltTextDescription(state.altText, state.dataMetadata)

    return description ? `${title}. ${description}` : title
  } catch (e) {
    console.error('COVE: ', e.message) // eslint-disable-line
    return 'Data visualization container'
  }
}
