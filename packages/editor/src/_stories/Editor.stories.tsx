import { Meta, StoryObj } from '@storybook/react-vite'
import CdcEditor from '../CdcEditor'
import { within, userEvent, expect } from 'storybook/test'
import ChartEditorConfig from '../../../chart/src/_stories/_mock/editor-tests/bar-chart-editor-test.json'
import MapConfig from '../../../map/src/_stories/_mock/default-patterns.json'
import DashboardConfig from '../../../dashboard/src/_stories/_mock/dashboard_no_filter.json'
import DataTableConfig from '../../../data-table/examples/data-table-example.json'

const DATA_TABLE_EDITOR_CONFIG = {
  ...(() => {
    const { dataUrl, ...configWithoutDataUrl } = DataTableConfig
    return configWithoutDataUrl
  })(),
  data: [
    {
      week_end: '2025-10-04',
      new_admissions_100k_currentweek: '0.29',
      percent_hospitals_reporting: '90.88',
      geography: 'United States',
      pathogen: 'Influenza',
      reporting_above_80_percent: 'True'
    }
  ],
  filters: []
}

const FILE_BACKED_CHART_CONFIG = {
  ...ChartEditorConfig,
  dataFileName: 'prototype.csv',
  dataFileSourceType: 'file'
}

const loadConfigFromTextArea = async (canvasElement, config) => {
  const user = userEvent.setup()
  const textArea = canvasElement.querySelector('#pasteConfig') as HTMLTextAreaElement
  const loadButton = canvasElement.querySelector('#load-data') as HTMLButtonElement

  expect(textArea).toBeTruthy()
  expect(loadButton).toBeTruthy()

  await user.click(textArea)
  await user.clear(textArea)
  await user.paste(JSON.stringify(config))
  await user.click(loadButton)
}

const assertImportDataTabAccessible = async canvas => {
  const user = userEvent.setup()
  await user.click(canvas.getByText('2. Import Data'))
  await expect(canvas.findByText('Data Preview')).resolves.toBeTruthy()
}

const meta: Meta<typeof CdcEditor> = {
  title: 'Components/Pages/CdcEditor',
  component: CdcEditor
}
export default meta

type Story = StoryObj<typeof CdcEditor>

export const DefaultEditor: Story = {
  args: {
    config: {}
  }
}

export const PreviewTableTests: Story = {
  args: {},
  parameters: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    const mapButton = await canvas.findByRole('button', { name: 'United States (State- or County-Level)' })
    await user.click(mapButton)

    await user.click(canvas.getByText('2. Import Data'))

    const sampleData = await canvas.findByText('United States: County Sample Data')
    await user.click(sampleData)

    await expect(canvas.findByText('Data Preview')).resolves.toBeTruthy()
  }
}

export const LoadChartJsonConfig: Story = {
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await loadConfigFromTextArea(canvasElement, ChartEditorConfig)
    await assertImportDataTabAccessible(canvas)
  }
}

export const LoadMapJsonConfig: Story = {
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await loadConfigFromTextArea(canvasElement, MapConfig)
    await assertImportDataTabAccessible(canvas)
  }
}

export const LoadDashboardJsonConfig: Story = {
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await loadConfigFromTextArea(canvasElement, DashboardConfig)
    await assertImportDataTabAccessible(canvas)
  }
}

export const LoadDataTableJsonConfig: Story = {
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await loadConfigFromTextArea(canvasElement, DATA_TABLE_EDITOR_CONFIG)
    await assertImportDataTabAccessible(canvas)
  }
}

export const DownloadDashboardDatasetCSV: Story = {
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await loadConfigFromTextArea(canvasElement, DashboardConfig)
    await user.click(canvas.getByText('2. Import Data'))
    await expect(canvas.findByText('Data Sources')).resolves.toBeTruthy()

    const originalCreateObjectURL = URL.createObjectURL
    const originalRevokeObjectURL = URL.revokeObjectURL
    const originalAnchorClick = HTMLAnchorElement.prototype.click
    let capturedBlob: Blob | null = null
    URL.createObjectURL = (blob: Blob) => {
      capturedBlob = blob
      return 'blob:test-mock'
    }
    URL.revokeObjectURL = () => {}
    HTMLAnchorElement.prototype.click = () => {}

    try {
      const downloadBtn = await canvas.findByRole('button', { name: 'Download' })
      await user.click(downloadBtn)

      expect(capturedBlob).toBeTruthy()
      const text = await capturedBlob!.text()
      expect(text).toContain('Location')
      expect(text).toContain('Rate')
    } finally {
      URL.createObjectURL = originalCreateObjectURL
      URL.revokeObjectURL = originalRevokeObjectURL
      HTMLAnchorElement.prototype.click = originalAnchorClick
    }
  }
}

export const EditDashboardDatasetLabel: Story = {
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await loadConfigFromTextArea(canvasElement, DashboardConfig)
    await user.click(canvas.getByText('2. Import Data'))
    await expect(canvas.findByText('Data Sources')).resolves.toBeTruthy()

    await user.click(await canvas.findByRole('button', { name: 'Edit' }))
    const nameInput = await canvas.findByLabelText('Enter Dataset Name')
    await expect(nameInput).toHaveValue('dashboard_example_map.csv')

    await user.clear(nameInput)
    await user.type(nameInput, 'Dashboard map data')
    await user.click(canvas.getByRole('button', { name: 'Save' }))

    await expect(canvas.findByText('Dashboard map data')).resolves.toBeTruthy()
    await expect(canvas.findByText('Location')).resolves.toBeTruthy()
  }
}

export const DownloadSingleVizCSV: Story = {
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await loadConfigFromTextArea(canvasElement, ChartEditorConfig)
    await user.click(canvas.getByText('2. Import Data'))
    await expect(canvas.findByText('Data Preview')).resolves.toBeTruthy()

    const originalCreateObjectURL = URL.createObjectURL
    const originalRevokeObjectURL = URL.revokeObjectURL
    const originalAnchorClick = HTMLAnchorElement.prototype.click
    let capturedBlob: Blob | null = null
    URL.createObjectURL = (blob: Blob) => {
      capturedBlob = blob
      return 'blob:test-mock'
    }
    URL.revokeObjectURL = () => {}
    HTMLAnchorElement.prototype.click = () => {}

    try {
      const downloadBtn = await canvas.findByRole('button', { name: 'Download CSV' })
      await user.click(downloadBtn)

      expect(capturedBlob).toBeTruthy()
      const text = await capturedBlob!.text()
      expect(text).toContain('Year')
      expect(text).toContain('Category')
    } finally {
      URL.createObjectURL = originalCreateObjectURL
      URL.revokeObjectURL = originalRevokeObjectURL
      HTMLAnchorElement.prototype.click = originalAnchorClick
    }
  }
}

export const LoadFromApiUrlPreview: Story = {
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    // Intercept fetch and return JSON with a charset in the Content-Type header.
    // This exercises the MIME type normalisation fix: fetch preserves the full
    // Content-Type value (e.g. 'application/json; charset=utf-8') while the old
    // axios code would strip parameters, so the blob re-typing comparison
    // must use the base type before the semicolon.
    const mockData = [
      { state: 'Alabama', value: '42' },
      { state: 'Alaska', value: '37' },
      { state: 'Arizona', value: '55' }
    ]
    const replacementData = [
      { state: 'California', value: '99' },
      { state: 'Colorado', value: '88' }
    ]
    const mockBlob = new Blob([JSON.stringify(mockData)], { type: 'application/json; charset=utf-8' })
    const replacementBlob = new Blob([JSON.stringify(replacementData)], {
      type: 'application/json; charset=utf-8'
    })
    const originalFetch = window.fetch
    window.fetch = input =>
      Promise.resolve({
        ok: true,
        blob: () => Promise.resolve(String(input).includes('replacement.json') ? replacementBlob : mockBlob)
      } as Response)

    try {
      // Select Dashboard so the dataset name becomes meaningful and the
      // multi-dataset import flow is exercised
      await user.click(await canvas.findByRole('button', { name: 'Dashboard' }))

      await user.click(canvas.getByText('2. Import Data'))

      // Switch to the URL tab
      await user.click(await canvas.findByText('Load from URL'))

      // Both fields are required before the button is enabled
      const nameInput = await canvas.findByLabelText('Enter Dataset Name')
      const urlInput = await canvas.findByLabelText('Load data from external URL')
      await user.type(urlInput, 'https://example.gov/api/data.json')

      const loadButton = await canvas.findByRole('button', { name: 'Save & Load' })
      await expect(loadButton).toBeDisabled()

      await user.type(nameInput, 'api-data')
      await expect(loadButton).toBeEnabled()

      await user.click(loadButton)

      // After a successful dashboard dataset load the Data Sources table appears
      // and the preview panel should auto-populate (dataset is created with preview: true)
      await expect(canvas.findByText('Data Sources')).resolves.toBeTruthy()
      await expect(canvas.findByText('Data Preview')).resolves.toBeTruthy()
      await expect(canvas.findByText('state')).resolves.toBeTruthy()
      await expect(canvas.findByText('Alabama')).resolves.toBeTruthy()

      // Navigate away to tab 3 then back to tab 2 — the dataset must survive the round-trip
      await user.click(canvas.getByText('3. Configure'))
      await user.click(canvas.getByText('2. Import Data'))

      await expect(canvas.findByText('Data Sources')).resolves.toBeTruthy()
      await expect(canvas.findByText('Data Preview')).resolves.toBeTruthy()
      await expect(canvas.findByText('Alabama')).resolves.toBeTruthy()

      // Replacing a URL-backed dataset keeps its stable key but fully replaces
      // source-derived fields, so stale formattedData cannot win in Configure.
      await user.click(await canvas.findByRole('button', { name: 'Edit' }))
      const editUrlInput = await canvas.findByLabelText('Load data from external URL')
      await user.clear(editUrlInput)
      await user.type(editUrlInput, 'https://example.gov/api/replacement.json')
      await user.click(canvas.getByRole('button', { name: 'Save & Load' }))

      await expect(canvas.findByText('California')).resolves.toBeTruthy()
      expect(canvas.queryByText('Alabama')).not.toBeInTheDocument()

      await user.click(canvas.getByText('3. Configure'))
      await user.click(await canvas.findByText('Dashboard Preview'))
      await expect(canvas.findByText('California')).resolves.toBeTruthy()
    } finally {
      window.fetch = originalFetch
    }
  }
}

export const LoadStandaloneFromApiUrl: Story = {
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const mockData = [
      { category: 'Alpha', value: '42' },
      { category: 'Beta', value: '37' }
    ]
    const mockBlob = new Blob([JSON.stringify(mockData)], { type: 'application/json' })
    const originalFetch = window.fetch
    window.fetch = () => Promise.resolve({ ok: true, blob: () => Promise.resolve(mockBlob) } as Response)

    try {
      await user.click(await canvas.findByRole('button', { name: 'Bar' }))
      await user.click(await canvas.findByText('Load from URL'))

      expect(canvas.queryByLabelText('Enter Dataset Name')).not.toBeInTheDocument()

      const urlInput = await canvas.findByLabelText('Load data from external URL')
      const loadButton = await canvas.findByRole('button', { name: 'Save & Load' })
      await expect(loadButton).toBeDisabled()

      await user.type(urlInput, 'https://example.gov/api/chart.json')
      await expect(loadButton).toBeEnabled()
      await user.click(loadButton)

      await expect(canvas.findByText('Data Preview')).resolves.toBeTruthy()
      await expect(canvas.findByText('Alpha')).resolves.toBeTruthy()

      // Force DataImport to unmount and remount, matching an author leaving and returning to the tab.
      await user.click(canvas.getByText('1. Choose Visualization Type'))
      await user.click(canvas.getByText('2. Import Data'))

      expect(canvas.queryByLabelText('Enter Dataset Name')).not.toBeInTheDocument()
      await expect(canvas.findByLabelText('Load data from external URL')).resolves.toHaveValue(
        'https://example.gov/api/chart.json'
      )
      await expect(canvas.findByRole('button', { name: 'Save & Load' })).resolves.toBeEnabled()
    } finally {
      window.fetch = originalFetch
    }
  }
}

export const ReplaceStandaloneFileWithUrl: Story = {
  args: { config: FILE_BACKED_CHART_CONFIG },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const remoteData = [
      {
        Year: '2030',
        Category: 'Remote data',
        'White, non-Hispanic': '4.2'
      }
    ]
    const mockBlob = new Blob([JSON.stringify(remoteData)], { type: 'application/json' })
    const originalFetch = window.fetch
    const originalConsoleError = console.error
    console.error = () => {}
    window.fetch = input => {
      if (String(input).includes('fails.json')) {
        return Promise.resolve({ ok: false, status: 500 } as Response)
      }
      return Promise.resolve({ ok: true, blob: () => Promise.resolve(mockBlob) } as Response)
    }

    try {
      await user.click(canvas.getByText('2. Import Data'))
      await expect(canvas.findByText('prototype.csv')).resolves.toBeTruthy()

      const replaceWithUrlButton = await canvas.findByRole('button', { name: 'or replace with URL' })
      await user.click(replaceWithUrlButton)

      expect(canvas.queryByLabelText('Enter Dataset Name')).not.toBeInTheDocument()
      await expect(canvas.findByLabelText(/Always load from URL/)).resolves.toBeChecked()

      const draftUrlInput = await canvas.findByLabelText('Load data from external URL')
      await user.type(draftUrlInput, 'https://example.gov/api/draft.json')
      await user.click(await canvas.findByRole('button', { name: 'Cancel' }))

      expect(canvas.queryByLabelText('Load data from external URL')).not.toBeInTheDocument()
      await expect(canvas.findByText('prototype.csv')).resolves.toBeTruthy()

      await user.click(await canvas.findByRole('button', { name: 'or replace with URL' }))
      const urlInput = await canvas.findByLabelText('Load data from external URL')
      await user.type(urlInput, 'https://example.gov/api/fails.json')
      await user.click(await canvas.findByRole('button', { name: 'Save & Load' }))

      await expect(canvas.findByText('Error fetching or parsing data file.')).resolves.toBeTruthy()
      await expect(canvas.findByText('prototype.csv')).resolves.toBeTruthy()

      await user.clear(urlInput)
      await user.type(urlInput, 'https://example.gov/api/chart.json')
      await user.click(await canvas.findByRole('button', { name: 'Save & Load' }))

      await expect(canvas.findByText('2030')).resolves.toBeTruthy()
      await expect(canvas.findByLabelText('Load data from external URL')).resolves.toHaveValue(
        'https://example.gov/api/chart.json'
      )
      expect(canvas.queryByRole('button', { name: 'or replace with URL' })).not.toBeInTheDocument()
    } finally {
      window.fetch = originalFetch
      console.error = originalConsoleError
    }
  }
}

export const InvalidJsonShowsValidationAlert: Story = {
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const user = userEvent.setup()
    const textArea = canvasElement.querySelector('#pasteConfig') as HTMLTextAreaElement
    const loadButton = canvasElement.querySelector('#load-data') as HTMLButtonElement

    expect(textArea).toBeTruthy()
    expect(loadButton).toBeTruthy()

    const originalAlert = window.alert
    const originalOnError = window.onerror
    let alertText = ''

    window.alert = message => {
      alertText = String(message)
    }

    window.onerror = () => true

    try {
      await user.click(textArea)
      await user.clear(textArea)
      await user.paste('{"broken": true, }')
      await user.click(loadButton)

      await expect(alertText).toBe('The JSON that was entered is invalid.')
    } finally {
      window.alert = originalAlert
      window.onerror = originalOnError
    }
  }
}
