import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcFilteredText from '@cdc/filtered-text/src/CdcFilteredText'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import { expect, waitFor } from 'storybook/test'

const comparisonData = [
  {
    State: 'CA',
    Message: 'Representative filtered text output'
  }
]

const meta: Meta = {
  title: 'Components/Pages/Dashboard/Filtered Text Migration Comparison'
}

type Story = StoryObj

export const Standalone_Handoff_And_Migrated_Output: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CdcFilteredText
        config={{
          type: 'filtered-text',
          title: 'Legacy filtered text',
          textColumn: 'Message',
          data: comparisonData,
          filters: [{ columnName: 'State', columnValue: 'CA' }]
        }}
        isEditor={false}
      />
      <CdcMarkupInclude
        config={
          {
            type: 'markup-include',
            theme: 'theme-blue',
            data: comparisonData,
            enableMarkupVariables: true,
            markupVariables: [
              {
                sourceType: 'column',
                outputType: 'value',
                name: 'Message',
                tag: '{{message}}',
                columnName: 'Message',
                conditions: [{ columnName: 'State', isOrIsNotEqualTo: 'is', value: 'CA' }],
                selectionMode: 'first'
              }
            ],
            contentEditor: {
              title: 'Migrated markup include',
              inlineHTML: '{{message}}',
              useInlineHTML: true,
              srcUrl: '',
              showHeader: true,
              style: 'default'
            },
            visual: {
              border: false,
              accent: false,
              background: false,
              hideBackgroundColor: false,
              borderColorTheme: false
            }
          } as any
        }
        configUrl=''
        datasets={{}}
        isEditor={false}
        isDashboard={false}
        setConfig={() => {}}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => {
      expect(canvasElement.textContent).toContain('Filtered Text Has Been Migrated')
      expect(canvasElement.textContent).toContain('Use the markup-include package to render this visualization.')
      expect(canvasElement.textContent?.match(/Representative filtered text output/g)?.length).toBe(1)
    })
  }
}

export default meta
