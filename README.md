# CDC Open Visualization Environment (COVE)

COVE is a collection of React components and related packages centered around data visualization. These components are used to power visualizations across cdc.gov and its affiliated projects, but are available for use by anyone.

| Package | Docs | Description |
|--|---|---|
| [@cdc/map](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/map) | [CdcMap](https://cdcgov.github.io/cdc-open-viz/) | React component for visualizing tabular data on a map of the United States or the world. |
| [@cdc/chart](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/chart) | [CdcChart](https://cdcgov.github.io/cdc-open-viz/) | React component for visualizing data with a chart. |
| [@cdc/editor](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/editor) | [CdcEditor](https://cdcgov.github.io/cdc-open-viz/) | React component for importing data and creating a map or chart configuration. |
| [@cdc/dashboard](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/dashboard) | [CdcDashboard](https://cdcgov.github.io/cdc-open-viz/) | React component to build and display multiple data visualizations. |
| [@cdc/data-bite](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/data-bite) | [CdcDataBite](https://cdcgov.github.io/cdc-open-viz/) | React component for bringing attention to and visualizing a smaller data point. |
| [@cdc/markup-include](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/markup-include) | [CdcMarkupInclude](https://cdcgov.github.io/cdc-open-viz/) | React component for importing HTML markup data from a separate source link. |
| [@cdc/waffle-chart](https://github.com/CDCgov/cdc-open-viz/tree/main/packages/waffle-chart) | [CdcWaffleChart](https://cdcgov.github.io/cdc-open-viz/) | React component for displaying a percentage value on a filled grid chart, aka "waffle chart". |

## Documentation <a name="setup"></a>
[https://cdcgov.github.io/cdc-open-viz/](https://cdcgov.github.io/cdc-open-viz/) - Documentation for COVE visualizations, components, and tooling.

## Setup <a name="setup"></a>

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that is managed with [Lerna](https://github.com/lerna/lerna#readme).

All packages use [yarn](https://yarnpkg.com/) for package management; it must be installed before beginning. To install yarn, run the following command (requires [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)):

```
npm install --global yarn
```

To work on individual packages, you must set up the entire monorepo.

1. Start by cloning this repo and running `yarn install` at the root.
2. Run `lerna bootstrap` and Lerna will initialize all subrepository packages for you.
3. Run `lerna run build` to build all packages in the correct order.
4. To begin working on an individual package, run `lerna run --scope @cdc/package_name start`, replacing `package_name` with the package's name (ex: `@cdc/map`).

> **[Known Issues]**
>
> There is a problem when importing `react-table` on Windows environments. This will be addressed in a later release.
>
> **Temporary Fix:** Change the import from `react-table` to `react-table/src` in the `<DataTable/>` component for the following pacakges:
> - Map
> - Chart
> - Editor
> - Dashboard

## Development Guidelines

**Please read!** These are important to know before you begin working on this project.

### Package Imports
Each package is designed to be imported as a module by another project:
  * This might be different from React projects you are used to working on, that build bundle files that can be included directly on HTML pages.
  * We don't include `react` or `react-dom` as dependencies in any package; these are listed as `peerDependencies` instead.
  * We avoid adding any CDC specific functionality (ex. metrics calls) or logos in these packages.

### Tooling/Configuration
Tooling/Configuration is shared as much as possible among packages. These shared elements are stored in the root of this repository.
This ensures that if something breaks in our tooling, we only need to fix it in one spot. It also helps ensure consistency across packages.
**Please do not break this guideline.** It is critical for allowing a small team to maintain this project effectively.

  * Code Linting configuration (ESLint/Lint Staged)
  * Build process (Vite)

### Versioning
Each package has its own version number. Sometimes we need to make fixes or add features to a specific package for our day-to-day operations at cdc.gov, which lends itself to different version numbers for each package.

### Creating A Package
Here are some tips and guidelines for creating a new package:
  * When creating a new package, use lowercase or lower-kebab-case for the folder name; do not append any sort of prefix.
  * The name of the package in `package.json` should be scoped with `@cdc/`.
    * Example: If you're creating a new package named `foo`, the folder path would be `packages/foo` and the package name would be `@cdc/foo`.
  * You can't just create the folder inside `/packages/`. Lerna has specific commands to add new packages:
    * If you're starting from scratch, use [`lerna create`](https://www.npmjs.com/package/@lerna/create)
    * If you're importing a package that's already been created, use [`lerna import`](https://www.npmjs.com/package/@lerna/import).
  * New packages should have their version start at 1.0.0 through development. Once published, follow the [Semantic Versioning guidelines](https://docs.npmjs.com/about-semantic-versioning) for subsequent releases.
  * Respect the guidelines above, and ask someone if you're unsure of something. We're here to help!
----

<details>
  <summary><strong>Legal Notices</strong></summary>
  <br/>
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

  This repository is not a source of government records, but is a copy to increase collaboration and collaborative potential. All government records will be published through the [CDC website](https://www.cdc.gov/).

  #### Privacy

  This repository contains only non-sensitive, publicly available data and information. All material and community participation is covered by the [Disclaimer](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md) and [Code of Conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md). For more information about CDC's privacy policy, please visit http://www.cdc.gov/other/privacy.html.
</details>

## Contributions
COVE development is all done in the public space. We gratefully welcome contributions from the public to assist with addressing bugs or feature enhancements. Please read through our [Contributing section](https://cdcgov.github.io/cdc-open-viz/?path=/docs/contributions--docs) if you are interested in helping out.
