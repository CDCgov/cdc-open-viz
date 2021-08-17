# @cdc/chart

[![npm](https://img.shields.io/npm/v/@cdc/chart)](https://www.npmjs.com/package/@cdc/chart)


`<CdcChart />` is a React component produced by the CDC for visualizing your data in a chart. Some supported types are Line, bar, pie, combination and horizontal bar chart. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

### Installation and Usage

1. Install the package in your React project `npm install @cdc/chart`
2. Import the component and begin using in your code.
```JSX
import CdcChart from '@cdc/chart'

function App() {

  return (
    <div className="App">
      <CdcChart config={configObj} />
    </div>
  );
}

export default App;
```

Note, you must pass in a configuration object. Configuration objects can be created with the [Editor package](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor).

Sample config data can be found in [packages/chart/examples](https://github.com/CDCgov/cdc-open-viz/tree/integration/packages/chart/examples).

### Properties

| Property          | Type     | Description                                                                                                                                                                                                                                                                             |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config        | String   | A JavaScript object with the configuration for the chart. Pass either this or the configUrl property to setup your chart.                                                                                                                                                                                         |
| configUrl         | String   | Pass a URL to a .json file and it will be consumed and used as the configuration.                                                                                                                                                                                                       |