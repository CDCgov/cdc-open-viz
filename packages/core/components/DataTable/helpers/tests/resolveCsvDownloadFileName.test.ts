import { describe, expect, it } from 'vitest'
import { resolveCsvDownloadFileName } from '../resolveCsvDownloadFileName'

describe('resolveCsvDownloadFileName', () => {
  it('uses the explicit table download filename first', () => {
    expect(
      resolveCsvDownloadFileName({
        config: {
          table: { downloadFileName: 'custom-report' },
          dataFileName: 'source.json'
        },
        vizTitle: 'Chart Title'
      })
    ).toBe('custom-report.csv')
  })

  it('normalizes explicit non-csv extensions to csv', () => {
    expect(
      resolveCsvDownloadFileName({
        config: {
          table: { downloadFileName: 'custom-report.json' }
        }
      })
    ).toBe('custom-report.csv')
  })

  it('sanitizes explicit filenames without treating them as paths', () => {
    expect(
      resolveCsvDownloadFileName({
        config: {
          table: { downloadFileName: 'Cases / Deaths' }
        }
      })
    ).toBe('Cases - Deaths.csv')

    expect(
      resolveCsvDownloadFileName({
        config: {
          table: { downloadFileName: 'COVID-19: Weekly Report' }
        }
      })
    ).toBe('COVID-19- Weekly Report.csv')

    expect(
      resolveCsvDownloadFileName({
        config: {
          table: { downloadFileName: 'Health\\Safety' }
        }
      })
    ).toBe('Health-Safety.csv')
  })

  it('derives the filename from dashboard dataset runtime URLs', () => {
    expect(
      resolveCsvDownloadFileName({
        config: { dataFileName: 'stale-source.json' },
        dataConfig: {
          runtimeDataUrl: 'https://www.cdc.gov/wcms/vizdata/current-source.json?cache=1'
        },
        vizTitle: 'Map Title'
      })
    ).toBe('current-source.csv')
  })

  it('derives the filename from dashboard dataset source URLs when runtime URLs are absent', () => {
    expect(
      resolveCsvDownloadFileName({
        dataConfig: {
          dataUrl: '/wcms/vizdata/abc.json'
        },
        vizTitle: 'Data Table'
      })
    ).toBe('abc.csv')
  })

  it('derives the filename from standalone visualization data file metadata', () => {
    expect(
      resolveCsvDownloadFileName({
        config: {
          dataFileName: '../../wcms/vizdata/NCEZID_DIDRI/NWSSStateMap.json'
        }
      })
    ).toBe('NWSSStateMap.csv')
  })

  it('supports extensionless API URLs', () => {
    expect(
      resolveCsvDownloadFileName({
        dataConfig: {
          dataUrl: 'https://data.cdc.gov/resource/example?wt=json'
        }
      })
    ).toBe('example.csv')
  })

  it('skips source URLs that do not include a path segment', () => {
    expect(
      resolveCsvDownloadFileName({
        dataConfig: {
          runtimeDataUrl: 'https://data.cdc.gov?wt=json',
          dataFileName: 'fallback-source.json'
        },
        vizTitle: 'Download Test'
      })
    ).toBe('fallback-source.csv')

    expect(
      resolveCsvDownloadFileName({
        dataConfig: {
          dataUrl: 'https://data.cdc.gov?wt=json'
        },
        vizTitle: 'Download Test'
      })
    ).toBe('Download Test.csv')
  })

  it('falls back to the visualization title', () => {
    expect(resolveCsvDownloadFileName({ vizTitle: 'Download Test' })).toBe('Download Test.csv')
  })

  it('preserves punctuation in visualization titles', () => {
    expect(resolveCsvDownloadFileName({ vizTitle: 'COVID-19. Weekly Report' })).toBe(
      'COVID-19. Weekly Report.csv'
    )
  })

  it('sanitizes visualization titles without treating them as URLs', () => {
    expect(resolveCsvDownloadFileName({ vizTitle: 'COVID? Weekly' })).toBe('COVID- Weekly.csv')
    expect(resolveCsvDownloadFileName({ vizTitle: 'Category #1' })).toBe('Category #1.csv')
  })

  it('falls back to data-table when no source name exists', () => {
    expect(resolveCsvDownloadFileName({})).toBe('data-table.csv')
  })
})
