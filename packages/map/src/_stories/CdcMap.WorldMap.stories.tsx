import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { openAccordion, performAndAssert, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/World Localization',
  component: CdcMap,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcMap>

// Fixed cross-continent sample keeps hover coverage reproducible.
const countries = [
  { iso: 'AFG', english: 'Afghanistan', spanish: 'Afganistán' },
  { iso: 'BRA', english: 'Brazil', spanish: 'Brasil' },
  { iso: 'CZE', english: 'Czechia', spanish: 'Chequia' },
  { iso: 'DEU', english: 'Germany', spanish: 'Alemania' },
  { iso: 'EGY', english: 'Egypt', spanish: 'Egipto' },
  { iso: 'JPN', english: 'Japan', spanish: 'Japón' },
  { iso: 'NZL', english: 'New Zealand', spanish: 'Nueva Zelandia' },
  { iso: 'CIV', english: "Côte D'ivoire", spanish: 'Costa de Marfil' },
  { iso: 'VUT', english: 'Vanuatu', spanish: 'Vanuatu' }
]

const makeConfig = () => {
  const config = createNewMapConfig({})
  config.locale = 'en-US'
  config.general.geoType = 'world'
  config.general.type = 'data'
  config.general.hideGeoColumnInTooltip = false
  config.columns.geo = { ...config.columns.geo, name: 'Country', tooltip: true }
  config.columns.primary = { ...config.columns.primary, name: 'Value', tooltip: true }
  config.data = countries.map(({ english }, index) => ({ Country: english, Value: index + 1 }))
  return config
}

export const WorldMapSpanishCountryLabels: Story = {
  args: { config: makeConfig(), isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const documentBody = canvasElement.ownerDocument.body
    await waitForEditor(canvas)
    await waitForPresence('[data-country-code="AFG"]', canvasElement)
    await openAccordion(canvas, 'General')
    const language = canvas.getByRole('combobox', { name: /Language/i })

    const getTooltipMarkup = (iso: string) =>
      canvasElement.querySelector(`[data-country-code="${iso}"]`)?.parentElement?.getAttribute('data-tooltip-html') ||
      ''

    for (const locale of ['en-US', 'es-MX', 'en-US']) {
      await performAndAssert(
        `Language → ${locale} updates world hover content`,
        () => getTooltipMarkup('DEU'),
        () => userEvent.selectOptions(language, locale),
        (_, after) => after.includes(locale === 'es-MX' ? 'Alemania' : 'Germany')
      )

      for (const country of countries) {
        const name = locale === 'es-MX' ? country.spanish : country.english
        const path = await waitForPresence(`[data-country-code="${country.iso}"]`, canvasElement)
        if (!path) throw new Error(`Missing world map path for ${country.iso}`)
        const tooltipId = path.parentElement?.getAttribute('data-tooltip-id')
        expect(tooltipId).toBeTruthy()
        const getHeading = () => documentBody.querySelector(`[id="${tooltipId}"] .tooltip-heading`)?.textContent || ''

        await performAndAssert(
          `${country.iso} hover shows ${name}`,
          getHeading,
          () => userEvent.hover(path),
          (_, after) => after === name
        )
        expect(documentBody.querySelector(`[id="${tooltipId}"]`)).toHaveTextContent(name)
        expect(documentBody.querySelector(`[id="${tooltipId}"] .tooltip-body`)).toHaveTextContent(name)
        await userEvent.unhover(path)
      }
    }
  }
}
