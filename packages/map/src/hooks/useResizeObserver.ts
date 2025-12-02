import { useState, useCallback, useEffect } from 'react'
import { type ViewPort } from '@cdc/core/types/ViewPort'
import { type DimensionsType } from '@cdc/core/types/Dimensions'
import { EDITOR_WIDTH } from '@cdc/core/helpers/constants'
import getViewport from '@cdc/core/helpers/getViewport'
import ResizeObserver from 'resize-observer-polyfill'

export const useResizeObserver = (isEditor: boolean) => {
  const [dimensions, setDimensions] = useState<DimensionsType>([0, 0])
  const [currentViewport, setCurrentViewport] = useState<ViewPort>(null)
  const [vizViewport, setVizViewport] = useState<ViewPort>(null)
  const [container, setContainer] = useState<HTMLElement | null>(null)

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect

      const editorIsOpen = isEditor && !!document.querySelector('.editor-panel:not(.hidden)')
      width = editorIsOpen ? width - EDITOR_WIDTH : width

      const newViewport = getViewport(width)

      setCurrentViewport(newViewport)
      setVizViewport(newViewport)

      setDimensions([width, height])
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    setContainer(node)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return { resizeObserver, dimensions, currentViewport, vizViewport, outerContainerRef, container }
}

export default useResizeObserver
