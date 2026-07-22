import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import DashboardFilters from '../DashboardFilters'
import '../../../scss/main.scss'

const longConditionLabel = 'Paratyphoid fever (Salmonella enterica serotypes Paratyphi A, B (tartrate negative) and C)'

const meta: Meta<typeof DashboardFilters> = {
  title: 'Components/Atoms/Inputs/DashboardFilters',
  component: DashboardFilters,
  decorators: [
    Story => (
      <div className='cove-visualization type-dashboard'>
        <Story />
      </div>
    )
  ]
}

type Story = StoryObj<typeof DashboardFilters>

export const Example_1: Story = {
  args: {
    filters: [
      {
        type: 'datafilter',
        key: 'label here',
        values: ['1', '2', '3', '4'],
        columnName: 'label',
        showDropdown: true,
        id: 0,
        parents: []
      } as any,
      {
        type: 'datafilter',
        key: 'something',
        values: ['A', 'B', 'C'],
        columnName: 'something',
        showDropdown: true,
        id: 1,
        parents: []
      } as any
    ],
    show: [0, 1],
    apiFilterDropdowns: {},
    handleOnChange: () => {}
  }
}

export const WithClearButton: Story = {
  args: {
    filters: [
      {
        type: 'datafilter',
        key: 'Category',
        values: ['Option 1', 'Option 2', 'Option 3'],
        active: 'Option 1',
        columnName: 'category',
        showDropdown: true,
        id: 0,
        parents: []
      } as any,
      {
        type: 'datafilter',
        key: 'Status',
        values: ['Active', 'Inactive', 'Pending'],
        active: 'Active',
        columnName: 'status',
        showDropdown: true,
        id: 1,
        parents: []
      } as any
    ],
    show: [0, 1],
    apiFilterDropdowns: {},
    handleOnChange: () => {},
    showSubmit: true,
    applyFilters: () => {},
    handleReset: () => {}
  }
}

export const NestedDropdownWithNoteWidthCap: Story = {
  args: {
    filters: [
      {
        type: 'datafilter',
        key: 'Condition',
        filterStyle: 'nested-dropdown',
        columnName: 'category',
        showDropdown: true,
        active: '',
        resetLabel: 'Type to search for a disease',
        displaySubgroupingOnly: true,
        values: ['Enteric diseases'],
        orderedValues: ['Enteric diseases'],
        subGrouping: {
          active: '',
          columnName: 'condition',
          valuesLookup: {
            'Enteric diseases': {
              values: ['Campylobacteriosis', longConditionLabel],
              orderedValues: ['Campylobacteriosis', longConditionLabel]
            }
          }
        },
        note: 'You can search for a disease name or for keywords.'
      } as any,
      {
        type: 'datafilter',
        key: 'Topic',
        values: ['Adult'],
        active: 'Adult',
        columnName: 'topic',
        showDropdown: true,
        id: 1,
        parents: []
      } as any
    ],
    show: [0, 1],
    apiFilterDropdowns: {},
    handleOnChange: () => {}
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: args => {
    const [conditionFilter, topicFilter] = args.filters

    return (
      <div style={{ display: 'grid', gap: '2rem' }}>
        <section data-testid='single-filter-example'>
          <h3>Single visible filter: 30rem maximum</h3>
          <p>The note and nested dropdown share the wider single-filter limit.</p>
          <div
            className='cdc-callout cdc-callout--dashboard-filters'
            style={{ border: '1px dashed #b1b8c0', padding: '1rem' }}
          >
            <DashboardFilters {...args} filters={[conditionFilter]} show={[0]} />
          </div>
        </section>

        <section data-testid='multiple-filter-example'>
          <h3>Multiple visible filters: 18rem maximum</h3>
          <p>The same nested dropdown becomes narrower when it shares the row with another filter.</p>
          <div
            className='cdc-callout cdc-callout--dashboard-filters'
            style={{ border: '1px dashed #b1b8c0', padding: '1rem' }}
          >
            <DashboardFilters {...args} filters={[topicFilter, conditionFilter]} show={[0, 1]} />
          </div>
        </section>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const singleExample = canvas.getByTestId('single-filter-example')
    const multipleExample = canvas.getByTestId('multiple-filter-example')
    const singleForm = singleExample.querySelector('.dashboard-filters__form') as HTMLElement
    const multipleForm = multipleExample.querySelector('.dashboard-filters__form') as HTMLElement
    const singleField = singleExample.querySelector('.dashboard-filters__field:has(.nested-dropdown)') as HTMLElement
    const multipleField = multipleExample.querySelector(
      '.dashboard-filters__field:has(.nested-dropdown)'
    ) as HTMLElement
    const singleNote = singleField.querySelector('.filters-section__note-text') as HTMLElement
    const multipleNote = multipleField.querySelector('.filters-section__note-text') as HTMLElement
    const singleDropdown = singleField.querySelector('.nested-dropdown') as HTMLElement
    const multipleDropdown = multipleField.querySelector('.nested-dropdown') as HTMLElement
    const singleInputContainer = singleField.querySelector('.nested-dropdown-input-container') as HTMLElement
    const multipleInputContainer = multipleField.querySelector('.nested-dropdown-input-container') as HTMLElement
    const singleInput = singleField.querySelector('.nested-dropdown input') as HTMLInputElement

    expect(singleForm).toHaveClass('filters-section__wrapper--single')
    expect(multipleForm).toHaveClass('filters-section__wrapper--multiple')
    await waitFor(() => {
      expect(singleInputContainer).toHaveAttribute('data-sizing-text', longConditionLabel)
      expect(multipleInputContainer).toHaveAttribute('data-sizing-text', longConditionLabel)
    })
    expect(getComputedStyle(singleField).maxWidth).toBe(getComputedStyle(singleNote).maxWidth)
    expect(getComputedStyle(multipleField).maxWidth).toBe(getComputedStyle(multipleNote).maxWidth)
    expect(singleField.getBoundingClientRect().width).toBeLessThanOrEqual(singleForm.getBoundingClientRect().width)
    expect(multipleField.getBoundingClientRect().width).toBeLessThanOrEqual(multipleForm.getBoundingClientRect().width)
    expect(singleDropdown.getBoundingClientRect().width).toBeLessThanOrEqual(
      singleField.getBoundingClientRect().width + 1
    )
    expect(multipleDropdown.getBoundingClientRect().width).toBeLessThanOrEqual(
      multipleField.getBoundingClientRect().width + 1
    )

    await userEvent.click(singleInput)

    const menu = within(singleField).getByRole('tree')
    const menuRect = menu.getBoundingClientRect()
    expect(menuRect.right).toBeLessThanOrEqual(window.innerWidth)
    expect(menuRect.width).toBeLessThanOrEqual(window.innerWidth)
  }
}

export default meta
