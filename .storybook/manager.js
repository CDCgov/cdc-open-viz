import { addons } from '@storybook/addons';
import { managerTheme } from './coveSbThemes'

// Assets
import './storybook-styles.css'

addons.setConfig({
  theme: managerTheme,
  isToolshown: false,
  configureJsx: true
});
