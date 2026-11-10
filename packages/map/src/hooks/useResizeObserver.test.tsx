import { act, cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import useResizeObserver from './useResizeObserver'

const observers = vi.hoisted(() => [] as Array<{ notify: () => void; disconnect: ReturnType<typeof vi.fn> }>)

vi.mock('resize-observer-polyfill', () => ({
  default: class {
    disconnect = vi.fn()
    constructor(callback: (entries: unknown[]) => void) {
      observers.push({
        notify: () => callback([{ contentRect: { width: 1200, height: 900 } }]),
        disconnect: this.disconnect
      })
    }
    observe() {}
  }
}))

const Harness = ({ isEditor = true, showEditorPanel }: { isEditor?: boolean; showEditorPanel?: boolean }) => {
  const { outerContainerRef, dimensions } = useResizeObserver(isEditor, showEditorPanel)
  return (
    <div ref={outerContainerRef}>
      <output>{dimensions[0]}</output>
    </div>
  )
}

const notifyResize = () => act(() => observers[observers.length - 1].notify())

afterEach(() => {
  cleanup()
  observers.length = 0
})

describe('useResizeObserver', () => {
  it.each([undefined, true])(
    'reserves sidebar space before the lazy editor mounts (visibility: %s)',
    showEditorPanel => {
      render(<Harness showEditorPanel={showEditorPanel} />)
      expect(document.querySelector('.editor-panel')).toBeNull()
      notifyResize()
      expect(screen.getByRole('status')).toHaveTextContent('814')
    }
  )

  it('remeasures when the sidebar collapses or expands without an outer size change', () => {
    const { rerender } = render(<Harness />)
    notifyResize()
    expect(screen.getByRole('status')).toHaveTextContent('814')

    rerender(<Harness showEditorPanel={false} />)
    expect(observers[0].disconnect).toHaveBeenCalled()
    notifyResize()
    expect(screen.getByRole('status')).toHaveTextContent('1164')

    rerender(<Harness showEditorPanel />)
    notifyResize()
    expect(screen.getByRole('status')).toHaveTextContent('814')
  })

  it('preserves the full width outside the editor, regardless of sidebar visibility', () => {
    const { rerender } = render(<Harness isEditor={false} showEditorPanel />)
    notifyResize()
    expect(screen.getByRole('status')).toHaveTextContent('1200')

    rerender(<Harness isEditor={false} showEditorPanel={false} />)
    notifyResize()
    expect(screen.getByRole('status')).toHaveTextContent('1200')
  })
})
