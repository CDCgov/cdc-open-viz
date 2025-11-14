const Cell = ({ children, style, isBold = false, ariaLabel }) => {
  const contentWrapperStyle = {
    whiteSpace: 'pre-line' as const,
    lineHeight: '1.4',
    display: 'block' as const,
    margin: 0,
    padding: 0,
    wordBreak: 'break-word' as const
  }

  // Only include aria-label if it has a value
  const ariaProps = ariaLabel ? { 'aria-label': ariaLabel } : {}

  // Remove whiteSpace from td style since we're applying it to the wrapper
  const tdStyle = { ...style }
  delete tdStyle.whiteSpace
  delete tdStyle.textOverflow

  return (
    <td {...ariaProps} role='gridcell' style={tdStyle}>
      <div style={contentWrapperStyle}>
        {isBold ? <strong>{children}</strong> : children}
      </div>
    </td>
  )
}

export default Cell
