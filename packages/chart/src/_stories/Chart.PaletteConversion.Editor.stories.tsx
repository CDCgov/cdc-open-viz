import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { openAccordion, waitForEditor } from '@cdc/core/helpers/testing'

import Chart from '../CdcChartComponent'
import mockScatterPlot from './_mock/scatterplot_mock.json'
import forecastComboWithGaps from './_mock/forecast_combo_with_gaps.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests/Palette Conversion',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const twoColorVersion10Updates = fn()
const twoColorVersion20Updates = fn()
const forecastVersion10Updates = fn()
const forecastVersion20Updates = fn()

const buildBarConfig = (version: '1.0' | '2.0' | '2.1', visualizationType: 'Bar' | 'Paired Bar' = 'Bar') => {
  const config = cloneConfig(mockScatterPlot) as any
  config.version = '4.26.8'
  config.visualizationType = visualizationType
  config.xAxis = { ...config.xAxis, dataKey: 'category', type: 'categorical' }
  config.series = config.series.slice(0, 2).map(series => ({ ...series, type: 'Bar' }))
  config.data = [
    { category: 'Q1', y1: 19, y2: 47 },
    { category: 'Q2', y1: 18, y2: 32 }
  ]
  config.general.palette = {
    isReversed: false,
    name: version === '1.0' ? 'qualitative-bold' : 'qualitative_standard',
    version
  }
  return config
}

const selectAlternativePalette = async (canvasElement: HTMLElement) => {
  const button = Array.from(canvasElement.querySelectorAll<HTMLButtonElement>('.color-palette button[title]')).find(
    candidate => !candidate.classList.contains('selected') && !candidate.title.startsWith('theme-')
  ) as HTMLButtonElement
  expect(button).toBeTruthy()
  await userEvent.click(button)
  return button
}

const expectConversionModal = (canvas: ReturnType<typeof within>) =>
  canvas.getByRole('heading', { name: 'Color Palette Conversion' })

export const MainPaletteVersion10: Story = {
  args: { isEditor: true, config: buildBarConfig('1.0') },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    const cancelledPalette = await selectAlternativePalette(canvasElement)
    expect(expectConversionModal(canvas)).toBeInTheDocument()
    expect(canvas.getByText(/uses an outdated color palette/)).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Cancel' }))
    expect(cancelledPalette).toHaveClass('selected')

    await selectAlternativePalette(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Convert to New Palette' }))
    await selectAlternativePalette(canvasElement)
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
  }
}

export const MainPaletteVersion20: Story = {
  args: { isEditor: true, config: buildBarConfig('2.0') },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    const cancelledPalette = await selectAlternativePalette(canvasElement)
    expect(expectConversionModal(canvas)).toBeInTheDocument()
    expect(canvas.getByText(/updated color distribution that improves contrast/)).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Cancel' }))
    expect(cancelledPalette).toHaveClass('selected')

    await selectAlternativePalette(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Convert to New Palette' }))
    await selectAlternativePalette(canvasElement)
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
  }
}

export const MainPaletteVersion21: Story = {
  args: { isEditor: true, config: buildBarConfig('2.1') },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')
    await selectAlternativePalette(canvasElement)

    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
  }
}

export const TwoColorVersion10: Story = {
  args: { isEditor: true, config: buildBarConfig('1.0', 'Paired Bar'), setConfig: twoColorVersion10Updates },
  play: async ({ canvasElement }) => {
    twoColorVersion10Updates.mockClear()
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')
    await selectAlternativePalette(canvasElement)

    expect(expectConversionModal(canvas)).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Convert to New Palette' }))
    await waitFor(() => {
      const updatedConfig = twoColorVersion10Updates.mock.calls.at(-1)?.[0]
      expect(updatedConfig.general.palette.version).toBe('2.1')
      expect(updatedConfig.general.palette.backups).toContainEqual(
        expect.objectContaining({ version: '1.0', type: 'twoColor' })
      )
    })
    await selectAlternativePalette(canvasElement)
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
  }
}

export const TwoColorVersion20: Story = {
  args: { isEditor: true, config: buildBarConfig('2.0', 'Paired Bar'), setConfig: twoColorVersion20Updates },
  play: async ({ canvasElement }) => {
    twoColorVersion20Updates.mockClear()
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')
    await selectAlternativePalette(canvasElement)
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
    await waitFor(() => expect(twoColorVersion20Updates.mock.calls.at(-1)?.[0].general.palette.version).toBe('2.0'))
  }
}

const buildForecastConfig = (version: '1.0' | '2.0') => {
  const config = cloneConfig(forecastComboWithGaps) as any
  config.version = '4.26.8'
  config.general.palette = {
    isReversed: false,
    name: version === '1.0' ? 'qualitative-bold' : 'qualitative_standard',
    version
  }
  config.series[0].stages[0].color = version === '1.0' ? 'Sequential Blue Two' : 'sequential-blue'
  return config
}

const changeFirstForecastColor = async (canvas: ReturnType<typeof within>) => {
  const forecastSeries = canvas
    .getAllByRole('button', { name: /Month/ })
    .find(button => button.classList.contains('accordion__button')) as HTMLElement
  expect(forecastSeries).toBeTruthy()
  await userEvent.click(forecastSeries)
  const colorLabel = canvas.getByText('11 Series Color').closest('label')
  const colorSelect = colorLabel?.querySelector('select') as HTMLSelectElement
  expect(colorSelect).toBeTruthy()
  const alternative = Array.from(colorSelect.options).find(option => option.value && option.value !== colorSelect.value)
  expect(alternative).toBeTruthy()
  await userEvent.selectOptions(colorSelect, alternative!.value)
}

export const ForecastVersion10: Story = {
  args: { isEditor: true, config: buildForecastConfig('1.0'), setConfig: forecastVersion10Updates },
  play: async ({ canvasElement }) => {
    forecastVersion10Updates.mockClear()
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data Series')
    await changeFirstForecastColor(canvas)

    expect(expectConversionModal(canvas)).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Convert to New Palette' }))
    await waitFor(() => {
      const updatedConfig = forecastVersion10Updates.mock.calls.at(-1)?.[0]
      expect(updatedConfig.general.palette.version).toBe('2.1')
      updatedConfig.series
        .filter(series => series.type === 'Forecasting')
        .flatMap(series => series.stages)
        .forEach(stage => expect(stage.color).toMatch(/^sequential-[a-z]+(?:reverse)?$/))
    })

    await openAccordion(canvas, 'Visual')
    await selectAlternativePalette(canvasElement)
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
  }
}

export const ForecastVersion20: Story = {
  args: { isEditor: true, config: buildForecastConfig('2.0'), setConfig: forecastVersion20Updates },
  play: async ({ canvasElement }) => {
    forecastVersion20Updates.mockClear()
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data Series')
    await changeFirstForecastColor(canvas)
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
    await waitFor(() => expect(forecastVersion20Updates.mock.calls.at(-1)?.[0].general.palette.version).toBe('2.0'))

    await openAccordion(canvas, 'Visual')
    await selectAlternativePalette(canvasElement)
    expect(expectConversionModal(canvas)).toBeInTheDocument()
  }
}
