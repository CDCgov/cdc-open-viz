import { addons } from '@storybook/addons';
import { managerTheme } from './coveSbThemes'

// Assets
import favicon from './assets/favicon.png';
import './storybook-styles.css'

// Set favicon
const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: managerTheme,
  isToolshown: false,
  configureJsx: true
});
