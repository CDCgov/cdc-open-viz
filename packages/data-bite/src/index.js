import React, { useState } from 'react'
import { render } from 'react-dom'

// Context
import { GlobalContextProvider, useGlobalContext } from '@cdc/core/context/GlobalContext'

// Components - Core
import InputSelect from '@cdc/core/components/inputs/InputSelect'

// Components - Local
import CdcDataBite from './CdcDataBite'

const ComponentWrapper = ({ domContainer }) => {
  const { editorMode } = useGlobalContext()

  //DATA PRESENTATION GALLERY: https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data_bites.html#examples
  const demoData = [
    {
      file: '/examples/example-config.json',
      name: 'Data Bite Example',
      default: true
    },
    {
      file: '/examples/gallery/calculated-average.json',
      name: 'Calculated Average'
    },
    {
      file: '/examples/gallery/calculated-with-pic.json',
      name: 'Calculated with Image'
    },
    {
      file: '/examples/gallery/max-value.json',
      name: 'Max Value'
    },
    {
      file: '/examples/gallery/sum-of-data.json',
      name: 'Sum of Data'
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
      {isDevmode && editorMode ?
        <>
          {demoData.length > 1 &&
            <div className="cove--developer-mode">
              <InputSelect options={demoData.map(demo => demo.name)} value={defaultConfig.name} onChange={(e) => onChangeConfig(e)}/>
            </div>
          }
          <CdcDataBite configUrlObj={demoConfig} editorMode={editorMode}/>
        </> :
        // <CdcDataBite configUrlObj={domContainer.attributes['data-config'].value}/>
        <CdcDataBite configUrlObj={domContainer.attributes['data-config']?.value || defaultConfig.file}/>
      }
    </>
  )
}

const domContainers = document.querySelectorAll('.react-container')
domContainers.forEach((domContainer) => {
  render(
    <React.StrictMode>
      <GlobalContextProvider>
        <ComponentWrapper domContainer={domContainer}/>
      </GlobalContextProvider>
    </React.StrictMode>,
    domContainer
  )
})
