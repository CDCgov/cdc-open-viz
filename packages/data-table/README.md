# @cdc/data-table

[![npm](https://img.shields.io/npm/v/@cdc/data-table)](https://www.npmjs.com/package/@cdc/data-table)

`<CdcDataTable />` is a React component produced by the CDC for displaying a single piece of data in a card format. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

### Installation and Usage

1. Install the package in your React project `npm install @cdc/data-table` or `yarn add @cdc/data-table`.
2. Import the component and begin using in your code.

```JSX
import CdcDataTable from '@cdc/data-table'

function App() {

  return (
    <div className="App">
      <CdcDataTable config={configObj} />
    </div>
  );
}

export default App;
```

Note, you must pass in a configuration object. Configuration objects can be created with the [Editor package](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor).

Sample config data can be found in [packages/data-table/examples](https://github.com/CDCgov/cdc-open-viz/tree/integration/packages/data-table/examples).

### Properties

| Property | Type   | Description                                                                                                                    |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| config   | String | A JavaScript object with the configuration for the data table. Pass either this or the configUrl property to setup your chart. |
