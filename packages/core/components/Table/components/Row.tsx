import { ReactNode } from 'react'
import Cell from './Cell'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string
  wrapColumns: boolean
  isTotal?: boolean
  cellMinWidth?: number
  fontSize: 'small' | 'medium' | 'large'
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
}

const Row = ({ childRow, rowKey, wrapColumns, cellMinWidth = 0, isTotal, fontSize, viewport }: RowProps) => {
  const whiteSpace = wrapColumns ? 'unset' : 'nowrap'
  const minWidth = cellMinWidth + 'px'
  const fontSizes = { small: 16, medium: 18, large: 20 }
  const cellFontSize = ['sm', 'xs', 'xxs'].includes(viewport) ? '11px' : `${fontSizes[fontSize]}px`
  return (
    <tr>
      {childRow.map((child, i) => (
        <Cell key={rowKey + '__' + i} style={{ whiteSpace, minWidth, fontSize: cellFontSize }} isBold={isTotal}>
          {child}
        </Cell>
      ))}
    </tr>
  )
}

export default Row
