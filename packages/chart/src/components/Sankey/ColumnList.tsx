interface ColumnData {
  label: string
  value: string
  additional_info: string
}

const ColumnList: React.FC<{ columnData: ColumnData[] }> = ({ columnData }) => {
  return (
    <ul>
      {columnData?.map((entry, index) => {
        return <li key={index}>{entry}</li>
      })}
    </ul>
  )
}

export default ColumnList
