import path from 'node:path'
import fs from 'node:fs'
import vm from 'node:vm'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { testStandaloneBuild } from '@cdc/core/helpers/tests/testStandaloneBuild.ts'
import { describe, it, expect, vi } from 'vitest'
import CdcMarkupInclude from '../CdcMarkupInclude'

vi.mock('@cdc/core/components/EditorPanel/components/MarkupVariablesEditor', () => ({
  default: ({ data }) => <div data-testid='markup-variables-editor-data'>{JSON.stringify(data)}</div>
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

  it('uses dashboard rawData for markup variable editor choices when editing', async () => {
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

    expect(JSON.parse((await screen.findByTestId('markup-variables-editor-data')).textContent)).toEqual(fullData)
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
