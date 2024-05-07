import type { Meta, StoryObj } from '@storybook/react'
import ExampleConfig_1 from '../data/markup-include-example.json'
import CdcMarkupInclude from '../CdcMarkupInclude'

const meta: Meta<typeof CdcMarkupInclude> = {
  title: 'Components/Pages/Markup Include',
  component: CdcMarkupInclude
}

type Story = StoryObj<typeof CdcMarkupInclude>

export const Primary: Story = {
  args: {
    config: {
      contentEditor: {
        inlineHTML: '<h2>Inline HTML</h2>',
        markupVariables: [],
        showHeader: true,
        srcUrl: '#example',
        title: 'Markup Include',
        useInlineHTML: true
      },
      data: [],
      legend: {},
      newViz: true,
      theme: 'theme-blue',
      type: 'markup-include',
      runtime: null,
      visual: {
        border: false,
        accent: false,
        background: false,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    },
    isEditor: false,
    showEditorPanel: true
  }
}

export const No_Conditions: Story = {
  args: {
    config: {
      contentEditor: {
        inlineHTML: '<div>In the state of {{state}}, the overall rate was {{rate}} for {{location}}</div> <div>For more information visit {{url}}{{state}}/{{location}}</div>',
        markupVariables: [
          {
            name: 'state',
            tag: '{{state}}',
            columnName: 'STATE',
            conditions: []
          },
          {
            name: 'rate',
            tag: '{{rate}}',
            columnName: 'Rate',
            conditions: []
          },
          {
            name: 'location',
            tag: '{{location}}',
            columnName: 'Location',
            conditions: []
          },
          {
            name: 'url',
            tag: '{{url}}',
            columnName: 'URL',
            conditions: []
          }
        ],
        showHeader: true,
        srcUrl: '#example',
        title: 'Current Rate by Location',
        useInlineHTML: true
      },
      data: ExampleConfig_1,
      legend: {},
      newViz: true,
      theme: 'theme-blue',
      type: 'markup-include',
      runtime: null,
      visual: {
        border: false,
        accent: false,
        background: false,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    },
    isEditor: false,
    showEditorPanel: true
  }
}

export const With_conditions: Story = {
  args: {
    config: {
      contentEditor: {
        inlineHTML: '<div>{{state}} does have a rate 130 compared to the over all rate of {{overall-rate}}</div>',
        markupVariables: [
          {
            name: 'state',
            tag: '{{state}}',
            columnName: 'STATE',
            conditions: [{ columnName: 'Rate', isOrIsNotEqualTo: 'is', value: '130' }]
          },
          {
            name: 'overall-rate',
            tag: '{{overall-rate}}',
            columnName: 'Rate',
            conditions: [{ columnName: 'STATE', isOrIsNotEqualTo: 'is', value: 'Overall' }]
          }
        ],
        showHeader: true,
        srcUrl: '#example',
        title: '',
        useInlineHTML: true
      },
      data: ExampleConfig_1,
      legend: {},
      newViz: true,
      theme: 'theme-amber',
      type: 'markup-include',
      runtime: null,
      visual: {
        border: false,
        accent: true,
        background: true,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    },
    isEditor: false,
    showEditorPanel: true
  }
}

export const Button_and_text: Story = {
  args: {
    config: {
      contentEditor: {
        inlineHTML: '<div>{{state}} does have a rate 130 compared to the over all rate of {{overall-rate}}</div>',
        markupVariables: [],
        showHeader: false,
        srcUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Markup-Include-Button-and-Text.html',
        title: '',
        useInlineHTML: true
      },
      data: [
        {
          Race: 'Hispanic or Latino',
          'Age-adjusted rate': '644.2'
        },
        {
          Race: 'Non-Hispanic American Indian',
          'Age-adjusted rate': '636.1'
        },
        {
          Race: 'Non-Hispanic Black',
          'Age-adjusted rate': '563.7'
        },
        {
          Race: 'Non-Hispanic Asian or Pacific Islander',
          'Age-adjusted rate': '202.5'
        },
        {
          Race: 'Non-Hispanic White',
          'Age-adjusted rate': '183.6'
        }
      ],
      legend: {},
      newViz: true,
      theme: 'theme-amber',
      type: 'markup-include',
      runtime: null,
      visual: {
        border: false,
        accent: true,
        background: true,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    },
    isEditor: true,
    showEditorPanel: true
  }
}

export const icon_no_text: Story = {
  args: {
    config: {
      contentEditor: {
        inlineHTML: '<div>{{state}} does have a rate 130 compared to the over all rate of {{overall-rate}}</div>',
        markupVariables: [],
        showHeader: false,
        srcUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/SSI-Example-Markup-Include.html',
        title: '',
        useInlineHTML: true
      },
      data: [
        {
          Race: 'Hispanic or Latino',
          'Age-adjusted rate': '644.2'
        },
        {
          Race: 'Non-Hispanic American Indian',
          'Age-adjusted rate': '636.1'
        },
        {
          Race: 'Non-Hispanic Black',
          'Age-adjusted rate': '563.7'
        },
        {
          Race: 'Non-Hispanic Asian or Pacific Islander',
          'Age-adjusted rate': '202.5'
        },
        {
          Race: 'Non-Hispanic White',
          'Age-adjusted rate': '183.6'
        }
      ],
      legend: {},
      newViz: true,
      theme: 'theme-amber',
      type: 'markup-include',
      runtime: null,
      visual: {
        border: false,
        accent: true,
        background: true,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    },
    isEditor: true,
    showEditorPanel: true
  }
}
export const image_with_text: Story = {
  args: {
    config: {
      contentEditor: {
        inlineHTML: '<div>{{state}} does have a rate 130 compared to the over all rate of {{overall-rate}}</div>',
        markupVariables: [],
        showHeader: false,
        srcUrl: '/wcms/4.0/cdc-wp/data-presentation/examples/SSI-Image-With-Text.html',
        title: '<strong>Markup Include</strong> - Image with Text',
        useInlineHTML: true
      },
      data: [
        {
          Race: 'Hispanic or Latino',
          'Age-adjusted rate': '644.2'
        },
        {
          Race: 'Non-Hispanic American Indian',
          'Age-adjusted rate': '636.1'
        },
        {
          Race: 'Non-Hispanic Black',
          'Age-adjusted rate': '563.7'
        },
        {
          Race: 'Non-Hispanic Asian or Pacific Islander',
          'Age-adjusted rate': '202.5'
        },
        {
          Race: 'Non-Hispanic White',
          'Age-adjusted rate': '183.6'
        }
      ],
      legend: {},
      newViz: true,
      theme: 'theme-slate',
      type: 'markup-include',
      runtime: null,
      visual: {
        border: false,
        accent: true,
        background: true,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    },
    isEditor: true,
    showEditorPanel: true
  }
}

export default meta
