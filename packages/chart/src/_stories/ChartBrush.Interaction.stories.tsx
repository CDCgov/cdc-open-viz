import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import Chart from '../CdcChartComponent'
import brushEnabledConfig from './_mock/brush_enabled.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/BrushSlider/Interactions',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

type BrushSelectionState = {
  x: number
  width: number
  overlayWidth: number
  startRatio: number
  widthRatio: number
  endRatio: number
}

const getBrushSelection = (canvasElement: HTMLElement) => {
  const selection = canvasElement.querySelector('.visx-brush-selection') as SVGRectElement | null
  expect(selection).toBeTruthy()
  return selection!
}

const getBrushOverlay = (canvasElement: HTMLElement) => {
  const overlay = canvasElement.querySelector('.visx-brush-overlay') as SVGRectElement | null
  expect(overlay).toBeTruthy()
  return overlay!
}

const readFiniteAttribute = (element: Element, attribute: string) => {
  const rawValue = element.getAttribute(attribute)
  expect(rawValue).not.toBeNull()

  const value = Number(rawValue)
  expect(Number.isFinite(value)).toBe(true)
  return value
}

const readBrushSelectionState = (canvasElement: HTMLElement): BrushSelectionState => {
  const selection = getBrushSelection(canvasElement)
  const overlay = getBrushOverlay(canvasElement)
  const x = readFiniteAttribute(selection, 'x')
  const width = readFiniteAttribute(selection, 'width')
  const overlayX = readFiniteAttribute(overlay, 'x')
  const overlayWidth = readFiniteAttribute(overlay, 'width')

  expect(width).toBeGreaterThan(0)
  expect(overlayWidth).toBeGreaterThan(0)

  return {
    x,
    width,
    overlayWidth,
    startRatio: (x - overlayX) / overlayWidth,
    widthRatio: width / overlayWidth,
    endRatio: (x - overlayX + width) / overlayWidth
  }
}

const expectBrushSelectionStable = (canvasElement: HTMLElement, initial: BrushSelectionState) => {
  const current = readBrushSelectionState(canvasElement)
  const ratioTolerance = 0.5 / Math.max(initial.overlayWidth, current.overlayWidth)

  // Normalize responsive re-layout while allowing no more than half a pixel of proportional drift.
  expect(Math.abs(current.startRatio - initial.startRatio)).toBeLessThanOrEqual(ratioTolerance)
  expect(Math.abs(current.widthRatio - initial.widthRatio)).toBeLessThanOrEqual(ratioTolerance)
  expect(Math.abs(current.endRatio - initial.endRatio)).toBeLessThanOrEqual(ratioTolerance)
}

const getBrushPoint = (canvasElement: HTMLElement, x: number) => {
  const overlay = getBrushOverlay(canvasElement)
  const rect = overlay.getBoundingClientRect()
  return {
    target: overlay,
    clientX: rect.left + x,
    clientY: rect.top + rect.height / 2
  }
}

const dispatchPointer = (target: Element, type: string, clientX: number, clientY: number, buttons = 1) => {
  target.dispatchEvent(
    new PointerEvent(type, {
      bubbles: true,
      cancelable: true,
      clientX,
      clientY,
      buttons,
      pointerId: 1,
      pointerType: 'mouse'
    })
  )
}

const settleInteraction = async () => {
  await new Promise<void>(resolve => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  })
}

export const OutsideSelectionInteractionsBlocked: Story = {
  args: {
    config: brushEnabledConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Outside-selection clicks and drags are blocked before they reach the visx brush overlay.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      expect(canvasElement.querySelector('.visx-brush-selection')).toBeTruthy()
      expect(canvasElement.querySelector('.visx-brush-overlay')).toBeTruthy()
    })

    const initial = readBrushSelectionState(canvasElement)
    const selectionX = initial.x
    const selectionWidth = initial.width

    const outsideLeft = getBrushPoint(canvasElement, Math.max(1, selectionX - 40))
    dispatchPointer(outsideLeft.target, 'pointerdown', outsideLeft.clientX, outsideLeft.clientY)
    dispatchPointer(outsideLeft.target, 'pointerup', outsideLeft.clientX, outsideLeft.clientY, 0)
    outsideLeft.target.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        clientX: outsideLeft.clientX,
        clientY: outsideLeft.clientY
      })
    )
    await settleInteraction()
    expectBrushSelectionStable(canvasElement, initial)

    const current = readBrushSelectionState(canvasElement)
    const outsideRight = getBrushPoint(canvasElement, current.x + current.width + 40)
    dispatchPointer(outsideRight.target, 'pointerdown', outsideRight.clientX, outsideRight.clientY)
    dispatchPointer(outsideRight.target, 'pointermove', outsideRight.clientX + 80, outsideRight.clientY)
    dispatchPointer(outsideRight.target, 'pointerup', outsideRight.clientX + 80, outsideRight.clientY, 0)
    await settleInteraction()
    expectBrushSelectionStable(canvasElement, initial)
  }
}
