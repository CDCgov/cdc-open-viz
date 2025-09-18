import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Card from '../Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Atoms/Card',
  component: Card
}

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  render: args => (
    <>
      <Card {...args}>Card Content Here</Card>
    </>
  )
}

export default meta
