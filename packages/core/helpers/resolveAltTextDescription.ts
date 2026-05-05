import type { AltTextConfig } from '../types/AltText'

/**
 * Resolves the alt text description from either a static value or a data-file metadata key.
 * Used by editor panels to preview the resolved description independently of the
 * full aria-label string that the helpers produce.
 */
export const resolveAltTextDescription = (
  altText: AltTextConfig | undefined,
  dataMetadata: Record<string, string> | undefined
): string | undefined => {
  if (altText?.type === 'static' && altText.value) {
    return altText.value
  }
  if (altText?.type === 'metadata' && altText.metadataKey && dataMetadata) {
    return dataMetadata[altText.metadataKey] || undefined
  }
  return undefined
}
