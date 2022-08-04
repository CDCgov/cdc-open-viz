import React, { useContext, useEffect } from 'react'

// Context
import { useGlobalContext } from '@cdc/core/context/GlobalContext'
import { useConfigContext } from '@cdc/core/context/ConfigContext'
import WizardContext from '../context/WizardContext'

// Components - Core
import Icon from '@cdc/core/components/ui/Icon'


const ChooseTab = () => {
  const { globalActions } = useGlobalContext()
  const { tempConfig, setTempConfig } = useContext(WizardContext)
  const { config, configActions } = useConfigContext()

  useEffect(() => {
    if (tempConfig !== null) {
      configActions.setConfig(tempConfig)
      setTempConfig(null)
    }
  })

  const IconButton = ({ icon, label, type, subType, barType }) => {
    let isSubType = false

    if (type === 'map' && config.general) {
      let geoType = config.general.geoType
      isSubType = (subType === geoType)
    }

    if (type === 'chart') {
      isSubType = (subType === config.visualizationType)
    }

    if (type === 'dashboard' || type === 'data-byte' || type === 'waffle-chart' || type === 'markup-include') isSubType = true

    let classNames = (config.type === type && isSubType) ? 'active' : ''

    let setTypes = () => {
      // Only take the data/data source properties from existing config. Covers case of selecting a new visualization.
      let newConfig = {
        data: [ ...config.data ],
        dataFileName: config.dataFileName,
        dataFileSourceType: config.dataFileSourceType,
        dataDescription: config.dataDescription,
        dataUrl: config.dataUrl,
        newViz: true,
        type
      }

      if (config.formattedData) {
        newConfig.formattedData = config.formattedData
      }

      if (type === 'map') {
        newConfig.general = {
          ...newConfig.general,
          geoType: subType
        }
      } else {
        newConfig.visualizationType = subType
      }

      configActions.setConfig(newConfig)
      globalActions.setGlobalContext(state => ({ ...state, wizardActiveTab: 2 }))
    }

    return (
      <button className={classNames} onClick={() => setTypes()} aria-label={label}>
        <Icon display={icon}/>
        <span className="mt-1">{label}</span>
      </button>
    )
  }

  return (
    <div className="choose-vis">
      <div className="heading-2">General</div>
      <ul className="grid">
        <li><IconButton label="Dashboard" type="dashboard" icon="dashboard"/></li>
        <li><IconButton label="Data Byte" type="data-byte" icon="databyte"/></li>
        <li><IconButton label="Waffle Chart" type="waffle-chart" icon="grid"/></li>
        <li><IconButton label="Markup Include" type="markup-include" icon="code"/></li>
      </ul>
      <div className="heading-2">Charts</div>
      <ul className="grid">
        <li><IconButton label="Bar" type="chart" subType="Bar" icon="chartBar"/></li>
        <li><IconButton label="Line" type="chart" subType="Line" icon="chartLine"/></li>
        <li><IconButton label="Pie" type="chart" subType="Pie" icon="chartPie"/></li>
        <li><IconButton label="Paired Bar" type="chart" subType="Paired Bar" icon="chartBarPaired"/></li>
      </ul>
      <div className="heading-2">Maps</div>
      <ul className="grid">
        <li><IconButton label="United States (State- or County-Level)" type="map" subType="us" icon="mapUsa"/></li>
        <li><IconButton label="World" type="map" subType="world" icon="mapWorld"/></li>
        <li><IconButton label="U.S. State" type="map" subType="single-state" icon="mapAl"/></li>
      </ul>
    </div>
  )
}

export default ChooseTab
