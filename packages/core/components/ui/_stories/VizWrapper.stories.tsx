import type { Meta, StoryObj } from '@storybook/react'

import VizWrapper from '../VizWrapper'

const meta: Meta = {
  title: 'Components/Molecules/VizWrapper',
  component: VizWrapper
}

type Story = StoryObj

export const Primary: Story = {
  args: {
    config: {
      title: 'My Title',
      visual: {
        border: true,
        borderColorTheme: true,
        accent: true,
        background: false,
        hideBackgroundColor: false
      }
    },
    children: <h1>Notice: Missing wrapper styles in storybook.</h1>
  }
}

export default meta
