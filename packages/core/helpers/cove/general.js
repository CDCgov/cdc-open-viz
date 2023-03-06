export function getViewport(size) {
  const viewports = { 'lg': 1280, 'md': 992, 'sm': 768, 'xs': 576, 'xxs': 350 }
  let result = 'xl'
  if (size > 1200) return result
  for (let viewport in viewports)
    if (size <= viewports[viewport]) return viewport
}
