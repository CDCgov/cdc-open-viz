import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { performAndAssert } from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'
import ShowAllConfig from '../../examples/dashboard-multiselect-show-all.json'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard/Regression Tests/Multiselect Show All',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

const createFixtureHarness = (canvasElement: HTMLElement) => {
  const user = userEvent.setup()
  const getRows = () =>
    Array.from(canvasElement.querySelectorAll('table tbody tr'))
      .filter(row => row.querySelectorAll('td').length === 5)
      .map(row => Array.from(row.querySelectorAll('td')).map(cell => cell.textContent?.trim()))
  const getField = (name: string) => {
    const field = Array.from(canvasElement.querySelectorAll<HTMLElement>('.dashboard-filters__field')).find(
      element => element.querySelector('label')?.textContent?.trim() === name
    )
    expect(field).toBeDefined()
    return field!
  }
  const selectValue = async (fieldName: string, value: string) => {
    const field = getField(fieldName)
    if (field.querySelector('.dropdown.d-none')) {
      await user.click(field.querySelector<HTMLButtonElement>('button.expand')!)
    }
    await user.click(within(field).getByRole('option', { name: value, exact: true }))
  }
  const expectProfiles = (rows: ReturnType<typeof getRows>, profiles: string[]) =>
    rows.length === profiles.length && profiles.every(profile => rows.some(row => row[0] === profile))
  return { user, getRows, getField, selectValue, expectProfiles }
}

export const Original_Size_Complex_Table: Story = {
  args: { config: ShowAllConfig, isEditor: false },
  play: async ({ canvasElement }) => {
    const { user, getRows, getField, selectValue, expectProfiles } = createFixtureHarness(canvasElement)

    await performAndAssert(
      'All displays the 293 original records without synthetic All rows',
      getRows,
      async () => {},
      (_before, rows) => rows.length === 293
    )
    await performAndAssert(
      'Selecting Acetone replaces All and leaves the other categories unrestricted',
      getRows,
      async () => await selectValue('Tox Profile', 'Acetone'),
      (_before, rows) => expectProfiles(rows, ['Acetone'])
    )
    await performAndAssert(
      'Multiple values within one category are combined with OR',
      getRows,
      async () => await selectValue('Tox Profile', 'Acrylamide'),
      (_before, rows) => expectProfiles(rows, ['Acetone', 'Acrylamide'])
    )
    await performAndAssert(
      'Selecting a year intersects the selected profiles',
      getRows,
      async () => await selectValue('Year Published', '2022'),
      (_before, rows) => expectProfiles(rows, ['Acetone'])
    )
    await performAndAssert(
      'Selecting a second year restores the matching second profile',
      getRows,
      async () => await selectValue('Year Published', '2012'),
      (_before, rows) => expectProfiles(rows, ['Acetone', 'Acrylamide'])
    )
    await performAndAssert(
      'All replaces the profile selections while the year filter stays active',
      getRows,
      async () => await selectValue('Tox Profile', 'All'),
      (_before, rows) => rows.length === 52 && rows.every(row => ['2022', '2012'].includes(row[1]!))
    )
    await performAndAssert(
      'Returning the year filter to All restores every original record',
      getRows,
      async () => await selectValue('Year Published', 'All'),
      (_before, rows) => rows.length === 293
    )
    await performAndAssert(
      'Substance filters the real data column with all other categories unrestricted',
      getRows,
      async () => await selectValue('Substance', 'Acetone'),
      (_before, rows) => expectProfiles(rows, ['Acetone'])
    )
    await performAndAssert(
      'CAS RN filters the real data column with all other categories unrestricted',
      getRows,
      async () => {
        await selectValue('Substance', 'All')
        await selectValue('CAS RN', '79-06-1')
      },
      (_before, rows) => expectProfiles(rows, ['Acrylamide'])
    )
    await performAndAssert(
      'Removing the last selection remains an incomplete selection rather than All',
      getRows,
      async () => {
        const field = getField('CAS RN')
        await user.click(within(field).getByRole('button', { name: 'Remove' }))
      },
      (_before, rows) => rows.length === 0
    )
    await performAndAssert(
      'Explicitly selecting All restores data after clearing a selection',
      getRows,
      async () => await selectValue('CAS RN', 'All'),
      (_before, rows) => rows.length === 293
    )
  }
}

const applyButtonConfig = structuredClone(ShowAllConfig)
applyButtonConfig.visualizations['complex-filters'].filterBehavior = 'Apply Button'
applyButtonConfig.visualizations['complex-filters'].autoLoad = false

export const Apply_Button_Keeps_Pending_Show_All_Selections: Story = {
  args: { config: applyButtonConfig, isEditor: false },
  play: async ({ canvasElement }) => {
    const { user, getRows, getField, selectValue, expectProfiles } = createFixtureHarness(canvasElement)
    const canvas = within(canvasElement)
    const getState = () => ({
      rows: getRows(),
      selectedProfiles: Array.from(getField('Tox Profile').querySelectorAll('.selected > div')).map(chip =>
        chip.firstChild?.textContent?.trim()
      )
    })
    const apply = async () => await user.click(canvas.getByRole('button', { name: 'Apply', exact: true }))

    await performAndAssert(
      'Initial Apply displays all 293 original records',
      getRows,
      async () => await user.click(await canvas.findByRole('button', { name: 'Apply', exact: true })),
      (_before, rows) => rows.length === 293
    )
    await performAndAssert(
      'Specific profile replaces the pending All chip without changing the table before Apply',
      getState,
      async () => await selectValue('Tox Profile', 'Acetone'),
      (_before, state) =>
        state.rows.length === 293 && state.selectedProfiles.length === 1 && state.selectedProfiles[0] === 'Acetone'
    )
    await performAndAssert('Apply commits the specific profile', getRows, apply, (_before, rows) =>
      expectProfiles(rows, ['Acetone'])
    )
    await performAndAssert(
      'Additional pending profile leaves the committed table unchanged',
      getState,
      async () => await selectValue('Tox Profile', 'Acrylamide'),
      (_before, state) =>
        expectProfiles(state.rows, ['Acetone']) &&
        state.selectedProfiles.length === 2 &&
        state.selectedProfiles.includes('Acrylamide')
    )
    await performAndAssert('Apply commits both selected profiles', getRows, apply, (_before, rows) =>
      expectProfiles(rows, ['Acetone', 'Acrylamide'])
    )
    await performAndAssert(
      'Pending All replaces specific chips and preserves committed results until Apply',
      getState,
      async () => await selectValue('Tox Profile', 'All'),
      (_before, state) =>
        expectProfiles(state.rows, ['Acetone', 'Acrylamide']) &&
        state.selectedProfiles.length === 1 &&
        state.selectedProfiles[0] === 'All'
    )
    await performAndAssert(
      'Apply commits All and restores every original record',
      getRows,
      apply,
      (_before, rows) => rows.length === 293
    )
  }
}
