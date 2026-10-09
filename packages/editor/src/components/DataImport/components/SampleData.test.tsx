import { fireEvent, render, screen } from '@testing-library/react'
import SampleData from './SampleData'
import SampleDataContext from './samples/SampleDataContext'

describe('SampleData', () => {
  it('includes annual multi-series Bar Race sample data', () => {
    const sample = SampleData.data.charts.find(sample => sample.fileName === 'valid-bar-race.csv')

    expect(sample).toEqual(
      expect.objectContaining({
        text: 'Bar Race Sample Data',
        data: expect.stringContaining(
          'Year,North Coast,Great Lakes,Northeast,Plains,Southeast,Southwest,Mountain,Territories'
        )
      })
    )
    expect(sample?.data).toContain('2024,77,74,80,71,75,73,82,64')
  })

  it('shows the Bar Race sample in the chart sample-data list', () => {
    render(
      <SampleDataContext.Provider
        value={{ config: { type: 'chart', visualizationType: 'Bar' }, editingDataset: 0, loadData: vi.fn() }}
      >
        <SampleData.Buttons />
      </SampleDataContext.Provider>
    )

    expect(screen.getByRole('button', { name: 'Bar Race Sample Data' })).toBeInTheDocument()
  })

  it('includes a synthetic varicella HeatMap sample dataset', () => {
    const sample = SampleData.data.charts.find(sample => sample.fileName === 'valid-heatmap-varicella-cases.csv')

    expect(sample).toBeDefined()
    expect(sample).toEqual(
      expect.objectContaining({
        text: 'HeatMap Data (Synthetic Varicella Cases)',
        data: expect.stringContaining('Month,HHS Region 1,HHS Region 2')
      })
    )
    expect(sample?.data).toContain('Apr,55,61,78,69,72,64,58,57,66,50')
  })

  it('includes long-format world time playback sample data in the map list', () => {
    const sample = SampleData.data.maps.find(sample => sample.fileName === 'valid-world-time-playback.csv')
    const loadData = vi.fn()

    expect(sample).toEqual(
      expect.objectContaining({
        text: 'World: Time Playback Sample Data',
        data: expect.stringContaining('Country,Year,Rate')
      })
    )
    expect(sample?.data).toContain('France,2023,85')

    render(
      <SampleDataContext.Provider value={{ config: { type: 'map' }, editingDataset: 0, loadData }}>
        <SampleData.Buttons />
      </SampleDataContext.Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'World: Time Playback Sample Data' }))
    expect(loadData).toHaveBeenCalledWith(expect.any(Blob), 'valid-world-time-playback.csv', 0)
  })

  it('includes link styles and node colors in the Network sample', () => {
    const sample = SampleData.data.network.find(sample => sample.fileName === 'valid-network-data.csv')

    expect(sample?.data).toContain('source,target,weight,style,nodeColor')
    expect(sample?.data).toContain(',solid')
    expect(sample?.data).toContain(',dashed')
  })

  it('includes hierarchy, link style, and node color columns in the Dendrogram sample', () => {
    const sample = SampleData.data.dendrogram.find(sample => sample.fileName === 'valid-dendrogram-data.csv')

    expect(sample?.data).toContain('node,parent,linkStyle,nodeColor')
    expect(sample?.data).toContain('Public Health System,,solid,#005eaa')
    expect(sample?.data).toContain(',dashed,')
  })
})
