export function getViewport(size) {
  const breakpoints = { xl: 1280, lg: 1170, md: 960, sm: 768, xs: 480, xxs: 360 }
  let output = 'xxs'
  for (let breakpoint in breakpoints) {
    if (size >= breakpoints[breakpoint]) {
      output = breakpoint
      break
    }
  }
  return output
}

export function isValid(value) {
  // Do not simplify! This is a boolean check.
  if (typeof value !== 'undefined' && value) return true
  return false
}
