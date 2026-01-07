# Partner Embeds System

## Overview

The COVE embed system allows external partners to embed CDC visualizations on their own websites using iframes. The system consists of three main components that work together to provide a seamless embedding experience with automatic iframe resizing and filter customization.

## Architecture

### The Three Components

1. **Embed Page** (`embed.html`)

   - Single HTML page that can render any COVE visualization type
   - Hosted at: `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html`
   - Partners use this as the iframe `src` with a `?configUrl=` parameter
   - Automatically detects the visualization type from the config and renders it
   - Communicates with parent window via `postMessage` for iframe resizing

2. **Embed Generator** (`generator.html`)

   - React SPA tool for customizing embed codes
   - Hosted at: `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/generator.html`
   - Allows partners to select filter values and hide filters in the embed
   - Provides live preview and generates copy-pasteable iframe code
   - Linked from the "Customize Embed Code" button in COVE editors

3. **Embed Helper Script** (`embed-helper.js`)
   - Standalone JavaScript file included on partner websites
   - Hosted at: `https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js`
   - Handles iframe resizing by listening for messages from embed pages
   - Assigns unique IDs to multiple iframes on the same page

### How the Pieces Work Together

```
Partner Website
┌─────────────────────────────────────────────┐
│ <script src="embed-helper.js"></script>     │
│                                             │
│ <iframe data-cove-embed                     │
│   src="embed.html?configUrl=/config.json">  │
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
2. Sets `data-configurl` attribute pointing to the config JSON
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

- New feature added to COVE core: `hide{FilterName}=true` URL parameters
- Example: `?hideState=true` hides the State filter from the UI
- Implemented in `packages/core/helpers/queryStringUtils.ts`
- Applied in filter rendering across all visualization types

**Combined example:**

```
embed.html?configUrl=/config.json&state=Texas&hideState=true
```

This pre-selects "Texas" and hides the State filter, showing the filtered visualization without UI clutter.

### Editor Integration

All COVE editors (chart, map, dashboard) include a "Share with Partners" section in the Advanced Options panel:

- **"Get Embed Code"** button - Copies basic iframe code immediately
- **"Customize Embed Code →"** button - Opens generator in new tab
- Both buttons only appear if the visualization has been saved (has a configUrl)
- If filters exist but lack `setByQueryParameter`, shows a warning instead

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

**1. Helper Script assigns unique IDs:**

```javascript
// Runs on partner page
iframes = document.querySelectorAll('iframe[data-cove-embed]')
iframes.forEach((iframe, index) => {
  iframe.setAttribute('data-cove-id', `cove-${index}`)
  iframe.postMessage({ type: 'cove:setId', id: `cove-${index}` })
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
  │   ├── generator/          # Generator React app
  │   ├── embed-helper/       # Resize script
  │   └── shared/             # Shared utilities
  ├── index.html              # Embed page template
  ├── generator.html          # Generator template
  └── vite.config.ts          # Multi-page build config
```

### Build Process

The embed package uses Vite for a multi-page build:

```bash
# Build embed package
cd packages/embed
npm run build

# Output in packages/embed/dist/:
# - embed.html
# - generator.html
# - embed-helper.js
# - embed-[hash].js (bundle)
# - generator-[hash].js (bundle)
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
3. Injects hash into `embed.html` and `generator.html` (updates `main.js` references)

This ensures embed pages always load the correct version of COVE's production bundle.

### Production URLs

All embed files are published to WCMS at:

```
https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/
```

## Developer Workflows

### Testing Locally

```bash
# Start embed dev server
lerna run --scope @cdc/embed start

# Vite proxy forwards /TemplatePackage/* requests to production cdc.gov
# This loads the production main.js and COVE packages
```

Access:

- Embed page: `http://localhost:8080/?configUrl=/examples/line-chart-states.json`
- Generator: `http://localhost:8080/generator.html?configUrl=/examples/line-chart-states.json`

### Adding New Features

**To modify embed page behavior:**

1. Edit `packages/embed/src/embed-page/EmbedRenderer.tsx`
2. Test locally with dev server
3. Build and deploy through normal process

**To modify generator UI:**

1. Edit components in `packages/embed/src/generator/`
2. Test with real configs using `?configUrl=` parameter
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

Embed code is generated in two places:

### 1. Editor "Get Embed Code" Button

- Uses `generateEmbedCode()` from `packages/core/helpers/embedCodeGenerator.ts`
- Creates basic iframe + helper script snippet
- No filter customization

### 2. Generator UI

- Uses same `generateEmbedCode()` function
- Passes `urlParams` with filter values and hide flags
- Creates customized iframe code

**Example output:**

```html
<iframe
  src="https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed.html?configUrl=/data/chart.json&state=Texas&hideState=true"
  data-cove-embed
  width="100%"
  height="400"
  frameborder="0"
>
</iframe>
<script src="https://www.cdc.gov/TemplatePackage/contrib/widgets/openVizWrapper/dist/embed/embed-helper.js"></script>
```

## Security Considerations

### Cross-Origin Communication

The helper script validates message origins:

```javascript
if (!event.origin.match(/^https:\/\/([a-z0-9-]+\.)?cdc\.gov$/)) return
```

This allows:

- `https://cdc.gov`
- `https://www.cdc.gov`
- `https://wcms-wp-test.cdc.gov` (for testing)
- `http://localhost:8080` (for development)

### Config URL Validation

The embed page validates configUrl parameters:

- Must be relative URLs (not absolute)
- Prevents loading configs from external domains
- Implementation: `packages/embed/src/shared/urlValidation.ts`

## Troubleshooting

**Iframe not resizing:**

- Check that `data-cove-embed` attribute is present on iframe
- Verify `embed-helper.js` is loaded on parent page
- Check browser console for postMessage errors

**Filters not pre-selecting:**

- Verify filter has `setByQueryParameter` in config
- Check URL parameter name matches exactly (case-sensitive)
- Confirm value exists in filter's `values` array

**Visualization not rendering:**

- Check configUrl is valid and config is accessible
- Verify main.js is loading (check Network tab)
- Confirm config has proper `type` field
