import { Meta, StoryObj } from '@storybook/react'

import Filters from '../Filters'
import { VizFilter } from '../../types/VizFilter'
import { faker } from '@faker-js/faker'
import _ from 'lodash'
import { Visualization } from '../../types/Visualization'

const meta: Meta<typeof Filters> = {
  title: 'Components/Molecules/Visualization Filters',
  component: Filters
}

type Story = StoryObj<typeof Filters>

faker.seed(123)

const animalData = _.times(7, () => ({ bear: faker.animal.bear(), cat: faker.animal.cat(), cow: faker.animal.cow() }))
const generateFilters = filterStyle => {
  return ['bear', 'cat', 'cow'].map(columnName => {
    return {
      filterStyle,
      label: columnName.toUpperCase(),
      columnName
    } as VizFilter
  })
}

const generateConfig = filterStyle =>
  ({
    args: {
      config: {
        filters: generateFilters(filterStyle),
        data: animalData
      } as Visualization,
      filteredData: animalData,
      setFilteredData: () => {},
      setConfig: () => {},
      exclusions: []
    }
  } as Story)

export const Dropdown: Story = generateConfig('dropdown')

export const DropdownBar: Story = generateConfig('dropdown bar')

export const MultiSelect: Story = generateConfig('multi-select')

export const NestedDropdown: Story = generateConfig('nested-dropdown')

export const Pill: Story = generateConfig('pill')

export const Tab: Story = generateConfig('tab')

export const TabBar: Story = generateConfig('tab bar')

export default meta
