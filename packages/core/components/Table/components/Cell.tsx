const Cell = ({ children, wrapColumns, cellMinWidth }) => {
  return (
    <td tabIndex={0} role='gridcell' style={{ whiteSpace: wrapColumns ? 'unset' : 'nowrap', minWidth: (cellMinWidth || 0) + 'px' }}>
      {children}
    </td>
  )
}

export default Cell
