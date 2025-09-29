import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMarkupInclude from '../CdcMarkupInclude'
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
export const image_with_text: Story = {
  args: {
    config: imageWithText,
    isEditor: false
  }
}

export default meta
