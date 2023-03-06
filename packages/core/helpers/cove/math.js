export function getSum(arr) {
  if (Array.isArray(arr) && arr.length > 0)
    return arr.reduce((sum, x) => sum + x)
}

export function getMean(arr) {
  return arr.length > 1 ? arr.reduce((a, b) => a + b) / arr.length : arr[0]
}

export function getMedian(arr) {
  const mid = Math.floor(arr.length / 2)
  const nums = [ ...arr ].sort((a, b) => a - b)

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

export function getMode(arr) {
  let response = []
  let freq = {}
  let max = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1
    } else {
      // If index entry doesn't exist, start at 1 instead of 0
      freq[arr[i]] = 1
    }
    if (freq[arr[i]] > max) max = freq[arr[i]]
  }
  for (let key in freq) if (freq[key] === max) response.push(key)
  return response
}

export function equalsValidNumber(value) {
  if (typeof value === 'number') return !Number.isNaN(value)

  // If a string, check if decimal existsand is followed by 0 or more digits
  if (typeof value === 'string') return value !== '' && /\d+\.?\d*/.test(value)
  return false
}

export function roundToPlace(value, roundToPlace) {
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
