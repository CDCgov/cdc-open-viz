import { ReactNode } from 'react'

type GroupRowProps = {
  label: ReactNode
  colSpan: number
  data?: ReactNode[]
}

const GroupRow = ({ label, colSpan, data }: GroupRowProps) => {
  return (
    <tr className='row-group'>
      <th scope='colgroup' colSpan={colSpan}>
        {label}
      </th>
      {data && data.map((item, i) => <th key={`${label}-${i}`}>{item}</th>)}
    </tr>
  )
}

export default GroupRow
