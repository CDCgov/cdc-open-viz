export const getGradientLegendWidth = (containerWidth: number, currentViewport: string): number => {
  const newWidth = Number(containerWidth)
  switch (currentViewport) {
    case 'lg':
      return newWidth / 3
    case 'md':
      return newWidth / 2
    case 'sm':
    case 'xs':
    case 'xxs':
      return newWidth / 1.4
    default:
      return newWidth
  }
}
