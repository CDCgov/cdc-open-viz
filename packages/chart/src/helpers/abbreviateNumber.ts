const abbreviationUnits: Record<string, { K: string; M: string; B: string }> = {
  'es-MX': { K: ' mil', M: ' M', B: ' mil M' }
}

const defaultUnits = { K: 'K', M: 'M', B: 'B' }

export const abbreviateNumber = (num, locale?: string) => {
  const units = (locale && abbreviationUnits[locale]) || defaultUnits
  let unit = ''
  let absNum = Math.abs(num)

  if (absNum >= 1e9) {
    unit = units.B
    num = num / 1e9
  } else if (absNum >= 1e6) {
    unit = units.M
    num = num / 1e6
  } else if (absNum >= 1e3) {
    unit = units.K
    num = num / 1e3
  }

  return num + unit
}
