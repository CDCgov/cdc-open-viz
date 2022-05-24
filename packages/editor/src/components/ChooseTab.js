import React, { useContext, useEffect } from 'react'
import '../scss/choose-vis-tab.scss'

import GlobalState from '../context'
import Tooltip from '@cdc/core/components/ui/Tooltip'

import DashboardIcon from '../assets/icons/dashboard.svg'
import BarIcon from '@cdc/core/assets/chart-bar-solid.svg'
import LineIcon from '@cdc/core/assets/chart-line-solid.svg'
import PieIcon from '@cdc/core/assets/chart-pie-solid.svg'
import GlobeIcon from '@cdc/core/assets/world-graphic.svg'
import UsaIcon from '@cdc/core/assets/usa-graphic.svg'
import DataBiteIcon from '@cdc/core/assets/data-bite-graphic.svg'
import WaffleChartIcon from '@cdc/core/assets/icon-grid.svg'
import MarkupIncludeIcon from '@cdc/core/assets/icon-code.svg'
import AlabamaGraphic from '@cdc/core/assets/alabama-graphic.svg'
import PairedBarIcon from '@cdc/core/assets/paired-bar.svg'
import HorizontalStackIcon from '@cdc/core/assets/horizontal-stacked-bar.svg'

export default function ChooseTab() {
  const { config, setConfig, setGlobalActive, tempConfig, setTempConfig } = useContext(GlobalState)

  useEffect(() => {
    if (tempConfig !== null) {
      setConfig(tempConfig)
      setTempConfig(null)
    }
  })

  /**
   * IconButton component
   */
  const IconButton = ({ icon, label, type, subType, barType, orientation }) => {
    let isSubType = false

    if (type === 'map' && config.general) {
      let geoType = config.general.geoType
      isSubType = (subType === geoType)
    }

    if (type === 'chart') {
      isSubType = (subType === config.visualizationType)
    }

    if(type === 'dashboard' || type === 'data-bite' || type === 'waffle-chart' || type === 'markup-include') isSubType = true;

    let classNames = (config.type === type && isSubType) ? 'active' : ''

    let setTypes = () => {
        // Only take the data/data source properties from existing config. Covers case of selecting a new visualization.
        let newConfig = {
            newViz: true,
            datasets: {},
            type
        }

        if(type === 'map') {
            newConfig.general = {
                ...newConfig.general,
                geoType: subType
            }
        } else {
            newConfig.visualizationType = subType
        }

        setConfig(newConfig)
        setGlobalActive(1)
    }

    return (<button className={classNames} onClick={() => setTypes()} aria-label={label}>{icon}<span
      className="mt-1">{label}</span></button>)
  }

  return (
    <div className="choose-vis">
      <a href="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html" target="_blank"
         rel="noopener noreferrer" className="guidance-link" style={{marginTop: 0, marginBottom: "2rem"}}>
        <div>
          <p>For more information on the types of data visualizations in the WCMS, including examples and best practices, <u>see the WCMS Features Gallery</u>.</p>
        </div>
      </a>

      <div className="heading-2">General</div>
      <ul className="grid cove-temp"> {/*TODO: Remove cove class during refactor to Wizard*/}
        <li>
          <Tooltip position="right">
            <Tooltip.Target>
              <IconButton label="Dashboard" type="dashboard" icon={<DashboardIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Present multiple data visualizations with shared filter controls.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="Data Bite" type="data-bite" icon={<DataBiteIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Highlight a single aggregated value (e.g., sum or median).
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="Waffle Chart" type="waffle-chart" icon={<WaffleChartIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Highlight a piece of data in relationship to a data set.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="Markup Include" type="markup-include" icon={<MarkupIncludeIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Include a snippet of markup data from a specified URL
            </Tooltip.Content>
          </Tooltip>
        </li>
      </ul>

      <div className="heading-2">Charts</div>
      <ul className="grid cove-temp">
        <li>
          <Tooltip position="right">
            <Tooltip.Target>
              <IconButton label="Bar" type="chart" subType="Bar" icon={<BarIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Use bars to show comparisons between data categories.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="Line" type="chart" subType="Line" icon={<LineIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Present one or more data trends over time.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="Pie" type="chart" subType="Pie" icon={<PieIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Present the numerical proportions of a data series.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="Paired Bar" type="chart" subType="Paired Bar" icon={<PairedBarIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Use paired bars to show comparisons between two different data categories.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="Horizontal Bar (Stacked)" type="chart" subType="Bar" orientation="horizontal"
                          icon={<HorizontalStackIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Use bars to show comparisons between data categories.
            </Tooltip.Content>
          </Tooltip>
        </li>
      </ul>

      <div className="heading-2">Maps</div>
      <ul className="grid cove-temp">
        <li>
          <Tooltip position="right">
            <Tooltip.Target>
              <IconButton label="United States (State- or County-Level)" type="map" subType="us" icon={<UsaIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Present a U.S. choropleth map at state or county level.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="World" type="map" subType="world" icon={<GlobeIcon/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Present a choropleth map of the world.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label="U.S. State" type="map" subType="single-state" icon={<AlabamaGraphic/>}/>
            </Tooltip.Target>
            <Tooltip.Content>
              Present a choropleth map of an individual U.S. state.
            </Tooltip.Content>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}
