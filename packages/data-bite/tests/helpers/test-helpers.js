import { expect } from '@playwright/test'

// Shared test helper for editor setup
export const setupEditor = async page => {
  // Navigate with editor mode and test config
  await page.goto('/?editor=true&config=/tests/fixtures/test-config.json')
  await page.waitForLoadState('networkidle')

  // Wait for the editor to be fully loaded
  await expect(page.locator('.cdc-open-viz-module.type-data-bite').first()).toBeVisible()
  await expect(page.locator('[class*="editor"]').first()).toBeVisible()
}

// Shared test helper for opening accordions
export const openAccordion = async (page, sectionName) => {
  const accordion = page.locator('.accordion__button').filter({ hasText: sectionName })
  await accordion.click()
  await page.waitForTimeout(300)
}

// Shared locators
export const getDataBiteContainer = page => page.locator('.cdc-open-viz-module.type-data-bite').first()
export const getDataValue = page => page.locator('.circle-callout text')
