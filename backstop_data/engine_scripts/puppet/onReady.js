module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);

  // Wait for Storybook to fully load
  await page.waitForSelector('#storybook-root', { timeout: 30000 });

  // Additional wait for any animations or async content
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));

  // Hide Storybook UI elements if present
  await page.evaluate(() => {
    const toolbar = document.querySelector('[title="Show addons"]');
    if (toolbar) toolbar.style.display = 'none';
  });
};
