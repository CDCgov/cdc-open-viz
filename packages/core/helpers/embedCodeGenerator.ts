/**
 * Generates iframe embed code for COVE visualizations
 * Used by editor's "Share with Partners" feature
 */

interface EmbedCodeOptions {
  configUrl: string
  width?: string
  height?: string
  embedBaseUrl?: string
  helperScriptUrl?: string
  /** Additional URL parameters (e.g., filter values, hide flags) */
  urlParams?: Record<string, string>
}

/**
 * Detect if we're in development mode
 */
export function isDevMode(): boolean {
  if (typeof window === 'undefined') return false
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
}

/**
 * Get default embed base URL based on environment
 * Returns full absolute URL including protocol and host
 */
export function getDefaultEmbedBaseUrl(): string {
  if (isDevMode()) {
    return 'http://localhost:8080'
  }
  return 'https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html'
}

/**
 * Get embed path (without protocol/host) for same-origin usage
 * Use this for preview iframes on the same domain
 */
export function getEmbedPath(): string {
  if (isDevMode()) {
    return '/'
  }
  return '/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html'
}

/**
 * Get default embed helper script URL based on environment
 */
export function getDefaultHelperScriptUrl(): string {
  if (isDevMode()) {
    return 'http://localhost:8080/src/embed-helper/index.js'
  }
  return 'https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js'
}

/**
 * Get default generator base URL based on environment
 */
export function getDefaultGeneratorBaseUrl(): string {
  if (isDevMode()) {
    return 'http://localhost:8080/generator.html'
  }
  return 'https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/generator.html'
}

/**
 * Generate basic iframe embed code for partners
 *
 * @param options.configUrl - URL to the published config JSON
 * @param options.width - iframe width (default: "100%")
 * @param options.height - iframe height (default: "300")
 * @param options.embedBaseUrl - Base URL for embed page (auto-detected by environment)
 * @param options.helperScriptUrl - URL for embed-helper.js (auto-detected by environment)
 * @param options.urlParams - Additional URL parameters (e.g., filter values, hide flags)
 * @returns HTML string with iframe and script tag
 */
export function generateEmbedCode(options: EmbedCodeOptions): string {
  const {
    configUrl,
    width = '100%',
    height = '300',
    embedBaseUrl = getDefaultEmbedBaseUrl(),
    helperScriptUrl = getDefaultHelperScriptUrl(),
    urlParams = {}
  } = options

  // Construct embed page URL with config parameter and any additional params
  const params = new URLSearchParams()
  params.set('configUrl', configUrl)

  // Add any additional URL parameters (filters, hide flags, etc.)
  Object.entries(urlParams).forEach(([key, value]) => {
    if (value) params.set(key, value)
  })

  const embedUrl = `${embedBaseUrl}?${params.toString()}`

  // Generate iframe code
  const iframeCode = `<iframe src="${embedUrl}"
data-cove-embed
width="${width}"
height="${height}"
frameborder="0"
title="CDC Data Visualization"
></iframe>
<script src="${helperScriptUrl}"></script>`

  return iframeCode
}
