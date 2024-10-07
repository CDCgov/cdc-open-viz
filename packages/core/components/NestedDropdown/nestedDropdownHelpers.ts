import _ from 'lodash'

export type OptionsMemo = [[string | number], [string | number][]] | []
export const handleSearchTerm = (userSearchTerm: string, optsMemo: OptionsMemo = []): OptionsMemo => {
  if (userSearchTerm === undefined || userSearchTerm === '') return optsMemo
  const newRegex = new RegExp(`^${userSearchTerm}`, 'i')
  const newOptsMemoTierOneFiltered = optsMemo.filter(([tierOne, tierTwo]) => {
    const tierOneText = tierOne[1] ? tierOne[1] : tierOne[0]
    return (
      tierOneText.match(newRegex) ||
      tierTwo.some(value => {
        const tierTwoText = value[1] ? value[1] : value[0]
        return String(tierTwoText).match(newRegex)
      })
    )
  })

  const filterOptions: OptionsMemo = newOptsMemoTierOneFiltered.map(([tierOne, tierTwo]) => {
    const tierOneText = tierOne[1] ? tierOne[1] : tierOne[0]
    if (tierOneText.match(newRegex)) return [tierOne, tierTwo]
    const newOptions = tierTwo.filter(option => {
      const tierTwoText = option[1] ? option[1] : option[0]
      return String(tierTwoText).match(newRegex)
    })
    return [tierOne, newOptions]
  })

  return filterOptions
}
