import { hashObj } from './hashObj'

export const generateRuntimeLegendHash = (state, runtimeFilters) => {
  return hashObj({
    unified: state.legend.unified ?? false,
    equalNumberOptIn: state.general.equalNumberOptIn ?? false,
    specialClassesLast: state.legend.showSpecialClassesLast ?? false,
    color: state.color,
    customColors: state.customColors,
    numberOfItems: state.legend.numberOfItems,
    type: state.legend.type,
    separateZero: state.legend.separateZero ?? false,
    primary: state.columns.primary.name,
    categoryValuesOrder: state.legend.categoryValuesOrder,
    specialClasses: state.legend.specialClasses,
    geoType: state.general.geoType,
    data: state.data,
    filters: {
      ...state.filters
    },
    ...runtimeFilters
  })
}
