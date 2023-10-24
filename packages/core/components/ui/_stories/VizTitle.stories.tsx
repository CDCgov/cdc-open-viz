import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { VizTitle } from './../VizTitle/VizTitle'

const meta: Meta = {
  title: 'Components/Atoms/VizTitle',
  component: VizTitle
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
