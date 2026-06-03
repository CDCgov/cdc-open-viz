export const getNicePowerOfTenMax = (value: number) => {
  if (!Number.isFinite(value) || value <= 5) return value
  if (value <= 10) return 10

  const powerOfTenStep = Math.pow(10, Math.floor(Math.log10(value)))
  const roundedValue = Math.ceil(value / powerOfTenStep) * powerOfTenStep
  const leadingDigit = Math.floor(roundedValue / powerOfTenStep)

  return leadingDigit === 9 ? powerOfTenStep * 10 : roundedValue
}
