import { hashObj } from './hashObj'

export const generateEqualIntervalLegend = (
    configObj,
    dataSet: any[],
    result: any,
    newLegendMemo: Map<string, number>,
    legendNumber: number,
    setConfig: Function
) => {
    const { legend, columns } = configObj
    const primaryColName = columns.primary.name

    // Equal Interval
    if (legend.type === 'equalinterval' && dataSet?.length !== 0) {
        if (!dataSet || dataSet.length === 0) {
            setConfig({
                ...configObj,
                runtime: {
                    ...configObj.runtime,
                    editorErrorMessage: 'Error setting equal interval legend type'
                }
            })
            return
        }
        dataSet = dataSet.filter(row => row[primaryColName] !== undefined)
        let dataMin = dataSet[0][primaryColName]
        let dataMax = dataSet[dataSet.length - 1][primaryColName]

        let pointer = 0 // Start at beginning of dataSet

        for (let i = 0; i < legendNumber; i++) {
            let interval = Math.abs(dataMax - dataMin) / legendNumber

            let min = dataMin + interval * i
            let max = min + interval

            // If this is the last loop, assign actual max of data as the end point
            if (i === legendNumber - 1) max = dataMax

            // Add rows in dataSet that belong to this new legend item since we've got the data sorted
            while (pointer < dataSet.length && dataSet[pointer][primaryColName] <= max) {
                newLegendMemo.set(String(hashObj(dataSet[pointer])), result.items.length)
                pointer += 1
            }

            let range = {
                min: Math.round(min * 100) / 100,
                max: Math.round(max * 100) / 100
            }

            result.items.push(range)
        }
    }

    return result
}
