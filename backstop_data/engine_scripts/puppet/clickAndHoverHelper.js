module.exports = async (page, scenario) => {
  const hoverSelector = scenario.hoverSelector;
  const clickSelector = scenario.clickSelector;
  const postInteractionWait = scenario.postInteractionWait || 200;

  if (hoverSelector) {
    await page.waitForSelector(hoverSelector);
    await page.hover(hoverSelector);
  }

  if (clickSelector) {
    await page.waitForSelector(clickSelector);
    await page.click(clickSelector);
  }

  if (hoverSelector || clickSelector) {
    await page.waitForTimeout(postInteractionWait);
  }
};
