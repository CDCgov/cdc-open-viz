export type Condition = {
  columnName: string
  isOrIsNotEqualTo: 'is' | 'is not'
  value: string
}
