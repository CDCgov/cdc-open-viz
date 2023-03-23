export default {
  "stories": [
    '../_stories/*.mdx',
    '../packages/**/_stories/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/_stories/*.mdx',
    '../packages/**/_stories/**/*.mdx',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite"
  },
  "core": {
    disableTelemetry: true
  },
  "docs": {
    "autodocs": "tag"
  }
};
