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
}

/**
 * Generate basic iframe embed code for partners
 *
 * @param options.configUrl - URL to the published config JSON
 * @param options.width - iframe width (default: "100%")
 * @param options.height - iframe height (default: "300")
 * @param options.embedBaseUrl - Base URL for embed page (default: production URL)
 * @param options.helperScriptUrl - URL for embed-helper.js (default: production URL)
 * @returns HTML string with iframe and script tag
 */
export function generateEmbedCode(options: EmbedCodeOptions): string {
  const {
    configUrl,
    width = '100%',
    height = '300',
    embedBaseUrl = 'https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed',
    helperScriptUrl = 'https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js'
  } = options

  // Construct embed page URL with config parameter
  const embedUrl = `${embedBaseUrl}/embed.html?configUrl=${configUrl}`

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

/**
 * Generate link to embed code generator with pre-filled config
 *
 * @param configUrl - URL to the published config JSON
 * @param generatorBaseUrl - Base URL for generator (default: production URL)
 * @returns URL string to generator page
 */
export function generateGeneratorLink(configUrl: string, generatorBaseUrl?: string): string {
  const baseUrl = generatorBaseUrl || 'https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed'
  return `${baseUrl}/generator.html?configUrl=${configUrl}`
}
