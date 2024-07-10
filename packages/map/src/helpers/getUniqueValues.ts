/**
 * Get unique values from a column in a dataset
 * @returns {Array} - The unique values
 */
export const getUniqueValues = (data: Array<Record<string, any>>, columnName: string) => {
  let result = {}

  for (let i = 0; i < data.length; i++) {
    let val = data[i][columnName]

    if (undefined === val) continue

    if (undefined === result[val]) {
      result[val] = true
    }
  }

  return Object.keys(result)
}
