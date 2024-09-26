export type OptionsMemo = [string, (string | number)[]][]

export const handleSearchTerm = (userSearchTerm: string, optsMemo: OptionsMemo): OptionsMemo => {
  if (!userSearchTerm) return optsMemo
  const newRegex = new RegExp(`^${userSearchTerm}`, 'i')
  const newOptsMemoTierOneFiltered = optsMemo.filter(
    ([tierOne, tierTwo]) => tierOne.match(newRegex) || tierTwo.some(value => String(value).match(newRegex))
  )

  const filterOptions: OptionsMemo = newOptsMemoTierOneFiltered.map(([tierOne, tierTwo]) => {
    if (tierOne.match(newRegex)) return [tierOne, tierTwo]
    const newOptions = tierTwo.filter(option => String(option).match(newRegex))
    return [tierOne, newOptions]
  })

  return filterOptions
}
