export const sortSpecialClassesLast = (result, legend) => {
  if (legend.showSpecialClassesLast) {
    const specialRows = result.items.filter(d => d.special === true)
    const otherRows = result.items.filter(d => !d.special)
    result.items = [...otherRows, ...specialRows]
  }
}
