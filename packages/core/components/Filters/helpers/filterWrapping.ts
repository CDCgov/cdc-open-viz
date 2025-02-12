import { VIZ_FILTER_STYLE } from '../Filters'

const WRAPPING_HEIGHT_THRESHOLD_NO_LABEL = 60
const WRAPPING_HEIGHT_THRESHOLD_WITH_LABEL = 100
export const getWrappingStatuses = (wrappingFilterRefs, wrappingFilters, allFilters) =>
  Object.entries(wrappingFilterRefs.current)
    .map(([columnValue, ref]) => {
      if (!ref) return false

      const filter = allFilters.find(filter => filter.columnName === columnValue)
      const { filterStyle, label } = filter

      if (!filterStyle || filterStyle !== VIZ_FILTER_STYLE.tabSimple) return false

      const filterStyleClass = (ref as HTMLElement).className
        .split(' ')
        .find(className => className.includes(filterStyle))
        ?.split('single-filters--')[1]

      const classMatchesStyle = filterStyleClass && filterStyleClass === filterStyle

      if (!classMatchesStyle) return false

      const wrappingState = wrappingFilters[columnValue]
      const { height, width } = (ref as HTMLElement).getBoundingClientRect()
      const wrappingThreshold = label ? WRAPPING_HEIGHT_THRESHOLD_WITH_LABEL : WRAPPING_HEIGHT_THRESHOLD_NO_LABEL
      const isWrapped = height > wrappingThreshold

      if (!wrappingState) return [columnValue, { highestWrappedWidth: isWrapped ? width : 0, isDropdown: isWrapped }]

      const { highestWrappedWidth, isDropdown: wasDropdown } = wrappingState
      const isDropdown = width <= highestWrappedWidth
      const widthIsLarger = width > highestWrappedWidth
      const largestWidth = Math.max(highestWrappedWidth, width)

      if ((isDropdown || isWrapped) && !wasDropdown) {
        return [columnValue, { highestWrappedWidth: largestWidth, isDropdown: true }]
      }
      if (wasDropdown && widthIsLarger) {
        return [columnValue, { highestWrappedWidth, isDropdown: false }]
      }
    })
    .filter(Boolean)
