# CDC Open Visualization Environment (COVE)

CDC OpenViz is a collection of React components and related packages centered around data visualization. These components are used to power visualizations across cdc.gov and affiliated projects.

| Package                                                                               | Description                                                                              |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [@cdc/map](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/map)             | React component for visualizing tabular data on a map of the United States or the world. |
| [@cdc/chart](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/chart)         | React component for visualizing data with a chart.                                       |
| [@cdc/editor](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor)       | React component for importing data and creating a map or chart configuration.            |
| [@cdc/dashboard](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/dashboard) | React component to build and display multiple data visualizations.                       |
| [@cdc/data-bite](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/data-bite) | React component for bringing attention to and visualizing a smaller data point.          |

## Setup <a name="setup"></a>

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that is managed with [Lerna](https://github.com/lerna/lerna#readme) and uses [yarn](https://yarnpkg.com/) for package management. Make sure you have yarn installed before beginning. To work on individual packages you must setup the entire monorepo.

1. Start by cloning this repo and running `yarn install` at the root.
2. Run `lerna bootstrap` and Lerna will initialize all the packages for you.
3. (If using Windows) Change the import from 'react-table' to 'react-table/src' in the DataTable component of these pacakges: Map, Chart, Editor, Dashboard (TODO: fix this)
4. Run `lerna run build` to build all of the packages in the correct order.
5. To begin working on an individual package, run `lerna run --scope @cdc/package_name start`, replacing `package_name` with the package's name (ex: `@cdc/map`).

## Styling

This has a Bootstrap 4 dependency. You'll want to include a copy of [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/#css) at the top level of your project.

To include the cove core styling you'll need to first run the `lerna run build` command. This will create a file which you can reference `@cdc/core/dist/cove-main.css`. See `.storybook/preview.jsx` for an example of the import.

## Development Guidelines

**Please read!** These are important to know before you begin working on this project.

### Each package is designed to be imported as a module by another project.

- This might be different from React projects you are used to working on, that build bundle files that can be included directly on HTML pages.
- We don't include `react` or `react-dom` as dependencies in any package, since every project that would import these will have them. These are listed as `peerDependencies`.
- We avoid adding any CDC specific functionality (ex. metrics calls) or logos in these packages, that should go in our wrapper codebase.

This pattern of packages being imported by another project is implemented internally at CDC. We have a wrapper codebase that imports these packages. The bundle generated from that wrapper is then served on pages.

### Tooling/Configuration is shared as much as possible among packages.

These shared elements are stored in the root of this repository. This ensures that if something breaks in our tooling, we only need to fix it in one spot. It also helps ensure consistency across packages. **Please do not break this guideline.** It is critical to allowing a small team to maintain this project effectively.

- Code Linting configuration (ESLint/Lint Staged)
- Build process (Webpack)

### Each package has its own version number.

Sometimes we need to make fixes or add features to a specific package for our day to day work at cdc.gov which lends itself to different version numbers for each package.

### Tips for creating a new package.

- When creating a new package, use lowercase for the folder name and don't use any kind of prefix.
- The name of the package in `package.json` should be scoped with `@cdc/`. So if you're creating a new package called Foo, the folder path to it would be `packages/foo` and the package name would be `@cdc/foo`.
- Lerna has specific commands to add packages - you can't just create the folder inside `/packages/`. If you're starting from scratch use [`lerna create`](https://www.npmjs.com/package/@lerna/create) and if you're importing a package that's already been created use [`lerna import`](https://www.npmjs.com/package/@lerna/import).
- New packages should have their version start at 1.0.0 through development until they are first published and follow [Semantic Versioning guidelines](https://docs.npmjs.com/about-semantic-versioning) afterwards.
- Respect the guidelines above and ask someone if you're unsure of something.

---

<details>
  <summary><strong>Legal Notices</strong></summary>

#### License

The repository utilizes code licensed under the terms of the Apache Software License and therefore is licensed under ASL v2 or later.

This source code in this repository is free: you can redistribute it and/or modify it under the terms of the Apache Software License version 2, or (at your option) any later version.

This source code in this repository is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the Apache Software License for more details.

The source code forked from other open source projects will inherit its license.

#### Attribution

Some icons used by this project are from [Font Awesome](https://fontawesome.com/).

#### Public Domain

This repository constitutes a work of the United States Government and is not subject to domestic copyright protection under 17 USC § 105. This repository is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/). All contributions to this repository will be released under the CC0 dedication. By submitting a pull request you are agreeing to comply with this waiver of copyright interest.

#### Records Management

This repository is not a source of government records, but is a copy to increase collaboration and collaborative potential. All government records will be published through the [CDC web site](https://www.cdc.gov/).

#### Privacy

This repository contains only non-sensitive, publicly available data and information. All material and community participation is covered by the [Disclaimer](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md) and [Code of Conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md). For more information about CDC's privacy policy, please visit http://www.cdc.gov/other/privacy.html.

</details>
