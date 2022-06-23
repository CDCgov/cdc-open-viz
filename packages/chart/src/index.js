import React, { useState } from 'react'
import { render } from 'react-dom'

import { GlobalContextProvider } from '@cdc/core/context/GlobalContext'
import { ConfigContextProvider } from '@cdc/core/context/ConfigContext'

import CdcChart from './CdcChart'
import InputSelect from '@cdc/core/components/inputs/InputSelect'

const ChartWrapper = ({ domContainer }) => {
  const demoData = [
    {
      file: '/examples/planet-example-config.json',
      name: 'Planet Example',
      default: true
    },
    {
      file: '/examples/covid-example-config.json',
      name: 'COVID'
    },
    {
      file: '/examples/covid-confidence-example-config.json',
      name: 'COVID Confidence'
    },
    {
      file: '/examples/planet-chart-horizontal-example-config.json',
      name: 'Planet Chart Horizontal'
    },
    {
      file: '/examples/planet-combo-example-config.json',
      name: 'Planet Combo'
    },
    {
      file: '/examples/planet-pie-example-config.json',
      name: 'Planet Pie'
    },
    {
      file: '/examples/date-exclusions-config.json',
      name: 'Date Exclusions'
    },
    {
      file: '/examples/case-rate-example-config.json',
      name: 'Case Rates'
    },
    {
      file: '/examples/paired-bar-example.json',
      name: 'Paired Bar'
    },
    {
      file: '/examples/horizontal-chart.json',
      name: 'Horizontal Chart'
    }
  ]

  // Currently loaded demo config
  const defaultConfig = demoData.filter(e => e.default === true)[0]
  const [ demoConfig, setDemoConfig ] = useState(defaultConfig.file)

  // Demo Functions
  const isDevmode = () => domContainer.attributes['data-devmode']
  const getDemoConfig = (option, value) => demoData.filter(e => e[option] === value)[0].file
  const onChangeConfig = (e) => setDemoConfig(getDemoConfig('name', e.target.value))

  return (
    <>
      {isDevmode ?
        <>
          <div className="cove--developer-mode">
            <InputSelect options={demoData.map(demo => demo.name)} value={defaultConfig.name} onChange={(e) => onChangeConfig(e)}/>
          </div>
          <CdcChart configUrlObj={demoConfig}/>
        </> :
        <CdcChart configUrlObj={domContainer.attributes['data-config'].value}/>
      }
    </>
  )
}

const domContainers = document.querySelectorAll('.react-container')
domContainers.forEach((domContainer) => {
  render(
    <React.StrictMode>
      <GlobalContextProvider>
        <ConfigContextProvider>
          <ChartWrapper domContainer={domContainer}/>
        </ConfigContextProvider>
      </GlobalContextProvider>
    </React.StrictMode>,
    domContainer,
  )
})
