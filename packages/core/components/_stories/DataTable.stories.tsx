import { Meta, StoryObj } from '@storybook/react'

import DataTable from '../DataTable'

const meta: Meta<typeof DataTable> = {
  title: 'Components/Organisms/DataTable',
  component: DataTable
}

export default meta

type Story = StoryObj<typeof DataTable>

export const Primary: Story = {}
