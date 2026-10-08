import { useEffect, useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'

import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import { ChartConfig } from '../types/ChartConfig'

const meta: Meta<typeof RankByValueMutationHarness> = {
  title: 'Components/Templates/Chart/Rank By Value Mutation Regression',
  component: RankByValueMutationHarness,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof RankByValueMutationHarness>

type RankRow = {
  category: string
  value: number
}

const sourceOrder = 'Alpha, Charlie, Bravo'
const rankedOrder = 'Charlie, Bravo, Alpha'
const rankedExcludingAlphaOrder = 'Charlie, Bravo'

const getOrder = (rows: RankRow[]) => rows.map(row => row.category).join(', ')

const getRenderedCategoryOrder = (panel: Element) => {
  const categoryNames = sourceOrder.split(', ')
  return Array.from(panel.querySelectorAll('svg text'))
    .filter(textElement => categoryNames.includes(textElement.textContent?.trim() || ''))
    .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left)
    .map(textElement => textElement.textContent?.trim())
    .join(', ')
}

const getConfig = (
  title: string,
  data: RankRow[],
  rankByValue?: 'asc' | 'desc',
  excludedCategories: string[] = []
): ChartConfig =>
  ({
    version: '4.26.8',
    type: 'chart',
    visualizationType: 'Bar',
    title,
    rankByValue,
    data,
    animate: false,
    legend: {
      hide: true
    },
    table: {
      show: false
    },
    xAxis: {
      dataKey: 'category',
      type: 'categorical',
      label: 'Category'
    },
    yAxis: {
      label: 'Value',
      hideAxis: false,
      hideTicks: false,
      gridLines: true,
      numTicks: 4
    },
    series: [
      {
        dataKey: 'value',
        name: 'Value',
        type: 'Bar'
      }
    ],
    dataFormat: {
      roundTo: 0,
      commas: false
    },
    exclusions: {
      active: excludedCategories.length > 0,
      keys: excludedCategories
    }
  } as ChartConfig)

const panelStyle = {
  background: '#fff',
  border: '1px solid #d9dfe7',
  borderRadius: 6,
  minWidth: 0,
  padding: 16
}

const labelStyle = {
  color: '#4b5563',
  fontSize: 12,
  fontWeight: 700,
  margin: '0 0 8px',
  textTransform: 'uppercase' as const
}

const diagnosticStyle = {
  background: '#f7f8fa',
  border: '1px solid #d9dfe7',
  borderRadius: 6,
  display: 'grid',
  gap: 8,
  gridColumn: '1 / -1',
  padding: 12
}

function RankByValueMutationHarness() {
  const sharedRows = useMemo<RankRow[]>(
    () => [
      { category: 'Alpha', value: 30 },
      { category: 'Charlie', value: 10 },
      { category: 'Bravo', value: 20 }
    ],
    []
  )

  const [observedOrder, setObservedOrder] = useState<string>('Checking shared data order...')

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setObservedOrder(getOrder(sharedRows))
    }, 100)

    return () => window.clearTimeout(timeoutId)
  }, [sharedRows])

  const rankedConfig = useMemo(() => getConfig('Ranked by value ascending', sharedRows, 'asc'), [sharedRows])
  const rankedExclusionConfig = useMemo(
    () => getConfig('Ranked by value ascending with Alpha excluded', sharedRows, 'asc', ['Alpha']),
    [sharedRows]
  )
  const sourceOrderConfig = useMemo(() => getConfig('Should preserve source order', sharedRows), [sharedRows])
  const isChecking = observedOrder === 'Checking shared data order...'
  const hasMutated = !isChecking && observedOrder !== sourceOrder

  return (
    <div
      style={{
        background: '#eef2f7',
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        padding: 16
      }}
    >
      <section style={panelStyle} data-rank-by-value-panel='ranked'>
        <p style={labelStyle}>Ranked chart</p>
        <Chart config={rankedConfig} isEditor={false} interactionLabel='' />
      </section>

      <section style={panelStyle} data-rank-by-value-panel='source-order'>
        <p style={labelStyle}>Source-order chart sharing the same data</p>
        <Chart config={sourceOrderConfig} isEditor={false} interactionLabel='' />
      </section>

      <section style={panelStyle} data-rank-by-value-panel='ranked-exclusion'>
        <p style={labelStyle}>Ranked chart with Alpha excluded</p>
        <Chart config={rankedExclusionConfig} isEditor={false} interactionLabel='' />
      </section>

      <section style={diagnosticStyle} aria-label='Shared data order diagnostic'>
        <div>
          <strong>Expected shared data order:</strong> <span>{sourceOrder}</span>
        </div>
        <div>
          <strong>Observed shared data order:</strong>{' '}
          <span data-testid='rank-by-value-observed-order'>{observedOrder}</span>
        </div>
        <div data-testid='rank-by-value-mutation-status'>
          <strong>Status:</strong> {hasMutated ? 'Shared data was mutated' : 'Shared data order is preserved'}
        </div>
      </section>
    </div>
  )
}

export const Shared_Data_Order_Is_Preserved: Story = {
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      const rankedPanel = canvasElement.querySelector('[data-rank-by-value-panel="ranked"]')
      const sourceOrderPanel = canvasElement.querySelector('[data-rank-by-value-panel="source-order"]')
      const rankedExclusionPanel = canvasElement.querySelector('[data-rank-by-value-panel="ranked-exclusion"]')

      expect(rankedPanel?.querySelector('svg')).toBeTruthy()
      expect(sourceOrderPanel?.querySelector('svg')).toBeTruthy()
      expect(rankedExclusionPanel?.querySelector('svg')).toBeTruthy()
      expect(rankedPanel ? getRenderedCategoryOrder(rankedPanel) : '').toBe(rankedOrder)
      expect(sourceOrderPanel ? getRenderedCategoryOrder(sourceOrderPanel) : '').toBe(sourceOrder)
      expect(rankedExclusionPanel ? getRenderedCategoryOrder(rankedExclusionPanel) : '').toBe(rankedExcludingAlphaOrder)
      expect(canvasElement.querySelector('[data-testid="rank-by-value-observed-order"]')?.textContent).toBe(sourceOrder)
      expect(canvasElement.querySelector('[data-testid="rank-by-value-mutation-status"]')?.textContent).toContain(
        'Shared data order is preserved'
      )
    })
  }
}
