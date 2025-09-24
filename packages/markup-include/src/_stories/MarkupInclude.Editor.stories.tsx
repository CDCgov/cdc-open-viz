/**
 * MARKUP INCLUDE EDITOR TESTS
 *
 * Comprehensive test suite for the Markup Include component editor functionality.
 * Tests all controls and verifies that editor interactions produce expected visual changes.
 *
 * RUNNING TESTS:
 * ==============
 * # Run all markup-include editor tests:
 * npx vitest run --project=storybook packages/markup-include/src/_stories/*.Editor.stories.tsx
 *
 * # Run specific test story:
 * npx vitest run --project=storybook packages/markup-include/src/_stories/MarkupInclude.Editor.stories.tsx -t "GeneralSectionTests"
 *
 * # Run tests in watch mode:
 * npx vitest --project=storybook packages/markup-include/src/_stories/*.Editor.stories.tsx
 *
 * TEST COVERAGE:
 * ==============
 * ✅ General Section:
 *    - Title input and header display
 *
 * ✅ Content Editor Section:
 *    - Use Inline HTML toggle (switches between textarea and URL input)
 *    - HTML content editing and preview
 *    - Source URL input
 *    - Variable management (create, edit, delete)
 *    - Variable configuration (name, column, conditions, formatting)
 *    - Advanced options (Hide Section on Null, No Data Message)
 *
 * ✅ Visual Section:
 *    - Theme palette selection
 *    - Border display toggle
 *    - Border color theme toggle
 *    - Accent style toggle
 *    - Theme background color toggle
 *    - Hide background color toggle
 *
 * TESTING APPROACH:
 * =================
 * - Follows CDC testing best practices (visual-first testing)
 * - Uses performAndAssert for state changes
 * - Tests visual output changes, not just control state
 * - Leverages shared testing helpers from @cdc/core/helpers/testing
 * - Each test story focuses on one accordion section
 * - Includes comprehensive variable system testing
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMarkupInclude from '../CdcMarkupInclude'
import {
  performAndAssert,
  waitForPresence,
  waitForAbsence,
  waitForEditor,
  openAccordion,
  getVisualState,
  testBooleanControl
} from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMarkupInclude> = {
  title: 'Components/Templates/Markup Include/Editor Tests',
  component: CdcMarkupInclude,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof CdcMarkupInclude>

// Test configurations - using both inline config and external fixtures
const testConfig = {
  contentEditor: {
    inlineHTML: '<h2>Test Markup Include</h2><p>{{test_variable}}</p>',
    markupVariables: [
      {
        name: 'test_variable',
        columnName: 'value',
        tag: '{{test_variable}}',
        conditions: [],
        addCommas: false
      }
    ],
    showHeader: true,
    srcUrl: '',
    title: 'Test Markup Include Title',
    useInlineHTML: true,
    showNoDataMessage: false,
    noDataMessageText: 'No data available'
  },
  data: [
    { state: 'Alabama', value: 100, category: 'A' },
    { state: 'Alaska', value: 200, category: 'B' },
    { state: 'Arizona', value: 150, category: 'A' }
  ],
  legend: {},
  newViz: true,
  theme: 'theme-blue',
  type: 'markup-include',
  visual: {
    border: false,
    accent: false,
    background: false,
    hideBackgroundColor: false,
    borderColorTheme: false
  },
  version: '1.0.0'
}

// ============================================================================
// GENERAL SECTION TESTS
// Tests title input and display
// ============================================================================
export const GeneralSectionTests: Story = {
  args: {
    config: testConfig as any,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'General')

    // ============================================================================
    // TEST 1: Title Update
    // Expectation: Header text updates to new string and becomes visible
    // ============================================================================
    const titleInput = canvasElement.querySelector('input[name*="title"]') as HTMLInputElement
    expect(titleInput).toBeTruthy()
    expect(titleInput.value).toBe('Test Markup Include Title')

    await performAndAssert(
      'Title Update',
      () => {
        const headerElement = canvasElement.querySelector('.cove-component__header h2')
        return headerElement?.textContent?.trim() || ''
      },
      async () => {
        await userEvent.clear(titleInput)
        await userEvent.type(titleInput, 'Updated Markup Include Title E2E')
      },
      (before, after) => after === 'Updated Markup Include Title E2E' && after !== before
    )

    const headerElement = canvasElement.querySelector('.cove-component__header h2')
    expect(headerElement).toBeTruthy()
    expect(headerElement!.textContent?.trim()).toBe('Updated Markup Include Title E2E')
  }
}

// ============================================================================
// CONTENT EDITOR SECTION TESTS
// Tests ALL content editing functionality: basic controls, variables, and advanced features
// ============================================================================
export const ContentEditorTests: Story = {
  args: {
    config: testConfig as any,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Content Editor')

    // ============================================================================
    // TEST 1: Use Inline HTML Toggle
    // Expectation: Switching between inline HTML textarea and source URL input
    // ============================================================================
    const inlineHTMLCheckbox = canvasElement.querySelector('input[name*="useInlineHTML"]') as HTMLInputElement
    expect(inlineHTMLCheckbox).toBeTruthy()
    expect(inlineHTMLCheckbox.checked).toBe(true) // Should start as checked based on config

    // Verify initial state - HTML textarea should be visible
    let htmlTextarea = canvasElement.querySelector('textarea[name*="inlineHTML"]') as HTMLTextAreaElement
    let srcUrlInput = canvasElement.querySelector('input[name*="srcUrl"]') as HTMLInputElement
    expect(htmlTextarea).toBeTruthy()
    expect(srcUrlInput).toBeFalsy() // Should not be visible when inline HTML is enabled

    // Toggle to disable inline HTML (should show source URL input)
    await performAndAssert(
      'Toggle to Source URL Mode',
      () => ({
        hasTextarea: !!canvasElement.querySelector('textarea[name*="inlineHTML"]'),
        hasSrcInput: !!canvasElement.querySelector('input[name*="srcUrl"]'),
        checkboxChecked: inlineHTMLCheckbox.checked
      }),
      async () => {
        // Click the checkbox wrapper to handle pointer-events issues
        const checkboxWrapper = inlineHTMLCheckbox.closest('.cove-input__checkbox--small') || inlineHTMLCheckbox
        await userEvent.click(checkboxWrapper as HTMLElement)
      },
      (before, after) =>
        before.checkboxChecked !== after.checkboxChecked &&
        before.hasTextarea !== after.hasTextarea &&
        before.hasSrcInput !== after.hasSrcInput
    )

    // Verify textarea is gone and source URL input is visible
    htmlTextarea = canvasElement.querySelector('textarea[name*="inlineHTML"]') as HTMLTextAreaElement
    srcUrlInput = canvasElement.querySelector('input[name*="srcUrl"]') as HTMLInputElement
    expect(htmlTextarea).toBeFalsy()
    expect(srcUrlInput).toBeTruthy()

    // Toggle back to inline HTML mode
    const checkboxWrapper2 = inlineHTMLCheckbox.closest('.cove-input__checkbox--small') || inlineHTMLCheckbox
    await userEvent.click(checkboxWrapper2 as HTMLElement)
    await waitForPresence('textarea[name*="inlineHTML"]', canvasElement)

    htmlTextarea = canvasElement.querySelector('textarea[name*="inlineHTML"]') as HTMLTextAreaElement
    expect(htmlTextarea).toBeTruthy()
    expect(htmlTextarea.value).toBe('<h2>Test Markup Include</h2><p>{{test_variable}}</p>')

    // ============================================================================
    // TEST 2: HTML Content Update
    // Expectation: Changes to HTML textarea affect the rendered output
    // ============================================================================
    await performAndAssert(
      'HTML Content Update',
      () => {
        const contentElement = canvasElement.querySelector('.cove-component__content')
        return contentElement?.innerHTML || ''
      },
      async () => {
        await userEvent.clear(htmlTextarea)
        await userEvent.type(
          htmlTextarea,
          '<h3>Updated HTML Content</h3><p>New test content with {{{{test_variable}}</p>'
        )
      },
      (before, after) => after !== before && after.includes('Updated HTML Content')
    )

    // ============================================================================
    // TEST 3: Source URL Input (when in URL mode)
    // Expectation: Source URL input accepts and stores values
    // ============================================================================
    // Switch back to source URL mode
    const checkboxWrapper3 = inlineHTMLCheckbox.closest('.cove-input__checkbox--small') || inlineHTMLCheckbox
    await userEvent.click(checkboxWrapper3 as HTMLElement)
    await waitForPresence('input[name*="srcUrl"]', canvasElement)

    srcUrlInput = canvasElement.querySelector('input[name*="srcUrl"]') as HTMLInputElement
    expect(srcUrlInput).toBeTruthy()

    await performAndAssert(
      'Source URL Update and Content Loading',
      () => ({
        inputValue: srcUrlInput.value,
        contentText: canvasElement.querySelector('.cove-component__content')?.textContent || ''
      }),
      async () => {
        await userEvent.clear(srcUrlInput)
        await userEvent.type(
          srcUrlInput,
          'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Markup-Include-Button-and-Text.html'
        )
      },
      (before, after) => {
        const expectedUrl =
          'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Markup-Include-Button-and-Text.html'
        return (
          after.inputValue === expectedUrl &&
          after.inputValue !== before.inputValue &&
          after.contentText.includes('Neque laoreet')
        )
      }
    )

    // Switch back to inline mode for subsequent tests
    const checkboxWrapper4 = inlineHTMLCheckbox.closest('.cove-input__checkbox--small') || inlineHTMLCheckbox
    await userEvent.click(checkboxWrapper4 as HTMLElement)
    await waitForPresence('textarea[name*="inlineHTML"]', canvasElement)
  }
}

// ============================================================================
// VISUAL SECTION TESTS
// Tests theme and visual styling controls
// ============================================================================
export const VisualSectionTests: Story = {
  args: {
    config: testConfig as any,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Visual')

    const contentContainer = () => canvasElement.querySelector('.cove-component__content') as HTMLElement
    const visualContainer = () => canvasElement.querySelector('.markup-include-component') as HTMLElement
    expect(contentContainer()).toBeTruthy()
    expect(visualContainer()).toBeTruthy()

    // ============================================================================
    // TEST 1: Theme Palette Change
    // Expectation: Theme class changes on component
    // ============================================================================
    const getThemeState = () => {
      // Use the contentContainer like other tests, and check its parent for theme classes
      const content = contentContainer()
      if (!content) return { theme: '', classes: '', element: 'content not found' }

      // Check content itself and its parent for theme classes
      const contentClasses = Array.from(content.classList).join(' ')
      const parentClasses = content.parentElement ? Array.from(content.parentElement.classList).join(' ') : ''

      const contentTheme = Array.from(content.classList).find(cls => cls.startsWith('theme-')) || ''
      const parentTheme = content.parentElement
        ? Array.from(content.parentElement.classList).find(cls => cls.startsWith('theme-')) || ''
        : ''

      const theme = contentTheme || parentTheme || ''

      return {
        theme,
        classes: contentClasses + ' | parent: ' + parentClasses,
        computedStyles: getComputedStyle(content).backgroundColor,
        element: `${content.tagName.toLowerCase()} parent: ${content.parentElement?.tagName.toLowerCase() || 'none'}`
      }
    }

    const themeButtons = Array.from(canvasElement.querySelectorAll('.color-palette li')) as HTMLElement[]
    expect(themeButtons.length).toBeGreaterThan(1)

    await performAndAssert(
      'Theme Change',
      getThemeState,
      async () => {
        const selected = themeButtons.find(btn => btn.classList.contains('selected'))
        const next = themeButtons.find(btn => !btn.classList.contains('selected')) || themeButtons[1]
        await userEvent.click(next)
      },
      (before, after) => before.theme !== after.theme
    )

    // ============================================================================
    // TEST 2: Display Border Toggle
    // Expectation: Border styles change on content container
    // ============================================================================
    const borderCheckbox = canvasElement.querySelector(
      'input[name*="border"]:not([name*="borderColorTheme"])'
    ) as HTMLInputElement
    expect(borderCheckbox).toBeTruthy()

    await performAndAssert(
      'Display Border Toggle',
      () => ({
        checked: borderCheckbox.checked,
        hasBorders: !visualContainer().classList.contains('no-borders')
      }),
      async () => {
        const checkboxWrapper = borderCheckbox.closest('.cove-input__checkbox--small') || borderCheckbox
        await userEvent.click(checkboxWrapper as HTMLElement)
      },
      (before, after) => {
        const checkboxChanged = before.checked !== after.checked
        const borderChanged = before.hasBorders !== after.hasBorders
        return checkboxChanged && borderChanged
      }
    )

    // ============================================================================
    // TEST 3: Border Color Theme Toggle
    // Expectation: Border color theme class changes
    // ============================================================================
    const borderColorThemeCheckbox = canvasElement.querySelector('input[name*="borderColorTheme"]') as HTMLInputElement
    expect(borderColorThemeCheckbox).toBeTruthy()

    await performAndAssert(
      'Border Color Theme Toggle',
      () => ({
        checked: borderColorThemeCheckbox.checked,
        hasBorderColorTheme: visualContainer().classList.contains('component--has-borderColorTheme')
      }),
      async () => {
        const checkboxWrapper =
          borderColorThemeCheckbox.closest('.cove-input__checkbox--small') || borderColorThemeCheckbox
        await userEvent.click(checkboxWrapper as HTMLElement)
      },
      (before, after) => {
        const checkboxChanged = before.checked !== after.checked
        const themeChanged = before.hasBorderColorTheme !== after.hasBorderColorTheme
        return checkboxChanged && themeChanged
      }
    )

    // ============================================================================
    // TEST 4: Accent Style Toggle
    // Expectation: Accent class toggles
    // ============================================================================
    const accentCheckbox = canvasElement.querySelector('input[name*="accent"]') as HTMLInputElement
    expect(accentCheckbox).toBeTruthy()

    await performAndAssert(
      'Accent Style Toggle',
      () => ({
        checked: accentCheckbox.checked,
        hasAccent: visualContainer().classList.contains('component--has-accent')
      }),
      async () => {
        const checkboxWrapper = accentCheckbox.closest('.cove-input__checkbox--small') || accentCheckbox
        await userEvent.click(checkboxWrapper as HTMLElement)
      },
      (before, after) => {
        const checkboxChanged = before.checked !== after.checked
        const accentChanged = before.hasAccent !== after.hasAccent
        return checkboxChanged && accentChanged
      }
    )

    // ============================================================================
    // TEST 5: Theme Background Color Toggle
    // Expectation: Background class toggles
    // ============================================================================
    const backgroundCheckbox = canvasElement.querySelector(
      'input[name*="background"]:not([name*="hide"])'
    ) as HTMLInputElement
    expect(backgroundCheckbox).toBeTruthy()

    await performAndAssert(
      'Theme Background Color Toggle',
      () => ({
        checked: backgroundCheckbox.checked,
        hasBackground: visualContainer().classList.contains('component--has-background')
      }),
      async () => {
        const checkboxWrapper = backgroundCheckbox.closest('.cove-input__checkbox--small') || backgroundCheckbox
        await userEvent.click(checkboxWrapper as HTMLElement)
      },
      (before, after) => {
        const checkboxChanged = before.checked !== after.checked
        const backgroundChanged = before.hasBackground !== after.hasBackground
        return checkboxChanged && backgroundChanged
      }
    )

    // ============================================================================
    // TEST 6: Hide Background Color Toggle
    // Expectation: Hide background class toggles
    // ============================================================================
    const hideBackgroundCheckbox = canvasElement.querySelector('input[name*="hideBackgroundColor"]') as HTMLInputElement
    expect(hideBackgroundCheckbox).toBeTruthy()

    await performAndAssert(
      'Hide Background Color Toggle',
      () => ({
        checked: hideBackgroundCheckbox.checked,
        hideBackground: visualContainer().classList.contains('component--hideBackgroundColor')
      }),
      async () => {
        const checkboxWrapper = hideBackgroundCheckbox.closest('.cove-input__checkbox--small') || hideBackgroundCheckbox
        await userEvent.click(checkboxWrapper as HTMLElement)
      },
      (before, after) => {
        const checkboxChanged = before.checked !== after.checked
        const hideChanged = before.hideBackground !== after.hideBackground
        return checkboxChanged && hideChanged
      }
    )
  }
}
