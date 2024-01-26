import { M as a, d as i } from "./storybook-8f2af20c.es.js";
import { j as n, a as s, F as u } from "./storybook-96bcff98.es.js";
import { u as c } from "./storybook-c733c29e.es.js";
import "./storybook-e988567b.es.js";
import "./storybook-e61d95ab.es.js";
import "./storybook-c5d32002.es.js";
import "./storybook-504ac493.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-70f3d2a3.es.js";
import "./storybook-af295018.es.js";
import "./storybook-7709dd1c.es.js";
import "./storybook-398c73a4.es.js";
const l = `# Contributing to COVE

Table of Contents

- [Contributing to COVE](#contributing-to-cove)
  - [Introduction](#introduction)
  - [How Can I Contribute?](#how-can-i-contribute)
  - [How to Request New Features and Report Bugs](#how-to-request-new-features-and-report-bugs)
  - [Asking for Help](#asking-for-help)
  - [Project Setup Instructions](#project-setup-instructions)
    - [Branching Information](#branching-information)
  - [Opening a Pull Request](#opening-a-pull-request)
  - [Thank You!](#thank-you)

## Introduction

Welcome! We’re excited that you’re interested in using the CDC Open Visualization Environment (COVE), and are looking forward to working with you on this project. As you work through the project's initial setup, you’re in the best position to report any issues you might run into (ie. compilation errors or gaps in our documentation).
If something doesn't make sense, please [open an issue](https://github.com/CDCgov/cdc-open-viz/issues) and let us know!

## How Can I Contribute?

We welcome many different types of contributions including:

- Code
- Design/Usability
- Copy/Documentation
- Accesibility
- Security & Performance

Please see the additional sections below before initiating a pull request. All ideas and questions should be routed through a Github Issue.

## How to Request New Features and Report Bugs

Please start all feature requests, bug reports, and ideas by [opening an issue](https://github.com/CDCgov/cdc-open-viz/issues) so that our internal project maintainers are aware of the ideas you want to contribute. We'll do our best to accommodate your request, however, our internal team makes final decisions on how the project is structured. Pitching your ideas early will help avoid unnecessary work and increase your chances of a successful pull request.

_Issues labeled "Help Wanted" are a great place to start for a first contribution._

## Asking for Help

The best way to get questions answered is by [opening an issue](https://github.com/CDCgov/cdc-open-viz/issues). We treat Github Issues the same as our internal communication tools and will respond in a timely manner. In the future, we hope to provide additional communication tools for project support.

## Project Setup Instructions

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that is managed with [Lerna](https://github.com/lerna/lerna#readme) and uses [yarn](https://yarnpkg.com/) for package management. Make sure you have yarn installed before beginning. To work on individual packages you must setup the entire monorepo.

1. Start by cloning/forking this repo and running \`yarn install\` at the root.
2. Run \`lerna bootstrap —force-local \`and Lerna will initialize all the packages for you.
3. (If using Windows) Change the import from 'react-table' to 'react-table/src' in the DataTable component of these pacakges: Map, Chart, Editor, Dashboard (TODO: fix this)
4. Run \`lerna run build\` to build all of the packages in the correct order.
5. To begin working on an individual package, run \`lerna run --scope @cdc/package_name start\`, replacing package_name with the package's name (ex: @cdc/map).

### Branching Information

Notice - all pull requests you should branch from and target test.

| Branch Name | Description                              |
| ----------- | ---------------------------------------- |
| main        | Default branch we create releases on     |
| test        | Development branch we use to test on     |
| dev         | Development branch we use to branch features on |

After pulling the code to your local, the \`main\` branch will be checked out by default. Switch to test using \`git checkout test\` and then create a feature branch to work on using gitflow, or manually using:

\`git checkout -b feature/new-feature-branch\`

## Opening a Pull Request

You should open a pull request after a project maintainer has approved your idea in a Github Issue.

Steps for submitting a pull request:

- Fork the repository

  - When forking, uncheck _Copy the main branch only_

![Creating a fork](./docs/img/forking_1.png)

- Clone to your local using ssh

- Important - Create a new branch from the test branch
- Reference relevant issues in your pull request
- Include supporting documentation and screenshots
- Fill out the pull request template to the best of your ability, and be sure to reset the base branch to _test_

![Reset the branch to test](./docs/img/forking_2.png)

- Note - Some items in the template might not apply
- Tag a project maintainer in the pull request for review
- One of our project maintainers will provide timely feedback

## Thank You!

The COVE team thanks you for considering our project. Once your pull request is accepted and merged through our internal release process, you'll be able to see your updates on the main branch and npm.
`;
function r(e) {
  return /* @__PURE__ */ s(u, {
    children: [/* @__PURE__ */ n(a, {
      title: "Contributions"
    }), `
`, /* @__PURE__ */ n(i, {
      children: l
    })]
  });
}
function p(e = {}) {
  const {
    wrapper: o
  } = Object.assign({}, c(), e.components);
  return o ? /* @__PURE__ */ n(o, {
    ...e,
    children: /* @__PURE__ */ n(r, {
      ...e
    })
  }) : r();
}
const h = () => {
  throw new Error("Docs-only story");
};
h.parameters = {
  docsOnly: !0
};
const t = {
  title: "Contributions",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
t.parameters = t.parameters || {};
t.parameters.docs = {
  ...t.parameters.docs || {},
  page: p
};
const D = ["__page"];
export {
  D as __namedExportsOrder,
  h as __page,
  t as default
};
