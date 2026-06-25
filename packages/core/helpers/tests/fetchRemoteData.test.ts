import { afterEach, describe, expect, it, vi } from 'vitest'
import fetchRemoteData from '../fetchRemoteData'

describe('fetchRemoteData', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('adds a cache-busting query param to csv requests', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T06:30:00.000Z'))
    const fetchMock = vi.fn().mockResolvedValue({
      text: () => Promise.resolve('name|value\nAlpha|1')
    })
    vi.stubGlobal('fetch', fetchMock)

    const result = await fetchRemoteData('https://example.com/data.csv?foo=bar')
    const expectedToken = Math.round(Date.now() / (1000 * 60 * 60 * 6))

    expect(fetchMock).toHaveBeenCalledWith(`https://example.com/data.csv?foo=bar&cacheBust=${expectedToken}`)
    expect(result).toEqual({
      data: [{ name: 'Alpha', value: '1' }],
      dataMetadata: {}
    })
  })

  it('adds a cache-busting query param to uppercase csv extension requests', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T06:30:00.000Z'))
    const fetchMock = vi.fn().mockResolvedValue({
      text: () => Promise.resolve('name|value\nAlpha|1')
    })
    vi.stubGlobal('fetch', fetchMock)

    await fetchRemoteData('https://example.com/data.CSV?foo=bar')

    const requestedUrl = new URL(fetchMock.mock.calls[0][0])
    expect(requestedUrl.searchParams.get('cacheBust')).toBe(`${Math.round(Date.now() / (1000 * 60 * 60 * 6))}`)
  })

  it('adds a cache-busting query param to Solr csv requests', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T06:30:00.000Z'))
    const fetchMock = vi.fn().mockResolvedValue({
      text: () => Promise.resolve('name|value\nAlpha|1')
    })
    vi.stubGlobal('fetch', fetchMock)

    await fetchRemoteData('https://example.com/solr/select?wt=csv&q=*:*')

    const requestedUrl = new URL(fetchMock.mock.calls[0][0])
    expect(requestedUrl.searchParams.get('wt')).toBe('csv')
    expect(requestedUrl.searchParams.get('cacheBust')).toBe(`${Math.round(Date.now() / (1000 * 60 * 60 * 6))}`)
  })

  it('does not add cache-busting query params to json requests', async () => {
    const responseJson = [{ name: 'Alpha' }]
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(responseJson)
    })
    vi.stubGlobal('fetch', fetchMock)

    const result = await fetchRemoteData('https://example.com/data.json?foo=bar')

    expect(fetchMock).toHaveBeenCalledWith('https://example.com/data.json?foo=bar')
    expect(result).toEqual({
      data: responseJson,
      dataMetadata: {}
    })
  })
})
