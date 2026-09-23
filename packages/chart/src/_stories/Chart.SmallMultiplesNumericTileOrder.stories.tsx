import { useMemo } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'

import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import smallMultiplesBars from './_mock/small_multiples/small_multiples_bars.json'
import type { ChartConfig } from '../types/ChartConfig'

const sourceTileValues = ['10', '2', '1', '20', '3']
const expectedNumericAwareOrder = ['Week 1', 'Week 2', 'Week 3', 'Week 10', 'Week 20']

const numericTileRows = sourceTileValues.map((week, index) => ({
  Week: week,
  Date: 'Current period',
  Cases: String((index + 1) * 10)
}))

const tileTitles = sourceTileValues.reduce<Record<string, string>>((titles, week) => {
  titles[week] = `Week ${week}`
  return titles
}, {})

const getConfig = (): ChartConfig =>
  editConfigKeys(smallMultiplesBars, [
    { path: ['title'], value: 'Small Multiples Numeric Tile Order' },
    { path: ['showTitle'], value: true },
    { path: ['visualizationSubType'], value: 'regular' },
    { path: ['data'], value: numericTileRows },
    { path: ['formattedData'], value: numericTileRows },
    { path: ['dataUrl'], value: '' },
    { path: ['runtimeDataUrl'], value: '' },
    { path: ['filters'], value: [] },
    { path: ['table', 'show'], value: false },
    { path: ['xAxis', 'dataKey'], value: 'Date' },
    { path: ['xAxis', 'type'], value: 'categorical' },
    { path: ['xAxis', 'label'], value: 'Date' },
    { path: ['yAxis', 'label'], value: 'Cases' },
    { path: ['yAxis', 'hideAxis'], value: false },
    { path: ['yAxis', 'hideTicks'], value: false },
    { path: ['yAxis', 'numTicks'], value: '3' },
    {
      path: ['series'],
      value: [{ dataKey: 'Cases', type: 'Bar', axis: 'Left', tooltip: true }]
    },
    { path: ['smallMultiples', 'mode'], value: 'by-column' },
    { path: ['smallMultiples', 'tileColumn'], value: 'Week' },
    { path: ['smallMultiples', 'tileOrderType'], value: 'asc' },
    { path: ['smallMultiples', 'tileOrder'], value: [] },
    { path: ['smallMultiples', 'tileTitles'], value: tileTitles },
    { path: ['smallMultiples', 'tilesPerRowDesktop'], value: 5 },
    { path: ['smallMultiples', 'tilesPerRowMobile'], value: 1 }
  ]) as ChartConfig

const getRenderedTileTitles = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll('.small-multiple-tile .tile-title')).map(
    title => title.textContent?.trim() || ''
  )

function SmallMultiplesNumericTileOrderRegression() {
  const config = useMemo(() => getConfig(), [])

  return (
    <div
      style={{
        background: '#f7f8fa',
        display: 'grid',
        gap: 16,
        padding: 16
      }}
    >
      <section
        style={{
          background: '#fff',
          border: '1px solid #d9dfe7',
          borderRadius: 6,
          padding: 16
        }}
      >
        <Chart config={config} isEditor={true} interactionLabel='small-multiples-numeric-tile-order-regression' />
      </section>

      <section
        aria-label='Small multiples numeric tile order diagnostic'
        style={{
          background: '#fff',
          border: '1px solid #d9dfe7',
          borderRadius: 6,
          display: 'grid',
          gap: 8,
          padding: 12
        }}
      >
        <div>
          <strong>Input tile values:</strong> <span>{sourceTileValues.join(', ')}</span>
        </div>
        <div>
          <strong>Expected numeric-aware order:</strong> <span>{expectedNumericAwareOrder.join(', ')}</span>
        </div>
        <div>
          <strong>Expected rendered order:</strong>{' '}
          <span data-testid='small-multiples-expected-order'>{expectedNumericAwareOrder.join(', ')}</span>
        </div>
        <div data-testid='small-multiples-order-status'>
          <strong>Status:</strong> Numeric order preserved
        </div>
      </section>
    </div>
  )
}

const meta: Meta<typeof SmallMultiplesNumericTileOrderRegression> = {
  title: 'Components/Templates/Chart/Small Multiples',
  component: SmallMultiplesNumericTileOrderRegression,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof SmallMultiplesNumericTileOrderRegression>

export const Numeric_Tile_Values_Render_In_Numeric_Aware_Order: Story = {
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      const renderedTileTitles = getRenderedTileTitles(canvasElement)

      expect(renderedTileTitles).toEqual(expectedNumericAwareOrder)
      expect(canvasElement.querySelector('[data-testid="small-multiples-order-status"]')?.textContent).toContain(
        'Numeric order preserved'
      )
    })
  }
}
