const Cell = ({ children, wrapColumns }) => {
  return (
    <td tabIndex={0} role='gridcell' style={{ whiteSpace: wrapColumns ? 'unset' : 'nowrap' }}>
      {children}
    </td>
  )
}

export default Cell
