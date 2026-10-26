import { createRoot } from 'react-dom/client'

export type DevVisualizationContainer = Element & { coveUnmount?: () => void }

// The shared dev template replaces these containers when switching examples.
// Keep an explicit cleanup hook so React can release effects before DOM removal.
export const createDevRoot = (container: DevVisualizationContainer) => {
  container.coveUnmount?.()
  const root = createRoot(container)
  const unmount = () => {
    if (container.coveUnmount !== unmount) return
    delete container.coveUnmount
    root.unmount()
  }
  container.coveUnmount = unmount
  return root
}
