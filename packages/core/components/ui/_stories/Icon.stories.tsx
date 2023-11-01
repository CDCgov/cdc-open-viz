import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Icon, { ICON_TYPES } from '../Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Atoms/Icon',
  component: Icon,
  parameters: {
    display: ICON_TYPES
  }
}

type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {
    display: 'question'
  }
}

export default meta
