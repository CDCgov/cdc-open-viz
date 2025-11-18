# BackstopJS Visual Regression Testing

This project uses [BackstopJS](https://github.com/garris/BackstopJS) for visual regression testing of Storybook gallery pages.

## Setup

BackstopJS is already installed as a dev dependency. The configuration file `backstop.json` defines the test scenarios.

## Usage

### Prerequisites

Before running BackstopJS tests, ensure Storybook is running:

```bash
yarn storybook
```

Storybook will start on `http://localhost:6006`

### Commands

1. **Create reference screenshots** (baseline images):
   ```bash
   yarn backstop:reference
   ```
   This captures screenshots that will be used as the reference for future comparisons.

2. **Run visual regression tests**:
   ```bash
   yarn backstop:test
   ```
   This compares current screenshots against the reference images and generates a report.

3. **Approve changes**:
   ```bash
   yarn backstop:approve
   ```
   If the visual changes are intentional, this promotes the test screenshots to be the new reference.

4. **Open test report**:
   ```bash
   yarn backstop:open
   ```
   Opens the HTML report in your browser to review test results.

## Configuration

The BackstopJS configuration is in `backstop.json`. Currently configured scenarios:

- **Charts Gallery**: Tests the Charts gallery page at multiple viewport sizes (phone, tablet, desktop)

### Adding More Scenarios

To test additional gallery pages, add scenarios to the `scenarios` array in `backstop.json`:

```json
{
  "label": "Maps Gallery",
  "url": "http://localhost:6006/?path=/story/regression-tests-gallery-maps--all-maps-gallery",
  "delay": 3000,
  "misMatchThreshold": 0.1,
  "requireSameDimensions": true
}
```

To find the correct URL for a story:
1. Navigate to the story in Storybook
2. Click the "Copy canvas link" button (chain icon in toolbar)
3. Use that URL in your scenario configuration

## Files and Directories

- `backstop.json` - Main configuration file
- `backstop_data/engine_scripts/` - Puppeteer scripts for page interactions
- `backstop_data/bitmaps_reference/` - Reference (baseline) screenshots
- `backstop_data/bitmaps_test/` - Test screenshots (gitignored)
- `backstop_data/html_report/` - Test result reports (gitignored)
- `backstop_data/ci_report/` - CI-friendly reports (gitignored)

## Tips

- The first time you run tests, use `yarn backstop:reference` to establish baselines
- Use `delay` settings to ensure charts/maps fully load before capturing
- Adjust `misMatchThreshold` (0.0 - 1.0) to control sensitivity to visual changes
- Test screenshots are gitignored - only reference images are committed
