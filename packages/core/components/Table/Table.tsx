import { ReactNode } from 'react'
import Row from './components/Row'
import GroupRow from './components/GroupRow'
import { CellMatrix, GroupCellMatrix } from './types/CellMatrix'
import { RowType } from './types/RowType'
import { PreliminaryDataItem } from '@cdc/chart/src/types/ChartConfig'
import _ from 'lodash'

type TableProps = {
  childrenMatrix: CellMatrix | GroupCellMatrix
  noData?: boolean
  tableName: string
  caption: string
  stickyHeader?: boolean
  headContent: ReactNode
  tableOptions: {
    className: string
    'aria-live'?: 'off' | 'assertive' | 'polite'
    hidden?: boolean
    'aria-rowcount'?: number
    cellMinWidth?: number
  }
  wrapColumns?: boolean
  hasRowType?: boolean // if it has row type then the first column is the row type which will explain how to render the row
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  preliminaryData?: PreliminaryDataItem[]
}

type Position = 'sticky'

const Table = ({
  childrenMatrix,
  noData,
  tableName,
  caption,
  stickyHeader,
  headContent,
  tableOptions,
  wrapColumns,
  hasRowType,
  viewport,
  preliminaryData
}: TableProps) => {
  const headStyle = stickyHeader ? { position: 'sticky' as Position, top: 0, zIndex: 2 } : {}
  const isGroupedMatrix = !Array.isArray(childrenMatrix)

  return (
    <table {...tableOptions}>
      <caption className='visually-hidden'>{caption}</caption>
      {noData ? (
        <tr>
          <td className='py-5 text-center'>No Data</td>
        </tr>
      ) : (
        <>
          <thead style={headStyle}>{headContent}</thead>
          <tbody>
            {isGroupedMatrix
              ? Object.keys(childrenMatrix).flatMap(groupName => {
                  let colSpan = 0
                  const rows = childrenMatrix[groupName].map((row, i) => {
                    colSpan = row.length
                    const key = `${tableName}-${groupName}-row-${i}`
                    return (
                      <Row
                        preliminaryData={preliminaryData}
                        key={key}
                        rowKey={key}
                        childRow={row}
                        wrapColumns={wrapColumns}
                        cellMinWidth={tableOptions.cellMinWidth}
                        viewport={viewport}
                      />
                    )
                  })
                  return [<GroupRow label={groupName} colSpan={colSpan} key={`${tableName}-${groupName}`} />, ...rows]
                })
              : childrenMatrix.map((childRow, i) => {
                  let childRowCopy = [...childRow]
                  let rowType = undefined
                  if (hasRowType) rowType = childRowCopy.shift()
                  const key = `${tableName}-row-${i}`
                  if (rowType === undefined) {
                    return (
                      <Row
                        preliminaryData={preliminaryData}
                        key={key}
                        rowKey={key}
                        childRow={childRow}
                        wrapColumns={wrapColumns}
                        cellMinWidth={tableOptions.cellMinWidth}
                        viewport={viewport}
                      />
                    )
                  } else {
                    switch (rowType) {
                      case RowType.row_group:
                        return <GroupRow label={childRowCopy[0]} colSpan={childRowCopy.length} key={key} />
                      case RowType.total:
                        return (
                          <Row
                            preliminaryData={preliminaryData}
                            key={key}
                            rowKey={key}
                            childRow={childRowCopy}
                            isTotal={true}
                            wrapColumns={wrapColumns}
                            cellMinWidth={tableOptions.cellMinWidth}
                            viewport={viewport}
                          />
                        )
                      case RowType.row_group_total:
                        return <GroupRow label={childRowCopy[0]} colSpan={1} key={key} data={childRowCopy.slice(1)} />
                      default:
                        return (
                          <Row
                            preliminaryData={preliminaryData}
                            key={key}
                            rowKey={key}
                            childRow={childRowCopy}
                            wrapColumns={wrapColumns}
                            cellMinWidth={tableOptions.cellMinWidth}
                            viewport={viewport}
                          />
                        )
                    }
                  }
                })}
          </tbody>
        </>
      )}
    </table>
  )
}

export default Table
