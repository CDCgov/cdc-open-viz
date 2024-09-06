const Cell = ({ children, style, isBold = false, ariaLabel }) => {
  return (
    <td aria-label={ariaLabel} tabIndex={0} role='gridcell' style={style}>
      {isBold ? <strong>{children}</strong> : children}
    </td>
  )
}

export default Cell
