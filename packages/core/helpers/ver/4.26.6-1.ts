import cloneConfig from '../cloneConfig'

const ver = '4.26.6-1'

const hasStaticFootnotes = footnotes =>
  Array.isArray(footnotes?.staticFootnotes) &&
  footnotes.staticFootnotes.some(footnote =>
    String(footnote?.text || '')
      .replace(/<[^>]*>/g, '')
      .trim()
  )

const hasDynamicFootnotes = footnotes => Boolean(footnotes?.dataKey && footnotes?.dynamicFootnotes?.textColumn)

const hasRenderableFootnotes = config => hasStaticFootnotes(config?.footnotes) || hasDynamicFootnotes(config?.footnotes)

const preserveLegacyTableFootnotes = config => {
  if (config?.type === 'table' && hasRenderableFootnotes(config)) {
    config.table = config.table || {}

    if (config.table.preserveFootnotesOnCollapse === undefined) {
      config.table.preserveFootnotesOnCollapse = true
    }
  }

  if (config?.type === 'dashboard' && config.visualizations) {
    Object.values(config.visualizations).forEach(preserveLegacyTableFootnotes)
  }
}

const update_4_26_6_1 = config => {
  const newConfig = cloneConfig(config)
  preserveLegacyTableFootnotes(newConfig)
  newConfig.version = ver
  return newConfig
}

export { preserveLegacyTableFootnotes }
export default update_4_26_6_1
