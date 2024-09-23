import React, { useContext, useEffect } from 'react'
import '../scss/choose-vis-tab.scss'

import ConfigContext, { EditorDispatchContext } from '../ConfigContext'
import Tooltip from '@cdc/core/components/ui/Tooltip'

import InfoIcon from '@cdc/core/assets/icon-info.svg'
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
import GaugeChartIcon from '@cdc/core/assets/icon-linear-gauge.svg'
import ForestPlotIcon from '@cdc/core/assets/icon-chart-forest-plot.svg'
import ForecastIcon from '@cdc/core/assets/icon-chart-forecast.svg'
import DeviationIcon from '@cdc/core/assets/icon-deviation-bar.svg'
import SankeyIcon from '@cdc/core/assets/icon-sankey.svg'
import EpiChartIcon from '@cdc/core/assets/icon-epi-chart.svg'
import { Visualization } from '@cdc/core/types/Visualization'
import Icon from '@cdc/core/components/ui/Icon'

export default function ChooseTab() {
  const { config, tempConfig } = useContext(ConfigContext)
  const dispatch = useContext(EditorDispatchContext)

  useEffect(() => {
    if (tempConfig) {
      dispatch({ type: 'EDITOR_SAVE', payload: tempConfig })
    }
  }, [])

  /**
   * IconButton component
   */
  const IconButton = ({
    icon,
    label,
    type,
    subType = undefined,
    orientation = undefined,

    stacked = false,
    generalType = 'data'
  }) => {
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

    if (type === 'dashboard' || type === 'data-bite' || type === 'markup-include') isSubType = true

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

    const setTypes = () => {
      if (type === config.type) {
        if (subType !== config.visualizationType) {
          dispatch({ type: 'EDITOR_SET_CONFIG', payload: { ...config, newViz: true, visualizationType: subType } })
        }
        dispatch({ type: 'EDITOR_SET_GLOBALACTIVE', payload: 1 })
      } else {
        const confirmation =
          !config.type ||
          window.confirm('Changing visualization type will clear configuration settings. Do you want to continue?')

        if (confirmation) {
          const newConfig = {
            newViz: true,
            datasets: {},
            isResponsiveTicks: false,
            type,
            barThickness: '0.37',
            xAxis: {
              type: 'categorical',
              size: 75,
              maxTickRotation: 45,
              labelOffset: 65
            }
          } as Visualization

          if (type === 'map') {
            newConfig.general = {
              ...newConfig.general,
              geoType: subType,
              type: generalType
            }
          } else {
            newConfig.visualizationType = subType
          }
          if (type === 'chart') {
            newConfig.visualizationSubType = stacked ? 'stacked' : 'regular'
            newConfig.orientation = orientation
            if (label === 'Epi Chart') {
              newConfig.xAxis.type = 'date-time'
              newConfig.xAxis.size = 0

              newConfig.barThickness = ' 0.70'

              newConfig.xAxis.labelOffset = 0
              newConfig.xAxis.maxTickRotation = 45
              newConfig.isResponsiveTicks = true
            }
          }

          dispatch({ type: 'EDITOR_SET_CONFIG', payload: newConfig })
          dispatch({ type: 'EDITOR_SET_GLOBALACTIVE', payload: 1 })
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

  const handleUpload = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = e => {
      const text = e.target.result
      try {
        const newConfig = JSON.parse(text as string)
        dispatch({ type: 'EDITOR_SET_CONFIG', payload: newConfig })
        dispatch({ type: 'EDITOR_SET_GLOBALACTIVE', payload: 1 })
      } catch (e) {
        alert('Invalid JSON')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className='choose-vis'>
      <a
        href='https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html'
        target='_blank'
        rel='noopener noreferrer'
        className='guidance-link'
        style={{ marginTop: 0, marginBottom: '2rem' }}
      >
        <div>
          <p>
            For more information on the types of data visualizations in the WCMS, including examples and best practices,{' '}
            <u>see the WCMS Features Gallery</u>.
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
              <IconButton label='Waffle Chart' type='waffle-chart' subType='Waffle' icon={<WaffleChartIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Highlight a piece of data in relationship to a data set.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Gauge Chart' type='waffle-chart' subType='Gauge' icon={<GaugeChartIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>
              Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal
              scale.
            </Tooltip.Content>
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
          <Tooltip position='right'>
            <Tooltip.Target>
              <IconButton label='Epi Chart' type='chart' subType='Bar' orientation='vertical' icon={<EpiChartIcon />} />
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
              <IconButton
                label='Paired Bar'
                type='chart'
                subType='Paired Bar'
                orientation='horizontal'
                icon={<PairedBarIcon />}
              />
            </Tooltip.Target>
            <Tooltip.Content>
              Use paired bars to show comparisons between two different data categories.
            </Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton
                label='Deviation Bar'
                type='chart'
                subType='Deviation Bar'
                orientation='horizontal'
                stacked={false}
                icon={<DeviationIcon />}
              />
            </Tooltip.Target>
            <Tooltip.Content>Use deviation bars to display how individual values differ from a target.</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton
                label='Horizontal Bar (Stacked)'
                type='chart'
                subType='Bar'
                orientation='horizontal'
                stacked={true}
                icon={<HorizontalStackIcon />}
              />
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
              <IconButton
                label='Box Plot'
                type='chart'
                subType='Box Plot'
                orientation='vertical'
                icon={<BoxPlotIcon />}
              />
            </Tooltip.Target>
            <Tooltip.Content>Display a box plot</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton
                label='Scatter Plot'
                type='chart'
                subType='Scatter Plot'
                orientation='vertical'
                icon={<ScatterPlotIcon />}
              />
            </Tooltip.Target>
            <Tooltip.Content>Display a scatter plot</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton
                label='Area Chart'
                type='chart'
                subType='Area Chart'
                orientation='vertical'
                icon={<AreaChartIcon />}
              />
            </Tooltip.Target>
            <Tooltip.Content>Display an area chart</Tooltip.Content>
          </Tooltip>
        </li>
        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton
                label='Forecast Chart'
                type='chart'
                subType='Forecasting'
                orientation='vertical'
                icon={<ForecastIcon />}
              />
            </Tooltip.Target>
            <Tooltip.Content>Display a forecasting chart</Tooltip.Content>
          </Tooltip>
        </li>

        {/* <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton label='Forest Plot' type='chart' subType='Forest Plot' orientation='vertical' icon={<ForestPlotIcon />} />
            </Tooltip.Target>
            <Tooltip.Content>Display a forest plot</Tooltip.Content>
          </Tooltip>
        </li> */}

        <li>
          <Tooltip>
            <Tooltip.Target>
              <IconButton
                label='Sankey Diagram'
                type='chart'
                subType='Sankey'
                orientation='vertical'
                icon={<SankeyIcon />}
              />
            </Tooltip.Target>
            <Tooltip.Content>Display a sankey diagram</Tooltip.Content>
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
              <IconButton
                label='U.S. Geocode'
                type='map'
                subType='us-county'
                generalType='us-geocode'
                icon={<UsaIcon />}
              />
            </Tooltip.Target>
            <Tooltip.Content>United States GeoCode</Tooltip.Content>
          </Tooltip>
        </li>
      </ul>
      <hr />
      <div className='form-group'>
        <label htmlFor='uploadConfig'>
          Upload Custom Configuration{' '}
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='warningCircle' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Make sure you have properly validated the configuration before uploading.</p>
            </Tooltip.Content>
          </Tooltip>
        </label>
        <input
          type='file'
          accept='.txt,.json'
          className='form-control-file'
          id='uploadConfig'
          onChange={handleUpload}
        />
      </div>
    </div>
  )
}
