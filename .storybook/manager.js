import { addons } from '@storybook/addons';
import { managerTheme } from './coveSbThemes'

import './storybook-styles.css'

addons.setConfig({
  theme: managerTheme,
  isToolshown: true,
  configureJsx: true
});
