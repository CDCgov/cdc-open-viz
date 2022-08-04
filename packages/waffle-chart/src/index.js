import React, { useState } from 'react'
import { render } from 'react-dom'

import { GlobalContextProvider, useGlobalContext } from '@cdc/core/context/GlobalContext'
import { ConfigContextProvider } from '@cdc/core/context/ConfigContext'

import CdcWaffleChart from './CdcWaffleChart'
import InputSelect from '@cdc/core/components/inputs/InputSelect'

const ComponentWrapper = ({ domContainer }) => {
  const { view } = useGlobalContext()

  const demoData = [
    {
      file: '/examples/example-config.json',
      name: 'Waffle Chart Example',
      default: true
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
      {isDevmode && view === 'editor' ?
        <>
          <div className="cove--developer-mode">
            <InputSelect options={demoData.map(demo => demo.name)} value={defaultConfig.name} onChange={(e) => onChangeConfig(e)}/>
          </div>
          <CdcWaffleChart configUrlObj={demoConfig}/>
        </> :
        <CdcWaffleChart configUrlObj={domContainer.attributes['data-config']?.value || defaultConfig.file}/>
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
          <ComponentWrapper domContainer={domContainer}/>
        </ConfigContextProvider>
      </GlobalContextProvider>
    </React.StrictMode>,
    domContainer,
  )
})
