import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMapComponent from '../CdcMapComponent'
import columnWrapTest from './_mock/column-wrap-test.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'

const meta: Meta<typeof CdcMapComponent> = {
  title: 'Components/Templates/Map/Column Wrapping',
  component: CdcMapComponent
}

type Story = StoryObj<typeof CdcMapComponent>

export const Wrap_Columns_Enabled: Story = {
  args: {
    config: editConfigKeys(columnWrapTest, [
      { path: ['table', 'wrapColumns'], value: true },
      { path: ['table', 'expanded'], value: true }
    ])
  }
}

export const Wrap_Columns_Disabled: Story = {
  args: {
    config: editConfigKeys(columnWrapTest, [
      { path: ['table', 'wrapColumns'], value: false },
      { path: ['table', 'expanded'], value: true }
    ])
  }
}

export default meta
