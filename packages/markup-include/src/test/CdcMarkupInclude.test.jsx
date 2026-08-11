import path from 'node:path'
import fs from 'node:fs'
import vm from 'node:vm'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { testStandaloneBuild } from '@cdc/core/helpers/tests/testStandaloneBuild.ts'
import { describe, it, expect, vi } from 'vitest'
import CdcMarkupInclude from '../CdcMarkupInclude'

vi.mock('@cdc/core/components/EditorPanel/components/MarkupVariablesEditor', () => ({
  default: ({ data, editorData }) => (
    <div>
      <div data-testid='markup-variables-editor-data'>{JSON.stringify(data)}</div>
      <div data-testid='markup-variables-editor-editor-data'>{JSON.stringify(editorData)}</div>
    </div>
  )
}))

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
  it('Can be built in isolation', async () => {
    const pkgDir = path.join(__dirname, '..')
    const result = await testStandaloneBuild(pkgDir)
    expect(result).toBe(true)
  }, 300000)

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

    expect(JSON.parse((await screen.findByTestId('markup-variables-editor-data')).textContent)).toEqual(filteredData)
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

  it('adds shared TP5 dashboard classes only for TP5 markup includes', async () => {
    const baseConfig = {
      type: 'markup-include',
      theme: 'theme-blue',
      markupVariables: [],
      contentEditor: {
        title: 'TP5 Markup',
        inlineHTML: '<p>Example</p>',
        useInlineHTML: true,
        srcUrl: '',
        style: 'tp5'
      },
      visual: {
        border: false,
        accent: false,
        background: false,
        hideBackgroundColor: false,
        borderColorTheme: false
      },
      tp5Visual: {
        calloutStyle: 'thin-border',
        colorTheme: 'blue'
      }
    }

    const { container, unmount } = render(<CdcMarkupInclude config={baseConfig} datasets={{}} isDashboard={true} />)

    await waitFor(() => expect(container.querySelector('.markup-include-component')).toBeInTheDocument())

    expect(container.querySelector('.cove-visualization__body')).toHaveClass('tp5-dashboard-component')
    expect(container.querySelector('.cove-visualization__body')).toHaveClass('tp5-dashboard-component--markup-include')
    expect(container.querySelector('.cove-visualization__body')).not.toHaveClass('markup-include__style--tp5')
    expect(container.querySelector('.cove-visualization__body')).toHaveClass('tp5-dashboard-component--thin-border')
    expect(container.querySelector('.cove-visualization__body')).toHaveClass('tp5-dashboard-component--theme-blue')
    expect(container.querySelector('.markup-include-tp5')).not.toHaveAttribute('style')

    unmount()
    const dropShadowRender = render(
      <CdcMarkupInclude
        config={{
          ...baseConfig,
          tp5Visual: {
            ...baseConfig.tp5Visual,
            calloutStyle: 'drop-shadow',
            accentPosition: 'top'
          }
        }}
        datasets={{}}
        isDashboard={true}
      />
    )

    await waitFor(() => {
      expect(dropShadowRender.container.querySelector('.cove-visualization__body')).toHaveClass(
        'tp5-dashboard-component--drop-shadow',
        'tp5-dashboard-component--accent-top'
      )
      expect(dropShadowRender.container.querySelector('.markup-include-tp5')).not.toHaveClass('cdc-callout--data')
      expect(dropShadowRender.container.querySelector('.markup-include-tp5')).not.toHaveClass('dfe-block')
      expect(dropShadowRender.container.querySelector('.cdc-callout__flag')).not.toBeInTheDocument()
    })

    dropShadowRender.unmount()
    const leftDropShadowRender = render(
      <CdcMarkupInclude
        config={{
          ...baseConfig,
          tp5Visual: {
            ...baseConfig.tp5Visual,
            calloutStyle: 'drop-shadow',
            accentPosition: 'left'
          }
        }}
        datasets={{}}
        isDashboard={true}
      />
    )

    await waitFor(() => {
      expect(leftDropShadowRender.container.querySelector('.cove-visualization__body')).toHaveClass(
        'tp5-dashboard-component--drop-shadow',
        'tp5-dashboard-component--accent-left'
      )
    })

    leftDropShadowRender.unmount()
    const nonTp5Render = render(
      <CdcMarkupInclude
        config={{
          ...baseConfig,
          contentEditor: {
            ...baseConfig.contentEditor,
            style: 'default'
          }
        }}
        datasets={{}}
        isDashboard={true}
      />
    )

    await waitFor(() => expect(nonTp5Render.container.querySelector('.markup-include-component')).toBeInTheDocument())

    expect(nonTp5Render.container.querySelector('.cove-visualization__body')).not.toHaveClass('tp5-dashboard-component')
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
