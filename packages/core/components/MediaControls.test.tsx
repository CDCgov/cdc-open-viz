import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MediaControls from './MediaControls'

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
    expect(button).not.toHaveClass('btn-primary')
    expect(screen.queryByRole('link', { name: 'Download Image' })).not.toBeInTheDocument()
  })
})
