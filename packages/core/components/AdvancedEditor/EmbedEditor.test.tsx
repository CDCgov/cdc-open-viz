import React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { getWcmsPermalinkState } from './EmbedEditor'

vi.mock('../elements/Button', () => ({
  default: ({ children, ...props }) => <button {...props}>{children}</button>
}))

vi.mock('../../helpers/embed/embedHelper.js', () => ({}))

const setInput = (id: string, value: string) => {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  document.body.appendChild(input)
}

describe('EmbedEditor', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.unstubAllGlobals()
  })

  it('uses the WCMS permalink pathname when the permalink is available', () => {
    const anchor = document.createElement('a')
    anchor.id = 'sample-permalink'
    anchor.href = 'https://wcms-wp.cdc.gov/data-viz-sandbox/example/chart.json'
    document.body.appendChild(anchor)

    expect(getWcmsPermalinkState()).toEqual({
      status: 'available',
      configUrl: '/data-viz-sandbox/example/chart.json'
    })
  })

  it('identifies auto-draft visualizations without a permalink as unsaved', () => {
    setInput('original_post_status', 'auto-draft')

    expect(getWcmsPermalinkState()).toEqual({
      status: 'unsaved',
      configUrl: null
    })
  })

  it('identifies saved visualizations without a permalink as missing the permalink', () => {
    setInput('original_post_status', 'publish')

    expect(getWcmsPermalinkState()).toEqual({
      status: 'missing-permalink',
      configUrl: null
    })
  })

  it('falls back to the parent document permalink when the editor is embedded in an iframe', () => {
    const parentDocument = document.implementation.createHTMLDocument('Parent WCMS page')
    const anchor = parentDocument.createElement('a')
    anchor.id = 'sample-permalink'
    anchor.href = 'https://wcms-wp.cdc.gov/data-viz-sandbox/parent/chart.json'
    parentDocument.body.appendChild(anchor)

    vi.stubGlobal('parent', {
      document: parentDocument
    })

    expect(getWcmsPermalinkState()).toEqual({
      status: 'available',
      configUrl: '/data-viz-sandbox/parent/chart.json'
    })
  })
})
