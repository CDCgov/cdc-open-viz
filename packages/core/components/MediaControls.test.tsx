import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import MediaControls from './MediaControls'

const getDownloadIcon = (element: HTMLElement, type: 'data' | 'image') =>
  element.querySelector(`.cove-download-link-icon--${type}`)

vi.mock('@cdc/core/helpers/prepareScreenshot', () => ({
  prepareScreenshotContainer: vi.fn(() => {
    const container = document.createElement('div')
    container.textContent = 'image content'
    return container
  })
}))

vi.mock('html2canvas', () => ({
  default: vi.fn(() => Promise.resolve({ toDataURL: () => 'data:image/png;base64,test' }))
}))

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
  document.body.innerHTML = ''
})

const clickImageButtonAndWaitForDownload = async (buttonName: string) => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
  vi.setSystemTime(new Date('2026-07-24T12:00:00Z'))
  document.body.querySelectorAll('a[download]').forEach(anchor => anchor.remove())
  const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {})

  const captureTarget = document.createElement('div')
  captureTarget.setAttribute('data-download-id', 'dashboard-download')
  document.body.appendChild(captureTarget)
  fireEvent.click(screen.getByRole('button', { name: buttonName }))

  await waitFor(() => expect(clickSpy).toHaveBeenCalled())

  return document.body.querySelector('a')?.getAttribute('download')
}

describe('MediaControls.Link', () => {
  it('renders a dataset link for standalone url-backed charts', () => {
    render(
      <MediaControls.Link
        config={{
          type: 'chart',
          table: { showDownloadUrl: true },
          dataFileSourceType: 'url',
          dataUrl: '/wcms/vizdata/example.json'
        }}
        interactionLabel='test'
      />
    )

    expect(screen.getByRole('link', { name: 'Link to Dataset' })).toHaveAttribute('href', '/wcms/vizdata/example.json')
  })

  it('renders a dataset link for standalone tables that load from dataUrl', () => {
    render(
      <MediaControls.Link
        config={{
          type: 'table',
          table: { showDownloadUrl: true },
          dataUrl: '/wcms/vizdata/table-data.json'
        }}
        interactionLabel='test'
      />
    )

    expect(screen.getByRole('link', { name: 'Link to Dataset' })).toHaveAttribute(
      'href',
      '/wcms/vizdata/table-data.json'
    )
  })

  it('uses a custom dataset link label when configured', () => {
    render(
      <MediaControls.Link
        config={{
          type: 'chart',
          table: { showDownloadUrl: true, downloadUrlLabel: 'Open Source Data' },
          dataFileSourceType: 'url',
          dataUrl: '/wcms/vizdata/example.json'
        }}
        interactionLabel='test'
      />
    )

    expect(screen.getByRole('link', { name: 'Open Source Data' })).toHaveAttribute('href', '/wcms/vizdata/example.json')
  })

  it('does not render a dataset link for standalone file-backed charts', () => {
    const { container } = render(
      <MediaControls.Link
        config={{
          type: 'chart',
          table: { showDownloadUrl: true },
          dataFileSourceType: 'file',
          dataFileName: 'local.csv'
        }}
        interactionLabel='test'
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('renders dashboard table dataset links from showDatasetLink and dataset metadata', () => {
    render(
      <MediaControls.Link
        config={{
          type: 'table',
          table: { showDatasetLink: true }
        }}
        dashboardDataConfig={{
          dataUrl: 'https://data.cdc.gov/resource/example.json'
        }}
        interactionLabel='test'
      />
    )

    expect(screen.getByRole('link', { name: 'Link to Dataset' })).toHaveAttribute(
      'href',
      'https://data.cdc.gov/resource/example.json'
    )
  })

  it('does not render dashboard table dataset links from showDownloadUrl alone', () => {
    const { container } = render(
      <MediaControls.Link
        config={{
          type: 'table',
          table: { showDownloadUrl: true }
        }}
        dashboardDataConfig={{
          dataUrl: 'https://data.cdc.gov/resource/example.json'
        }}
        interactionLabel='test'
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('preserves dashboard chart/map dataset link behavior', () => {
    render(
      <MediaControls.Link
        config={{
          type: 'chart',
          table: { showDownloadUrl: true }
        }}
        dashboardDataConfig={{
          dataUrl: 'https://data.cdc.gov/resource/example.json'
        }}
        interactionLabel='test'
      />
    )

    expect(screen.getByRole('link', { name: 'Link to Dataset' })).toHaveAttribute(
      'href',
      'https://data.cdc.gov/resource/example.json'
    )
  })
})

describe('MediaControls.Button', () => {
  it('renders dashboard image downloads as native buttons with the default image label', () => {
    render(
      <MediaControls.Button
        state={{ type: 'dashboard', table: {} }}
        type='image'
        title='Download Dashboard as Image'
        elementToCapture='dashboard-download'
      />
    )

    const button = screen.getByRole('button', { name: 'Download Image' })

    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('title', 'Download Dashboard as Image')
    expect(getDownloadIcon(button, 'image')).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Download Image' })).not.toBeInTheDocument()
  })

  it('uses a custom dashboard image download label when configured', () => {
    render(
      <MediaControls.Button
        state={{ type: 'dashboard', table: { downloadImageLabel: 'Save Dashboard PNG' } }}
        type='image'
        title='Download Dashboard as Image'
        elementToCapture='dashboard-download'
      />
    )

    expect(screen.getByRole('button', { name: 'Save Dashboard PNG' })).toBeInTheDocument()
  })

  it('can render dashboard media buttons with link styling while preserving button semantics', () => {
    render(
      <MediaControls.Button
        state={{ type: 'dashboard', table: {} }}
        type='image'
        title='Download Dashboard as Image'
        elementToCapture='dashboard-download'
        appearance='link'
      />
    )

    const button = screen.getByRole('button', { name: 'Download Image' })

    expect(button).toHaveClass('download-button-link')
    expect(button).toHaveClass('no-border')
    expect(button).toHaveClass('download-link-with-icon')
    expect(getDownloadIcon(button, 'image')).toHaveAttribute('aria-hidden', 'true')
    expect(button).not.toHaveClass('btn-primary')
    expect(screen.queryByRole('link', { name: 'Download Image' })).not.toBeInTheDocument()
  })

  it('uses the dashboard title before an image filename fallback', async () => {
    render(
      <MediaControls.Button
        state={{ type: 'dashboard', dashboard: { title: 'Dashboard Title' }, table: {} }}
        type='image'
        title='Download Dashboard as Image'
        elementToCapture='dashboard-download'
        imageFilenameFallback='table-report'
      />
    )

    await expect(clickImageButtonAndWaitForDownload('Download Image')).resolves.toBe('dashboard-title-2026-07-24.png')
  })

  it('uses an image filename fallback when no title source exists', async () => {
    render(
      <MediaControls.Button
        state={{ type: 'dashboard', table: {} }}
        type='image'
        title='Download Dashboard as Image'
        elementToCapture='dashboard-download'
        imageFilenameFallback='table-report'
      />
    )

    await expect(clickImageButtonAndWaitForDownload('Download Image')).resolves.toBe('table-report-2026-07-24.png')
  })

  it('keeps the no-title image filename fallback when no title or fallback exists', async () => {
    render(
      <MediaControls.Button
        state={{ type: 'dashboard', table: {} }}
        type='image'
        title='Download Dashboard as Image'
        elementToCapture='dashboard-download'
      />
    )

    await expect(clickImageButtonAndWaitForDownload('Download Image')).resolves.toBe('no-title.png')
  })
})

describe('MediaControls.DownloadLink', () => {
  it('renders a decorative image icon for image download links', () => {
    render(
      <MediaControls.DownloadLink
        state={{ type: 'chart', table: {} }}
        type='image'
        title='Download Chart as Image'
        elementToCapture='chart-download'
      />
    )

    const link = screen.getByRole('button', { name: 'Download Chart as Image' })

    expect(link).toHaveClass('download-link-with-icon')
    expect(getDownloadIcon(link, 'image')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('Download Chart (PNG)')).toBeInTheDocument()
  })

  it('does not render an icon for PDF download links', () => {
    render(
      <MediaControls.DownloadLink
        state={{ type: 'chart', table: {} }}
        type='pdf'
        title='Download Chart as PDF'
        elementToCapture='chart-download'
      />
    )

    const link = screen.getByRole('button', { name: 'Download Chart as PDF' })

    expect(link).not.toHaveClass('download-link-with-icon')
    expect(getDownloadIcon(link, 'image')).not.toBeInTheDocument()
    expect(screen.getByText('Download Chart (PDF)')).toBeInTheDocument()
  })
})
