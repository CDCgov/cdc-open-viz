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
const criddShortDiseaseLabel = 'Tuberculosis'
const criddLongDiseaseLabel =
  'Paratyphoid fever (Salmonella enterica serotypes Paratyphi A, B (tartrate negative) and C (S. Paratyphi) infection)'
const criddDiseaseOptions = [
  [
    ['Enteric Diseases'],
    [
      ['Campylobacteriosis'],
      [criddLongDiseaseLabel, undefined, 'A systemic illness caused by Salmonella enterica serotypes Paratyphi A, B and C']
    ]
  ],
  [
    ['Respiratory diseases'],
    [[criddShortDiseaseLabel, undefined, 'Bacterial disease typically spread through the air often affecting the lungs']]
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
    listLabel: 'Condition',
    options: criddDiseaseOptions,
    placeholder: 'Type to search for a disease'
  },
  render: args => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.5rem', maxWidth: '72rem', alignItems: 'end' }}>
      <label style={{ display: 'grid', flex: '0 0 auto', gap: '0.35rem', fontWeight: 700 }}>
        Topic
        <select style={{ minWidth: '14rem', padding: '0.5rem' }}>
          <option>Adult</option>
        </select>
      </label>
      <div style={{ display: 'grid', flex: '0 0 auto', gap: '0.35rem', fontWeight: 700, maxWidth: '100%' }}>
        <label htmlFor='nested-dropdown-0' style={{ margin: 0 }}>
          Condition
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
    expect(input).toHaveAttribute('placeholder', 'Type to search for a disease')
    expect(inputContainer).toHaveAttribute('data-sizing-text', criddLongDiseaseLabel)
    expect(getComputedStyle(inputContainer as Element).minWidth).toBe('200px')
    expect(getComputedStyle(nestedDropdown).maxWidth).toBe('100%')
    expect(nestedDropdown.getBoundingClientRect().top).toBeGreaterThan(select.getBoundingClientRect().top)

    await userEvent.click(input as Element)
    await userEvent.click(
      within(canvasElement).getByRole('treeitem', {
        name: `Respiratory diseases ${criddShortDiseaseLabel} Bacterial disease typically spread through the air often affecting the lungs`
      })
    )

    await waitFor(() => expect(getSearchInput(canvasElement)).toHaveValue(criddShortDiseaseLabel))
    expect(getInputContainer(canvasElement)).toHaveAttribute('data-sizing-text', criddLongDiseaseLabel)

    await userEvent.click(getSearchInput(canvasElement) as Element)
    await userEvent.click(
      within(canvasElement).getByRole('treeitem', {
        name: `Enteric Diseases ${criddLongDiseaseLabel} A systemic illness caused by Salmonella enterica serotypes Paratyphi A, B and C`
      })
    )

    await waitFor(() => expect(getSearchInput(canvasElement)).toHaveValue(criddLongDiseaseLabel))
    const selectedLongInput = getSearchInput(canvasElement) as HTMLInputElement
    expect(selectedLongInput.scrollWidth).toBeLessThanOrEqual(selectedLongInput.clientWidth + 1)
  }
}

export const MobileOpenMenuWidthClamp: Story = {
  args: {
    activeGroup: '',
    activeSubGroup: '',
    displaySubgroupingOnly: true,
    filterIndex: 0,
    handleSelectedItems: () => {},
    listLabel: 'Condition',
    options: criddDiseaseOptions,
    placeholder: 'Type to search for a disease'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: args => (
    <div style={{ maxWidth: '22rem', padding: '0.5rem' }}>
      <NestedDropdownStory {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const input = getSearchInput(canvasElement)

    await userEvent.click(input as Element)

    const menu = within(canvasElement).getByRole('tree')
    const menuRect = menu.getBoundingClientRect()

    expect(menu).not.toHaveClass('hide')
    expect(parseFloat(getComputedStyle(menu).maxWidth)).toBeCloseTo(window.innerWidth - 36, 0)
    expect(menuRect.right).toBeLessThanOrEqual(window.innerWidth)
    expect(menuRect.width).toBeLessThanOrEqual(window.innerWidth)
  }
}

export default meta
