# @cdc/dashboard

[![npm](https://img.shields.io/npm/v/@cdc/dashboard)](https://www.npmjs.com/package/@cdc/dashboard)


`<CdcDashboard />` is a React component produced by the CDC for combining multiple visualizations into a single module. Some supported visualization types are CdcMap and CdcChart. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

### Installation and Usage

1. Install the package in your React project `npm install @cdc/dashboard`
2. Import the component and begin using in your code.
```JSX
import CdcChart from '@cdc/dashboard'

function App() {

  return (
    <div className="App">
      <CdcDashboard config={configObj} />
    </div>
  );
}

export default App;
```

Note, you must pass in a configuration object. Configuration objects can be created with the [Editor package](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor).

### Properties

| Property          | Type     | Description                                                                                                                                                                                                                                                                             |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config        | String   | A JavaScript object with the configuration for the dashboard. Pass either this or the configUrl property to setup your dashboard.                                                                                                                                                                                         |
| configUrl         | String   | Pass a URL to a .json file and it will be consumed and used as the configuration.                                                                                                                                                                                                       |