# @cdc/markup-include

[![npm](https://img.shields.io/npm/v/@cdc/markup-include)](https://www.npmjs.com/package/@cdc/markup-include)

`<CdcMarkupInclude />` renders authored HTML and optional markup variables inside the CDC shell.
The primary configuration reference is [CONFIG.md](./CONFIG.md).

## Installation

```bash
npm install @cdc/markup-include
```

## Quick Start

Use the package by passing a `config` object directly:

<!-- README_EXAMPLE_CONFIG_START -->
```jsx
import CdcMarkupInclude from '@cdc/markup-include'

const config = {
  type: 'markup-include',
  version: '4.26.4',
  theme: 'theme-blue',
  contentEditor: {
    inlineHTML: '<p>Markup include minimum example.</p>',
    srcUrl: '',
    title: 'Markup Include',
    useInlineHTML: true
  }
}

function App() {
  return <CdcMarkupInclude config={config} />
}

export default App
```
<!-- README_EXAMPLE_CONFIG_END -->

## Configuration

Read the full package contract in [CONFIG.md](./CONFIG.md).

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `config` | `object` | Markup include configuration object. |
| `configUrl` | `string` | Optional URL to a JSON config file fetched at runtime. |
