import type { Meta, StoryObj } from '@storybook/react'
import Title from '../Title'
import { CDC_THEME_COLORS } from '../../../helpers/constants'

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
    isDashboard: false,
    theme: CDC_THEME_COLORS[0]
  },
  argTypes: {
    theme: {
      control: 'select', // or 'inline-radio' for horizontal layout
      options: CDC_THEME_COLORS
    }
  }
}

export default meta
