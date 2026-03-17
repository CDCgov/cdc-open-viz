import path from 'node:path'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { testStandaloneBuild } from '@cdc/core/helpers/tests/testStandaloneBuild.ts'
import { describe, it, expect } from 'vitest'
import CdcDataBite from '../CdcDataBite'

describe('Data Bite', () => {
  it('Can be built in isolation', async () => {
    const pkgDir = path.join(__dirname, '..')
    const result = await testStandaloneBuild(pkgDir)
    expect(result).toBe(true)
  }, 300000)

  it('renders when config.general is omitted', async () => {
    render(
      <CdcDataBite
        config={{
          type: 'data-bite',
          theme: 'theme-blue',
          title: 'Test title',
          biteBody: 'Test body',
          subtext: 'Test subtext',
          data: []
        }}
      />
    )

    expect(await screen.findByText('Test body')).toBeInTheDocument()
    expect(screen.getByText('Test subtext')).toBeInTheDocument()
  })
})
