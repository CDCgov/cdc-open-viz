import React from 'react'

let generateData = () => {
  let demoData = 75.63
  let spacer = 30
  let radius = 14
  let width = 298

  let svgData = []

  for (let i = 0; i <= 100; i++) {
    svgData.push(<circle cx={radius} cy='284' r='14' style={{ fill: '#add8e6' }} shapeRendering={'geometricPrecision'} />)
  }

  return svgData
}

let Chart = () => {
  return (
    <svg viewBox="0 0 298 298" xmlns="http://www.w3.org/2000/svg">
      {generateData()}
    </svg>
  )
}

function CdcWaffleChart(configUrl) {
  return (
    <div className={'cdc-waffle-chart'}>
      <Chart />
    </div>
  )
}

export default CdcWaffleChart
