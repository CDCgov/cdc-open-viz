import { ReactNode } from 'react'
import Cell from './Cell'

type RowProps = {
  childRow: ReactNode[]
  key: string
}

const Row = ({ childRow, key: rowKey }: RowProps) => {
  return (
    <tr role='row'>
      {childRow.map((child, i) => (
        <Cell key={rowKey + '__' + i}>{child}</Cell>
      ))}
    </tr>
  )
}

export default Row
