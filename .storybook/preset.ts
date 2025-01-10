import type { Indexer } from '@storybook/types'
import { loadCsf } from '@storybook/csf-tools'
import { serverRequire } from '@storybook/core-common'
import { compile } from './compile'
import { vite, webpack, STORIES_REGEX } from './unplugin'

const logger = console

const dynamicIndexer: Indexer = {
  test: STORIES_REGEX,
  createIndex: async (fileName, opts) => {
    logger.log('indexing', fileName)
    delete require.cache[fileName]
    const config = await serverRequire(fileName)
    const compiled = await compile(config)
    const indexed = await loadCsf(compiled, {
      ...opts,
      fileName
    }).parse()
    return indexed.indexInputs
  }
}

export const experimental_indexers: Indexer[] = [dynamicIndexer]

export const viteFinal = async (config: any) => {
  const { plugins = [] } = config
  plugins.push(vite({}))
  config.plugins = plugins
  return config
}

export const webpackFinal = async (config: any) => {
  const { plugins = [] } = config
  plugins.push(webpack({}))
  config.plugins = plugins
  return config
}
