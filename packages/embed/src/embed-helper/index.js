/**
 * CDC COVE Embed Helper
 *
 * Standalone script that handles iframe resizing for embedded COVE visualizations.
 * Partners include this on their page along with the iframe.
 *
 * Phase 0: Minimal stub for testing build process
 */

;(function () {
  'use strict'

  // Find all COVE embed iframes
  const iframes = document.querySelectorAll('iframe[data-cove-embed]')

  if (iframes.length === 0) {
    console.warn('No COVE embed iframes found. Make sure iframes have data-cove-embed attribute.')
    return
  }

  // Assign unique IDs to each iframe
  iframes.forEach((iframe, index) => {
    const id = `cove-${index}`
    iframe.setAttribute('data-cove-id', id)
  })

  // Listen for resize messages from embedded visualizations
  window.addEventListener('message', function (event) {
    // Verify origin is from cdc.gov
    if (!event.origin.match(/^https:\/\/(www\.)?cdc\.gov$/)) {
      return
    }

    // Handle resize events
    if (event.data && event.data.type === 'cove:resize') {
      const iframeId = event.data.id
      const height = event.data.height

      const iframe = document.querySelector(`iframe[data-cove-id="${iframeId}"]`)

      if (iframe) {
        iframe.style.height = height + 'px'
      }
    }
  })
})()
