import { mergeConfig } from'vite'
import generateViteConfig from '../generateViteConfig'

const removeDuplicatePlugins = (plugins) => {
  const memo = {};
  const newList = []
  plugins.forEach(plugin => {
    if(!memo[plugin.name]) {
      memo[plugin.name] = true;
      newList.push(plugin)
    }
    return;
  });
  return newList;
}

module.exports = {
  stories: [
    '../_stories/*.mdx',
    '../packages/**/_stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-fetch-mock"
  ],
  staticDirs: ['./assets'],
  framework: {
    name: "@storybook/react-vite"
  },
  core: {
    builder: '@storybook/builder-vite'
    // disableTelemetry: true
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: async (config) => {
    const _config = mergeConfig(config, generateViteConfig('storybook'))
    const flatMapped = _config.plugins.flatMap(p => p);
    _config.plugins = removeDuplicatePlugins(flatMapped);
    return _config;
  }
};
