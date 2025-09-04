import { test, expect } from '@playwright/test'

test.describe('Data Bite - Basic Functionality', () => {
  test('should load the data-bite application in regular mode', async ({ page }) => {
    // Navigate with test config
    await page.goto('/?config=/tests/fixtures/test-config.json')

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Check that the page has loaded successfully - React apps often don't have a specific title
    // so let's just check the page loads and has content
    await expect(page.locator('body')).toBeVisible()

    // Check that we have some content in the application
    const reactContainer = page.locator('.react-container').first()
    await expect(reactContainer).toBeVisible()

    const databiteModule = page.locator('.cdc-open-viz-module.type-data-bite').first()
    await expect(databiteModule).toBeVisible()
  })

  test('should load the data-bite application in editor mode', async ({ page }) => {
    // Navigate with test config and editor mode
    await page.goto('/?editor=true&config=/tests/fixtures/test-config.json')

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Check that the page has loaded successfully
    await expect(page.locator('body')).toBeVisible()

    // Check for the data-bite container
    const reactContainer = page.locator('.react-container').first()
    await expect(reactContainer).toBeVisible()

    const databiteModule = page.locator('.cdc-open-viz-module.type-data-bite').first()
    await expect(databiteModule).toBeVisible()

    // In editor mode, we should have editor-specific elements
    const editorElements = page.locator('[class*="editor"]')
    await expect(editorElements.first()).toBeVisible()
  })

  test('should have different content between regular and editor modes', async ({ page }) => {
    // First get the regular mode content
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const regularContent = await page.locator('body').innerHTML()

    // Then get the editor mode content
    await page.goto('/?editor=true')
    await page.waitForLoadState('networkidle')
    const editorContent = await page.locator('body').innerHTML()

    // The content should be different between modes
    expect(regularContent).not.toEqual(editorContent)

    // Editor mode should generally have more content
    expect(editorContent.length).toBeGreaterThan(regularContent.length)
  })
})
