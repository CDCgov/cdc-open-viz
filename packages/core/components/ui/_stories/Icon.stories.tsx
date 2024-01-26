import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Icon, { ICON_TYPES } from '../Icon'
import { iconHash } from '../Icon'

const iconNames = Object.keys(iconHash)

const IconArray = () => {
  return (
    <>
      {iconNames.map(name => (
        <div>
          <span>
            <Icon display={name} /> {name}{' '}
          </span>
        </div>
      ))}
    </>
  )
}

const meta: Meta<typeof IconArray> = {
  title: 'Components/Atoms/Icon',
  component: IconArray
}

type Story = StoryObj<typeof Icon>

export const Primary: Story = {}

export default meta
