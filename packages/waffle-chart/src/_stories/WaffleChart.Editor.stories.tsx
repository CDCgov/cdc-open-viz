import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import WaffleChart from '../CdcWaffleChart'
import {
  MIN_ANIMATION_DELAY_MS,
  pollUntil,
  performAndAssert,
  waitForPresence,
  waitForAbsence,
  waitForTextContent,
  waitForEditor,
  openAccordion
} from '@cdc/core/helpers/testing'

const meta: Meta<typeof WaffleChart> = {
  title: 'Components/Templates/WaffleChart/Editor Tests',
  component: WaffleChart,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof WaffleChart>

// ============================================================================
// SHARED HELPERS - Now imported from @cdc/core/helpers/testing
// ============================================================================

/**
 * GENERAL SECTION TESTS
 * Tests all functionality within the General accordion
 */
export const GeneralSectionTests: Story = {
  args: {
    configUrl: '/packages/waffle-chart/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas, expect)
    await openAccordion(canvas, 'General', userEvent)

    // ============================================================================
    // TEST 1: Chart Type Change (Waffle to Gauge and back)
    // ============================================================================
    const chartTypeSelect = canvasElement.querySelector('select[name="visualizationType"]') as HTMLSelectElement
    expect(chartTypeSelect).toBeTruthy()

    let waffleContainer = canvasElement.querySelector('.cove-waffle-chart')
    expect(waffleContainer).toBeTruthy()
    let gaugeContainer = canvasElement.querySelector('.cove-gauge-chart')
    expect(gaugeContainer).toBeFalsy()

    await userEvent.selectOptions(chartTypeSelect, 'Gauge')
    await waitForPresence('.cove-gauge-chart', canvasElement)
    await waitForAbsence('.cove-waffle-chart', canvasElement)

    gaugeContainer = canvasElement.querySelector('.cove-gauge-chart')
    expect(gaugeContainer).toBeTruthy()
    waffleContainer = canvasElement.querySelector('.cove-waffle-chart')
    expect(waffleContainer).toBeFalsy()

    const gaugeSvg = gaugeContainer.querySelector('svg')
    expect(gaugeSvg).toBeTruthy()

    await userEvent.selectOptions(chartTypeSelect, 'Waffle')
    await waitForPresence('.cove-waffle-chart', canvasElement)
    await waitForAbsence('.cove-gauge-chart', canvasElement)

    waffleContainer = canvasElement.querySelector('.cove-waffle-chart')
    expect(waffleContainer).toBeTruthy()
    gaugeContainer = canvasElement.querySelector('.cove-gauge-chart')
    expect(gaugeContainer).toBeFalsy()

    const waffleSvg = waffleContainer.querySelector('svg')
    expect(waffleSvg).toBeTruthy()
    const waffleNodes = waffleSvg.querySelectorAll('rect, circle, path')
    expect(waffleNodes.length).toBeGreaterThan(0)

    // ============================================================================
    // TEST 2: Title Update
    // Expectation: Header text updates to new string.
    // ============================================================================
    const titleInput = canvas.getByDisplayValue(/test waffle chart title/i)
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Updated Waffle Chart Title E2E')
    // Poll for header text update
    await performAndAssert(
      'Title Update',
      () => canvasElement.querySelector('.cove-component__header h2')?.textContent?.trim() || '',
      async () => {}, // action already performed above
      (before, after) => after === 'Updated Waffle Chart Title E2E',
      expect
    )

    const chartTitleHeader = canvasElement.querySelector('.cove-component__header h2')
    expect(chartTitleHeader).toBeTruthy()
    expect(chartTitleHeader.textContent.trim()).toBe('Updated Waffle Chart Title E2E')

    // ============================================================================
    // TEST 3: Show Title Toggle
    // Expectation: Header region appears / disappears (DOM visibility change).
    // ============================================================================
    const showTitleCheckbox = canvasElement.querySelector('input[name*="showTitle"]') as HTMLInputElement
    const checkboxWrapper = showTitleCheckbox?.closest('.cove-input__checkbox--small')
    expect(showTitleCheckbox).toBeTruthy()
    expect(checkboxWrapper).toBeTruthy()

    const wasChecked = showTitleCheckbox.checked
    await performAndAssert(
      'Title Toggle',
      () => showTitleCheckbox.checked,
      async () => {
        await userEvent.click(checkboxWrapper as HTMLElement)
      },
      (before, after) => after === !wasChecked,
      expect
    )
    expect(showTitleCheckbox.checked).toBe(!wasChecked)

    const chartTitleHeaderAfterToggle = canvasElement.querySelector('.cove-component__header')
    if (showTitleCheckbox.checked) {
      expect(chartTitleHeaderAfterToggle).toBeTruthy()
      expect(chartTitleHeaderAfterToggle).not.toHaveStyle('display: none')
    } else {
      expect(chartTitleHeaderAfterToggle).toBeFalsy()
    }

    await performAndAssert(
      'Title Toggle Reset',
      () => showTitleCheckbox.checked,
      async () => {
        await userEvent.click(checkboxWrapper as HTMLElement)
      },
      (before, after) => after === wasChecked,
      expect
    )

    // ============================================================================
    // TEST 4: Message / Content Change
    // Expectation: Primary message text node updates to new content string.
    // ============================================================================
    const contentTextarea = canvasElement.querySelector('textarea[name*="content"]') as HTMLTextAreaElement
    expect(contentTextarea).toBeTruthy()

    const newContent = 'Updated test message for E2E testing'
    await userEvent.clear(contentTextarea)
    await userEvent.type(contentTextarea, newContent)
    await waitForTextContent(
      canvasElement.querySelector('.cove-waffle-chart__data--text') as HTMLElement,
      newContent,
      expect
    )

    const chartContentElement = canvasElement.querySelector('.cove-waffle-chart__data--text')
    expect(chartContentElement).toBeTruthy()
    expect(chartContentElement.textContent.trim()).toBe(newContent)

    // ============================================================================
    // TEST 5: Subtext / Citation Change
    // Expectation: Subtext element text content updates to new citation string.
    // ============================================================================
    const subtextInput = canvasElement.querySelector('input[name*="subtext"]') as HTMLInputElement
    expect(subtextInput).toBeTruthy()

    const newSubtext = 'Updated test citation for E2E testing'
    await userEvent.clear(subtextInput)
    await userEvent.type(subtextInput, newSubtext)
    await waitForTextContent(
      canvasElement.querySelector('.cove-waffle-chart__subtext') as HTMLElement,
      newSubtext,
      expect
    )

    const chartSubtextElement = canvasElement.querySelector('.cove-waffle-chart__subtext')
    expect(chartSubtextElement).toBeTruthy()
    expect(chartSubtextElement.textContent.trim()).toBe(newSubtext)
  }
}
/**
 * DATA SECTION TESTS
 * Tests all functionality within the Data accordion
 */
export const DataSectionTests: Story = {
  args: {
    configUrl: '/packages/waffle-chart/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas, expect)
    await openAccordion(canvas, 'Data', userEvent)

    const getPrimaryEl = () => {
      const el = canvasElement.querySelector('.cove-waffle-chart__data--primary') as HTMLElement
      expect(el).toBeTruthy()
      return el
    }
    const getValueText = () => getPrimaryEl().textContent?.trim() || ''

    // ============================================================================
    // TEST 1: Data Column Change (Deaths <-> Total Overdoses)
    // Expectation: Primary value text changes.
    // ============================================================================
    const dataColumnSelect = canvasElement.querySelector('select[name="dataColumn"]') as HTMLSelectElement
    await performAndAssert(
      'Data Column Change',
      getValueText,
      async () => {
        const target = dataColumnSelect.value === 'Deaths' ? 'Total Overdoses' : 'Deaths'
        await userEvent.selectOptions(dataColumnSelect, target)
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 2: Data Function Change (Sum <-> Mean)
    // Expectation: Primary value text changes.
    // ============================================================================
    const dataFunctionSelect = canvasElement.querySelector('select[name="dataFunction"]') as HTMLSelectElement
    await performAndAssert(
      'Data Function Change',
      getValueText,
      async () => {
        const target = dataFunctionSelect.value === 'Sum' ? 'Mean (Average)' : 'Sum'
        await userEvent.selectOptions(dataFunctionSelect, target)
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 3: Conditional Column & Operator Setup
    // Expectation: No value change asserted (preparing rule).
    // ============================================================================
    const conditionalColumnSelect = canvasElement.querySelector(
      'select[name="dataConditionalColumn"]'
    ) as HTMLSelectElement
    const conditionalOperatorSelect = canvasElement.querySelector(
      'select[name="dataConditionalOperator"]'
    ) as HTMLSelectElement
    await userEvent.selectOptions(conditionalColumnSelect, 'Deaths')
    await userEvent.selectOptions(conditionalOperatorSelect, '<')
    // ============================================================================
    // TEST 4: Conditional Value Entry (<5 fallback 1)
    // Expectation: Primary value text changes (filter applied).
    // ============================================================================
    const conditionalValueInput = canvasElement.querySelector(
      'input[name="null-null-dataConditionalComparate"]'
    ) as HTMLInputElement
    await performAndAssert(
      'Conditional Value Entry',
      getValueText,
      async () => {
        await userEvent.clear(conditionalValueInput)
        await userEvent.type(conditionalValueInput, '5')
      },
      (before, after) => after !== before,
      expect
    )
    // ============================================================================
    // TEST 5: Clear Conditional Value (restore dataset)
    // Expectation: Primary value text changes (dataset restored).
    // ============================================================================
    await performAndAssert(
      'Clear Conditional Value',
      getValueText,
      async () => {
        await userEvent.clear(conditionalValueInput)
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 6: Denominator Function Toggle (Sum <-> Mean)
    // Expectation: Primary value text changes.
    // ============================================================================
    const denomFunctionSelect = canvasElement.querySelector('select[name="dataDenomFunction"]') as HTMLSelectElement
    await performAndAssert(
      'Denominator Function Toggle',
      getValueText,
      async () => {
        const target = denomFunctionSelect.value === 'Sum' ? 'Mean (Average)' : 'Sum'
        await userEvent.selectOptions(denomFunctionSelect, target)
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 7: Denominator Column Toggle (Deaths <-> Total Overdoses)
    // Expectation: Primary value text changes.
    // ============================================================================
    const denomColumnSelect = canvasElement.querySelector('select[name="dataDenomColumn"]') as HTMLSelectElement
    await performAndAssert(
      'Denominator Column Toggle',
      getValueText,
      async () => {
        const target = denomColumnSelect.value === 'Deaths' ? 'Total Overdoses' : 'Deaths'
        await userEvent.selectOptions(denomColumnSelect, target)
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 8: Denominator Function Re-Toggle
    // Expectation: Primary value text changes again (stability validation).
    // ============================================================================
    await performAndAssert(
      'Denominator Function Re-Toggle',
      getValueText,
      async () => {
        const target = denomFunctionSelect.value === 'Sum' ? 'Mean (Average)' : 'Sum'
        await userEvent.selectOptions(denomFunctionSelect, target)
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 9: Custom Denominator Checkbox Toggle (enable static)
    // Expectation: Primary value text changes switching to static denominator mode.
    // ============================================================================
    const customDenomCheckbox = canvasElement.querySelector('input[name*="customDenom"]') as HTMLInputElement
    const customDenomWrapper = customDenomCheckbox.closest('.cove-input__checkbox--small') as HTMLElement
    await performAndAssert(
      'Custom Denominator Toggle',
      getValueText,
      async () => {
        await userEvent.click(customDenomWrapper)
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 10: Static Denominator Value -> 150
    // Expectation: Primary value text changes.
    // ============================================================================
    const staticDenomInput = canvasElement.querySelector('input[name="null-null-dataDenom"]') as HTMLInputElement
    await performAndAssert(
      'Static Denominator 150',
      getValueText,
      async () => {
        await userEvent.clear(staticDenomInput)
        await userEvent.type(staticDenomInput, '150')
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 11: Static Denominator Value -> 160
    // Expectation: Primary value text changes again.
    // ============================================================================
    await performAndAssert(
      'Static Denominator 160',
      getValueText,
      async () => {
        await userEvent.clear(staticDenomInput)
        await userEvent.type(staticDenomInput, '160')
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 12: Increase Precision (Round=1)
    // Expectation: Primary value text formatting changes (decimal introduced).
    // ============================================================================
    const roundingInput = canvasElement.querySelector('input[name*="roundToPlace"]') as HTMLInputElement
    await performAndAssert(
      'Increase Precision',
      getValueText,
      async () => {
        await userEvent.clear(roundingInput)
        await userEvent.type(roundingInput, '1')
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 13: Reset Precision (Round=0)
    // Expectation: Primary value text formatting changes again (decimal removed).
    // ============================================================================
    await performAndAssert(
      'Reset Precision',
      getValueText,
      async () => {
        await userEvent.clear(roundingInput)
        await userEvent.type(roundingInput, '0')
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 14: Prefix -> $ (Formatting)
    // Expectation: Value starts with '$' and differs from prior snapshot.
    // ============================================================================
    const prefixInput = canvasElement.querySelector('input[name*="prefix"]') as HTMLInputElement
    const valueBeforePrefix = getValueText()
    await userEvent.clear(prefixInput)
    await userEvent.type(prefixInput, '$')

    // Wait for prefix to be applied with proper polling
    await pollUntil(
      getValueText,
      (curr, elapsed) => curr !== valueBeforePrefix && curr.startsWith('$') && elapsed >= MIN_ANIMATION_DELAY_MS
    )

    expect(prefixInput.value).toBe('$')
    const afterPrefix = getValueText()
    expect(afterPrefix.startsWith('$')).toBe(true)
    expect(afterPrefix).not.toBe(valueBeforePrefix)

    // ============================================================================
    // TEST 15: Suffix -> ' deaths'
    // Expectation: Value ends with 'deaths' and differs from prior snapshot.
    // ============================================================================
    const suffixInput = canvasElement.querySelector('input[name*="suffix"]') as HTMLInputElement
    await userEvent.clear(suffixInput)
    await userEvent.type(suffixInput, ' deaths')

    // Wait for suffix to be applied with proper polling
    await pollUntil(
      getValueText,
      (curr, elapsed) => curr !== afterPrefix && curr.endsWith('deaths') && elapsed >= MIN_ANIMATION_DELAY_MS
    )

    expect(suffixInput.value).toBe(' deaths')
    const afterSuffix = getValueText()
    expect(afterSuffix.endsWith('deaths')).toBe(true)
    expect(afterSuffix).not.toBe(afterPrefix)

    // ============================================================================
    // TEST 16: Add Filter (state = Alaska)
    // Expectation: Primary value text changes after filter applied.
    // ============================================================================
    const addFilterButton = Array.from(canvasElement.querySelectorAll('button')).find(
      b => b.textContent?.trim() === 'Add Filter'
    ) as HTMLButtonElement
    await performAndAssert(
      'Add Filter',
      getValueText,
      async () => {
        await userEvent.click(addFilterButton)
        // Poll for filter UI to appear instead of fixed sleep
        await pollUntil(
          () => canvasElement.querySelector('.filters-list .edit-block:last-of-type'),
          (curr, elapsed) => !!curr && elapsed >= MIN_ANIMATION_DELAY_MS
        )
        const newFilter = canvasElement.querySelector('.filters-list .edit-block:last-of-type') as HTMLElement
        const [colSelect, valSelect] = Array.from(newFilter.querySelectorAll('select')) as HTMLSelectElement[]
        await userEvent.selectOptions(colSelect, 'state')
        // Brief wait for value options to populate
        await pollUntil(
          () => valSelect.options.length,
          (curr, elapsed) => curr > 1 && elapsed >= MIN_ANIMATION_DELAY_MS
        )
        await userEvent.selectOptions(valSelect, 'Alaska')
      },
      (before, after) => after !== before,
      expect
    )
  }
}

/**
 * VISUAL SECTION TESTS
 * Tests all functionality within the Visual accordion
 */
export const VisualSectionTests: Story = {
  args: {
    configUrl: '/packages/waffle-chart/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas, expect)
    await openAccordion(canvas, 'Visual', userEvent)
    // Core helper functions used throughout the visual tests
    const waffleRoot = () => canvasElement.querySelector('.cove-waffle-chart') as HTMLElement
    const contentContainer = () => canvasElement.querySelector('.cove-component__content > div') as HTMLElement
    expect(waffleRoot()).toBeTruthy()

    // ============================================================================
    // TEST 1: Shape Change
    // Expectation: Exclusive primitive set switches (only rects OR only circles OR only paths)
    // ============================================================================
    const shapeSig = () => {
      const svg = waffleRoot()?.querySelector('svg')
      if (!svg) return { rect: 0, circle: 0, path: 0 }
      const rect = svg.querySelectorAll('rect').length
      const circle = svg.querySelectorAll('circle').length
      // exclude path elements that might not be person nodes? (All paths for person nodes only here)
      const path = svg.querySelectorAll('path').length
      return { rect, circle, path }
    }

    const shapeSelect = canvas.getByLabelText(/shape/i) as HTMLSelectElement
    const chooseNextNonPersonIfNeeded = () => {
      const order = ['circle', 'square', 'person']
      let idx = order.indexOf(shapeSelect.value)
      let target = order[(idx + 1) % order.length]
      if (target === 'person') target = order[(order.indexOf(target) + 1) % order.length]
      return target
    }
    await performAndAssert(
      'Shape Change',
      shapeSig,
      async () => {
        const target = chooseNextNonPersonIfNeeded()
        await userEvent.selectOptions(shapeSelect, target)
      },
      (before, after) =>
        (before.rect !== after.rect || before.circle !== after.circle || before.path !== after.path) &&
        [after.rect, after.circle, after.path].filter(c => c > 0).length === 1,
      expect
    )

    // ============================================================================
    // TEST 2: Width (nodeWidth) Change
    // Expectation: SVG width attribute changes (numeric resize)
    // ============================================================================
    const svgWidth = () => {
      const svg = waffleRoot()?.querySelector('svg')
      return svg ? parseInt(svg.getAttribute('width') || '0', 10) : 0
    }

    const widthInput = canvasElement.querySelector('input[name="null-null-nodeWidth"]') as HTMLInputElement
    expect(widthInput).toBeTruthy()
    await performAndAssert(
      'Width Change',
      svgWidth,
      async () => {
        const cur = parseInt(widthInput.value)
        const next = isNaN(cur) ? 12 : cur + 1
        await userEvent.clear(widthInput)
        await userEvent.type(widthInput, String(next))
        widthInput.blur()
      },
      (before, after) => after !== before && after > 0,
      expect
    )

    // ============================================================================
    // TEST 3: Spacer (nodeSpacer) Change
    // Expectation: Inter-node spacing (delta between first two nodes) changes.
    // ============================================================================
    const nodeSpacing = () => {
      const svg = waffleRoot()?.querySelector('svg')
      if (!svg) return 0
      const node = svg.querySelectorAll('rect, circle')
      if (node.length < 2) return 0
      // Use x vs cx
      const a = (node[0] as any).getAttribute('x') || (node[0] as any).getAttribute('cx') || '0'
      const b = (node[1] as any).getAttribute('x') || (node[1] as any).getAttribute('cx') || '0'
      return Math.abs(parseFloat(b) - parseFloat(a))
    }

    const spacerInput = canvasElement.querySelector('input[name="null-null-nodeSpacer"]') as HTMLInputElement
    expect(spacerInput).toBeTruthy()
    await performAndAssert(
      'Spacer Change',
      nodeSpacing,
      async () => {
        const cur = parseInt(spacerInput.value)
        const next = isNaN(cur) ? 3 : cur === 2 ? 4 : 2
        await userEvent.clear(spacerInput)
        await userEvent.type(spacerInput, String(next))
        spacerInput.blur()
      },
      (before, after) => after !== before,
      expect
    )

    // ============================================================================
    // TEST 4: Layout (orientation) Change
    // Expectation: Class 'cove-waffle-chart--verical' toggles presence.
    // ============================================================================
    const layoutSelect = canvas.getByLabelText(/layout/i) as HTMLSelectElement
    await performAndAssert(
      'Layout Change',
      () => ({ hasClass: waffleRoot().classList.contains('cove-waffle-chart--verical'), width: svgWidth() }),
      async () => {
        const target = layoutSelect.value === 'horizontal' ? 'vertical' : 'horizontal'
        await userEvent.selectOptions(layoutSelect, target)
      },
      (before, after) =>
        before.hasClass !== after.hasClass || // primary signal
        (after.width !== before.width && after.width > 0), // fallback: width change due to ratio recalculation
      expect
    )

    // ============================================================================
    // TEST 5: Data Point Font Size Change
    // Expectation: Inline style font-size on primary value changes.
    // ============================================================================
    const primaryEl = () => waffleRoot()?.querySelector('.cove-waffle-chart__data--primary') as HTMLElement | null
    const inlinePrimaryFontSize = () => primaryEl()?.style.fontSize || ''

    const pointFontSizeInput = canvasElement.querySelector('input[name="null-null-fontSize"]') as HTMLInputElement
    expect(pointFontSizeInput).toBeTruthy()
    await performAndAssert(
      'Data Point Font Size Change',
      inlinePrimaryFontSize,
      async () => {
        const cur = parseInt(pointFontSizeInput.value)
        const next = isNaN(cur) ? 45 : cur === 40 ? 42 : 40
        await userEvent.clear(pointFontSizeInput)
        await userEvent.type(pointFontSizeInput, String(next))
        pointFontSizeInput.blur()
      },
      (before, after) => before !== after && after.length > 0,
      expect
    )

    // ============================================================================
    // TEST 6: Overall Font Size Change
    // Expectation: font-small|font-medium|font-large class changes on waffle root.
    // ============================================================================
    const overallFontClass = () => {
      const root = waffleRoot()
      if (!root) return ''
      if (root.classList.contains('font-small')) return 'font-small'
      if (root.classList.contains('font-medium')) return 'font-medium'
      if (root.classList.contains('font-large')) return 'font-large'
      return ''
    }

    const overallFontSizeSelect = canvas.getByLabelText(/overall font size/i) as HTMLSelectElement
    await performAndAssert(
      'Overall Font Size Change',
      overallFontClass,
      async () => {
        const cycle = ['small', 'medium', 'large']
        const idx = cycle.indexOf(overallFontSizeSelect.value)
        const target = cycle[(idx + 1) % cycle.length]
        await userEvent.selectOptions(overallFontSizeSelect, target)
      },
      (before, after) => before !== after && ['font-small', 'font-medium', 'font-large'].includes(after),
      expect
    )

    // ============================================================================
    // TEST 7: Theme Palette Change
    // Expectation: Fill color of first node changes.
    // ============================================================================
    const firstNodeFill = () => {
      const svg = waffleRoot()?.querySelector('svg')
      if (!svg) return ''
      const node = svg.querySelector('rect, circle, path') as
        | (SVGElement & { getAttribute(name: string): string })
        | null
      return node?.getAttribute('fill') || ''
    }

    const themeButtons = Array.from(canvasElement.querySelectorAll('.color-palette li')) as HTMLElement[]
    expect(themeButtons.length).toBeGreaterThan(1)
    await performAndAssert(
      'Theme Change',
      firstNodeFill,
      async () => {
        const selected = themeButtons.find(b => b.classList.contains('selected'))
        const next = themeButtons.find(b => !b.classList.contains('selected')) || themeButtons[0]
        if (next !== selected) await userEvent.click(next)
        else await userEvent.click(themeButtons[(themeButtons.indexOf(next) + 1) % themeButtons.length])
      },
      (before, after) => after !== before && after.length > 0,
      expect
    )

    // ============================================================================
    // TEST 8: Display Border Toggle
    // Expectation: Class 'no-borders' on content container toggles.
    // ============================================================================
    const contentClassSig = () => Array.from(contentContainer().classList).sort().join(' ')

    const borderCheckbox = canvasElement.querySelector('input[name="visual-null-border"]') as HTMLInputElement
    expect(borderCheckbox).toBeTruthy()
    const borderWrapper = borderCheckbox.closest('.cove-input__checkbox--small') as HTMLElement
    expect(borderWrapper).toBeTruthy()
    const borderStyleSig = () => {
      const el = contentContainer()
      const cs = getComputedStyle(el)
      return {
        classes: contentClassSig(),
        top: cs.borderTopWidth + ' ' + cs.borderTopStyle + ' ' + cs.borderTopColor,
        right: cs.borderRightWidth + ' ' + cs.borderRightStyle + ' ' + cs.borderRightColor,
        color: cs.borderColor
      }
    }
    await performAndAssert(
      'Border Toggle',
      borderStyleSig,
      async () => {
        await userEvent.click(borderWrapper)
      },
      (before, after) =>
        before.classes !== after.classes ||
        before.top !== after.top ||
        before.right !== after.right ||
        before.color !== after.color,
      expect
    )

    // ============================================================================
    // TEST 9: Theme Border Color Toggle
    // Expectation: Class 'component--has-borderColorTheme' toggles.
    // ============================================================================
    const borderColorThemeCheckbox = canvasElement.querySelector(
      'input[name="visual-null-borderColorTheme"]'
    ) as HTMLInputElement
    expect(borderColorThemeCheckbox).toBeTruthy()
    const borderColorThemeWrapper = borderColorThemeCheckbox.closest('.cove-input__checkbox--small') as HTMLElement
    expect(borderColorThemeWrapper).toBeTruthy()
    await performAndAssert(
      'Border Color Theme Toggle',
      contentClassSig,
      async () => {
        await userEvent.click(borderColorThemeWrapper)
      },
      (before, after) =>
        before !== after && (after.includes('borderColorTheme') || before.includes('borderColorTheme')),
      expect
    )

    // ============================================================================
    // TEST 10: Accent Style Toggle
    // Expectation: Class 'component--has-accent' toggles.
    // ============================================================================
    const accentCheckbox = canvasElement.querySelector('input[name="visual-null-accent"]') as HTMLInputElement
    expect(accentCheckbox).toBeTruthy()
    const accentWrapper = accentCheckbox.closest('.cove-input__checkbox--small') as HTMLElement
    expect(accentWrapper).toBeTruthy()
    await performAndAssert(
      'Accent Toggle',
      contentClassSig,
      async () => {
        await userEvent.click(accentWrapper)
      },
      (before, after) => before !== after,
      expect
    )

    // ============================================================================
    // TEST 11: Theme Background Color Toggle
    // Expectation: Class 'component--has-background' toggles.
    // ============================================================================
    const backgroundCheckbox = canvasElement.querySelector('input[name="visual-null-background"]') as HTMLInputElement
    expect(backgroundCheckbox).toBeTruthy()
    const backgroundWrapper = backgroundCheckbox.closest('.cove-input__checkbox--small') as HTMLElement
    expect(backgroundWrapper).toBeTruthy()
    await performAndAssert(
      'Background Toggle',
      contentClassSig,
      async () => {
        await userEvent.click(backgroundWrapper)
      },
      (before, after) => before !== after,
      expect
    )

    // ============================================================================
    // TEST 12: Hide Background Color Toggle
    // Expectation: Class 'component--hideBackgroundColor' toggles.
    // ============================================================================
    const hideBackgroundCheckbox = canvasElement.querySelector(
      'input[name="visual-null-hideBackgroundColor"]'
    ) as HTMLInputElement
    expect(hideBackgroundCheckbox).toBeTruthy()
    const hideBackgroundWrapper = hideBackgroundCheckbox.closest('.cove-input__checkbox--small') as HTMLElement
    expect(hideBackgroundWrapper).toBeTruthy()
    await performAndAssert(
      'Hide Background Toggle',
      contentClassSig,
      async () => {
        await userEvent.click(hideBackgroundWrapper)
      },
      (before, after) => before !== after,
      expect
    )
  }
}
