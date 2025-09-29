import { a } from 'vitest/dist/suite-IbNSsUWN'
import { BlurStrokeText } from '../BlurStrokeText'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof BlurStrokeText> = {
  title: 'Components/Atoms/BlurStrokeText',
  component: BlurStrokeText
}

export default meta

type Story = StoryObj<typeof BlurStrokeText>

export const Default: Story = {
  render: args => (
    <svg width='300' height='100' style={{ backgroundColor: '#464646' }}>
      <BlurStrokeText {...args}>A feathered stroke option</BlurStrokeText>
    </svg>
  ),
  args: {
    fontSize: 15,
    y: 50,
    x: 50,
    blurRadius: 1,
    disableStroke: false
  }
}
