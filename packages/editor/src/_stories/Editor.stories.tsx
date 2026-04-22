import { Meta, StoryObj } from '@storybook/react-vite'
import CdcEditor from '../CdcEditor'
import { within, userEvent, expect, waitFor } from 'storybook/test'
import ChartEditorConfig from '../../../chart/src/_stories/_mock/editor-tests/bar-chart-editor-test.json'
import MapConfig from '../../../map/src/_stories/_mock/default-patterns.json'
import DashboardConfig from '../../../dashboard/src/_stories/_mock/dashboard_no_filter.json'
import DataTableConfig from '../../../data-table/examples/data-table-example.json'
import countyHsaToggle from '../../../map/examples/county-hsa-toggle.json'

const legacyCountyEditorConfig = {
  ...countyHsaToggle,
  version: '4.26.3',
  general: {
    ...countyHsaToggle.general,
    title: 'Legacy County Editor Build Regression',
    showHSABoundaries: false,
    territoriesAlwaysShow: false
  },
  data: countyHsaToggle.data.filter(row => ['01001', '01003', '72001', '72127'].includes(row['FIPS Codes']))
}

const replacementCountyCsvWithPR = [
  'FIPS Codes,Percent Vaccinated',
  '01001,34.13',
  '01003,37.55',
  '72001,91.99',
  '72127,71.69'
].join('\n')

const replacementCountyCsvWithoutPR = [
  'FIPS Codes,Percent Vaccinated',
  '01001,34.13',
  '01003,37.55',
  '06001,62.40'
].join('\n')

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

const uploadReplacementDataFile = async (canvasElement, fileName, fileContents) => {
  const user = userEvent.setup()
  const replaceFileInput = canvasElement.querySelector('.data-source-options .loaded-file input[type="file"]') as
    | HTMLInputElement
    | undefined

  expect(replaceFileInput).toBeTruthy()
  await user.upload(replaceFileInput!, new File([fileContents], fileName, { type: 'text/csv' }))
}

const assertMapBuildFromEditor = async (canvasElement, expectedFips: string) => {
  const canvas = within(canvasElement)
  const user = userEvent.setup()

  await waitFor(() => expect(canvasElement.textContent).toContain(expectedFips))

  const configureButton = await canvas.findByRole('button', { name: 'Configure your visualization' })
  await user.click(configureButton)

  await waitFor(() => expect(canvasElement.querySelector('.map-container canvas')).toBeInTheDocument(), {
    timeout: 10000
  })
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

export const LegacyCountyMapBuildsAfterReplacingDataWithPR: Story = {
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await loadConfigFromTextArea(canvasElement, legacyCountyEditorConfig)
    await assertImportDataTabAccessible(canvas)
    await waitFor(() => expect(canvasElement.textContent).toContain('72001'))

    await uploadReplacementDataFile(canvasElement, 'county-with-pr.csv', replacementCountyCsvWithPR)
    await assertMapBuildFromEditor(canvasElement, '72127')
  }
}

export const LegacyCountyMapBuildsAfterReplacingDataWithoutPR: Story = {
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await loadConfigFromTextArea(canvasElement, legacyCountyEditorConfig)
    await assertImportDataTabAccessible(canvas)
    await waitFor(() => expect(canvasElement.textContent).toContain('72001'))

    await uploadReplacementDataFile(canvasElement, 'county-without-pr.csv', replacementCountyCsvWithoutPR)
    await waitFor(() => expect(canvasElement.textContent).not.toContain('72001'))
    await assertMapBuildFromEditor(canvasElement, '06001')
  }
}
