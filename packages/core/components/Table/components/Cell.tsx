const Cell = ({ children, style, isBold = false }) => {
  const formatValue = (value: string | number) => {
    // Check if the value is a number
    const isNumber = (val: string | number): val is number => {
      return typeof val === 'number' || !isNaN(Number(val))
    }

    // If the value is a number, format it with commas
    if (isNumber(value)) {
      return new Intl.NumberFormat().format(Number(value))
    }

    // Return the value as a string if it's not a number
    return value.toString()
  }

  return (
    <td tabIndex={0} role='gridcell' style={style}>
      {isBold ? <strong>{formatValue(children)}</strong> : formatValue(children)}
    </td>
  )
}

export default Cell
