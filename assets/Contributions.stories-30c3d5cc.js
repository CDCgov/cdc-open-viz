import{M as a,a as i}from"./index-a3f1b2cb.js";import{j as e,a as s,F as u}from"./jsx-runtime-670450c2.js";import{u as l}from"./index-4fb8b842.js";import"./iframe-c940d419.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c=`# Contributing to COVE

---

<br/>
We express our heartfelt gratitude to the following individuals; their invaluable contributions have greatly aided in the growth and improvement of this project. Thank you for your exceptional efforts!

| Name                                                 | Company           |
|------------------------------------------------------|-------------------|
| [@jherr](https://github.com/jherr)                   | Blue Collar Coder |
| [@austin-liminal](https://github.com/austin-liminal) | Liminal Labs      |
<br/>
---

**Table of Contents**
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

* Code
* Design/Usability
* Copy/Documentation
* Accesibility
* Security & Performance

Please see the additional sections below before initiating a pull request. All ideas and questions should be routed through a Github Issue.

## How to Request New Features and Report Bugs
Please start all feature requests, bug reports, and ideas by [opening an issue](https://github.com/CDCgov/cdc-open-viz/issues) so that our internal project maintainers are aware of the ideas you want to contribute. We'll do our best to accommodate your request, however, our internal team makes final decisions on how the project is structured. Pitching your ideas early will help avoid unnecessary work and increase your chances of a successful pull request.

*Issues labeled "Help Wanted" are a great place to start for a first contribution.*

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

|Branch Name   | Description  |
|---|---|
| main  | Default branch we create releases on |
| test | Development branch we use to branch from |

After pulling the code to your local, the \`main\` branch will be checked out by default. Switch to test using \`git checkout test\` and then create a feature branch to work on using gitflow, or manually using:

 \`git checkout -b feature/new-feature-branch\`

## Opening a Pull Request
You should open a pull request after a project maintainer has approved your idea in a Github Issue.

Steps for submitting a pull request:

- Fork the repository and clone it locally.
- Important - Create a new branch from the test branch
- Reference relevant issues in your pull request
- Include supporting documentation and screenshots
- Fill out the pull request template to the best of your ability. Note - Some items in the template might not apply
- Tag a project maintainer in the pull request for review
- One of our project maintainers will provide timely feedback

## Thank You!
The COVE team thanks you for considering our project. Once your pull request is accepted and merged through our internal release process, you'll be able to see your updates on the main branch and npm.
`;function p(t={}){const{wrapper:o}=Object.assign({},l(),t.components);return o?e(o,{...t,children:e(r,{})}):r();function r(){return s(u,{children:[e(a,{title:"Contributions"}),`
`,e(i,{children:c})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const n={title:"Contributions",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:p};const I=["__page"];export{I as __namedExportsOrder,h as __page,n as default};
//# sourceMappingURL=Contributions.stories-30c3d5cc.js.map
