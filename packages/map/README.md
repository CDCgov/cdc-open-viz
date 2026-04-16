# @cdc/map

[![npm](https://img.shields.io/npm/v/@cdc/map)](https://www.npmjs.com/package/@cdc/map)

`<CdcMap />` is a React component for visualizing tabular data on a map of the United States or the world.

## Installation

```bash
npm install @cdc/map
```

## Quick Start

Pass a `config` object directly to the component:

<!-- README_EXAMPLE_CONFIG_START -->
```jsx
import CdcMap from '@cdc/map'

const config = {
  version: '4.26.4',
  color: 'pinkpurple',
  general: {
    title: 'Minimal US Map',
    geoType: 'us',
    type: 'data',
    showTitle: true
  },
  type: 'map',
  columns: {
    geo: { name: 'FIPS Codes', label: 'Location', tooltip: false, dataTable: true },
    primary: { name: 'Rate', label: 'Rate', prefix: '', suffix: '%', tooltip: true, dataTable: true },
    navigate: { name: '' },
    latitude: { name: '' },
    longitude: { name: '' }
  },
  legend: {
    type: 'equalnumber',
    numberOfItems: 3,
    position: 'side',
    style: 'circles',
    title: 'Legend',
    description: '',
    descriptions: {},
    specialClasses: [],
    unified: false,
    singleColumn: false,
    singleRow: false,
    verticalSorted: false,
    showSpecialClassesLast: false,
    dynamicDescription: false,
    hideBorder: false
  },
  filters: [],
  filterBehavior: 'Filter Change',
  data: [
    { 'FIPS Codes': '01', Rate: 10 },
    { 'FIPS Codes': '02', Rate: 20 },
    { 'FIPS Codes': '04', Rate: 30 }
  ]
}

function App() {
  return (
    <div className='App'>
      <CdcMap config={config} />
    </div>
  )
}

export default App
```
<!-- README_EXAMPLE_CONFIG_END -->

You can also load configuration from a URL with `<CdcMap configUrl='/path/to/config.json' />`.

## Configuration

The primary reference for authoring configs is [CONFIG.md](./CONFIG.md).

If you are reading this in a context where relative Markdown links do not open correctly, use the [GitHub copy of the map config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/map/CONFIG.md).

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `config` | `object` | Configuration object for the map. This is the primary integration path for React consumers. |
| `configUrl` | `string` | Optional URL to a JSON config file. Use this when you want the component to fetch its config at runtime. |
