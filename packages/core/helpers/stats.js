// Stat Helpers
const asc = arr => arr.sort((a, b) => a - b)

const sum = arr => arr.reduce((a, b) => a + b, 0)

const mean = arr => sum(arr) / arr.length

const median = arr => {
  const mid = Math.floor(arr.length / 2)
  const nums = arr.map(num => Number(num))
  const sortedNums = asc(nums)
  return arr.length % 2 !== 0 ? sortedNums[mid] : (sortedNums[mid - 1] + sortedNums[mid]) / 2
}

export { mean, median }
