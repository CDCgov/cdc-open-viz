import { Condition } from './Condition'
export type Variable = {
  columnName: string
  conditions: Condition[]
  name: string
  tag: string
}
