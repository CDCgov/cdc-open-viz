import { hashObj } from './hashObj'

export const generateSpecialClasses = (
    configObj,
    dataSet: any[],
    result: any,
    newLegendMemo: Map<string, number>
) => {
    const { legend } = configObj
    let specialClasses = 0
    let specialClassesHash = {}

    // Special classes
    if (legend.specialClasses.length) {
        if (typeof legend.specialClasses[0] === 'object') {
            legend.specialClasses.forEach(specialClass => {
                dataSet = dataSet.filter(row => {
                    const val = String(row[specialClass.key])

                    if (specialClass.value === val) {
                        if (undefined === specialClassesHash[val]) {
                            specialClassesHash[val] = true

                            result.items.push({
                                special: true,
                                value: val,
                                label: specialClass.label
                            })

                            specialClasses += 1
                        }

                        let specialColor: number

                        // color the configObj if val is in row
                        specialColor = result.items.findIndex(p => p.value === val)

                        newLegendMemo.set(String(hashObj(row)), specialColor)

                        return false
                    }

                    return true
                })
            })
        }
    }

    return {
        dataSet,
        specialClasses,
        specialClassesHash
    }
}
