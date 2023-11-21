type GroupRowProps = {
  label: string
  colSpan: number
}

const GroupRow = ({ label, colSpan }: GroupRowProps) => {
  return (
    <tr>
      <th scope='colgroup' colSpan={colSpan}>
        {label}
      </th>
    </tr>
  )
}

export default GroupRow
