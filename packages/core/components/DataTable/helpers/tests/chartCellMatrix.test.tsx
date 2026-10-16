import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import chartCellMatrix from '../chartCellMatrix'

describe('chartCellMatrix', () => {
  it('uses the series name for color lookup when displaying a customized column label', () => {
    const colorScale = vi.fn(name => (name === 'Rate Series' ? '#005ea8' : null))
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      columns: {
        rate: {
          name: 'rate',
          label: 'Rate Column'
        }
      },
      series: [{ dataKey: 'rate', name: 'Rate Series' }],
      runtime: {
        series: [{ dataKey: 'rate', name: 'Rate Series' }]
      },
      table: {}
    }

    const matrix = chartCellMatrix({
      rows: [],
      runtimeData: [],
      config,
      isVertical: false,
      sortBy: { column: '', colIndex: null },
      colorScale,
      dataSeriesColumns: ['rate']
    } as any)

    render(
      <table>
        <tbody>
          {Array.from(matrix).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )

    expect(screen.getByText('Rate Column')).toBeTruthy()
    expect(colorScale).toHaveBeenCalledWith('Rate Series')
    expect(colorScale).not.toHaveBeenCalledWith('Rate Column')
  })
})
