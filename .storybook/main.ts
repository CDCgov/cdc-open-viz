import path from 'path';
import { mergeConfig } from'vite'
import generateViteConfig from '../generateViteConfig'

const removeDuplicatePlugins = (plugins) => {
  const memo = {};
  const newList: string[] = []
  plugins.forEach(plugin => {
    if(!memo[plugin.name]) {
      memo[plugin.name] = true;
      newList.push(plugin)
    }
    return;
  });
  return newList;
}

function createEntries(config) {
  const packages = ['core', 'dasboard', 'waffle-chart']
  return packages.map(_package => {
    const relativePath = path.relative(config.root, path.resolve(__dirname, `../packages/${_package}/src`))
    return `${relativePath}/**/*.{tsx|jsx|js|ts}`
  })
  
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
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  docs: {
    autodocs: "tag"
  },
  typescript: {
    reactDocgen: false // https://github.com/storybookjs/storybook/issues/22164#issuecomment-1603627308
  },
  viteFinal: async (config) => {
    const _config = mergeConfig<Record<string, any>, Record<string, any>>(config, generateViteConfig('storybook'))
    const flatMapped = _config.plugins.flatMap(p => p);
    _config.plugins = removeDuplicatePlugins(flatMapped);
    _config.optimizeDeps = { // to fix long load time: https://github.com/storybookjs/builder-vite/issues/173
      ...config.optimizeDeps,
      // Entries are specified relative to the root
      entries: [createEntries(config)],
      include: [...(config?.optimizeDeps?.include ?? []), "history", "preact", "@mdx-js/preact", "@storybook/addon-docs/blocks"],
    }
    return _config;
  }
};
