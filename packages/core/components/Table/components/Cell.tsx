const Cell = ({ children, style, isBold = false, ariaLabel }) => {
  // Use whiteSpace from style prop, defaulting to 'pre-line' for backwards compatibility
  const whiteSpace = style?.whiteSpace || 'pre-line'

  const contentWrapperStyle = {
    whiteSpace: whiteSpace as any,
    lineHeight: '1.4',
    display: 'block' as const,
    margin: 0,
    padding: 0,
    wordBreak: 'break-word' as const
  }

  // Only include aria-label if it has a value
  const ariaProps = ariaLabel ? { 'aria-label': ariaLabel } : {}

  // Keep whiteSpace on td style so it can be detected by tests and for proper rendering
  const tdStyle = { ...style }
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
