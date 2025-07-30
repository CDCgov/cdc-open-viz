import { addUIDs, hashObj } from '../index'
import { MapConfig } from '../../types/MapConfig'

export const prepareDataSet = (configObj: MapConfig, runtimeData: object[]): any[] => {
    const { legend, data } = configObj

    // filter out rows without a geo column
    addUIDs(configObj, configObj.columns.geo.name)
    const filteredData = data.filter(row => row.uid) // Filter out rows without UIDs

    // Unified will base the legend off ALL the data maps received. Otherwise, it will use
    return legend.unified ? filteredData : Object?.values(runtimeData)
}

export const getDomainNumbers = (dataSet: any[], primaryColName: string): number[] => {
    return Array.from(new Set(dataSet?.map(item => item[primaryColName])))
        .filter(d => typeof d === 'number' && !isNaN(d))
        .sort((a, b) => a - b)
}

export const sortDataSet = (dataSet: any[], primaryColName: string, geoType: string): any[] => {
    // Sort data for use in equalnumber or equalinterval
    if (geoType !== 'us-geocode') {
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

export const getUniqueValuesMap = (dataSet: any[], primaryColName: string, isBubble: boolean, categoricalCol?: string): Map<any, string[]> => {
    let uniqueValues = new Map()

    for (let i = 0; i < dataSet.length; i++) {
        let row = dataSet[i]
        let value = isBubble && categoricalCol && row[categoricalCol] ? row[categoricalCol] : row[primaryColName]
        if (undefined === value) continue

        if (false === uniqueValues.has(value)) {
            uniqueValues.set(value, [hashObj(row)])
        } else {
            uniqueValues.get(value).push(hashObj(row))
        }
    }

    return uniqueValues
}

