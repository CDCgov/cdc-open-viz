import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import './styles.scss'
import CdcChart from '@cdc/chart'
import CdcMap from '@cdc/map'
import CdcMarkupInclude from '@cdc/markup-include'
import CdcFilteredText from '@cdc/filtered-text'
import CdcDashboard from '@cdc/dashboard'
import CdcWaffleChart from '@cdc/waffle-chart'
import config from './../../../chart/src/_stories/_mock/bar-chart-suppressed.json'
import mapConfig from './../../../map/examples/default-usa.json'
import markupConfig from './../../../markup-include/src/data/initial-state.js'
import filteredTextConfig from './_mocks/filtered-text-config.json'
import waffleChartConfig from './../../../waffle-chart/examples/gallery/count.json'
import dashboardConfig from './../../../dashboard/examples/full-dashboard.json'

// Determine the component based on config.type
const getComponent = config => {
  switch (config.type) {
    case 'map':
      return CdcMap
    case 'chart':
      return CdcChart
    case 'markup-include':
      return CdcMarkupInclude
    case 'waffle-chart':
      return CdcWaffleChart
    case 'dashboard':
      return CdcDashboard
    default:
      return () => <div>Unknown component type</div>
  }
}

const meta = {
  title: 'Components/Templates/Layout/Debug',
  component: args => {
    const Component = getComponent(args.config)
    return (
      <div className=''>
        <Component {...args} />
      </div>
    )
  }
} as Meta

export default meta

type Story = StoryObj

export const Chart: Story = {
  args: {
    config,
    isEditor: true
  }
}

export const Map: Story = {
  args: {
    config: mapConfig,
    isEditor: true
  }
}

export const MarkupInclude: StoryObj<typeof CdcMarkupInclude> = {
  args: {
    config: markupConfig,
    isEditor: true
  }
}

export const WaffleChart: StoryObj<typeof CdcWaffleChart> = {
  args: {
    config: waffleChartConfig,
    isEditor: true
  }
}

export const Dashboard: StoryObj<typeof CdcDashboard> = {
  args: {
    config: dashboardConfig,
    isEditor: true
  }
}

// export const WaffleChart: StoryObj<typeof CdcWaffleChart> = {
//   args: {
//     config: waffleChartConfig,
//     isEditor: true
//   }
// }
