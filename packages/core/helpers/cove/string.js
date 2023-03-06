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
  return string.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export function convertPascalToCamel(string) {
  return string.replace(/([A-Z])/g, ($1) => $1.toLowerCase())
}

export function convertToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export function convertToCamel(string) {
  return string.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase().replace('-', '').replace('_', ''))
}

export function convertToPascal(string) {
  return this.convertToCamel(string).replace(/^[a-z]/, ($1) => $1.toUpperCase())
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
