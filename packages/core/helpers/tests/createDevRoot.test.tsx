import React, { StrictMode, useEffect } from 'react'
import { act } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { createDevRoot, type DevVisualizationContainer } from '../createDevRoot'

describe('createDevRoot', () => {
  it('cleans up effects while the outgoing container is still attached', () => {
    const container: DevVisualizationContainer = document.createElement('div')
    document.body.appendChild(container)
    const cleanup = vi.fn()
    const onEvent = vi.fn()
    const Listener = () => {
      useEffect(() => {
        window.addEventListener('dev-root-test', onEvent)
        return () => {
          cleanup(container.isConnected)
          window.removeEventListener('dev-root-test', onEvent)
        }
      }, [])
      return <div>Current visualization</div>
    }

    const root = createDevRoot(container)
    act(() =>
      root.render(
        <StrictMode>
          <Listener />
        </StrictMode>
      )
    )
    cleanup.mockClear()
    window.dispatchEvent(new Event('dev-root-test'))
    expect(onEvent).toHaveBeenCalledTimes(1)

    const unmount = container.coveUnmount!
    act(() => unmount())
    expect(cleanup).toHaveBeenCalledExactlyOnceWith(true)
    expect(container).toBeEmptyDOMElement()
    expect(container.coveUnmount).toBeUndefined()
    window.dispatchEvent(new Event('dev-root-test'))
    expect(onEvent).toHaveBeenCalledTimes(1)

    act(() => unmount())
    expect(cleanup).toHaveBeenCalledTimes(1)
    container.remove()
  })

  it('releases a previous root when the same container is mounted again', () => {
    const container: DevVisualizationContainer = document.createElement('div')
    document.body.appendChild(container)
    const cleanup = vi.fn()
    const Visualization = () => {
      useEffect(() => cleanup, [])
      return <div>Original</div>
    }

    const original = createDevRoot(container)
    act(() => original.render(<Visualization />))
    const oldUnmount = container.coveUnmount!

    act(() => {
      const replacement = createDevRoot(container)
      replacement.render(<div>Replacement</div>)
    })
    expect(cleanup).toHaveBeenCalledTimes(1)
    expect(container).toHaveTextContent('Replacement')

    act(() => oldUnmount())
    expect(container).toHaveTextContent('Replacement')
    act(() => container.coveUnmount?.())
    expect(container).toBeEmptyDOMElement()
    container.remove()
  })
})
