export function getSum(arr) {
  if (arr === undefined || arr === null) return
  if (arr.length === 0 || !Array.isArray(arr)) return

  return arr.length > 1 ? arr.map(el => Number(el)).reduce((sum, x) => sum + x) : Number(arr[0])
}

export function getMean(arr, ignoreZeros = false) {
  if (arr === undefined || arr === null || !Array.isArray(arr)) return

  if (ignoreZeros) {
    arr = arr.filter(num => num !== 0)
  }

  return arr.length > 1 ? arr.map(el => Number(el)).reduce((a, b) => a + b) / arr.length : Number(arr[0])
}

export function getMedian(arr = []) {
  const mid = Math.floor(arr.length / 2)
  const nums = [ ...arr ].sort((a, b) => a - b)

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

export function getMode(arr = []) {
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
