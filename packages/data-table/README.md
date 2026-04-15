# @cdc/data-table

[![npm](https://img.shields.io/npm/v/@cdc/data-table)](https://www.npmjs.com/package/@cdc/data-table)

`<CdcDataTable />` is the CDC data table component for displaying a dataset in a table layout with optional filters and downloads.

## Installation

```bash
npm install @cdc/data-table
```

## Quick Start

Use the package by passing a `config` object directly:

<!-- README_EXAMPLE_CONFIG_START -->
```jsx
import CdcDataTable from '@cdc/data-table'

const config = {
  type: 'table',
  version: '4.26.4',
  visualizationType: 'Table',
  locale: 'en-US',
  data: [
    { year: '2020', value: 77.3 },
    { year: '2021', value: 76.4 }
  ]
}

function App() {
  return (
    <div className='App'>
      <CdcDataTable config={config} />
    </div>
  )
}

export default App
```
<!-- README_EXAMPLE_CONFIG_END -->

You can also load configuration from a URL with `<CdcDataTable configUrl='/path/to/config.json' />`.

## Configuration

The primary reference for authoring configs is [CONFIG.md](./CONFIG.md).

Shared nested config types used by `@cdc/data-table` are documented in [`@cdc/core` shared config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `config` | `object` | Configuration object for the data table. This is the primary integration path for React consumers. |
| `configUrl` | `string` | Optional URL to a JSON config file. Use this when you want the component to fetch its config at runtime. |
