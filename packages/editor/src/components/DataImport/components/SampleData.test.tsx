import SampleData from './SampleData'

describe('SampleData', () => {
  it('includes a synthetic varicella HeatMap sample dataset', () => {
    const sample = SampleData.data.charts.find(sample => sample.fileName === 'valid-heatmap-varicella-cases.csv')

    expect(sample).toEqual(
      expect.objectContaining({
        text: 'HeatMap Data (Synthetic Varicella Cases)',
        data: expect.stringContaining('Month,HHS Region 1,HHS Region 2')
      })
    )
    expect(sample.data).toContain('Apr,55,61,78,69,72,64,58,57,66,50')
  })
})
