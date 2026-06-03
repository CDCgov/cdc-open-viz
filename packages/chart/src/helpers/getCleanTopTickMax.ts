const NICE_MANTISSAS = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 10] as const

export const getCleanTopTickMax = (value: number) => {
  if (!Number.isFinite(value) || value <= 5) return value

  const powerOfTenStep = Math.pow(10, Math.floor(Math.log10(value)))
  const normalizedValue = value / powerOfTenStep
  const mantissa = NICE_MANTISSAS.find(candidate => normalizedValue <= candidate)

  return (mantissa ?? 10) * powerOfTenStep
}

export const getCleanTopTickMaxCandidates = () => [...NICE_MANTISSAS]
