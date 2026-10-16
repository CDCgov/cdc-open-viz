import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
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

const getCircleScreenRadius = (circle: Element) => {
  const rect = circle.getBoundingClientRect()
  return Math.max(rect.width, rect.height) / 2
}

const expectLargestMapBubbleAndSizeLegendRadiiToMatch = async (canvasElement: HTMLElement, sizeLegend: Element) => {
  await waitFor(() => {
    const largestMapBubbleRadius = Math.max(
      ...Array.from(canvasElement.querySelectorAll('circle.bubble')).map(getCircleScreenRadius)
    )
    const largestLegendBubbleRadius = Math.max(
      ...Array.from(sizeLegend.querySelectorAll('.bubble-size-legend__marker')).map(getCircleScreenRadius)
    )

    expect(largestMapBubbleRadius).toBeGreaterThan(0)
    expect(largestLegendBubbleRadius).toBeGreaterThan(0)
    expect(Math.abs(largestMapBubbleRadius - largestLegendBubbleRadius)).toBeLessThanOrEqual(1.5)
  })
}

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

    const bubbleLegendCanvas = within(bubbleLegend)
    const covidBubble = await waitForPresence('circle.bubble.country--France', canvasElement)
    const influenzaBubble = await waitForPresence('circle.bubble.country--Brazil', canvasElement)
    const initialCovidFill = covidBubble.getAttribute('fill')
    const initialInfluenzaFill = influenzaBubble.getAttribute('fill')

    expect(canvasElement).toHaveTextContent('Disease Type')
    expect(canvasElement).toHaveTextContent('Bubble colors group countries by disease type.')
    expect(initialCovidFill).toBeTruthy()
    expect(initialInfluenzaFill).toBeTruthy()
    expect(initialInfluenzaFill).not.toBe('#FFFFFF')

    await userEvent.click(bubbleLegendCanvas.getByRole('button', { name: 'COVID-19' }))

    await waitFor(() => {
      const covidLegendItem = bubbleLegendCanvas.getByRole('button', { name: 'COVID-19' }).closest('li')
      const influenzaLegendItem = bubbleLegendCanvas.getByRole('button', { name: 'Influenza' }).closest('li')

      expect(covidLegendItem).toHaveClass('legend-container__li--not-disabled')
      expect(influenzaLegendItem).toHaveClass('legend-container__li--disabled')
      expect(canvasElement.querySelector('circle.bubble.country--France')).toHaveAttribute('fill', initialCovidFill)
      expect(canvasElement.querySelector('circle.bubble.country--Brazil')).not.toBeInTheDocument()
    })

    const showAllButton = within(canvasElement).getByRole('button', { name: 'Show All' })
    await userEvent.click(showAllButton)

    await waitFor(() => {
      const covidLegendItem = bubbleLegendCanvas.getByRole('button', { name: 'COVID-19' }).closest('li')
      const influenzaLegendItem = bubbleLegendCanvas.getByRole('button', { name: 'Influenza' }).closest('li')

      expect(covidLegendItem).not.toHaveClass('legend-container__li--not-disabled')
      expect(influenzaLegendItem).not.toHaveClass('legend-container__li--disabled')
      expect(canvasElement.querySelector('circle.bubble.country--France')).toHaveAttribute('fill', initialCovidFill)
      expect(canvasElement.querySelector('circle.bubble.country--Brazil')).toHaveAttribute('fill', initialInfluenzaFill)
      expect(within(canvasElement).queryByRole('button', { name: 'Show All' })).not.toBeInTheDocument()
    })
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
      { path: ['bubble', 'layers', 0, 'columns', 'primary', 'name'], value: '' },
      { path: ['bubble', 'layers', 0, 'staticColor'], value: '#C95936' },
      { path: ['bubble', 'layers', 0, 'extraBubbleBorder'], value: true },
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
    const mapBubble = await waitForPresence('circle.bubble', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)
    const sizeLegendBubble = await waitForPresence('.bubble-size-legend__marker', canvasElement)
    expect(sizeLegend).toHaveClass('bubble-size-legend--gradient')
    expect(canvasElement).toHaveTextContent('Case Count')
    expect(canvasElement).toHaveTextContent('Circle size shows the number of reported cases.')
    expect(sizeLegend).toHaveTextContent('45')
    expect(sizeLegend).toHaveTextContent('390')
    expect(sizeLegend).toHaveTextContent('740')

    await expectLargestMapBubbleAndSizeLegendRadiiToMatch(canvasElement, sizeLegend)
    expect(mapBubble).toHaveAttribute('fill', '#C95936')
    expect(sizeLegendBubble).toHaveAttribute('fill', '#C95936')
    expect(sizeLegendBubble).toHaveAttribute('fill', mapBubble.getAttribute('fill'))
    expect(sizeLegendBubble).toHaveAttribute('stroke', mapBubble.getAttribute('stroke'))
    expect(sizeLegendBubble).toHaveAttribute('stroke', '#1c1d1f')
    expect(sizeLegendBubble).toHaveAttribute('stroke-width', '1')
    expect(sizeLegendBubble).toHaveAttribute('fill-opacity', mapBubble.getAttribute('fill-opacity'))
  }
}

export const Bubble_Size_Legend_Shows_When_Color_Legend_Hidden: Story = {
  args: {
    config: editConfigKeys(worldBubbleDiseaseType, [
      { path: ['bubble', 'layers', 0, 'legend', 'show'], value: false },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'title'], value: 'Case Count' }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('circle.bubble', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)

    expect(canvasElement.querySelector('ul[aria-label="Bubble legend items"]')).not.toBeInTheDocument()
    expect(canvasElement).toHaveTextContent('Case Count')
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
    const sizeLegendBubble = await waitForPresence('.bubble-size-legend__marker', canvasElement)
    const labels = Array.from(sizeLegend.querySelectorAll('li')).map(item => item.textContent?.trim())

    expect(canvasElement).toHaveTextContent('Disease size category')
    expect(labels).toEqual(['Measles', 'COVID-19', 'Influenza'])
    expect(sizeLegendBubble).toHaveAttribute('fill', '#6B6B6B')
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
      { path: ['general', 'displayStateLabels'], value: true },
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
    const bubble = await waitForPresence('circle.bubble', canvasElement)
    const stateLabels = await waitForPresence('.state-labels-above-bubbles', canvasElement)
    const bubbleLegend = await waitForPresence('ul[aria-label="Bubble legend items"]', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)
    const legendSection = canvasElement.querySelector('section[aria-label="Map Legend"]')

    expect(legendSection?.querySelector('hr')).not.toBeInTheDocument()
    expect(Boolean(bubble.compareDocumentPosition(stateLabels) & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
    expect(Boolean(bubbleLegend.compareDocumentPosition(sizeLegend) & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
    expect(canvasElement).toHaveTextContent('Case Count')
    expect(sizeLegend).toHaveTextContent('1')
    expect(sizeLegend).toHaveTextContent('10,700')

    await expectLargestMapBubbleAndSizeLegendRadiiToMatch(canvasElement, sizeLegend)
  }
}

export const US_Territory_Bubble_Puerto_Rico: Story = {
  args: {
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['general', 'showSidebar'], value: true },
      { path: ['general', 'territoriesAlwaysShow'], value: false },
      { path: ['general', 'displayStateLabels'], value: false },
      { path: ['bubble', 'layers', 0, 'sizeType'], value: 'category' },
      { path: ['bubble', 'layers', 0, 'sizeCategoryValuesOrder'], value: ['Low', 'Medium', 'High'] },
      { path: ['bubble', 'layers', 0, 'minBubbleSize'], value: 4 },
      { path: ['bubble', 'layers', 0, 'maxBubbleSize'], value: 20 },
      { path: ['bubble', 'layers', 0, 'columns', 'geo', 'name'], value: 'State' },
      { path: ['bubble', 'layers', 0, 'columns', 'primary', 'name'], value: '' },
      { path: ['bubble', 'layers', 0, 'columns', 'size', 'name'], value: 'Bubble Category' },
      { path: ['bubble', 'layers', 0, 'staticColor'], value: '#C95936' },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true },
      {
        path: ['data'],
        value: [
          { State: 'Alabama', Cases: 12, 'Bubble Category': 'Low' },
          { State: 'California', Cases: 24, 'Bubble Category': 'Medium' },
          { State: 'Texas', Cases: 48, 'Bubble Category': 'High' },
          { State: 'PR', Cases: 36, 'Bubble Category': 'High' }
        ]
      }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const puertoRicoTerritory = await waitForPresence('svg.US-PR', canvasElement)
    const puertoRicoBubble = await waitForPresence('svg.US-PR circle.bubble', canvasElement)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)
    const mainMapBubbles = Array.from(canvasElement.querySelectorAll('svg[role="img"] circle.bubble'))
    const largestMainMapBubble = mainMapBubbles.reduce((largest, bubble) =>
      Number(bubble.getAttribute('r')) > Number(largest.getAttribute('r')) ? bubble : largest
    )

    expect(puertoRicoTerritory).toBeInTheDocument()
    expect(puertoRicoBubble).toHaveAttribute('cx', '22.5')
    expect(puertoRicoBubble).toHaveAttribute('cy', '14.5')
    expect(puertoRicoBubble).toHaveAttribute('fill', '#C95936')
    expect(puertoRicoBubble.getAttribute('data-tooltip-html') || '').toContain('Puerto Rico')
    expect(puertoRicoBubble.getAttribute('data-tooltip-html') || '').not.toContain('>PR<')
    expect(largestMainMapBubble).toHaveAttribute('r', '20')

    await waitFor(() => {
      const territoryDiameter = puertoRicoBubble.getBoundingClientRect().width
      const mainMapDiameter = largestMainMapBubble.getBoundingClientRect().width
      const largestLegendDiameter = Math.max(
        ...Array.from(sizeLegend.querySelectorAll('.bubble-size-legend__marker')).map(
          marker => marker.getBoundingClientRect().width
        )
      )

      expect(territoryDiameter).toBeGreaterThan(0)
      expect(Math.abs(territoryDiameter - mainMapDiameter)).toBeLessThanOrEqual(1.5)
      expect(Math.abs(territoryDiameter - largestLegendDiameter)).toBeLessThanOrEqual(1.5)
    })
  }
}

export const US_Territory_Bubble_Hidden_For_Hex_Map: Story = {
  args: {
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['general', 'displayAsHex'], value: true },
      { path: ['general', 'showSidebar'], value: true },
      { path: ['general', 'territoriesAlwaysShow'], value: false },
      { path: ['general', 'displayStateLabels'], value: false },
      { path: ['bubble', 'layers', 0, 'sizeType'], value: 'category' },
      { path: ['bubble', 'layers', 0, 'sizeCategoryValuesOrder'], value: ['Low', 'Medium', 'High'] },
      { path: ['bubble', 'layers', 0, 'minBubbleSize'], value: 4 },
      { path: ['bubble', 'layers', 0, 'maxBubbleSize'], value: 20 },
      { path: ['bubble', 'layers', 0, 'columns', 'geo', 'name'], value: 'State' },
      { path: ['bubble', 'layers', 0, 'columns', 'primary', 'name'], value: '' },
      { path: ['bubble', 'layers', 0, 'columns', 'size', 'name'], value: 'Bubble Category' },
      { path: ['bubble', 'layers', 0, 'staticColor'], value: '#C95936' },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true },
      {
        path: ['data'],
        value: [
          { State: 'Alabama', Cases: 12, 'Bubble Category': 'Low' },
          { State: 'California', Cases: 24, 'Bubble Category': 'Medium' },
          { State: 'Texas', Cases: 48, 'Bubble Category': 'High' },
          { State: 'Puerto Rico', Cases: 36, 'Bubble Category': 'High' }
        ]
      }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const puertoRicoTerritory = await waitForPresence('svg.territory-wrapper--hex', canvasElement)

    expect(puertoRicoTerritory).toBeInTheDocument()
    expect(canvasElement.querySelector('svg.territory-wrapper--hex circle.bubble')).not.toBeInTheDocument()
    expect(canvasElement.querySelector('svg[role="img"] circle.bubble')).not.toBeInTheDocument()
  }
}

export const US_Bubble_Tooltip_Uses_Resolved_State_Name: Story = {
  args: {
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['general', 'showSidebar'], value: true },
      { path: ['general', 'displayStateLabels'], value: false },
      { path: ['bubble', 'layers', 0, 'columns', 'geo', 'name'], value: 'State' },
      { path: ['bubble', 'layers', 0, 'columns', 'primary', 'name'], value: 'Cases' },
      { path: ['bubble', 'layers', 0, 'minBubbleSize'], value: 4 },
      { path: ['bubble', 'layers', 0, 'maxBubbleSize'], value: 20 },
      {
        path: ['data'],
        value: [{ State: 'CA', Cases: 24 }]
      }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const bubble = await waitForPresence('circle.bubble[data-tooltip-html]', canvasElement)
    const tooltipHtml = bubble.getAttribute('data-tooltip-html') || ''

    expect(tooltipHtml).toContain('California')
    expect(tooltipHtml).not.toContain('>CA<')
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
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['bubble', 'layers', 0, 'legend', 'size', 'show'], value: true }
    ]),
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
    expect(dataItem).not.toHaveTextContent('Add dark outline to bubbles')

    await userEvent.click(visualButton)
    const visualItem = visualButton.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    expect(visualItem).toHaveTextContent('Show bubbles for zeroes')
    expect(visualItem).toHaveTextContent('Add dark outline to bubbles')
    const bubbleOpacity = within(visualItem as HTMLElement).getByLabelText('Bubble Opacity') as HTMLInputElement
    expect(bubbleOpacity.value).toBe('0.9')
    expect(visualItem).toHaveTextContent('Bubble Color Palette')
    expect(visualItem).toHaveTextContent('Reverse colors')
    expect(within(visualItem as HTMLElement).queryByText(/^Bubble Color$/)).not.toBeInTheDocument()
    expect(visualItem).not.toHaveTextContent('Maximum Bubble Size')

    await userEvent.clear(bubbleOpacity)
    await userEvent.type(bubbleOpacity, '0.5')

    await waitFor(() => {
      expect(canvasElement.querySelector('circle.bubble')).toHaveAttribute('fill-opacity', '0.5')
      expect(canvasElement.querySelector('.bubble-size-legend__marker')).toHaveAttribute('fill-opacity', '0.5')
    })

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
    const newLayerLocationColumn = newLayerDataCanvas.getByLabelText('Location Data Column') as HTMLSelectElement
    const newLayerColoringField = newLayerDataCanvas.getByLabelText('Coloring Field') as HTMLSelectElement
    const newLayerSizeColumn = newLayerDataCanvas.getByLabelText('Size Column') as HTMLSelectElement
    const newLayerMinBubbleSize = newLayerDataCanvas.getByLabelText('Minimum Bubble Size') as HTMLInputElement
    const newLayerMaxBubbleSize = newLayerDataCanvas.getByLabelText('Maximum Bubble Size') as HTMLInputElement

    expect(newLayerLocationColumn.value).toBe('')
    expect(newLayerColoringField.value).toBe('')
    expect(newLayerColoringField.selectedOptions[0]?.textContent).toBe('- None -')
    expect(newLayerSizeColumn.value).toBe('')
    expect(newLayerSizeColumn.selectedOptions[0]?.textContent).toBe('- None -')
    expect(newLayerDataItem).not.toHaveTextContent('Bubble Size Type')
    expect(newLayerMinBubbleSize.value).toBe('12')
    expect(newLayerMaxBubbleSize.value).toBe('30')

    const newLayerVisualButton = newLayerAccordionButtons.find(button => button.textContent?.trim() === 'Visual')

    expect(newLayerVisualButton).toBeTruthy()
    await userEvent.click(newLayerVisualButton as HTMLElement)

    const newLayerVisualItem = newLayerVisualButton?.closest(
      '[data-accordion-component="AccordionItem"], .accordion__item'
    )
    const newLayerVisualCanvas = within(newLayerVisualItem as HTMLElement)

    expect(newLayerVisualCanvas.getByText(/^Bubble Color$/)).toBeInTheDocument()
    expect((newLayerVisualCanvas.getByLabelText('Bubble Opacity') as HTMLInputElement).value).toBe('0.9')
    expect(newLayerVisualCanvas.getByLabelText('Add dark outline to bubbles')).toBeChecked()
    expect(newLayerVisualCanvas.getAllByRole('button', { name: /Bubble Color #/ })).toHaveLength(12)
    expect(newLayerVisualItem).not.toHaveTextContent('Bubble Color Palette')
    expect(newLayerVisualItem).not.toHaveTextContent('Reverse colors')
    expect(newLayerVisualCanvas.queryByLabelText('Custom Bubble Color')).not.toBeInTheDocument()

    await userEvent.click(newLayerDataButton as HTMLElement)
    await userEvent.selectOptions(newLayerLocationColumn, 'State')
    await userEvent.selectOptions(newLayerSizeColumn, 'Cases')
    await userEvent.click(newLayerVisualButton)
    const sizeLegend = await waitForPresence('ul[aria-label="Bubble size legend items"]', canvasElement)

    expect(sizeLegend).toHaveTextContent('10,700')
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

export const Bubble_Layer_Static_Color_Developer_Input: Story = {
  args: {
    config: editConfigKeys(usBubble, [
      { path: ['version'], value: '4.26.7' },
      { path: ['bubble', 'layers', 0, 'columns', 'primary', 'name'], value: '' },
      { path: ['bubble', 'layers', 0, 'columns', 'size', 'name'], value: 'Cases' }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    window.history.replaceState({}, '', `${window.location.pathname}?isCoveDeveloper=true`)
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
    const visualButton = Array.from(layerItem?.querySelectorAll('.accordion__button') ?? []).find(
      button => button.textContent?.trim() === 'Visual'
    ) as HTMLElement | undefined

    await userEvent.click(visualButton as HTMLElement)
    const visualItem = visualButton?.closest('[data-accordion-component="AccordionItem"], .accordion__item')
    const visualCanvas = within(visualItem as HTMLElement)
    const customColorInput = visualCanvas.getByLabelText('Custom Bubble Color')

    expect(visualCanvas.getByText(/^Bubble Color$/)).toBeInTheDocument()
    expect(customColorInput).toBeInTheDocument()

    await userEvent.clear(customColorInput)
    await userEvent.type(customColorInput, '#')

    expect(canvasElement).not.toHaveTextContent('Something went wrong with component UsaMap.')
    window.history.replaceState({}, '', window.location.pathname)
  }
}
