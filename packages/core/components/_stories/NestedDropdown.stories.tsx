import { Meta, StoryObj } from '@storybook/react-vite'
import NestedDropdown from '../NestedDropdown'
import nestedDropdownStory from './_mocks/nested-dropdown.json'
import { useState } from 'react'

const meta: Meta<typeof NestedDropdown> = {
  title: 'Components/Molecules/NestedDropdown',
  component: NestedDropdown
}

const Template = args => {
  const [currentStoryFilter, setCurrentStoryFilter] = useState({
    ...nestedDropdownStory
  })
  return (
    <NestedDropdown
      listLabel='Age'
      handleSelectedItems={([group, subGroup]) => {
        setCurrentStoryFilter({
          ...currentStoryFilter,
          active: group,
          subGrouping: { ...currentStoryFilter.subGrouping, active: subGroup }
        })
      }}
      currentFilter={currentStoryFilter}
    />
  )
}

type Story = StoryObj<typeof NestedDropdown>

export const Primary: Story = Template.bind({})

export default meta
