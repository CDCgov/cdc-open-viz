import { indexOfIgnoreType } from '../index'
import { LegendState } from '../../types/legendTypes'
import { getUniqueValuesMap } from '../utils/dataProcessing'
import { applyColorsToLegendItems } from '../utils/legendItems'
import { overwriteSpecialClassMemoization } from './specialClasses'
import { MapConfig } from '../../types/MapConfig'

export const generateCategoryLegend = (
    state: LegendState,
    configObj: MapConfig,
    data: any[]
): void => {
    const { legend, columns, general } = configObj
    const primaryColName = columns.primary.name
    const isBubble = general.type === 'bubble'
    const categoricalCol = columns.categorical ? columns.categorical.name : undefined

    let uniqueValues = getUniqueValuesMap(state.dataSet, primaryColName, isBubble, categoricalCol)
    let sorted = [...uniqueValues.keys()]

    if (legend.additionalCategories) {
        legend.additionalCategories.forEach(additionalCategory => {
            if (additionalCategory && indexOfIgnoreType(sorted, additionalCategory) === -1) {
                sorted.push(additionalCategory)
            }
        })
    }

    // Apply custom sorting or regular sorting
    let configuredOrder = legend.categoryValuesOrder ?? []

    if (configuredOrder.length) {
        sorted.sort((a, b) => {
            let aVal = configuredOrder.indexOf(a)
            let bVal = configuredOrder.indexOf(b)
            if (aVal === bVal) return 0
            if (aVal === -1) return 1
            if (bVal === -1) return -1
            return aVal - bVal
        })
    } else {
        sorted.sort((a, b) => a - b)
    }

    // Add legend item for each
    sorted.forEach(val => {
        // Skip if this value is already a special class
        if (state.result?.items?.some(item => item.value === val && item.special)) return
        state.result.items.push({
            value: val
        })

        let lastIdx = state.result.items.length - 1
        let arr = uniqueValues.get(val)

        if (arr) {
            arr.forEach(hashedRow => state.newLegendMemo.set(hashedRow, lastIdx))
        }
    })

    // Apply colors to legend items
    applyColorsToLegendItems(state.result, configObj)

    // Overwrite legendMemo for special class rows to ensure correct color lookup
    overwriteSpecialClassMemoization(state, configObj, data)
}