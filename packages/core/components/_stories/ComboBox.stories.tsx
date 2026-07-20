import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import ComboBox from '../ComboBox'
import { useState } from 'react'

const longConditionLabel =
  'Paratyphoid fever (Salmonella enterica serotypes Paratyphi A, B (tartrate negative) and C (S. Paratyphi) infection)'

const options = [
  {
    value: 'campylobacteriosis',
    label: 'Campylobacteriosis',
    description: 'A diarrheal disease caused by the Campylobacter bacteria'
  },
  {
    value: 'paratyphoid',
    label: longConditionLabel,
    description: 'A systemic illness caused by Salmonella enterica serotypes Paratyphi A, B and C'
  },
  {
    value: 'tuberculosis',
    label: 'Tuberculosis',
    description: 'Bacterial disease typically spread through the air often affecting the lungs'
  }
]

const ComboBoxStory = args => {
  const [selected, setSelected] = useState(args.selected || '')

  return (
    <ComboBox
      {...args}
      selected={selected}
      updateField={(_section, _subsection, _fieldName, value) => setSelected(value)}
    />
  )
}

const meta: Meta<typeof ComboBox> = {
  title: 'Components/Molecules/ComboBox',
  component: ComboBox,
  render: args => <ComboBoxStory {...args} />
}

type Story = StoryObj<typeof ComboBox>

export const MobileOpenMenuWidthClamp: Story = {
  args: {
    fieldName: 'condition',
    label: 'Condition',
    options,
    placeholder: 'Type to search for a disease'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: args => (
    <div className='cove-visualization' style={{ maxWidth: '22rem', padding: '0.5rem' }}>
      <ComboBoxStory {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('combobox')

    await userEvent.click(input)

    const menu = within(canvasElement).getByRole('listbox')
    const menuRect = menu.getBoundingClientRect()

    expect(parseFloat(getComputedStyle(menu).maxWidth)).toBeCloseTo(window.innerWidth - 36, 0)
    expect(menuRect.right).toBeLessThanOrEqual(window.innerWidth)
    expect(menuRect.width).toBeLessThanOrEqual(window.innerWidth)
  }
}

export default meta
