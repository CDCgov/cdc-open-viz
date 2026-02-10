import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import defaultPatterns from './_mock/default-patterns.json'
import countyPatterns from './_mock/county-patterns.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Patterns',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const Default_Patterns: Story = {
  args: {
    config: defaultPatterns
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Default_Patterns_Dark: Story = {
  args: {
    isEditor: true,
    config: editConfigKeys(defaultPatterns, [
      { path: ['color'], value: 'bluegreen' },
      { path: ['legend', 'specialClasses'], value: [] }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const County_Patterns: Story = {
  args: {
    config: countyPatterns
  }
}

export const County_Patterns_Editor: Story = {
  args: {
    isEditor: true,
    config: countyPatterns
  }
}

export const County_Patterns_Multi_Pattern: Story = {
  args: {
    config: editConfigKeys(countyPatterns, [
      { path: ['general', 'title'], value: 'County Map - Multiple Pattern Types' },
      {
        path: ['map', 'patterns'],
        value: [
          {
            dataKey: 'Coverage Type',
            dataValue: 'Medicaid',
            pattern: 'circles',
            size: 'medium',
            color: '#2E5C8A',
            label: 'Medicaid',
            contrastCheck: true
          },
          {
            dataKey: 'Coverage Type',
            dataValue: 'Private',
            pattern: 'lines',
            size: 'small',
            color: '#8B4513',
            label: 'Private Insurance',
            contrastCheck: true
          },
          {
            dataKey: 'Risk Level',
            dataValue: 'High',
            pattern: 'waves',
            size: 'large',
            color: '#DC143C',
            label: 'High Risk',
            contrastCheck: true
          }
        ]
      }
    ])
  }
}

export const County_Patterns: Story = {
  args: {
    config: countyPatterns
  }
}

export const County_Patterns_Editor: Story = {
  args: {
    isEditor: true,
    config: countyPatterns
  }
}

export const County_Patterns_Multi_Pattern: Story = {
  args: {
    config: editConfigKeys(countyPatterns, [
      { path: ['general', 'title'], value: 'County Map - Multiple Pattern Types' },
      {
        path: ['map', 'patterns'],
        value: [
          {
            dataKey: 'Coverage Type',
            dataValue: 'Medicaid',
            pattern: 'circles',
            size: 'medium',
            color: '#2E5C8A',
            label: 'Medicaid',
            contrastCheck: true
          },
          {
            dataKey: 'Coverage Type',
            dataValue: 'Private',
            pattern: 'lines',
            size: 'small',
            color: '#8B4513',
            label: 'Private Insurance',
            contrastCheck: true
          },
          {
            dataKey: 'Risk Level',
            dataValue: 'High',
            pattern: 'waves',
            size: 'large',
            color: '#DC143C',
            label: 'High Risk',
            contrastCheck: true
          }
        ]
      }
    ])
  }
}
