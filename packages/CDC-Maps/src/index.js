import 'mdn-polyfills/String.prototype.repeat'
import 'mdn-polyfills/CustomEvent'
import 'mdn-polyfills/Element.prototype.classList'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicMap from './App';
import * as serviceWorker from './serviceWorker';

// Promise that checks and only resolves when we have access to the window.configParams
if(window.hasOwnProperty('CDC') && undefined === window.CDC.configParams) {
  window.addEventListener("widgetConfigLoaded", () => {
    ReactDOM.render(<BasicMap />, document.querySelector('#root'));
  })
} else {
  ReactDOM.render(<BasicMap />, document.querySelector('#root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
