const TOOLTIP_BODY_PATTERN = /<li\b[^>]*class=(["'])[^"']*\btooltip-body\b[^"']*\1/i
const TOOLTIP_BODY_CONTENT_PATTERN = /<li\b[^>]*class=(["'])[^"']*\btooltip-body\b[^"']*\1[^>]*>(.*?)<\/li>/gis

const hasTooltipBodyContent = (tooltipHtml: string): boolean => {
  const bodyMatches = [...tooltipHtml.matchAll(TOOLTIP_BODY_CONTENT_PATTERN)]
  if (!bodyMatches.length) return false

  return bodyMatches.some(match => {
    const textContent = match[2]
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/gi, ' ')
      .trim()
    return textContent.length > 0
  })
}

export const shouldRenderBaseGeoTooltip = (tooltipHtml: unknown, hasBubbleLayers: boolean): boolean => {
  if (!tooltipHtml) return false
  if (!hasBubbleLayers) return true
  if (typeof tooltipHtml !== 'string') return true

  return TOOLTIP_BODY_PATTERN.test(tooltipHtml) && hasTooltipBodyContent(tooltipHtml)
}

export const getBaseGeoTooltipAttributes = (
  tooltipHtml: unknown,
  tooltipId: string,
  hasBubbleLayers: boolean
): { 'data-tooltip-id'?: string; 'data-tooltip-html'?: string } => {
  if (!shouldRenderBaseGeoTooltip(tooltipHtml, hasBubbleLayers)) return {}

  return {
    'data-tooltip-id': `tooltip__${tooltipId}`,
    'data-tooltip-html': String(tooltipHtml)
  }
}
