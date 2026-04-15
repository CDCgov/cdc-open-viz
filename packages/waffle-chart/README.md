# @cdc/waffle-chart

[![npm](https://img.shields.io/npm/v/@cdc/waffle-chart)](https://www.npmjs.com/package/@cdc/waffle-chart)

`<CdcWaffleChart />` is a React component for displaying a single highlighted value in a card-style layout.

## Installation

```bash
npm install @cdc/waffle-chart
```

## Quick Start

Pass a `config` object directly to the component:

<!-- README_EXAMPLE_CONFIG_START -->
```jsx
import CdcWaffleChart from '@cdc/waffle-chart'

const config = {
  type: 'waffle-chart',
  version: '4.26.4',
  title: 'Chart Title',
  showTitle: true,
  visualizationType: 'Waffle',
  shape: 'circle',
  data: [{ Value: 42 }],
  dataColumn: 'Value',
  dataFunction: 'Sum',
  content: 'of cases occurred in the home',
  subtext: 'Chart subtext or citation',
  suffix: '%',
  theme: 'theme-blue'
}

function App() {
  return (
    <div className='App'>
      <CdcWaffleChart config={config} />
    </div>
  )
}

export default App
```
<!-- README_EXAMPLE_CONFIG_END -->

You can also load configuration from a URL with `<CdcWaffleChart configUrl='/path/to/config.json' />`.

## Configuration

The primary reference for authoring configs is [CONFIG.md](./CONFIG.md).

Shared nested config types used by `@cdc/waffle-chart` are documented in the canonical [`@cdc/core` shared config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `config` | `object` | Configuration object for the waffle chart. This is the primary integration path for React consumers. |
| `configUrl` | `string` | Optional URL to a JSON config file. Use this when you want the component to fetch its config at runtime. |
