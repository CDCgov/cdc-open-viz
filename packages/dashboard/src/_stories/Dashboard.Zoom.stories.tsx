import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent } from 'storybook/test'
import cloneDeep from 'lodash/cloneDeep'
import Dashboard from '../CdcDashboard'
import SingleStateDashboardFilters from './_mock/single-state-dashboard-filters.json'
import {
  assertVisualizationRendered,
  performAndAssert,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'

type Story = StoryObj<typeof Dashboard>

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard/Zoom',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

const SingleStateDashboardZoomResetConfig = cloneDeep(SingleStateDashboardFilters)
SingleStateDashboardZoomResetConfig.dashboard.title = 'Single-State Shared Filter Zoom Reset'
SingleStateDashboardZoomResetConfig.dashboard.sharedFilters[0].key = 'State'
SingleStateDashboardZoomResetConfig.dashboard.sharedFilters[0].active = 'California'
SingleStateDashboardZoomResetConfig.visualizations.map1721943918271.general.title =
  'Single-State Shared Filter Zoom Reset'
SingleStateDashboardZoomResetConfig.visualizations.map1721943918271.general.filterControlsStatesPicked = 'State'
SingleStateDashboardZoomResetConfig.visualizations.map1721943918271.general.statesPicked = [
  {
    fipsCode: '06',
    stateName: 'California'
  }
]
delete SingleStateDashboardZoomResetConfig.visualizations.map1721943918271.general.filterControlsStatePicked
delete SingleStateDashboardZoomResetConfig.visualizations.map1721943918271.general.statePicked

const readZoomTransform = (canvasElement: HTMLElement) => {
  const zoomLayer = canvasElement.querySelector('svg > g > g[transform]') as SVGGElement | null
  return zoomLayer?.getAttribute('transform') || ''
}

export const SingleStateSharedFilterReset: Story = {
  args: {
    config: SingleStateDashboardZoomResetConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Dashboard zoom regression story for DEV-13086. Zoom the single-state map, then change the shared State filter. The map should refit to the new single state instead of preserving the prior zoom.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await assertVisualizationRendered(canvasElement)

    const stateFilter = canvas.getByLabelText('State', { selector: 'select' }) as HTMLSelectElement
    await waitForOptionsToPopulate(stateFilter, 2)
    await waitForPresence('button[aria-label="Zoom In"]', canvasElement)

    const zoomInButton = canvas.getByLabelText('Zoom In')

    await performAndAssert(
      'Single-state dashboard map zooms in',
      () => readZoomTransform(canvasElement),
      async () => {
        await userEvent.click(zoomInButton)
      },
      (before, after) => before !== after && !after.includes('scale(1)')
    )

    await performAndAssert(
      'Shared filter change refits single-state zoom',
      () => readZoomTransform(canvasElement),
      async () => {
        await userEvent.selectOptions(stateFilter, ['Florida'])
      },
      (before, after) => before !== after && after.includes('scale(1)')
    )
  }
}
