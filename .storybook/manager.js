import { addons } from 'storybook/manager-api'
import { managerTheme } from './coveSbThemes'

// Assets
import './storybook-styles.css'

addons.setConfig({
  theme: managerTheme,
  isToolshown: false,
  configureJsx: true
})
