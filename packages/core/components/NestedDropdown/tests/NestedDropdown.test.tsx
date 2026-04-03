import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import NestedDropdown from '../NestedDropdown'
import { NestedOptions } from '../nestedDropdownHelpers'

vi.mock('../../ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

const options: NestedOptions = [
  [['2023'], [['Q1'], ['Q2']]],
  [['2024'], [['Q3'], ['Q4']]]
]

const getSearchInput = () => screen.getAllByLabelText('searchInput').find(el => el.tagName === 'INPUT') as HTMLInputElement

describe('NestedDropdown', () => {
  it('shows the default closed display as group and subgroup', () => {
    render(
      <NestedDropdown
        activeGroup='2023'
        activeSubGroup='Q2'
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Year and Quarter'
        options={options}
      />
    )

    expect(getSearchInput()).toHaveValue('2023 - Q2')
  })

  it('shows only the subgroup in the closed display when enabled', () => {
    render(
      <NestedDropdown
        activeGroup='2023'
        activeSubGroup='Q2'
        displaySubgroupingOnly
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Year and Quarter'
        options={options}
      />
    )

    expect(getSearchInput()).toHaveValue('Q2')
  })

  it('preserves the empty state when no subgroup is selected', () => {
    render(
      <NestedDropdown
        activeGroup=''
        activeSubGroup=''
        displaySubgroupingOnly
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Year and Quarter'
        options={options}
      />
    )

    const input = getSearchInput()
    expect(input).toHaveValue('')
    expect(input).toHaveAttribute('placeholder', '- Select -')
  })

  it.each([false, true])('keeps search and selection behavior unchanged when displaySubgroupingOnly=%s', flag => {
    const handleSelectedItems = vi.fn()

    render(
      <NestedDropdown
        activeGroup='2023'
        activeSubGroup='Q2'
        displaySubgroupingOnly={flag}
        filterIndex={0}
        handleSelectedItems={handleSelectedItems}
        listLabel='Year and Quarter'
        options={options}
      />
    )

    const input = getSearchInput()
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'Q3' } })

    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.queryByText('2023')).not.toBeInTheDocument()
    expect(screen.getByText('Q3')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Q3'))

    expect(handleSelectedItems).toHaveBeenCalledWith(['2024', 'Q3'])
  })
})
