import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import CustomColorsEditor from '../CustomColorsEditor/CustomColorsEditor'

const meta: Meta<typeof CustomColorsEditor> = {
  title: 'Components/Atoms/CustomColorsEditor',
  component: CustomColorsEditor
}

export default meta
type Story = StoryObj<typeof CustomColorsEditor>

const fiftyColors = [
  '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231',
  '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4',
  '#469990', '#dcbeff', '#9a6324', '#fffac8', '#800000',
  '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9',
  '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231',
  '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4',
  '#469990', '#dcbeff', '#9a6324', '#fffac8', '#800000',
  '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9',
  '#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00',
  '#ffff33', '#a65628', '#f781bf', '#999999', '#66c2a5'
]

const Wrapper = ({ initialColors }: { initialColors: string[] }) => {
  const [colors, setColors] = useState(initialColors)
  return <CustomColorsEditor colors={colors} onChange={setColors} label='Custom Color Order' />
}

export const Default: Story = {
  render: () => <Wrapper initialColors={['#3366cc', '#dc3912', '#ff9900']} />
}

export const FiftyColors: Story = {
  render: () => <Wrapper initialColors={fiftyColors} />
}
