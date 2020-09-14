# CDC React Starter Kit
The project is a simple starter kit for creating new React based projects at CDC. The goal is a simple and light configuration with standards that were discussed and agreed upon by developers who work here instead of using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) which has a lot of things that we don't need and things that don't work well in our hosting environments.

### Keep it Simple
Modern front-end development has become very complex. The most important guiding principle of this starter kit is to keep things simple and easy to understand. We want to make it easy for anybody looking at the code to understand what is happening so they can extend and modify things to suit their specific needs. Adding extra steps into the build process should be considered carefully and discussed amongst the team.

### Roadmap
* Make sure all necessary polyfills are in for IE11 and any other assistive packages
* Add in scaffolding for context/very large state
* Finalize code linting standards based on feedback
* Add optional TypeScript support
* Finalize README

## Getting Started

1. Clone this repository
2. Run `npm install` to install the needed packages
3. Run `npm start` to start up the development server. It should open your default browser with the URL and refresh to reflect code changes you make upon save.

### Building

To build the project, run `npm run build` and it will compile everything down into bundle.js.

This folder works in a self contained way so you can put it on a server and it will load the index.html or you can take that bundle.js file and include it on a different page, as long as you have a container element with the same ID that is specified in `index.js` for React to lock onto and render inside of.

**Note: Please use NPM, not Yarn to prevent multiple lock files.**