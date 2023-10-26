export const hashObj = row => {
  try {
    if (!row) throw new Error('No row supplied to hashObj')

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
    console.error('COVE: ', e) // eslint-disable-line
  }
}
