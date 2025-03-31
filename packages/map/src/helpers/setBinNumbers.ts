export const setBinNumbers = result => {
  result.items.forEach((row, i) => {
    row.bin = i // set bin number to index
  })
}
