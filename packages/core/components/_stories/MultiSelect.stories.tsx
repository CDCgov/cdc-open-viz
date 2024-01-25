import { Meta, StoryObj } from '@storybook/react'

import MultiSelect from '../MultiSelect'

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
      { value: '3', label: 'Three' }
    ],
    label: 'MultiSelect',
    updateField: (section, subsection, fieldName, value) => {}
  }
}

export default meta
