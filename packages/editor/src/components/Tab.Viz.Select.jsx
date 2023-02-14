import React, { useContext, useEffect } from 'react'

// Context
import ConfigContext from '../ConfigContext'

// Components - Core
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import GuidanceBlock from '@cdc/core/components/element/GuidanceBlock.jsx'
import parse from 'html-react-parser'

const TabVizSelect = () => {
  const { config, setConfig, setActiveTab, tempConfig, setTempConfig } = useContext(ConfigContext)

  useEffect(() => {
    if (tempConfig !== null) {
      setConfig(tempConfig)
      setTempConfig(null)
    }
  })

  /**
   * IconButton component
   */
  const IconButton = ({ icon, label, tooltip, type, subType, barType, orientation, stacked = false, generalType = 'data' }) => {
    let isSubType = false
    let isHorizontalStackedChart = false
    let classNames = [ 'cove-wizard__viz-selection__btn' ]

    if (type === 'map' && config.general) {
      let geoType = config.general.geoType
      isSubType = subType === geoType
    }

    if (type === 'chart') {
      isSubType = subType === config.visualizationType
      isHorizontalStackedChart = orientation === config.orientation && stacked === true
    }

    if (type === 'dashboard' || type === 'data-bite' || type === 'waffle-chart' || type === 'markup-include') isSubType = true

    // TODO: sorry, we should refactor this at some point.
    // trying to get this out for 4.22.5 - this is so stacked horizontal and bar charts aren't highlighted at the same time.
    // this functionality appears to be working but is admittedly confusing.
    if (type === 'chart' && stacked) {
      if (config.type === type && isSubType && config.visualizationSubType === 'stacked') classNames.push('active')
    } else if (type === 'chart' && !stacked && config.visualizationSubType !== 'stacked') {
      if (config.type === type && isSubType) classNames.push('active')
    }

    if (type !== 'chart') {
      if (config.type === type && isSubType && !isHorizontalStackedChart) classNames.push('active')
    }

    let setTypes = () => {
      if (type === config.type) {
        if (subType !== config.visualizationType) {
          setConfig({ ...config, newViz: true, visualizationType: subType })
        }

        setActiveTab(1)
      } else {
        let confirmation = !config.type || window.confirm('Changing visualization type will clear configuration settings. Do you want to continue?')

        if (confirmation) {
          let newConfig = {
            newViz: true,
            datasets: {},
            type
          }

          if (type === 'map') {
            newConfig.general = {
              ...newConfig.general,
              geoType: subType,
              type: generalType
            }
          } else {
            newConfig.visualizationType = subType
          }

          setConfig(newConfig)
          setActiveTab(1)
        }
      }
    }

    const buttonElement = (
      <button className={classNames.join(' ')} onClick={() => setTypes()} aria-label={label}>
        <Icon className="cove-wizard__viz-selection__btn-icon" display={icon}/>
        <label>{parse(label)}</label>
        {tooltip && tooltip !== '' && <>
          <Tooltip>
            <Tooltip.Target>
              <Icon display="questionCircle"/>
            </Tooltip.Target>
            <Tooltip.Content>
              {typeof tooltip === 'object'
                ? tooltip
                : typeof tooltip === 'string' && (
                <p>{parse(tooltip)}</p>
              )}
            </Tooltip.Content>
          </Tooltip>
        </>
        }
      </button>
    )

    return buttonElement
  }

  return (
    <div className="cove__viz-select">
      <div className="pt-4 px-8">
        <GuidanceBlock className="mb-4" linkTo="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html">
          <GuidanceBlock.Title></GuidanceBlock.Title>
          <GuidanceBlock.Content>
            For more information on the types of data visualizations in the WCMS, including examples and best practices, <u>see the WCMS Features Gallery</u>.
          </GuidanceBlock.Content>
        </GuidanceBlock>

        <div className="cove-heading--1">General</div>
        <ul className="cove-wizard__viz-selection">
          <li><IconButton label="Dashboard" type="dashboard" icon="dashboard" tooltip="Present multiple data visualizations with shared filter controls."/></li>
          <li><IconButton label="Data Bite" type="data-bite" icon="databite" tooltip="Highlight a single aggregated value (e.g., sum or median)."/></li>
          <li><IconButton label="Waffle Chart" type="waffle-chart" icon="grid" tooltip="Highlight a piece of data in relationship to a data set."/></li>
        </ul>

        <div className="cove-heading--1">Charts</div>
        <ul className="cove-wizard__viz-selection">
          <li><IconButton label="Bar" type="chart" subType="Bar" orientation="vertical" icon="chartBar" tooltip="Use bars to show comparisons between data categories."/></li>
          <li><IconButton label="Line" type="chart" subType="Line" orientation="vertical" icon="chartLine" tooltip="Present one or more data trends over time."/></li>
          <li><IconButton label="Pie" type="chart" subType="Pie" orientation="vertical" icon="chartPie" tooltip="Present the numerical proportions of a data series."/></li>
          <li><IconButton label="Paired Bar" type="chart" subType="Paired Bar" orientation="horizontal" icon="chartBarPaired" tooltip="Use paired bars to show comparisons between two different data categories."/></li>
          <li><IconButton label="Horizontal Bar (Stacked)" type="chart" subType="Bar" orientation="horizontal" stacked={true} icon="chartBarStacked" tooltip="Use bars to show comparisons between data categories."/></li>

          {/* temporarily hiding these */}
          {/*<li><IconButton label="Box Plot" type="chart" subType="Box Plot" orientation="vertical" icon="info" tooltip="Display a box plot."/></li>*/}
          {/*<li><IconButton label="Scatter Plot" type="chart" subType="Scatter Plot" orientation="vertical" icon="info" tooltip="Display a scatter plot."/></li>*/}
        </ul>

        <div className="cove-heading--1">Maps</div>
        <ul className="cove-wizard__viz-selection">
          <li><IconButton label="United States <br/> (State/County Level)" type="map" subType="us" icon="mapUsa" tooltip="Present a U.S. choropleth map at state or county level."/></li>
          <li><IconButton label="United States <br/> (HHS Regions)" type="map" subType="us-region" icon="mapUsaRegions" tooltip="Present a U.S. choropleth map at state or county level."/></li>
          <li><IconButton label="World" type="map" subType="world" icon="mapWorld" tooltip="Present a choropleth map of the world."/></li>
          <li><IconButton label="U.S. State" type="map" subType="single-state" icon="mapAl" tooltip="Present a choropleth map of an individual U.S. state."/></li>
          <li><IconButton label="U.S. Geocode" type="map" subType="us-county" generalType="us-geocode" icon="mapUsa" tooltip="United States GeoCode"/></li>
        </ul>
      </div>
    </div>
  )
}

export default TabVizSelect
