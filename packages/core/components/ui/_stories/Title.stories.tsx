import type { Meta, StoryObj } from '@storybook/react'
import Title from '../Title'

const meta: Meta = {
  title: 'Components/Atoms/Title',
  component: Title,
  decorators: [
    Story => (
      <div className='cdc-open-viz-module'>
        <Story />
      </div>
    )
  ]
}

type Story = StoryObj

export const Primary: Story = {
  args: {
    title: 'My Title',
    superTitle: 'My super title',
    isDashboard: false
  },
  argTypes: {
    theme: {
      control: 'select', // or 'inline-radio' for horizontal layout
      options: [
        'theme-blue',
        'theme-purple',
        'theme-brown',
        'theme-teal',
        'theme-pink',
        'theme-orange',
        'theme-slate',
        'theme-indigo',
        'theme-cyan',
        'theme-green',
        'theme-amber',
        'theme-grayscale'
      ],
      defaultValue: 'theme-blue'
    }
  }
}

export default meta
