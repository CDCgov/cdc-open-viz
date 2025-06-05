import { hashObj } from './hashObj'
import { MapConfig } from '../types/MapConfig'

export const generateRuntimeLegendHash = (config: MapConfig, runtimeFilters) => {
  return hashObj({
    unified: config.legend.unified ?? false,
    equalNumberOptIn: config.general.equalNumberOptIn ?? false,
    specialClassesLast: config.legend.showSpecialClassesLast ?? false,
    color: config.color,
    customColors: config.customColors,
    numberOfItems: config.legend.numberOfItems,
    type: config.legend.type,
    separateZero: config.legend.separateZero ?? false,
    primary: config.columns.primary.name,
    categoryValuesOrder: config.legend.categoryValuesOrder,
    specialClasses: config.legend.specialClasses,
    geoType: config.general.geoType,
    data: config.data,
    filters: {
      ...config.filters
    },
    ...runtimeFilters
  })
}
