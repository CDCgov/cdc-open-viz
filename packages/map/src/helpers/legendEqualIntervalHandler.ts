import { applyColorToLegend, hashObj } from '.'
import { GeneratedLegend } from './generateRuntimeLegend'
import { MapConfig } from '../types/MapConfig'

/**
 * Generates an equal interval legend
 */
export const generateEqualIntervalLegend = (
  dataSet: any[],
  legendNumber: number,
  primaryColName: string,
  result: GeneratedLegend,
  newLegendMemo: Map<string, number>,
  configObj: MapConfig
): void => {
  if (!dataSet || dataSet.length === 0) {
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
      newLegendMemo.set(hashObj(dataSet[pointer]), result.items.length)
      pointer += 1
    }

    let range = {
      min: Math.round(min * 100) / 100,
      max: Math.round(max * 100) / 100
    }

    result.items.push(range)

    result.items[result.items.length - 1].color = applyColorToLegend(
      result.items.length - 1,
      configObj,
      result.items as any
    )
  }
}
