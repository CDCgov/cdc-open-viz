import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor } from 'storybook/test'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import EqualNumberMap from './_mock/equal-number.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Tooltip Links',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

const buildTooltipLinkConfig = (title: string, navigationUrl: string) =>
  editConfigKeys(EqualNumberMap, [
    { path: ['general', 'title'], value: title },
    { path: ['general', 'navigationTarget'], value: '_blank' },
    { path: ['tooltips', 'appearanceType'], value: 'click' },
    { path: ['tooltips', 'linkLabel'], value: 'View report' },
    {
      path: ['data'],
      value: EqualNumberMap.data.map(row => ({ ...row, URL: navigationUrl }))
    }
  ])

const openStateTooltip = async (canvasElement: HTMLElement, stateName: string) => {
  await assertVisualizationRendered(canvasElement)
  await waitForPresence(`g.geo-group[id="${stateName}"]`, canvasElement)

  const state = canvasElement.querySelector(`g.geo-group[id="${stateName}"]`)
  expect(state).toBeTruthy()
  await userEvent.click(state as Element)

  await waitForPresence('.modal-content .navigation-link', canvasElement)
}

const closeTooltip = async (canvasElement: HTMLElement) => {
  const closeButton = canvasElement.querySelector('.modal-close')
  expect(closeButton).toBeTruthy()
  await userEvent.click(closeButton as Element)

  await waitFor(() => {
    expect(canvasElement.querySelector('.modal-content')).toBeNull()
  })
}

const expectPdfBadge = (canvasElement: HTMLElement) => {
  expect(canvasElement.querySelector('.modal-content .navigation-link__pdf-badge')?.textContent).toBe('PDF')
  expect(canvasElement.querySelector('.modal-content .navigation-link svg')).toBeNull()
}

const expectExternalIcon = (canvasElement: HTMLElement) => {
  expect(canvasElement.querySelector('.modal-content .navigation-link__pdf-badge')).toBeNull()
  expect(canvasElement.querySelector('.modal-content .navigation-link svg.inline-icon')).toBeTruthy()
}

export const PDF_Link_Badge: Story = {
  args: {
    config: buildTooltipLinkConfig('Click Tooltip With PDF Link', 'https://example.com/reports/alabama.pdf'),
    isEditor: false,
    navigationHandler: () => undefined
  },
  play: async ({ canvasElement }) => {
    await openStateTooltip(canvasElement, 'Alabama')
    expectPdfBadge(canvasElement)

    await closeTooltip(canvasElement)
    await openStateTooltip(canvasElement, 'Alaska')
    expectPdfBadge(canvasElement)
  }
}

export const External_Link_Icon: Story = {
  args: {
    config: buildTooltipLinkConfig('Click Tooltip With External Link', 'https://example.com/reports/alabama.html'),
    isEditor: false,
    navigationHandler: () => undefined
  },
  play: async ({ canvasElement }) => {
    await openStateTooltip(canvasElement, 'Alabama')
    expectExternalIcon(canvasElement)

    await closeTooltip(canvasElement)
    await openStateTooltip(canvasElement, 'Alaska')
    expectExternalIcon(canvasElement)
  }
}

export default meta
