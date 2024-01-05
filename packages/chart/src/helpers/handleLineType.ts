export const handleLineType = lineType => {
  switch (lineType) {
    case 'dashed-sm':
      return '5 5'
    case 'Dashed Small':
      return '5 5'
    case 'dashed-md':
      return '10 5'
    case 'Dashed Medium':
      return '10 5'
    case 'dashed-lg':
      return '15 5'
    case 'Dashed Large':
      return '15 5'
    default:
      return 0
  }
}
