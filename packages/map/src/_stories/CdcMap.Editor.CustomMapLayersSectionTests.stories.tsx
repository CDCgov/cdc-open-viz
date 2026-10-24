import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'

import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'

import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Editor Tests',
  component: CdcMap,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcMap>

const localTopology = {
  type: 'Topology',
  objects: {
    testLayer: {
      type: 'GeometryCollection',
      geometries: [
        {
          type: 'Polygon',
          properties: { name: 'Local Test Layer' },
          arcs: [[0]]
        }
      ]
    }
  },
  arcs: [
    [
      [-100, 35],
      [10, 0],
      [0, 5],
      [-10, 0],
      [0, -5]
    ]
  ]
}

const localTopologyUrl = `data:application/json,${encodeURIComponent(JSON.stringify(localTopology))}`
const updatedTopology = {
  ...localTopology,
  objects: {
    testLayer: {
      type: 'GeometryCollection',
      geometries: [
        {
          type: 'Polygon',
          properties: { name: 'URLUpdated' },
          arcs: [[0]]
        }
      ]
    },
    updatedLayer: {
      type: 'GeometryCollection',
      geometries: [
        {
          type: 'Polygon',
          properties: { name: 'NamespaceUpdated' },
          arcs: [[0]]
        }
      ]
    }
  }
}
const updatedTopologyUrl = `data:application/json,${encodeURIComponent(JSON.stringify(updatedTopology))}`
const localLayer = {
  name: 'Local Layer',
  url: localTopologyUrl,
  namespace: 'testLayer',
  fill: '#006778',
  fillOpacity: 0.75,
  stroke: '#111111',
  strokeWidth: 2,
  tooltip: 'Local tooltip'
}
const layerToKeep = {
  ...localLayer,
  name: 'Layer To Keep',
  fill: '#008000',
  tooltip: 'Keep this layer'
}

const configWithLayers = (layers: (typeof localLayer)[]) => {
  const config = cloneConfig(usaStateGradientConfig) as any
  config.map.layers = layers
  return config
}

const getNestedLayerButtons = (section: HTMLElement) =>
  Array.from(section.querySelectorAll<HTMLButtonElement>('.map-layers-list--title .accordion__button'))

export const ExistingLayerAuthoringAndEmptyState: Story = {
  args: {
    isEditor: true,
    config: configWithLayers([localLayer])
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Custom Map Layers')

    const sectionButton = canvas.getByRole('button', { name: /^Custom Map Layers$/i })
    const section = sectionButton.closest('[data-accordion-component="AccordionItem"], .accordion__item') as HTMLElement
    expect(section).toBeTruthy()

    const layerPath = (await waitForPresence('.custom-map-layer path', canvasElement)) as SVGPathElement
    expect(layerPath).toHaveAttribute('fill', '#006778')
    expect(layerPath).toHaveAttribute('fill-opacity', '0.75')
    expect(layerPath).toHaveAttribute('data-tooltip-html', 'Local tooltip')

    const initialLayerButton = getNestedLayerButtons(section)[0]
    expect(initialLayerButton).toHaveTextContent('Layer 1: Local Layer')
    await userEvent.click(initialLayerButton)

    const layerItem = initialLayerButton.closest('.map-layers-list') as HTMLElement
    const layerEditor = within(layerItem)
    const removeLayer = await layerEditor.findByRole('button', { name: 'Remove Layer' })
    const nameInput = layerItem.querySelector<HTMLInputElement>('input[name="layerName"]')!
    const fileInput = layerItem.querySelector<HTMLInputElement>('input[name="layerFilename"]')!
    const namespaceInput = layerItem.querySelector<HTMLInputElement>('input[name="layerNamespace"]')!
    const fillInput = layerItem.querySelector<HTMLInputElement>('input[name="layerFill"][type="text"]')!
    const opacityInput = layerItem.querySelector<HTMLInputElement>('input[name="layerFill"][type="number"]')!
    const strokeInput = layerItem.querySelector<HTMLInputElement>('input[name="layerStroke"]')!
    const strokeWidthInput = layerItem.querySelector<HTMLInputElement>('input[name="layerStrokeWidth"]')!
    const tooltipInput = layerItem.querySelector<HTMLTextAreaElement>('textarea[name="layerTooltip"]')!
    const getLayerPath = () => canvasElement.querySelector<SVGPathElement>('.custom-map-layer path')

    expect(nameInput).toBeTruthy()
    expect(fileInput).toHaveValue(localTopologyUrl)
    expect(namespaceInput).toHaveValue('testLayer')
    expect(fillInput).toBeTruthy()
    expect(opacityInput).toHaveValue(75)
    expect(strokeInput).toHaveValue('#111111')
    expect(strokeWidthInput).toHaveValue(2)
    expect(tooltipInput).toHaveValue('Local tooltip')

    await performAndAssert(
      'Layer name → Update nested accordion title',
      () => getNestedLayerButtons(section)[0]?.textContent || '',
      async () => {
        await userEvent.clear(nameInput)
        await userEvent.type(nameInput, 'Renamed Layer')
      },
      (_before, after) => after.includes('Layer 1: Renamed Layer')
    )

    await performAndAssert(
      'Layer file URL → Render the replacement local TopoJSON',
      () => ({
        value: fileInput.value,
        hasUpdatedFeature: Boolean(canvasElement.querySelector('.custom-map-layer--URLUpdated path'))
      }),
      async () => {
        await userEvent.clear(fileInput)
        await userEvent.paste(updatedTopologyUrl)
      },
      (before, after) => before.value !== after.value && after.value === updatedTopologyUrl && after.hasUpdatedFeature
    )

    await performAndAssert(
      'Layer namespace → Render the selected TopoJSON object',
      () => ({
        value: namespaceInput.value,
        hasUpdatedFeature: Boolean(canvasElement.querySelector('.custom-map-layer--NamespaceUpdated path'))
      }),
      async () => {
        await userEvent.clear(namespaceInput)
        await userEvent.type(namespaceInput, 'updatedLayer')
      },
      (before, after) => before.value !== after.value && after.value === 'updatedLayer' && after.hasUpdatedFeature
    )

    await performAndAssert(
      'Layer fill → Update rendered custom layer',
      () => getLayerPath()?.getAttribute('fill'),
      async () => {
        await userEvent.clear(fillInput)
        await userEvent.type(fillInput, '#ff00ff')
      },
      (before, after) => before !== after && after === '#ff00ff'
    )

    await performAndAssert(
      'Layer opacity → Persist percent as rendered decimal',
      () => getLayerPath()?.getAttribute('fill-opacity'),
      async () => {
        await userEvent.clear(opacityInput)
        await userEvent.type(opacityInput, '40')
      },
      (before, after) => before !== after && after === '0.4'
    )

    await performAndAssert(
      'Layer stroke → Update rendered custom layer',
      () => getLayerPath()?.getAttribute('stroke'),
      async () => {
        await userEvent.clear(strokeInput)
        await userEvent.type(strokeInput, '#123456')
      },
      (before, after) => before !== after && after === '#123456'
    )

    await performAndAssert(
      'Layer stroke width → Update rendered custom layer',
      () => getLayerPath()?.getAttribute('stroke-width'),
      async () => {
        await userEvent.clear(strokeWidthInput)
        await userEvent.type(strokeWidthInput, '4')
      },
      (before, after) => before !== after && after === '4'
    )

    await performAndAssert(
      'Layer tooltip → Update rendered tooltip content',
      () => getLayerPath()?.getAttribute('data-tooltip-html'),
      async () => {
        await userEvent.clear(tooltipInput)
        await userEvent.type(tooltipInput, 'Updated local tooltip')
      },
      (before, after) => before !== after && after === 'Updated local tooltip'
    )

    await performAndAssert(
      'Remove final layer → Restore empty state',
      () => ({
        layerCount: getNestedLayerButtons(section).length,
        hasEmptyMessage: section.textContent?.includes('There are currently no layers.') || false
      }),
      async () => userEvent.click(removeLayer),
      (_before, after) => after.layerCount === 0 && after.hasEmptyMessage
    )
  }
}

export const AddLayerFromEmptyState: Story = {
  args: {
    isEditor: true,
    config: configWithLayers([])
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Custom Map Layers')

    const sectionButton = canvas.getByRole('button', { name: /^Custom Map Layers$/i })
    const section = sectionButton.closest('[data-accordion-component="AccordionItem"], .accordion__item') as HTMLElement
    const addLayerButton = within(section).getByRole('button', { name: 'Add Map Layer' })
    expect(section).toHaveTextContent('There are currently no layers.')

    await performAndAssert(
      'Add layer from empty state → Insert placeholder at index zero',
      () => ({
        labels: getNestedLayerButtons(section).map(button => button.textContent?.trim()),
        hasEmptyMessage: section.textContent?.includes('There are currently no layers.') || false
      }),
      async () => userEvent.click(addLayerButton),
      (before, after) =>
        before.labels.length === 0 &&
        before.hasEmptyMessage &&
        after.labels.length === 1 &&
        after.labels[0] === 'Layer 1: New Custom Layer' &&
        !after.hasEmptyMessage
    )

    const placeholderButton = getNestedLayerButtons(section)[0]
    await userEvent.click(placeholderButton)
    const placeholderItem = placeholderButton.closest('.map-layers-list') as HTMLElement
    await within(placeholderItem).findByRole('button', { name: 'Remove Layer' })

    const nameInput = placeholderItem.querySelector<HTMLInputElement>('input[name="layerName"]')!
    const fileInput = placeholderItem.querySelector<HTMLInputElement>('input[name="layerFilename"]')!
    const namespaceInput = placeholderItem.querySelector<HTMLInputElement>('input[name="layerNamespace"]')!
    const fillInput = placeholderItem.querySelector<HTMLInputElement>('input[name="layerFill"][type="text"]')!
    const opacityInput = placeholderItem.querySelector<HTMLInputElement>('input[name="layerFill"][type="number"]')!
    const strokeInput = placeholderItem.querySelector<HTMLInputElement>('input[name="layerStroke"]')!
    const strokeWidthInput = placeholderItem.querySelector<HTMLInputElement>('input[name="layerStrokeWidth"]')!
    const tooltipInput = placeholderItem.querySelector<HTMLTextAreaElement>('textarea[name="layerTooltip"]')!

    expect(nameInput).toBeVisible()
    expect(nameInput).toHaveValue('New Custom Layer')
    expect(fileInput).toBeVisible()
    expect(fileInput).toHaveValue('')
    expect(namespaceInput).toBeVisible()
    expect(fillInput).toBeVisible()
    expect(opacityInput).toBeVisible()
    expect(strokeInput).toBeVisible()
    expect(strokeWidthInput).toBeVisible()
    expect(tooltipInput).toBeVisible()
  }
}

export const AddLayerAtFront: Story = {
  args: {
    isEditor: true,
    config: configWithLayers([localLayer])
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Custom Map Layers')

    const sectionButton = canvas.getByRole('button', { name: /^Custom Map Layers$/i })
    const section = sectionButton.closest('[data-accordion-component="AccordionItem"], .accordion__item') as HTMLElement
    const addLayerButton = within(section).getByRole('button', { name: 'Add Map Layer' })

    await performAndAssert(
      'Add layer with an existing layer → Insert placeholder at the front',
      () => getNestedLayerButtons(section).map(button => button.textContent?.trim()),
      async () => userEvent.click(addLayerButton),
      (before, after) =>
        before.length === 1 &&
        before[0] === 'Layer 1: Local Layer' &&
        after.length === 2 &&
        after[0] === 'Layer 1: New Custom Layer' &&
        after[1] === 'Layer 2: Local Layer'
    )
  }
}

export const RemoveLayerByIndex: Story = {
  args: {
    isEditor: true,
    config: configWithLayers([localLayer, layerToKeep])
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await assertVisualizationRendered(canvasElement)
    await openAccordion(canvas, 'Custom Map Layers')
    await waitForPresence('.custom-map-layer + .custom-map-layer path', canvasElement)

    const sectionButton = canvas.getByRole('button', { name: /^Custom Map Layers$/i })
    const section = sectionButton.closest('[data-accordion-component="AccordionItem"], .accordion__item') as HTMLElement
    const firstLayerButton = getNestedLayerButtons(section)[0]
    await userEvent.click(firstLayerButton)

    const firstLayerItem = firstLayerButton.closest('.map-layers-list') as HTMLElement
    const removeFirstLayer = await within(firstLayerItem).findByRole('button', { name: 'Remove Layer' })

    await performAndAssert(
      'Remove layer → Remove only the selected index',
      () => ({
        labels: getNestedLayerButtons(section).map(button => button.textContent?.trim()),
        fills: Array.from(canvasElement.querySelectorAll<SVGPathElement>('.custom-map-layer path')).map(path =>
          path.getAttribute('fill')
        )
      }),
      async () => userEvent.click(removeFirstLayer),
      (before, after) =>
        before.labels.length === 2 &&
        after.labels.length === 1 &&
        after.labels[0] === 'Layer 1: Layer To Keep' &&
        after.fills.length === 1 &&
        after.fills[0] === '#008000'
    )
  }
}
