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
    config: annotationConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Text Annotations')

    const getLabelState = () => {
      const label = canvasElement.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
      const wrapper = label?.parentElement as HTMLElement
      return {
        horizontalAnchor: label?.dataset.horizontalAnchor,
        width: wrapper?.style.width
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
    await performAndAssert(
      'Pointer resizing gives the annotation an explicit pixel width',
      getLabelState,
      async () => {
        await userEvent.pointer([
          { keys: '[MouseLeft>]', target: resizeHandle, coords: { clientX: 300, clientY: 100 } },
          { target: resizeHandle, coords: { clientX: 200, clientY: 100 } },
          { keys: '[/MouseLeft]', target: resizeHandle, coords: { clientX: 200, clientY: 100 } }
        ])
      },
      (before, after) => before.width === 'fit-content' && after.width !== before.width && after.width.endsWith('px')
    )

    expect(getLabelState().horizontalAnchor).toBe('end')
  }
}
