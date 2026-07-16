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
    [['brucella', 'Brucellosis', 'Bacterial disease']]
  ]
]

const getSearchInput = () => screen.getAllByLabelText('searchInput').find(el => el.tagName === 'INPUT') as HTMLInputElement
const getInputContainer = () => getSearchInput().closest('.nested-dropdown-input-container')

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
    expect(getInputContainer()).toHaveAttribute('data-sizing-text', '2023 - Q2')
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

  it('marks group headers as sticky inside the dropdown menu', () => {
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

    fireEvent.focus(getSearchInput())

    const groupHeader = screen.getByRole('treeitem', { name: '2023' }).querySelector('.nested-dropdown-group-header')

    expect(groupHeader).toHaveClass('nested-dropdown-group-header--sticky')
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
    expect(getInputContainer()).toHaveAttribute('data-sizing-text', 'Q2')
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
    expect(getInputContainer()).toHaveAttribute('data-sizing-text', 'Animal-borne diseases - Brucellosis')
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

    expect(screen.getByRole('treeitem', { name: 'Animal-borne diseases Brucellosis Bacterial disease' })).toHaveAttribute(
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

  it('renders subgroup description text when provided', () => {
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
    expect(screen.getByText('Bacterial disease')).toBeInTheDocument()
  })

  it('matches subgroup options by subgroup description text', () => {
    const optionsWithDescriptions: NestedOptions = [
      [['animal', 'Animal-borne diseases'], [['brucella', 'Brucellosis', 'Bacterial disease']]],
      [['food', 'Food-borne diseases'], [['salmonella', 'Salmonellosis', 'Food poisoning']]]
    ]

    render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Disease'
        options={optionsWithDescriptions}
      />
    )

    const input = getSearchInput()
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'poisoning' } })

    expect(screen.getByText('Food-borne diseases')).toBeInTheDocument()
    expect(screen.getByText('Salmonellosis')).toBeInTheDocument()
    expect(screen.queryByText('Animal-borne diseases')).not.toBeInTheDocument()
  })

  it('highlights matches in group labels', () => {
    const { container } = render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Disease'
        options={labeledOptions}
      />
    )

    const input = getSearchInput()
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'animal' } })

    const groupLabel = container.querySelector('.nested-dropdown-group-label')
    const highlight = groupLabel?.querySelector('.nested-dropdown-option-highlight')

    expect(highlight).toHaveTextContent('Animal')
  })

  it('highlights matches in subgroup labels', () => {
    const { container } = render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Disease'
        options={labeledOptions}
      />
    )

    const input = getSearchInput()
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'brucellosis' } })

    const subgroupText = container.querySelector('.nested-dropdown-subgroup-text')
    const highlight = subgroupText?.querySelector('.nested-dropdown-option-highlight')

    expect(highlight).toHaveTextContent('Brucellosis')
  })

  it('highlights matches in subgroup descriptions', () => {
    const { container } = render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Disease'
        options={labeledOptions}
      />
    )

    const input = getSearchInput()
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'bacterial' } })

    const description = container.querySelector('.nested-dropdown-subgroup-description')
    const highlight = description?.querySelector('.nested-dropdown-option-highlight')

    expect(highlight).toHaveTextContent('Bacterial')
  })

  it('selects described subgroup options with the keyboard', () => {
    const handleSelectedItems = vi.fn()
    const optionsWithDescriptions: NestedOptions = [
      [
        ['animal', 'Animal-borne diseases'],
        [
          ['brucella', 'Brucellosis', 'Bacterial disease'],
          ['rabies', 'Rabies', 'Viral disease']
        ]
      ]
    ]

    render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        filterIndex={0}
        handleSelectedItems={handleSelectedItems}
        listLabel='Disease'
        options={optionsWithDescriptions}
      />
    )

    const input = getSearchInput()

    input.focus()
    fireEvent.keyUp(input, { key: 'ArrowDown' })
    fireEvent.keyUp(screen.getByRole('treeitem', { name: 'Animal-borne diseases' }), { key: 'ArrowDown' })

    const subgroup = screen.getByRole('treeitem', { name: 'Animal-borne diseases Brucellosis Bacterial disease' })
    expect(subgroup).toHaveFocus()

    fireEvent.keyUp(subgroup, { key: 'ArrowDown' })
    const nextSubgroup = screen.getByRole('treeitem', { name: 'Animal-borne diseases Rabies Viral disease' })
    expect(nextSubgroup).toHaveFocus()

    fireEvent.keyUp(nextSubgroup, { key: 'ArrowUp' })
    expect(subgroup).toHaveFocus()

    fireEvent.keyUp(subgroup, { key: 'Enter' })

    expect(handleSelectedItems).toHaveBeenCalledWith(['animal', 'brucella'])
  })

  it('selects a subgroup when clicking its visible label text', () => {
    const handleSelectedItems = vi.fn()

    render(
      <NestedDropdown
        activeGroup='animal'
        activeSubGroup='brucella'
        filterIndex={0}
        handleSelectedItems={handleSelectedItems}
        listLabel='Disease'
        options={labeledOptions}
      />
    )

    fireEvent.focus(getSearchInput())
    fireEvent.click(screen.getByText('Brucellosis'))

    expect(handleSelectedItems).toHaveBeenCalledWith(['animal', 'brucella'])
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
    expect(getInputContainer()).toHaveAttribute('data-sizing-text', '- Select -')
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
    expect(getInputContainer()).toHaveAttribute('data-sizing-text', 'Search for a disease')
  })

  it('sizes the closed control from the longest group and subgroup display text before selection', () => {
    const sizingOptions: NestedOptions = [
      [['Short'], [['One']]],
      [['Longer Group Label'], [['Longest subgroup display value']]]
    ]

    render(
      <NestedDropdown
        activeGroup=''
        activeSubGroup=''
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Condition'
        options={sizingOptions}
        placeholder='- Select One -'
      />
    )

    expect(getSearchInput()).toHaveValue('')
    expect(getSearchInput()).toHaveAttribute('placeholder', '- Select One -')
    expect(getInputContainer()).toHaveAttribute(
      'data-sizing-text',
      'Longer Group Label - Longest subgroup display value'
    )
  })

  it('sizes subgroup-only displays from the longest subgroup display text even when a shorter option is selected', () => {
    const sizingOptions: NestedOptions = [
      [
        ['Indicator'],
        [
          ['systems', 'Number of Systems'],
          ['cleaned', 'Adults aged 18+ who had their teeth cleaned in the past year']
        ]
      ]
    ]

    render(
      <NestedDropdown
        activeGroup='Indicator'
        activeSubGroup='systems'
        displaySubgroupingOnly
        filterIndex={0}
        handleSelectedItems={vi.fn()}
        listLabel='Indicator'
        options={sizingOptions}
      />
    )

    expect(getSearchInput()).toHaveValue('Number of Systems')
    expect(getInputContainer()).toHaveAttribute(
      'data-sizing-text',
      'Adults aged 18+ who had their teeth cleaned in the past year'
    )
  })

  it('uses the current search text for dynamic sizing while searching', () => {
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
    expect(getInputContainer()).toHaveAttribute('data-sizing-text', '2023 - Q2')

    fireEvent.change(input, { target: { value: 'Quarter 3 with a much longer search term' } })

    expect(input).toHaveValue('Quarter 3 with a much longer search term')
    expect(getInputContainer()).toHaveAttribute('data-sizing-text', 'Quarter 3 with a much longer search term')
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

    expect(getInputContainer()).toHaveAttribute('data-sizing-text', flag ? 'Q3' : '2023 - Q2')
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

    const subgroup = screen.getByRole('treeitem', { name: '2023 Q1' })
    expect(subgroup).toHaveFocus()

    fireEvent.keyUp(subgroup, { key: 'Enter' })

    expect(handleSelectedItems).toHaveBeenCalledWith(['2023', 'Q1'])
    expect(input).toHaveFocus()
    expect(screen.getByRole('tree')).toHaveClass('hide')
  })

  it('scrolls focused subgroup items below the sticky group header during keyboard navigation', () => {
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

    const tree = screen.getByRole('tree')
    const group = screen.getByRole('treeitem', { name: '2023' })
    const header = group.querySelector('.nested-dropdown-group-header--sticky') as HTMLElement
    const subgroup = screen.getByRole('treeitem', { name: '2023 Q1' })

    tree.scrollTop = 100
    tree.getBoundingClientRect = () => ({ top: 0, bottom: 100 }) as DOMRect
    header.getBoundingClientRect = () => ({ height: 30 }) as DOMRect
    subgroup.getBoundingClientRect = () => ({ top: 10, bottom: 40 }) as DOMRect

    fireEvent.keyUp(group, { key: 'ArrowDown' })

    expect(subgroup).toHaveFocus()
    expect(tree.scrollTop).toBe(80)
  })

  it('prevents native arrow scrolling before moving focus to a subgroup item', () => {
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

    const group = screen.getByRole('treeitem', { name: '2023' })

    expect(fireEvent.keyDown(group, { key: 'ArrowDown' })).toBe(false)
  })

  it('does not scroll a tall focused group item by its subgroup content height', () => {
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

    const tree = screen.getByRole('tree')
    const group = screen.getByRole('treeitem', { name: '2023' })
    const header = group.querySelector('.nested-dropdown-group-header--sticky') as HTMLElement

    tree.scrollTop = 0
    tree.getBoundingClientRect = () => ({ top: 0, bottom: 100 }) as DOMRect
    group.getBoundingClientRect = () => ({ top: 0, bottom: 900 }) as DOMRect
    header.getBoundingClientRect = () => ({ top: 0, bottom: 30, height: 30 }) as DOMRect

    fireEvent.keyUp(input, { key: 'ArrowDown' })

    expect(group).toHaveFocus()
    expect(tree.scrollTop).toBe(0)
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
