import { useState, useCallback, useRef } from 'react'
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

  // Keep isEditor fresh in the observer callback without recreating the observer
  const isEditorRef = useRef(isEditor)
  isEditorRef.current = isEditor

  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  const outerContainerRef = useCallback(node => {
    // Tear down any previous observer (node swap or unmount)
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect()
      resizeObserverRef.current = null
    }

    if (node !== null) {
      resizeObserverRef.current = new ResizeObserver(entries => {
        for (let entry of entries) {
          let { width, height } = entry.contentRect

          const editorIsOpen = isEditorRef.current && !!document.querySelector('.editor-panel:not(.hidden)')
          width = editorIsOpen ? width - EDITOR_WIDTH : width

          // Account for 1rem padding in editor mode
          width = width - (isEditorRef.current ? 36 : 0)

          const newViewport = getViewport(width)

          setCurrentViewport(newViewport)
          setVizViewport(newViewport)
          setDimensions([width, height])
        }
      })
      resizeObserverRef.current.observe(node)
    }

    setContainer(node)
  }, [])

  return {
    resizeObserver: resizeObserverRef.current,
    dimensions,
    currentViewport,
    vizViewport,
    outerContainerRef,
    container
  }
}

export default useResizeObserver
