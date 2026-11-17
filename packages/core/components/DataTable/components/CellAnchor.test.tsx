import { fireEvent, render, screen } from '@testing-library/react'
import CellAnchor from './CellAnchor'

describe('CellAnchor', () => {
  it.each(['_self', '_blank'])('uses identical mouse and Enter navigation for %s', navigationTarget => {
    const navigate = vi.fn()
    render(
      <CellAnchor
        markup='Alabama'
        row={{ URL: '/al' }}
        columns={{ navigate: { name: 'URL' } }}
        navigationHandler={navigate}
        mapZoomHandler={undefined}
        navigationTarget={navigationTarget}
      />
    )
    const link = screen.getByRole('link')
    fireEvent.click(link)
    fireEvent.keyDown(link, { key: 'Enter', keyCode: 13 })
    expect(navigate.mock.calls).toEqual([
      [navigationTarget, '/al'],
      [navigationTarget, '/al']
    ])
    expect(link.title.includes('new window')).toBe(navigationTarget === '_blank')
  })
  it('retains zoom fallback when URL navigation is disabled', () => {
    const navigate = vi.fn(),
      zoom = vi.fn()
    render(
      <CellAnchor
        markup='Alabama'
        row={{ URL: '/al' }}
        columns={{ navigate: { name: 'URL' } }}
        navigationHandler={navigate}
        mapZoomHandler={zoom}
        linksEnabled={false}
      />
    )
    fireEvent.click(screen.getByRole('link'))
    expect(zoom).toHaveBeenCalledOnce()
    expect(navigate).not.toHaveBeenCalled()
  })
  it('preserves default target for other consumers', () => {
    const navigate = vi.fn()
    render(
      <CellAnchor
        markup='Alabama'
        row={{ URL: '/al' }}
        columns={{ navigate: { name: 'URL' } }}
        navigationHandler={navigate}
        mapZoomHandler={undefined}
      />
    )
    fireEvent.click(screen.getByRole('link'))
    expect(navigate).toHaveBeenCalledWith('_blank', '/al')
  })
})
