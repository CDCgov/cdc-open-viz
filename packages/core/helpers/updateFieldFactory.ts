import { UpdateFieldFunc } from '../types/UpdateFieldFunc'

export const updateFieldFactory =
  <T>(config, updateConfig, legacy = false): UpdateFieldFunc<T> =>
  (section, subsection, fieldName, newValue) => {
    // Top level
    if (null === section && null === subsection) {
      const updatedConfig = { ...config, [fieldName]: newValue }

      if ('filterColumn' === fieldName) {
        updatedConfig.filterValue = ''
      }

      updateConfig(updatedConfig)
      return
    }

    const isArray = Array.isArray(config[section])

    let sectionValue = isArray ? [...config[section], newValue] : { ...config[section], [fieldName]: newValue }

    if (null !== subsection) {
      if (isArray) {
        sectionValue = [...config[section]]
        sectionValue[subsection] = { ...sectionValue[subsection], [fieldName]: newValue }
      } else if (typeof newValue === 'string' && legacy) {
        // supports data-bite, filter-text, markup-include, and waffle-chart.
        // i'm not sure what the use case for this could be considering you should be able to
        // update by not passing the subsection. Therefore I'm labeling it as legacy.
        sectionValue[subsection] = newValue
      } else {
        sectionValue = { ...config[section], [subsection]: { ...config[section][subsection], [fieldName]: newValue } }
      }
    }
    const updatedConfig = { ...config, [section]: sectionValue }

    updateConfig(updatedConfig)
  }
