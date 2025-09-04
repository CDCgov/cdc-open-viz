# Data Bite E2E Tests

End-to-end tests for the Data Bite component using Playwright.

## Test Structure

```
tests/
├── editor/                     # Editor-specific tests by section
│   ├── editor-general.spec.js  # General section tests
│   ├── editor-data.spec.js     # Data section tests
│   └── editor-visual.spec.js   # Visual section tests
├── basic-functionality.spec.js # Core application tests
├── helpers/test-helpers.js     # Shared utilities
└── fixtures/test-config.json   # Independent test configuration
```

## Running Tests

### All Tests

```bash
npx playwright test
```

### Specific Test Suites

```bash
# Editor tests only
npx playwright test tests/editor/

# Specific sections
npx playwright test tests/editor/editor-general.spec.js
npx playwright test tests/editor/editor-data.spec.js
npx playwright test tests/editor/editor-visual.spec.js
```

### Interactive Testing

```bash
# Watch tests run in browser
npx playwright test --headed

# Interactive UI mode
npx playwright test --ui

# Debug mode (step-by-step)
npx playwright test --debug
```

## Test Configuration

Tests use an independent config file to ensure consistent results:

- **Config:** `tests/fixtures/test-config.json`
- **Access:** URL parameter `?config=/tests/fixtures/test-config.json`
- **Benefits:** Isolated from development changes, predictable test data

## Shared Utilities

The `helpers/test-helpers.js` provides common functions:

- `setupEditor(page)` - Initialize editor mode
- `openAccordion(page, sectionName)` - Navigate to editor sections
- `getDataBiteContainer(page)` - Access main component
- `getDataValue(page)` - Get displayed data value
- `getBiteContent(page)` - Access content area

## Adding New Tests

1. Use existing helpers for common setup
2. Follow the section-based organization (General/Data/Visual)
3. Test actual functionality, not just UI interactions
4. Validate visual changes and data updates

## Test Reports

After running tests, view detailed results:

```bash
npx playwright show-report
```
