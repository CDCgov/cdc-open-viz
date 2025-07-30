import { hashObj, applyColorToLegend } from '../index'
import { LegendState } from '../../types/legendTypes'
import { MapConfig } from '../../types/MapConfig'

export const generateEqualIntervalLegend = (
    state: LegendState,
    configObj: MapConfig,
    setConfig: Function
): void => {
    const { columns } = configObj
    const primaryColName = columns.primary.name

    // Equal Interval
    if (state.dataSet?.length === 0) {
        setConfig({
            ...configObj,
            runtime: {
                ...configObj.runtime,
                editorErrorMessage: 'Error setting equal interval legend type'
            }
        })
        return
    }

    state.dataSet = state.dataSet.filter(row => row[primaryColName] !== undefined)
    let dataMin = state.dataSet[0][primaryColName]
    let dataMax = state.dataSet[state.dataSet.length - 1][primaryColName]

    let pointer = 0 // Start at beginning of dataSet

    for (let i = 0; i < state.legendNumber; i++) {
        let interval = Math.abs(dataMax - dataMin) / state.legendNumber

        let min = dataMin + interval * i
        let max = min + interval

        // If this is the last loop, assign actual max of data as the end point
        if (i === state.legendNumber - 1) max = dataMax

        // Add rows in dataSet that belong to this new legend item since we've got the data sorted
        while (pointer < state.dataSet.length && state.dataSet[pointer][primaryColName] <= max) {
            state.newLegendMemo.set(hashObj(state.dataSet[pointer]), state.result.items.length)
            pointer += 1
        }

        let range = {
            min: Math.round(min * 100) / 100,
            max: Math.round(max * 100) / 100
        }

        state.result.items.push(range)

        state.result.items[state.result.items.length - 1].color = applyColorToLegend(
            state.result.items.length - 1,
            configObj,
            state.result.items
        )
    }
}