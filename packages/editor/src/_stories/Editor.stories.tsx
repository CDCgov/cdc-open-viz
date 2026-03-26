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
