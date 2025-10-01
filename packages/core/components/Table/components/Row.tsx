import React, { ReactNode, FC } from 'react'
import Cell from './Cell'
import { PreliminaryDataItem } from '@cdc/chart/src/types/ChartConfig'
import parse from 'html-react-parser'

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
  rowColor?: {
    backgroundColor: string
    textColor: string
  }
}

const Row: FC<RowProps> = props => {
  const { childRow, rowKey, wrapColumns, cellMinWidth = 0, isTotal, preliminaryData, rightAlignedCols, rowColor } = props
  const whiteSpace = wrapColumns ? 'unset' : 'nowrap'
  const minWidth = cellMinWidth + 'px'
  const isHtmlString = (str: any): str is string => typeof str === 'string' && /<\/?[a-z][\s\S]*>/i.test(str)
  const isReactNode = (val: any): boolean => React.isValidElement(val) || typeof val === 'object'

  // Apply row colors if provided using CSS custom properties
  const rowStyle = rowColor
    ? {
        '--row-bg-color': rowColor.backgroundColor,
        '--row-text-color': rowColor.textColor
      } as React.CSSProperties
    : {}

  return (
    <tr style={rowStyle} className={rowColor ? 'row-colored' : ''}>
      {childRow.map((child, i) => {
        const style =
          (preliminaryData?.some(
            pd => pd.type === 'suppression' && child === pd.iconCode && pd.displayGray && pd.displayTable
          ) && { color: '#777772' }) ||
          {}

        // Override cell color with row text color if row coloring is applied
        if (rowColor && !style.color) {
          style.color = rowColor.textColor
        }

        const textAlign = rightAlignedCols && rightAlignedCols[i] ? 'right' : ''
        // handle Parsing
        let content: ReactNode
        if (isHtmlString(child)) {
          content = parse(child)
        } else if (isReactNode(child)) {
          content = child
        } else {
          content = child
        }

        return (
          <Cell
            ariaLabel={style?.color ? 'suppressed data' : ''}
            key={rowKey + '__' + i}
            style={{ whiteSpace, minWidth, textAlign, textOverflow: 'ellipsis', ...style }}
            isBold={isTotal}
          >
            {content}
          </Cell>
        )
      })}
    </tr>
  )
}

export default Row
