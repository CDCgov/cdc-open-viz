import { applyColorToLegend, hashObj } from '.'
import { GeneratedLegend } from './generateRuntimeLegend'
import { MapConfig } from '../types/MapConfig'

/**
 * Processes special classes and filters them from the dataset
 */
export const processSpecialClasses = (
  legend: any,
  dataSet: object[],
  result: GeneratedLegend,
  newLegendMemo: Map<string, number>,
  configObj: MapConfig
): { filteredDataSet: object[]; specialClasses: number; specialClassesHash: Record<string, boolean> } => {
  let filteredDataSet = [...dataSet]
  let specialClasses = 0
  let specialClassesHash = {}

  if (legend.specialClasses.length) {
    if (typeof legend.specialClasses[0] === 'object') {
      legend.specialClasses.forEach(specialClass => {
        filteredDataSet = filteredDataSet.filter(row => {
          const val = String(row[specialClass.key])

          if (specialClass.value === val) {
            if (undefined === specialClassesHash[val]) {
              specialClassesHash[val] = true

              result.items.push({
                special: true,
                value: val,
                label: specialClass.label
              })

              result.items[result.items.length - 1].color = applyColorToLegend(
                result.items.length - 1,
                configObj,
                result.items as any
              )

              specialClasses += 1
            }

            let specialColor: number
            specialColor = result.items.findIndex(p => p.value === val)
            newLegendMemo.set(hashObj(row), specialColor)

            return false
          }

          return true
        })
      })
    }
  }

  return { filteredDataSet, specialClasses, specialClassesHash }
}

/**
 * Handles separate zero functionality for numeric legends
 */
export const processSeparateZero = (
  dataSet: any[],
  legend: any,
  general: any,
  primaryColName: string,
  result: GeneratedLegend,
  newLegendMemo: Map<string, number>,
  configObj: MapConfig,
  legendNumber: number
): { dataSet: any[]; legendNumber: number } => {
  if (true === legend.separateZero && !general.equalNumberOptIn) {
    let addLegendItem = false

    for (let i = 0; i < dataSet.length; i++) {
      if (dataSet[i][primaryColName] === 0) {
        addLegendItem = true

        let row = dataSet.splice(i, 1)[0]

        newLegendMemo.set(hashObj(row), result.items.length)
        i--
      }
    }

    if (addLegendItem) {
      legendNumber -= 1 // This zero takes up one legend item

      // Add new legend item
      result.items.push({
        min: 0,
        max: 0
      })

      let lastIdx = result.items.length - 1

      // Add color to new legend item
      result.items[lastIdx].color = applyColorToLegend(lastIdx, configObj, result.items as any)
    }
  }

  return { dataSet, legendNumber }
}

/**
 * Sorts and filters numeric data for legend processing
 */
export const prepareNumericData = (dataSet: any[], general: any, primaryColName: string): any[] => {
  if (general.type !== 'us-geocode') {
    return dataSet
      .filter(row => typeof row[primaryColName] === 'number')
      .sort((a, b) => {
        let aNum = a[primaryColName]
        let bNum = b[primaryColName]
        return aNum - bNum
      })
  }
  return dataSet
}
