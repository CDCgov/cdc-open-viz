const Cell = ({ children, cellMinWidth }) => {
  return (
    <td tabIndex={0} role='gridcell' style={{minWidth: (cellMinWidth || 0) + 'px'}}>
      {children}
    </td>
  )
}

export default Cell
