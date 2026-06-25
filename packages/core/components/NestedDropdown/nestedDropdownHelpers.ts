import { prepareSearchQuery } from '@cdc/core/helpers/cove/search'

export type ValueTextPair =
  | [string | number, string | number | undefined, string | number | undefined]
  | [string | number, string | number | undefined]
  | [string | number] // [value, text, description]

export type NestedOptions = Array<[ValueTextPair, ValueTextPair[]]>

export const filterSearchTerm = (userSearchTerm: string | undefined, optsMemo: NestedOptions): NestedOptions => {
  const search = prepareSearchQuery(userSearchTerm)
  if (!search.hasQuery) return optsMemo || ([] as NestedOptions)

  const filterOptions: NestedOptions = optsMemo.filter(([group, subGroups]) => {
    const [groupValue, groupText] = group
    const _groupText = String(groupText || groupValue)
    return search.matches(_groupText) || subGroups.some(([value, text, description]) => {
      const subGroupText = String(text || value)
      const subGroupDescription = String(description || '')
      return search.matches(`${_groupText} ${subGroupText} ${subGroupDescription}`)
    })
  }).map(([group, subGroups]) => {
    const [groupValue, groupText] = group
    const _groupText = String(groupText || groupValue)
    if (search.matches(_groupText)) return [group, subGroups]

    const newOptions = subGroups.filter(([value, text, description]) => {
      const subGroupText = text || value
      const subGroupDescription = String(description || '')
      return search.matches(`${_groupText} ${subGroupText} ${subGroupDescription}`)
    })
    return [group, newOptions]
  })

  return filterOptions
}
