import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import NestedDropdown from '../NestedDropdown'
import nestedDropdownStory from './_mocks/nested-dropdown.json'
import { useState } from 'react'
import { getNestedOptions } from '../Filters/helpers/getNestedOptions'
import type { NestedOptions } from '../NestedDropdown/nestedDropdownHelpers'
import '../Filters/filters.scss'

const nestedDropdownOptions = getNestedOptions(nestedDropdownStory as any)
const proportionalSizingOptions: NestedOptions = [
  [
    ['Typography'],
    [
      ['wide', 'WWWWWWWWWW'],
      ['long', 'iiiiiiiiiiiiiiiiiiiiiiiiiiii']
    ]
  ]
]
const wrappingOptions: NestedOptions = [
  [['Conditions'], [['long', 'A long condition label that should move this filter onto its own flex row']]]
]

const NestedDropdownStory = args => {
  const [selection, setSelection] = useState({
    activeGroup: args.activeGroup,
    activeSubGroup: args.activeSubGroup
  })

  return (
    <NestedDropdown
      {...args}
      handleSelectedItems={([group, subGroup]) => {
        setSelection({ activeGroup: group, activeSubGroup: subGroup })
      }}
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

export const StableRenderedWidth: Story = {
  args: {
    activeGroup: 'Typography',
    activeSubGroup: 'long',
    displaySubgroupingOnly: true,
    filterIndex: 0,
    handleSelectedItems: () => {},
    listLabel: 'Rendered width',
    options: proportionalSizingOptions
  },
  render: args => (
    <div style={{ maxWidth: '60rem' }}>
      <NestedDropdownStory {...args} />
      <button type='button'>Finish searching</button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = getSearchInput(canvasElement) as HTMLInputElement
    const inputContainer = input.closest('.nested-dropdown-input-container') as HTMLElement
    const wideCandidate = inputContainer.querySelector('[data-sizing-candidate="WWWWWWWWWW"]') as HTMLElement
    const longCandidate = inputContainer.querySelector(
      '[data-sizing-candidate="iiiiiiiiiiiiiiiiiiiiiiiiiiii"]'
    ) as HTMLElement

    await waitFor(() => expect(inputContainer).toHaveAttribute('data-sizing-text', 'WWWWWWWWWW'))
    expect(wideCandidate.getBoundingClientRect().width).toBeGreaterThan(longCandidate.getBoundingClientRect().width)

    const stableWidth = inputContainer.getBoundingClientRect().width
    const longSearch = 'A search phrase that is deliberately wider than every available option'

    await userEvent.click(input)
    await userEvent.type(input, longSearch)
    await waitFor(() => expect(inputContainer.getBoundingClientRect().width).toBeGreaterThan(stableWidth))
    const expandedWidth = inputContainer.getBoundingClientRect().width

    await userEvent.click(canvas.getByRole('button', { name: 'Finish searching' }))
    await waitFor(() => expect(inputContainer.getBoundingClientRect().width).toBeLessThan(expandedWidth))
    expect(inputContainer).toHaveAttribute('data-sizing-text', 'WWWWWWWWWW')
    expect(inputContainer).toHaveAttribute('data-transient-sizing-text', 'iiiiiiiiiiiiiiiiiiiiiiiiiiii')
  }
}

export const FlexRowWrapping: Story = {
  args: {
    activeGroup: 'Conditions',
    activeSubGroup: 'long',
    displaySubgroupingOnly: true,
    filterIndex: 1,
    handleSelectedItems: () => {},
    listLabel: 'Condition',
    options: wrappingOptions
  },
  render: args => (
    <div className='filters-section__wrapper' style={{ maxWidth: '34rem' }}>
      <div className='single-filters'>
        <label htmlFor='topic-filter'>Topic</label>
        <select id='topic-filter' style={{ padding: '0.5rem', width: '14rem' }}>
          <option>Adult</option>
        </select>
      </div>
      <div className='single-filters'>
        <label htmlFor='nested-dropdown-1'>Condition</label>
        <NestedDropdownStory {...args} />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const select = canvasElement.querySelector('select') as HTMLSelectElement
    const nestedDropdown = canvasElement.querySelector('.nested-dropdown') as HTMLElement

    await waitFor(() => expect(nestedDropdown.getBoundingClientRect().width).toBeGreaterThan(200))
    expect(nestedDropdown.getBoundingClientRect().top).toBeGreaterThan(select.getBoundingClientRect().top)
  }
}

export default meta
