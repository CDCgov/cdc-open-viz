import path from 'node:path'
import fs from 'node:fs'
import vm from 'node:vm'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { testStandaloneBuild } from '@cdc/core/helpers/tests/testStandaloneBuild.ts'
import { afterEach, describe, it, expect, vi } from 'vitest'
import CdcMarkupInclude from '../CdcMarkupInclude'

vi.mock('@cdc/core/components/EditorPanel/components/MarkupVariablesEditor', () => ({
  default: ({ data, editorData }) => (
    <div>
      <div data-testid='markup-variables-editor-data'>{JSON.stringify(data)}</div>
      <div data-testid='markup-variables-editor-editor-data'>{JSON.stringify(editorData)}</div>
    </div>
  )
}))

afterEach(() => {
  vi.restoreAllMocks()
})

const dataSourceConfig = {
  type: 'markup-include',
  theme: 'theme-blue',
  enableMarkupVariables: true,
  markupVariables: [
    { name: 'Value', tag: '{{value}}', columnName: 'value', selectionMode: 'first', conditions: [] },
    { sourceType: 'metadata', name: 'Source', tag: '{{source}}', metadataKey: 'source', conditions: [] }
  ],
  contentEditor: {
    title: 'Updated {{source}}',
    inlineHTML: '<p>Value {{value}}; source {{source}}</p>',
    useInlineHTML: true,
    srcUrl: ''
  }
}

const extractMarkedExampleConfig = (content, label) => {
  const match = content.match(
    /<!-- README_EXAMPLE_CONFIG_START -->\s*```jsx\s*([\s\S]*?)\s*```\s*<!-- README_EXAMPLE_CONFIG_END -->/
  )
  expect(match, `${label} should contain a marked README example block`).toBeTruthy()
  const configMatch = match[1].match(/const config = (\{[\s\S]*?\})\n\nfunction App\(\)/)
  expect(configMatch, `${label} should define const config before function App()`).toBeTruthy()
  return vm.runInNewContext(`(${configMatch[1]})`)
}

describe('Markup Include', () => {
  it.each([{ data: [{ value: 1 }], dataMetadata: { source: 'Cached file' } }, { data: [], dataMetadata: {} }, {}])(
    'renders fetched rows and metadata instead of the inline snapshot %j',
    async snapshot => {
      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
        ok: true,
        json: async () => ({ data: [{ value: 42 }], source: 'Fresh file' })
      })
      const config = { ...dataSourceConfig, ...snapshot, dataUrl: '/markup-data.json' }
      const originalConfig = JSON.parse(JSON.stringify(config))

      const { rerender } = render(<CdcMarkupInclude config={config} datasets={{}} />)

      expect(await screen.findByText('Value 42; source Fresh file')).toBeInTheDocument()
      expect(screen.getByText('Updated Fresh file')).toBeInTheDocument()
      expect(fetchSpy).toHaveBeenCalledTimes(1)
      expect(config).toEqual(originalConfig)

      rerender(<CdcMarkupInclude config={JSON.parse(JSON.stringify(config))} datasets={{}} />)

      expect(screen.getByText('Value 42; source Fresh file')).toBeInTheDocument()
      expect(fetchSpy).toHaveBeenCalledTimes(1)
    }
  )

  it('does not retain snapshot metadata when the URL response has none', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, json: async () => [{ value: 42 }] })

    render(
      <CdcMarkupInclude
        config={{ ...dataSourceConfig, dataUrl: '/markup-data.json', dataMetadata: { source: 'Cached file' } }}
        datasets={{}}
      />
    )

    expect(await screen.findByText('Value 42; source')).toBeInTheDocument()
    expect(screen.queryByText(/Cached file/)).not.toBeInTheDocument()
  })

  it('uses the load-once snapshot without fetching its original source URL', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch')

    render(
      <CdcMarkupInclude
        config={{
          ...dataSourceConfig,
          data: [{ value: 1 }],
          dataMetadata: { source: 'Imported file' },
          dataFileName: '/markup-data.json',
          dataFileSourceType: 'url'
        }}
        datasets={{}}
      />
    )

    expect(await screen.findByText('Value 1; source Imported file')).toBeInTheDocument()
    expect(screen.getByText('Updated Imported file')).toBeInTheDocument()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('follows dashboard row and metadata updates without fetching', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    const config = { ...dataSourceConfig, data: [{ value: 1 }], dataMetadata: { source: 'First file' } }
    const { rerender } = render(<CdcMarkupInclude config={config} datasets={{}} isDashboard={true} />)

    expect(await screen.findByText('Value 1; source First file')).toBeInTheDocument()

    rerender(
      <CdcMarkupInclude
        config={{ ...config, data: [{ value: 42 }], dataMetadata: { source: 'Next file' } }}
        datasets={{}}
        isDashboard={true}
      />
    )

    expect(screen.getByText('Value 42; source Next file')).toBeInTheDocument()
    expect(screen.getByText('Updated Next file')).toBeInTheDocument()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('keeps dashboard rows and metadata authoritative when dataUrl is present', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ data: [{ value: 99 }], source: 'Remote file' })
    })
    const config = {
      ...dataSourceConfig,
      dataUrl: '/markup-data.json',
      data: [{ value: 1 }],
      dataMetadata: { source: 'Dashboard file' }
    }
    const { rerender } = render(<CdcMarkupInclude config={config} datasets={{}} isDashboard={true} />)

    expect(await screen.findByText('Value 1; source Dashboard file')).toBeInTheDocument()
    expect(screen.getByText('Updated Dashboard file')).toBeInTheDocument()
    expect(fetchSpy).toHaveBeenCalledTimes(1)

    rerender(
      <CdcMarkupInclude
        config={{ ...config, data: [{ value: 42 }], dataMetadata: { source: 'Filtered dashboard file' } }}
        datasets={{}}
        isDashboard={true}
      />
    )

    expect(screen.getByText('Value 42; source Filtered dashboard file')).toBeInTheDocument()
    expect(screen.getByText('Updated Filtered dashboard file')).toBeInTheDocument()
    expect(screen.queryByText(/Remote file/)).not.toBeInTheDocument()
    expect(fetchSpy).toHaveBeenCalledTimes(1)
  })

  it('Can be built in isolation', async () => {
    const pkgDir = path.join(__dirname, '..')
    const result = await testStandaloneBuild(pkgDir)
    expect(result).toBe(true)
  }, 300000)

  it('does not apply legacy visual decoration classes to TP5 markup includes', async () => {
    const { container } = render(
      <CdcMarkupInclude
        config={{
          type: 'markup-include',
          theme: 'theme-blue',
          contentEditor: { style: 'tp5', title: 'Test title', inlineHTML: '<p>Example</p>', useInlineHTML: true },
          visual: {
            border: true,
            borderColorTheme: true,
            accent: true,
            background: true,
            hideBackgroundColor: true
          }
        }}
        datasets={{}}
      />
    )

    await waitFor(() => expect(container.querySelector('.markup-include-component--tp5')).toBeInTheDocument())

    const body = container.querySelector('.markup-include-component--tp5')
    expect(body).not.toHaveClass('component--has-legacy-border')
    expect(body).not.toHaveClass('component--has-border-color-theme')
    expect(body).not.toHaveClass('component--has-accent')
    expect(body).not.toHaveClass('component--has-background')
    expect(body).not.toHaveClass('component--hide-background-color')
  })

  it('uses dashboard rawData for markup variable editor choices while preserving render data when editing', async () => {
    const filteredData = [{ category: 'Filtered only' }]
    const fullData = [{ category: 'Value A' }, { category: 'Value B' }]

    render(
      <CdcMarkupInclude
        config={{
          type: 'markup-include',
          theme: 'theme-blue',
          dataKey: 'test-dataset',
          data: filteredData,
          markupVariables: [],
          contentEditor: {
            title: '',
            inlineHTML: '<p>Example</p>',
            useInlineHTML: true,
            srcUrl: ''
          },
          visual: {
            border: false,
            accent: false,
            background: false,
            hideBackgroundColor: false,
            borderColorTheme: false
          }
        }}
        datasets={{
          'test-dataset': {
            data: [{ category: 'Dataset fallback' }]
          }
        }}
        rawData={fullData}
        isDashboard={true}
        isEditor={true}
      />
    )

    expect(
      JSON.parse((await screen.findByTestId('markup-variables-editor-data', {}, { timeout: 5000 })).textContent)
    ).toEqual(filteredData)
    expect(JSON.parse((await screen.findByTestId('markup-variables-editor-editor-data')).textContent)).toEqual(fullData)
  })

  it('does not render the visualization filters section when every markup include filter is hidden', async () => {
    const { container } = render(
      <CdcMarkupInclude
        config={{
          type: 'markup-include',
          theme: 'theme-blue',
          data: [{ state: 'Alabama' }],
          filters: [
            {
              columnName: 'state',
              values: ['Alabama'],
              showDropdown: false,
              id: 1,
              parents: [],
              active: 'Alabama',
              filterStyle: 'dropdown',
              label: 'State',
              order: 'asc',
              type: 'url'
            }
          ],
          markupVariables: [],
          contentEditor: {
            title: '',
            inlineHTML: '<p>Example</p>',
            useInlineHTML: true,
            srcUrl: ''
          },
          visual: {
            border: false,
            accent: false,
            background: false,
            hideBackgroundColor: false,
            borderColorTheme: false
          }
        }}
        datasets={{}}
        isDashboard={true}
      />
    )

    await waitFor(() => expect(container.querySelector('.markup-include-content-container')).toBeInTheDocument())

    expect(container.querySelector('.cove-visualization__filters-section')).not.toBeInTheDocument()
  })

  it('updates metadata-backed markup variables when dataMetadata changes and data does not', async () => {
    const data = [{ value: 1 }]
    const config = {
      type: 'markup-include',
      theme: 'theme-blue',
      data,
      dataMetadata: {},
      enableMarkupVariables: true,
      markupVariables: [
        {
          sourceType: 'metadata',
          name: 'Source',
          tag: '{{source}}',
          metadataKey: 'source',
          conditions: [],
          addCommas: false
        }
      ],
      contentEditor: {
        title: 'Updated {{source}}',
        inlineHTML: '<p>Markup {{source}}</p>',
        useInlineHTML: true,
        srcUrl: ''
      },
      visual: {
        border: false,
        accent: false,
        background: false,
        hideBackgroundColor: false,
        borderColorTheme: false
      }
    }

    const { rerender } = render(<CdcMarkupInclude config={config} datasets={{}} isDashboard={true} />)

    await waitFor(() => expect(screen.getByText('Markup')).toBeInTheDocument())

    rerender(
      <CdcMarkupInclude
        config={{
          ...config,
          dataMetadata: { source: 'June file' }
        }}
        datasets={{}}
        isDashboard={true}
      />
    )

    expect(await screen.findByText('Markup June file')).toBeInTheDocument()
    expect(screen.getByText('Updated June file')).toBeInTheDocument()
  })

  it('keeps included bootstrap column markup inside the shared content section', async () => {
    const { container } = render(
      <CdcMarkupInclude
        config={{
          type: 'markup-include',
          theme: 'theme-blue',
          markupVariables: [],
          contentEditor: {
            title: 'Grid mock',
            inlineHTML: `
              <div class="row">
                <div class="col-8"><p>Primary content</p></div>
                <div class="col-3"><p>Secondary content</p></div>
              </div>
            `,
            useInlineHTML: true,
            srcUrl: ''
          },
          visual: {
            border: false,
            accent: false,
            background: false,
            hideBackgroundColor: false,
            borderColorTheme: false
          }
        }}
        datasets={{}}
        isDashboard={true}
      />
    )

    await waitFor(() => expect(container.querySelector('.markup-include-content-container')).toBeInTheDocument())

    const shell = container.querySelector('.cove-visualization.type-markup-include')
    const contentSection = container.querySelector('.cove-visualization__content-section')
    const primaryColumn = container.querySelector('.col-8')
    const secondaryColumn = container.querySelector('.col-3')

    expect(shell).toBeInTheDocument()
    expect(contentSection).toBeInTheDocument()
    expect(primaryColumn).toBeInTheDocument()
    expect(secondaryColumn).toBeInTheDocument()
    expect(primaryColumn?.closest('.cove-visualization__content-section')).toBe(contentSection)
    expect(secondaryColumn?.closest('.cove-visualization__content-section')).toBe(contentSection)
    expect(primaryColumn?.parentElement).not.toBe(shell)
    expect(secondaryColumn?.parentElement).not.toBe(shell)
  })

  it('keeps the minimal example in sync with the README docs', () => {
    const pkgRoot = path.join(__dirname, '..', '..')
    const minimalExamplePath = path.join(pkgRoot, 'examples', 'minimal-example.json')
    const readmePath = path.join(pkgRoot, 'README.md')

    const minimalExample = JSON.parse(fs.readFileSync(minimalExamplePath, 'utf8'))
    const readmeBlock = extractMarkedExampleConfig(fs.readFileSync(readmePath, 'utf8'), 'README.md')

    expect(readmeBlock).toEqual(minimalExample)
    expect(minimalExample.version).toBeTruthy()
  })
})
