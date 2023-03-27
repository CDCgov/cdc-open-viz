export function equalsValidNumber(value) {
  if (typeof value === 'number') return !Number.isNaN(value)

  // If a string, check if decimal existsand is followed by 0 or more digits
  if (typeof value === 'string') return value !== '' && /\d+\.?\d*/.test(value)
  return false
}

export function roundToPlace(value, roundToPlace = 0) {
  if ('' !== roundToPlace && !isNaN(roundToPlace) && Number(roundToPlace) > -1)
    return Number(value).toFixed(Number(roundToPlace))
}

export function convertNumberToLocaleString(value, locale = 'en-US') {
  if (value === undefined || value === null) return
  if (Number.isNaN(value) || typeof value === 'number') value = String(value)

  let formattedValue = parseFloat(value).toLocaleString(locale, {
    useGrouping: true,
    maximumFractionDigits: 6
  })

  // Add back missing .0 in e.g. 12.0
  const match = value.match(/\.\d*?(0*)$/)

  if (match) formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0]
  return formattedValue
}
