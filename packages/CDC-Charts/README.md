# @cdc/map

`<CdcChart />` is a React component for visualizing your data in a chart. This was built for the Centers for Disease Control and Prevention's internal use and has been open sourced. There is support for line, bar, and pie charts as well as other configurations.


* Focus on accessibility and 508 compliance.
* IE11 support.

**Demos**
**TODO**

### Installation and Usage

1. Install the package in your React project `npm install @cdc/chart`
2. Import the component and begin using in your code.
```JSX
import CdcMap from '@cdc/chart'

function App() {

  return (
    <div className="App">
      <CdcChart />
    </div>
  );
}

export default App;
```

Note: If no properties are passed, the map will load a default configuration file.

### Properties

| Property          | Type     | Description                                                                                                                                                                                                                                                                             |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| configUrl         | String   | Pass a URL to a .json file and it will be consumed and used as the configuration.                                                                                                                                                                                                       |

## Contributing

To get started working on this repository, follow these steps:
1. Clone the monorepo and do an `lerna bootstrap`. This installs all dependencies. Then you can navigate to `/packages/cdc-charts/` and do `npm link` to link the namespace `@cdc/chart` to your local project (see step 4 for more.)
2. Simply run `lerna run --scope @cdc/chart start` and it will open the project in development mode.
3. To create an actual built version of the library for testing, run `lerna run --scope @cdc/chart build`
4. To test the package out locally inside a different project, after building you need to go into that folder and run `npm link @cdc/chart`. It should begin using your local version so you can make changes and view them.

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
