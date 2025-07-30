import { hashObj, applyColorToLegend } from '../index'
import { LegendState } from '../../types/legendTypes'
import { MapConfig } from '../../types/MapConfig'

export const processSpecialClasses = (
    state: LegendState,
    configObj: MapConfig,
    data: any[]
): void => {
    const { legend, columns } = configObj
    const primaryColName = columns.primary.name

    // Special classes
    if (legend.specialClasses.length) {
        if (typeof legend.specialClasses[0] === 'object') {
            legend.specialClasses.forEach(specialClass => {
                state.dataSet = state.dataSet.filter(row => {
                    const val = String(row[specialClass.key])

                    if (specialClass.value === val) {
                        if (undefined === state.specialClassesHash[val]) {
                            state.specialClassesHash[val] = true

                            state.result.items.push({
                                special: true,
                                value: val,
                                label: specialClass.label
                            })

                            state.result.items[state.result.items.length - 1].color = applyColorToLegend(
                                state.result.items.length - 1,
                                configObj,
                                state.result.items
                            )

                            state.specialClasses += 1
                        }

                        let specialColor: number

                        // color the configObj if val is in row
                        specialColor = state.result.items.findIndex(p => p.value === val)

                        state.newLegendMemo.set(hashObj(row), specialColor)

                        return false
                    }

                    return true
                })
            })
        }
    }
}

export const overwriteSpecialClassMemoization = (
    state: LegendState,
    configObj: MapConfig,
    data: any[]
): void => {
    const { legend, columns } = configObj
    const primaryColName = columns.primary.name

    // Overwrite legendMemo for special class rows to ensure correct color lookup
    state.result.items.forEach((item, idx) => {
        if (item.special) {
            // Find all rows in the data that match this special class value
            let specialRows = data.filter(row => {
                // If special class has a key, use it, otherwise use primaryColName
                const key = legend.specialClasses.find(sc => String(sc.value) === String(item.value))?.key || primaryColName
                return String(row[key]) === String(item.value)
            })
            specialRows.forEach(row => {
                state.newLegendMemo.set(hashObj(row), idx)
            })
        }
    })
}