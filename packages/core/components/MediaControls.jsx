import React from 'react'
// import html2pdf from 'html2pdf.js'

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

const generateMedia = (state, type, elementToCapture) => {
  // Identify Selector
  const baseSvg = document.querySelector(`[data-download-id=${elementToCapture}]`)

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
      const container = document.createElement('div')

      // On screenshots without a title (like some charts), add padding around the chart svg
      if (!state.showTitle) {
        container.style.padding = '35px'
      }
      container.appendChild(baseSvg.cloneNode(true)) // Clone baseSvg to avoid modifying the original

      const downloadImage = async () => {
        document.body.appendChild(container) // Append container to the DOM
        import(/* webpackChunkName: "html2canvas" */ 'html2canvas').then(mod => {
          mod
            .default(container, {
              ignoreElements: el =>
                el.className?.indexOf &&
                el.className.search(/download-buttons|download-links|data-table-container/) !== -1
            })
            .then(canvas => {
              saveImageAs(canvas.toDataURL(), filename + '.png')
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
