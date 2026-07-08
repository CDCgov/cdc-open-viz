import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import CdcMap from '../CdcMap'
import worldBubbleDiseaseType from './_mock/world-bubble-disease-type.json'
import usBubble from '../../examples/bubble-us.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Bubble Legend',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const Bubble_Legend_Custom_Text: Story = {
  args: {
    config: editConfigKeys(worldBubbleDiseaseType, [
      { path: ['legend', 'style'], value: 'gradient' },
      { path: ['bubble', 'layers', 0, 'legend', 'title'], value: 'Disease Type' },
      {
        path: ['bubble', 'layers', 0, 'legend', 'description'],
        value: 'Bubble colors group countries by disease type.'
      }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const bubbleLegend = await waitForPresence('ul[aria-label="Bubble legend items"]', canvasElement)
    expect(bubbleLegend).toHaveClass('bubble-legend--gradient')
    expect(canvasElement).toHaveTextContent('Disease Type')
    expect(canvasElement).toHaveTextContent('Bubble colors group countries by disease type.')
  }
}

export const Bubble_Legend_Hidden: Story = {
  args: {
    config: editConfigKeys(worldBubbleDiseaseType, [{ path: ['bubble', 'layers', 0, 'legend', 'show'], value: false }]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    expect(canvasElement.querySelector('ul[aria-label="Bubble legend items"]')).not.toBeInTheDocument()
  }
}

export const Bubble_Size_Legend_Custom_Text: Story = {
  args: {
    config: editConfigKeys(worldBubbleDiseaseType, [
      { path: ['legend', 'style'], value: 'gradient' },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'title'], value: 'Case Count' },
      {
        path: ['bubble', 'layers', 0, 'legend', 'size', 'description'],
        value: 'Circle size shows the number of reported cases.'
      }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)
    expect(sizeLegend).toHaveClass('bubble-size-legend--gradient')
    expect(canvasElement).toHaveTextContent('Case Count')
    expect(canvasElement).toHaveTextContent('Circle size shows the number of reported cases.')
    expect(sizeLegend).toHaveTextContent('45')
    expect(sizeLegend).toHaveTextContent('390')
    expect(sizeLegend).toHaveTextContent('740')
  }
}

export const Bubble_Size_Legend_Categorical: Story = {
  args: {
    config: editConfigKeys(worldBubbleDiseaseType, [
      { path: ['bubble', 'layers', 0, 'sizeType'], value: 'category' },
      { path: ['bubble', 'layers', 0, 'columns', 'size', 'name'], value: 'diseaseType' },
      { path: ['bubble', 'layers', 0, 'sizeCategoryValuesOrder'], value: ['Measles', 'COVID-19', 'Influenza'] },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'title'], value: 'Disease size category' }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)
    const labels = Array.from(sizeLegend.querySelectorAll('li')).map(item => item.textContent?.trim())

    expect(canvasElement).toHaveTextContent('Disease size category')
    expect(labels).toEqual(['Measles', 'COVID-19', 'Influenza'])
  }
}

export const Bubble_Size_Legend_Hidden_By_Default: Story = {
  args: {
    config: worldBubbleDiseaseType,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    expect(canvasElement.querySelector('ul[aria-label="Bubble size legend items"]')).not.toBeInTheDocument()
  }
}

export const US_Bubble_Size_Legend: Story = {
  args: {
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['general', 'showSidebar'], value: true },
      { path: ['bubble', 'layers', 0, 'minBubbleSize'], value: 1 },
      { path: ['bubble', 'layers', 0, 'maxBubbleSize'], value: 20 },
      { path: ['bubble', 'layers', 0, 'extraBubbleBorder'], value: false },
      { path: ['bubble', 'layers', 0, 'showBubbleZeros'], value: false },
      { path: ['bubble', 'layers', 0, 'columns', 'geo', 'name'], value: 'State' },
      { path: ['bubble', 'layers', 0, 'columns', 'primary', 'name'], value: 'Cases' },
      { path: ['bubble', 'layers', 0, 'legend', 'show'], value: true },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'title'], value: 'Case Count' }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const bubbleLegend = await waitForPresence('ul[aria-label="Bubble legend items"]', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)
    const legendSection = canvasElement.querySelector('section[aria-label="Map Legend"]')

    expect(legendSection?.querySelector('hr')).not.toBeInTheDocument()
    expect(Boolean(bubbleLegend.compareDocumentPosition(sizeLegend) & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
    expect(canvasElement).toHaveTextContent('Case Count')
    expect(sizeLegend).toHaveTextContent('1')
    expect(sizeLegend).toHaveTextContent('10,700')
  }
}

export const US_Bubble_Data_Table_Uses_Layer_Columns: Story = {
  args: {
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['table', 'expanded'], value: true },
      { path: ['table', 'forceDisplay'], value: true },
      { path: ['table', 'download'], value: false }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const dataTable = await waitForPresence('.data-table', canvasElement)
    const headers = Array.from(dataTable.querySelectorAll('thead th')).map(header => header.textContent?.trim())

    expect(headers.join(' ')).toContain('Location')
    expect(headers.join(' ')).toContain('Total Confirmed Cases')
    expect(dataTable).toHaveTextContent('California')
    expect(dataTable).toHaveTextContent('10700')
  }
}

export const Bubble_Accordion_Follows_Visual: Story = {
  args: {
    config: editConfigKeys(usBubble, [{ path: ['version'], value: '4.26.7' }]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForEditor(within(canvasElement))

    const accordionLabels = Array.from(canvasElement.querySelectorAll('.accordion__button')).map(button =>
      button.textContent?.trim()
    )
    const visualIndex = accordionLabels.indexOf('Visual')
    const bubblesIndex = accordionLabels.indexOf('Bubble Layers')
    const customLayersIndex = accordionLabels.indexOf('Custom Map Layers')

    expect(visualIndex).toBeGreaterThan(-1)
    expect(bubblesIndex).toBeGreaterThan(visualIndex)
    expect(customLayersIndex).toBeGreaterThan(bubblesIndex)
  }
}

export const Bubble_Layer_Field_Groups: Story = {
  args: {
    config: editConfigKeys(usBubble, [{ path: ['version'], value: '4.26.7' }]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await assertVisualizationRendered(canvasElement)
    await waitForEditor(canvas)

    await userEvent.click(canvas.getByRole('button', { name: 'Bubble Layers' }))

    const bubbleLayersButton = canvas.getByRole('button', { name: 'Bubble Layers' })
    const bubbleLayersItem = bubbleLayersButton.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    const layerButton = Array.from(bubbleLayersItem?.querySelectorAll('.accordion__button') ?? []).find(
      button => button.textContent?.trim() === 'Layer 1: Cases'
    ) as HTMLElement | undefined

    expect(layerButton).toBeTruthy()
    await userEvent.click(layerButton as HTMLElement)

    const layerItem = layerButton?.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    const layerAccordionButtons = Array.from(layerItem?.querySelectorAll('.accordion__button') ?? []) as HTMLElement[]
    const layerAccordionLabels = layerAccordionButtons.map(button => button.textContent?.trim())
    const dataIndex = layerAccordionLabels.indexOf('Data')
    const visualIndex = layerAccordionLabels.indexOf('Visual')
    const legendIndex = layerAccordionLabels.indexOf('Legend')

    expect(dataIndex).toBeGreaterThan(-1)
    expect(visualIndex).toBeGreaterThan(dataIndex)
    expect(legendIndex).toBeGreaterThan(visualIndex)

    const dataButton = layerAccordionButtons[dataIndex]
    const visualButton = layerAccordionButtons[visualIndex]

    await userEvent.click(dataButton)
    const dataItem = dataButton.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    expect(dataItem).not.toHaveTextContent('Layer Label')
    expect(dataItem).not.toHaveTextContent('Show Location in Tooltips')
    expect(dataItem).not.toHaveTextContent('Show Coloring Field in Tooltips')
    expect(dataItem).toHaveTextContent('Maximum Bubble Size')
    expect(dataItem).not.toHaveTextContent('Bubble Map has extra border')

    await userEvent.click(visualButton)
    const visualItem = visualButton.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    expect(visualItem).toHaveTextContent("Show Data with Zero's on Bubble Map")
    expect(visualItem).toHaveTextContent('Bubble Map has extra border')
    expect(visualItem).toHaveTextContent('Bubble Color Palette')
    expect(visualItem).not.toHaveTextContent('Maximum Bubble Size')

    await userEvent.click(canvas.getByRole('button', { name: 'Add Bubble Layer' }))
    const newLayerButton = Array.from(bubbleLayersItem?.querySelectorAll('.accordion__button') ?? []).find(
      button => button.textContent?.trim() === 'Layer 2'
    ) as HTMLElement | undefined

    expect(newLayerButton).toBeTruthy()
    await userEvent.click(newLayerButton as HTMLElement)

    const newLayerItem = newLayerButton?.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    const newLayerAccordionButtons = Array.from(
      newLayerItem?.querySelectorAll('.accordion__button') ?? []
    ) as HTMLElement[]
    const newLayerDataButton = newLayerAccordionButtons.find(button => button.textContent?.trim() === 'Data')

    expect(newLayerDataButton).toBeTruthy()
    await userEvent.click(newLayerDataButton as HTMLElement)

    const newLayerDataItem = newLayerDataButton?.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    const newLayerDataCanvas = within(newLayerDataItem as HTMLElement)
    const newLayerColoringField = newLayerDataCanvas.getByLabelText('Coloring Field') as HTMLSelectElement
    const newLayerSizeColumn = newLayerDataCanvas.getByLabelText('Size Column') as HTMLSelectElement
    const newLayerMinBubbleSize = newLayerDataCanvas.getByLabelText('Minimum Bubble Size') as HTMLInputElement
    const newLayerMaxBubbleSize = newLayerDataCanvas.getByLabelText('Maximum Bubble Size') as HTMLInputElement

    expect(newLayerColoringField.value).toBe('')
    expect(newLayerColoringField.selectedOptions[0]?.textContent).toBe('- None -')
    expect(newLayerSizeColumn.value).toBe('')
    expect(newLayerSizeColumn.selectedOptions[0]?.textContent).toBe('- None -')
    expect(newLayerDataItem).not.toHaveTextContent('Bubble Size Type')
    expect(newLayerMinBubbleSize.value).toBe('12')
    expect(newLayerMaxBubbleSize.value).toBe('30')
  }
}

export const Bubble_Layer_Categorical_Size_Editor: Story = {
  args: {
    config: editConfigKeys(usBubble, [{ path: ['version'], value: '4.26.7' }]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await assertVisualizationRendered(canvasElement)
    await waitForEditor(canvas)

    await userEvent.click(canvas.getByRole('button', { name: 'Bubble Layers' }))
    const bubbleLayersButton = canvas.getByRole('button', { name: 'Bubble Layers' })
    const bubbleLayersItem = bubbleLayersButton.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    const layerButton = Array.from(bubbleLayersItem?.querySelectorAll('.accordion__button') ?? []).find(
      button => button.textContent?.trim() === 'Layer 1: Cases'
    ) as HTMLElement | undefined

    await userEvent.click(layerButton as HTMLElement)
    const layerItem = layerButton?.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    const dataButton = Array.from(layerItem?.querySelectorAll('.accordion__button') ?? []).find(
      button => button.textContent?.trim() === 'Data'
    ) as HTMLElement | undefined

    await userEvent.click(dataButton as HTMLElement)
    const dataItem = dataButton?.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    const dataCanvas = within(dataItem as HTMLElement)

    expect(dataItem).not.toHaveTextContent('Bubble Size Type')
    await userEvent.selectOptions(dataCanvas.getByLabelText('Size Column'), 'Category')
    expect(dataCanvas.getByLabelText('Bubble Size Type')).toBeInTheDocument()
    expect(dataItem).toHaveTextContent('This size column contains non-numeric values')
    expect(dataItem).not.toHaveTextContent('Bubble Size Sort')
    expect(dataItem).not.toHaveTextContent('Category Order')

    await userEvent.selectOptions(dataCanvas.getByLabelText('Bubble Size Type'), 'category')
    const sizeSort = dataCanvas.getByLabelText('Bubble Size Sort') as HTMLSelectElement
    expect(sizeSort.value).toBe('automatic')
    expect(dataItem).not.toHaveTextContent('This size column contains non-numeric values')
    expect(dataItem).not.toHaveTextContent('Category Order')

    await userEvent.selectOptions(sizeSort, 'custom')
    expect(dataItem).toHaveTextContent('Category Order')

    await userEvent.selectOptions(sizeSort, 'automatic')
    expect(dataItem).not.toHaveTextContent('Category Order')
  }
}
