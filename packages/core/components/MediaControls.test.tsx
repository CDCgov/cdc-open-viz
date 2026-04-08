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

  it('preserves dashboard dataset link behavior', () => {
    render(
      <MediaControls.Link
        config={{
          type: 'dashboard',
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
