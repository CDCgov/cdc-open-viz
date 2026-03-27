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

export const LegendSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Legend')

    // ==========================================================================
    // TEST: Legend Type
    // ==========================================================================
    const legendTypeSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Legend Type')
    }) as HTMLSelectElement

    const getLegendType = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      // For gradient legend, get labels from SVG text elements
      const textElements = Array.from(legendContainer?.querySelectorAll('text tspan') || [])
      const labels = textElements.map(el => el.textContent?.trim() || '')
      return {
        legendHTML: legendContainer?.innerHTML || '',
        labels
      }
    }

    await performAndAssert(
      'Legend Type → Equal Interval',
      getLegendType,
      async () => {
        await userEvent.selectOptions(legendTypeSelect, 'equalinterval')
      },
      (before, after) => {
        // Equal interval creates evenly spaced ranges (e.g., "0 - < 43.33", "43.33 - < 86.67")
        return after.labels.length > 0 && after.labels.join(',') !== before.labels.join(',')
      }
    )

    await performAndAssert(
      'Legend Type → Equal Number',
      getLegendType,
      async () => {
        await userEvent.selectOptions(legendTypeSelect, 'equalnumber')
      },
      (before, after) => {
        // Equal number (quantiles) creates ranges with equal counts (e.g., "0 - 40", "40 - 57")
        return after.labels.length > 0 && after.labels.join(',') !== before.labels.join(',')
      }
    )

    // ==========================================================================
    // TEST: Show Legend checkbox
    // ==========================================================================
    const showLegendCheckbox = canvas.getByLabelText('Show Legend')

    const getLegendVisibility = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      return {
        legendExists: Boolean(legendContainer),
        isVisible: legendContainer ? !legendContainer.classList.contains('hidden') : false
      }
    }

    await performAndAssert(
      'Show Legend → Uncheck',
      getLegendVisibility,
      async () => {
        await userEvent.click(showLegendCheckbox)
      },
      (before, after) => {
        return before.isVisible && !after.isVisible
      }
    )

    await performAndAssert(
      'Show Legend → Check',
      getLegendVisibility,
      async () => {
        await userEvent.click(showLegendCheckbox)
      },
      (before, after) => {
        return !before.isVisible && after.isVisible
      }
    )

    // ==========================================================================
    // TEST: Legend Position
    // ==========================================================================
    const legendPositionSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Legend Position')
    }) as HTMLSelectElement

    const getLegendPosition = () => {
      const legendAside = canvasElement.querySelector('aside[aria-label="Legend"]') as HTMLElement
      return {
        classes: legendAside ? Array.from(legendAside.classList) : [],
        isBottom: legendAside?.classList.contains('bottom') ?? false,
        isSide: legendAside?.classList.contains('side') ?? false,
        isTop: legendAside?.classList.contains('top') ?? false
      }
    }

    await performAndAssert(
      'Legend Position → Side',
      getLegendPosition,
      async () => {
        await userEvent.selectOptions(legendPositionSelect, 'side')
      },
      (before, after) => {
        return !before.isSide && after.isSide
      }
    )

    await performAndAssert(
      'Legend Position → Top',
      getLegendPosition,
      async () => {
        await userEvent.selectOptions(legendPositionSelect, 'top')
      },
      (before, after) => {
        return !before.isTop && after.isTop
      }
    )

    await performAndAssert(
      'Legend Position → Bottom',
      getLegendPosition,
      async () => {
        await userEvent.selectOptions(legendPositionSelect, 'bottom')
      },
      (before, after) => {
        return !before.isBottom && after.isBottom
      }
    )

    // ==========================================================================
    // TEST: Legend Style
    // ==========================================================================
    const legendStyleSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Legend Style')
    }) as HTMLSelectElement

    const getLegendStyle = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendItems = legendContainer?.querySelectorAll('.legend-container__li')
      const linearGradient = legendContainer?.querySelector('linearGradient')
      const legendHTML = legendContainer?.innerHTML || ''

      return {
        hasLegendItems: (legendItems?.length ?? 0) > 0,
        hasGradient: Boolean(linearGradient),
        legendHTML
      }
    }

    await performAndAssert(
      'Legend Style → Circles',
      getLegendStyle,
      async () => {
        await userEvent.selectOptions(legendStyleSelect, 'circles')
      },
      (before, after) => {
        return after.hasLegendItems && !after.hasGradient && after.legendHTML !== before.legendHTML
      }
    )

    await performAndAssert(
      'Legend Style → Boxes',
      getLegendStyle,
      async () => {
        await userEvent.selectOptions(legendStyleSelect, 'boxes')
      },
      (before, after) => {
        return after.hasLegendItems && !after.hasGradient && after.legendHTML !== before.legendHTML
      }
    )

    await performAndAssert(
      'Legend Style → Gradient',
      getLegendStyle,
      async () => {
        await userEvent.selectOptions(legendStyleSelect, 'gradient')
      },
      (before, after) => {
        return !before.hasGradient && after.hasGradient
      }
    )

    // ==========================================================================
    // TEST: Gradient Style (only visible when Legend Style is gradient)
    // ==========================================================================
    const gradientStyleSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      return label?.textContent?.includes('Gradient Style')
    }) as HTMLSelectElement

    const getGradientStyle = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const svgHTML = legendContainer?.querySelector('svg')?.outerHTML || ''

      return {
        svgHTML,
        hasLinearGradient: svgHTML.includes('linearGradient')
      }
    }

    await performAndAssert(
      'Gradient Style → Linear blocks',
      getGradientStyle,
      async () => {
        await userEvent.selectOptions(gradientStyleSelect, 'linear blocks')
      },
      (before, after) => {
        return after.hasLinearGradient && after.svgHTML !== before.svgHTML
      }
    )

    await performAndAssert(
      'Gradient Style → Smooth',
      getGradientStyle,
      async () => {
        await userEvent.selectOptions(gradientStyleSelect, 'smooth')
      },
      (before, after) => {
        return after.hasLinearGradient && after.svgHTML !== before.svgHTML
      }
    )

    // ==========================================================================
    // TEST: Tick Rotation (only visible when Legend Style is gradient)
    // ==========================================================================
    const tickRotationInput = Array.from(canvasElement.querySelectorAll('input[type="number"]') || []).find(input => {
      const label = input.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Tick Rotation')
    }) as HTMLInputElement

    const getTickRotation = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const svgHTML = legendContainer?.querySelector('svg')?.outerHTML || ''
      const textElements = Array.from(legendContainer?.querySelectorAll('text') || [])
      const transforms = textElements.map(el => el.getAttribute('transform') || '')
      return {
        svgHTML,
        transforms,
        hasRotation: transforms.some(t => t.includes('rotate'))
      }
    }

    await performAndAssert(
      'Tick Rotation → Set to 45 degrees',
      getTickRotation,
      async () => {
        await userEvent.clear(tickRotationInput)
        await userEvent.type(tickRotationInput, '45')
      },
      (before, after) => {
        // Check that rotation transform is applied to text elements
        return after.hasRotation && after.svgHTML !== before.svgHTML
      }
    )

    // ==========================================================================
    // TEST: Hide Legend Box
    // ==========================================================================
    const hideLegendBoxCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]') || []).find(
      input => {
        const label = input.closest('label')
        const labelSpan = label?.querySelector('.edit-label')
        return labelSpan?.textContent?.includes('Hide Legend Box')
      }
    ) as HTMLInputElement

    const getLegendBorder = () => {
      const legendAside = canvasElement.querySelector('aside[aria-label="Legend"]') as HTMLElement
      return {
        hasNoBorder: legendAside?.classList.contains('no-border') ?? false
      }
    }

    await performAndAssert(
      'Hide Legend Box → Uncheck',
      getLegendBorder,
      async () => {
        await userEvent.click(hideLegendBoxCheckbox)
      },
      (before, after) => {
        return before.hasNoBorder && !after.hasNoBorder
      }
    )

    await performAndAssert(
      'Hide Legend Box → Check',
      getLegendBorder,
      async () => {
        await userEvent.click(hideLegendBoxCheckbox)
      },
      (before, after) => {
        return !before.hasNoBorder && after.hasNoBorder
      }
    )

    // ==========================================================================
    // TEST: Vertical sorted legend
    // ==========================================================================
    // First switch to boxes style and side position to enable vertical sorting
    await userEvent.selectOptions(legendStyleSelect, 'boxes')
    await userEvent.selectOptions(legendPositionSelect, 'side')

    const verticalSortedCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]') || []).find(
      input => {
        const label = input.closest('label')
        const labelSpan = label?.querySelector('.edit-label')
        return labelSpan?.textContent?.includes('Vertical sorted legend')
      }
    ) as HTMLInputElement

    const getVerticalSorted = () => {
      const legendUl = canvasElement.querySelector('.legend-container__ul')
      return {
        hasVerticalSorted: legendUl?.classList.contains('vertical-sorted') ?? false
      }
    }

    await performAndAssert(
      'Vertical sorted legend → Check',
      getVerticalSorted,
      async () => {
        await userEvent.click(verticalSortedCheckbox)
      },
      (before, after) => {
        return !before.hasVerticalSorted && after.hasVerticalSorted
      }
    )

    await performAndAssert(
      'Vertical sorted legend → Uncheck',
      getVerticalSorted,
      async () => {
        await userEvent.click(verticalSortedCheckbox)
      },
      (before, after) => {
        return before.hasVerticalSorted && !after.hasVerticalSorted
      }
    )

    // NOTE: Show Special Classes Last is skipped because it doesn't produce
    // visible changes with the current test data (no special classes present)

    // ==========================================================================
    // TEST: Separate Zero
    // ==========================================================================
    const separateZeroCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]') || []).find(
      input => {
        const label = input.closest('label')
        const labelSpan = label?.querySelector('.edit-label')
        return labelSpan?.textContent?.includes('Separate Zero')
      }
    ) as HTMLInputElement

    const getSeparateZero = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendItems = Array.from(legendContainer?.querySelectorAll('.legend-container__li') || [])
      const itemLabels = legendItems.map(item => item.textContent?.trim() || '')
      const hasZeroItem = itemLabels.some(label => label.includes('0') && !label.match(/[1-9]/))
      return {
        itemCount: legendItems.length,
        itemLabels,
        hasZeroItem
      }
    }

    await performAndAssert(
      'Separate Zero → Check',
      getSeparateZero,
      async () => {
        await userEvent.click(separateZeroCheckbox)
      },
      (before, after) => {
        // Should separate zero into its own legend item (e.g., "0" instead of "0 - 40")
        return after.hasZeroItem && after.itemLabels.join(',') !== before.itemLabels.join(',')
      }
    )

    await performAndAssert(
      'Separate Zero → Uncheck',
      getSeparateZero,
      async () => {
        await userEvent.click(separateZeroCheckbox)
      },
      (before, after) => {
        // Should merge zero back into a range
        return !after.hasZeroItem && after.itemLabels.join(',') !== before.itemLabels.join(',')
      }
    )

    // ==========================================================================
    // TEST: Number of Items
    // ==========================================================================
    const numberOfItemsSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Number of Items')
    }) as HTMLSelectElement

    const getNumberOfItems = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendItems = legendContainer?.querySelectorAll('.legend-container__li')
      return {
        itemCount: legendItems?.length ?? 0,
        legendHTML: legendContainer?.innerHTML || ''
      }
    }

    await performAndAssert(
      'Number of Items → Set to 5',
      getNumberOfItems,
      async () => {
        await userEvent.selectOptions(numberOfItemsSelect, '5')
      },
      (before, after) => {
        // Should have 5 legend items
        return after.itemCount === 5 && after.itemCount !== before.itemCount
      }
    )

    await performAndAssert(
      'Number of Items → Set to 3',
      getNumberOfItems,
      async () => {
        await userEvent.selectOptions(numberOfItemsSelect, '3')
      },
      (before, after) => {
        // Should have 3 legend items
        return after.itemCount === 3 && after.itemCount !== before.itemCount
      }
    )

    // Switch back to gradient for the legend title test
    await userEvent.selectOptions(legendPositionSelect, 'bottom')
    await userEvent.selectOptions(legendStyleSelect, 'gradient')

    // ==========================================================================
    // TEST: Legend Title
    // ==========================================================================
    const legendTitleInput = Array.from(canvasElement.querySelectorAll('input[type="text"]') || []).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Legend Title')
    }) as HTMLInputElement

    const getLegendTitle = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const titleElement = legendContainer?.querySelector('.legend-container__title, .legend-title')
      return {
        titleText: titleElement?.textContent?.trim() || '',
        titleExists: Boolean(titleElement),
        legendHTML: legendContainer?.innerHTML || ''
      }
    }

    await performAndAssert(
      'Legend Title → Set custom title',
      getLegendTitle,
      async () => {
        await userEvent.clear(legendTitleInput)
        await userEvent.type(legendTitleInput, 'Custom Legend Title')
      },
      (before, after) => {
        return after.titleText.includes('Custom Legend Title') && after.legendHTML !== before.legendHTML
      }
    )

    // ==========================================================================
    // TEST: Legend Description
    // ==========================================================================
    const legendDescriptionTextarea = Array.from(canvasElement.querySelectorAll('textarea') || []).find(textarea => {
      const label = textarea.closest('label')
      return label?.textContent?.includes('Legend Description')
    }) as HTMLTextAreaElement

    const getLegendDescription = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const descriptionElement = legendContainer?.querySelector('.legend-container__description, .legend-description')
      return {
        descriptionText: descriptionElement?.textContent?.trim() || '',
        descriptionExists: Boolean(descriptionElement),
        legendHTML: legendContainer?.innerHTML || ''
      }
    }

    await performAndAssert(
      'Legend Description → Set custom description',
      getLegendDescription,
      async () => {
        await userEvent.clear(legendDescriptionTextarea)
        await userEvent.type(legendDescriptionTextarea, 'This is a custom legend description for testing.')
      },
      (before, after) => {
        return (
          after.descriptionText.includes('This is a custom legend description') &&
          after.legendHTML !== before.legendHTML
        )
      }
    )
  }
}
