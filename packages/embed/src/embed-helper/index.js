/**
 * CDC COVE Embed Helper - Phase 2
 *
 * Standalone script that handles iframe resizing for embedded COVE visualizations.
 * Partners include this on their page along with the iframe(s).
 *
 * Usage:
 * <iframe src="..." data-cove-embed width="100%" height="400"></iframe>
 * <script src="https://www.cdc.gov/.../embed-helper.js"></script>
 */

;(function () {
  'use strict'

  let iframeCounter = 0

  // Initialize an iframe with unique ID and event listener
  function initializeIframe(iframe) {
    // Skip if already initialized
    if (iframe.hasAttribute('data-cove-id')) {
      return
    }

    const id = `cove-${iframeCounter++}`
    iframe.setAttribute('data-cove-id', id)

    // Send the ID to the iframe via postMessage
    const sendId = () => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          {
            type: 'cove:setId',
            id: id
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

  // Initialize existing iframes
  const existingIframes = document.querySelectorAll('iframe[data-cove-embed]')
  if (existingIframes.length > 0) {
    existingIframes.forEach(initializeIframe)
  }

  // Watch for dynamically added iframes (for React/SPA apps)
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        // Check if the added node is an iframe
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches && node.matches('iframe[data-cove-embed]')) {
            initializeIframe(node)
          }
          // Also check children in case a container was added
          const iframes = node.querySelectorAll && node.querySelectorAll('iframe[data-cove-embed]')
          if (iframes && iframes.length > 0) {
            iframes.forEach(initializeIframe)
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
    // Security: Only accept messages from cdc.gov (any subdomain or no subdomain) OR localhost (for dev)
    const isValidOrigin =
      event.origin.match(/^https:\/\/([a-z0-9-]+\.)?cdc\.gov$/) || event.origin.match(/^http:\/\/localhost(:\d+)?$/)

    if (!isValidOrigin) {
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
})()
