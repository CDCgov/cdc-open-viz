import type { Meta, StoryObj } from '@storybook/react'
import Dashboard from '../CdcDashboard'
import { type DashboardConfig as Config } from '../types/DashboardConfig'

// API Dashboard Configs
import APICessationConfig from './_mock/api/cessation.json'
import APIDataExplorerConfig from './_mock/api/data-explorer.json'
import APIExploreByLocationConfig from './_mock/api/explore-by-location.json'
import APIExploreByTopicConfig from './_mock/api/explore-by-topic.json'
import APILegislationConfig from './_mock/api/legislation.json'
import APIOralHealthDataConfig from './_mock/api/oral-health-data.json'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard/API',
  component: Dashboard
}

type Story = StoryObj<typeof Dashboard>

export const Cessation: Story = {
  args: {
    config: APICessationConfig as unknown as Config,
    isEditor: false
  }
}

export const Data_Explorer: Story = {
  args: {
    config: APIDataExplorerConfig as unknown as Config,
    isEditor: false
  }
}

export const Explore_By_Location: Story = {
  args: {
    config: APIExploreByLocationConfig as unknown as Config,
    isEditor: false
  }
}

export const Explore_By_Topic: Story = {
  args: {
    config: APIExploreByTopicConfig as unknown as Config,
    isEditor: false
  }
}

export const Legislation: Story = {
  args: {
    config: APILegislationConfig as unknown as Config,
    isEditor: false
  }
}

export const Oral_Health_Data: Story = {
  args: {
    config: APIOralHealthDataConfig as unknown as Config,
    isEditor: false
  }
}

export default meta
