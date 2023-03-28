export function generateCacheBustString() {
  const round = 1000 * 60 * 15
  const date = new Date()
  return new Date(date.getTime() - (date.getTime() % round)).toISOString()
}

export function convertStringToNumber(string) {
  let nonNumeric = /[^\d.-]/g
  if (false === Number.isNaN(parseFloat(string)) && null === String(string).match(nonNumeric)) return parseFloat(string)
  return string
}

export function convertKebabToTitle(string) {
  return string
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function convertPascalToCamel(string) {
  return string.replace(/([A-Z])/g, $1 => $1.toLowerCase())
}

export function convertToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export function convertToCamel(string) {
  return string.replace(/([-_][a-z])/gi, $1 => $1.toUpperCase().replace('-', '').replace('_', ''))
}

export function convertToPascal(string) {
  return this.convertToCamel(string).replace(/^[a-z]/, $1 => $1.toUpperCase())
}
// primarily used in maps at the moment
export function convertToTitleCase(string) {
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

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
