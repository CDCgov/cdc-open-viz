import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Accordion from '../Accordion'

const Template = ({ ...args }) => (
  <Accordion>
    <Accordion.Section {...args}>
      <p>An accordion is used to show (and hide) HTML content.</p>
      <p>Both the element that is used to open the accordion and the accordion's content can be any HTML element.</p>
    </Accordion.Section>
    <Accordion.Section {...args}>
      <p>An accordion is used to show (and hide) HTML content.</p>
      <p>Both the element that is used to open the accordion and the accordion's content can be any HTML element.</p>
    </Accordion.Section>
  </Accordion>
)

const meta: Meta<typeof Accordion> = {
  title: 'Components/UI/Accordion',
  component: Template
}

export default meta

type Story = StoryObj<typeof Template>

export const Primary: Story = {
  args: {
    title: 'Collapsed Section Content',
    warnIf: 1 === 1,
    tooltipText: 'This is an <strong>example</strong> tooltip.'
  },
  argTypes: {
    warnIf: { control: 'boolean' }
  }
}
