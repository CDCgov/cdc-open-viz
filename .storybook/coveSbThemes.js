// COVE Storybook Themes
import { create } from '@storybook/theming'
import logo from './assets/cove-logo-long.svg'

export const managerTheme = create({
  brandTitle: 'COVE - Component Documentation',
  brandUrl: 'https://cdcgov.github.io/cdc-open-viz/',
  brandImage: logo,
  brandTarget: '_self',

  base: 'light',
  colorPrimary: '#3a569b',
  colorSecondary: '#c0c6d5',

  // UI
  appBg: '#f9f9f9',
  appContentBg: '#fff',
  appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Nunito", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#383838',
  textInverseColor: 'rgba(255,255,255,0.9)',
  textMutedColor: '#c5cad5',

  // Toolbar default and active colors
  barTextColor: 'rgba(255,255,255,0.7)',
  barSelectedColor: '#fff',
  barBg: '#3a569b',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#383838',
  inputBorderRadius: 0
})

export const previewTheme = create({
  brandTitle: 'COVE - Component Documentation',
  brandUrl: 'https://cdcgov.github.io/cdc-open-viz/',
  brandImage: logo,
  brandTarget: '_self',

  base: 'light',
  colorPrimary: '#3a569b',
  colorSecondary: '#627ab7',

  // UI
  appBg: '#f9f9f9',
  appContentBg: '#fff',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Nunito", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#383838',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'rgba(255,255,255,0.7)',
  barSelectedColor: '#fff',
  barBg: '#3a569b',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#383838',
  inputBorderRadius: 4
})
