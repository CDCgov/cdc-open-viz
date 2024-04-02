const update_4_24_3 = async config => {
  const ver = '4.24.3'

  let newConfig = { ...config }

  newConfig.validated = ver

  if (newConfig.type === 'chart') {
    if (newConfig.xAxis.sortDates) {
      newConfig.xAxis.type = 'date-time'
    }
    newConfig.table.download = true

    delete newConfig.xAxis.sortDates
  }

  if (newConfig.type === 'map') {
    newConfig.table.download = true
    newConfig.general.showDownloadButton = true
  }

  return newConfig
}

export default update_4_24_3
