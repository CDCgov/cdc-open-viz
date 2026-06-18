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

const labeledOptions: NestedOptions = [
  [
    ['animal', 'Animal-borne diseases'],
    [['brucella', 'Brucellosis']]
  ]
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

  it('uses stable closed-control and menu wrappers for width styling', () => {
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

    const input = getSearchInput()

    fireEvent.focus(input)

    expect(input.closest('.nested-dropdown-input-container')).toBeInTheDocument()
    expect(screen.getByRole('tree')).toHaveClass('main-nested-dropdown-container-0')
    expect(
      screen.getByRole('treeitem', { name: '2023' }).querySelector('.nested-dropdown-group-label')
    ).toHaveTextContent('2023')
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

  it('uses option display text in the closed display when labels are supplied', () => {
    render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Disease'
        options={labeledOptions}
      />
    )

    expect(getSearchInput()).toHaveValue('Animal-borne diseases - Brucellosis')
  })

  it('marks selected subgroup when the group display label differs from the stored value', () => {
    render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Disease'
        options={labeledOptions}
      />
    )

    fireEvent.focus(getSearchInput())

    expect(screen.getByRole('treeitem', { name: 'Animal-borne diseasesbrucella' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })

  it('uses subgroup display text in subgroup-only mode when labels are supplied', () => {
    render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        displaySubgroupingOnly
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Disease'
        options={labeledOptions}
      />
    )

    expect(getSearchInput()).toHaveValue('Brucellosis')
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

  it('uses supplied placeholder text when no subgroup is selected', () => {
    render(
      <NestedDropdown
        activeGroup=''
        activeSubGroup=''
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Year and Quarter'
        options={options}
        placeholder='Search for a disease'
      />
    )

    const input = getSearchInput()
    expect(input).toHaveValue('')
    expect(input).toHaveAttribute('placeholder', 'Search for a disease')
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

  it.each([false, true])('restores the closed display text on escape when displaySubgroupingOnly=%s', flag => {
    render(
      <NestedDropdown
        activeGroup='2023'
        activeSubGroup='Q2'
        displaySubgroupingOnly={flag}
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Year and Quarter'
        options={options}
      />
    )

    const input = getSearchInput()
    const expectedClosedValue = flag ? 'Q2' : '2023 - Q2'

    fireEvent.focus(input)
    expect(input).toHaveValue('')

    fireEvent.keyUp(input, { key: 'ArrowDown' })
    fireEvent.keyUp(screen.getByRole('treeitem', { name: '2023' }), { key: 'Escape' })

    expect(input).toHaveValue(expectedClosedValue)
    expect(input).toHaveFocus()
    expect(screen.getByRole('tree')).toHaveClass('hide')
  })

  it('keeps the dropdown open when focus moves from the list back to the input', () => {
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

    const input = getSearchInput()

    fireEvent.focus(input)
    fireEvent.keyUp(input, { key: 'ArrowDown' })

    const firstGroup = screen.getByRole('treeitem', { name: '2023' })
    expect(firstGroup).toHaveFocus()

    fireEvent.keyUp(firstGroup, { key: 'ArrowUp' })

    expect(input).toHaveFocus()
    expect(screen.getByRole('tree')).not.toHaveClass('hide')
  })

  it('keeps focus on the input when selecting a subgroup with the keyboard', () => {
    const handleSelectedItems = vi.fn()

    render(
      <NestedDropdown
        activeGroup='2023'
        activeSubGroup='Q2'
        filterIndex={0}
        handleSelectedItems={handleSelectedItems}
        listLabel='Year and Quarter'
        options={options}
      />
    )

    const input = getSearchInput()

    input.focus()
    fireEvent.keyUp(input, { key: 'ArrowDown' })
    fireEvent.keyUp(screen.getByRole('treeitem', { name: '2023' }), { key: 'ArrowDown' })

    const subgroup = screen.getByRole('treeitem', { name: '2023Q1' })
    expect(subgroup).toHaveFocus()

    fireEvent.keyUp(subgroup, { key: 'Enter' })

    expect(handleSelectedItems).toHaveBeenCalledWith(['2023', 'Q1'])
    expect(input).toHaveFocus()
    expect(screen.getByRole('tree')).toHaveClass('hide')
  })

  it('reopens and clears the input when clicked while already focused', () => {
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

    const input = getSearchInput()

    fireEvent.focus(input)
    fireEvent.keyUp(input, { key: 'ArrowDown' })
    fireEvent.keyUp(screen.getByRole('treeitem', { name: '2023' }), { key: 'Escape' })

    expect(input).toHaveFocus()
    expect(input).toHaveValue('2023 - Q2')
    expect(screen.getByRole('tree')).toHaveClass('hide')

    fireEvent.click(input)

    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
    expect(screen.getByRole('tree')).not.toHaveClass('hide')
  })
})
