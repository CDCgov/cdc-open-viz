import { Meta, StoryObj } from '@storybook/react-vite'
import Footnotes from '../Footnotes'

const meta: Meta<typeof Footnotes> = {
  title: 'Components/Organisms/Footnotes',
  component: Footnotes
}

export default meta

type Story = StoryObj<typeof Footnotes>

export const Primary: Story = {
  args: {
    footnotes: [{ symbol: '*', text: 'This is a footnote' }, { symbol: '†', text: 'This is another footnote' }, { text: 'This is a third footnote' }]
  }
}
