\\import React from 'react'
import CdcChartComponent from './CdcChartComponent'

function CdcChart(props) {
    const {configUrl ,isEditor ,isDebug} = props
  return (
    <CdcChartComponent configUrl={configUrl} isEditor={isEditor} isDebug={isDebug} />
  )
}

export default CdcChart