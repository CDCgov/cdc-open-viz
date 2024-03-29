import { Meta, StoryObj } from '@storybook/react'
import CdcEditor from '../CdcEditor'

const meta: Meta<typeof CdcEditor> = {
  title: 'Components/Pages/CdcEditor',
  component: CdcEditor
}
export default meta

type Story = StoryObj<typeof CdcEditor>

const config = {
  dashboard: {
    theme: 'theme-blue'
  },
  rows: [
    [
      {
        width: 12
      },
      {},
      {}
    ]
  ],
  visualizations: {},
  table: {
    label: 'Data Table',
    show: true,
    showDownloadUrl: false,
    showVertical: true
  },
  newViz: true,
  datasets: {
    'https://data.cdc.gov/resource/vdgb-f9s3.json': {
      data: [
        {
          surveyname: 'American Indian Adult Tobacco Survey',
          surveynameabbrev: 'AI ATS',
          year: '2007',
          e_cigarettes: 'No',
          question: 'During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?',
          responses: "Don't know/Not sure"
        },
        {
          surveyname: 'American Indian Adult Tobacco Survey',
          surveynameabbrev: 'AI ATS',
          year: '2007',
          e_cigarettes: 'No',
          question: 'During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?',
          responses: 'Refused'
        },
        {
          surveyname: 'American Indian Adult Tobacco Survey',
          surveynameabbrev: 'AI ATS',
          year: '2007',
          e_cigarettes: 'No',
          question: 'During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?',
          responses: 'No'
        }
      ]
    }
  },
  data: [
    {
      surveyname: 'American Indian Adult Tobacco Survey',
      surveynameabbrev: 'AI ATS',
      year: '2007',
      e_cigarettes: 'No',
      question: 'During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?',
      responses: "Don't know/Not sure"
    },
    {
      surveyname: 'American Indian Adult Tobacco Survey',
      surveynameabbrev: 'AI ATS',
      year: '2007',
      e_cigarettes: 'No',
      question: 'During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?',
      responses: 'Refused'
    },
    {
      surveyname: 'American Indian Adult Tobacco Survey',
      surveynameabbrev: 'AI ATS',
      year: '2007',
      e_cigarettes: 'No',
      question: 'During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?',
      responses: 'No'
    }
  ],
  type: 'dashboard'
}

export const DashboardEditor: Story = {
  args: {
    config
  }
}
