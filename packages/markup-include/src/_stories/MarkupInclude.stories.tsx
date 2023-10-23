import type { Meta, StoryObj } from '@storybook/react'
import ExampleConfig_1 from './../data/initial-state'
import CdcMarkupInclude from '../CdcMarkupInclude'
import { Config } from '../types/Config'

const meta: Meta<typeof CdcMarkupInclude> = {
  title: 'Components/Templates/Markup Include',
  component: CdcMarkupInclude
}

type Story = StoryObj<typeof CdcMarkupInclude>

export const Initial_State: Story = {
  args: {
    config: ExampleConfig_1 as unknown as Config
  }
}

export default meta
