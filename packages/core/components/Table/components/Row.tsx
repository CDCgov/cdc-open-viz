import { ReactNode } from 'react'
import Cell from './Cell'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string,
  cellMinWidth: Number
}

const Row = ({ childRow, rowKey, cellMinWidth }: RowProps) => {
  return (
    <tr>
      {childRow.map((child, i) => (
        <Cell key={rowKey + '__' + i} cellMinWidth={cellMinWidth}>{child}</Cell>
      ))}
    </tr>
  )
}

export default Row
