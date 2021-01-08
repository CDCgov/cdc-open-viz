# CDC OpenViz

CDC OpenViz is a collection of React components and related packages centered around data visualization. Development is done in the open here on Github.

This project is still under heavy initial development with the roadmap extending into mid-late 2021. New packages will be added here as they are completed and released.

| Package | Description |
| --- | ----------- |
| [@cdc/map](https://github.com/CDCgov/cdc-open-viz/tree/master/packages/CDC-Maps) | React component for visualizing tabular data on a map of the United States or the world. |

#### Setup

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that is managed with [Lerna](https://github.com/lerna/lerna#readme) and uses [npm](https://www.npmjs.com/) for package management (as opposed to Yarn.) To work on individual packages, you must setup the entire monorepo.

1. Start by cloning this repo and running `npm install` at the root. 
2. Run `npm i -g lerna` so you will have system wide access to Lerna at the command line.
3. Run `lerna bootstrap` and Lerna will initialize all the packages for you.
4. To begin working on an individual package, run `lerna run --scope @cdc/package_name start`, replacing `package_name` with the package's namee (ex: `@cdc/map`).
 * This tells Lerna to run the `start` script that is defined for that package and should open a window in your browser displaying the module.

### Development Guidelines - Please Read!

These are important things to know before you begin working on this project. Reviewing will help you contribute effectively and keep this project in good shape.

* #### Each package is designed to be imported as a module by another project.
  * This might be different from React projects you are used to working on, that build bundle files that can be included directly on HTML pages.
  * This means we don't include polyfills, since we can't know what the "parent" project's browser support requirements are. The parent project is responsible for adding appropriate polyfills.
  * We also don't include things `react` or `react-dom` as dependencies in any package, since every project that would import these will have them. These are listed as `peerDependencies`.
  * We do not include any CDC specific logos or functionality (ex. metrics calls) in these packages, that should go in our wrapper codebase.
  * We implement this internally at CDC. We have a wrapper codebase that imports these packages and the bundle generated from that wrapper is what is actually served on pages. Inside that wrapper is a custom function that connects to metrics, contains the CDC logo, etc...

* #### Tooling/Configuration is shared as much as possible among packages.
These shared elements are stored in the root of this repository. This ensures that if something breaks in our tooling, we only need to fix it in one spot. It also helps ensure consistency across packages. **Please do not break this guideline.** It is critical to allowing a small team to maintain this project effectively.

  * Code Linting configuration (ESLint/Lint Staged)

  * Build/Development process (Webpack)
  * `devDependencies`
   * Your package should not have its own devDependencies. All needed devDependencies are standardized and included in the root `package.json`. This ensures that we are using the same versions for core dependencies like React across all codebases.
   * You should not have custom build scripts/processes specifically for your package unless it's been discussed.


* #### Creating a new package
  * When creating a new package, use lowercase and don't use any kind of prefix. The name of the package in `package.json` should be scoped with `@cdc/`. So if you're creating a new package called Foo, the folder path to it would be `packages/foo` and the package name would be `@cdc/foo`.
  * Don't just create the folder inside `/packages/`, if you're starting from scratch use [`lerna create`](https://www.npmjs.com/package/@lerna/create) and if you're importing a package that's already been created use [`lerna import`](https://www.npmjs.com/package/@lerna/import).
  * Respect the guidelines above and ask someone if you're unsure of something.

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