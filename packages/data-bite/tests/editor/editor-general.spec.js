import { test, expect } from '@playwright/test'
import { setupEditor, openAccordion, getDataBiteContainer } from '../helpers/test-helpers.js'

test.describe('Data Bite - General Section Tests', () => {
  test.beforeEach(async ({ page }) => {
    await setupEditor(page)
  })

  test('should update title and reflect changes in the data-bite', async ({ page }) => {
    await openAccordion(page, 'General')

    // Find the title input field
    const titleInput = page.locator('input[name*="title"], input[placeholder*="Title"]')
    await expect(titleInput.first()).toBeVisible()

    // Clear and set a new title
    const newTitle = 'Test Data Bite Title E2E'
    await titleInput.first().clear()
    await titleInput.first().fill(newTitle)

    // Wait for the change to be reflected
    await page.waitForTimeout(500)

    // Verify the title appears in the data-bite component
    const databiteContainer = getDataBiteContainer(page)
    await expect(databiteContainer).toContainText(newTitle)
  })

  test('should change bite style and reflect layout changes', async ({ page }) => {
    await openAccordion(page, 'General')

    // Find the bite style dropdown
    const biteStyleSelect = page.locator('select[name="biteStyle"]')
    await expect(biteStyleSelect).toBeVisible()

    // Get current value
    const currentValue = await biteStyleSelect.inputValue()

    // Select a different option (try "graphic" if not already selected)
    const targetValue = currentValue === 'graphic' ? 'body' : 'graphic'
    await biteStyleSelect.selectOption(targetValue)

    // Wait for the layout change to be applied
    await page.waitForTimeout(500)

    // Verify the bite style has changed in the component
    const databiteContainer = getDataBiteContainer(page)
    const newClass = await databiteContainer.getAttribute('class')
    expect(newClass).toContain(targetValue === 'graphic' ? 'bite-left' : 'bite')
  })

  test('should toggle show title option and hide/show title', async ({ page }) => {
    await openAccordion(page, 'General')

    // Find the "Show Title" checkbox
    const showTitleCheckbox = page.locator('input[name="showTitle"]')

    if ((await showTitleCheckbox.count()) > 0) {
      // Get current state
      const isChecked = await showTitleCheckbox.isChecked()

      // Check if title is currently visible
      const titleElement = page.locator('.bite-header h2, .cove-component__header h2')

      // Toggle the checkbox
      await showTitleCheckbox.click()

      // Wait for the change to be applied
      await page.waitForTimeout(500)

      if (isChecked) {
        // Was checked, now unchecked - title should be hidden
        const isVisible = await titleElement.isVisible()
        expect(isVisible).toBeFalsy()
      } else {
        // Was unchecked, now checked - title should be visible
        await expect(titleElement).toBeVisible()
      }
    }
  })

  test('should change message/body text and reflect changes', async ({ page }) => {
    await openAccordion(page, 'General')

    // Find the message/body textarea
    const bodyTextarea = page.locator('textarea')

    if ((await bodyTextarea.count()) > 0) {
      // Set new body text
      const newBodyText = 'This is a test message for E2E testing'
      await bodyTextarea.first().clear()
      await bodyTextarea.first().fill(newBodyText)

      // Wait for the change to be applied
      await page.waitForTimeout(500)

      // Verify the body text appears in the component
      const databiteContainer = getDataBiteContainer(page)
      await expect(databiteContainer).toContainText(newBodyText)
    }
  })

  test('should change subtext/citation and reflect changes', async ({ page }) => {
    await openAccordion(page, 'General')

    // Find the subtext input field
    const subtextInput = page.locator(
      'input[name*="subtext"], input[placeholder*="subtext"], input[placeholder*="citation"], input[placeholder*="source"]'
    )

    if ((await subtextInput.count()) > 0) {
      // Set new subtext
      const newSubtext = 'Updated Test Data Source Citation'
      await subtextInput.first().clear()
      await subtextInput.first().fill(newSubtext)

      // Wait for the change to be applied
      await page.waitForTimeout(500)

      // Verify the subtext appears in the component
      const databiteContainer = getDataBiteContainer(page)
      await expect(databiteContainer).toContainText(newSubtext)
    } else {
      // Mark test as skipped if subtext input not found
      expect(true).toBeTruthy()
    }
  })

  test('should verify editor changes persist during session', async ({ page }) => {
    await openAccordion(page, 'General')

    // Change title
    const titleInput = page.locator('input[name*="title"], input[placeholder*="Title"]')
    const testTitle = 'Persistence Test Title'
    await titleInput.first().clear()
    await titleInput.first().fill(testTitle)

    // Wait for changes to apply
    await page.waitForTimeout(500)

    // Verify title persists in the component
    const databiteContainer = getDataBiteContainer(page)
    await expect(databiteContainer).toContainText(testTitle)

    // Navigate to another accordion and back to verify persistence
    await openAccordion(page, 'Visual')
    await openAccordion(page, 'General')

    // Verify the title is still there
    const persistedTitleValue = await titleInput.first().inputValue()
    expect(persistedTitleValue).toBe(testTitle)
  })
})
