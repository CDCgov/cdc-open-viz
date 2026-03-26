# Partner Embeds System

## Overview

The COVE embed system allows external partners to embed CDC visualizations on their own websites. The system uses a div-based approach where partners place a simple container div on their page, and a helper script automatically creates and manages the iframe. The system provides automatic iframe resizing and filter customization capabilities.

## Architecture

### The Two Components

1. **Embed Page** (`embed.html`)

   - Single HTML page that can render any COVE visualization type
   - Hosted at: `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html`
   - Partners' iframes point to this page with a `?configUrl=` parameter
   - Automatically detects the visualization type from the config and renders it
   - Communicates with parent window via `postMessage` for iframe resizing

2. **Embed Helper Script** (`embed-helper.js`)
   - Standalone JavaScript file included on partner websites
   - Hosted at: `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js`
   - Finds div containers with `data-cove-embed` attribute
   - Creates iframes dynamically and injects them into containers
   - Handles iframe resizing by listening for messages from embed pages
   - Assigns unique IDs to multiple embeds on the same page

### How the Pieces Work Together

```
Partner Website
┌─────────────────────────────────────────────┐
│ <script src="embed-helper.js"></script>     │
│                                             │
│ <div data-cove-embed                        │
│   data-config-url="/config.json">           │
│                                             │
│   [Helper creates iframe here]              │
│                                             │
│   ┌───────────────────────────────────┐     │
│   │ Embed Page (inside iframe)        │     │
│   │ - Loads config from URL           │     │
│   │ - Creates COVE container          │     │
│   │ - References main.js from cdc.gov │     │
│   │ - Visualization renders           │     │
│   │ - Sends resize messages ──────────┼─────┼──> Helper Script
│   └───────────────────────────────────┘     │    Adjusts iframe height
│                                             │
└─────────────────────────────────────────────┘
```

## Integration with COVE Core

### How Embed Page Renders Visualizations

The embed page **does not bundle COVE packages**. Instead, it:

1. Creates a `div` with class `wcms-viz-container` and proper data attributes
2. Sets `data-config-url` attribute pointing to the config JSON
3. References the production `main.js` from cdc.gov (the same one used by WCMS pages)
4. The COVE wrapper (`main.js`) finds the container and loads the appropriate visualization package
5. Visualization renders normally as if on a WCMS page

This approach means:

- Embeds always use the latest production COVE code
- No need to rebuild embeds when COVE packages update
- Consistent behavior between WCMS pages and embeds

### URL Parameter System

The embed system leverages COVE's existing filter system:

**Setting filter values** (existing COVE feature):

- Filters have a `setByQueryParameter` property in their config
- COVE automatically reads URL parameters and applies matching values
- Example: `?state=Texas` pre-selects "Texas" if filter has `setByQueryParameter: "state"`

**Hiding filters** (added for embeds):

- COVE feature: `hide{FilterName}=true` URL parameters
- Example: `?hideState=true` hides the State filter from the UI
- Implemented in `packages/core/helpers/queryStringUtils.ts`
- Applied in filter rendering across all visualization types

**Combined example:**

```
embed.html?configUrl=/config.json&state=Texas&hideState=true
```

This pre-selects "Texas" and hides the State filter, showing the filtered visualization without UI clutter.

### Editor Integration

All COVE editors (chart, map, dashboard) include a "Share with Partners" section in the Advanced Options panel. When expanded, it shows a "Get Embed Code" button that opens a tabbed modal with:

**Tab 1: Customize Filters** (only shown if filters exist and are valid)

- Set default values for each filter
- Toggle visibility for each filter in the embed
- Live preview showing how the embed will appear
- Preview updates as you change filter settings

**Tab 2: Get Embed Code**

- Generated embed code with selected filter settings
- Copy to clipboard functionality

**Requirements:**

- The visualization must be saved (has a configUrl from WCMS permalink)
- All filters must have `setByQueryParameter` configured
- If requirements aren't met, shows appropriate warning message

Implementation: `packages/core/components/AdvancedEditor/EmbedEditor.tsx`

### Filter Validation

For embeds to work with filters, each filter must have `setByQueryParameter` configured:

```json
{
  "filters": [
    {
      "key": "state",
      "label": "State",
      "setByQueryParameter": "state" // Required for embeds
    }
  ]
}
```

The system validates this and prevents embed code generation if filters are invalid.

## iframe Resizing Flow

The resize system handles the challenge of cross-origin iframe height adjustment:

### The Problem

- Iframes default to fixed height
- Content inside varies by data and filters
- Cross-origin security prevents parent from measuring iframe content
- Need bidirectional communication between parent and iframe

### The Solution

**1. Helper script finds divs and creates iframes:**

```javascript
// Runs on partner page
const containers = document.querySelectorAll('div[data-cove-embed]')
containers.forEach((container, index) => {
  const configUrl = container.dataset.configUrl
  const iframe = document.createElement('iframe')
  iframe.src = `embed.html?configUrl=${configUrl}`
  iframe.setAttribute('data-cove-id', `cove-${index}`)
  container.appendChild(iframe)

  // Send ID to iframe
  iframe.contentWindow.postMessage({ type: 'cove:setId', id: `cove-${index}` })
})
```

**2. Embed page receives ID and measures itself:**

```javascript
// Runs inside iframe
window.addEventListener('message', event => {
  if (event.data.type === 'cove:setId') {
    myId = event.data.id

    // Listen for cove_loaded event
    document.addEventListener('cove_loaded', () => {
      const height = container.getBoundingClientRect().height + 15
      window.parent.postMessage(
        {
          type: 'cove:resize',
          id: myId,
          height: height
        },
        '*'
      )
    })
  }
})
```

**3. Helper script updates iframe height:**

```javascript
// Back on partner page
window.addEventListener('message', event => {
  if (event.data.type === 'cove:resize') {
    const iframe = document.querySelector(`[data-cove-id="${event.data.id}"]`)
    iframe.style.height = event.data.height + 'px'
  }
})
```

### Race Condition Handling

The system handles two async events that can occur in any order:

1. `cove_loaded` event fires when visualization renders
2. `cove:setId` message arrives from parent

Solution: Use refs to store values and trigger resize when both are available.

Implementation: `packages/embed/src/embed-page/EmbedRenderer.tsx`

## Build and Deployment

### Package Structure

```
packages/embed/
  ├── src/
  │   ├── embed-page/         # Embed page React app
  │   ├── shared/             # Shared utilities (useCoveContainer)
  │   └── tests/              # Tests
  ├── index.html              # Embed page template
  ├── preview.html            # Local testing page
  └── vite.config.js          # Build config

packages/core/helpers/embed/  # Shared embed utilities
  ├── embedCodeGenerator.ts   # Generate partner markup
  ├── embedHelper.js          # iframe creation and resize script
  ├── filterUtils.ts          # Filter extraction and URL building
  ├── urlValidation.ts        # Security validation
  └── index.ts                # Barrel export
```

### Build Process

The embed package uses Vite for building deployment artifacts:

```bash
# Build embed package
lerna run --scope @cdc/embed build

# Output in packages/embed/dist/:
# - embed.html
# - embed-helper.js (built from @cdc/core/helpers/embed/embedHelper.js)
# - embed-[hash].js (bundle)
# - assets/
```

### Integration with openVizWrapper

The `openVizWrapper` build process copies embed files and injects cache-busting hashes:

```bash
# In openVizWrapper/
npm run build

# This runs:
# 1. webpack --mode production  (creates main.js with hash)
# 2. node copyEmbedFiles.js     (copies embed files, injects hash)
# 3. gulp contrib               (finalizes distribution)
```

The `copyEmbedFiles.js` script:

1. Extracts hash from `dist/ssi.html` (e.g., `?bb3cae042a59aab1c5ab`)
2. Copies `packages/embed/dist/*` → `openVizWrapper/dist/embed/`
3. Injects hash into `embed.html` (updates `main.js` reference)

This ensures the embed page always loads the correct version of COVE's production bundle.

### Production URLs

All embed files are published to WCMS at:

```
https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/
```

## Developer Workflows

### Testing Locally with Preview Page

The simplest way to test embeds locally:

```bash
# Start embed dev server
lerna run --scope @cdc/embed start

# Server runs on port 8080
# Visit: http://localhost:8080/preview.html
```

The preview page demonstrates a working embed using `line-chart-states.json`. You can modify the preview.html file to test different configs or multiple embeds on the same page.

### Testing Editor Integration

Testing the "Share with Partners" modal in the editor requires running **two dev servers**:

**Step 1: Start the embed server**

```bash
lerna run --scope @cdc/embed start
# Runs on port 8080
```

**Step 2: Start a visualization package**

```bash
# Example: Chart package
lerna run --scope @cdc/chart start
# Runs on port 8081
```

**Step 3: Open the editor**

```bash
# Visit the chart editor with a config that exists in BOTH packages
http://localhost:8081?config=/examples/line-chart-states.json&editor=true
```

**Important Limitation:**

- The config file MUST exist in both the viz package AND the embed package
- This is because the editor uses a relative URL (`/examples/...`)
- The embed iframe (port 8080) fetches from its own origin
- Currently, only `line-chart-states.json` exists in both packages

**To add more shared examples:**
Copy config files from viz packages to `packages/embed/examples/` as needed.

### Adding New Features

**To modify embed page behavior:**

1. Edit `packages/embed/src/embed-page/EmbedRenderer.tsx`
2. Test locally with dev server
3. Build and deploy through normal process

**To modify embed helper behavior:**

1. Edit `packages/core/helpers/embed/embedHelper.js`
2. Test with preview.html or editor
3. Build and deploy

**To modify COVE rendering in embeds:**

- Changes to visualization packages automatically apply to embeds
- No embed-specific changes needed
- Embeds use production `main.js` directly

### Filter Hide Feature

The `hide{FilterName}=true` feature required changes to COVE core:

**Implementation locations:**

- `packages/core/helpers/queryStringUtils.ts` - Detection function
- `packages/core/helpers/addValuesToFilters.ts` - Applied to charts
- `packages/map/src/CdcMapComponent.tsx` - Applied to maps
- `packages/dashboard/src/helpers/addValuesToDashboardFilters.ts` - Applied to dashboards

**How it works:**

```typescript
// Check if filter should be hidden
function isFilterHiddenByQuery(filter) {
  const identifiers = [filter.key, filter.label, filter.columnName]
  return identifiers.some(id => queryParams.get(`hide${id}`) === 'true')
}

// Apply to filter
if (isFilterHiddenByQuery(filter)) {
  filter.showDropdown = false
}
```

## Code Generation

### Editor "Share with Partners" Modal

Embed code is generated in the editor using `generateEmbedCode()` from `packages/core/helpers/embed/embedCodeGenerator.ts`.

**Without filter customization:**

```typescript
generateEmbedCode({
  configUrl: '/path/to/config.json'
})
```

**With filter customization:**

```typescript
generateEmbedCode({
  configUrl: '/path/to/config.json',
  urlParams: {
    state: 'Texas',
    hidestate: 'true'
  }
})
```

**Example output (div-based markup):**

```html
<div data-cove-embed data-config-url="/data/chart.json?state=Texas&hideState=true"></div>
<script
  type="module"
  src="https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js"
></script>
```

**What happens when partner includes this:**

1. Helper script finds the div with `data-cove-embed`
2. Reads `data-config-url` attribute
3. Creates iframe element: `<iframe src="embed.html?configUrl=/data/chart.json&state=Texas&hideState=true">`
4. Injects iframe into the div
5. Sets up resize listeners
6. Iframe height adjusts automatically

## Security Considerations

### Cross-Origin Communication

The helper script validates message origins to prevent malicious messages:

Implementation: `packages/core/helpers/embed/urlValidation.ts` - `isValidMessageOrigin()`

This allows messages from:

- `https://cdc.gov`
- `https://www.cdc.gov`
- `https://*.cdc.gov` (any subdomain)
- `http://localhost` and `http://127.0.0.1` (development only)

Message validation is applied only to COVE protocol events (`cove:*`). Unrelated `postMessage` traffic is ignored silently to avoid console noise from other scripts/extensions.

### Config URL Validation

The embed page validates configUrl parameters to prevent loading configs from external domains:

- Must be relative URLs (not absolute)
- Prevents loading configs from external domains
- Example: `/path/config.json` ✅, `https://evil.com/config.json` ❌

Implementation: `packages/core/helpers/embed/urlValidation.ts` - `isValidConfigUrl()`

## Troubleshooting

**Embed not appearing:**

- Check that `data-cove-embed` attribute is present on div
- Verify `embed-helper.js` is loaded on partner page
- Check browser console for errors
- Verify configUrl points to valid config file

**Iframe not resizing:**

- Check that iframe has `data-cove-id` attribute (added by helper)
- Check browser console for COVE `postMessage` errors
- Verify embed page and partner page can communicate
- Confirm resize messages use `type: "cove:resize"` and are sent from an allowed origin
- Invalid-origin COVE messages are rejected and logged once with context (`origin`, `type`, `id`)

**Filters not pre-selecting:**

- Verify filter has `setByQueryParameter` in config
- Check URL parameter name matches exactly (case-sensitive)
- Confirm value exists in filter's `values` array

**Visualization not rendering:**

- Check configUrl is valid and config is accessible
- Verify main.js is loading (check Network tab)
- Confirm config has proper `type` field

**Development: Config not found**

- In dev mode, config files must exist in both the embed package AND the viz package
- Only `line-chart-states.json` exists in both by default
- Copy additional configs to `packages/embed/examples/` as needed
