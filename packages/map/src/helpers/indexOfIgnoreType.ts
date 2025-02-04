export const indexOfIgnoreType = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      return i
    }
  }
  return -1
}
