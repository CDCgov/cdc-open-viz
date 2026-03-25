import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import WaffleChart from '../CdcWaffleChart'
import {
  performAndAssert,
  waitForPresence,
  waitForAbsence,
  waitForOptionsToPopulate,
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
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

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
      () => canvasElement.querySelector('.cove-visualization__header h2')?.textContent?.trim() || '',
      async () => {}, // action already performed above
      (before, after) => after === 'Updated Waffle Chart Title E2E'
    )

    const chartTitleHeader = canvasElement.querySelector('.cove-visualization__header h2')
    expect(chartTitleHeader).toBeTruthy()
    expect(chartTitleHeader.textContent.trim()).toBe('Updated Waffle Chart Title E2E')

    // ============================================================================
    // TEST 3: Show Title Toggle
    // Expectation: Header region appears / disappears (DOM visibility change).
    // ============================================================================
    // Find show title checkbox by label text
    const showTitleCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('show title')
    }) as HTMLInputElement
    const checkboxWrapper = showTitleCheckbox?.closest('label.checkbox')
    expect(showTitleCheckbox).toBeTruthy()
    expect(checkboxWrapper).toBeTruthy()

    const wasChecked = showTitleCheckbox.checked
    await performAndAssert(
      'Title Toggle',
      () => showTitleCheckbox.checked,
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => after === !wasChecked
    )
    expect(showTitleCheckbox.checked).toBe(!wasChecked)

    const chartTitleHeaderAfterToggle = canvasElement.querySelector('.cove-visualization__header')
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
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => after === wasChecked
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
    await waitForTextContent(canvasElement.querySelector('.cove-waffle-chart__data--text') as HTMLElement, newContent)

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
    await waitForTextContent(canvasElement.querySelector('.cove-waffle-chart__subtext') as HTMLElement, newSubtext)

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
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    const getPrimaryEl = () => {
      const el = canvasElement.querySelector('.cove-waffle-chart__data--primary') as HTMLElement
      expect(el).toBeTruthy()
      return el
    }
    const getValueText = () => getPrimaryEl().textContent?.trim() || ''
    const getWaffleNodeState = () => {
      const nodes = Array.from(canvasElement.querySelectorAll('.cove-waffle-chart svg .cdc-waffle-chart__node'))
      const chartType = (canvasElement.querySelector('select[name="visualizationType"]') as HTMLSelectElement)?.value
      const isTP5 = chartType === 'TP5 Waffle'

      const filled = nodes.filter(node => {
        const fill = (node.getAttribute('fill') || '').toLowerCase()
        if (isTP5) {
          return fill === '#009ec1' || fill === 'rgb(0, 158, 193)'
        }

        const fillOpacity = node.getAttribute('fill-opacity')
        if (fillOpacity !== null) {
          return Number(fillOpacity) >= 1
        }

        return true
      }).length

      return {
        total: nodes.length,
        filled
      }
    }

    const setCheckboxState = async (checkbox: HTMLInputElement, shouldBeChecked: boolean) => {
      if (checkbox.checked !== shouldBeChecked) {
        await userEvent.click(checkbox)
      }
    }

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
      (before, after) => after !== before
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
      (before, after) => after !== before
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
      (before, after) => after !== before
    )
    // ============================================================================
    // TEST 5: Clear Conditional Value (restore dataset)
    // Expectation: Primary value text changes (dataset restored).
    // ============================================================================
    await performAndAssert(
      'Clear Conditional Value',
      getValueText,
      async () => {
        // Clear the conditional column to fully reset the filter
        const conditionalColumnSelect = canvasElement.querySelector(
          'select[name="dataConditionalColumn"]'
        ) as HTMLSelectElement
        await userEvent.selectOptions(conditionalColumnSelect, '')
        await userEvent.clear(conditionalValueInput)
        conditionalValueInput.blur() // Trigger change event
        // Wait for debounced input processing (TextField uses 500ms debounce)
        await new Promise(resolve => setTimeout(resolve, 600))
      },
      (before, after) => after !== before
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
      (before, after) => after !== before
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
      (before, after) => after !== before
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
      (before, after) => after !== before
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
        await userEvent.click(customDenomCheckbox)
      },
      (before, after) => after !== before
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
      (before, after) => after !== before
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
      (before, after) => after !== before
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
      (before, after) => after !== before
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
      (before, after) => after !== before
    )

    // ============================================================================
    // TEST 14: Prefix -> $ (Formatting)
    // Expectation: Value starts with '$' and differs from prior snapshot.
    // ============================================================================
    const prefixInput = canvasElement.querySelector('input[name*="prefix"]') as HTMLInputElement
    await performAndAssert(
      'Prefix Update',
      getValueText,
      async () => {
        await userEvent.clear(prefixInput)
        await userEvent.type(prefixInput, '$')
      },
      (before, after) => after !== before && after.startsWith('$')
    )

    // ============================================================================
    // TEST 15: Suffix -> ' deaths'
    // Expectation: Value ends with 'deaths' and differs from prior snapshot.
    // ============================================================================
    const suffixInput = canvasElement.querySelector('input[name*="suffix"]') as HTMLInputElement
    await performAndAssert(
      'Suffix Update',
      getValueText,
      async () => {
        await userEvent.clear(suffixInput)
        await userEvent.type(suffixInput, ' deaths')
      },
      (before, after) => after !== before && after.endsWith('deaths')
    )

    // ============================================================================
    // TEST 16: Value Descriptor Placeholder Visibility
    // Expectation: Value Descriptor input is visible in waffle mode with guidance placeholder.
    // ============================================================================
    const valueDescriptionInput = canvasElement.querySelector(
      'input[name="null-null-valueDescription"]'
    ) as HTMLInputElement
    expect(valueDescriptionInput).toBeTruthy()
    expect(valueDescriptionInput.placeholder).toBe('e.g., out of')

    // ============================================================================
    // TEST 17: Value Descriptor Update in Waffle Mode
    // Expectation: Primary value text includes descriptor text.
    // ============================================================================
    await performAndAssert(
      'Waffle Value Descriptor Update',
      getValueText,
      async () => {
        await userEvent.clear(valueDescriptionInput)
        await userEvent.type(valueDescriptionInput, 'out of total')
      },
      (_before, after) => after.includes('out of total')
    )

    // ============================================================================
    // TEST 18: Show Percentage Toggle in Waffle Mode
    // Expectation: Primary value text changes when switching value type.
    // ============================================================================
    const showPercentCheckbox = canvasElement.querySelector('input[name="showPercent"]') as HTMLInputElement
    const showDenominatorCheckbox = canvasElement.querySelector('input[name="showDenominator"]') as HTMLInputElement
    expect(showPercentCheckbox).toBeTruthy()
    expect(showDenominatorCheckbox).toBeTruthy()
    await performAndAssert(
      'Waffle Show Percentage Toggle',
      getValueText,
      async () => {
        await userEvent.click(showPercentCheckbox)
      },
      (before, after) => after !== before
    )

    // ============================================================================
    // TEST 19: Dynamic Denominator Activation (4 out of 10)
    // Expectation: 10 total nodes, 4 filled nodes.
    // ============================================================================
    await performAndAssert(
      'Dynamic Denominator 4 out of 10',
      getWaffleNodeState,
      async () => {
        await userEvent.selectOptions(dataFunctionSelect, 'Count')
        await userEvent.selectOptions(conditionalColumnSelect, 'Deaths')
        await userEvent.selectOptions(conditionalOperatorSelect, '<')
        await userEvent.clear(conditionalValueInput)
        await userEvent.type(conditionalValueInput, '50')
        await setCheckboxState(customDenomCheckbox, false)
        await userEvent.clear(staticDenomInput)
        await userEvent.type(staticDenomInput, '10')
        await setCheckboxState(showPercentCheckbox, false)
        await setCheckboxState(showDenominatorCheckbox, true)
      },
      (_before, after) => after.total === 10 && after.filled === 4
    )

    // ============================================================================
    // TEST 20: Show Denominator Off Fallback
    // Expectation: Falls back to fixed 100 nodes.
    // ============================================================================
    await performAndAssert(
      'Dynamic Fallback Show Denominator Off',
      getWaffleNodeState,
      async () => {
        await setCheckboxState(showDenominatorCheckbox, false)
      },
      (_before, after) => after.total === 100
    )

    // ============================================================================
    // TEST 21: Percentage On Fallback
    // Expectation: Falls back to fixed 100 nodes.
    // ============================================================================
    await performAndAssert(
      'Dynamic Fallback Percentage On',
      getWaffleNodeState,
      async () => {
        await setCheckboxState(showDenominatorCheckbox, true)
        await setCheckboxState(showPercentCheckbox, true)
      },
      (_before, after) => after.total === 100
    )

    // ============================================================================
    // TEST 22: Denominator >= 100 Fallback
    // Expectation: Falls back to fixed 100 nodes.
    // ============================================================================
    await performAndAssert(
      'Dynamic Fallback Denominator >= 100',
      getWaffleNodeState,
      async () => {
        await setCheckboxState(showPercentCheckbox, false)
        await setCheckboxState(showDenominatorCheckbox, true)
        await userEvent.clear(staticDenomInput)
        await userEvent.type(staticDenomInput, '250')
      },
      (_before, after) => after.total === 100
    )

    // ============================================================================
    // TEST 23: Non-Integer Numerator/Denominator Rounding
    // Expectation: Mean 17.5 and denominator 20.2 round to 18 out of 20.
    // ============================================================================
    await performAndAssert(
      'Dynamic Rounding Non-Integer Values',
      getWaffleNodeState,
      async () => {
        await userEvent.selectOptions(dataFunctionSelect, 'Mean (Average)')
        await userEvent.selectOptions(dataColumnSelect, 'Deaths')
        await userEvent.selectOptions(conditionalColumnSelect, 'Deaths')
        await userEvent.selectOptions(conditionalOperatorSelect, '<')
        await userEvent.clear(conditionalValueInput)
        await userEvent.type(conditionalValueInput, '20')
        await userEvent.clear(staticDenomInput)
        await userEvent.type(staticDenomInput, '20.2')
        await setCheckboxState(showPercentCheckbox, false)
        await setCheckboxState(showDenominatorCheckbox, true)
      },
      (_before, after) => after.total === 20 && after.filled === 18
    )

    // ============================================================================
    // TEST 24: Numerator Greater Than Denominator Fallback
    // Expectation: Falls back to fixed 100 nodes.
    // ============================================================================
    await performAndAssert(
      'Dynamic Fallback Numerator Greater Than Denominator',
      getWaffleNodeState,
      async () => {
        await userEvent.clear(staticDenomInput)
        await userEvent.type(staticDenomInput, '10')
      },
      (_before, after) => after.total === 100
    )

    // ============================================================================
    // TEST 25: TP5 Waffle Dynamic Denominator (7 out of 12)
    // Expectation: 12 total TP5 nodes, 7 filled nodes.
    // ============================================================================
    await performAndAssert(
      'TP5 Dynamic Denominator 7 out of 12',
      getWaffleNodeState,
      async () => {
        await openAccordion(canvas, 'General')
        const chartTypeSelect = canvasElement.querySelector('select[name="visualizationType"]') as HTMLSelectElement
        await userEvent.selectOptions(chartTypeSelect, 'TP5 Waffle')

        await openAccordion(canvas, 'Data')
        await userEvent.selectOptions(dataFunctionSelect, 'Count')
        await userEvent.selectOptions(dataColumnSelect, 'Deaths')
        await userEvent.selectOptions(conditionalColumnSelect, 'Deaths')
        await userEvent.selectOptions(conditionalOperatorSelect, '<')
        await userEvent.clear(conditionalValueInput)
        await userEvent.type(conditionalValueInput, '151')
        await userEvent.clear(staticDenomInput)
        await userEvent.type(staticDenomInput, '12')
        await setCheckboxState(showPercentCheckbox, false)
        await setCheckboxState(showDenominatorCheckbox, true)
      },
      (_before, after) => after.total === 12 && after.filled === 7
    )
  }
}

/**
 * CHART SETTINGS AND VISUAL SECTION TESTS
 * Tests functionality within the Chart Settings and Visual accordions
 */
export const VisualSectionTests: Story = {
  args: {
    configUrl: '/packages/waffle-chart/tests/fixtures/test-config.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    // Open Chart Settings accordion first for tests 1-5
    await openAccordion(canvas, 'Chart Settings')
    // Core helper functions used throughout the visual tests
    const waffleRoot = () => canvasElement.querySelector('.cove-waffle-chart') as HTMLElement
    const contentContainer = () => canvasElement.querySelector('.cove-visualization__body') as HTMLElement
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
        [after.rect, after.circle, after.path].filter(c => c > 0).length === 1
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
      (before, after) => after !== before && after > 0
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
      (before, after) => after !== before
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
      (before, after) => before !== after && after.length > 0
    )

    // ============================================================================
    // TEST 6: Overall Font Size Change
    // Expectation: font-small|font-medium|font-large class changes on waffle root.
    // ============================================================================
    // Open Visual accordion for tests 6+
    await openAccordion(canvas, 'Visual')

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
      (before, after) => before !== after && ['font-small', 'font-medium', 'font-large'].includes(after)
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

    const themeButtons = Array.from(canvasElement.querySelectorAll('.color-palette button')) as HTMLElement[]
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
      (before, after) => after !== before && after.length > 0
    )

    // ============================================================================
    // TEST 8: Display Border Toggle
    // Expectation: Class 'no-borders' on content container toggles.
    // ============================================================================
    const contentClassSig = () => Array.from(contentContainer().classList).sort().join(' ')

    // Find border checkbox by exact label text
    const borderCheckbox = canvas.getByLabelText('Display Border') as HTMLInputElement
    expect(borderCheckbox).toBeTruthy()
    const borderWrapper = borderCheckbox.closest('label.checkbox') as HTMLElement
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
        await userEvent.click(borderCheckbox)
      },
      (before, after) =>
        before.classes !== after.classes ||
        before.top !== after.top ||
        before.right !== after.right ||
        before.color !== after.color
    )

    // ============================================================================
    // TEST 9: Theme Border Color Toggle
    // Expectation: Class 'component--has-border-color-theme' toggles.
    // ============================================================================
    // Find border color theme checkbox by exact label text
    const borderColorThemeCheckbox = canvas.getByLabelText('Use Border Color Theme') as HTMLInputElement
    expect(borderColorThemeCheckbox).toBeTruthy()
    const borderColorThemeWrapper = borderColorThemeCheckbox.closest('label.checkbox') as HTMLElement
    expect(borderColorThemeWrapper).toBeTruthy()
    await performAndAssert(
      'Border Color Theme Toggle',
      contentClassSig,
      async () => {
        await userEvent.click(borderColorThemeCheckbox)
      },
      (before, after) =>
        before !== after && (after.includes('border-color-theme') || before.includes('border-color-theme'))
    )

    // ============================================================================
    // TEST 10: Accent Style Toggle
    // Expectation: Class 'component--has-accent' toggles.
    // ============================================================================
    // Find accent checkbox by exact label text
    const accentCheckbox = canvas.getByLabelText('Use Accent Style') as HTMLInputElement
    expect(accentCheckbox).toBeTruthy()
    const accentWrapper = accentCheckbox.closest('label.checkbox') as HTMLElement
    expect(accentWrapper).toBeTruthy()
    await performAndAssert(
      'Accent Toggle',
      contentClassSig,
      async () => {
        await userEvent.click(accentCheckbox)
      },
      (before, after) => before !== after
    )

    // ============================================================================
    // TEST 11: Theme Background Color Toggle
    // Expectation: Class 'component--has-background' toggles.
    // ============================================================================
    // Find background checkbox by exact label text
    const backgroundCheckbox = canvas.getByLabelText('Use Theme Background Color') as HTMLInputElement
    expect(backgroundCheckbox).toBeTruthy()
    const backgroundWrapper = backgroundCheckbox.closest('label.checkbox') as HTMLElement
    expect(backgroundWrapper).toBeTruthy()
    await performAndAssert(
      'Background Toggle',
      contentClassSig,
      async () => {
        await userEvent.click(backgroundCheckbox)
      },
      (before, after) => before !== after
    )

    // ============================================================================
    // TEST 12: Hide Background Color Toggle
    // Expectation: Class 'component--hide-background-color' toggles.
    // ============================================================================
    // Find hide background checkbox by exact label text
    const hideBackgroundCheckbox = canvas.getByLabelText('Hide Background Color') as HTMLInputElement
    expect(hideBackgroundCheckbox).toBeTruthy()
    const hideBackgroundWrapper = hideBackgroundCheckbox.closest('label.checkbox') as HTMLElement
    expect(hideBackgroundWrapper).toBeTruthy()
    await performAndAssert(
      'Hide Background Toggle',
      contentClassSig,
      async () => {
        await userEvent.click(hideBackgroundCheckbox)
      },
      (before, after) => before !== after
    )
  }
}

/**
 * TP5 GAUGE - GENERAL SECTION TESTS
 * Tests all functionality within the General accordion for TP5 Gauge configs.
 */
export const TP5GaugeGeneralSectionTests: Story = {
  args: {
    configUrl: '/packages/waffle-chart/examples/tp5-gauge.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')
    await waitForPresence('.cdc-callout', canvasElement)

    // ============================================================================
    // TEST 1: Chart Type Change (TP5 Gauge <-> TP5 Waffle)
    // Expectation: Gauge container swaps with waffle container.
    // ============================================================================
    const chartTypeSelect = canvas.getByLabelText(/chart type/i) as HTMLSelectElement
    expect(chartTypeSelect).toBeTruthy()

    const getChartTypeState = () => ({
      hasGauge: !!canvasElement.querySelector('.cove-gauge-chart'),
      hasWaffle: !!canvasElement.querySelector('.cove-waffle-chart')
    })

    await performAndAssert(
      'TP5 Gauge to TP5 Waffle',
      getChartTypeState,
      async () => {
        await userEvent.selectOptions(chartTypeSelect, 'TP5 Waffle')
      },
      (before, after) => before.hasGauge !== after.hasGauge && after.hasWaffle
    )

    await performAndAssert(
      'TP5 Waffle to TP5 Gauge',
      getChartTypeState,
      async () => {
        await userEvent.selectOptions(chartTypeSelect, 'TP5 Gauge')
      },
      (before, after) => before.hasGauge !== after.hasGauge && after.hasGauge
    )

    // ============================================================================
    // TEST 2: Title Update
    // Expectation: Callout heading text updates.
    // ============================================================================
    const titleInput = canvas.getByLabelText(/^title$/i, { selector: 'input' }) as HTMLInputElement
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'TP5 Gauge Title Update')

    await performAndAssert(
      'TP5 Gauge Title Update',
      () => canvasElement.querySelector('.cdc-callout__heading')?.textContent?.trim() || '',
      async () => {}, // action already performed above
      (before, after) => after === 'TP5 Gauge Title Update'
    )

    // ============================================================================
    // TEST 3: Show Title Toggle
    // Expectation: Callout heading appears/disappears.
    // ============================================================================
    const showTitleCheckbox = canvasElement.querySelector('input[name="showTitle"]') as HTMLInputElement
    expect(showTitleCheckbox).toBeTruthy()

    const headingVisible = () => !!canvasElement.querySelector('.cdc-callout__heading')
    const wasVisible = headingVisible()

    await performAndAssert(
      'TP5 Gauge Title Toggle',
      headingVisible,
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => after !== before
    )

    await performAndAssert(
      'TP5 Gauge Title Toggle Reset',
      headingVisible,
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => after === wasVisible
    )

    // ============================================================================
    // TEST 4: Message Update
    // Expectation: Gauge content text updates.
    // ============================================================================
    const messageTextarea = canvas.getByLabelText(/message/i) as HTMLTextAreaElement
    const newMessage = 'Updated TP5 gauge message text'
    await userEvent.clear(messageTextarea)
    await userEvent.type(messageTextarea, newMessage)
    await waitForTextContent(
      canvasElement.querySelector('.cove-gauge-chart__content .cove-waffle-chart__data--text') as HTMLElement,
      newMessage
    )

    // ============================================================================
    // TEST 5: Subtext Update
    // Expectation: Subtext text updates.
    // ============================================================================
    const subtextInput = canvas.getByLabelText(/subtext/i) as HTMLInputElement
    const newSubtext = 'Updated TP5 gauge subtext'
    await userEvent.clear(subtextInput)
    await userEvent.type(subtextInput, newSubtext)
    await waitForTextContent(
      canvasElement.querySelector('.cove-gauge-chart .cove-waffle-chart__subtext') as HTMLElement,
      newSubtext
    )
  }
}

/**
 * TP5 GAUGE - DATA SECTION TESTS
 * Tests all functionality within the Data accordion for TP5 Gauge configs.
 */
export const TP5GaugeDataSectionTests: Story = {
  args: {
    configUrl: '/packages/waffle-chart/examples/tp5-gauge.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Data')

    const getPrimaryText = () =>
      canvasElement.querySelector('.cove-waffle-chart__data--primary')?.textContent?.replace(/\s+/g, ' ').trim() || ''

    // ============================================================================
    // TEST 1: Data Function Change
    // Expectation: Primary value text changes.
    // ============================================================================
    const dataFunctionSelect = canvasElement.querySelector('select[name="dataFunction"]') as HTMLSelectElement
    await waitForOptionsToPopulate(dataFunctionSelect, 2)
    const dataFunctionOptions = Array.from(dataFunctionSelect.options).map(opt => opt.value)
    const nextFunction = dataFunctionOptions.find(opt => opt && opt !== dataFunctionSelect.value)
    expect(nextFunction).toBeTruthy()

    await performAndAssert(
      'TP5 Gauge Data Function Change',
      getPrimaryText,
      async () => {
        await userEvent.selectOptions(dataFunctionSelect, nextFunction as string)
      },
      (before, after) => after !== before
    )

    // ============================================================================
    // TEST 2: Value Description Update
    // Expectation: Primary value text includes new descriptor.
    // ============================================================================
    const valueDescriptionInput = canvasElement.querySelector(
      'input[name="null-null-valueDescription"]'
    ) as HTMLInputElement
    expect(valueDescriptionInput).toBeTruthy()
    const newDescription = 'out of total'
    await userEvent.clear(valueDescriptionInput)
    await userEvent.type(valueDescriptionInput, newDescription)
    await performAndAssert(
      'TP5 Gauge Value Description Update',
      getPrimaryText,
      async () => {}, // action already performed above
      (before, after) => after.includes(newDescription)
    )
    expect(valueDescriptionInput.placeholder).toBe('e.g., out of')

    // ============================================================================
    // TEST 3: Denominator Update
    // Expectation: Primary value text changes to include new denominator.
    // ============================================================================
    const denominatorInput = canvasElement.querySelector('input[name="null-null-dataDenom"]') as HTMLInputElement
    expect(denominatorInput).toBeTruthy()
    await performAndAssert(
      'TP5 Gauge Denominator Update',
      getPrimaryText,
      async () => {
        await userEvent.clear(denominatorInput)
        await userEvent.type(denominatorInput, '250')
      },
      (before, after) => after !== before && after.includes('250')
    )
  }
}

/**
 * TP5 GAUGE - VISUAL SECTION TESTS
 * Tests all functionality within the Visual accordion for TP5 Gauge configs.
 */
export const TP5GaugeVisualSectionTests: Story = {
  args: {
    configUrl: '/packages/waffle-chart/examples/tp5-gauge.json',
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')
    await waitForPresence('.cdc-callout', canvasElement)

    // ============================================================================
    // TEST 1: White Background Toggle
    // Expectation: Callout classes and flag visibility toggle.
    // ============================================================================
    const whiteBackgroundCheckbox = canvas.getByLabelText(/use white background style/i) as HTMLInputElement
    expect(whiteBackgroundCheckbox).toBeTruthy()

    const getCalloutState = () => {
      const callout = canvasElement.querySelector('.cdc-callout') as HTMLElement
      return {
        classes: callout ? Array.from(callout.classList).sort().join(' ') : '',
        hasFlag: !!canvasElement.querySelector('.cdc-callout__flag')
      }
    }

    await performAndAssert(
      'TP5 Gauge White Background Toggle',
      getCalloutState,
      async () => {
        await userEvent.click(whiteBackgroundCheckbox)
      },
      (before, after) => before.classes !== after.classes || before.hasFlag !== after.hasFlag,
      after => {
        if (after.hasFlag) {
          expect(after.classes.includes('cdc-callout--data')).toBe(true)
        } else {
          expect(after.classes.includes('cdc-callout--data')).toBe(false)
          expect(after.classes.includes('dfe-block')).toBe(false)
        }
      }
    )
  }
}
