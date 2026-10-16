import { render, renderHook, screen } from '@testing-library/react'
import { type ReactNode } from 'react'
import ConfigContext from '../context'
import useApplyTooltipsToGeo from './useApplyTooltipsToGeo'

vi.mock('./../images/external-link.svg', () => ({
  default: ({ className }: { className?: string }) => <svg aria-hidden='true' className={className} />
}))

const createConfig = () => ({
  general: {
    geoType: 'us',
    type: 'map',
    hideGeoColumnInTooltip: false,
    hidePrimaryColumnInTooltip: false,
    geoLabelOverride: '',
    navigationTarget: '_blank'
  },
  columns: {
    geo: {
      name: 'State',
      label: 'Location',
      tooltip: false,
      displayColumn: ''
    },
    primary: {
      name: 'Rate',
      label: 'Rate',
      tooltip: true
    },
    navigate: {
      name: 'Link'
    }
  },
  legend: {
    specialClasses: []
  },
  tooltips: {
    linkLabel: 'Learn More',
    noDataLabel: 'No Data'
  }
})

const createWrapper =
  (config: ReturnType<typeof createConfig>) =>
  ({ children }: { children: ReactNode }) =>
    (
      <ConfigContext.Provider value={{ config, customNavigationHandler: vi.fn() } as any}>
        {children}
      </ConfigContext.Provider>
    )

describe('useApplyTooltipsToGeo', () => {
  it('renders click tooltip PDF navigation links with a bordered PDF badge instead of an icon', () => {
    const row = {
      State: 'AL',
      Rate: 10,
      Link: 'https://example.com/report.pdf'
    }
    const config = createConfig()
    const { result } = renderHook(() => useApplyTooltipsToGeo(), { wrapper: createWrapper(config) })

    const tooltip = result.current.applyTooltipsToGeo('Alabama', row, 'jsx')
    const { container } = render(<>{tooltip}</>)

    expect(screen.getByRole('link', { name: 'Learn More PDF' })).toBeTruthy()
    expect(screen.getByText('Learn More').getAttribute('class')).toContain('navigation-link__label')
    expect(screen.getByText('PDF').getAttribute('class')).toContain('navigation-link__pdf-badge')
    expect(container.querySelector('svg')).toBeNull()
  })

  it('keeps the external link icon for non-PDF external navigation links', () => {
    const row = {
      State: 'AL',
      Rate: 10,
      Link: 'https://example.com/report.html'
    }
    const config = createConfig()
    const { result } = renderHook(() => useApplyTooltipsToGeo(), { wrapper: createWrapper(config) })

    const tooltip = result.current.applyTooltipsToGeo('Alabama', row, 'jsx')
    const { container } = render(<>{tooltip}</>)

    expect(screen.getByRole('link', { name: 'Learn More' })).toBeTruthy()
    expect(screen.queryByText('PDF')).toBeNull()
    expect(container.querySelector('svg.inline-icon')).toBeTruthy()
  })
})
