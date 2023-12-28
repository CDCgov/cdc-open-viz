const Cell = ({ children, wrapColumns, cellMinWidth, isBold = false }) => {
  return (
    <td tabIndex={0} role='gridcell' style={{ whiteSpace: wrapColumns ? 'unset' : 'nowrap', minWidth: (cellMinWidth || 0) + 'px' }}>
      {isBold ? <strong>{children}</strong> : children}
    </td>
  )
}

export default Cell
