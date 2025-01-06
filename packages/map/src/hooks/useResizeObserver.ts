import { useState } from 'react'
import { type ViewPort } from '@cdc/core/types/ViewPort'
import { type DimensionsType } from '@cdc/core/types/Dimensions'
import getViewport from '@cdc/core/helpers/getViewport'
import ResizeObserver from 'resize-observer-polyfill'

export const useResizeObserver = (isEditor: boolean) => {
  const [dimensions, setDimensions] = useState<DimensionsType>([0, 0])
  const [currentViewport, setCurrentViewport] = useState<ViewPort>('lg')

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      let newViewport = getViewport(entry.contentRect.width)

      let editorWidth = 350

      setCurrentViewport(newViewport)

      if (isEditor) {
        width = width - editorWidth
      }
      setDimensions([width, height])
    }
  })

  return { resizeObserver, dimensions, currentViewport }
}

export default useResizeObserver
