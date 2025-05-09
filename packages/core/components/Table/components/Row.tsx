import { ReactNode, FC } from 'react'
import Cell from './Cell'
import { PreliminaryDataItem } from '@cdc/chart/src/types/ChartConfig'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string
  wrapColumns: boolean
  isTotal?: boolean
  cellMinWidth?: number
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  style?: object
  preliminaryData?: PreliminaryDataItem[]
  rightAlignedCols: object
}

const Row: FC<RowProps> = props => {
  const {
    childRow,
    rowKey,
    wrapColumns,
    cellMinWidth = 0,
    isTotal,
    viewport,
    preliminaryData,
    rightAlignedCols
  } = props
  const whiteSpace = wrapColumns ? 'unset' : 'nowrap'
  const minWidth = cellMinWidth + 'px'

  return (
    <tr>
      {childRow.map((child, i) => {
        const style =
          (preliminaryData?.some(
            pd => pd.type === 'suppression' && child === pd.iconCode && pd.displayGray && pd.displayTable
          ) && { color: '#777772' }) ||
          {}

        const textAlign = rightAlignedCols && rightAlignedCols[i] ? 'right' : ''

        return (
          <Cell
            ariaLabel={style?.color ? 'suppressed data' : ''}
            key={rowKey + '__' + i}
            style={{ whiteSpace, minWidth, textAlign, textOverflow: 'ellipsis', ...style }}
            isBold={isTotal}
          >
            {child}
          </Cell>
        )
      })}
    </tr>
  )
}

export default Row
