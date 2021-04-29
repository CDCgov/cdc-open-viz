# @cdc/map

[![npm](https://img.shields.io/npm/v/@cdc/map)](https://www.npmjs.com/package/@cdc/map)

React component for visualizing tabular data on a map of the United States or the world. Includes support for filtering, toggling, numeric and categorical mapping as well as many other configuration options like color schemes. This package is part of the larger [CDC Open Visualization](https://github.com/CDCgov/cdc-open-viz) project.

**Examples**
* [Numeric Maps](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-numeric-maps.html)
* [World Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-world-data-map.html)
* [Categorical Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-categorical-maps.html)
* [Filterable Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-numeric-maps-filterable.html)

### Installation and Usage

1. Install the package in your React project `npm install @cdc/map`
2. Import the component and begin using in your code.

```JSX
import CdcMap from '@cdc/map'

function App() {

  return (
    <div className="App">
      <CdcMap />
    </div>
  );
}

export default App;
```

Note: If no properties are passed, the map will load a default configuration file.

### Properties

| Property          | Type     | Description                                                                                                                                                                                                                                                                             |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| navigationHandler | Function | A custom function that will receive the URL of the item that was clicked by the user. This will override the built in navigationHandler. It's helpful if you need to implement a custom metrics call or some other kind of intermediate behavior before you direct the user to the URL. |
| configUrl         | String   | Pass a URL to a .json file and it will be consumed and used as the configuration.                                                                                                                                                                                                       |
| config            | Object   | You can pass the raw configuration object directly as a prop. For help generating such an object, use the built in editor.                                                                                                                                                              |
| isEditor          | Boolean  | A simple flag that will load the editor for the maps inside your app. Helpful to provide a user interface instead of having to edit raw JSON.                                                                                                                                           |
| className         | String   | Lets you add a custom class name to the outermost container element of the map.                                                                                                                                                                                                         |
