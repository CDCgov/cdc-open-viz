// if city has a hyphen then in tooltip it ends up UPPER CASE instead of just regular Upper Case
// - this function is used to prevent that and instead give the formatting that is wanted
// Example:  Desired city display in tooltip on map: "Inter-Tribal Indian Reservation"
export const titleCase = string => {
  // guard clause else error in editor
  if (!string) return

  if (string !== undefined) {
    const toTitleCase = word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()

    if (string.toUpperCase().includes('U.S.') || string.toUpperCase().includes('US')) {
      return string
        .split(' ')
        .map(word => {
          if (word.toUpperCase() === 'U.S.' || word.toUpperCase() === 'US') {
            return word.toUpperCase()
          } else {
            return toTitleCase(word)
          }
        })
        .join(' ')
    }
    // if hyphen found, then split, uppercase each word, and put back together
    if (string.includes('–') || string.includes('-')) {
      let dashSplit = string.includes('–') ? string.split('–') : string.split('-') // determine hyphen or en dash to split on
      let splitCharacter = string.includes('–') ? '–' : '-' // print hyphen or en dash later on.
      let frontSplit = dashSplit[0]
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
        .join(' ')
      let backSplit = dashSplit[1]
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
        .join(' ')
      return frontSplit + splitCharacter + backSplit
    } else {
      // just return with each word uppercase
      return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
        .join(' ')
    }
  }
}
