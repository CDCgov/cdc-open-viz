import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const repoRoot = path.resolve(__dirname, '../../../..')

const wrapperEntrypoints = [
  'packages/chart/src/CdcChartComponent.tsx',
  'packages/map/src/CdcMapComponent.tsx',
  'packages/data-bite/src/CdcDataBite.tsx',
  'packages/data-table/src/CdcDataTable.tsx',
  'packages/filtered-text/src/CdcFilteredText.jsx',
  'packages/waffle-chart/src/CdcWaffleChart.tsx',
  'packages/markup-include/src/CdcMarkupInclude.tsx',
  'packages/dashboard/src/CdcDashboardComponent.tsx'
]

const visualizationContentEntrypoints = [
  'packages/data-table/src/CdcDataTable.tsx',
  'packages/filtered-text/src/CdcFilteredText.jsx',
  'packages/markup-include/src/CdcMarkupInclude.tsx',
  'packages/data-bite/src/CdcDataBite.tsx',
  'packages/waffle-chart/src/CdcWaffleChart.tsx',
  'packages/chart/src/CdcChartComponent.tsx',
  'packages/map/src/CdcMapComponent.tsx'
]

describe('visualization wrapper usage', () => {
  it.each(wrapperEntrypoints)('%s uses the shared VisualizationContainer shell', filePath => {
    const source = fs.readFileSync(path.join(repoRoot, filePath), 'utf8')

    expect(source).toContain('VisualizationContainer')
    expect(source).toContain('<VisualizationContainer')
  })

  it.each(visualizationContentEntrypoints)('%s uses the shared VisualizationContent inner shell', filePath => {
    const source = fs.readFileSync(path.join(repoRoot, filePath), 'utf8')

    expect(source).toContain('VisualizationContent')
    expect(source).toContain('<VisualizationContent')
  })

  it.each(visualizationContentEntrypoints)('%s does not opt into legacy wrapper merge flags', filePath => {
    const source = fs.readFileSync(path.join(repoRoot, filePath), 'utf8')

    expect(source).not.toContain('mergeInnerBody')
    expect(source).not.toContain('mergeBodyWrap')
    expect(source).not.toContain('wrapBody=')
  })

  it('packages/map/src/CdcMapComponent.tsx uses the shared VisualizationContent header slot for the title', () => {
    const source = fs.readFileSync(path.join(repoRoot, 'packages/map/src/CdcMapComponent.tsx'), 'utf8')

    expect(source).toContain('header={')
    expect(source).toContain("<Title")
  })
})
