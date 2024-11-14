interface ColumnData {
  label: string
  value: string
  additional_info: string
}

const ColumnList = ({ columnData }) => {
  return (
    <ul>
      {columnData?.map((entry, index) => (
        <li key={index}>
          {entry.label}: {entry.value} ({entry.additional_info}%)
        </li>
      ))}
    </ul>
  )
}

export default ColumnList
