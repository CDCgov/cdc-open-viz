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

export const VisualSectionTests: StoryObj<typeof CdcMap> = {
  name: 'Visual Section Tests',
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for the editor to load
    await waitForEditor(canvas)

    // Open the Visual accordion
    await openAccordion(canvas, 'Visual')
    await waitForPresence('path.single-geo', canvasElement)

    // ==========================================================================
    // TEST: Header Theme
    // ==========================================================================
    await performAndAssert(
      'Header Theme → Select purple theme',
      () => {
        // Check via the HeaderThemeSelector's selected button state
        const colorPalettes = canvasElement.querySelectorAll('.color-palette')
        const themeColorPalette = Array.from(colorPalettes).find(palette =>
          Array.from(palette.querySelectorAll('button')).some(btn => btn.classList.contains('theme-purple'))
        )
        const selectedThemeBtn = themeColorPalette?.querySelector('button.selected') as HTMLElement | null
        return {
          currentTheme: selectedThemeBtn
            ? Array.from(selectedThemeBtn.classList).find(cls => cls.startsWith('theme-')) || ''
            : ''
        }
      },
      async () => {
        // Find the header theme selector and click purple
        const colorPalettes = canvasElement.querySelectorAll('.color-palette')
        const themeColorPalette = Array.from(colorPalettes).find(palette =>
          Array.from(palette.querySelectorAll('button')).some(btn => btn.classList.contains('theme-purple'))
        )
        const purpleTheme = themeColorPalette?.querySelector('button.theme-purple') as HTMLElement
        await userEvent.click(purpleTheme)
      },
      (before, after) => {
        // After clicking, the purple theme button should be selected
        return after.currentTheme === 'theme-purple'
      }
    )

    // ==========================================================================
    // TEST: Show Title
    // ==========================================================================
    const showTitleCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(checkbox => {
      const label = checkbox.closest('label')
      return label?.textContent?.includes('Show Title')
    }) as HTMLInputElement

    await performAndAssert(
      'Show Title → Toggle off',
      () => {
        const titleElement = canvasElement.querySelector('.cove-title, header.cove-visualization__header')
        return {
          isPresent: Boolean(titleElement)
        }
      },
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => {
        // After toggling off, title should be removed from DOM
        return before.isPresent && !after.isPresent
      }
    )

    await performAndAssert(
      'Show Title → Toggle back on',
      () => {
        const titleElement = canvasElement.querySelector('.cove-title, header.cove-visualization__header')
        return {
          isPresent: Boolean(titleElement)
        }
      },
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => {
        // After toggling back on, title should be present in DOM
        return !before.isPresent && after.isPresent
      }
    )

    // ==========================================================================
    // TEST: Geo Border Color
    // ==========================================================================
    const geoBorderColorSelect = Array.from(canvasElement.querySelectorAll('select')).find(select => {
      const label = select.closest('label')
      return label?.textContent?.includes('Geo Border Color')
    }) as HTMLSelectElement

    await performAndAssert(
      'Geo Border Color → Change to White',
      () => {
        // Check the stroke attribute on SVG paths with class 'single-geo'
        const geoPaths = canvasElement.querySelectorAll('path.single-geo')
        const firstPath = geoPaths[0] as SVGPathElement
        // Get the actual stroke value - could be in attribute, style, or computed
        const strokeAttr = firstPath?.getAttribute('stroke') || ''
        const strokeStyle = firstPath?.style?.stroke || ''
        const computedStroke = firstPath ? window.getComputedStyle(firstPath).stroke : ''
        return {
          strokeAttr,
          strokeStyle,
          computedStroke,
          pathCount: geoPaths.length
        }
      },
      async () => {
        await userEvent.selectOptions(geoBorderColorSelect, 'sameAsBackground')
      },
      (before, after) => {
        // After changing to white, geo paths should still exist and their rendered stroke should become white.
        const beforeStroke = before.strokeAttr || before.strokeStyle || before.computedStroke
        const afterStroke = after.strokeAttr || after.strokeStyle || after.computedStroke
        return (
          before.pathCount > 0 &&
          after.pathCount > 0 &&
          beforeStroke !== '' &&
          afterStroke !== '' &&
          beforeStroke !== afterStroke &&
          after.computedStroke === 'rgb(255, 255, 255)'
        )
      }
    )

    // ==========================================================================
    // TEST: Map Color Palette - Sequential Palette Selection
    // ==========================================================================
    await performAndAssert(
      'Map Color Palette → Select different sequential palette',
      () => {
        // Check the fill colors of actual map path elements (same as we use for stroke)
        const geoPaths = canvasElement.querySelectorAll('path.single-geo')
        const firstPath = geoPaths[0] as SVGPathElement
        // Get the fill value from any available source
        const fillAttr = firstPath?.getAttribute('fill') || ''
        const fillStyle = firstPath?.style?.fill || ''
        const computedFill = firstPath ? window.getComputedStyle(firstPath).fill : ''
        const firstColor = fillAttr || fillStyle || computedFill
        return {
          firstColor,
          pathCount: geoPaths.length
        }
      },
      async () => {
        // Find the Sequential palette section
        const spans = Array.from(canvasElement.querySelectorAll('span'))
        const sequentialLabel = spans.find(span => span.textContent?.trim() === 'Sequential')
        const paletteContainer = sequentialLabel?.nextElementSibling

        // Try both li and button elements for palette selection
        const palettes = Array.from(paletteContainer?.querySelectorAll('li, button') || []) as HTMLElement[]

        // Select a different palette (skip the first one as it might be selected)
        const alternativePalette = palettes.find((element, idx) => idx > 0 && !element.classList.contains('selected'))
        if (alternativePalette) {
          await userEvent.click(alternativePalette)

          // Wait for changes to apply, then check for modal
          await new Promise(resolve => setTimeout(resolve, 100))

          // Check if modal appeared and handle it
          const modal = canvasElement.querySelector('.modal-overlay')
          if (modal) {
            const confirmButton = Array.from(canvasElement.querySelectorAll('button')).find(btn =>
              btn.textContent?.includes('Convert to New Palette')
            )
            if (confirmButton) {
              await userEvent.click(confirmButton)
              // Wait for modal to close and changes to apply
              await new Promise(resolve => setTimeout(resolve, 500))
            }
          }
        }
      },
      (before, after) => {
        // After selecting a different palette, the map fill colors should change
        return before.firstColor !== '' && after.firstColor !== '' && before.firstColor !== after.firstColor
      }
    )

    // ==========================================================================
    // TEST: Map Color Palette - Reverse Order
    // ==========================================================================
    // The reverse toggle is an InputToggle component which renders as a div slider
    // Find it via the hidden checkbox with name containing "isReversed"
    const reversePaletteCheckbox = canvasElement.querySelector('input[name*="isReversed"]') as HTMLInputElement
    const reversePaletteToggle = reversePaletteCheckbox?.parentElement as HTMLElement

    expect(reversePaletteToggle).toBeTruthy()

    await performAndAssert(
      'Map Color Palette → Reverse palette order',
      () => {
        // Check the fill colors of map paths
        const geoPaths = canvasElement.querySelectorAll('path.single-geo')
        const firstPath = geoPaths[0] as SVGPathElement
        const fillAttr = firstPath?.getAttribute('fill') || ''
        const fillStyle = firstPath?.style?.fill || ''
        const computedFill = firstPath ? window.getComputedStyle(firstPath).fill : ''
        const firstColor = fillAttr || fillStyle || computedFill
        return {
          firstColor,
          pathCount: geoPaths.length
        }
      },
      async () => {
        await userEvent.click(reversePaletteToggle)
        // No modal should appear - reversing doesn't trigger conversion modal
      },
      (before, after) => {
        // After reversing, the first color should be different
        return before.firstColor !== '' && after.firstColor !== '' && before.firstColor !== after.firstColor
      }
    )

    // ==========================================================================
    // TEST: Geocode Circle Size
    // ==========================================================================
    const geocodeCircleSizeInput = Array.from(canvasElement.querySelectorAll('input[type="number"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Geocode Circle Size')
    }) as HTMLInputElement

    expect(geocodeCircleSizeInput).toBeTruthy()

    await performAndAssert(
      'Geocode Circle Size → Set to 15',
      () => {
        // Check the actual visualization - DC appears as a glyph on the map
        // The glyph class element is a path or circle, look for actual circle element
        const geoPoints = canvasElement.querySelectorAll('g.geo-point')
        const firstGeoPoint = geoPoints[0]
        const circle = firstGeoPoint?.querySelector('circle')
        const r = circle?.getAttribute('r') || ''
        // Also check path elements that might have size in their d attribute
        const path = firstGeoPoint?.querySelector('path')
        const d = path?.getAttribute('d') || ''
        return {
          r,
          d,
          inputValue: geocodeCircleSizeInput.value
        }
      },
      async () => {
        await userEvent.clear(geocodeCircleSizeInput)
        await userEvent.type(geocodeCircleSizeInput, '15')
        await userEvent.tab() // Trigger blur/change event
      },
      (before, after) => {
        // Verify the input value changed to 15
        expect(after.inputValue).toBe('15')
        // After changing the size, either the radius or path data should change
        return (
          (before.r !== '' && after.r !== '' && before.r !== after.r) ||
          (before.d !== '' && after.d !== '' && before.d !== after.d)
        )
      }
    )

    // ==========================================================================
    // TEST: Default City Style
    // ==========================================================================
    const cityStyleSelect = Array.from(canvasElement.querySelectorAll('select')).find(select => {
      const label = select.closest('label')
      return label?.textContent?.includes('Default City Style')
    }) as HTMLSelectElement

    if (cityStyleSelect) {
      await performAndAssert(
        'Default City Style → Change to Triangle',
        () => {
          // Check the actual visualization - look for glyph shapes
          const circles = canvasElement.querySelectorAll('.visx-glyph-circle')
          const triangles = canvasElement.querySelectorAll('.visx-glyph-triangle')
          return {
            circleCount: circles.length,
            triangleCount: triangles.length
          }
        },
        async () => {
          await userEvent.selectOptions(cityStyleSelect, 'triangle')
        },
        (before, after) => {
          // After changing to triangle, should have triangles instead of circles
          return before.triangleCount !== after.triangleCount || before.circleCount !== after.circleCount
        }
      )
    }

    // ==========================================================================
    // TEST: Label (Optional)
    // ==========================================================================
    const cityStyleLabelInput = Array.from(canvasElement.querySelectorAll('input[type="text"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Label (Optional)')
    }) as HTMLInputElement

    if (cityStyleLabelInput) {
      await performAndAssert(
        'Label (Optional) → Set custom label',
        () => {
          // Check if the label appears in the legend
          const legend = canvasElement.querySelector('.legends')
          const legendText = legend?.textContent || ''
          return {
            legendText
          }
        },
        async () => {
          await userEvent.clear(cityStyleLabelInput)
          await userEvent.type(cityStyleLabelInput, 'City Locations')
        },
        (before, after) => {
          // After setting the label, it should appear in the legend
          return after.legendText.includes('City Locations')
        }
      )
    }
  }
}

/**
 * Pattern Settings Section Tests
 * Tests controls in the Pattern Settings accordion (only visible for US maps)
 */
