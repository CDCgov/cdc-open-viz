const Cell = ({ children }) => {
  return (
    <td tabIndex={0} role='gridcell'>
      {children}
    </td>
  )
}

export default Cell
