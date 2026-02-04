/**
 * CDC COVE Embed Helper
 *
 * Standalone script that handles iframe creation and resizing for embedded COVE visualizations.
 * Partners place a div container on their page with data-config-url attribute.
 * This script finds the div, creates an iframe (width: 100%, initial height: 400px),
 * and handles dynamic resizing.
 *
 * Usage:
 * <div data-cove-embed data-config-url="/path/to/config.json"></div>
 * <script src="https://www.cdc.gov/.../embed-helper.js"></script>
 */

import { isValidMessageOrigin } from './urlValidation'
import { getEmbedBaseUrl } from './embedCodeGenerator'

let iframeCounter = 0

// Initialize an iframe with unique ID and event listener
function initializeIframe(iframe) {
  // Skip if already initialized
  if (iframe.hasAttribute('data-cove-id')) {
    return
  }

  const id = `cove-${iframeCounter++}`
  iframe.setAttribute('data-cove-id', id)

  // Send the ID and embed page URL to the iframe via postMessage
  const sendId = () => {
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        {
          type: 'cove:setId',
          id: id,
          embedPageUrl: window.location.origin + window.location.pathname
        },
        '*'
      )
    }
  }

  // If iframe is already loaded, send immediately
  if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
    sendId()
  }

  // Also listen for load event in case it hasn't loaded yet
  iframe.addEventListener('load', sendId)
}

// Create iframe from div container
function createIframeFromContainer(container) {
  // Skip if already processed
  if (container.hasAttribute('data-cove-processed')) {
    return
  }
  container.setAttribute('data-cove-processed', 'true')

  // Read configuration from data attributes
  const configUrl = container.dataset.configUrl

  if (!configUrl) {
    console.error('CDC COVE Embed: data-config-url attribute is required')
    return
  }

  // Parse config URL to separate base path from query parameters
  // data-config-url might be: "/path/config.json?state=CA&hidestate=true"
  // We need to split into: configUrl + separate params for embed page
  const [baseConfigUrl, queryString] = configUrl.split('?')

  // Build clean URL manually (avoid encoding configUrl path)
  let iframeSrc = `${getEmbedBaseUrl()}?configUrl=${baseConfigUrl}`

  // Add any additional query parameters from the config URL
  if (queryString) {
    iframeSrc += `&${queryString}`
  }

  // Create iframe element with hardcoded dimensions
  const iframe = document.createElement('iframe')
  iframe.src = iframeSrc

  iframe.width = '100%'
  iframe.height = '400'
  iframe.frameBorder = '0'
  iframe.title = 'CDC Data Visualization'
  iframe.setAttribute('data-cove-embed', '')

  // Apply min-height style to container
  container.style.minHeight = '400px'

  // Inject iframe into container
  container.appendChild(iframe)

  // Initialize the iframe for resizing
  initializeIframe(iframe)
}

// Process existing div containers
const existingContainers = document.querySelectorAll('div[data-cove-embed]')
if (existingContainers.length > 0) {
  existingContainers.forEach(createIframeFromContainer)
}

// Watch for dynamically added containers (for React/SPA apps)
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Check for div containers
        if (node.matches && node.matches('div[data-cove-embed]')) {
          createIframeFromContainer(node)
        }
        // Also check children in case a container was added
        const containers = node.querySelectorAll && node.querySelectorAll('div[data-cove-embed]')
        if (containers && containers.length > 0) {
          containers.forEach(createIframeFromContainer)
        }
      }
    })
  })
})

// Start observing the document for iframe additions
observer.observe(document.body, {
  childList: true,
  subtree: true
})

// Listen for resize messages from embedded visualizations
window.addEventListener('message', function (event) {
  if (!isValidMessageOrigin(event.origin)) {
    console.warn('Embed Helper: Rejected message from invalid origin:', event.origin)
    return
  }

  // Handle resize events
  if (event.data && event.data.type === 'cove:resize') {
    const iframeId = event.data.id
    const height = event.data.height

    if (!height || typeof height !== 'number') {
      console.warn('CDC COVE Embed Helper: Invalid height received:', height)
      return
    }

    // Find the corresponding iframe
    const iframe = document.querySelector(`iframe[data-cove-id="${iframeId}"]`)

    if (iframe) {
      iframe.style.height = height + 'px'
    } else {
      console.warn(`[Embed Helper] ✗ Could not find iframe with id "${iframeId}"`)
    }
  }
})
