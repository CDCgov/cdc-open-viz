# @cdc/data-byte

[![npm](https://img.shields.io/npm/v/@cdc/data-byte)](https://www.npmjs.com/package/@cdc/data-byte)


`<CdcDataByte />` is a React component produced by the CDC for highlighting/displaying a single piece of data in a card format. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

### Installation and Usage

1. Install the package in your React project `npm install @cdc/data-byte`
2. Import the component and begin using in your code.
```JSX
import CdcDataByte from '@cdc/data-byte'

function App() {

  return (
    <div className="App">
      <CdcDataByte config={configObj} />
    </div>
  );
}

export default App;
```

Note, you must pass in a configuration object. Configuration objects can be created with the [Editor package](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor).

Sample config data can be found in [packages/data-byte/examples](https://github.com/CDCgov/cdc-open-viz/tree/integration/packages/data-byte/examples).

### Properties

| Property          | Type     | Description                                                                                                                   |
|-------------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| config            | String   | A JavaScript object with the configuration for the data byte. Pass either this or the configUrl property to setup your chart. |
