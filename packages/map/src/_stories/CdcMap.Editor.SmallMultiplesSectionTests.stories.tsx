import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'
import multiCountryConfig from './_mock/multi-country.json'
import wastewaterMapSmallMultiplesConfig from './_mock/small_multiples/wastewater-map-small-multiples.json'
import { performAndAssert, waitForEditor, waitForPresence, openAccordion } from '@cdc/core/helpers/testing'

type Story = StoryObj<typeof CdcMap>

const mapMeta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Editor Tests',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

export default mapMeta

const DEFAULT_ARGS = {
  isEditor: true,
  config: usaStateGradientConfig
}

export const SmallMultiplesSectionTests: Story = {
  name: 'Small Multiples Section Tests',
  parameters: {},
  args: {
    config: {
      ...wastewaterMapSmallMultiplesConfig,
      general: {
        ...wastewaterMapSmallMultiplesConfig.general,
        title: 'Map Small Multiples Test'
      },
      smallMultiples: {
        ...wastewaterMapSmallMultiplesConfig.smallMultiples,
        mode: ''
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Small Multiples')

    // ============================================================================
    // TEST: Enable Small Multiples Mode
    // Verifies: Map visualization changes from single map to multiple maps
    // ============================================================================

    const getMapTileCount = () => {
      const smallMultiplesContainer = canvasElement.querySelector('.small-multiples-container')
      const tiles = canvasElement.querySelectorAll('.small-multiples-grid > .small-multiple-tile')

      return {
        hasSmallMultiplesContainer: !!smallMultiplesContainer,
        tileCount: tiles.length
      }
    }

    const tileByColumnSelect = canvas.getByLabelText(/tile by column/i) as HTMLSelectElement

    await performAndAssert(
      'Enable Small Multiples Mode - Map splits into multiple tiles',
      getMapTileCount,
      async () => {
        await userEvent.selectOptions(tileByColumnSelect, 'pathogen')
      },
      (before, after) => {
        return before.tileCount === 0 && after.tileCount === 3
      }
    )

    // ============================================================================
    // TEST: Tiles Per Row Desktop
    // Verifies: Grid layout changes from 3 tiles per row to 2 tiles per row
    // ============================================================================

    const getTilesInFirstRow = () => {
      const tiles = Array.from(canvasElement.querySelectorAll('.small-multiples-grid > .small-multiple-tile'))
      if (tiles.length === 0) return { tilesInFirstRow: 0 }

      const firstTileTop = tiles[0].getBoundingClientRect().top
      const tilesInFirstRow = tiles.filter(tile => {
        const tileTop = tile.getBoundingClientRect().top
        return Math.abs(tileTop - firstTileTop) < 5
      }).length

      return { tilesInFirstRow }
    }

    const tilesPerRowInput = canvas.getByLabelText(/tiles per row \(desktop\)/i) as HTMLInputElement

    await performAndAssert(
      'Tiles Per Row Desktop - Layout changes from 3 to 2 tiles per row',
      getTilesInFirstRow,
      async () => {
        await userEvent.clear(tilesPerRowInput)
        await userEvent.type(tilesPerRowInput, '2')
        tilesPerRowInput.blur()
      },
      (before, after) => {
        return before.tilesInFirstRow === 3 && after.tilesInFirstRow === 2
      }
    )

    // ============================================================================
    // TEST: Tile Order
    // Verifies: Changing tile order from custom to descending reverses tiles
    // ============================================================================

    const getTileTitles = () => {
      const tiles = canvasElement.querySelectorAll('.small-multiples-grid > .small-multiple-tile')
      const titles = Array.from(tiles).map(tile => {
        const titleElement = tile.querySelector('.tile-title')
        return titleElement?.textContent?.trim() || ''
      })
      return { titles }
    }

    const tileOrderSelect = canvas.getByLabelText(/tile order/i) as HTMLSelectElement

    await performAndAssert(
      'Tile Order - Descending sorts tiles alphabetically descending',
      getTileTitles,
      async () => {
        await userEvent.selectOptions(tileOrderSelect, 'desc')
      },
      (before, after) => {
        return before.titles[0] === 'Influenza AAA' && after.titles[0] === 'RSV' && after.titles[1] === 'Influenza AAA'
      }
    )

    // ============================================================================
    // TEST: Custom Tile Title
    // Verifies: Custom tile title appears in visualization
    // ============================================================================

    const covid19TitleInput = canvasElement.querySelector('input[placeholder="COVID-19"]') as HTMLInputElement

    await performAndAssert(
      'Custom Tile Title - Changes tile display name',
      getTileTitles,
      async () => {
        if (covid19TitleInput) {
          await userEvent.clear(covid19TitleInput)
          await userEvent.type(covid19TitleInput, 'Custom COVID Title')
          covid19TitleInput.blur()
        }
      },
      (before, after) => {
        return after.titles.includes('Custom COVID Title') && !before.titles.includes('Custom COVID Title')
      }
    )
  }
}

// ==========================================================================
// MULTI-COUNTRY MAP TESTS
// ==========================================================================
