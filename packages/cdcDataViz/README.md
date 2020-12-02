# CDC React Starter Kit
The project is a simple starter kit for creating new React based projects at CDC. The goal is a simple and light configuration with standards that were discussed and agreed upon by developers who work here instead of using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) which has a lot of things that we don't need and things that don't work well in our hosting environments.

### Keep it Simple
Modern front-end development has become very complex. The most important guiding principle of this starter kit is to keep things simple and easy to understand. We want to make it easy for anybody looking at the code to understand what is happening so they can extend and modify things to suit their specific needs. Adding extra steps into the build process should be considered carefully and discussed amongst the team.

## Getting Started

1. Click the "Use This Template" green button at the top right on Github, or simply follow [this link](https://github.com/CDCgov/react-starter-kit/generate).
   - Make sure you select the appropriate organization. If this is for an internal project that will not be shared as open source, please select **`cdcent`** not `cdcgov`.
2. Clone the newly created repository
3. Run `npm install` to install the needed packages
4. Run `npm start` to start up the development server. It should open your system's default browser with the URL and refresh to reflect code changes you make upon save.

### Building

To build the project, run `npm run build` and it will compile everything into a `/dist/` folder. You will either have one `bundle.js` file or multiple that are chunked for performance.

Inside the `/dist/` folder is a dynamically generated `index.html` that uses `/src/index.html` as a base and injects the js files that were created in the process into it.

The `/dist/` folder is self contained so you could drop it onto a server and it will load the index.html or you can take the generated JavaScript file(s) and include them on a different page, as long as you have a container element with the same ID that is specified in `index.js` for React to lock onto and render inside of.

**Note: Please use NPM, not Yarn to prevent multiple lock files.**

## High Level Setup Overview

This section describes the major underlying components of the project and how they all fit together. A clear overview should make it easy to make changes.

**Babel**
This parses the JavaScript in the project and transforms it into code that can be supported by older browsers. It lets you use newer ES6 style syntax and still support IE11 Notably, Babel is also the step in the process that turns the easy to read JSX into more traditional JavaScript objects. Note, you will still have to sometimes use additional polyfills outside of Babel, that is why Core JS is also included in this project.

**Webpack**
Similar to older projects like Gulp and Grunt, this is the main "task runner" for the project. It is responsible for the following:
* Starting the dev server and auto refreshing when changes are saved.
* Compiling SASS into CSS
* Handling the build process when the code is ready to be used in production

The configuration is stored in `webpack.config.js` it is recommended that you look at the Webpack documentation before trying to edit it.

**ESLint**
This checks and enforces code quality when you commit so that the code is standardized among all developers. It uses the [AirBnb JavaScript Coding Standards](https://github.com/airbnb/javascript).

## Best Practices and Recommended Extensions

React has been around for a long time, and there have been several popular paradigms to code in that have come and gone. To keep things simple, we're trying to use a similar style both in actual syntax as well as using React features and third party packages.

**Use AirBnb coding style**
There is a linter built in that enforces this when you commit your code.

**Use hooks and functional components**
Whenever possible, you should be building your components as functions and use hooks to manage local state.

**For larger state management, use the Context API over Redux**
There are examples of this in the code. While other libraries like Redux have been a very popular solution to use with React projects for a long time, it adds quite a bit of boilerplate code and is largely unnecessary except for very large projects and it's another library that developers have to learn. Generally, you should always start simpler and only add additional layers if they're really needed.

Obviously if there's a need, we can be flexible here but best to discuss with the architects and come to a consensus.

**Popular React Extensions and Packages**

There are many packages that are used with React for common things like state management or routing etc... like Redux as discussed above. These packages rise and fall in popularity. We only try to standardize very large packages. You can see a table below of recommended packages. For most things, we do not attempt to be prescriptive when it comes to individual packages, just adhere to this guiding principal: If the larger React ecosystem has coalesced around a particular package for something and it meets our requirements, we should use that package. If they both support the thing we're trying to do, the developer should favor the more popular package.

Purpose | Package
--- | ---
Routing | [React Router](https://reactrouter.com/)

## Browser Support

Chrome | Firefox | IE | Safari | Edge
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 11 ✔ | Latest ✔ | Latest ✔ |

## Open Sourcing

While a lot of the code used in this starter kit will be for internal code, we should attempt to open source when we can. If you plan on open sourcing code built off this project, be sure to use the `cdcgov` organization (the organization that this starter kit is hosted with) instead of the `cdcent` organization. You might have to request access to do this, and there are also policies and procedures that should be followed before open sourcing a project. [This repository](https://github.com/CDCgov/template) has a good starting point with a link to a form to get access to `cdcgov`, the process and additional information you need to add to your repository if you want to make it an open source project.

## Contributing

Contributions to this starter kit from outside users are welcome, though if they do not fit our specific team's needs they will likely be rejected. You are welcome to fork the project if that happens. If you are not an approved contributor, you will have to [fork this repository](https://help.github.com/articles/fork-a-repo) and submit a pull request that way.

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