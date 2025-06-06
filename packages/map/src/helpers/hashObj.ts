/**
 * Hashes an object
 * @param {Object} row - The object to hash
 * @returns {number} - The hash of the object
 */
export const hashObj = row => {
  try {
    if (!row || row === undefined) return null

    let str = JSON.stringify(row)
    let hash = 0

    if (str.length === 0) return hash

    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }

    return hash
  } catch (e) {
    console.error({ state: 'COVE: ' + e.message }) // eslint-disable-line
  }
}
