export default function getTopAxis(config) {
  // When to show top axis
  const hasTopAxis =
    config.visualizationType === 'Bar' || config.visualizationType === 'Combo' || config.visualizationType === 'Line'

  return { hasTopAxis }
}
