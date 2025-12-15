# COVE Embed Implementation Plan

## Overview

This document outlines the plan to enable partner websites to embed COVE visualizations via iframes. The solution allows CDC employees to create visualizations that partners can embed on their own websites, with the data and configuration hosted on cdc.gov.

### Production URLs

All embed-related files will be published to:

```
https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/
```

Key files:

- **Embed page**: `embed.html` - The iframe target for embedded visualizations
- **Generator**: `generator.html` - Public tool for partners to customize embed codes
- **Helper script**: `embed-helper.js` - JavaScript for handling iframe resizing

## Architecture Summary

### Core Components

1. **Embed Page** (`/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html`)

   - Single HTML page that can render any COVE visualization type
   - Detects visualization type from config
   - Accepts URL parameters for filtering and UI customization
   - Sends resize events to parent window

2. **Embed Generator** (`/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/generator.html`)

   - Public-facing React SPA
   - Allows partners to customize embed codes
   - Shows live preview of visualization
   - Generates copy-pasteable iframe code with filter selections

3. **Embed Helper Script** (`/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js`)

   - Standalone JavaScript file
   - Partners include on their site to handle iframe resizing
   - Listens for `postMessage` events from COVE iframes

4. **Editor Integration**
   - Simple "Share with Partners" UI in existing editor
   - "Copy Basic Embed Code" - immediate copy without customization
   - "Customize Embed Code" - links to public generator

### Package Structure

```
packages/embed/
  ├── src/
  │   ├── embed-page/              # Single embed page for all viz types
  │   │   ├── index.tsx            # Entry point
  │   │   ├── EmbedRenderer.tsx    # Detects type & renders component
  │   │   └── utils/
  │   │       ├── parseUrlParams.ts
  │   │       └── configLoader.ts
  │   │
  │   ├── generator/               # Generator SPA
  │   │   ├── index.tsx            # Entry point
  │   │   ├── Generator.tsx        # Main UI component
  │   │   ├── ConfigLoader.tsx     # Loads & parses config
  │   │   ├── FilterControls.tsx   # Filter selection UI
  │   │   ├── PreviewPanel.tsx     # Live preview of viz
  │   │   └── CodeSnippet.tsx      # Generated code display
  │   │
  │   ├── embed-helper/            # Resize script
  │   │   └── index.ts             # Standalone resize listener
  │   │
  │   └── shared/                  # Shared utilities
  │       └── embedUtils.ts
  │
  ├── embed-page.html              # Template for embed page
  ├── generator.html               # Template for generator
  ├── vite.config.js               # Multi-page build config
  ├── package.json
  └── README.md                    # WCMS publishing instructions
```

**Key architectural note:** Embed HTML files reference `main.js` without the cache-busting hash. The hash is injected by `openVizWrapper/copyEmbedFiles.js` during the WCMS build process.

### Build Output

After building, `packages/embed/dist/` contains:

```
dist/
  ├── embed.html              # Single embed page
  ├── embed-[hash].js         # Embed page JS
  ├── generator.html          # Generator SPA
  ├── generator-[hash].js     # Generator JS
  ├── embed-helper.js         # Resize script (stable name, no hash)
  └── assets/                 # CSS, images, etc.
```

These static files get published to WCMS at:

- `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html`
- `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/generator.html`
- `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js`

Note: The entire contents of `packages/embed/dist/` are published to the `/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/` directory on cdc.gov.

## User Workflows

### Workflow 1: CDC Employee Creates Chart & Shares Basic Embed

1. CDC employee creates visualization in CMS editor
2. Publishes chart (config saved at predictable URL: `/data/charts/abc123.json`)
3. Clicks "Copy Basic Embed Code" button in editor
4. Receives code snippet:
   ```html
   <iframe
     src="https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html?configUrl=/data/charts/abc123.json"
     data-cove-embed
     width="100%"
     height="400"
     frameborder="0"
   >
   </iframe>
   <script src="https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js"></script>
   ```
5. Shares code with partner
6. Partner pastes into their website

### Workflow 2: Partner Customizes Embed with Filters

1. CDC employee shares generator link: `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/generator.html?configUrl=/data/charts/abc123.json`
2. Partner opens generator, sees live preview of chart
3. Generator detects filters from config (e.g., State, Year)
4. Partner selects "Texas" from State dropdown
5. Partner checks "Hide State filter in embedded version"
6. Partner selects "2023" from Year dropdown
7. Partner checks "Hide Year filter in embedded version"
8. Generator produces customized code:
   ```html
   <iframe
     src="https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html?configUrl=/data/charts/abc123.json&state=Texas&hideState=true&year=2023&hideYear=true"
     data-cove-embed
     width="100%"
     height="400"
     frameborder="0"
   >
   </iframe>
   <script src="https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js"></script>
   ```
9. Partner copies and embeds on their site

## Technical Details

### How COVE's Native Filter System Works

COVE already supports setting filter values via URL query parameters:

- Filters have a `setByQueryParameter` property in the config
- When set, COVE automatically reads `window.location.search` and applies the value
- Function: `getQueryStringFilterValue()` in `packages/core/helpers/queryStringUtils.ts`
- Example: If filter has `setByQueryParameter: "state"`, then `?state=Texas` pre-selects Texas

**Key insight:** The embed page doesn't need to manually apply filters - it just passes URL params through, and COVE handles them natively!

### What We Need to Add to COVE

**New feature: Hide individual filters via URL parameters**

- Add support for per-filter hide parameters: `?hideState=true&hideYear=true`
- Parameter name format: `hide{FilterParameterName}=true`
- Each filter can be independently hidden via its own parameter
- When present, COVE components should not render that specific filter's UI
- This is a runtime override that works similarly to how `setByQueryParameter` works
- Implementation location: Filter rendering components in `packages/core/components/Filters/`

### Embed Page Implementation

**EmbedRenderer.tsx** (conceptual):

```typescript
function EmbedRenderer() {
  const params = new URLSearchParams(window.location.search)
  const configUrl = params.get('configUrl')

  // Load config from URL
  const config = await loadConfig(configUrl)

  // We could potentially use page parameters to customize the config here

  // Detect viz type and render
  switch (config.type) {
    case 'chart':
      return <CdcChart config={config} />
    case 'map':
      return <CdcMap config={config} />
    case 'dashboard':
      return <CdcDashboard config={config} />
    // ... etc
  }

  // Send resize events to parent
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      window.parent.postMessage(
        {
          type: 'cove:resize',
          height: document.body.scrollHeight
        },
        '*'
      )
    })
    observer.observe(document.body)
  }, [])
}
```

**URL format:**

```
https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html?configUrl=/data/chart.json&state=Texas&hideState=true&year=2023&hideYear=true
```

**Parameter naming convention:**

- Filter value: Use the filter's `setByQueryParameter` value (e.g., `state=Texas`)
- Hide filter: Prefix with `hide` (e.g., `hideState=true`)
- Both are optional and independent

### Embed Helper Script

**embed-helper.js** (conceptual):

```javascript
;(function () {
  'use strict'

  // Find all COVE iframes
  const iframes = document.querySelectorAll('iframe[data-cove-embed]')

  // Assign unique IDs
  iframes.forEach((iframe, index) => {
    iframe.setAttribute('data-cove-id', `cove-${index}`)
  })

  // Listen for resize messages
  window.addEventListener('message', function (event) {
    // Verify origin is cdc.gov
    if (!event.origin.match(/^https:\/\/(www\.)?cdc\.gov$/)) return

    // Handle resize
    if (event.data.type === 'cove:resize') {
      const iframe = document.querySelector(`iframe[data-cove-id="${event.data.id}"]`)
      if (iframe) {
        iframe.style.height = event.data.height + 'px'
      }
    }
  })
})()
```

### Generator Implementation

**Key features:**

1. Accept `?configUrl=...` parameter
2. Load and parse config
3. Detect filters by reading `config.filters` or `config.dashboard.sharedFilters`
4. Show filter selection UI for each detected filter
5. For each filter, show "Hide this filter in embed" checkbox
6. Show live preview of visualization with selected filters applied
7. Generate iframe code with filter value params AND hide params in URL
8. Copy-to-clipboard functionality

**UI mockup:**

```
┌─────────────────────────────────────────────────┐
│ COVE Embed Code Generator                       │
├─────────────────────────────────────────────────┤
│                                                 │
│ Preview:                                        │
│ ┌─────────────────────────────────────────────┐ │
│ │                                             │ │
│ │     [Live chart preview here]               │ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ Customize Filters:                              │
│                                                 │
│ State:  [Texas         ▼]  ☑ Hide in embed     │
│ Year:   [2023          ▼]  ☑ Hide in embed     │
│                                                 │
│ Generated Code:                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ <iframe src="..." ...>                      │ │
│ │ <script src="..."></script>       [Copy]    │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Vite Multi-Page Build Config

```javascript
// packages/embed/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        embed: resolve(__dirname, 'embed-page.html'),
        generator: resolve(__dirname, 'generator.html'),
        helper: resolve(__dirname, 'src/embed-helper/index.ts')
      },
      output: {
        entryFileNames: chunkInfo => {
          // embed-helper.js gets stable name (no hash)
          if (chunkInfo.name === 'helper') {
            return 'embed-helper.js'
          }
          return '[name]-[hash].js'
        }
      }
    }
  }
})
```

## Environment Handling

### Multiple Environments

- COVE has multiple environments: dev, test, prod
- Embed pages built and published to each environment
- Test environments used for developer testing only
- **Partners can only embed from production** (cdc.gov)

### Environment-Aware Generator

- Generator auto-detects its environment from URL
- Generates embed codes pointing to same environment
- Test environment shows warning: "⚠️ Generated codes only work on CDC domains"
- Production generates production-ready codes

## Deployment Process

### Understanding openVizWrapper

The `openVizWrapper` directory in this repository is a **soft link** to a separate repository:

```
cdc-open-viz/openVizWrapper → TemplatePackage/src/contrib/widgets/openVizWrapper
```

**Current build process:**

1. COVE packages are symlinked into `openVizWrapper/node_modules/@cdc/`
2. `Wrapper.js` lazy-loads COVE packages (map, chart, dashboard, etc.)
3. Webpack bundles everything into `openVizWrapper/dist/`
4. Creates: `main.js`, `chart-[hash].js`, `map-[hash].js`, etc.

**For embed package:**

- Embed files are **standalone** (pre-built by Vite)
- Don't need webpack processing
- Simply **copy** from `packages/embed/dist/` to `openVizWrapper/dist/embed/`

### Monthly Production Release

**Step 1: Build COVE packages**

```bash
cd ~/work/cdc-open-viz
lerna run build
```

**Step 2: Build openVizWrapper**

```bash
cd openVizWrapper  # (which is TemplatePackage/src/contrib/widgets/openVizWrapper)
npm run build
```

This runs:

1. `webpack --mode production` - Bundles the wrapper, generates `dist/ssi.html` with hash
2. `node copyEmbedFiles.js` - Copies embed files and injects hash
3. `cd ../../../ && gulp contrib` - Finalizes distribution

**Directory mapping:**

- `packages/embed/dist/embed.html` → `openVizWrapper/dist/embed/embed.html`
- `packages/embed/dist/generator.html` → `openVizWrapper/dist/embed/generator.html`
- `packages/embed/dist/embed-helper.js` → `openVizWrapper/dist/embed/embed-helper.js`
- `packages/embed/dist/assets/*` → `openVizWrapper/dist/embed/assets/*`

Then final location on cdc.gov:

- `openVizWrapper/dist/embed/*` → `/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/*`

### Ad-Hoc Test Environment Updates

- Can publish to test environment anytime for developer validation
- Same manual process but to test WCMS instance
- Test environment URL structure will mirror production:
  - `https://wcms-wp-test.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/`

### Version Management

- `embed-helper.js` has stable name (no version suffix)
- Can be updated in-place
- If breaking changes needed in future, rename file: `embed-helper-v2.js`

## OpenVizWrapper Integration Tasks

**Philosophy:** openVizWrapper is a **thin integration layer**. All embed code lives in `packages/embed/` (COVE repo). openVizWrapper's only job is to copy files and inject the cache-busting hash.

### Task 1: Update package.json Build Script

**File:** `openVizWrapper/package.json`

**Current:**

```json
"build": "npx webpack --mode production; cd ../../../; gulp contrib; cd contrib/widgets/openVizWrapper"
```

**Update to:**

```json
"build": "npx webpack --mode production && node copyEmbedFiles.js && cd ../../../ && gulp contrib && cd contrib/widgets/openVizWrapper"
```

### Task 2: Create copyEmbedFiles.js Script

**File:** `openVizWrapper/copyEmbedFiles.js` (new file)

This script:

1. Extracts the cache-busting hash from `dist/ssi.html`
2. Copies embed files from COVE repo to `dist/embed/`
3. Injects the hash into HTML files' `main.js` references

```javascript
const fs = require('fs')
const path = require('path')

console.log('📦 Copying and processing embed files...')

// Step 1: Extract hash from ssi.html
const ssiPath = path.resolve(__dirname, './dist/ssi.html')
const ssiContent = fs.readFileSync(ssiPath, 'utf8')

// Parse hash from: main.js?bb3cae042a59aab1c5ab
const hashMatch = ssiContent.match(/main\.js\?([a-f0-9]+)/)
if (!hashMatch) {
  console.error('❌ Could not find hash in ssi.html')
  process.exit(1)
}
const hash = hashMatch[1]
console.log(`   Found hash: ${hash}`)

// Step 2: Copy embed files
const embedSource = path.resolve(__dirname, '../../packages/embed/dist')
const embedDest = path.resolve(__dirname, './dist/embed')

console.log(`   Copying from: ${embedSource}`)
console.log(`   Copying to: ${embedDest}`)

// Check if source exists
if (!fs.existsSync(embedSource)) {
  console.error(`❌ Embed source directory not found: ${embedSource}`)
  console.error('   Make sure to run "lerna run --scope @cdc/embed build" first')
  process.exit(1)
}

// Create destination directory
if (!fs.existsSync(embedDest)) {
  fs.mkdirSync(embedDest, { recursive: true })
}

// Copy all files recursively
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true })
      }
      copyRecursive(srcPath, destPath)
    } else {
      // Skip source maps
      if (entry.name.endsWith('.map')) continue
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

copyRecursive(embedSource, embedDest)
console.log('   ✓ Files copied')

// Step 3: Inject hash into HTML files
console.log('   Injecting cache-busting hash into HTML files...')

const htmlFiles = ['embed.html', 'generator.html']
htmlFiles.forEach(file => {
  const filePath = path.join(embedDest, file)

  if (!fs.existsSync(filePath)) {
    console.warn(`   ⚠️  ${file} not found, skipping`)
    return
  }

  let content = fs.readFileSync(filePath, 'utf8')

  // Replace main.js references with cache-busted version
  // Matches: main.js" or main.js' or main.js)
  const originalContent = content
  content = content.replace(/main\.js(['"])/g, `main.js?${hash}$1`)

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`   ✓ ${file} - hash injected`)
  } else {
    console.warn(`   ⚠️  ${file} - no main.js references found`)
  }
})

console.log('✅ Embed files processed successfully!')
```

### Task 3: Update README

**File:** `openVizWrapper/README.md`

Add section:

```markdown
## Embed Package Integration

The embed functionality lives in `packages/embed/` in the COVE repository and is built separately with Vite.

**openVizWrapper's role:**

- Thin integration layer for WCMS publishing
- Copies pre-built files from `packages/embed/dist/`
- Injects cache-busting hash into HTML files

**Build process:**

1. Webpack builds the main wrapper → generates `dist/ssi.html` with hash
2. `copyEmbedFiles.js` script:
   - Extracts hash from `ssi.html` (e.g., `?bb3cae042a59aab1c5ab`)
   - Copies `packages/embed/dist/*` → `dist/embed/`
   - Injects hash into embed HTML files' `main.js` references
3. Gulp finalizes distribution

**No changes needed in embed package** - it references `main.js` without hash, and the script adds it automatically.

Final URLs:

- `https://www.cdc.gov/.../dist/embed/embed.html` - Iframe target
- `https://www.cdc.gov/.../dist/embed/generator.html` - Partner tool
- `https://www.cdc.gov/.../dist/embed/embed-helper.js` - Resize script
```

## Implementation Checklist

### Phase 0: Proof of Concept ✓ (CURRENT)

**Goal:** Validate the build pipeline and WCMS publishing workflow with minimal "Hello World" pages.

### Phase 0: Proof of Concept & Build Setup (✅ COMPLETED)

- [x] Create `packages/embed/` package skeleton
- [x] Set up basic Vite multi-page config
- [x] Create minimal "Hello World" React SPA in `embed-page.html`
  - Include a `<script src=".../main.js"></script>` reference (no hash yet)
- [x] Create minimal `generator.html` placeholder
- [x] Create `embed-helper.js` stub
- [x] Test COVE build: `cd ~/work/cdc-open-viz && lerna run --scope @cdc/embed build`
- [x] Verify `packages/embed/dist/` contains: `embed.html`, `generator.html`, `embed-helper.js`
- [x] **Create `openVizWrapper/copyEmbedFiles.js`** per Task 2 above
- [x] **Update `openVizWrapper/package.json`** per Task 1 above
- [x] Test full build: `cd openVizWrapper && npm run build`
- [x] Verify:
  - Files copied to `openVizWrapper/dist/embed/`
  - Hash injected into HTML files (check `main.js?{hash}` appears)
- [x] **TEST: Manually publish to test WCMS**
- [x] Load embed page in browser, verify it loads `main.js` with hash
- [x] Confirm WCMS publishing workflow works end-to-end

### Phase 1: Core Embed Page (✅ COMPLETED)

- [x] Create `EmbedRenderer.tsx` component
- [x] Implement config loading from `?configUrl` parameter
- [x] Create wcms-viz-container div with proper data attributes
- [x] Trigger CDC_Load_Viz() to render visualization
- [x] Reference production main.js (no bundling of COVE packages)
- [x] Add Vite dev proxy for /TemplatePackage/\* → cdc.gov
- [x] Test with real COVE configs locally
- [x] Handle loading states and errors (Missing Configuration UI)

**Implementation notes:**

- Used production main.js reference instead of bundling COVE
- Embed page creates container div and triggers COVE loader
- Visualization type detection handled by existing COVE wrapper
- Added proxy in Vite dev config to load production chunks

### Phase 2: Embed Helper Script (✅ COMPLETED)

- [x] Create `embed-helper/index.js` with production code
- [x] Implement iframe detection (`data-cove-embed` attribute)
- [x] Assign unique IDs to iframes (`cove-0`, `cove-1`, etc.)
- [x] Send iframe ID via postMessage to embed page
- [x] Add message listener for resize events in parent
- [x] Implement origin validation (any subdomain of cdc.gov + localhost for dev)
- [x] Add ResizeObserver for height tracking in embed page
- [x] Implement `postMessage` for resize events from iframe to parent
- [x] Handle race conditions (cove_loaded vs ID assignment)
- [x] Add duplicate message prevention using shared ref
- [x] Test with multiple iframes on same page
- [x] Build as standalone IIFE bundle with stable filename

**Implementation notes:**

- Uses postMessage to communicate iframe ID (doesn't modify src URL)
- Shared `lastHeightRef` prevents duplicate resize messages from any code path
- Listens for `cove_loaded` event (official COVE event) to trigger initial resize
- Explicit resize sent when ID arrives (doesn't rely on ResizeObserver initial fire)
- Simple architecture: measureAndSend() function used by all code paths
- Origin validation: `/^https:\/\/([a-z0-9-]+\.)?cdc\.gov$/` allows any subdomain

### Phase 3: Editor Integration - Basic Embed Code (✅ COMPLETED)

- [x] Create shared embed code generator utility in `@cdc/core`
- [x] Add `generateEmbedCode()` function to create iframe snippet
- [x] Add `generateGeneratorLink()` function to create generator URLs
- [x] Add "Share with Partners" section to AdvancedEditor component
- [x] Add "Copy Basic Embed Code" button
- [x] Implement copy-to-clipboard functionality with success feedback
- [x] Add "Customize Embed Code" button that opens generator in new tab
- [x] Add configUrl parameter to AdvancedEditor (optional, shows section only if provided)
- [x] Test in chart editor (works across all editors using AdvancedEditor)
- [x] Test in map editor (works across all editors using AdvancedEditor)
- [x] Test in dashboard editor (works across all editors using AdvancedEditor)

**Implementation notes:**

- Centralized logic in `packages/core/helpers/embedCodeGenerator.ts`
- No circular dependencies - core package has no dependency on embed package
- Added to shared AdvancedEditor component - automatically works in all editors
- Placed at bottom of Advanced Options section (before JSON editor)
- Only shows when configUrl is provided to AdvancedEditor
- Copy button shows "✓ Copied!" feedback for 3 seconds
- Generator button opens in new tab with config pre-filled

### Phase 4: COVE Core - Hide Individual Filters Feature (✅ COMPLETED)

- [x] Add URL parameter detection for `hide{FilterName}=true` pattern
- [x] Update filter rendering logic to check for hide parameter
- [x] Update `packages/core/components/Filters/Filters.tsx` to respect hide flags
- [x] Update dashboard filter rendering (`DashboardFilters.tsx`)
- [x] Update individual viz filter rendering
- [x] Test: `?hideState=true` hides State filter while others remain
- [x] Test: Multiple hide params work together
- [x] Make sure that if there are zero visible filters, the filter section does not take up vertical space
- [x] Test across all visualization types (chart, map, dashboard)
- [x] Document parameter format and usage

**Implementation notes:**

- Created `isFilterHiddenByQuery()` in `packages/core/helpers/queryStringUtils.ts`
- Checks multiple identifiers per filter: `key`, `label`, `columnName` (in that order)
- Filter hidden if ANY identifier matches: `?hide{identifier}=true|1|yes`
- Applied in three locations:
  - Charts: `packages/core/helpers/addValuesToFilters.ts`
  - Maps: `packages/map/src/CdcMapComponent.tsx`
  - Dashboards: `packages/dashboard/src/helpers/addValuesToDashboardFilters.ts`
- Sets `filter.showDropdown = false` when hide parameter detected
- Added check in `Filters.tsx` to return `null` when all filters hidden (0px height)
- Dashboards already had this logic in `DashboardFiltersWrapper.tsx`
- 40 comprehensive tests covering all scenarios
- Works with multiple filters hidden simultaneously
- Preserves case sensitivity in parameter names

### Phase 5: Embed Generator UI

- [ ] Create generator React app skeleton
- [ ] Implement config URL parameter handling
- [ ] Build config loading and parsing
- [ ] Create filter detection logic (read from config)
- [ ] Build filter selection UI (dropdowns for each filter)
- [ ] Add "Hide in embed" checkbox next to EACH filter
- [ ] Create live preview panel (renders actual COVE component)
- [ ] Build code snippet generator (includes both value params AND hide params)
- [ ] Add copy-to-clipboard functionality
- [ ] Style with CDC design system
- [ ] Test with various config types and filter combinations
- [ ] Test: Hiding one filter while showing others
- [ ] Test: Hiding all filters
- [ ] Test: Hiding no filters (show all)

### Phase 6: Editor Integration - Generator Link

- [ ] Add "Customize Embed Code" link/button to editor's "Share with Partners" section
- [ ] Generate link to generator with `?configUrl=` pre-filled
- [ ] Open in new tab/window
- [ ] Test in chart editor
- [ ] Test in map editor
- [ ] Test in dashboard editor
- [ ] Update documentation with full workflow

### Phase 7: Documentation

- [ ] Create WCMS publishing guide (`packages/embed/README.md`)
- [ ] Document embed URL parameters (both filter values and hide params)
- [ ] Create partner embedding guide
- [ ] Document generator usage for partners
- [ ] Document simple embed code workflow for CDC employees
- [ ] Add troubleshooting section
- [ ] Document environment considerations
- [ ] Add examples for each visualization type
- [ ] Document filter parameter naming conventions

### Phase 8: Testing & Validation

- [ ] Test embed page with all viz types
- [ ] Test filter value parameters with various configs
- [ ] Test hide{FilterName} parameters
- [ ] Test combinations: hide some filters but not others
- [ ] Test resize behavior across browsers
- [ ] Test on mobile/responsive
- [ ] Test with multiple embeds on one page
- [ ] Cross-origin security testing
- [ ] Test generator UI/UX with real configs
- [ ] Test full workflow end-to-end (both simple and generator paths)
- [ ] Test editor "Copy Basic Embed Code" functionality
- [ ] Test editor "Customize Embed Code" link

### Phase 9: Production Deployment

- [ ] Build final production-ready assets
- [ ] Create deployment checklist
- [ ] Publish to production WCMS
- [ ] Verify all URLs working
- [ ] Test production embeds
- [ ] Monitor for issues

## Open Questions & Decisions

### Resolved

- ✅ Single embed page vs. separate pages per viz type: **Single page**
- ✅ Inline resize JS vs. external script: **External script (`embed-helper.js`)**
- ✅ Generator location: **New `@cdc/embed` package in monorepo**
- ✅ Environment testing: **Yes, publish to test for dev validation**
- ✅ Filter parameter handling: **Use COVE's native `setByQueryParameter` system**

### To Be Decided Later

- Error handling strategy for invalid configs
- Mobile/responsive embed considerations
- Analytics/tracking for embedded views (deferred)
- Config caching strategy (let WCMS handle)

## Technical Notes

### Filter Parameter Format

**Setting filter values** (existing COVE functionality):

```
?state=Texas&year=2023
```

Where:

- `state` matches filter's `setByQueryParameter` value
- `Texas` matches a value in filter's `values` array
- Case-insensitive matching
- Multiple filters supported by chaining params

**Hiding specific filters** (new functionality):

```
?hideState=true&hideYear=true
```

Where:

- Parameter name is `hide` + the filter's `setByQueryParameter` value
- Value is `true` to hide that filter
- Each filter can be independently hidden
- Can combine with filter value params: `?state=Texas&hideState=true`

**Full example with both:**

```
?state=Texas&hideState=true&year=2023&hideYear=true
```

This would:

1. Pre-select "Texas" for the State filter, then hide it
2. Pre-select "2023" for the Year filter, then hide it
3. Show chart with filtered data but no visible filter UI

### postMessage Security

Always validate `event.origin` before processing messages:

```javascript
if (!event.origin.match(/^https:\/\/(www\.)?cdc\.gov$/)) return
```

Prevents malicious sites from sending fake resize events.

### Browser Compatibility

- ResizeObserver: Modern browsers (IE not supported, acceptable)
- postMessage API: All browsers
- URL parameters: All browsers

### Performance Considerations

- Load only necessary COVE components per viz type
- Code splitting in Vite build
- Lazy load generator preview until filters selected
- Debounce resize events (avoid excessive postMessage calls)

## Future Enhancements (Not in Scope)

- Authentication for restricted datasets
- Embed analytics dashboard
- Embed configuration hosting (instead of requiring config URLs)
- Embed customization API (programmatic control)
- Multiple language support
- Theme customization beyond hide/show filters
- PDF export from embedded views
- Screenshot generation for social sharing

## Success Criteria

### MVP Success

- [ ] Partners can embed charts from cdc.gov
- [ ] Embeds work on external domains (cross-origin)
- [ ] Filters can be pre-selected via URL
- [ ] Filters can be hidden in embeds
- [ ] Iframes auto-resize to content
- [ ] Generator provides live preview
- [ ] CDC employees can generate embed codes
- [ ] Monthly deployment process works

### Long-term Success

- Adoption by 10+ partner organizations
- No security incidents
- Positive feedback from CDC employees and partners
- Minimal support burden

---

## Getting Started

**First step:** Complete Phase 0 to validate the WCMS publishing workflow.

Once validated, proceed with Phase 1 implementation.
