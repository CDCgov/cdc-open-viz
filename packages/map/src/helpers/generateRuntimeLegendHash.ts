import { hashObj } from './hashObj'
import { MapConfig } from '../types/MapConfig'

export const generateRuntimeLegendHash = (config: MapConfig, runtimeFilters) => {
  const { name: paletteName } = config.general.palette
  return hashObj({
    unified: config.legend.unified ?? false,
    equalNumberOptIn: config.general.equalNumberOptIn ?? false,
    specialClassesLast: config.legend.showSpecialClassesLast ?? false,
    color: paletteName,
    customColors: config.general?.palette?.customColors,
    numberOfItems: config.legend.numberOfItems,
    type: config.legend.type,
    separateZero: config.legend.separateZero ?? false,
    primary: config.columns.primary.name,
    categoryValuesOrder: config.legend.categoryValuesOrder,
    specialClasses: config.legend.specialClasses,
    geoType: config.general.geoType,
    data: config.data,
    palette: config.general.palette,
    filters: {
      ...config.filters
    },
    ...runtimeFilters
  })
}
