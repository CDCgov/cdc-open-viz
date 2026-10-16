import { fireEvent, render, screen } from '@testing-library/react'
import mapCellMatrix from '../mapCellMatrix'

const renderGeography = (type: string, enabled: boolean, target: '_self' | '_blank') => {
  const navigate = vi.fn()
  const columns = { geo: { name: 'State', dataTable: true }, navigate: { name: 'URL' } }
  const config = {
    type,
    general: { type: 'data', geoType: 'us', navigationTarget: target },
    columns,
    locationLinks: { enableDataTableLinks: enabled }
  }
  const matrix = mapCellMatrix({
    mapLinkSettings: type === 'map' ? { enabled, target } : undefined,
    rows: ['US-AL'],
    columns,
    config,
    runtimeData: { 'US-AL': { State: 'AL', URL: '/al' } },
    displayGeoName: () => 'Alabama',
    formatLegendLocation: () => 'Alabama',
    navigationHandler: navigate,
    legendMemo: { current: { has: () => true } },
    legendSpecialClassLastMemo: { current: {} },
    applyLegendToRow: () => ['#123456'],
    getPatternForRow: () => null,
    runtimeLegend: {}
  } as any)
  render(<>{matrix[0][0]}</>)
  return navigate
}

describe('map table location links integration', () => {
  it.each(['_self', '_blank'])('passes Data-map target %s for mouse and Enter', target => {
    const navigate = renderGeography('map', true, target)
    const link = screen.getByRole('link')
    fireEvent.click(link)
    fireEvent.keyDown(link, { key: 'Enter' })
    expect(navigate.mock.calls).toEqual([
      [target, '/al'],
      [target, '/al']
    ])
  })
  it('renders geography without a URL link when disabled', () => {
    renderGeography('map', false, '_self')
    expect(screen.getByText('Alabama')).toBeInTheDocument()
    expect(screen.queryByRole('link')).toBeNull()
  })
  it('keeps other table consumers enabled with the existing default target', () => {
    const navigate = renderGeography('chart', false, '_self')
    fireEvent.click(screen.getByRole('link'))
    expect(navigate).toHaveBeenCalledWith('_blank', '/al')
  })
})
