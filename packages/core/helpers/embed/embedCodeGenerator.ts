/**
 * Generates iframe embed code for COVE visualizations
 * Used by editor's "Share with Partners" feature
 */

interface EmbedCodeOptions {
  configUrl: string
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
 * Get embed base URL for creating iframes
 * Returns full absolute URL including protocol and host
 */
export function getEmbedBaseUrl(): string {
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
    return 'http://localhost:8080'
  }
  return '/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html'
}

/**
 * Get default embed helper script URL based on environment
 */
export function getHelperScriptUrl(): string {
  if (isDevMode()) {
    return 'http://localhost:8080/src/embed-helper/index.js'
  }
  return 'https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js'
}

/**
 * Generate embed code for partners (div-based)
 *
 * @param options.configUrl - URL to the published config JSON
 * @param options.urlParams - Additional URL parameters (e.g., filter values, hide flags)
 * @returns HTML string with div container and script tag (width/height are hardcoded in embed-helper)
 */
export function generateEmbedCode(options: EmbedCodeOptions): string {
  const { configUrl, urlParams = {} } = options

  // Build full config URL with query parameters
  const params = new URLSearchParams()
  Object.entries(urlParams).forEach(([key, value]) => {
    if (value) params.set(key, value)
  })
  const fullConfigUrl = params.toString() ? `${configUrl}?${params.toString()}` : configUrl

  // Generate div-based embed code (width and height are hardcoded in embed-helper)
  const embedCode = `<div
  data-cove-embed
  data-config-url="${fullConfigUrl}"
></div>
<script src="${getHelperScriptUrl()}"></script>`

  return embedCode
}
