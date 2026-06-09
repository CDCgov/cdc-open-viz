import { prepareSearchQuery } from '@cdc/core/helpers/cove/search'

export type ValueTextPair = [string | number, string | number | undefined] | [string | number] // [value, text]

export type NestedOptions = Array<[ValueTextPair, ValueTextPair[]]>

export const filterSearchTerm = (userSearchTerm: string | undefined, optsMemo: NestedOptions): NestedOptions => {
  const search = prepareSearchQuery(userSearchTerm)
  if (!search.hasQuery) return optsMemo || ([] as NestedOptions)

  const filterOptions: NestedOptions = optsMemo.filter(([group, subGroups]) => {
    const [groupValue, groupText] = group
    const _groupText = String(groupText || groupValue)
    return search.matches(_groupText) || subGroups.some(([value, text]) => {
      const subGroupText = String(text || value)
      return search.matches(`${_groupText} ${subGroupText}`)
    })
  }).map(([group, subGroups]) => {
    const [groupValue, groupText] = group
    const _groupText = String(groupText || groupValue)
    if (search.matches(_groupText)) return [group, subGroups]

    const newOptions = subGroups.filter(([value, text]) => {
      const subGroupText = text || value
      return search.matches(`${_groupText} ${subGroupText}`)
    })
    return [group, newOptions]
  })

  return filterOptions
}
