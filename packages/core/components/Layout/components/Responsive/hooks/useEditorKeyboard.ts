import { useEffect, useCallback } from 'react'

interface UseEditorKeyboardProps {
  isEditor: boolean
  breakpoints: string[]
  os: 'Win' | 'MacOS' | null
  setDisplayPanel: (value: boolean | ((prev: boolean) => boolean)) => void
  setDisplayGrid: (value: boolean | ((prev: boolean) => boolean)) => void
  viewportPreviewController: (breakpoint: string) => void
  resetPreview: () => void
}

/**
 * Hook to handle keyboard shortcuts for editor mode
 */
export const useEditorKeyboard = ({
  isEditor,
  breakpoints,
  os,
  setDisplayPanel,
  setDisplayGrid,
  viewportPreviewController,
  resetPreview
}: UseEditorKeyboardProps) => {
  const onKeypress = useCallback(
    (key: KeyboardEvent) => {
      if (!isEditor) return

      // Ctrl+L: Toggle panel
      if (key.code === 'KeyL' && key.ctrlKey) {
        setDisplayPanel(display => !display)
      }

      // Command/Alt + Number: Select viewport
      const viewportCommandKey = os === 'MacOS' ? key.metaKey : key.altKey
      if (viewportCommandKey) {
        const keyIndex = key.key

        // Validates that the hotkey pressed is a number, and that
        // the number is within the range of the provided breakpoint list range.
        if (!isNaN(Number(keyIndex))) {
          if (Number(keyIndex) <= breakpoints.length) {
            key.preventDefault()
            viewportPreviewController(breakpoints[Number(keyIndex) - 1])
          }
        }
      }

      // G: Toggle grid, R: Reset preview
      if (!viewportCommandKey) {
        if (key.code === 'KeyG') setDisplayGrid(display => !display)
        if (key.code === 'KeyR') resetPreview()
      }
    },
    [isEditor, breakpoints, os, setDisplayPanel, setDisplayGrid, viewportPreviewController, resetPreview]
  )

  // Set and clean up the event listener for the hotkeys
  useEffect(() => {
    document.addEventListener('keydown', onKeypress)
    return () => document.removeEventListener('keydown', onKeypress)
  }, [onKeypress])
}
