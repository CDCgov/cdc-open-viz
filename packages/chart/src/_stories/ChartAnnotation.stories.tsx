import type { Meta, StoryObj } from '@storybook/react'
import annotationConfig from './_mock/annotation_category_mock.json'
import annotationConfigDateLinear from './_mock/annotation_date-linear_mock.json'
import annotationConfigDateTime from './_mock/annotation_date-time_mock.json'
import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Annotation',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Chart_Annotation_Categorical: Story = {
  args: {
    config: annotationConfig
  }
}

export const Chart_Annotation_Date_Linear: Story = {
  args: {
    config: annotationConfigDateLinear
  }
}

export const Chart_Annotation_Date_Time: Story = {
  args: {
    config: annotationConfigDateTime
  }
}

export default meta
