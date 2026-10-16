import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { openAccordion, performAndAssert, waitForEditor } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import annotationConfig from './_mock/annotation_category_mock.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Annotations',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const AnnotationWidthAndPlacement: Story = {
  name: 'Width Resize and Placement',
  args: {
    config: {
      ...annotationConfig,
      annotations: annotationConfig.annotations.map((annotation, index) =>
        index === 0
          ? { ...annotation, anchorMode: 'fixed', x: 50, y: 50, dx: 100, dy: -60, savedDimensions: undefined }
          : annotation
      )
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Text Annotations')
    expect(canvas.queryByText('Reset to automatic width')).not.toBeInTheDocument()

    const label = canvasElement.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const wrapper = label?.parentElement as HTMLElement
    const getLabelState = () => {
      const rect = label?.getBoundingClientRect()
      const svgRect = label.closest('svg')?.getBoundingClientRect()
      return {
        horizontalAnchor: label?.dataset.horizontalAnchor,
        width: wrapper?.style.width,
        rect: {
          left: rect.left - svgRect.left,
          top: rect.top - svgRect.top,
          right: rect.right - svgRect.left,
          width: rect.width,
          height: rect.height
        }
      }
    }

    const placement = canvasElement.querySelector('select[name="labelPosition"]') as HTMLSelectElement
    expect(placement).toBeTruthy()
    await performAndAssert(
      'Explicit left placement anchors the label on its end edge',
      getLabelState,
      async () => userEvent.selectOptions(placement, 'left'),
      (before, after) => before.horizontalAnchor !== after.horizontalAnchor && after.horizontalAnchor === 'end'
    )

    const resizeHandle = canvas.getByTestId('annotation-resize-handle')
    const widthBeforeResize = getLabelState().width
    await userEvent.pointer({ keys: '[MouseLeft>]', target: resizeHandle, coords: { clientX: 300, clientY: 100 } })
    await userEvent.pointer({ target: resizeHandle, coords: { clientX: 200, clientY: 100 } })
    const previewState = getLabelState()
    const previewWidth = Number.parseFloat(previewState.width)
    await userEvent.pointer({ keys: '[/MouseLeft]', target: resizeHandle, coords: { clientX: 200, clientY: 100 } })
    const committedState = getLabelState()
    const committedWidth = Number.parseFloat(committedState.width)

    expect(widthBeforeResize).toBe('fit-content')
    expect(committedState.width).toMatch(/px$/)
    expect(Math.abs(committedWidth - previewWidth)).toBeLessThanOrEqual(1)
    expect(Math.abs(committedState.rect.right - previewState.rect.right)).toBeLessThanOrEqual(1)

    expect(getLabelState().horizontalAnchor).toBe('end')
  }
}
