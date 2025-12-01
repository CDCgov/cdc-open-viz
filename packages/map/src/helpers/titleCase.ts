// if city has a hyphen then in tooltip it ends up UPPER CASE instead of just regular Upper Case
// - this function is used to prevent that and instead give the formatting that is wanted
// Example:  Desired city display in tooltip on map: "Inter-Tribal Indian Reservation"
export const titleCase = string => {
  // guard clause else error in editor
  if (!string) return
  if (string !== undefined) {
    // Words that should remain lowercase in geographic names
    const lowercaseWords = ['of', 'the', 'and']

    const titleCaseWord = (word: string): string => {
      const lowerWord = word.toLowerCase()
      return lowercaseWords.includes(lowerWord)
        ? lowerWord
        : word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    }

    // if hyphen found, then split, uppercase each word, and put back together
    if (string.includes('–') || string.includes('-')) {
      let dashSplit = string.includes('–') ? string.split('–') : string.split('-') // determine hyphen or en dash to split on
      let splitCharacter = string.includes('–') ? '–' : '-' // print hyphen or en dash later on.
      let frontSplit = dashSplit[0].split(' ').map(titleCaseWord).join(' ')
      let backSplit = dashSplit[1].split(' ').map(titleCaseWord).join(' ')
      return frontSplit + splitCharacter + backSplit
    } else {
      return string.split(' ').map(titleCaseWord).join(' ')
    }
  }
}
