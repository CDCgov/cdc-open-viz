import type { Meta, StoryObj } from '@storybook/react'
import ExampleConfig_1 from './../data/markup-include-example.json'
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
        inlineHTML: '<h2>Inline HTML</h2> <div>{{state}}</div> <div>{{rate}</div>',
        markupVariables: [
          {
            name: 'state',
            tag: '{{state}}',
            columnName: 'STATE',
            conditions: [
              {
                columnName: 'rate',
                isOrIsNotEqualTo: 'is',
                value: '130'
              }
            ]
          }
        ],
        showHeader: true,
        srcUrl: '#example',
        title: 'Markup Include',
        useInlineHTML: true
      },
      data: ExampleConfig_1,
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

export default meta
