import { Meta, StoryObj } from '@storybook/react-vite'
import NestedDropdown from '../NestedDropdown'
import nestedDropdownStory from './_mocks/nested-dropdown.json'
import { useState } from 'react'

const meta: Meta<typeof NestedDropdown> = {
  title: 'Components/Molecules/NestedDropdown',
  component: NestedDropdown
}

interface TemplateProps {
  listLabel: string
}

const Template = (args: TemplateProps) => {
  const [currentStoryFilter, setCurrentStoryFilter] = useState({
    ...nestedDropdownStory
  })

  // Convert mock data structure to NestedOptions format
  const options = (nestedDropdownStory.values || []).map(groupValue => {
    const subValues = nestedDropdownStory.subGrouping?.valuesLookup?.[groupValue]?.values || []
    return [
      [groupValue, groupValue], // [value, text] for group
      subValues.map(subValue => [subValue, subValue]) // [[value, text], ...] for subgroups
    ]
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
      activeGroup={currentStoryFilter.active}
      activeSubGroup={currentStoryFilter.subGrouping?.active}
      options={options}
      filterIndex={0}
    />
  )
}

type Story = StoryObj<typeof NestedDropdown>

export const Primary: Story = Template.bind({})

export default meta
