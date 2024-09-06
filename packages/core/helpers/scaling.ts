export const invertValue = (xScale, value) => {
  if (xScale && typeof xScale.invert === 'function') {
    return xScale.invert(value)
  } else {
    return null
  }
}
