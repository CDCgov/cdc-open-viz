import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Respiratory Virus',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

import ARI_Map_Viz_json from './_mock/respiratory-virus/ARI_Map_Viz.json'
export const ARI_Map_Viz: Story = {
  args: {
    config: ARI_Map_Viz_json
  }
}

import wastewatermap_json from './_mock/respiratory-virus/wastewatermap.json'
export const wastewatermap: Story = {
  args: {
    config: wastewatermap_json
  }
}

import CFA_Map_Viz_json from './_mock/respiratory-virus/CFA_Map_Viz.json'
export const CFA_Map_Viz: Story = {
  args: {
    config: CFA_Map_Viz_json
  }
}
