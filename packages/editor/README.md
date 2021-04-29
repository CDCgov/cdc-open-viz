# @cdc/editor

![npm](https://img.shields.io/npm/v/@cdc/editor)

React component for creating configurations for the [map](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/map) and [chart](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/chart) packages. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

**Examples**
* [Numeric Maps](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-numeric-maps.html)
* [World Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-world-data-map.html)
* [Categorical Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-categorical-maps.html)
* [Filterable Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-numeric-maps-filterable.html)

### Installation and Usage

1. Install the package in your React project `npm install @cdc/editor`
2. Import the component and begin using in your code.

```JSX
import CdcEditor from '@cdc/editor'

function App() {

  return (
    <div className="App">
      <CdcEditor />
    </div>
  );
}

export default App;
```

Note: If no properties are passed, the map will load a default configuration file.

## Data Formatting

The data that you are mapping needs to be formatted in a specific way - must have distinct rows for each type of data and columns. If your data conforms to a regular spreadsheet, it's likely okay to utilize.

The supported formats are CSV and JSON files.

For more information and example data files, see the [CDC's official guidance](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/instructions/data-map-instructions.html) on formatting.

### Properties

| Property          | Type     | Description                                                                                                                                                                                                                                                                             |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config            | Object   | You can pass an existing config object to make changes to it with the editor. If no config is passed, it lets you start from scratch.|                                                                                                                                                                                                        |