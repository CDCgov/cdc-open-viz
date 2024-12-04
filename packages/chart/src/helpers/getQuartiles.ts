/**
 * Calculates the first quartile (q1) and third quartile (q3) from an array of integers or decimals.
 *
 * @param {Array} arr - The array of integers or decimals.
 * @returns {Object} An object containing the q1 and q3 values.
 */
import _ from 'lodash'

export const getQuartiles = (values: number[]): { q1: number; q3: number } => {
  const sortedData: number[] = _.sortBy(values)

  const quantile = (sortedData: number[], q: number): number => {
    const position: number = (sortedData.length - 1) * q
    const base: number = Math.floor(position)
    const rest: number = position - base
    if (sortedData[base + 1] !== undefined) {
      return sortedData[base] + rest * (sortedData[base + 1] - sortedData[base])
    } else {
      return sortedData[base]
    }
  }

  const q1: number = quantile(sortedData, 0.25)
  const q3: number = quantile(sortedData, 0.75)

  return { q1, q3 }
}
