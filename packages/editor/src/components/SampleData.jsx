import React, { useContext } from 'react'

// Context
import SampleDataContext from '../samples/SampleDataContext'

// Data Samples
import validMapData from './../samples/valid-data-map.csv?raw'
import validChartData from './../samples/valid-data-chart.csv?raw'
import validCountyMapData from './../samples/valid-county-data.csv?raw'
import validGeoPoint from './../samples/valid-geo-point.csv?raw'
import validScatterPlot from './../samples/valid-scatterplot.csv?raw'
import validBoxPlotData from './../samples/valid-boxplot.csv?raw'

// Add additional data to samples
const sampleData = {
  charts: [
    {
      text: 'Chart Sample Data',
      fileName: 'valid-data-chart.csv',
      data: validChartData
    },
    // {
    //   text: 'Box Plot Sample Data',
    //   fileName: 'valid-boxplot.csv',
    //   data: validBoxPlotData
    // },
    // {
    //   text: 'Scatter Plot Sample Data',
    //   fileName: 'valid-scatterplot.csv',
    //   data: validScatterPlot
    // }
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
    }
  ]
}

// Single Button
const SampleDataButton = ({ text, fileName, data }) => {
  const { editingDataset, loadData } = useContext(SampleDataContext)
  const handleClick = e => loadData(new Blob([data], { type: 'text/csv' }), fileName, editingDataset)
  const handleKeyDown = e => e.keyCode === 13 && loadData(new Blob([data], { type: 'text/csv' }), fileName, editingDataset)

  // prettier-ignore
  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}>
      {text}
    </button>
  )
}

const GenerateSampleDataList = ({ samples }) => {
  return samples.map(sample => <li key={sample.fileName}>
    <SampleDataButton text={sample.text} fileName={sample.fileName} data={sample.data} />
  </li>)
}

// All Buttons
const List = () => {
  const { config } = useContext(SampleDataContext)

  return (
    <>
      <h3 className="cove-heading--3 mb-0">Load Sample Data:</h3>
      <ul className='cove-wizard__data-samples'>
        {config.type !== 'map' && <GenerateSampleDataList samples={sampleData.charts} />}
        {config.type !== 'chart' && <GenerateSampleDataList samples={sampleData.maps} />}
      </ul>
    </>
  )
}

const SampleData = () => null
SampleData.data = sampleData
SampleData.List = List

export default SampleData
