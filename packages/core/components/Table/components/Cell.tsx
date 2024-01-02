const Cell = ({ children, wrapColumns }) => {
  return (
    <td tabIndex={0} role='gridcell' style={{ whiteSpace: wrapColumns ? 'unset' : 'noWrap' }}>
      {children}
    </td>
  )
}

export default Cell
