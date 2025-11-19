import React from 'react'
// import html2pdf from 'html2pdf.js'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

const buttonText = {
  pdf: 'Download PDF',
  image: 'Download Image',
  csv: 'Download Data (CSV)',
  link: 'Link to Dataset'
}

const saveImageAs = (uri, filename) => {
  const ie = navigator.userAgent.match(/MSIE\s([\d.]+)/)
  const ie11 = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/)
  const ieEdge = navigator.userAgent.match(/Edge/g)
  const ieVer = ie ? ie[1] : ie11 ? 11 : ieEdge ? 12 : -1

  if (ieVer > -1) {
    const fileAsBlob = new Blob([uri], {
      type: 'image/png'
    })
    window.navigator.msSaveBlob(fileAsBlob, filename)
  } else {
    const link = document.createElement('a')
    if (typeof link.download === 'string') {
      link.href = uri
      link.download = filename
      link.onclick = e => document.body.removeChild(e.target)
      document.body.appendChild(link)
      link.click()
    } else {
      window.open(uri)
    }
  }
}

const generateMedia = (state, type, elementToCapture, interactionLabel) => {
  // Identify Selector
  const baseSvg = document.querySelector(`[data-download-id=${elementToCapture}]`)

  // Extract title from different state structures
  const getTitle = state => {
    if (state?.dashboard?.title) return state.dashboard.title
    if (state?.general?.title) return state.general.title
    if (state?.title) return state.title
    return undefined
  }

  // Handles different state title locations between components
  // Apparently some packages use state.title where others use state.general.title
  const handleFileName = state => {
    // dashboard titles
    if (state?.dashboard?.title)
      return (
        state.dashboard.title.replace(/\s+/g, '-').toLowerCase() +
        '-' +
        date.getDate() +
        (date.getMonth() + 1) +
        date.getFullYear()
      )

    // map titles
    if (state?.general?.title)
      return (
        state.general.title.replace(/\s+/g, '-').toLowerCase() +
        '-' +
        date.getDate() +
        (date.getMonth() + 1) +
        date.getFullYear()
      )

    // chart titles
    if (state?.title)
      return (
        state.title.replace(/\s+/g, '-').toLowerCase() + '-' + date.getDate() + (date.getMonth() + 1) + date.getFullYear()
      )

    return 'no-title'
  }

  // Construct filename with timestamp
  const date = new Date()
  const filename = handleFileName(state)

  switch (type) {
    case 'image':
      const container = document.createElement('div')

      // Set container properties for optimal layout preservation
      container.style.display = 'inline-block'
      container.style.position = 'relative'
      container.style.overflow = 'visible'

      // Use configurable padding instead of fixed 35px
      // Only add minimal padding if specifically configured or if no title
      const downloadPadding = state.downloadImagePadding !== undefined ? state.downloadImagePadding : (!state.showTitle ? 10 : 0);
      if (downloadPadding > 0) {
        container.style.padding = `${downloadPadding}px`
      }

      // Clone element with improved style preservation
      const clonedElement = baseSvg.cloneNode(true) as HTMLElement

      // Preserve original dimensions to prevent layout shifts
      if (baseSvg instanceof HTMLElement) {
        const originalRect = baseSvg.getBoundingClientRect()
        const originalStyles = window.getComputedStyle(baseSvg)

        // Preserve key layout properties
        clonedElement.style.width = originalRect.width > 0 ? `${originalRect.width}px` : originalStyles.width
        clonedElement.style.height = originalRect.height > 0 ? `${originalRect.height}px` : originalStyles.height
        clonedElement.style.minWidth = originalStyles.minWidth
        clonedElement.style.minHeight = originalStyles.minHeight
        clonedElement.style.maxWidth = originalStyles.maxWidth
        clonedElement.style.maxHeight = originalStyles.maxHeight

        // Preserve positioning and spacing
        clonedElement.style.margin = originalStyles.margin
        clonedElement.style.padding = originalStyles.padding
        clonedElement.style.display = originalStyles.display
        clonedElement.style.position = 'relative' // Ensure consistent positioning in container
      }

      container.appendChild(clonedElement)

      // Fix potential layout issues in cloned content
      const optimizeClonedContent = () => {
        // Fix SVG scaling and text positioning issues
        const svgElements = clonedElement.querySelectorAll('svg')
        svgElements.forEach((svg) => {
          if (svg instanceof SVGElement) {
            // Preserve SVG viewBox and dimensions
            const originalSvg = baseSvg instanceof SVGElement
              ? baseSvg
              : baseSvg.querySelector('svg')
            if (originalSvg instanceof SVGElement) {
              // Copy critical attributes that might affect rendering
              const preserveAttributes = ['viewBox', 'width', 'height', 'preserveAspectRatio']
              preserveAttributes.forEach(attr => {
                const value = originalSvg.getAttribute(attr)
                if (value) {
                  svg.setAttribute(attr, value)
                }
              })
            }

            // Ensure text elements are positioned correctly
            const textElements = svg.querySelectorAll('text, tspan')
            textElements.forEach((text) => {
              // Preserve text positioning attributes
              const positionAttrs = ['x', 'y', 'dx', 'dy', 'transform']
              positionAttrs.forEach(attr => {
                const tagName = text.tagName.toLowerCase();
                const attrValue = text.getAttribute(attr);
                let originalText = null;
                if (attrValue !== null && originalSvg) {
                  originalText = originalSvg.querySelector(`${tagName}[${attr}="${CSS.escape(attrValue)}"]`);
                }
                if (originalText && originalText.getAttribute(attr)) {
                  text.setAttribute(attr, originalText.getAttribute(attr));
                }
              })
            })
          }
        })

        // Fix flex layout issues that might cause spacing problems
        const flexSelector = '[class*="flex"], [class*="d-flex"]';
        const flexContainers = clonedElement.querySelectorAll(flexSelector);
        const originalFlexContainers = baseSvg.querySelectorAll(flexSelector);
        flexContainers.forEach((container, idx) => {
          if (container instanceof HTMLElement) {
            const originalContainer = originalFlexContainers[idx];
            if (originalContainer instanceof HTMLElement) {
              const originalStyles = window.getComputedStyle(originalContainer)
              container.style.width = originalStyles.width
              container.style.height = originalStyles.height
              container.style.flexDirection = originalStyles.flexDirection
              container.style.justifyContent = originalStyles.justifyContent
              container.style.alignItems = originalStyles.alignItems
            }
          }
        })
      }

      optimizeClonedContent()

      const downloadImage = async () => {
        document.body.appendChild(container) // Append container to the DOM

        // Fix select elements to show their current selected values before screenshot
        const selectElements = container.querySelectorAll('select')
        const originalSelects = baseSvg.querySelectorAll('select')

        selectElements.forEach((select, index) => {
          const originalSelect = originalSelects[index]
          if (originalSelect && originalSelect.value) {
            select.value = originalSelect.value
            // Also update the visual display for browsers that don't update immediately
            const selectedOption = select.querySelector(`option[value="${originalSelect.value}"]`) as HTMLOptionElement
            if (selectedOption) {
              selectedOption.selected = true
            }
          }
        })

        import(/* webpackChunkName: "html2canvas" */ 'html2canvas').then(mod => {
          // Calculate optimal dimensions for capture
          const containerRect = container.getBoundingClientRect()

          mod
            .default(container, {
              // Ignore download buttons and other UI elements
              ignoreElements: el =>
                el.className?.indexOf &&
                el.className.search(/download-buttons|download-links|data-table-container/) !== -1,

              // Improved rendering options
              useCORS: true,
              allowTaint: true,
              scale: 2, // Higher DPI for better quality
              logging: false, // Disable console logs

              // Dimension controls for better layout preservation
              width: containerRect.width,
              height: containerRect.height,

              // Positioning controls
              scrollX: 0,
              scrollY: 0,
              x: 0,
              y: 0,

              // Canvas optimization
              backgroundColor: null, // Preserve transparency
            })
            .then(canvas => {
              document.body.removeChild(container) // Clean up container
              saveImageAs(canvas.toDataURL(), filename + '.png')
              publishAnalyticsEvent({
                vizType: state.type,
                vizSubType: getVizSubType(state),
                eventType: `image_download`,
                eventAction: 'click',
                eventLabel: interactionLabel,
                vizTitle: getTitle(state)
              })
            })
        })
      }
      downloadImage()

      return
    case 'pdf':
      // let opt = {
      //   margin: 0.2,
      //   filename: filename + '.pdf',
      //   image: { type: 'png' },
      //   html2canvas: { scale: 2, logging: false },
      //   jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      // }

      // html2pdf()
      //   .set(opt)
      //   .from(baseSvg)
      //   .save()
      //   .then(() => {
      //     generatedImage.remove() // Remove generated png
      //     baseSvg.style.display = null // Re-display initial svg map
      //   })
      console.warn('COVE: pdf downloads disabled')
      break
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'")
      break
  }
}

const Button = ({ state, text, type, title, elementToCapture, interactionLabel = '' }) => {
  const buttonClasses = ['btn', 'btn-primary']
  return (
    <button
      className={buttonClasses.join(' ')}
      title={title}
      onClick={() => generateMedia(state, type, elementToCapture, interactionLabel)}
      style={{ lineHeight: '1.4em' }}
    >
      {buttonText[type]}
    </button>
  )
}

// Link to CSV/JSON data
const Link = ({ config, dashboardDataConfig, interactionLabel }) => {
  let dataConfig = dashboardDataConfig || config
  // Handles Maps & Charts
  if (dataConfig.dataFileSourceType === 'url' && dataConfig.dataFileName && config.table.showDownloadUrl) {
    return (
      <a
        href={dataConfig.dataFileName}
        title={buttonText.link}
        target='_blank'
        onClick={() => {
          publishAnalyticsEvent({
            vizType: config.type,
            vizSubType: getVizSubType(config),
            eventType: 'clicked_data_link_to_view',
            eventAction: 'click',
            eventLabel: interactionLabel,
            vizTitle: getVizTitle(config)
          })
        }}
      >
        {buttonText.link}
      </a>
    )
  }

  // Handles Dashboards
  return config?.table?.showDownloadUrl && dataConfig.dataUrl ? (
    <a
      href={dataConfig.dataUrl}
      title='Link to view full data set'
      target='_blank'
      onClick={() => {
        publishAnalyticsEvent({
          vizType: config.type,
          vizSubType: getVizSubType(config),
          eventType: 'data_viewed',
          eventAction: 'click',
          eventLabel: interactionLabel,
          vizTitle: getVizTitle(config)
        })
      }}
    >
      {buttonText.link}
    </a>
  ) : null
}

const Section = ({ children, classes }) => {
  return (
    <section className={classes.join(' ')}>
      <span>{children}</span>
    </section>
  )
}

const MediaControls = () => null

MediaControls.Section = Section
MediaControls.Link = Link
MediaControls.Button = Button
MediaControls.generateMedia = generateMedia

export default MediaControls
