import type { Meta, StoryObj } from '@storybook/react'

import Title from '../../Layout/components/Title'

const meta: Meta = {
  title: 'Components/Atoms/Title',
  component: Title
}

type Story = StoryObj

export const Primary: Story = {
  args: {
    title: 'My Title',
    superTitle: 'My super title',
    isDashboard: false,
    classes: ['theme-blue']
  }
}

export default meta
