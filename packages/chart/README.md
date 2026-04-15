# @cdc/chart

[![npm](https://img.shields.io/npm/v/@cdc/chart)](https://www.npmjs.com/package/@cdc/chart)

`<CdcChart />` is the CDC charting component for rendering bar, line, pie, combo, radar, Sankey, forest plot, and other chart families from a saved config.

## Installation

```bash
npm install @cdc/chart
```

## Quick Start

Use the package by passing a `config` object directly:

<!-- README_EXAMPLE_CONFIG_START -->
```jsx
import CdcChart from '@cdc/chart'

const config = {
  type: 'chart',
  version: '4.26.4',
  visualizationType: 'Bar',
  title: 'Minimal Chart',
  data: [
    { category: 'A', value: 1 },
    { category: 'B', value: 2 }
  ],
  xAxis: {
    dataKey: 'category'
  },
  series: [{ dataKey: 'value' }]
}

function App() {
  return (
    <div className='App'>
      <CdcChart config={config} />
    </div>
  )
}

export default App
```
<!-- README_EXAMPLE_CONFIG_END -->

You can also load configuration from a URL with `<CdcChart configUrl='/path/to/config.json' />`.

## Configuration

The primary reference for authoring configs is [CONFIG.md](./CONFIG.md).

Shared nested config types used by `@cdc/chart` are documented in [`@cdc/core` shared config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `config` | `object` | Configuration object for the chart. This is the primary integration path for React consumers. |
| `configUrl` | `string` | Optional URL to a JSON config file. Use this when you want the component to fetch its config at runtime. |
