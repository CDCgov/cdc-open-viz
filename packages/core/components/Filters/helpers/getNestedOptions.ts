import { SubGrouping } from '../../../types/VizFilter'
import { NestedOptions, ValueTextPair } from '../../NestedDropdown/nestedDropdownHelpers'

type GetOptionsMemoParams = {
  orderedValues?: string[]
  values: string[]
  subGrouping: SubGrouping
}

export const getNestedOptions = ({ orderedValues, values, subGrouping }: GetOptionsMemoParams): NestedOptions => {
  // keep custom ordered value order
  const filteredValues = orderedValues?.filter(orderedValue => values.includes(orderedValue))
  const v: NestedOptions = filteredValues.map<[ValueTextPair, ValueTextPair[]]>(value => {
    if (!subGrouping) return [[value], []]
    const { orderedValues, values: filteredSubValues } = subGrouping.valuesLookup[value]
    // keep custom subFilter order
    const subFilterValues =
      orderedValues?.filter(orderedValue => filteredSubValues.includes(orderedValue)) || filteredSubValues
    const structuredNestedDropdownData: [ValueTextPair, ValueTextPair[]] = [
      [value],
      subFilterValues.map(subValue => [subValue])
    ]
    return structuredNestedDropdownData
  })

  return v
}
