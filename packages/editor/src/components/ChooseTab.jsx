import React, { useContext, useEffect } from 'react'
import '../scss/choose-vis-tab.scss'

import ConfigContext from '../ConfigContext'
import Tooltip from '@cdc/core/components/ui/Tooltip'

import DashboardIcon from '@cdc/core/assets/icon-dashboard.svg'
import BarIcon from '@cdc/core/assets/icon-chart-bar.svg'
import LineIcon from '@cdc/core/assets/icon-chart-line.svg'
import PieIcon from '@cdc/core/assets/icon-chart-pie.svg'
import GlobeIcon from '@cdc/core/assets/icon-map-world.svg'
import UsaIcon from '@cdc/core/assets/icon-map-usa.svg'
import UsaRegionIcon from '@cdc/core/assets/usa-region-graphic.svg'
import DataBiteIcon from '@cdc/core/assets/icon-databite.svg'
import WaffleChartIcon from '@cdc/core/assets/icon-grid.svg'
import AlabamaGraphic from '@cdc/core/assets/icon-map-alabama.svg'
import PairedBarIcon from '@cdc/core/assets/icon-chart-bar-paired.svg'
import HorizontalStackIcon from '@cdc/core/assets/icon-chart-bar-stacked.svg'
import ScatterPlotIcon from '@cdc/core/assets/icon-chart-scatterplot.svg'
import BoxPlotIcon from '@cdc/core/assets/icon-chart-box-whisker.svg'
import AreaChartIcon from '@cdc/core/assets/icon-area-chart.svg'
import InfoIcon from '@cdc/core/assets/icon-info.svg'

export default function ChooseTab() {
  const { config, setConfig, setGlobalActive, tempConfig, setTempConfig } = useContext(ConfigContext)

  useEffect(() => {
    if (tempConfig !== null) {
      setConfig(tempConfig)
      setTempConfig(null)
    }
  })

  /**
   * IconButton component
   */
  const IconButton = ({ icon, label, type, subType, barType, orientation, stacked = false, generalType = 'data' }) => {
    let isSubType = false
    let isHorizontalStackedChart = false
    let classNames

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
      classNames = config.type === type && isSubType && config.visualizationSubType === 'stacked' ? 'active' : ''
    } else if (type === 'chart' && !stacked && config.visualizationSubType !== 'stacked') {
      classNames = config.type === type && isSubType ? 'active' : ''
    }

    if (type !== 'chart') {
      classNames = config.type === type && isSubType && !isHorizontalStackedChart ? 'active' : ''
    }

    let setTypes = () => {
      if (type === config.type) {
        if (subType !== config.visualizationType) {
          setConfig({ ...config, newViz: true, visualizationType: subType })
        }

        setGlobalActive(1)
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
          setGlobalActive(1)
        }
      }
    }

    return (
      <button className={classNames} onClick={() => setTypes()} aria-label={label}>
        {icon}
        <span className='mt-1'>{label}</span>
      </button>
    )
  }

  return (
    <div className='choose-vis'>
      <a href='https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html' target='_blank' rel='noopener noreferrer' className='guidance-link' style={{ marginTop: 0, marginBottom: '2rem' }}>
        <div>
          <p>
            For more information on the types of data visualizations in the WCMS, including examples and best practices, <u>see the WCMS Features Gallery</u>.
          </p>
        </div>
      </a>

      <div className='heading-2'>General</div>
      <ul className='grid cove-temp'>
        {' '}
        {/*TODO: Remove cove class during refactor to Wizard*/}
        <li>
          <Tooltip position='right'>
            <Tooltip.Target>
              <IconButton label='Dashboard' type='dashboard' icon={<DashboardIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Present multiple data visualizations with shared filter controls.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Data Bite' type='data-bite' icon={<DataBiteIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Highlight a single aggregated value (e.g., sum or median).</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Waffle Chart' type='waffle-chart' icon={<WaffleChartIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Highlight a piece of data in relationship to a data set.</Tooltip.Content>
          </Tooltip>
        </li>
      </ul>

      <div className='heading-2'>Charts</div>
      <ul className='grid cove-temp'>
        <li>
          <Tooltip position='right'>
            <Tooltip.Target>
              <IconButton label='Bar' type='chart' subType='Bar' orientation='vertical' icon={<BarIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Use bars to show comparisons between data categories.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Line' type='chart' subType='Line' orientation='vertical' icon={<LineIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Present one or more data trends over time.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Pie' type='chart' subType='Pie' orientation='vertical' icon={<PieIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Present the numerical proportions of a data series.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Paired Bar' type='chart' subType='Paired Bar' orientation='horizontal' icon={<PairedBarIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Use paired bars to show comparisons between two different data categories.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Horizontal Bar (Stacked)' type='chart' subType='Bar' orientation='horizontal' stacked={true} icon={<HorizontalStackIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Use bars to show comparisons between data categories.</Tooltip.Content>
          </Tooltip>
        </li>
      </ul>

      <ul className='grid cove-temp'>
        {/* temporarily hiding these */}
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Box Plot' type='chart' subType='Box Plot' orientation='vertical' icon={<BoxPlotIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Display a box plot</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Scatter Plot' type='chart' subType='Scatter Plot' orientation='vertical' icon={<ScatterPlotIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Display a scatter plot</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Area Chart' type='chart' subType='Area Chart' orientation='vertical' icon={<AreaChartIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Display an area chart</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Forecasting Chart' type='chart' subType='Forecasting' orientation='vertical' icon={<InfoIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Display a forecasting chart</Tooltip.Content>
          </Tooltip>
        </li>
      </ul>

      <div className='heading-2'>Maps</div>
      <ul className='grid cove-temp'>
        <li>
          <Tooltip position='right'>
            <Tooltip.Target>
              <IconButton label='United States (State- or County-Level)' type='map' subType='us' icon={<UsaIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Present a U.S. choropleth map at state or county level.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip position='right'>
            <Tooltip.Target>
              <IconButton label='United States (HHS Regions)' type='map' subType='us-region' icon={<UsaRegionIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Present a U.S. choropleth map at state or county level.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='World' type='map' subType='world' icon={<GlobeIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Present a choropleth map of the world.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='U.S. State' type='map' subType='single-state' icon={<AlabamaGraphic />} />
            </Tooltip.Target>
            <Tooltip.Content>Present a choropleth map of an individual U.S. state.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='U.S. Geocode' type='map' subType='us-county' generalType='us-geocode' icon={<UsaIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>United States GeoCode</Tooltip.Content>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}
