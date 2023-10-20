import { ReactNode } from 'react'
import Row from './components/Row'

type TableProps = {
  childrenMatrix: ReactNode[][]
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
  return (
    <table {...tableOptions}>
      <caption className='visually-hidden'>{caption}</caption>
      <thead style={headStyle}>{headContent}</thead>
      <tbody>
        {childrenMatrix.map((childRow, i) => (
          <Row key={`${tableName}-row-${i}`} childRow={childRow} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
