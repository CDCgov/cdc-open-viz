import { ReactNode } from 'react'
import Cell from './Cell'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string
  wrapColumns: boolean
}

const Row = ({ childRow, rowKey, wrapColumns }: RowProps) => {
  return (
    <tr>
      {childRow.map((child, i) => (
        <Cell key={rowKey + '__' + i} wrapColumns={wrapColumns}>
          {child}
        </Cell>
      ))}
    </tr>
  )
}

export default Row
