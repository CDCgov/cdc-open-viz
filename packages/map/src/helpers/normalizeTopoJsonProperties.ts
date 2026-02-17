/**
 * Normalizes TopoJSON geometry properties to a consistent format.
 * Handles both old format (iso, name) and new format (GENC_3A_CO, SHORT_FORM)
 *
 * @param properties - Raw properties from TopoJSON geometry
 * @returns Normalized properties with iso and name fields
 */
export const normalizeTopoJsonProperties = (properties: any) => {
  // If already in old format, return as-is
  if (properties.iso && properties.name) {
    return properties
  }

  // If in new format, map to old format while preserving new properties
  if (properties.GENC_3A_CO || properties.SHORT_FORM) {
    return {
      ...properties,
      iso: properties.GENC_3A_CO || properties.iso || '',
      name: properties.SHORT_FORM || properties.name || ''
      // Keep all original properties for future use
    }
  }

  // Unknown format, return as-is with warning
  console.warn('Unknown TopoJSON property format:', properties)
  return properties
}
