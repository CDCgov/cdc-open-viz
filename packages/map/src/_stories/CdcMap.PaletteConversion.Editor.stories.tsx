import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { openAccordion, waitForEditor } from '@cdc/core/helpers/testing'

import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Editor Tests/Palette Conversion',
  component: CdcMap
}

export default meta
type Story = StoryObj<typeof CdcMap>

const paletteVersionConfig = (version: '1.0' | '2.0' | '2.1') => {
  const config = cloneConfig(usaStateGradientConfig) as any
  config.general.palette = {
    isReversed: false,
    name: version === '1.0' ? 'sequential-blue' : 'sequential_blue',
    version
  }
  return config
}

const selectAlternativeSequentialPalette = async (canvasElement: HTMLElement) => {
  const sequentialLabel = Array.from(canvasElement.querySelectorAll('span')).find(
    span => span.textContent?.trim() === 'Sequential'
  )
  const paletteButton = Array.from(sequentialLabel?.nextElementSibling?.querySelectorAll('button') || []).find(
    button => !button.classList.contains('selected')
  ) as HTMLButtonElement

  expect(paletteButton).toBeTruthy()
  await userEvent.click(paletteButton)
  return paletteButton
}

export const PaletteVersion20Conversion: Story = {
  args: { isEditor: true, config: paletteVersionConfig('2.0') },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')
    const cancelledPalette = await selectAlternativeSequentialPalette(canvasElement)

    expect(canvas.getByRole('heading', { name: 'Color Palette Conversion' })).toBeInTheDocument()
    expect(canvas.getByText(/updated color distribution that improves contrast/)).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Cancel' }))
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
    expect(cancelledPalette).toHaveClass('selected')

    await selectAlternativeSequentialPalette(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Convert to New Palette' }))
    await selectAlternativeSequentialPalette(canvasElement)
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
  }
}

export const PaletteVersion10Conversion: Story = {
  args: { isEditor: true, config: paletteVersionConfig('1.0') },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')
    const cancelledPalette = await selectAlternativeSequentialPalette(canvasElement)

    expect(canvas.getByRole('heading', { name: 'Color Palette Conversion' })).toBeInTheDocument()
    expect(canvas.getByText(/uses an outdated color palette/)).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Cancel' }))
    expect(cancelledPalette).toHaveClass('selected')

    await selectAlternativeSequentialPalette(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Convert to New Palette' }))
    await selectAlternativeSequentialPalette(canvasElement)
    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
  }
}

export const PaletteVersion21Selection: Story = {
  args: { isEditor: true, config: paletteVersionConfig('2.1') },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')
    const paletteButton = await selectAlternativeSequentialPalette(canvasElement)

    expect(canvas.queryByRole('heading', { name: 'Color Palette Conversion' })).not.toBeInTheDocument()
    expect(paletteButton).toHaveClass('selected')
  }
}
