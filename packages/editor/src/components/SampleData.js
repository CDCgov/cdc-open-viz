import React, { useContext } from 'react'
import SampleDataContext from '../samples/SampleDataContext'

// Data Samples
import validChartData from './../samples/valid-data-chart.csv'
import validMapData from './../samples/valid-data-map.csv'
import validCountyMapData from './../samples/valid-county-data.csv'
import sampleGeoPoints from './../samples/valid-geo-point.csv'

// Add additional data to samples
const sampleData = {
  charts: [
    {
      text: 'Chart Sample Data',
      fileName: 'valid-data-chart.csv',
      data: validChartData
    }
  ],
  maps: [
    {
      text: 'United States: State Sample Data',
      fileName: 'valid-data-map.csv',
      data: validMapData
    },
    {
      text: 'United States: County Sample Data',
      fileName: 'valid-county-data.csv',
      data: validCountyMapData
    },
    {
      text: 'United States: Geo Point Sample Data',
      fileName: 'supported-cities.csv',
      data: sampleGeoPoints
    }
  ]
}

// Single Button
const Button = ({ text, fileName, data }) => {
  const { editingDataset, loadData } = useContext(SampleDataContext)
  const handleClick = e => loadData(new Blob([data], { type: 'text/csv' }), fileName, editingDataset)
  const handleKeyDown = e => e.keyCode === 13 && loadData(new Blob([data], { type: 'text/csv' }), fileName, editingDataset)
  // prettier-ignore
  return (
    <button
      className='link link-upload'
      onClick={handleClick}
      onKeyDown={handleKeyDown}>
      {text}
    </button>
  )
}

// Map Buttons
const MapSampleDataButtons = () => {
  return sampleData.maps.map(sample => <Button key={sample.fileName} text={sample.text} fileName={sample.fileName} data={sample.data} />)
}

// Chart Buttons
const ChartSampleDataButtons = () => {
  return sampleData.charts.map(sample => <Button key={sample.fileName} text={sample.text} fileName={sample.fileName} data={sample.data} />)
}

// All Buttons
const Buttons = () => {
  const { config } = useContext(SampleDataContext)

  return (
    <>
      <h3 className='heading-3'>Load Sample Data:</h3>
      <ul className='sample-data-list'>
        {config.type !== 'map' && <ChartSampleDataButtons />}
        {config.type !== 'chart' && <MapSampleDataButtons />}
      </ul>
    </>
  )
}

const SampleData = () => null
SampleData.data = sampleData
SampleData.Buttons = Buttons

export default SampleData
