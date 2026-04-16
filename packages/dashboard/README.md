# @cdc/dashboard

[![npm](https://img.shields.io/npm/v/@cdc/dashboard)](https://www.npmjs.com/package/@cdc/dashboard)

`<CdcDashboard />` combines multiple visualizations into a single dashboard shell.
The primary configuration reference is [CONFIG.md](./CONFIG.md).

## Installation

```bash
npm install @cdc/dashboard
```

## Quick Start

Use the package by passing a `config` object directly:

<!-- README_EXAMPLE_CONFIG_START -->
```jsx
import CdcDashboard from '@cdc/dashboard'

const config = {
  type: 'dashboard',
  version: '4.26.4',
  dashboard: {
    theme: 'theme-blue',
    title: 'Dashboard Example',
    titleStyle: 'small',
    sharedFilters: []
  },
  data: [],
  rows: [
    {
      columns: [
        {
          width: 12,
          widget: 'markup-1'
        }
      ]
    }
  ],
  visualizations: {
    'markup-1': {
      type: 'markup-include',
      theme: 'theme-blue',
      contentEditor: {
        inlineHTML: '<p>Minimal dashboard example</p>',
        showHeader: true,
        srcUrl: '',
        title: 'Dashboard Example',
        useInlineHTML: true
      }
    }
  }
}

function App() {
  return <CdcDashboard config={config} />
}

export default App
```
<!-- README_EXAMPLE_CONFIG_END -->

## Configuration

The primary reference for authoring configs is [CONFIG.md](./CONFIG.md).

If you are reading this in a context where relative Markdown links do not open correctly, use the [GitHub copy of the dashboard config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/dashboard/CONFIG.md).

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `config` | `object` | Dashboard configuration object. Pass this or `configUrl` to initialize the dashboard. |
| `configUrl` | `string` | URL to a JSON config file that will be fetched at runtime. |
