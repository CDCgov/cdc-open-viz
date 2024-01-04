/**
 * Calculates the first quartile (q1) and third quartile (q3) from an array of integers or decimals.
 *
 * @param {Array} arr - The array of integers or decimals.
 * @returns {Object} An object containing the q1 and q3 values.
 */
export const getQuartiles = arr => {
  arr.sort((a, b) => a - b)

  // Calculate the index of the median value of the array
  const medianIndex = Math.floor(arr.length / 2)

  // Check if the length of the array is even or odd
  const isEvenLength = arr.length % 2 === 0

  // Split the array into two subarrays based on the median index
  const q1Array = isEvenLength ? arr.slice(0, medianIndex) : arr.slice(0, medianIndex + 1)
  const q3Array = isEvenLength ? arr.slice(medianIndex) : arr.slice(medianIndex + 1)

  // Calculate the median of the first subarray to get the q1 value
  const q1Index = Math.floor(q1Array.length / 2)
  const q1 = isEvenLength ? (q1Array[q1Index - 1] + q1Array[q1Index]) / 2 : q1Array[q1Index]

  // Calculate the median of the second subarray to get the q3 value
  const q3Index = Math.floor(q3Array.length / 2)
  const q3 = isEvenLength ? (q3Array[q3Index - 1] + q3Array[q3Index]) / 2 : q3Array[q3Index]

  // Return an object containing the q1 and q3 values
  return { q1, q3 }
}
