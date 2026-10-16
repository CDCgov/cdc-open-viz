import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveClass('download-button-link')
    expect(button).toHaveClass('download-link-with-icon')
    expect(button).toHaveTextContent('Download Data (CSV)')
    expect(button.querySelector('.cove-download-link-icon--data')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.queryByRole('link', { name: 'Download this data in a CSV file format.' })).not.toBeInTheDocument()
  })

  it('includes CSV downloads in sequential keyboard focus', async () => {
    render(
      <>
        <a href='#before'>Before</a>
        <DownloadButton
          getRawData={() => []}
          fileName='download.csv'
          config={{
            type: 'chart',
            table: {}
          }}
        />
        <a href='#after'>After</a>
      </>
    )

    await userEvent.tab()
    expect(screen.getByRole('link', { name: 'Before' })).toHaveFocus()

    await userEvent.tab()
    expect(screen.getByRole('button', { name: 'Download this data in a CSV file format.' })).toHaveFocus()

    await userEvent.tab()
    expect(screen.getByRole('link', { name: 'After' })).toHaveFocus()
  })
})
