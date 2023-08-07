import React, { useContext } from 'react'
import SampleDataContext from '../samples/SampleDataContext'

// Data Samples
import validMapData from './../samples/valid-data-map.csv?raw'
import validChartData from './../samples/valid-data-chart.csv?raw'
import validCountyMapData from './../samples/valid-county-data.csv?raw'
import validGeoPoint from './../samples/valid-geo-point.csv?raw'
import validScatterPlot from './../samples/valid-scatterplot.csv?raw'
import validBoxPlotData from './../samples/valid-boxplot.csv?raw'
import validAreaChart from './../samples/valid-area-chart.json?raw'
import validWorldGeocodeData from './../samples/valid-world-geocode.json?raw'
import validForecastData from './../samples/valid-forecast-data.csv?raw'

// Add additional data to samples
const sampleData = {
  charts: [
    {
      text: 'Chart Sample Data',
      fileName: 'valid-data-chart.csv',
      data: validChartData
    },
    {
      text: 'Box Plot Sample Data',
      fileName: 'valid-boxplot.csv',
      data: validBoxPlotData
    },
    {
      text: 'Scatter Plot Sample Data',
      fileName: 'valid-scatterplot.csv',
      data: validScatterPlot
    },
    {
      text: 'Area Chart Sample Data',
      fileName: 'valid-area-chart.json',
      data: validAreaChart
    },
    {
      text: 'Forecast Chart Data',
      fileName: 'valid-forecast-data.csv',
      data: validForecastData
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
      data: validGeoPoint
    },
    {
      text: 'World: Geocode Sample Data',
      fileName: 'valid-world-geocode.json',
      data: validWorldGeocodeData
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
