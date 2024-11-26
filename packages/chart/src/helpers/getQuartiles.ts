/**
 * Calculates the first quartile (q1) and third quartile (q3) from an array of integers or decimals.
 *
 * @param {Array} arr - The array of integers or decimals.
 * @returns {Object} An object containing the q1 and q3 values.
 */
export const getQuartiles = arr => {
  arr.sort((a, b) => a - b)

  // Calculate the median index for the full array
  const medianIndex = Math.floor(arr.length / 2)

  // Determine if the full array length is even
  const isFullEven = arr.length % 2 === 0

  // Define the subarrays for Q1 and Q3
  const q1Array = arr.slice(0, medianIndex)
  const q3Array = arr.slice(isFullEven ? medianIndex : medianIndex + 1)

  // Helper function to calculate median of any array
  const median = subArray => {
    const midIndex = Math.floor(subArray.length / 2)
    if (subArray.length % 2 === 0) {
      return (subArray[midIndex - 1] + subArray[midIndex]) / 2
    } else {
      return subArray[midIndex]
    }
  }

  // Calculate Q1 and Q3 using the helper function
  const q1 = median(q1Array)
  const q3 = median(q3Array)

  // Return an object containing the q1 and q3 values
  return { q1, q3 }
}
