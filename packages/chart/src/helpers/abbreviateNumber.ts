export const abbreviateNumber = num => {
  let unit = ''
  let absNum = Math.abs(num)

  if (absNum >= 1e9) {
    unit = 'B'
    num = num / 1e9
  } else if (absNum >= 1e6) {
    unit = 'M'
    num = num / 1e6
  } else if (absNum >= 1e3) {
    unit = 'K'
    num = num / 1e3
  }

  return num + unit
}
