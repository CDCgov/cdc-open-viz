import React from 'react'
import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas'

const useGenerateMedia = () => {
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

  const generateMedia = (state, type, elementToCapture = '.cdc-open-viz-module') => {
    // Identify Selector
    const baseSvg = document.querySelector(elementToCapture)

    // Handles different state title locations between components
    // Apparently some packages use state.title where others use state.general.title
    const handleFileName = state => {
      if (state.general?.title) {
        return state.general.title.replace(/\s+/g, '-').toLowerCase() + '-' + date.getDate() + date.getMonth() + date.getFullYear()
      } else {
        return state.title.replace(/\s+/g, '-').toLowerCase() + '-' + date.getDate() + date.getMonth() + date.getFullYear()
      }
    }

    // Construct filename with timestamp
    const date = new Date()
    const filename = handleFileName(state)

    switch (type) {
      case 'image':
        html2canvas(baseSvg).then(canvas => {
          saveImageAs(canvas.toDataURL(), filename + '.png')
        })
        return
      case 'pdf':
        let opt = {
          margin: 0.2,
          filename: filename + '.pdf',
          image: { type: 'png' },
          html2canvas: { scale: 2, logging: false },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }

        html2pdf()
          .set(opt)
          .from(baseSvg)
          .save()
          .then(() => {
            generatedImage.remove() // Remove generated png
            baseSvg.style.display = null // Re-display initial svg map
          })
        break
      default:
        console.warn("generateMedia param 2 type must be 'image' or 'pdf'")
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

  // TODO: convert to standardized COVE button
  const DownloadButton = ({ state, text, type, title, elementToCapture }) => {
    const buttonClasses = ['btn', 'btn-download', `${handleTheme(state)}`]
    return (
      <button className={buttonClasses.join(' ')} title={title} onClick={() => generateMedia(state, type, elementToCapture)} style={{ marginRight: '10px', lineHeight: '1.4em' }}>
        {text}
      </button>
    )
  }

  return { generateMedia, DownloadButton }
}

export default useGenerateMedia
