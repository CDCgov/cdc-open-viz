import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import SingleStateWithFilters from './_mock/DEV-8942.json'
import CustomLayerMap from './_mock/custom-layer-map.json'
import WastewaterMap from './_mock/wastewater-map.json'
import legendTests from './_mock/legends/legend-tests.json'
import { editConfigKeys } from '@cdc/chart/src/helpers/configHelpers'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Legend',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const Legend_Right: Story = {
  args: {
    config: editConfigKeys(SingleStateWithFilters, [{ path: ['legend', 'hideBorder'], value: true }])
  }
}

export const Legend_Bottom: Story = {
  args: {
    config: editConfigKeys(CustomLayerMap, [
      { path: ['legend', 'position'], value: 'bottom' },
      { path: ['legend', 'singleRow'], value: false }
    ])
  }
}

export const Legend_Bottom_Single_Row: Story = {
  args: {
    config: editConfigKeys(WastewaterMap, [
      { path: ['legend', 'position'], value: 'bottom' },
      { path: ['legend', 'style'], value: 'circles' },
      { path: ['legend', 'singleRow'], value: true }
    ])
  }
}

export const Legend_Tests: Story = {
  args: {
    config: legendTests,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const coolGray90 = '#dfe1e2'
    const legendSelection = 'section > ul > li:nth-child(3) > span.legend-item.me-2'
    const legendTextSelection = 'section > ul > li:nth-child(3) > span:nth-child(2)'
    const unifiedLegendCheckbox = ''

    // Wait for the component to render fully
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Query the Florida element directly
    const florida = canvasElement.querySelector('#Florida')

    // Check the fill color
    await new Promise(resolve => setTimeout(resolve, 2000))
    await expect(florida).toHaveStyle('fill: rgb(255, 237, 160)')

    // Click the legend element for Florida and recheck
    await user.click(canvasElement.querySelector(legendSelection))
    await expect(florida).toHaveStyle(`fill: ${coolGray90}`)

    //  Sidebar Accordion Click
    const filtersAccordionButton = await canvas.findByRole('button', { name: 'Filters' })
    await user.click(filtersAccordionButton)

    // Add Filter Button Click
    const addFilterButton = await canvas.findByRole('button', { name: 'Add Filter' })
    await user.click(addFilterButton)

    // Open Filter Click
    const caretDownButton = await canvas.getByText('New Filter').previousElementSibling
    await user.click(caretDownButton)

    //  Select Filter
    const select = await canvasElement.querySelector('select[name="columnName"]')
    await user.selectOptions(select, 'Location')

    // expect legend selection text to include 6 - 10
    await expect(canvasElement.querySelector(legendTextSelection)).toHaveTextContent('6 - 10')

    // Change the filter value from Home > Vehicle
    const filterBySelect = await canvas.getByLabelText(/Filter by undefined/i)
    await userEvent.selectOptions(filterBySelect, 'Vehicle')
    await expect(canvasElement.querySelector(legendTextSelection)).toHaveTextContent('5 - 9')

    // click on unified legend
    await canvas.getByRole('button', { name: 'Legend' }).click()

    // Click on unified legend button using Storybook Testing Library
    const checkbox = await canvas.getByRole('checkbox', { name: /Unified Legend/i })
    await user.click(checkbox)

    // verify legendTextSelection is 5 - 10
    await expect(canvasElement.querySelector(legendTextSelection)).toHaveTextContent('5 - 11')
    await userEvent.selectOptions(filterBySelect, 'Home')
    await expect(canvasElement.querySelector(legendTextSelection)).toHaveTextContent('5 - 11')
  }
}
