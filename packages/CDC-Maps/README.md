# @cdc/map

`<CdcMap />` is a React component for visualizing your data on a map of the United States. This was built for the Centers for Disease Control and Prevention's internal use and has been open sourced. There is support for filtering, toggling, numeric and categorical mapping as well as many other visual configuration options like color schemes. It can be used standalone or in conjunction with the larger CDC Open Visualization framework.

* Supports both U.S. and World maps.
* Focus on accessibility and 508 compliance.
* IE11 support.

**Demos**
* [Numeric Maps](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-numeric-maps.html)
* [World Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-world-data-map.html)
* [Categorical Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-categorical-maps.html)
* [Filterable Map](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-numeric-maps-filterable.html)

### Installation

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

Note: If no `config` property is passed, the map will load a default configuration file.

### Configuration

```JSX
/* External URL */
<CdcMap config="https://example.com/config.json" />

/* JavaScript Object */
<CdcMap config={configObj} />
```

The component supports accepts a simple `config` prop that has all of the configuration for your map. You can pass it in directly as an object or via an external JSON configuration url. You can configure the configuration file with the [@cdc/editor](#) **(TODO: Add link once available)** package or view and adopt from a sample configuration. Reference `/src/data/examples/` folder for examples of both a U.S. Map and World Map.

### Data Formatting

**TODO: Move this to data designer/editor package once that is finished.**

The data that you are mapping needs to be formatted in a specific way where there is one column for each row that represents the state or city for the rest of the data on that row. There needs to be an additional column that represents the data you are trying to display on the map. This can be categorical or numerical data. You will specifically map these columns in the editor.

The supported formats are CSV and JSON files.

For more information, read the [CDC's official guidance](https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/instructions/data-map-instructions.html) on formatting and to get example data files.

### Things to Avoid

* **Do not use this component where a parent element has `position: relative` set.**
The tooltips are positioned absolutely relative to the viewport they're in. If you're including the component inside an element where `position: relative` is set they will be relative to that container element, causing the tooltips to be offset.

## Contributing

To get started working on this repository, follow these steps:
1. Clone the repo and do an `npm install`.
2. Then do `npm i -g react && npm i -g react-dom`.
  * This installs `React` and `ReactDOM` globally. Because this is a library, having them as direct dependencies causes issues so we will link them.
3. Inside the repo folder, do `npm link react && npm link react-dom` which will give us access to these libraries without having to install them.
4. Simply run `npm start` and it will open the project in development mode.
5. To create an actual built version of the library for testing, run `npm run build`
6. To test the package out locally inside a different project, after building you need to [link your local version](https://docs.npmjs.com/cli/link) of the package to that codebase.

**Submitting a Pull Request**
Contributions from users are welcome. If you are not an approved contributor, you will have to [fork this repository](https://help.github.com/articles/fork-a-repo) and submit a pull request that way.

All comments, messages, pull requests, and other submissions received through CDC including this GitHub page may be subject to applicable federal law, including but not limited to the Federal Records Act, and may be archived. Learn more at http://www.cdc.gov/other/privacy.html.

## Notices

#### License

The repository utilizes code licensed under the terms of the Apache Software License and therefore is licensed under ASL v2 or later.

This source code in this repository is free: you can redistribute it and/or modify it under the terms of the Apache Software License version 2, or (at your option) any later version.

This source code in this repository is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the Apache Software License for more details.

The source code forked from other open source projects will inherit its license.

#### Public Domain

This repository constitutes a work of the United States Government and is not subject to domestic copyright protection under 17 USC § 105. This repository is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/). All contributions to this repository will be released under the CC0 dedication. By submitting a pull request you are agreeing to comply with this waiver of copyright interest.

#### Records Management

This repository is not a source of government records, but is a copy to increase collaboration and collaborative potential. All government records will be published through the [CDC web site](https://www.cdc.gov/).

#### Privacy

This repository contains only non-sensitive, publicly available data and information. All material and community participation is covered by the [Disclaimer](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md) and [Code of Conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md). For more information about CDC's privacy policy, please visit http://www.cdc.gov/other/privacy.html.