import { ReactNode } from 'react'
import Cell from './Cell'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string,
  wrapColumns: boolean,
  cellMinWidth: Number
}

const Row = ({ childRow, rowKey, wrapColumns, cellMinWidth }: RowProps) => {
  return (
    <tr>
      {childRow.map((child, i) => (
        <Cell key={rowKey + '__' + i} wrapColumns={wrapColumns} cellMinWidth={cellMinWidth}>{child}</Cell>
      ))}
    </tr>
  )
}

export default Row
