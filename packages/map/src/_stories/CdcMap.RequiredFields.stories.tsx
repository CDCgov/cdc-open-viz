import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'

const incompleteDataMap = cloneConfig(usaStateGradientConfig)
incompleteDataMap.columns.geo.name = ''
incompleteDataMap.columns.primary.name = ''

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Required Fields',
  component: CdcMap,
  parameters: { layout: 'fullscreen' }
}

type Story = StoryObj<typeof CdcMap>

const getAlerts = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('.map-required-fields-alerts .alert-info'))

const expectRequiredAlerts = (canvasElement: HTMLElement, fields: string[]) => {
  const alerts = getAlerts(canvasElement)
  expect(alerts).toHaveLength(fields.length)
  fields.forEach((field, index) => {
    expect(alerts[index]).toHaveTextContent(`Missing field: ${field}. More information`)
    expect(
      within(alerts[index] as HTMLElement).getByRole('button', {
        name: `Open Columns and focus ${field}`
      })
    ).toBeVisible()
  })
}

export const CompletesRequiredColumns: Story = {
  args: {
    config: incompleteDataMap,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('.map-required-fields-alerts', canvasElement)

    expectRequiredAlerts(canvasElement, ['Geography', 'Data Column'])
    expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()
    expect(canvasElement.querySelector('.map-required-fields-alerts button[aria-label="Close"]')).toBeNull()

    const columnsButton = canvas.getByRole('button', { name: 'Columns' })
    await userEvent.click(columnsButton)
    const geographySectionButton = canvasElement.querySelector<HTMLButtonElement>(
      '[data-required-field-subsection="map-geography-section"]'
    )
    expect(geographySectionButton).toBeTruthy()
    await userEvent.click(geographySectionButton!)
    await userEvent.click(columnsButton)
    await userEvent.click(canvas.getByTitle('Collapse Editor'))

    const geographyAlertAction = canvas.getByRole('button', { name: 'Open Columns and focus Geography' })
    await performAndAssert(
      'The Geography alert reveals the collapsed editor and field',
      () => ({
        columnsExpanded: columnsButton.getAttribute('aria-expanded') === 'true',
        subsectionExpanded:
          canvasElement
            .querySelector('[data-required-field-subsection="map-geography-section"]')
            ?.getAttribute('aria-expanded') === 'true',
        focused: document.activeElement?.getAttribute('data-required-field-control'),
        panelVisible: !canvasElement.querySelector('.editor-panel__toggle.collapsed')
      }),
      async () => userEvent.click(geographyAlertAction),
      (_before, after) =>
        after.columnsExpanded && after.subsectionExpanded && after.focused === 'map-geography' && after.panelVisible
    )

    const geographySelect = canvasElement.querySelector<HTMLSelectElement>(
      '[data-required-field-control="map-geography"]'
    )
    expect(geographySelect).toBeTruthy()
    await userEvent.selectOptions(geographySelect!, 'STATE')
    await waitForAbsence('.map-required-fields-alerts .alert-info:first-child + .alert-info', canvasElement)
    expectRequiredAlerts(canvasElement, ['Data Column'])

    const dataColumnAlertAction = canvas.getByRole('button', { name: 'Open Columns and focus Data Column' })
    await performAndAssert(
      'The Data Column alert focuses the field',
      () => document.activeElement?.getAttribute('data-required-field-control'),
      async () => userEvent.click(dataColumnAlertAction),
      (_before, after) => after === 'map-data-column'
    )
    const dataColumnSelect = canvasElement.querySelector<HTMLSelectElement>(
      '[data-required-field-control="map-data-column"]'
    )
    expect(dataColumnSelect).toBeTruthy()
    await userEvent.selectOptions(dataColumnSelect!, 'Rate')

    await waitForAbsence('.map-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
  }
}

export const RuntimeModeDoesNotShowAuthoringAlerts: Story = {
  args: { config: incompleteDataMap, isEditor: false },
  play: async ({ canvasElement }) => {
    expect(canvasElement.querySelector('.map-required-fields-alerts')).toBeNull()
  }
}

export default meta
