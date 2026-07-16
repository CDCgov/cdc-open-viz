import { SubGrouping } from '../../../types/VizFilter'
import { NestedOptions, ValueTextPair } from '../../NestedDropdown/nestedDropdownHelpers'

type GetOptionsMemoParams = {
  orderedValues?: string[]
  values: string[]
  descriptionsByValue?: Record<string, string>
  subGrouping: SubGrouping
}

export const getNestedOptions = ({
  orderedValues,
  values,
  descriptionsByValue,
  subGrouping
}: GetOptionsMemoParams): NestedOptions => {
  if (!values?.length && !orderedValues?.length) return []
  // keep custom ordered value order
  const filteredValues = orderedValues?.length
    ? orderedValues.filter(orderedValue => values?.includes(orderedValue))
    : values
  const options: NestedOptions = filteredValues.map<[ValueTextPair, ValueTextPair[]]>(value => {
    if (!subGrouping) return [[value], []]
    const { orderedValues, values: filteredSubValues, descriptionsByValue: subgroupDescriptionsByValue } =
      subGrouping.valuesLookup[value]
    // keep custom subFilter order
    const subFilterValues =
      orderedValues?.filter(orderedValue => filteredSubValues.includes(orderedValue)) || filteredSubValues
    const groupDescription = descriptionsByValue?.[value]
    const groupTuple: ValueTextPair = groupDescription ? [value, undefined, groupDescription] : [value]
    const subGroupTuples: ValueTextPair[] = subFilterValues.map(subValue => {
      const subDescription = subgroupDescriptionsByValue?.[subValue]
      return subDescription ? [subValue, undefined, subDescription] : [subValue]
    })
    const structuredNestedDropdownData: [ValueTextPair, ValueTextPair[]] = [groupTuple, subGroupTuples]
    return structuredNestedDropdownData
  })

  return options
}
