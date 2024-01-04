import { ReactNode } from 'react'
import Cell from './Cell'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string
  wrapColumns: boolean
  isTotal?: boolean
  cellMinWidth?: number
}

const Row = ({ childRow, rowKey, wrapColumns, cellMinWidth = 0, isTotal }: RowProps) => {
  const whiteSpace = wrapColumns ? 'unset' : 'nowrap'
  const minWidth = cellMinWidth + 'px'
  return (
    <tr>
      {childRow.map((child, i) => (
        <Cell key={rowKey + '__' + i} style={{ whiteSpace, minWidth }} isBold={isTotal}>
          {child}
        </Cell>
      ))}
    </tr>
  )
}

export default Row
