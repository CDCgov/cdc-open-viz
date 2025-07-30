import { applyColorToLegend, setBinNumbers, sortSpecialClassesLast } from '../index'
import { LegendItem, GeneratedLegend } from '../../types/legendTypes'
import { MapConfig } from '../../types/MapConfig'
import { supportedCountries } from '../../data/supported-geos'
import { getGeoFillColor } from './../../helpers/index'

export const createLegendItem = (props: Partial<LegendItem>): LegendItem => {
    return {
        special: props.special,
        value: props.value,
        label: props.label,
        color: props.color,
        min: props.min,
        max: props.max,
        bin: props.bin
    }
}

export const applyColorsToLegendItems = (result: GeneratedLegend, configObj: MapConfig): void => {
    // Add color to new legend item (normal items only, not special classes)
    for (let i = 0; i < result.items.length; i++) {
        if (!result.items[i].special) {
            result.items[i].color = applyColorToLegend(i, configObj, result.items)
        }
    }

    // Now apply special class colors last, to overwrite if needed
    for (let i = 0; i < result.items.length; i++) {
        if (result.items[i].special) {
            result.items[i].color = applyColorToLegend(i, configObj, result.items)
        }
    }
}

export const finalizeLegendItems = (result: GeneratedLegend, legend: any): void => {
    // before returning the legend result
    // add property for bin number and set to index location
    setBinNumbers(result)

    // Move all special legend items from "Special Classes" to the end of the legend
    sortSpecialClassesLast(result, legend)
}

export const addWorldGeoLegendItem = (
    result: GeneratedLegend,
    configObj: MapConfig,
    runtimeData: object[],
    data: any[]
): void => {
    const { general } = configObj


    if (general.geoType === 'world') {
        const countryKeys = Object.keys(supportedCountries)
        const runtimeDataKeys = Object.keys(runtimeData)
        const isCountriesWithNoDataState =
            data === undefined ? false : !countryKeys.every(countryKey => runtimeDataKeys.includes(countryKey))

        if (result.items.length > 0 && isCountriesWithNoDataState) {
            result.items.push({
                min: null,
                max: null,
                color: getGeoFillColor(configObj)
            })
        }
    }
}