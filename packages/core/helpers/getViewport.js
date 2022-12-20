export default function getViewport(size) {
  let result = 'lg'

  const viewports = {
    lg: 1200,
    md: 992,
    sm: 768,
    xs: 576,
    xxs: 350
  }

  if (size > 1200) return result

  for (let viewport in viewports) {
    if (size <= viewports[viewport]) {
      result = viewport
    }
  }

  return result
}
