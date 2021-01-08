# CDC OpenViz

CDC OpenViz is a collection of React components and related packages centered around data visualization. Development is done in the open here on Github.

## Packages

This project is still under heavy initial development with the roadmap extending into mid-late 2021. New packages will be added here as they are completed and released.

### [@cdc/map](https://github.com/CDCgov/cdc-open-viz/tree/master/packages/CDC-Maps)

React component for visualizing tabular data on a map of the United States or the world.
## Contributing

These packages are managed with [Lerna](https://github.com/lerna/lerna#readme) and uses [NPM]() for package management (as opposed to Yarn.) To work on any of them, you will have to setup the 

### Setup

1. Start by cloning this repo and running `npm install` at the root. Also run `npm i -g lerna` so you will have global access to lerna commands.
2. Run `lerna bootstrap` and Lerna will initialize all the packages for you.
3. Run `lerna run --scope @cdc/package_name start`, replacing the package_name with the package's namespace (ex: `@cdc/map`).
 * This tells Lerna to run the `start` script that is defined for that package and should open a window in your browser displaying the module.

 ### Development Guidelines

These are important concepts to understand while working on this codebase:

* To keep each codebase focused only on its direct responsibilities, each package should assume it will be imported from the NPM registry by a React application.
  * As an example, we have our own wrapper application that imports these packages for use on cdc.gov.
  * This means we don't include polyfills at the package level, that should be handled by the application that imports these modules. We also don't have `react` or `react-dom` as direct dependencies in any package, since every project that would import these will have them. They are defined as `peerDependencies`.
* Tooling/Configuration is shared as much as possible among packages.
  * Things that are shared: Code Linting (ESLint), Build/Development process (Webpack), NPM scripts (Shell level scripts that run at key points.)
  * This ensures that if something breaks in the build process, we only need to fix it once and it will apply for all packages. It also helps ensure that most packages perform the same way.
  * Your package should not have it's own devDependencies. All needed devDependencies are standardized and included in the root `package.json`. You should not have custom build scripts/processes specifically for your package unless it's been discussed.
  * **Please do not break this paradigm.** It's very important to keeping this project maintainable long term.
* Creating a new package
  * When creating a new package, use lowercase and don't use any kind of prefix. The name of the package in `package.json` should be scoped with `@cdc/`. So if you're creating a new package called Foo, the folder path to it would be `packages/foo` and the package name would be `@cdc/foo`.
  * Don't just create the folder inside `/packages/`, if you're starting from scratch use [`lerna create`](https://www.npmjs.com/package/@lerna/create) and if you're importing a package that's already been created use [`lerna import`](https://www.npmjs.com/package/@lerna/import).
  * Please respect the guidelines above and ask someone if you're unsure of something.

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