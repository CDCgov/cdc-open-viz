export type Region = {
  from: string
  to: string
  label: string
  color: string
  background: string
  range: 'Custom' | string
  fromType: 'Fixed' | 'Previous Days'
  toType: 'Fixed' | 'Last Date'
}
