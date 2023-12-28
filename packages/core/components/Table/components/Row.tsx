import { ReactNode } from 'react'
import Cell from './Cell'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string
  wrapColumns: boolean
  isTotal?: boolean
  cellMinWidth?: number
}

const Row = ({ childRow, rowKey, wrapColumns, cellMinWidth, isTotal }: RowProps) => {
  return (
    <tr>
      {childRow.map((child, i) => (
        <Cell key={rowKey + '__' + i} wrapColumns={wrapColumns} isBold={isTotal} cellMinWidth={cellMinWidth}>
          {child}
        </Cell>
      ))}
    </tr>
  )
}

export default Row
