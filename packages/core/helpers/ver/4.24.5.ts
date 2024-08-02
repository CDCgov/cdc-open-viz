import _ from 'lodash'

const migrateMarkupInclude = newConfig => {
  if (newConfig.type === 'markup-include') {
    if (!newConfig.contentEditor) {
      newConfig.contentEditor = {
        title: newConfig.title,
        showHeader: newConfig.showHeader,
        srcUrl: newConfig.srcUrl
      }
      delete newConfig.title
      delete newConfig.showHeader
      delete newConfig.srcUrl
    }
    if (!newConfig.visual) {
      newConfig.visual = {}
    }
  }
}

const update_4_24_5 = config => {
  const ver = '4.24.5'

  const newConfig = _.cloneDeep(config)

  migrateMarkupInclude(newConfig)

  newConfig.version = ver
  return newConfig
}

export default update_4_24_5
