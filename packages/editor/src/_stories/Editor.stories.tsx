import { Meta, StoryObj } from '@storybook/react-vite'
import CdcEditor from '../CdcEditor'
import { within, userEvent, expect } from 'storybook/test'
import ChartEditorConfig from '../../../chart/src/_stories/_mock/editor-tests/bar-chart-editor-test.json'
import MapConfig from '../../../map/src/_stories/_mock/default-patterns.json'
import DashboardConfig from '../../../dashboard/src/_stories/_mock/dashboard_no_filter.json'
import DataTableConfig from '../../../data-table/examples/data-table-example.json'

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
    await loadConfigFromTextArea(canvasElement, DataTableConfig)
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
    let capturedBlob: Blob | null = null
    URL.createObjectURL = (blob: Blob) => {
      capturedBlob = blob
      return 'blob:test-mock'
    }

    try {
      const downloadBtn = await canvas.findByRole('button', { name: 'Download' })
      await user.click(downloadBtn)

      expect(capturedBlob).toBeTruthy()
      const text = await capturedBlob!.text()
      expect(text).toContain('Location')
      expect(text).toContain('Rate')
    } finally {
      URL.createObjectURL = originalCreateObjectURL
    }
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
    let capturedBlob: Blob | null = null
    URL.createObjectURL = (blob: Blob) => {
      capturedBlob = blob
      return 'blob:test-mock'
    }

    try {
      const downloadBtn = await canvas.findByRole('button', { name: 'Download CSV' })
      await user.click(downloadBtn)

      expect(capturedBlob).toBeTruthy()
      const text = await capturedBlob!.text()
      expect(text).toContain('Year')
      expect(text).toContain('Category')
    } finally {
      URL.createObjectURL = originalCreateObjectURL
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
    const mockBlob = new Blob([JSON.stringify(mockData)], { type: 'application/json; charset=utf-8' })
    const originalFetch = window.fetch
    window.fetch = () => Promise.resolve({ ok: true, blob: () => Promise.resolve(mockBlob) } as Response)

    try {
      // Select Dashboard so the dataset name becomes meaningful and the
      // multi-dataset import flow is exercised
      await user.click(await canvas.findByRole('button', { name: 'Dashboard' }))

      await user.click(canvas.getByText('2. Import Data'))

      // Switch to the URL tab
      await user.click(await canvas.findByText('Load from URL'))

      // Both fields are required before the button is enabled
      const nameInput = await canvas.findByLabelText('Enter Dataset Name')
      await user.type(nameInput, 'api-data')

      const urlInput = await canvas.findByLabelText('Load data from external URL')
      await user.type(urlInput, 'https://example.gov/api/data.json')

      await user.click(await canvas.findByRole('button', { name: 'Save & Load' }))

      // After a successful dashboard dataset load the Data Sources table appears
      // and the preview panel should auto-populate (dataset is created with preview: true)
      await expect(canvas.findByText('Data Sources')).resolves.toBeTruthy()
      await expect(canvas.findByText('Data Preview')).resolves.toBeTruthy()
      await expect(canvas.findByText('state')).resolves.toBeTruthy()
      await expect(canvas.findByText('Alabama')).resolves.toBeTruthy()

      // Navigate away to tab 3 then back to tab 2 — the dataset must survive the round-trip
      await new Promise(r => setTimeout(r, 1500))
      await user.click(canvas.getByText('3. Configure'))
      await new Promise(r => setTimeout(r, 500))
      await user.click(canvas.getByText('2. Import Data'))
      await new Promise(r => setTimeout(r, 500))

      await expect(canvas.findByText('Data Sources')).resolves.toBeTruthy()
      await expect(canvas.findByText('Data Preview')).resolves.toBeTruthy()
      await expect(canvas.findByText('Alabama')).resolves.toBeTruthy()
    } finally {
      window.fetch = originalFetch
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
