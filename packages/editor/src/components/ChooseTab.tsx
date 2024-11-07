import React, { useContext, useEffect, useState } from 'react'
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
import ForecastIcon from '@cdc/core/assets/icon-chart-forecast.svg'
import DeviationIcon from '@cdc/core/assets/icon-deviation-bar.svg'
import SankeyIcon from '@cdc/core/assets/icon-sankey.svg'
import ComboChartIcon from '@cdc/core/assets/icon-combo-chart.svg'
import EpiChartIcon from '@cdc/core/assets/icon-epi-chart.svg'
import Icon from '@cdc/core/components/ui/Icon'

interface ButtonProps {
  icon: React.ReactElement
  id: number
  label: string
  type: string
  subType: string
  category: string
  orientation?: string | null
}

const ChooseTab: React.FC = (): JSX.Element => {
  const { config, tempConfig } = useContext(ConfigContext)
  const [activeButtonId, setActiveButtonId] = useState(null)
  const dispatch = useContext(EditorDispatchContext)
  const rowLabels = ['General', , 'Charts', 'Maps']

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

  const generateNewConfig = props => {
    let newConfig = {}
    switch (props.category) {
      case 'Charts': {
        const visualizationType = props.subType
        const visualizationSubType = !props.visualizationSubType ? 'regular' : props.visualizationSubType
        newConfig = {
          ...props,
          visualizationType: visualizationType,
          visualizationSubType: visualizationSubType,
          newViz: true,
          datasets: {}
        }
        break
      }

      case 'General': {
        const visualizationType = props.subType
        newConfig = { ...props, newViz: true, datasets: {}, visualizationType: visualizationType }
        break
      }

      case 'Maps': {
        const visualizationType = props.subType
        newConfig = {
          ...props,
          newViz: true,
          datasets: {},
          type: 'map'
        }
        newConfig['general'] = {
          geoType: visualizationType,
          type: 'map'
        }
        break
      }
    }

    return newConfig
  }

  const configureTabs = props => {
    const newConfig = generateNewConfig(props)
    dispatch({ type: 'EDITOR_SET_CONFIG', payload: { ...config, ...newConfig } })
    dispatch({ type: 'EDITOR_SET_GLOBALACTIVE', payload: 1 })
  }

  const VizButton: React.FC<ButtonProps> = props => {
    const { label, icon, id } = props
    const isActive = activeButtonId === id

    const handleClick = () => {
      setActiveButtonId(isActive ? null : id)
      configureTabs(props)
    }

    return (
      <button className={isActive ? 'active' : ''} onClick={handleClick} aria-label={label}>
        {icon}
        <span className='mt-1'>{label}</span>
      </button>
    )
  }

  useEffect(() => {
    if (tempConfig) {
      dispatch({ type: 'EDITOR_SAVE', payload: tempConfig })
    }
  }, [])

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

      {rowLabels.map(label => {
        return (
          <React.Fragment>
            <div className='heading-2'>{label}</div>
            <ul className={`visualization-grid category_${label.toLowerCase()}`}>
              {buttons
                .filter(button => button.category === label)
                .map((button, index) => (
                  <li key={index}>
                    <Tooltip position='right'>
                      <Tooltip.Target>
                        <VizButton {...button} />
                      </Tooltip.Target>
                      <Tooltip.Content>{button.content}</Tooltip.Content>
                    </Tooltip>
                  </li>
                ))}
            </ul>
          </React.Fragment>
        )
      })}

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
export default ChooseTab

const buttons = [
  {
    id: 1,
    category: 'Charts',
    label: 'Bar',
    type: 'chart',
    subType: 'Bar',
    orientation: 'vertical',
    barThickness: '0.37',
    visualizationSubType: 'regular',
    xAxis: {
      type: 'categorical',
      size: 75,
      maxTickRotation: 45,
      labelOffset: 0
    },
    icon: <BarIcon />,
    content: 'Use bars to show comparisons between data categories.'
  },
  {
    id: 2,
    category: 'Charts',
    label: 'Epi Chart',
    type: 'chart',
    subType: 'Bar',
    orientation: 'vertical',
    barThickness: ' 0.95',
    isResponsiveTicks: true,
    visualizationSubType: 'regular',
    xAxis: {
      type: 'date-time',
      size: 0,
      labelOffset: 0,
      maxTickRotation: 45
    },
    icon: <EpiChartIcon />,
    content: 'Use bars to show comparisons between data categories.'
  },
  {
    id: 3,
    category: 'Charts',
    label: 'Combo Chart',
    type: 'chart',
    subType: 'Combo',
    orientation: 'vertical',
    icon: <ComboChartIcon />,
    content: 'Use bars to show comparisons between data categories.'
  },
  {
    id: 4,
    category: 'Charts',
    label: 'Line',
    type: 'chart',
    subType: 'Line',
    orientation: 'vertical',
    icon: <LineIcon />,
    content: 'Present one or more data trends over time.'
  },
  {
    id: 5,
    category: 'Charts',
    label: 'Paired Bar',
    type: 'chart',
    subType: 'Paired Bar',
    orientation: 'horizontal',
    icon: <PairedBarIcon />,
    content: 'Use paired bars to show comparisons between two different data categories.'
  },
  {
    id: 6,
    category: 'Charts',
    label: 'Area Chart',
    type: 'chart',
    subType: 'Area Chart',
    orientation: 'vertical',
    icon: <AreaChartIcon />,
    content: 'Display an area chart to visualize quantities over time.'
  },
  {
    id: 7,
    category: 'Charts',
    label: 'Forecast Chart',
    type: 'chart',
    subType: 'Forecasting',
    orientation: 'vertical',
    icon: <ForecastIcon />,
    content: 'Display a forecasting chart to predict future data trends.'
  },
  {
    id: 8,
    category: 'Charts',
    label: 'Scatter Plot',
    type: 'chart',
    subType: 'Scatter Plot',
    orientation: 'vertical',
    icon: <ScatterPlotIcon />,
    content: 'Display a scatter plot to explore relationships between numeric variables.'
  },
  {
    id: 9,
    category: 'Charts',
    label: 'Box Plot',
    type: 'chart',
    subType: 'Box Plot',
    orientation: 'vertical',
    icon: <BoxPlotIcon />,
    content: 'Display a box plot to visualize the distribution of numerical data through quartiles.'
  },
  {
    id: 10,
    category: 'Charts',
    label: 'Sankey Diagram',
    type: 'chart',
    subType: 'Sankey',
    orientation: 'vertical',
    icon: <SankeyIcon />,
    content: 'Display a sankey diagram'
  },
  {
    id: 11,
    category: 'Charts',
    label: 'Forecast Chart',
    type: 'chart',
    subType: 'Forecasting',
    orientation: 'vertical',
    icon: <ForecastIcon />,
    content: 'Display a forecasting chart'
  },
  {
    id: 12,
    category: 'Charts',
    label: 'Horizontal Bar (Stacked)',
    type: 'chart',
    subType: 'Bar',
    visualizationSubType: 'stacked',
    orientation: 'horizontal',
    icon: <HorizontalStackIcon />,
    content: 'Use bars to show comparisons between data categories.'
  },
  {
    id: 13,
    category: 'Charts',
    label: 'Pie',
    type: 'chart',
    subType: 'Pie',
    orientation: 'Pie',
    icon: <PieIcon />,
    content: 'Present the numerical proportions of a data series.'
  },
  {
    id: 14,
    category: 'Charts',
    label: 'Deviation Bar',
    type: 'chart',
    subType: 'Deviation Bar',
    orientation: 'Pie',
    icon: <DeviationIcon />,
    content: 'Use deviation bars to display how individual values differ from a target'
  },
  {
    id: 15,
    category: 'General',
    label: 'Dashboard',
    type: 'dashboard',
    subType: null,
    orientation: null,
    icon: <DashboardIcon />,
    content: 'Present multiple data visualizations with shared filter controls.'
  },
  {
    id: 16,
    category: 'General',
    label: 'Data Bite',
    type: 'data-bite',
    subType: null,
    orientation: null,
    icon: <DataBiteIcon />,
    content: 'Highlight a single aggregated value (e.g., sum or median).'
  },
  {
    id: 17,
    category: 'General',
    label: 'Waffle Chart',
    type: 'waffle-chart',
    subType: 'Waffle',
    orientation: null,
    icon: <WaffleChartIcon />,
    content: 'Highlight a piece of data in relationship to a data set.'
  },
  {
    id: 18,
    category: 'General',
    label: 'Gauge Chart',
    type: 'waffle-chart',
    subType: 'Gauge',
    orientation: null,
    icon: <GaugeChartIcon />,
    content: `Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal
              scale.`
  },
  {
    id: 19,
    category: 'Maps',
    label: 'United States (State- or County-Level)',
    type: 'map',
    subType: 'us',
    icon: <UsaIcon />,
    content: 'Present a U.S. choropleth map at state or county level.',
    position: 'right'
  },
  {
    id: 20,
    category: 'Maps',
    label: 'United States (HHS Regions)',
    type: 'map',
    subType: 'us-region',
    icon: <UsaRegionIcon />,
    content: 'Present a U.S. choropleth map at state or county level.',
    position: 'right'
  },
  {
    id: 21,
    category: 'Maps',
    label: 'World',
    type: 'map',
    subType: 'world',
    icon: <GlobeIcon />,
    content: 'Present a choropleth map of the world.'
  },
  {
    id: 22,
    category: 'Maps',
    label: 'U.S. State',
    type: 'map',
    subType: 'single-state',
    icon: <AlabamaGraphic />,
    content: 'Present a choropleth map of an individual U.S. state.'
  },
  {
    id: 23,
    category: 'Maps',
    label: 'U.S. Geocode',
    type: 'map',
    subType: 'us-county',
    generalType: 'us-geocode',
    icon: <UsaIcon />,
    content: 'United States GeoCode'
  }
]
