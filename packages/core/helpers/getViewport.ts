import { ViewPort } from '../types/ViewPort'

export const viewports = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
  xxs: 350
}

export default function getViewport(size): ViewPort {
  let result: ViewPort = 'lg'

  if (size > 1200) return result

  for (let viewport in viewports) {
    if (size <= viewports[viewport]) {
      result = viewport as ViewPort
    }
  }

  return result
}
