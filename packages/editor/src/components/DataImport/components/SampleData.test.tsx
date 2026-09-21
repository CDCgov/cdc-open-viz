import SampleData from './SampleData'

describe('SampleData', () => {
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

  it('includes link styles and node colors in the Network sample', () => {
    const sample = SampleData.data.network.find(sample => sample.fileName === 'valid-network-data.csv')

    expect(sample?.data).toContain('source,target,weight,style,nodeColor')
    expect(sample?.data).toContain(',solid')
    expect(sample?.data).toContain(',dashed')
  })
})
