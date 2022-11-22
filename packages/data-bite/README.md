# @cdc/data-bite

[![npm](https://img.shields.io/npm/v/@cdc/data-bite)](https://www.npmjs.com/package/@cdc/data-bite)

`<CdcDataBite />` is a React component produced by the CDC for highlighting/displaying a single piece of data in a card format. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

### Installation and Usage

1. Install the package in your React project `npm install @cdc/data-bite`
2. Import the component and begin using in your code.

```JSX
import CdcDataBite from '@cdc/data-bite'

function App() {

  return (
    <div className="App">
      <CdcDataBite config={configObj} />
    </div>
  );
}

export default App;
```

Note, you must pass in a configuration object. Configuration objects can be created with the [Editor package](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor).

Sample config data can be found in [packages/data-bite/examples](https://github.com/CDCgov/cdc-open-viz/tree/integration/packages/data-bite/examples).

### Properties

| Property | Type   | Description                                                                                                                   |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| config   | String | A JavaScript object with the configuration for the data bite. Pass either this or the configUrl property to setup your chart. |
