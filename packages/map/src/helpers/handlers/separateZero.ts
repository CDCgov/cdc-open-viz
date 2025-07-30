import { hashObj, applyColorToLegend } from '../index'
import { LegendState } from '../../types/legendTypes'
import { MapConfig } from '../../types/MapConfig'

export const processSeparateZero = (
    state: LegendState,
    configObj: MapConfig
): void => {
    const { legend, general, columns } = configObj
    const primaryColName = columns.primary.name

    // Separate zero
    if (true === legend.separateZero && !general.equalNumberOptIn) {
        let addLegendItem = false

        for (let i = 0; i < state.dataSet.length; i++) {
            if (state.dataSet[i][primaryColName] === 0) {
                addLegendItem = true

                let row = state.dataSet.splice(i, 1)[0]

                state.newLegendMemo.set(hashObj(row), state.result.items.length)
                i--
            }
        }

        if (addLegendItem) {
            state.legendNumber -= 1 // This zero takes up one legend item

            // Add new legend item
            state.result.items.push({
                min: 0,
                max: 0
            })

            let lastIdx = state.result.items.length - 1

            // Add color to new legend item
            state.result.items[lastIdx].color = applyColorToLegend(lastIdx, configObj, state.result.items)
        }
    }
}