type AxisMaxOverrideProps = {
  minimumValidMax: number
  value: unknown
}

export const getAxisMaxOverride = ({ minimumValidMax, value }: AxisMaxOverrideProps) => {
  const maxNumber = Number(value)
  const hasEnteredMax = value !== undefined && value !== null && value !== ''
  const hasValidMax = hasEnteredMax && Number.isFinite(maxNumber) && maxNumber >= minimumValidMax

  return {
    hasEnteredMax,
    hasValidMax,
    maxNumber
  }
}
