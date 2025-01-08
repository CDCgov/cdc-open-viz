import React from 'react'
// import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image'

const buttonText = {
  pdf: 'Download PDF',
  image: 'Download Image',
  csv: 'Download Data (CSV)',
  link: 'Link to Dataset'
}

function saveImage(element) {
  domtoimage
    .toPng(element)
    .then(dataUrl => {
      const link = document.createElement('a')
      link.href = dataUrl
      link.download = 'screenshot.png'
      link.click()
    })
    .catch(error => {
      console.error('Failed to capture image:', error)
    })
}

const saveImageAs = (uri, filename) => {
  // Target resolution in inches
  const targetWidthInInches = 13.33 // 13.33 inches for 4000 pixels at 300 DPI
  const targetHeightInInches = 7.5 // 7.5 inches for 2250 pixels at 300 DPI
  const dpi = 300

  // Calculate target resolution in pixels
  const targetWidth = targetWidthInInches * dpi
  const targetHeight = targetHeightInInches * dpi

  // Check for the device pixel ratio to handle different screen densities
  const dpr = window.devicePixelRatio || 1 // Default to 1 if DPR is not available

  // Create an image to load the URI
  const img = new Image()
  img.src = uri

  img.onload = () => {
    // Create a canvas to adjust the image size
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    // Set canvas size to the target resolution, scaled by device pixel ratio
    canvas.width = targetWidth * dpr
    canvas.height = targetHeight * dpr

    // Scale the context to handle high DPI
    ctx.scale(dpr, dpr)

    // ctx.filter = 'grayscale(100%)'

    // Draw the image on the canvas, scaling it to fit the target resolution
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight)

    // Convert canvas to data URL with high quality
    const finalUri = canvas.toDataURL('image/jpeg', 1) // Highest quality

    // Saving logic for IE and modern browsers
    const ie = navigator.userAgent.match(/MSIE\s([\d.]+)/)
    const ie11 = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/)
    const ieEdge = navigator.userAgent.match(/Edge/g)
    const ieVer = ie ? ie[1] : ie11 ? 11 : ieEdge ? 12 : -1

    if (ieVer > -1) {
      // IE-specific file saving logic
      const fileAsBlob = new Blob([finalUri], { type: 'image/jpeg' })
      window.navigator.msSaveBlob(fileAsBlob, filename)
    } else {
      // Modern browsers
      const link = document.createElement('a')
      if (typeof link.download === 'string') {
        link.href = finalUri
        link.download = filename
        link.onclick = e => document.body.removeChild(e.target)
        document.body.appendChild(link)
        link.click()
      } else {
        window.open(finalUri)
      }
    }
  }
}

const generateMedia = (state, type, elementToCapture) => {
  // Identify Selector
  const baseSvg = document.querySelector(`[data-download-id=${elementToCapture}]`)
  const aside = document.querySelector('aside') // Assuming aside contains the legend

  // Temporarily change the legend (aside) border color to black
  const originalBorder = aside ? aside.style.border : null
  if (aside) {
    aside.style.border = '1px solid var(--cool-gray-90)'
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
        date.getMonth() +
        date.getFullYear()
      )

    // map titles
    if (state?.general?.title)
      return (
        state.general.title.replace(/\s+/g, '-').toLowerCase() +
        '-' +
        date.getDate() +
        date.getMonth() +
        date.getFullYear()
      )

    // chart titles
    if (state?.title)
      return (
        state.title.replace(/\s+/g, '-').toLowerCase() + '-' + date.getDate() + date.getMonth() + date.getFullYear()
      )

    return 'no-title'
  }

  // Construct filename with timestamp
  const date = new Date()
  const filename = handleFileName(state)

  switch (type) {
    case 'image':
      html2canvas(baseSvg, {
        ignoreElements: el =>
          el.className?.indexOf && el.className.search(/download-buttons|download-links|data-table-container/) !== -1
      }).then(canvas => {
        if (state.visualizationType === 'Scatter Plot') {
          saveImage(baseSvg)
        } else {
          saveImageAs(canvas.toDataURL(), filename + '.jpeg')

          // Reset the aside border color after a delay
          setTimeout(() => {
            if (aside && originalBorder !== null) {
              aside.style.border = originalBorder
            }
          }, 1500) // Wait for half a second before resetting
        }
      })
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

// Handles different state theme locations between components
// Apparently some packages use state.headerColor where others use state.theme
const handleTheme = state => {
  if (state?.headerColor) return state.headerColor // ie. maps
  if (state?.theme) return state.theme // ie. charts
  return 'theme-notFound'
}

// Download CSV
const Button = ({ state, text, type, title, elementToCapture }) => {
  const buttonClasses = ['btn', 'btn-primary']
  return (
    <button
      className={buttonClasses.join(' ')}
      title={title}
      onClick={() => generateMedia(state, type, elementToCapture)}
      style={{ lineHeight: '1.4em' }}
    >
      {buttonText[type]}
    </button>
  )
}

// Link to CSV/JSON data
const Link = ({ config, dashboardDataConfig }) => {
  let dataConfig = dashboardDataConfig || config
  // Handles Maps & Charts
  if (dataConfig.dataFileSourceType === 'url' && dataConfig.dataFileName && config.table.showDownloadUrl) {
    return (
      <a href={dataConfig.dataFileName} title={buttonText.link} target='_blank'>
        {buttonText.link}
      </a>
    )
  }

  // Handles Dashboards
  return config?.table?.showDownloadUrl && dataConfig.dataUrl ? (
    <a href={dataConfig.dataUrl} title='Link to view full data set' target='_blank'>
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
