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

  // Generate timestamp once for consistency
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const timestamp = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`

  // Handles different state title locations between components
  // Apparently some packages use state.title where others use state.general.title
  const handleFileName = state => {
    // dashboard titles
    if (state?.dashboard?.title) return `${state.dashboard.title.replace(/\s+/g, '-').toLowerCase()}-${timestamp}`

    // map titles
    if (state?.general?.title) return `${state.general.title.replace(/\s+/g, '-').toLowerCase()}-${timestamp}`

    // chart titles
    if (state?.title) return `${state.title.replace(/\s+/g, '-').toLowerCase()}-${timestamp}`

    return 'no-title'
  }

  const filename = handleFileName(state)

  switch (type) {
    case 'image':
      const container = document.createElement('div')

      // Get original dimensions to maintain width in clone
      const computedStyle = getComputedStyle(baseSvg)
      const origWidth =
        parseFloat(computedStyle.width) -
        (parseFloat(computedStyle.paddingLeft) || 0) -
        (parseFloat(computedStyle.paddingRight) || 0)

      // Add padding to container but keep visualization the same size
      container.style.width = `${origWidth + 36}px`
      container.style.padding = '18px'

      const clonedElement = baseSvg.cloneNode(true) as HTMLElement

      clonedElement.style.padding = '0'

      // Replace canvas elements with images (for county maps, etc.)
      // Canvas pixel data doesn't clone, so convert to image before screenshot
      const originalCanvases = baseSvg.querySelectorAll('canvas')
      const clonedCanvases = clonedElement.querySelectorAll('canvas')
      clonedCanvases.forEach((clonedCanvas, index) => {
        const originalCanvas = originalCanvases[index]
        if (originalCanvas && originalCanvas.width > 0 && originalCanvas.height > 0) {
          const img = document.createElement('img')
          img.src = originalCanvas.toDataURL('image/png')
          img.width = originalCanvas.width
          img.height = originalCanvas.height
          img.className = originalCanvas.className
          clonedCanvas.parentNode.replaceChild(img, clonedCanvas)
        }
      })

      // Expand SVG width to prevent clipping of overflowing content (like tick labels)
      const svgWidthBuffer = 25
      const svgElements = clonedElement.querySelectorAll('svg')
      svgElements.forEach(svg => {
        const currentWidth = parseInt(svg.getAttribute('width') || '0')
        if (currentWidth > 0) {
          svg.setAttribute('width', (currentWidth + svgWidthBuffer).toString())
        }

        // Remove animation classes to show final state immediately without animation
        svg.classList.remove('animated', 'animate')
      })

      container.appendChild(clonedElement)

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
          mod
            .default(container, {
              ignoreElements: el =>
                el.className?.indexOf &&
                el.className.search(/download-buttons|download-links|data-table-container/) !== -1,
              useCORS: true,
              scale: 2, // Better quality
              allowTaint: true
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

// Button component for Dashboard downloads (renders as actual button)
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

// DownloadLink component for Chart/Map downloads (renders as text link)
const DownloadLink = ({ state, type, title, elementToCapture, interactionLabel = '' }) => {
  const vizType = state?.type === 'map' ? 'Map' : 'Chart'
  const format = type === 'pdf' ? 'PDF' : 'PNG'
  const linkText = `Download ${vizType} (${format})`

  return (
    <a
      role='button'
      onClick={() => generateMedia(state, type, elementToCapture, interactionLabel)}
      aria-label={title}
      title={title}
      className={`no-border`}
      style={{ cursor: 'pointer' }}
      data-html2canvas-ignore
    >
      {linkText}
    </a>
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
MediaControls.DownloadLink = DownloadLink
MediaControls.generateMedia = generateMedia

export default MediaControls
