import { Meta, StoryObj } from '@storybook/react-vite'

import Table from '../Table'
import { ReactNode } from 'react'

const meta: Meta<typeof Table> = {
  title: 'Components/Molecules/Table',
  component: Table
}

export default meta

type Story = StoryObj<typeof Table>

function createMatrix(): ReactNode[][] {
  const base = ['a', 'b', 'c'].map(el => <>{el}</>)
  return [base, base]
}

export const Ungrouped: Story = {
  args: {
    childrenMatrix: createMatrix(),
    tableName: 'COVE Table',
    headContent: (
      <tr>
        <th>first</th>
        <th>second</th>
        <th>third</th>
      </tr>
    ),
    tableOptions: { className: 'table table-bordered' }
  }
}

function createGroupMatrix(): Record<string, ReactNode[][]> {
  const base = ['a', 'b', 'c'].map(el => <>{el}</>)
  return { group_1: [base, base], group_2: [base, base] }
}

const Grouped: Story = {
  args: {
    childrenMatrix: createGroupMatrix(),
    tableName: 'COVE Table',
    headContent: (
      <tr>
        <th>first</th>
        <th>second</th>
        <th>third</th>
      </tr>
    ),
    tableOptions: { className: 'table table-bordered' }
  }
}
