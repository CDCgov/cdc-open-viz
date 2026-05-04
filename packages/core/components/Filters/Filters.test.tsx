import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Filters from './Filters'

vi.mock('../../helpers/metrics/helpers', () => ({
  publishAnalyticsEvent: vi.fn()
}))

const baseConfig = {
  type: 'chart',
  data: [
    { state: 'Alabama', status: 'Current' },
    { state: 'Alaska', status: 'Prior' }
  ],
  filters: [],
  filterBehavior: 'Filter Change',
  general: {},
  theme: 'theme-blue'
} as any

const createFilter = (filterStyle = 'dropdown', note?: string) =>
  ({
    columnName: filterStyle === 'tab-simple' ? 'status' : 'state',
    values: [],
    showDropdown: true,
    note,
    id: filterStyle === 'tab-simple' ? 2 : 1,
    parents: [],
    active: filterStyle === 'tab-simple' ? 'Current' : 'Alabama',
    filterStyle,
    label: filterStyle === 'tab-simple' ? 'Status' : 'State',
    order: 'asc',
    type: 'url'
  } as any)

const renderFilters = filters =>
  render(<Filters config={{ ...baseConfig, filters }} setFilters={vi.fn()} dimensions={[1200, 800]} />)

describe('Filters filter notes', () => {
  it('renders parsed HTML notes under the label and before dropdown controls', () => {
    const { container } = renderFilters([createFilter('dropdown', 'Choose a <strong>state</strong>.')])

    const label = screen.getByText('State')
    const note = container.querySelector('.filters-section__note-text')
    const select = screen.getByLabelText('Filter by State')

    expect(note).toBeInTheDocument()
    expect(note).toHaveTextContent('Choose a state.')
    expect(note?.querySelector('strong')).toHaveTextContent('state')
    expect(label.compareDocumentPosition(note as Element) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(note?.compareDocumentPosition(select) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('renders notes for tab-simple filters above the tab control', () => {
    const { container } = renderFilters([createFilter('tab-simple', 'Pick <em>status</em>.')])

    const note = container.querySelector('.filters-section__note-text')
    const tab = screen.getByRole('button', { name: 'Current' })

    expect(note).toHaveTextContent('Pick status.')
    expect(note?.querySelector('em')).toHaveTextContent('status')
    expect(note?.compareDocumentPosition(tab) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('does not render note markup for empty notes', () => {
    const { container } = renderFilters([createFilter('dropdown', '   ')])

    expect(container.querySelector('.filters-section__note-text')).not.toBeInTheDocument()
  })

  it('marks the wrapper as single-filter layout when only one filter is visible', () => {
    const hiddenFilter = { ...createFilter('dropdown'), id: 3, showDropdown: false }
    const { container } = renderFilters([createFilter('dropdown', 'Choose a state.'), hiddenFilter])

    const wrapper = container.querySelector('.filters-section__wrapper')

    expect(wrapper).toHaveClass('filters-section__wrapper--single')
    expect(wrapper).not.toHaveClass('filters-section__wrapper--multiple')
  })

  it('marks the wrapper as multiple-filter layout when more than one filter is visible', () => {
    const statusFilter = {
      ...createFilter('dropdown', 'Choose a status.'),
      id: 3,
      columnName: 'status',
      label: 'Status',
      active: 'Current'
    }
    const { container } = renderFilters([createFilter('dropdown', 'Choose a state.'), statusFilter])

    const wrapper = container.querySelector('.filters-section__wrapper')

    expect(wrapper).toHaveClass('filters-section__wrapper--multiple')
    expect(wrapper).not.toHaveClass('filters-section__wrapper--single')
  })
})
