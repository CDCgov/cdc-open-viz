export function getViewport(size) {
  const viewports = { 'xxs': 360, 'xs': 480, 'sm': 768, 'md': 960, 'lg': 1170, 'xl': 1280 }

  for (let viewport in viewports)
    if (size >= viewports[viewport]) return viewport
}
