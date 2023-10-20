import { ReactNode } from 'react'
import Row from './components/Row'
import GroupRow from './components/GroupRow'

type CellMatrix = ReactNode[][]
type GroupCellMatrix = Record<string, CellMatrix>

type TableProps = {
  childrenMatrix: CellMatrix | GroupCellMatrix
  tableName: string
  caption: string
  stickyHeader?: boolean
  headContent: ReactNode
  tableOptions: {
    className: string
    'aria-live'?: 'off' | 'assertive' | 'polite'
    hidden?: boolean
    'aria-rowcount'?: number
  }
}

type Position = 'sticky'

const Table = ({ childrenMatrix, tableName, caption, stickyHeader, headContent, tableOptions }: TableProps) => {
  const headStyle = stickyHeader ? { position: 'sticky' as Position, top: 0, zIndex: 999 } : {}
  const isGroupedMatrix = !Array.isArray(childrenMatrix)
  return (
    <table {...tableOptions}>
      <caption className='visually-hidden'>{caption}</caption>
      <thead style={headStyle}>{headContent}</thead>
      <tbody>
        {isGroupedMatrix
          ? Object.keys(childrenMatrix).flatMap(groupName => {
              let colSpan = 0
              const rows = childrenMatrix[groupName].map((row, i) => {
                colSpan = row.length
                const key = `${tableName}-${groupName}-row-${i}`
                return <Row key={key} rowKey={key} childRow={row} />
              })
              return [<GroupRow label={groupName} colSpan={colSpan} key={`${tableName}-${groupName}`} />, ...rows]
            })
          : childrenMatrix.map((childRow, i) => {
              const key = `${tableName}-row-${i}`
              return <Row key={key} rowKey={key} childRow={childRow} />
            })}
      </tbody>
    </table>
  )
}

export default Table
