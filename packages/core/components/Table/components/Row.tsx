import { ReactNode } from 'react'
import Cell from './Cell'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string
}

const Row = ({ childRow, rowKey }: RowProps) => {
  return (
    <tr>
      {childRow.map((child, i) => (
        <Cell key={rowKey + '__' + i}>{child}</Cell>
      ))}
    </tr>
  )
}

export default Row
