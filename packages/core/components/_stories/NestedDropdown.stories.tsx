import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
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
const oralHealthIndicatorShortLabel = 'Number of Systems'
const oralHealthIndicatorLabel =
  'Adults aged 18+ who had their teeth cleaned in the past year among adults with natural teeth'
const oralHealthIndicatorOptions = [
  [
    ['Indicator'],
    [[oralHealthIndicatorShortLabel], [oralHealthIndicatorLabel]]
  ]
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
const getInputContainer = (canvasElement: HTMLElement) =>
  getSearchInput(canvasElement)?.closest('.nested-dropdown-input-container')

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
    expect(getComputedStyle(input?.closest('.nested-dropdown') as Element).maxWidth).toBe('100%')
  }
}

export const FlexRowWrapDynamicWidth: Story = {
  args: {
    activeGroup: '',
    activeSubGroup: '',
    displaySubgroupingOnly: true,
    filterIndex: 0,
    handleSelectedItems: () => {},
    listLabel: 'Indicator',
    options: oralHealthIndicatorOptions,
    placeholder: '- Select One -'
  },
  render: args => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.5rem', maxWidth: '46rem', alignItems: 'end' }}>
      <label style={{ display: 'grid', flex: '0 0 auto', gap: '0.35rem', fontWeight: 700 }}>
        Topic
        <select style={{ minWidth: '14rem', padding: '0.5rem' }}>
          <option>Adult</option>
        </select>
      </label>
      <div style={{ display: 'grid', flex: '0 0 auto', gap: '0.35rem', fontWeight: 700, maxWidth: '100%' }}>
        <label htmlFor='nested-dropdown-0' style={{ margin: 0 }}>
          Indicator
        </label>
        <NestedDropdownStory {...args} />
      </div>
      <button type='button' style={{ flex: '0 0 auto', padding: '0.5rem 1rem' }}>
        Run Report
      </button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const select = canvasElement.querySelector('select') as HTMLSelectElement
    const input = getSearchInput(canvasElement)
    const inputContainer = getInputContainer(canvasElement)
    const nestedDropdown = input?.closest('.nested-dropdown') as HTMLElement

    expect(input).toHaveValue('')
    expect(input).toHaveAttribute('placeholder', '- Select One -')
    expect(inputContainer).toHaveAttribute('data-sizing-text', oralHealthIndicatorLabel)
    expect(getComputedStyle(nestedDropdown).maxWidth).toBe('100%')
    expect(nestedDropdown.getBoundingClientRect().top).toBeGreaterThan(select.getBoundingClientRect().top)

    await userEvent.click(input as Element)
    await userEvent.click(within(canvasElement).getByRole('treeitem', { name: `Indicator ${oralHealthIndicatorShortLabel}` }))

    await waitFor(() => expect(getSearchInput(canvasElement)).toHaveValue(oralHealthIndicatorShortLabel))
    expect(getInputContainer(canvasElement)).toHaveAttribute('data-sizing-text', oralHealthIndicatorLabel)

    await userEvent.click(getSearchInput(canvasElement) as Element)
    await userEvent.click(within(canvasElement).getByRole('treeitem', { name: `Indicator ${oralHealthIndicatorLabel}` }))

    await waitFor(() => expect(getSearchInput(canvasElement)).toHaveValue(oralHealthIndicatorLabel))
    const selectedLongInput = getSearchInput(canvasElement) as HTMLInputElement
    expect(selectedLongInput.scrollWidth).toBeLessThanOrEqual(selectedLongInput.clientWidth + 1)
  }
}

export default meta
