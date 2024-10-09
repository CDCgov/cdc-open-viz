import _ from 'lodash'

export type ValueTextPair = [string | number, string | number | undefined] | [string | number] // [value, text]

export type NestedOptions = Array<[ValueTextPair, ValueTextPair[]]>

export const filterSearchTerm = (userSearchTerm: string, optsMemo: NestedOptions): NestedOptions => {
  if (userSearchTerm === undefined || userSearchTerm === '') return optsMemo || ([] as NestedOptions)
  const newRegex = new RegExp(`^${userSearchTerm}`, 'i')
  const newOptsMemoTierOneFiltered = optsMemo.filter(([group, subGroups]) => {
    const [groupValue, groupText] = group
    const _groupText = String(groupText || groupValue)
    return (
      _groupText.match(newRegex) ||
      subGroups.some(([value, text]) => {
        const subGroupText = String(text || value)
        return subGroupText.match(newRegex)
      })
    )
  })

  const filterOptions: NestedOptions = newOptsMemoTierOneFiltered.map(([group, subGroups]) => {
    const [groupValue, groupText] = group
    const _groupText = String(groupText || groupValue)
    if (_groupText.match(newRegex)) return [group, subGroups]
    const newOptions = subGroups.filter(([value, text]) => {
      const subGroupText = text || value
      return String(subGroupText).match(newRegex)
    })
    return [group, newOptions]
  })

  return filterOptions
}
