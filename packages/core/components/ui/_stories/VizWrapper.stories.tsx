import type { Meta, StoryObj } from '@storybook/react'
import '@cdc/core/styles/v2/themes/_color-definitions.scss'

import VizWrapper from '../VizWrapper'

const meta: Meta = {
  title: 'Components/Molecules/VizWrapper',
  component: VizWrapper,
  argTypes: {
    visualSettings: {
      border: { control: 'boolean' },
      borderColorTheme: { control: { type: 'boolean' } },
      accent: true,
      background: false,
      hideBackgroundColor: false
    }
  },
  decorators: [
    Story => (
      // fake the outer container for now.
      <div className='cove theme-blue'>
        <Story />
      </div>
    )
  ]
}

type Story = StoryObj

export const AllSettings: Story = {
  args: {
    title: 'Title for above this title: Title for above this component. Controls if borders are visible. Not the interior title.',
    visualSettings: {
      border: true,
      borderColorTheme: true,
      accent: true,
      background: false,
      hideBackgroundColor: false
    },
    visualizationType: 'chart',
    children: (
      <div>
        <h2 style={{ margin: 0 }}>Example Content in Visualization</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas facere, iste quod nihil itaque provident neque error doloremque animi quam aliquam maiores esse impedit eius eveniet quaerat vitae dolores?</p>
      </div>
    )
  }
}

export const Secondary: Story = {
  args: {
    title: 'Title for above this component. Controls if borders are visible. Not the interior title.',
    visualSettings: {
      border: true,
      borderColorTheme: false,
      accent: false,
      background: true,
      hideBackgroundColor: false
    },
    visualizationType: 'chart',
    children: (
      <div>
        <h2 style={{ margin: 0 }}>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas facere, iste quod nihil itaque provident neque error doloremque animi quam aliquam maiores esse impedit eius eveniet quaerat vitae dolores?</p>
      </div>
    )
  }
}

export default meta
