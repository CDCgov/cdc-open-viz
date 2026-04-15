# @cdc/data-bite

[![npm](https://img.shields.io/npm/v/@cdc/data-bite)](https://www.npmjs.com/package/@cdc/data-bite)

`<CdcDataBite />` is a React component for displaying a single highlighted value in a card-style layout.

## Installation

```bash
npm install @cdc/data-bite
```

## Quick Start

Use the package by passing a `config` object directly:

<!-- README_EXAMPLE_CONFIG_START -->
```jsx
import CdcDataBite from '@cdc/data-bite'

const config = {
  type: 'data-bite',
  version: '4.26.4',
  title: 'Data / Fact',
  biteBody: 'Highlight a statistic, data point, or key fact.',
  data: [{ Value: 1234 }],
  dataColumn: 'Value',
  dataFunction: 'Pass Through'
}

function App() {
  return (
    <div className='App'>
      <CdcDataBite config={config} />
    </div>
  )
}

export default App
```
<!-- README_EXAMPLE_CONFIG_END -->

You can also load configuration from a URL with `<CdcDataBite configUrl='/path/to/config.json' />`.

## Configuration

The primary reference for authoring configs is [CONFIG.md](./CONFIG.md).

Shared nested config types used by `@cdc/data-bite` are documented in [`@cdc/core` shared config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `config` | `object` | Configuration object for the data bite. This is the primary integration path for React consumers. |
| `configUrl` | `string` | Optional URL to a JSON config file. Use this when you want the component to fetch its config at runtime. |
