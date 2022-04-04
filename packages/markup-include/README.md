# @cdc/waffle-chart

[![npm](https://img.shields.io/npm/v/@cdc/waffle-chart)](https://www.npmjs.com/package/@cdc/waffle-chart)


`<CdcWaffleChart />` is a React component produced by the CDC for highlighting/displaying a single piece of data in a card format. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

### Installation and Usage

1. Install the package in your React project `npm install @cdc/waffle-chart`
2. Import the component and begin using in your code.
```JSX
import CdcWaffleChart from '@cdc/waffle-chart'

function App() {

  return (
    <div className="App">
      <CdcWaffleChart config={configObj} />
    </div>
  );
}

export default App;
```

Note, you must pass in a configuration object. Configuration objects can be created with the [Editor package](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor).

### Properties

| Property          | Type     | Description                                                                                                                                                                                                                                                                             |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config            | String   | A JavaScript object with the configuration for the waffle chart. Pass either this or the configUrl property to setup your chart.                                                                                                                                                           |
