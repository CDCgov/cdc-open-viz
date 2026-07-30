import React from 'react'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { prepareScreenshotContainer } from '@cdc/core/helpers/prepareScreenshot'
import { DownloadLinkContent } from './DownloadLinkIcon'

const buttonText = {
  pdf: 'Download PDF',
  image: 'Download Image',
  csv: 'Download Data (CSV)',
  link: 'Link to Dataset'
}

const getStandaloneDatasetUrl = config => {
  if (!config?.table?.showDownloadUrl) return null

  if (config.type === 'table') {
    return config.runtimeDataUrl || config.dataUrl || null
  }

  if (config.dataFileSourceType === 'url') {
    return config.runtimeDataUrl || config.dataUrl || config.dataFileName || null
  }

  return null
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

const waitForClonedImages = async (container, timeoutMs = 3000) => {
  const images = Array.from(container.querySelectorAll('img'))

  if (images.length === 0) return

  const withTimeout = promise =>
    new Promise(resolve => {
      const timer = setTimeout(() => resolve(undefined), timeoutMs)
      promise.finally(() => {
        clearTimeout(timer)
        resolve(undefined)
      })
    })

  await Promise.all(
    images.map(img => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve()

      if (typeof img.decode === 'function') {
        return withTimeout(img.decode())
      }

      return withTimeout(
        new Promise(resolve => {
          img.onload = () => resolve(undefined)
          img.onerror = () => resolve(undefined)
        })
      )
    })
  )
}

const shouldIgnoreScreenshotElement = (el: Element, exportContainer: HTMLElement) => {
  const className = typeof el.className === 'string' ? el.className : ''

  if (className.search(/download-buttons|download-links|data-table-container/) !== -1) {
    return true
  }

  // Ignore all other COVE visualizations on the page while preserving the export clone.
  return el.classList?.contains('cove-visualization') && !exportContainer.contains(el)
}

const generateMedia = (
  state,
  type,
  elementToCapture,
  interactionLabel,
  includeContextInDownload = false,
  imageFilenameFallback
) => {
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
  const normalizeImageFileNameBase = value => value.replace(/\s+/g, '-').toLowerCase()

  const handleFileName = state => {
    const title = getTitle(state)
    if (title) return `${normalizeImageFileNameBase(title)}-${timestamp}`

    if (imageFilenameFallback) return `${normalizeImageFileNameBase(imageFilenameFallback)}-${timestamp}`

    return 'no-title'
  }

  const filename = handleFileName(state)

  switch (type) {
    case 'image':
      // Prepare screenshot container with all cloning, styling, and transformations
      const container = prepareScreenshotContainer(baseSvg, includeContextInDownload, elementToCapture)

      const downloadImage = async () => {
        // Append to main element if exists, otherwise body
        const targetElement = document.querySelector('main') || document.body
        targetElement.appendChild(container)

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

        try {
          await waitForClonedImages(container)

          const html2canvas = (await import(/* webpackChunkName: "html2canvas" */ 'html2canvas')).default
          const canvas = await html2canvas(container, {
            ignoreElements: el => shouldIgnoreScreenshotElement(el, container),
            useCORS: true,
            scale: 2, // Better quality
            allowTaint: true
          })

          saveImageAs(canvas.toDataURL(), filename + '.png')
          publishAnalyticsEvent({
            vizType: state.type,
            vizSubType: getVizSubType(state),
            eventType: `image_download`,
            eventAction: 'click',
            eventLabel: interactionLabel,
            vizTitle: getTitle(state)
          })
        } finally {
          targetElement.removeChild(container) // Clean up container from wherever we appended it
        }
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
const Button = ({
  state,
  text,
  type,
  title,
  elementToCapture,
  interactionLabel = '',
  includeContextInDownload = false,
  appearance = 'button',
  imageFilenameFallback
}) => {
  const buttonClasses = appearance === 'link' ? ['download-button-link', 'no-border'] : ['btn', 'btn-primary']
  const showDownloadIcon = appearance === 'link' && type === 'image'

  if (showDownloadIcon) buttonClasses.push('download-link-with-icon')

  const label =
    type === 'csv'
      ? state?.table?.downloadDataLabel || buttonText[type]
      : type === 'image'
      ? state?.dashboard?.downloads?.downloadImageLabel || state?.table?.downloadImageLabel || buttonText[type]
      : buttonText[type]

  return (
    <button
      type='button'
      className={buttonClasses.join(' ')}
      title={title}
      onClick={() =>
        generateMedia(state, type, elementToCapture, interactionLabel, includeContextInDownload, imageFilenameFallback)
      }
      style={{ lineHeight: '1.4em' }}
    >
      {showDownloadIcon ? <DownloadLinkContent type='image'>{label}</DownloadLinkContent> : label}
    </button>
  )
}

// DownloadLink component for Chart/Map downloads (renders as text link)
const DownloadLink = ({
  state,
  type,
  title,
  elementToCapture,
  interactionLabel = '',
  includeContextInDownload = false
}) => {
  const vizType = state?.type === 'map' ? 'Map' : 'Chart'
  const format = type === 'pdf' ? 'PDF' : 'PNG'
  const defaultLinkText = `Download ${vizType} (${format})`
  const linkText = type === 'image' ? state?.table?.downloadImageLabel || defaultLinkText : defaultLinkText
  const showDownloadIcon = type === 'image'

  return (
    <a
      role='button'
      onClick={() => generateMedia(state, type, elementToCapture, interactionLabel, includeContextInDownload)}
      aria-label={title}
      title={title}
      className={`no-border${showDownloadIcon ? ' download-link-with-icon' : ''}`}
      style={{ cursor: 'pointer' }}
      data-html2canvas-ignore
    >
      {showDownloadIcon ? <DownloadLinkContent type='image'>{linkText}</DownloadLinkContent> : linkText}
    </a>
  )
}

// Link to CSV/JSON data
const Link = ({ config, dashboardDataConfig, interactionLabel }) => {
  let dataConfig = dashboardDataConfig || config
  const standaloneDatasetUrl = getStandaloneDatasetUrl(config)
  const linkText = config?.table?.downloadUrlLabel || buttonText.link
  // Handles Maps & Charts
  if (standaloneDatasetUrl && !dashboardDataConfig) {
    return (
      <a
        href={standaloneDatasetUrl}
        title={linkText}
        target='_blank'
        className='download-link-with-icon'
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
        <DownloadLinkContent type='dataset'>{linkText}</DownloadLinkContent>
      </a>
    )
  }

  // Handles Dashboards
  const showDashboardDatasetLink =
    config?.type === 'table' ? config?.table?.showDatasetLink === true : config?.table?.showDownloadUrl

  return showDashboardDatasetLink && dataConfig.dataUrl ? (
    <a
      href={dataConfig.dataUrl}
      title='Link to view full data set'
      target='_blank'
      className='download-link-with-icon'
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
      <DownloadLinkContent type='dataset'>{linkText}</DownloadLinkContent>
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
