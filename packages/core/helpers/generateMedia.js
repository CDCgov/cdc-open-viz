import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas'

const generateMedia = (state, type) => {
  // Identify Selector
  const baseSvg = document.querySelector('.cdc-open-viz-module')

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

export { generateMedia }
