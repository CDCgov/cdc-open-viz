import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import defaultPatterns from './_mock/default-patterns.json'
import countyPatterns from './_mock/county-patterns.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import { sanitizeToSvgId } from '@cdc/core/helpers/cove/string'

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
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('aside[aria-label="Legend"] .legend-container__li-btn--pattern', canvasElement)

    const legend = canvasElement.querySelector('aside[aria-label="Legend"]') as HTMLElement
    const patternButtons = Array.from(legend.querySelectorAll('.legend-container__li-btn--pattern'))
    expect(patternButtons).toHaveLength(countyPatterns.map.patterns.length)

    const patternChecks = countyPatterns.map.patterns.map((patternData, patternIndex) => {
      const sanitizedDataKey = sanitizeToSvgId(patternData.dataKey)
      const expectedIdFragment = `${sanitizedDataKey}--${patternIndex}`
      const patternButton = patternButtons[patternIndex]
      const patternDef = patternButton?.querySelector('pattern')
      const patternFill = patternButton?.querySelector('[fill^="url(#"]')

      return {
        expectedIdFragment,
        hasSanitizedPatternId: Boolean(patternDef?.id.endsWith(expectedIdFragment)),
        hasMatchingUrlRef: patternFill?.getAttribute('fill') === `url(#${patternDef?.id})`
      }
    })

    expect(patternChecks).toEqual(
      countyPatterns.map.patterns.map((patternData, patternIndex) => ({
        expectedIdFragment: `${sanitizeToSvgId(patternData.dataKey)}--${patternIndex}`,
        hasSanitizedPatternId: true,
        hasMatchingUrlRef: true
      }))
    )
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
            pattern: 'diagonalLines',
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
