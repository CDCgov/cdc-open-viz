import { afterEach, describe, expect, it, vi } from 'vitest'
import { addCsvCacheBuster, CSV_CACHE_BUSTER_PARAM } from '../csvCacheBuster'

describe('addCsvCacheBuster', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('adds the cache-busting token without dropping existing query params', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T06:30:00.000Z'))

    const url = new URL(addCsvCacheBuster('https://example.com/data.csv?foo=bar'))
    const expectedToken = `${Math.round(Date.now() / (1000 * 60 * 60 * 6))}`

    expect(url.href).toBe(`https://example.com/data.csv?foo=bar&${CSV_CACHE_BUSTER_PARAM}=${expectedToken}`)
  })

  it('updates an existing cache-busting token instead of adding duplicates', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T12:30:00.000Z'))

    const url = new URL(addCsvCacheBuster('https://example.com/data.csv?cacheBust=old&foo=bar'))

    expect(url.searchParams.getAll(CSV_CACHE_BUSTER_PARAM)).toHaveLength(1)
    expect(url.searchParams.get(CSV_CACHE_BUSTER_PARAM)).toBe(`${Math.round(Date.now() / (1000 * 60 * 60 * 6))}`)
    expect(url.searchParams.get('foo')).toBe('bar')
  })
})
