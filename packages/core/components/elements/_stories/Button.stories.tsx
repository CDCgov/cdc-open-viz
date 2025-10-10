import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../Button'

const classNames = ['', 'cove-button--success', 'cove-button--warn', 'cove-button--muted']

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: args => (
    <>
      <Button {...args} className={classNames[0]}>
        Button
      </Button>
      <Button {...args} className={classNames[1]}>
        Success
      </Button>
    </>
  )
}

export default meta
