const BoxplotHeader = ({ categories }) => {
  let columns = ['Measures', ...categories]
  return (
    <tr>
      {columns.map(column => {
        return (
          <th key={`col-header-${column}`} tabIndex={0} title={column} role='columnheader' scope='col'>
            {column}
          </th>
        )
      })}
    </tr>
  )
}

export default BoxplotHeader
