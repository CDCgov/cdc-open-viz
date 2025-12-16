module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // Wait for any animations or loading to complete
  await new Promise(resolve => setTimeout(resolve, scenario.delay || 1000));

  // Additional wait for network idle to ensure all resources are loaded
  await page.waitForNetworkIdle({ timeout: 10000 }).catch(() => {
    console.log('Network idle timeout - proceeding anyway');
  });
};
