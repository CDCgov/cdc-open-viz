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
 * Get the embed page URL for creating iframes.
 * - In dev mode: returns localhost URL
 * - On cdc.gov domains: returns relative path for same-origin iframe loading
 * - On partner sites: returns full absolute URL to www.cdc.gov
 */
export function getEmbedPageUrl(): string {
  if (isDevMode()) {
    return 'http://localhost:8080'
  }

  const embedPath = '/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html'

  // On cdc.gov domains, use relative path for same-origin
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    if (hostname === 'cdc.gov' || hostname.endsWith('.cdc.gov')) {
      return embedPath
    }
  }

  // For partner sites, use full absolute URL
  return `https://www.cdc.gov${embedPath}`
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
<script type="module" src="${getHelperScriptUrl()}"></script>`

  return embedCode
}
