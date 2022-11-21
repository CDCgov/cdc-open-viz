# @cdc/markup-include

[![npm](https://img.shields.io/npm/v/@cdc/markup-include)](https://www.npmjs.com/package/@cdc/markup-include)

`<CdcMarkupInclude />` is a React component produced by the CDC for importing HTML markup data from a separate source link.

This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

### Installation and Usage

1. Install the package in your React project `npm install @cdc/markup-include`
2. Import the component and begin using in your code.

```JSX
import CdcMarkupInclude from '@cdc/markup-include'

function App() {

  return (
    <div className="App">
      <CdcMarkupInclude config={configObj} />
    </div>
  );
}

export default App;
```

Note, you must pass in a configuration object. Configuration objects can be created with the [Editor package](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor).
