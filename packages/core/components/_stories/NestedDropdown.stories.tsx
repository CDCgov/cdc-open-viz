import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import NestedDropdown from '../NestedDropdown'
import nestedDropdownStory from './_mocks/nested-dropdown.json'
import { useState } from 'react'
import { getNestedOptions } from '../Filters/helpers/getNestedOptions'

const nestedDropdownOptions = getNestedOptions(nestedDropdownStory as any)
const locationNestedDropdownOptions = [
  [['National'], [['All States and DC']]],
  [
    ['States'],
    [['Alabama'], ['Alaska'], ['Arizona'], ['California'], ['District of Columbia'], ['Florida'], ['Georgia']]
  ]
]
const longNestedDropdownOptions = [
  [
    ['Respiratory Diseases With A Long Display Group Label'],
    [['Long subgroup label that should visibly widen the closed nested dropdown']]
  ],
  [['Short Group'], [['Short subgroup']]]
]

const NestedDropdownStory = args => {
  const [selection, setSelection] = useState({
    activeGroup: args.activeGroup,
    activeSubGroup: args.activeSubGroup
  })

  return (
    <NestedDropdown
      handleSelectedItems={([group, subGroup]) => {
        setSelection({ activeGroup: group, activeSubGroup: subGroup })
      }}
      {...args}
      activeGroup={selection.activeGroup}
      activeSubGroup={selection.activeSubGroup}
    />
  )
}

const getSearchInput = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('input')).find(input => input.classList.contains('search-input'))

const meta: Meta<typeof NestedDropdown> = {
  title: 'Components/Molecules/NestedDropdown',
  component: NestedDropdown,
  render: args => <NestedDropdownStory {...args} />
}

type Story = StoryObj<typeof NestedDropdown>

export const DefaultDisplay: Story = {
  args: {
    activeGroup: 'Age Group',
    activeSubGroup: '50-64 years',
    displaySubgroupingOnly: false,
    filterIndex: 0,
    handleSelectedItems: () => {},
    listLabel: 'Age',
    options: nestedDropdownOptions
  },
  play: async ({ canvasElement }) => {
    expect(getSearchInput(canvasElement)).toHaveValue('Age Group - 50-64 years')
  }
}

export const SubgroupOnlyDisplay: Story = {
  args: {
    activeGroup: 'Age Group',
    activeSubGroup: '50-64 years',
    displaySubgroupingOnly: true,
    filterIndex: 0,
    handleSelectedItems: () => {},
    listLabel: 'Age',
    options: nestedDropdownOptions
  },
  play: async ({ canvasElement }) => {
    expect(getSearchInput(canvasElement)).toHaveValue('50-64 years')
  }
}

export const LocationDisplayDynamicWidth: Story = {
  args: {
    activeGroup: 'States',
    activeSubGroup: 'District of Columbia',
    displaySubgroupingOnly: false,
    filterIndex: 0,
    handleSelectedItems: () => {},
    listLabel: 'Location',
    options: locationNestedDropdownOptions
  },
  play: async ({ canvasElement }) => {
    const input = getSearchInput(canvasElement)
    const inputContainer = input?.closest('.nested-dropdown-input-container')

    expect(input).toHaveValue('States - District of Columbia')
    expect(inputContainer).toHaveAttribute('data-sizing-text', 'States - District of Columbia')
  }
}

export const LongDisplayDynamicWidth: Story = {
  args: {
    activeGroup: 'Respiratory Diseases With A Long Display Group Label',
    activeSubGroup: 'Long subgroup label that should visibly widen the closed nested dropdown',
    displaySubgroupingOnly: false,
    filterIndex: 0,
    handleSelectedItems: () => {},
    listLabel: 'Condition',
    options: longNestedDropdownOptions
  },
  play: async ({ canvasElement }) => {
    const input = getSearchInput(canvasElement)
    const inputContainer = input?.closest('.nested-dropdown-input-container')

    expect(input).toHaveValue(
      'Respiratory Diseases With A Long Display Group Label - Long subgroup label that should visibly widen the closed nested dropdown'
    )
    expect(inputContainer).toHaveAttribute(
      'data-sizing-text',
      'Respiratory Diseases With A Long Display Group Label - Long subgroup label that should visibly widen the closed nested dropdown'
    )
    expect(getComputedStyle(input?.closest('.nested-dropdown') as Element).maxWidth).toMatch(
      /^min\(100%, (30rem|540px)\)$/
    )
  }
}

export default meta
