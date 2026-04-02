import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import CdcMarkupInclude from '../CdcMarkupInclude'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import primary from './_mock/primary.json'
import noConditions from './_mock/no-conditions.json'
import withConditions from './_mock/with-conditions.json'
import buttonAndText from './_mock/button-and-text.json'
import iconNoText from './_mock/icon-no-text.json'
import imageWithText from './_mock/image-with-text.json'

const meta: Meta<typeof CdcMarkupInclude> = {
  title: 'Components/Pages/Markup Include',
  component: CdcMarkupInclude
}

type Story = StoryObj<typeof CdcMarkupInclude>

export const Primary: Story = {
  args: {
    config: primary,
    isEditor: false
  }
}

export const No_Conditions: Story = {
  args: {
    config: noConditions,
    isEditor: false
  }
}

export const With_conditions: Story = {
  args: {
    config: withConditions,
    isEditor: false
  }
}

export const Button_and_text: Story = {
  args: {
    config: buttonAndText,
    isEditor: false
  }
}

export const icon_no_text: Story = {
  args: {
    config: iconNoText,
    isEditor: false
  }
}

export const Icon_Sizing: Story = {
  args: {
    config: {
      ...primary,
      contentEditor: {
        ...primary.contentEditor,
        showHeader: true,
        title: 'SVG icon sizing',
        useInlineHTML: true,
        inlineHTML: `
          <p class="icon-sizing-inline">Rate <span class="icon-sizing-inline-target">{{link-external}}</span> increased</p>
          <div
            class="icon-sizing-parent-target"
            data-cove-svg-size="parent-height"
            style="height: 200px; background: #f8d7da; display: inline-flex; align-items: center;"
          >
            {{link-external}}
          </div>
        `
      },
      enableMarkupVariables: true,
      markupVariables: [
        {
          sourceType: 'icon',
          name: 'link-external',
          tag: '{{link-external}}',
          iconId: 'link-external',
          conditions: []
        }
      ]
    } as any,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const inlineIcon = canvasElement.querySelector('.icon-sizing-inline-target .cove-inline-svg') as HTMLElement | null
    const parentIcon = canvasElement.querySelector('.icon-sizing-parent-target .cove-inline-svg') as HTMLElement | null
    const parentContainer = canvasElement.querySelector('.icon-sizing-parent-target') as HTMLElement | null

    expect(inlineIcon).toBeTruthy()
    expect(parentIcon).toBeTruthy()
    expect(parentContainer).toBeTruthy()

    const inlineHeight = inlineIcon!.getBoundingClientRect().height
    const parentHeight = parentIcon!.getBoundingClientRect().height
    const containerHeight = parentContainer!.getBoundingClientRect().height

    expect(inlineHeight).toBeGreaterThan(0)
    expect(inlineHeight).toBeLessThan(50)
    expect(parentHeight).toBeGreaterThan(inlineHeight * 3)
    expect(parentHeight).toBeGreaterThan(180)
    expect(Math.abs(parentHeight - containerHeight)).toBeLessThan(2)
  }
}

export const image_with_text: Story = {
  args: {
    config: imageWithText,
    isEditor: false
  }
}

export const TP5_Test: Story = {
  args: {
    config: {
      ...primary,
      contentEditor: {
        ...primary.contentEditor,
        style: 'tp5',
        title: 'TP5 Markup Include Test',
        useInlineHTML: true,
        inlineHTML:
          '<p>This is a TP5 style markup include test story.</p><p>Clear the title in the editor to verify TP5 title hide behavior.</p>'
      },
      visual: {
        ...primary.visual,
        border: true,
        whiteBackground: true
      }
    },
    isEditor: true
  }
}

export default meta
