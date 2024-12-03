import type { Meta, StoryObj } from '@storybook/react'
import SimplifiedLineConfig from './_mock/simplified_line.json'

import Chart from '../CdcChart'
import { editConfigKeys } from '../helpers/configHelpers'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Axis Labels',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Abbreviated_Dates: Story = {
  args: {
    config: editConfigKeys(SimplifiedLineConfig, [
      { path: ['xAxis', 'showYearsOnce'], value: true },
      { path: ['tooltips', 'dateDisplayFormat'], value: '%b. %d %Y' }
    ])
  }
}

export default meta
