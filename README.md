# CDC Open Visualization Environment (COVE)

> A Yarn workspaces and Lerna monorepo for CDC visualization packages, shared editor/runtime infrastructure, Storybook previews, and partner embed support.

---

## Required Project Organization Information
- Organization: Office of Communications (OC)
- Contact Email: [imtech@cdc.gov](mailto:imtech@cdc.gov)
- Status: Operations and Maintenance (O\&M)
- Keywords: analytics, dashboard, visualization, chart
- Version: 20260408.133726

## Other Project Organization Information
- Point of Contact: [imtech@cdc.gov](mailto:imtech@cdc.gov)
- Related Project(s): TODO: confirm related downstream wrapper or publishing repositories not documented in this repo
- Program Official: [imtech@cdc.gov](mailto:imtech@cdc.gov)

---

## Project Description

COVE is a collection of React-based visualization packages used to build charts, maps, dashboards, data callouts, filtered text, markup includes, and related authoring experiences. The repository also contains shared core utilities, Storybook stories, a local development portal, and an embed package for partner-facing iframe integrations.

- **What does it do?** Builds and tests reusable CDC visualization packages such as `@cdc/chart`, `@cdc/map`, `@cdc/dashboard`, `@cdc/editor`, and supporting packages under `packages/`.
- **What problem does it solve?** Centralizes shared visualization logic, styling, testing, and package release workflows in one monorepo so CDC visualization components can evolve consistently.
- **Who is it for?** Developers maintaining CDC visualization packages, editor experiences, Storybook stories, and embed integrations.

---

## Project Status

This project is currently in **Production**.

| Environment | Status |
|-------------|--------|
| Development | Active |
| Staging     | Active |
| Production  | Active |

---

## Features

- Independent workspace packages for charting, mapping, dashboards, editor tooling, tables, and smaller content modules.
- Shared `@cdc/core` package for cross-cutting styles, helpers, hooks, and components.
- Storybook 10 and Vite-based local development workflows, including a multi-package dev portal under `dev-portal/`.
- Package-level test commands plus repo-level quick test entry points for unit and Storybook coverage.
- Partner embed support through `@cdc/embed`.
- Documentation for internal architecture and testing patterns in `docs/`.

### Workspace Packages

| Package | Description |
|---------|-------------|
| `@cdc/chart` | React component for visualizing tabular data in various types of charts |
| `@cdc/core` | Core components, styles, hooks, and helpers for the CDC Open Visualization project |
| `@cdc/dashboard` | React component for combining multiple visualizations into a single dashboard |
| `@cdc/data-bite` | React component for displaying a single piece of data in a card module |
| `@cdc/data-table` | React standalone data table component |
| `@cdc/editor` | React component for generating a new component entry |
| `@cdc/embed` | Embeddable COVE visualizations for partner websites |
| `@cdc/filtered-text` | React component for adding filtered text on dashboards |
| `@cdc/map` | React component for visualizing tabular data on a map of the United States or the world |
| `@cdc/markup-include` | React component for displaying HTML content from an outside link |
| `@cdc/waffle-chart` | React component for displaying a single piece of data in a card module |

---

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js. This repo does not pin a version in `.nvmrc` or `.node-version`; use a version compatible with the checked-in Vite 7, Storybook 10, and Yarn-based toolchain.
- Yarn Classic for the root `yarn ...` workflows documented in this repository.
- Git.

---

## Installation

1. Clone the repository.
2. Install workspace dependencies from the repo root:

```bash
yarn install
```

3. Build all packages in dependency order:

```bash
yarn build
```

4. If you need the compiled shared stylesheet, build `@cdc/core` and reference `@cdc/core/dist/cove-main.css`.

Bootstrap 4.6 styling is still expected by the packages. Include Bootstrap CSS in the host app when integrating these components.

## Usage

Start the shared Storybook instance:

```bash
yarn storybook
```

Run the local multi-package dev portal:

```bash
yarn dev:portal
```

Run a single package locally:

```bash
yarn dev:chart
yarn dev:dashboard
yarn dev:data-bite
yarn dev:data-table
yarn dev:editor
yarn dev:filtered-text
yarn dev:map
yarn dev:markup-include
yarn dev:waffle-chart
```

Generate the package usage CSV exported by the repo script:

```bash
yarn packages:csv
```

---

## Configuration

- Workspace management is defined at the repo root with Yarn workspaces and `lerna.json`.
- Package source lives under `packages/`, with each package owning its own `build`, `start`, and `test` scripts.
- Storybook configuration is driven from the repo root and package `_stories` directories.
- The local development portal uses Vite configs in `dev-portal/`.
- Example configs and fixtures are stored in package-level `examples/` and `tests/fixtures/` directories.
- The current `.storybook/` directory contains the active repo-level Storybook configuration; older README workflows that referenced additional generator files are no longer documented here because those files are not present in this branch.

---

## Architecture

The monorepo follows a tiered dependency model:

- `@cdc/core` is the foundation package and should not depend on other internal packages.
- Standalone visualization packages depend on `@cdc/core`.
- Orchestrator packages such as `@cdc/dashboard` and `@cdc/editor` can depend on the full workspace.

See [docs/PACKAGE_DEPENDENCIES.md](./docs/PACKAGE_DEPENDENCIES.md) for the full dependency rules and [docs/](./docs/) for focused implementation guidance such as dashboard filter flow, testing best practices, palette migration, visualization wrappers, and button system conventions.

---

## Testing

Use repo-local Yarn scripts instead of global tooling.

- Quick unit suite: `yarn test-unit:quick`
- Quick Storybook suite: `yarn test-storybook:quick`
- Full unit suite: `yarn test-unit`
- Full Storybook suite: `yarn test-storybook`
- Lint JavaScript and TypeScript sources: `yarn lint`
- Lint CSS: `yarn lint:css`

For targeted tests, follow the commands documented in [docs/TESTING_BEST_PRACTICES.md](./docs/TESTING_BEST_PRACTICES.md) and the repository-level testing instructions in `AGENTS.md`.

---

## Security

### Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

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
