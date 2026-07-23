import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import DownloadButton from './DownloadButton'

describe('DownloadButton', () => {
  it('renders the CSV download label with a decorative data icon', () => {
    render(
      <DownloadButton
        getRawData={() => []}
        fileName='download.csv'
        config={{
          type: 'chart',
          table: {}
        }}
      />
    )

    const button = screen.getByRole('button', { name: 'Download this data in a CSV file format.' })

    expect(button).toHaveClass('download-link-with-icon')
    expect(button).toHaveTextContent('Download Data (CSV)')
    expect(button.querySelector('.cove-download-link-icon--data')).toHaveAttribute('aria-hidden', 'true')
  })
})
