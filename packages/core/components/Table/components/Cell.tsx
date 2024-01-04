const Cell = ({ children, style, isBold = false }) => {
  return (
    <td tabIndex={0} role='gridcell' style={style}>
      {isBold ? <strong>{children}</strong> : children}
    </td>
  )
}

export default Cell
