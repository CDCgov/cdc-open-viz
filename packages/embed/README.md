# @cdc/embed

Embeddable COVE visualizations for partner websites.

## Overview

This package provides the infrastructure for partners to embed CDC COVE visualizations on their own websites via iframes.

**Components:**

- **Embed Page** (`embed.html`) - Iframe target that renders visualizations
- **Generator** (`generator.html`) - Public tool for partners to customize embed codes
- **Helper Script** (`embed-helper.js`) - JavaScript for handling iframe resizing

## Development

```bash
# Start development server
npm start

# Build for production
npm run build
```

## Architecture

This package is built with Vite and outputs standalone HTML/JS files to `dist/`.

The files reference `main.js` from openVizWrapper (without cache-busting hash). During the WCMS build process, `openVizWrapper/copyEmbedFiles.js` copies these files and injects the cache-busting hash.

## Phase 0 - Proof of Concept

Current implementation includes minimal "Hello World" pages to validate:

- Build process works
- Files copy correctly to openVizWrapper
- Cache-busting hash injection works
- WCMS publishing workflow is successful

## Future Phases

See `/docs/EMBED_IMPLEMENTATION_PLAN.md` for full implementation roadmap.
