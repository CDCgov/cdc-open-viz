import { Meta, StoryObj } from '@storybook/react-vite'

import MultiSelect from '../MultiSelect'
import { userEvent, within } from 'storybook/test'

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/Molecules/MultiSelect',
  component: MultiSelect
}

type Story = StoryObj<typeof MultiSelect>

export const Primary: Story = {
  args: {
    options: [
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
      { value: '4', label: 'This is a really long option' }
    ],
    selected: ['1', '2'],
    limit: 3,
    label: 'MultiSelect',
    updateField: (section, subsection, fieldName, value) => {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const questionMark = canvas.getByRole('dialog')
    await userEvent.hover(questionMark)
  }
}

export default meta
