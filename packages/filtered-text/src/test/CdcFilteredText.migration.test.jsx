import React from 'react'
import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import CdcFilteredText from '../CdcFilteredText'
import defaults from '../data/initial-state'

describe('CdcFilteredText migration handoff', () => {
  beforeEach(() => {
    vi.spyOn(console, 'info').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('migrates unversioned standalone filtered-text configs before rendering', () => {
    const result = coveUpdateWorker({
      ...defaults,
      type: 'filtered-text',
      textColumn: 'Message',
      filters: [{ columnName: 'State', columnValue: 'CA' }],
      data: [{ State: 'CA', Message: 'Migrated text' }]
    })

    expect(result.type).toBe('markup-include')
  })

  it('fails clearly after standalone filtered-text configs migrate to markup-include', async () => {
    render(
      <CdcFilteredText
        isEditor={true}
        config={{
          type: 'filtered-text',
          textColumn: 'Message',
          title: 'Legacy Text',
          filters: [{ columnName: 'State', columnValue: 'CA' }],
          data: [{ State: 'CA', Message: 'Migrated text' }]
        }}
      />
    )

    const message = await screen.findByTestId('filtered-text-migrated-message')

    expect(message).toHaveTextContent('Filtered Text Has Been Migrated')
    expect(message).toHaveTextContent('Use the markup-include package to render this visualization.')
  })
})
