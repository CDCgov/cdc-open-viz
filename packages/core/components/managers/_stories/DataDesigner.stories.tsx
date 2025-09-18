import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import DataDesigner from '../DataDesigner'

const meta: Meta<typeof DataDesigner> = {
  title: 'Components/Organisms/DataDesigner',
  component: DataDesigner
}

type Story = StoryObj<typeof DataDesigner>

export const Primary: Story = {
  args: {
    configureData: {
      dataDescription: 'some description'
    }
  },
  render: args => (
    <>
      <DataDesigner {...args}>DataDesigner Content Here</DataDesigner>
    </>
  )
}

export default meta
