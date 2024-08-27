import { ReactNode, FC } from 'react'
import Cell from './Cell'
import { PreliminaryDataItem } from '@cdc/chart/src/types/ChartConfig'

type RowProps = {
  childRow: ReactNode[]
  rowKey: string
  wrapColumns: boolean
  isTotal?: boolean
  cellMinWidth?: number
  fontSize: 'small' | 'medium' | 'large'
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  style?: object
  preliminaryData?: PreliminaryDataItem[]
}

const Row: FC<RowProps> = props => {
  const { childRow, rowKey, wrapColumns, cellMinWidth = 0, isTotal, fontSize, viewport, preliminaryData } = props
  const whiteSpace = wrapColumns ? 'unset' : 'nowrap'
  const minWidth = cellMinWidth + 'px'
  const fontSizes = { small: 16, medium: 18, large: 20 }
  const cellFontSize = ['sm', 'xs', 'xxs'].includes(viewport) ? '11px' : `${fontSizes[fontSize]}px`

  return (
    <tr>
      {childRow.map((child, i) => {
        const style = (preliminaryData?.some(pd => pd.type === 'suppression' && child === pd.iconCode && pd.displayGray && pd.displayTable) && { color: '#8b8b8a' }) || {}

        return (
          <Cell key={rowKey + '__' + i} style={{ whiteSpace, minWidth, fontSize: cellFontSize, ...style }} isBold={isTotal}>
            {child}
          </Cell>
        )
      })}
    </tr>
  )
}

export default Row
